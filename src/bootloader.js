class Bootloader extends Phaser.Scene{
    constructor(){
        super({key: "Bootlader"})
    }

    preload = _=>{
        this.load.on("complete",_=>
            this.scene.start("Scene_play")
        )
        this.load.image("ball","./assets/ball.png")
        this.load.image("left","./assets/left_pallete.png")
        this.load.image("right","./assets/right_pallete.png")
        this.load.image("separator","./assets/separator.png")
    }

}

export default Bootloader;