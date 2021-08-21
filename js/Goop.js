class Goop{
    constructor(x){
        this.goop = createSprite(x,height-20,10,10);
        this.goop.addAnimation("left",goopLeft);
        this.goop.addAnimation("right",goopRight);
        this.goop.scale = 2;
        this.goop.setCollider("rectangle",0,0,10,10);

        this.health = 1;
    }
}