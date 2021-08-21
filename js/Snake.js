class Snake{
    constructor(x){
        this.snake = createSprite(x,height-20);
        this.snake.addImage(snakeImg);
        this.snake.scale = 2;
        this.snake.lifetime = 30;

        snakes.push(this.snake);
        enemies.push(this.snake);
    }
}