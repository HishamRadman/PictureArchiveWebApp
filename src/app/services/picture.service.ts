import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpSentEvent } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpUploadProgressEvent } from '@angular/common/http/src/response';

@Injectable({
  providedIn: 'root',
})
export class PictureService {

  constructor(private http: HttpClient) { }

  public upload(files: FileList): Observable<HttpEvent<HttpUploadProgressEvent>> {
    const uploadData = new FormData();

    let i = 0;
    Array.from(files).forEach((file) => {
      uploadData.append(i.toString(), file);
      i += 1;
    });

    return this.http.post<any>(`${environment.apiUri}/picture/upload`, uploadData, {
      reportProgress: true,
      observe: 'events',
    }).pipe();
  }

  public getPictureRefs(amount?: number, offset: number = 0): Observable<string[]> {
    // Request data and return as observable
    return this.http.get<string[]>(`${environment.apiUri}/picture/?amount=${amount}&offset=${offset}`).pipe();
  }
}
