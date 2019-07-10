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
  base = '';
  currency = '';
  rate = 1;
  money = 0;

  constructor(private currencyConverterService: CurrencyConverterService, private fb: FormBuilder) {
    this.currencies = this.currencyConverterService.getCurrencies();

    this.form = this.fb.group({
      currency1: '',
      amount1: '',
      currency2: '',
      amount2: ''
    });
  }

  onChangeCurrency(val) {
    this.currency = val;
    this.getRate(this.base, this.currency);
    this.updateResult();
  }

  onChangeBase(val) {
    this.base = val;
    this.getRate(this.base, this.currency);
    this.updateResult();

  }

  getRate(base, cur) {
    this.currencyConverterService.getRates(base, cur).subscribe(value => {
      this.rate = value['rates'][cur] ? value['rates'][cur] : 1;
    });
  }

  updateResult() {
    console.log(this.rate, this.money)
    const calculated = +this.rate * +this.money;
    this.form.get('amount2').setValue(calculated);
  }

  ngOnInit() {
    this.form.get('amount1').valueChanges.subscribe((item) => {
      this.money = item;
      this.updateResult();
    })
  }
}
