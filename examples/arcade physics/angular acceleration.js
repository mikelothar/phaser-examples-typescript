var sprite;
var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', {
    preload: function () { return game.load.image('arrow', 'assets/sprites/arrow.png'); },
    create: function () {
        game.physics.startSystem(Phaser.Physics.ARCADE);
        game.stage.backgroundColor = '#0072bc';
        sprite = game.add.sprite(400, 300, 'arrow');
        sprite.anchor.setTo(0.5, 0.5);
        game.physics.enable(sprite, Phaser.Physics.ARCADE);
        sprite.body.maxAngular = 500;
        sprite.body.angularDrag = 50;
    },
    update: function () {
        sprite.body.angularAcceleration = 0;
        if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            sprite.body.angularAcceleration -= 200;
        }
        else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            sprite.body.angularAcceleration += 200;
        }
    },
    render: function () {
        game.debug.spriteInfo(sprite, 32, 32);
        game.debug.text('angularVelocity: ' + sprite.body.angularVelocity, 32, 200);
        game.debug.text('angularAcceleration: ' + sprite.body.angularAcceleration, 32, 232);
        game.debug.text('angularDrag: ' + sprite.body.angularDrag, 32, 264);
        game.debug.text('deltaZ: ' + sprite.body.deltaZ(), 32, 296);
    }
});
