import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map, catchError } from 'rxjs/operators'
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  profile: any;

  Records: any = [];

  Payments: any = [];

  ManualBudgetItems: any = [];

  baseURL = 'http://localhost:8080';

  dataChanged$: Observable<boolean>;

  private dataChangeSubject: Subject<boolean>;

  constructor(public http: HttpClient) {
    //console.log('Data Service Provider Initialized');
    this.dataChangeSubject = new Subject<boolean>();
    this.dataChanged$ = this.dataChangeSubject.asObservable();
  }

  //handles extracting only the body of the server response
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

  //handles errors that occur
  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const err = error || '';
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    }
    else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

  /**
   * DATA RETRIEVALS
   */

  //PROFILE DATA
  getProfile(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/kompass/profile').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  createProfile(profile) {
    this.http.post(this.baseURL + "/api/kompass/profile", profile).subscribe(res => {
      this.profile = res,
        this.dataChangeSubject.next(true);
    });
  }
  updateProfile(id, profile) {
    this.http.put(this.baseURL + "/api/kompass/profile/" + id, profile).subscribe(res => {
      this.profile = res,
        this.dataChangeSubject.next(true);
    });
  }
  deleteProfile(profile) {
    this.http.delete(this.baseURL + "/api/kompass/profile/" + profile._id).subscribe(res => {
      this.profile = res,
        this.dataChangeSubject.next(true);
    });
  }

  //RECORD DATA
  getRecords(): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/kompass/records').pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  createRecord(record) {
    this.http.post(this.baseURL + "/api/kompass/records", record).subscribe(res => {
      this.Records = res,
        this.dataChangeSubject.next(true);
    });
  }
  updateRecord(record) {
    this.http.put(this.baseURL + "/api/kompass/records/" + record._id, record).subscribe(res => {
      this.Records = res,
        this.dataChangeSubject.next(true);
    });
  }
  deleteRecord(record) {
    this.http.delete(this.baseURL + "/api/kompass/records/" + record._id).subscribe(res => {
      this.Records = res,
        this.dataChangeSubject.next(true);
    });
  }

  //PAYMENT DATA
  getRecordPayments(recordID): Observable<object[]> {
    var record = this.http.get(this.baseURL + "/api/kompass/records/" + recordID).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
    //@ts-ignore
    return record.payments;
  }

  //@ts-ignore
  getPayment(id): Observable<object[]> {
    return this.http.get(this.baseURL + '/api/kompass/payments/' + id).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  createPayment(record, payment) {
    record.nextOccurenceDate = this.calcNextOccurenceDate(record);
    this.http.post(this.baseURL + "/api/kompass/payments", payment).subscribe(res => {
      this.Payments = res,
        //@ts-ignore
        record.payments.push(res._id),
        this.updateRecord(record),
        this.dataChangeSubject.next(true);
    });
  }

  calcNextOccurenceDate(record) {
    var currentDate = new Date(record.nextOccurenceDate);
    switch (record.occurenceLevel) {
      case 0: // one time means no next occurence date 
        console.log(currentDate)
        return currentDate;
      case 1: // occur the next day
      console.log(currentDate.setDate(currentDate.getUTCDate() + 1))
        return currentDate.setDate(currentDate.getUTCDate() + 1)
      case 2: // occur next week
      console.log(currentDate.setDate(currentDate.getUTCDate() + 7))
        return currentDate.setDate(currentDate.getUTCDate() + 7)
      case 3: // occur in 2 weeks
      console.log(currentDate.setDate(currentDate.getUTCDate() + 14))
        return currentDate.setDate(currentDate.getUTCDate() + 14)
      case 4: // occur next month
      console.log(currentDate.setDate(currentDate.getUTCMonth() + 1))
        return currentDate.setDate(currentDate.getUTCMonth() + 1)
      case 5: // occur next year
      console.log(currentDate.setDate(currentDate.getUTCFullYear() + 1))
        return currentDate.setDate(currentDate.getUTCFullYear() + 1)
    }
  };
}