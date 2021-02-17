class Dustbin {
   constructor(x, y,width,height) {
     var options = {
       'isStatic': true,
       'density':1.0,
       'friction': 1.0,
       'restitution':0.8
     };
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
     this.image = loadImage("dustbin.png");
     this.lwall = Bodies.rectangle(623,475,10,100,options);
     this.rwall = Bodies.rectangle(827,475,10,130,options);
     World.add(world, this.lwall);
     World.add(world, this.rwall);
   };
   display(){
     var pos = this.body.position;
     push();
     translate(pos.x, pos.y);
     imageMode(CENTER)
     image(this.image,0, 0, this.width, this.height);
     pop();
   };
 };
 