import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  NgForm,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { TransferDetailsService } from '../transfer-details.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  animations: [
    //not working
    trigger('showMessage', [
      state(
        'visible',
        style({
          opacity: 1,
        })
      ),
      state(
        'hidden',
        style({
          opacity: 0,
        })
      ),
      transition('hidden => visible', animate('1s ease-in')),
    ]),
  ],
})
export class FormComponent implements OnInit {
  // cardholderName = '';

  cardForm!: FormGroup;

  numberReg = /[0-9]/;

  cardArray = [''];

  isSubmitted = false;

  // @ViewChild('f') cardForm!: NgForm;

  constructor(private transferDetailsService: TransferDetailsService) {}

  ngOnInit() {
    this.cardForm = new FormGroup({
      cardholderName: new FormControl(null, [
        Validators.required,
        this.isNameValid.bind(this),
      ]),
      cardNumber: new FormControl(null, [Validators.required]),
      mm: new FormControl(null, Validators.required),
      yy: new FormControl(null, Validators.required),
      cvc: new FormControl(null, Validators.required),
    });
  }

  nameChange() {
    this.transferDetailsService.nameUpdated.emit(
      this.cardForm.get('cardholderName')?.value
    );
  }

  numberChange() {
    const value = this.cardForm.get('cardNumber')?.value;

    if (value) {
      this.transferDetailsService.numberUpdated.emit(value);
      // this.creditCardValidation(this.cardForm.get('cardNumber')?.value);
    }
    // this.transferDetailsService.numberUpdated.emit(
    //   debugger;
    //   this.cardForm.get('cardNumber')?.value
    // );

    // if (
    //   this.cardForm.get('cardNumber')?.value.length == 4 ||
    //   this.cardForm.get('cardNumber')?.value.length == 9 ||
    //   this.cardForm.get('cardNumber')?.value.length == 14
    // ) {
    //   this.cardForm
    //     .get('cardNumber')
    //     ?.setValue(this.cardForm.get('cardNumber')?.value + ' ');
    // }

    // this.creditCardValidation(this.cardForm.get('cardNumber')?.value);
  }

  mmChange() {
    this.transferDetailsService.mmUpdated.emit(this.cardForm.get('mm')?.value);
  }

  yyChange() {
    this.transferDetailsService.yyUpdated.emit(this.cardForm.get('yy')?.value);
  }

  cvcChange() {
    this.transferDetailsService.cvcUpdated.emit(
      this.cardForm.get('cvc')?.value
    );
  }

  // isCreditCardValid(control: FormControl) {
  //   // if (this.creditCardValidation(control.value) === false) {
  //   //   return { cardIsNotValid: true };
  //   // }
  //   // return null;
  //   let cardnumArray = Array.from(String(control.value), Number);
  //   if (cardnumArray.length > 10) {
  //     return null;
  //   } else {
  //     return { cardIsNotValid: true };
  //   }
  // }

  // creditCardValidation(number: number) {
  //   let cardnumArray = Array.from(String(number), Number);
  //   console.log(cardnumArray.length);
  //   //the credit card has to be between 13 to 19 numbers
  //   // return cardnumArray.length >= 13 ? true : false;
  //   if (cardnumArray.length > 10) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // // for card validation we use the luhn formula
  // let cardnumArray = Array.from(String(number), Number);

  // //the credit card has to be between 13 to 19 numbers
  // if (cardnumArray.length >= 13) {
  //   let lastDigit = cardnumArray.pop(); // step one: drop the last digit

  //   console.log('original array: ' + cardnumArray);
  //   //step two remove the first 6 numbers (bin)
  //   cardnumArray = cardnumArray.splice(6, cardnumArray.length);
  //   console.log('cut array: ' + cardnumArray);
  //   console.log('last digit is: ' + lastDigit);

  //   cardnumArray.reverse(); //step two: reverse the numbers

  //   //step three multiply digits in the odd position
  //   console.log('non multiplied: ' + cardnumArray);

  //   for (let i = 0; i < cardnumArray.length; i++) {
  //     if (i % 2 == 0) {
  //       cardnumArray[i] *= 2;
  //     }
  //   }
  //   console.log('multiplied: ' + cardnumArray);

  //   //step four subtract 9 to numbers over 9

  //   for (let i = 0; i < cardnumArray.length; i++) {
  //     if (cardnumArray[i] > 9) {
  //       cardnumArray[i] -= 9;
  //     }
  //   }
  //   console.log('greater than 9 subtracted by 9: ' + cardnumArray);

  //   //step five add all the numbers together
  //   let sum = 0;
  //   for (let i = 0; i < cardnumArray.length; i++) {
  //     sum += cardnumArray[i];
  //   }
  //   console.log('sum is: ' + sum);

  //   //check digit (mod 10)
  //   let check = sum % 10;
  //   console.log('check digit is: ' + check);

  //   //if the check digit is the same as the original number's last digit, the card is valid
  //   if (check === lastDigit) {
  //     // console.log('card is valid');
  //     return true;
  //   } else {
  //     // console.log('card is invalid');
  //     return false;
  //   }
  // } else {
  //   return false;
  // }
  // }

  isNameValid(control: FormControl) {
    let regexName = /^[a-z ,.'-]+$/i;
    if (regexName.test(control.value)) {
      return null;
    } else {
      return { nameIsNotValid: true };
    }
  }

  onSubmit() {
    console.log('mrk');
    this.isSubmitted = true;
  }

  get formState() {
    return this.isSubmitted ? 'visible' : 'hidden';
  }

  toggleVisible() { //reset form after clicking on continue
    this.isSubmitted = !this.isSubmitted;
    this.cardForm.reset();
  }
}
