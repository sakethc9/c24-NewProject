class Ball{


constructor(x,y,radius){
var options={
isStatic : false ,
restitution : 0.6 ,
friction:1,
density:0.5 

}

this.body = Bodies.circle(x,y,radius,options)


this.radius = radius ;
World.add(world,this.body);

}

display(){
 ellipseMode(RADIUS);   


ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);



}
}



