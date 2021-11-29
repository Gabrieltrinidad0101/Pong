import Pallas from "../gameObjects.js/Pallas.js";
class Scene_play extends Phaser.Scene{
    constructor(){
        super({key: "Scene_play"})
        this.pointOne = document.getElementById("1")
        this.pointTwo = document.getElementById("2") 

        this.pointOneNumber = 0
        this.pointTwoNumber = 0
    }

    create = _=>{
        const center_height = this.sys.game.config.height/2
        const center_width = this.sys.game.config.width/2;
        const width = this.sys.game.config.width
    
        const separator = this.add.image(center_width,center_height, "separator")
        separator.scaleY = 3
        this.left = new Pallas(this,30,center_height,"left")
        this.right = new Pallas(this,width-30,center_height,"right")

        this.physics.world.setBoundsCollision(false,false,true,true)
        this.ball = this.physics.add.image(center_width,center_height,"ball")
        this.ball.setCollideWorldBounds(true)
        this.ball.setBounce(1)
        this.ball.setVelocityX(-200)

        this.physics.add.collider(this.ball,this.left,this.touchPallas,null,this)
        this.physics.add.collider(this.ball,this.right,this.touchPallas,null,this)

        this.cursor = this.input.keyboard.createCursorKeys();

        const keyboard = Phaser.Input.Keyboard.KeyCodes
        this.cursor_W = this.input.keyboard.addKey(keyboard.W);
        this.cursor_S = this.input.keyboard.addKey(keyboard.S);

    }

    touchPallas = _=>{
        this.ball.setVelocityY(Phaser.Math.Between(-120,120))
    }   

    update(){
        const center_height = this.sys.game.config.height/2
        const center_width = this.sys.game.config.width/2;
        const width = this.sys.game.config.width
        if(this.ball.x < 0){
            this.pointTwo.innerText = this.pointOneNumber += 1
            this.ball.setPosition(center_width,center_height)
        }

        if(this.ball.x > width){
            this.pointOne.innerText = this.pointTwoNumber += 1
            this.ball.setPosition(center_width,center_height)
        }

        if(this.cursor.down.isDown){
            this.right.body.setVelocityY(300)
        }else if(this.cursor.up.isDown){
            this.right.body.setVelocityY(-300)
        }else{
            this.right.body.setVelocityY(0)
        }

        if(this.cursor_S.isDown){
            this.left.body.setVelocityY(300)
        }else if(this.cursor_W.isDown){
            this.left.body.setVelocityY(-300)
        }else{
            this.left.body.setVelocityY(0)
        }
    }
}

export default Scene_play;