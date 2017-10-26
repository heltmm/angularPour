export class Keg {
  kegVol: number = this.initVol;
  kegPercent: number = 100;
  graphic: string = "/src/assets/images/kegFull.png"

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
    };
  }

  stat() {
    this.kegPercent = Math.floor((this.kegVol / this.initVol) * 100);

    if(this.kegPercent >= 75){
      this.graphic = "/src/assets/images/kegFull.png";
    } else if (this.kegPercent < 75 && this.kegPercent >= 50) {
      this.graphic = "/src/assets/images/kegGood.png";
    } else if ((this.kegPercent < 50 ) && (this.kegVol > this.servingSize * 10)) {
      this.graphic = "/src/assets/images/kegHalf.png";
    } else if ((this.kegVol <= this.servingSize * 10) && (this.kegPercent > 0)) {
      this.graphic = "/src/assets/images/kegDone.png";
    }
  }

}
