import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TypeformService {

  constructor(private http:HttpClient) { }

  /**
   * please note that i was able to get this working for development 
   * purposes, however I do not believe that i would like to use this method 
   * for production purposes.
   * 
   * to get working in development I used a proxy in angular
   * 
   * @param responseId the response id from the webhook
   */
  getResponse(responseId:string){
    const url = `https://api.typeform.com/forms/g740qf/responses?included_response_ids=${responseId}`
    const headers = {
      'authorization': `bearer <MY TOKEN HERE>`
    }
    this.http.get(url, {headers}).subscribe(r=>{
      console.log(r)
    })
  }
}
