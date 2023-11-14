import { HttpClient, HttpEvent, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SerpAPIService {

  constructor(private http : HttpClient) { }

  getDocTypeDataField(param:any) {
    return this.http
      .get<any>(`https://serpapi.com/search.json?engine=google&q=coffee&api_key='AIzaSyA8WIHn1R6CjNAl9NNQW4NHE9geCwDQ1rY'`, {
        headers: {
          'Content-Type': 'application/json',
          "Access-Control-Allow-Origin": "*"

        },
      })
      .pipe(
        tap((data) => {
          if (data.statusCode == 200) {
            JSON.stringify(data);
          }
        })
      );
  }
  getAnswer(data:any){
    return this.http
    .post<any>(
      `https://deploy-llm.azurewebsites.net/inferencing/question_response`,
      data = data
    )
    .pipe(
      tap((data) => {
       return data;
      })
    );
  }
  getResponse(data:any){
    return this.http
    .post<any>(
      `https://demo-llm2.azurewebsites.net/inferencing/question_response`,
      data = data
    )
    .pipe(
      tap((data) => {
       return data;
      })
    );
  }
  // uploadFile(data:any){
  //   return this.http
  //   .post<any>(
  //     `https://demo-poc-1.azurewebsites.net/api/HttpTriggerGetData?`,
  //     data = data
  //   )
  //   .pipe(
  //     tap((data) => {
  //      return data;
  //     })
  //   );
  // }
  uploadFile(files: File[]): Observable<HttpEvent<any>> {
    const formData = new FormData();

    for (const file of files) {
      formData.append('file', file);
    }

    const req = new HttpRequest('POST', 'https://demo-poc-1.azurewebsites.net/api/HttpTriggerGetData?', formData, {
      reportProgress: true
    });

    return this.http.request(req);
  }
}
