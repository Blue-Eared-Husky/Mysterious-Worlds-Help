class Skeleton{
    constructor(x){
        this.skeleton = createSprite(x,height-20,10,10);
        this.skeleton.addAnimation("left",skeletonLeft);
        this.skeleton.addAnimation("right",skeletonRight);
        this.skeleton.scale = 2;
        this.skeleton.setCollider("rectangle",-5,-5,15,30);
        this.health = 3;
    }
}