import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Keg } from './../keg.model';

@Component({
  selector: 'app-keg-edit',
  templateUrl: './keg-edit.component.html',
  styleUrls: ['./keg-edit.component.css']
})
export class KegEditComponent {
  @Input() childKegEdit: Keg;
  @Output() doneSender = new EventEmitter();

  done() {
    this.doneSender.emit();
  }

}
