define(function() {
    'use strict';
    
    var Zelda = function(Game) 
    {
        this.game = Game;
        this.player = null;
    }
    
    Zelda.prototype.preload = function()
    {
        //this.game.load.spritesheet('zelda','assets/zelda.png',90,115);
        this.game.load.atlas('zelda','assets/zelda.png','assets/zelda.json');
    }
    
    Zelda.prototype.create = function()
    {
        this.player = this.game.add.sprite(90,115,'zelda','slice01.png');
        this.player.scale.setTo(0.3,0.3);
        //this.game.physics.enable(this.player, Phaser.Physics.ARCADE);
        //this.player.body.setSize(10,10,10,10);
    }
    
    return Zelda;
    
}); 