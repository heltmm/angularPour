import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedKeg = null;

  masterKegs: Keg[] = [
    new Keg('Fresh Squeezed', 'Deschutes', 'Bend OR', 'IPA', 6.4, 60, 16, 6, 1984, 1),
    new Keg('Delerium Tremens', 'Delerium', 'Belgium', 'Belgian Strong Ale', 8.5, 26, 12, 8, 300, 2),
    new Keg('Shower Beer', 'Champion', 'Charlotesville, Va', 'Czech Pils', 4.5, 35, 16, 5, 1984, 3),
    new Keg('Accumulation', 'New Belgium', 'Ft. Collins, CO', 'White IPA', 6.2, 55, 16, 6, 1984, 4)
  ];

  editKeg(kegToEdit) {
    this.selectedKeg = kegToEdit;
  }

  finishedEditing() {
    this.selectedKeg = null
  }

  addKeg(newKegFromChild: Keg) {
    this.masterKegs.push(newKegFromChild);
  }

}
