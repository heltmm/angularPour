export class Keg {
  empty: boolean = false;

  constructor(
    public name: string,
    public brewery: string,
    public origin: string,
    public style: string,
    public abv: number,
    public ibu: number,
    public servingSize: number,
    public price: number,
    public kegVol: number,
    public tap: number
  ){}

  markEmpty(){
    this.empty = true
  }

}

let kegs: Keg[] = [];
  kegs.push(new Keg('Fresh Squeezed', 'Deschutes', 'Bend OR', 'IPA', 6.4, 60, 16, 6, 1984, 1));
  kegs.push(new Keg('Delerium Tremens', 'Delerium', 'Belgium', 'Belgian Strong Ale', 8.5, 26, 12, 8, 992, 2));
  kegs.push(new Keg('Shower Beer', 'Champion', 'Charlotesville, Va', 'Czech Pils', 4.5, 35, 16, 5, 1984, 3));
  kegs.push(new Keg('Accumulation', 'New Belgium', 'Ft. Collins, CO', 'White IPA', 6.2, 55, 16, 6, 1984, 4));

console.log(kegs);
