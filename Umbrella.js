class Umbrella{
    constructor(x,y){
        var options = {
        isStatic:true
        }
        this.umbrella = Bodies.circle(x,y,50,options);
        this.img = loadImage("image/umbrella.gif");
        this.radius = 50;
        World.add(world,this.umbrella);
    }
    drawUmbrella(){
    var pos = this.umbrella.position;
    imageMode(CENTER);
    image(this.img,pos.x,pos.y,300,300);
    }
}