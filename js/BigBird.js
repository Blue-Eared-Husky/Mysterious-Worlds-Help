class BigBird{
    constructor(){
        this.bird = createSprite(width/2,50);
        this.bird.addAnimation("left",birdImg);
        this.bird.addAnimation("right",birdImg);
        this.bird.scale = 2;
        this.health = 40;
        boss = this.bird;
        enemies.push(this.bird);
    }
}