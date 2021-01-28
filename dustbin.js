class Dustbin extends Parent{
    constructor(x,y,w,h){
      super(x,y,w,h);
      this.image = loadImage("dustbin.png");
    }
   display(){
      //image(this.image,700,400);
      super.display();
   }

}

