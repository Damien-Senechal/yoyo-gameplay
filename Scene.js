class Scene extends Phaser.Scene {

    preload() {
        this.load.image("player", "player.png");
        this.load.image("bg", "bg.png");
    }

    create() {
        this.physics.world.setBounds(0, 0, 800, 600);

        this.background = this.add.image(0, 0, 'bg').setOrigin(0,0);
        this.player = this.physics.add.sprite(400, 300, 'player').setCollideWorldBounds(true);
        this.reticle = this.physics.add.sprite(400, 400, 'player').setCollideWorldBounds(true);

    }

    update() {

    }
}