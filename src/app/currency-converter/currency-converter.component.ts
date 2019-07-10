import {Component, OnInit} from '@angular/core';
import {CurrencyConverterService} from '../currency-converter.service';
import {FormArray, FormBuilder, FormControl} from '@angular/forms';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {
  myCurrencies = [];
  currencies;
  form;
  base = '';
  currency = '';
  rates;
  sum: number;

  constructor(private currencyConverterService: CurrencyConverterService, private fb: FormBuilder) {
    this.currencies = this.currencyConverterService.getCurrencies();

    this.form = this.fb.group({
      currencies: fb.array([]),
      base: ''
    });
  }

  onChangeBase(val: HTMLSelectElement) {
    this.base = val.value;
    this.getNewRates(this.base, this.form.get('currencies'));
    this.updateMoney();
  }

  getNewRates(base, symbols) {
    this.currencyConverterService.getRates(base, symbols).subscribe(value => {
      this.rates = value.rates;
    });
  }

  onAddCurrency(currencyName: HTMLSelectElement, currencyAmount: HTMLInputElement) {
    (this.form.get('currencies') as FormArray).push(new FormControl({
        currencyName: currencyName.value,
        currencyAmount: currencyAmount.value
      })
    );

    this.getNewRates(this.base, this.form.get('currencies'));
  }

  updateMoney() {

    if (this.rates) {
      const myCurrencies = this.form.get('currencies').controls;
      for (const item of myCurrencies) {
        console.log(this.rates[item.value.currencyName]);
        console.log(item.value.currencyAmount, this.rates[item.value.currencyName]);
        this.sum = this.sum + (+item.value.currencyAmount) * (+this.rates[item.value.currencyName]);
      }
    }
  }

  ngOnInit() {

  }

}
