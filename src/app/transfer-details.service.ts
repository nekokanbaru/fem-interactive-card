import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransferDetailsService {
  constructor() {}

  nameUpdated = new EventEmitter<string>();
  numberUpdated = new EventEmitter<string>();
  mmUpdated = new EventEmitter<string>();
  yyUpdated = new EventEmitter<string>();
  cvcUpdated = new EventEmitter<string>();
}
