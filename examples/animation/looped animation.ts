
var bot: Phaser.Sprite;

var game = new Phaser.Game(800, 600, Phaser.AUTO, "phaser-example", {
    preload: () => {
        game.load.atlasJSONHash("bot", "assets/sprites/running_bot.png", "assets/sprites/running_bot.json");
    }, 

    create: () => {
        //  This sprite is using a texture atlas for all of its animation data
        bot = game.add.sprite(200, 200, "bot");

        //  Here we add a new animation called "run"
        //  We haven"t specified any frames because it"s using every frame in the texture atlas
        bot.animations.add("run");

        //  And this starts the animation playing by using its key ("run")
        //  15 is the frame rate (15fps)
        //  true means it will loop when it finishes
        bot.animations.play("run", 15, true);
    }, 

    update: () => {
        bot.x -= 2;

        if (bot.x < -bot.width) {
            bot.x = game.world.width;
        }
    } 
});
