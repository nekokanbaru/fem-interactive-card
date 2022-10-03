import { Component, Input, OnInit } from '@angular/core';
import { TransferDetailsService } from '../transfer-details.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  holder = 'Jane Appleseed';
  number = '0000000000000000';
  mm = '00';
  yy = '00';
  cvc = '000';

  constructor(private transferDetailsService: TransferDetailsService) {}

  ngOnInit() {
    this.transferDetailsService.nameUpdated.subscribe((name: string) => {
      this.holder = name;
    });

    this.transferDetailsService.numberUpdated.subscribe((number: string) => {
      this.number = number;
    });

    this.transferDetailsService.mmUpdated.subscribe((mm: string) => {
      this.mm = mm;
    });

    this.transferDetailsService.yyUpdated.subscribe((yy: string) => {
      this.yy = yy;
    });

    this.transferDetailsService.cvcUpdated.subscribe((cvc: string) => {
      this.cvc = cvc;
    });
  }
}
