import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient, private sanitizer: DomSanitizer) { }
  
  getImg(imgUrl: any) {
    const url = `https://localhost:3000/api/getImg/${imgUrl}`;
    return this.http.get(url);

    // this.http.get(url, {responseType: 'blob'}).pipe(map(blob => {
    //   var urlCreator = window.URL;
    //   return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob));
    // })).subscribe(res => {
    //   console.log(res);
    // }, err => {
    //   console.log('err', err);
    // });
    // const url = `https://localhost:8000/api/getImg/${imgUrl}`;
    // try {
    //   this.http.get(url, {
    //     headers: { 'Content-Type': 'image/jpg' },
    //     responseType: 'blob'
    //   }).pipe(map((res: any) => {
    //     return new Blob([res._body], {
    //       type: res.headers.get("Content-Type")
    //     });
    //   }), map(blob => {
    //     var urlCreator = window.URL;
    //     debugger
    //     return this.sanitizer.bypassSecurityTrustUrl(urlCreator.createObjectURL(blob))
    //   })).subscribe(res => console.log(res), err => console.log('err', err))
    // } catch (error) {
    //   console.log('errors', error);
    // }
  }

  getByUsername(username: string) {
    const url = `http://localhost:3000/api/user/${username}`;
    const res = this.http.get(url);
    return res;
  }

  getUserData(id: number): any {
    const url = `http://localhost:3000/api/ig/${id}`;
    return this.http.get(url);
  }
}