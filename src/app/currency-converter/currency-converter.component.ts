import {Component, OnInit} from '@angular/core';
import {CurrencyConverterService} from '../currency-converter.service';
import {FormBuilder} from '@angular/forms';

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
  rate;
  money;

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
  }

  onChangeBase(val) {
    this.base = val;
    this.getRate(this.base, this.currency);

  }

  onChangeCurrencyInput(val) {
    this.money = val;

    this.updateResult();
  }

  getRate(base, cur) {
    this.currencyConverterService.getRates(base, cur).subscribe(value => {
      this.rate = value.rates[cur];
    });
  }

  updateResult() {
    const calculated = +this.rate * +this.money;
    this.form.get('amount2').setValue(calculated);
  }

  ngOnInit() {

  }

}
