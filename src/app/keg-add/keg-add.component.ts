import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'app-keg-add',
  templateUrl: './keg-add.component.html',
  styleUrls: ['./keg-add.component.css']
})
export class KegAddComponent {
  @Output() newKegSender = new EventEmitter();

  new(name: string, brewery: string, origin: string, style: string, abv: number, ibu: number, servingSize: number, price: number, initVol: number, tap: number) {
    var newKegToAdd: Keg = new Keg(name, brewery, origin, style, abv, ibu, servingSize, price, initVol, tap )
    this.newKegSender.emit(newKegToAdd);
  }
}
