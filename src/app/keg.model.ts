export class Keg {
  kegStatus: number = 3;
  kegVol: number = this.initVol;

  constructor(
    public name: string,
    public brewery: string,
    public origin: string,
    public style: string,
    public abv: number,
    public ibu: number,
    public servingSize: number,
    public price: number,
    public initVol: number,
    public tap: number
  ){}

  pour(){
    if ((this.kegVol - this.servingSize) >= this.servingSize) {
      this.kegVol -= this.servingSize;
    } else {
      this.kegVol = 0;
      this.kegStatus = 0;
    };
  }

  stat() {
    if ((this.kegVol <= this.initVol / 2) && (this.kegVol > this.servingSize * 10)) {
      this.kegStatus = 2
    } else if ((this.kegVol < this.servingSize * 10) && (this.kegVol > 0)) {
      this.kegStatus = 1
    }
  }

}
