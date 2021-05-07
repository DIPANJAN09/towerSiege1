class Pol{
    constructor(x,y,width,height){
    var options={
        //density:50,
        restitution:1

    }
    this.body=Bodies.rectangle(x,y,width,height,options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
    this.image=loadImage("polygon.png")

    }
    display(){
        push();
        imageMode(CENTER);
       translate(this.body.position.x,this.body.position.y)
        image(this.image,0,0,this.width,this.height);
        pop();
    }
}