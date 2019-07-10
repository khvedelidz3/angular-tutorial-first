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
    this.updateResult('amount2');
  }

  onChangeBase(val) {
    this.base = val;
    this.getRate(this.base, this.currency);
    this.updateResult('amount1');
  }

  onChange1Input(val) {
    this.money = val;

    this.updateResult('amount1');
  }

  onChange2Input(val) {
    this.money = val;

    this.updateResult('amount2');
  }

  getRate(base, cur) {
    this.currencyConverterService.getRates(base, cur).subscribe(value => {
      this.rate = value['rates'][cur];
    });
  }

  updateResult(amount) {
    if (this.rate && this.money) {
      const calculated = +this.rate * +this.money;
      if (amount === 'amount2') {
        this.form.get('amount1').setValue(calculated);
      } else {
        this.form.get('amount2').setValue(calculated);
      }
    }
  }

  ngOnInit() { }
}
