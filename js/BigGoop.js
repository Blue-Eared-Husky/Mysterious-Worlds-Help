class BigGoop{
    constructor(){
        this.biggoop = createSprite(width/2,height-45);
        this.biggoop.addAnimation("forward",bigGoopFd);
        this.biggoop.addAnimation("left",bigGoopLeft);
        this.biggoop.addAnimation("right",bigGoopRight);
        this.biggoop.scale = 4;
        this.health = 10;
    }
}