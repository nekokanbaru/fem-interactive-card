import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { TransferDetailsService } from '../transfer-details.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  // cardholderName = '';

  holder = {
    cardholderName: '',
    cardNumber: '',
    mm: '',
    yy: '',
    cvc: '',
  };

  numberReg = /[0-9]/;

  cardArray = [''];

  @ViewChild('f') cardForm!: NgForm;

  constructor(private transferDetailsService: TransferDetailsService) {}

  ngOnInit() {}

  nameChange() {
    this.transferDetailsService.nameUpdated.emit(this.holder.cardholderName);
  }

  numberChange() {
    this.transferDetailsService.numberUpdated.emit(this.holder.cardNumber);
    // if (
    //   this.holder.cardNumber.charAt(this.holder.cardNumber.length - 1) == '4'
    // ) {
    //   this.holder.cardNumber = this.holder.cardNumber.slice(0, -1);
    //   console.log(this.holder.cardNumber);
    // }

    if (
      this.holder.cardNumber.length == 4 ||
      this.holder.cardNumber.length == 9 ||
      this.holder.cardNumber.length == 14
    ) {
      this.holder.cardNumber += ' ';
    }
  }

  mmChange() {
    this.transferDetailsService.mmUpdated.emit(this.holder.mm);
  }

  yyChange() {
    this.transferDetailsService.yyUpdated.emit(this.holder.yy);
  }

  cvcChange() {
    this.transferDetailsService.cvcUpdated.emit(this.holder.cvc);
  }

  onSubmit() {}
}
