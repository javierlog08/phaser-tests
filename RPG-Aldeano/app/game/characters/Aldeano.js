define(function() {
  'use strict';

  var Aldeano = function(Game)
  {
    this.game    = Game;
    this.entity  = null;
  }


  Aldeano.prototype.preload = function()
  {
    this.game.load.atlas('aldeano','assets/aldeano.png','assets/aldeano.json');
  }

  Aldeano.prototype.create = function()
  {
    this.player = this.game.add.sprite(90,115,'aldeano','aldeano_80.png');
    this.player.scale.setTo(0.8,0.8);

    this.player.animations.add('down',['aldeano_80.png','aldeano_81.png','aldeano_82.png','aldeano_83.png','aldeano_84.png','aldeano_85.png','aldeano_86.png','aldeano_87.png']);
    this.player.animations.add('up',['aldeano_62.png','aldeano_63.png','aldeano_64.png','aldeano_65.png','aldeano_66.png','aldeano_67.png','aldeano_68.png','aldeano_69.png']);
    this.player.animations.add('left',['aldeano_70.png','aldeano_71.png','aldeano_72.png','aldeano_73.png','aldeano_74.png','aldeano_75.png','aldeano_76.png','aldeano_77.png','aldeano_78.png']);
    this.player.animations.add('right',['aldeano_88.png','aldeano_89.png','aldeano_90.png','aldeano_91.png','aldeano_92.png','aldeano_93.png','aldeano_94.png','aldeano_95.png','aldeano_96.png']);

    this.cursors = this.game.input.keyboard.createCursorKeys();
  }

  Aldeano.prototype.update = function()
  {
    var speed = 1.5;

    if(this.cursors.down.isDown) {
      this.player.animations.play('down');
      this.player.y +=speed;
    }

    if(this.cursors.up.isDown) {
      this.player.animations.play('up');
      this.player.y -=speed;
    }

    if(this.cursors.left.isDown) {
      this.player.animations.play('left');
      this.player.x -= speed;
    }

    if(this.cursors.right.isDown) {
      this.player.animations.play('right');
      this.player.x += speed;
    }
  }

  return Aldeano;
});
