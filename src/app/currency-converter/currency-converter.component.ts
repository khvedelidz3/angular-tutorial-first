import { Component, OnInit } from '@angular/core';
import { CurrencyConverterService } from '../currency-converter.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  currencies;
  form;
  query;

  constructor(private currencyConverterService: CurrencyConverterService, private fb: FormBuilder) {
    this.currencies = this.currencyConverterService.getCurrencies();

    this.form = fb.group({
      currency1: '',
      amount1: '',
      currency2: '',
      amount2: ''
    });

    this.query = this.form.get('currency1').value + '&base=' + this.form.get('currency2').value;
  }

  ngOnInit() {

    const action = (value) => {
      console.log(value);
    }
    const Observer = this.currencyConverterService.getRates(t1, 2).subscribe(value => {
      console.log()
    });

    Observer.subscribe({
        next: action,
      });
  }

}
