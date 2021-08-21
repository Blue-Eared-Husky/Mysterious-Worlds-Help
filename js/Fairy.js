class Fairy{
    constructor(x,y){
        this.fairy = createSprite(x,y,10,10);
        this.fairy.addAnimation("left",fairyImg);
        this.fairy.addAnimation("right",fairyImg);
        this.fairy.setCollider("circle",0,0,10);
        this.fairy.scale = 2;
        this.health = 2;
    }
}