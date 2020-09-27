class enemy{
constructor(x,y,width,height){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }

this.body=Bodies.rectangle(x, y, 10, 20,options);
this.width=width;
this.height=height;
this.image=loadImage("image.png");
World.add(world,this.body);

}

display(){
imageMode(CENTER);
image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
}
}




