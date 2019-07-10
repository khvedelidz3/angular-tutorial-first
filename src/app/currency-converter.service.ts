import {Injectable} from '@angular/core';
import {data} from './currencies';
import {HttpClient} from '@angular/common/http';
import {Observable, from} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyConverterService {
  currencies;

  constructor(private http: HttpClient) {
    this.currencies = data;
  }

  getCurrencies() {
    return this.currencies;
  }

  getRates(base, symbols) {
    const query = symbols.controls.reduce((acc, item) => {
      return acc + '&symbols=' + item.value.currencyName;
    }, `base=${base}`);

    const url = `https://api.exchangeratesapi.io/latest?${query}`;
    return this.http.get(url);
  }
}
