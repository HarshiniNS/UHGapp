package com.example.springUHG.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;
import javax.servlet.http.HttpServletRequest;
import java.util.Arrays;
import java.util.Enumeration;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class NPIController {

    @Autowired
    RestTemplate restTemplate;

    @RequestMapping(value = "/npi/search")
    public String getNPI(HttpServletRequest request) {

        Enumeration enumeration = request.getParameterNames();
        Map<String, String> paramMap = new HashMap<>();
        while(enumeration.hasMoreElements()){
            String parameterName = (String)enumeration.nextElement();
            paramMap.put(parameterName, request.getParameter(parameterName));
        }
        UriComponentsBuilder builder = UriComponentsBuilder.fromHttpUrl("https://npiregistry.cms.hhs.gov/api/");

        // traverse the map
        for(String paramName : paramMap.keySet()) {
            builder.queryParam(paramName, paramMap.get(paramName).replaceAll(" ",""));
        }

        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
        HttpEntity<String> entity = new HttpEntity<String>(headers);
        HttpEntity<String> response = restTemplate.exchange(
                builder.toUriString(),
                HttpMethod.GET,
                entity,
                String.class);

        return response.getBody();
    }

}
