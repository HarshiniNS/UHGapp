import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NpiDetailsService } from '../service/npi-details.service';

@Component({
  selector: 'app-parameter-form',
  templateUrl: './parameter-form.component.html',
  styleUrls: ['./parameter-form.component.css']
})
export class ParameterFormComponent implements OnInit{


  npiForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private npiService: NpiDetailsService, private router: Router) {
    this.createNPIForm();
  }
  ngOnInit(): void {
  }

  getErrors(){
    return this.npiService.errors;
  }

  createNPIForm(){
    this.npiForm = this.formBuilder.group({
      enumeration_type: ['', [Validators.required]],  
      option: ['npi',[Validators.required]],
      number: ['', [Validators.pattern('^[0-9]{10}$')]],
      city: ['', [Validators.pattern('^[A-Za-z ]+$')]]
    });
  }

  onSubmit() {
    this.npiService.searchWithParam(this.npiForm.value);
    this.router.navigate(['/results']);
}

}
