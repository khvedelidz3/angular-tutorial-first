import { Injectable } from '@angular/core';
import { data } from './rates';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  result;
  Observer;

  constructor() {
    this.result = this.transformObjectToArray(data.rates);

    this.Observer = new Observable(this.subscribe());
  }

  subscribe() {
    return (subscriber) => {
      let i = 0;

      for (const item of this.result) {
        setTimeout(() => {
          subscriber.next(item);
        }, i * 500);
        i++;
      }
      setTimeout(() => {
        subscriber.complete();
      }, i * 500);
    }
  }

  transformObjectToArray(object) {
    const result = [];
    const keys = Object.keys(object);

    for (const key of keys) {
      const value = object[key];
      const item = {
        currency: key,
        value
      }

      result.push(item);
    }
    return result;
  }
}
