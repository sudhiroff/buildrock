import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, forkJoin } from 'rxjs';
import { environment } from 'src/environments/environment';
import { mergeMap, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  subBreadcrumb = new Subject<any>();

  constructor(private http: HttpClient) { }

  set breadcrumbTitle(text: String) {
    this.subBreadcrumb.next(text);
  }

  public GetUserList(): Observable<any> {
    let obj1 = this.http.get(environment.api.userList);
    let obj2 = this.http.get(environment.api.Role);

    return forkJoin(obj1, obj2);

    // return this.http.get(environment.api.userList)
    //   .pipe(concatMap(result => this.http.get(environment.api.Role)));
  }

  public GetUser(id: String): Observable<any> {
    return this.http.get(environment.api.userList + '/' + id);
  }

  public UpdateUser(id: String, body: Object): Observable<any> {
    return this.http.put(environment.api.userList + '/' + id, body);
  }

  public Signup(body): Observable<any> {
    return this.http.post(environment.api.signup, body);
  }

  public CreateNewRole(body): Observable<any> {
    return this.http.post(environment.api.Role, body);
  }

  public UpdateRole(id, body): Observable<any> {
    return this.http.put(environment.api.Role + '/' + id, body);
  }

  public GetRoles(): Observable<any> {
    return this.http.get(environment.api.Role);
  }

  public GetRole(id): Observable<any> {
    return this.http.get(environment.api.Role + '/' + id);
  }

}
