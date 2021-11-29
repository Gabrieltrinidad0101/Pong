import Bootloader from "./bootloader.js"
import Scene_play from "./scenes/scenes_play.js"
const config = {
    width: window.innerWidth,
    height: window.innerHeight- 80,
    parent: "container",
    type: Phaser.CANVAS,
    physics: {
        default: "arcade"
    },
    scene: [
        Bootloader,
        Scene_play
    ]
}

new Phaser.Game(config)