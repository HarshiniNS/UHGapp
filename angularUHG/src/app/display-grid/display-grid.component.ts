import { Component, OnInit, OnDestroy } from '@angular/core';
import { NpiDetailsService } from '../service/npi-details.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-grid',
  templateUrl: './display-grid.component.html',
  styleUrls: ['./display-grid.component.css']
})
export class DisplayGridComponent implements OnInit, OnDestroy {


  npiresults: any = [];
  subscription: Subscription;
  obs: Observable<any>;
  public sortOptions: any;
  dataSource: any = [];
  loading: boolean;
  displayedColumns: string[] = ['name', 'number', 'address'];
  resultErrorFlag: number = 0;

  constructor(private npiService: NpiDetailsService, private router: Router) { }

  ngOnInit(): void {
      this.loading = true;
      this.obs=this.npiService.getSearchResult();
      
      if(this.obs){
        this.subscription=this.obs.subscribe(
          res=>{
            if(res.result_count==0){
              this.resultErrorFlag=1;
            }
            if(res.Errors){
              this.npiService.errors =res.Errors;
              this.router.navigateByUrl("/");
              return ;
            }
            this.npiresults = res;
            this.npiresults.results.sort((record1,record2)=>{
              if(record1.addresses[0].postal_code == record2.addresses[0].postal_code){
                return 0;
              }
              return record1.addresses[0].postal_code < record2.addresses[0].postal_code?-1:1;
            })
            this.dataSource = this.npiresults;
            this.loading = false;
          },
          error=>{
            this.npiService.errors = error;
            this.router.navigateByUrl("/");
          }
        );
      }else{
        this.router.navigateByUrl("/");
      }
  }

  ngOnDestroy(){
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
