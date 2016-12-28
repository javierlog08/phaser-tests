/**
 * Created by Javierlog08.
 *
 * TestMap
 */

define(function() {

  'use strict';

  var TestMap = function(Game)
  {
    this.game = Game;
    this.map = null;
    this.layers = {};
  }


  TestMap.prototype.preload = function()
  {
    this.game.load.tilemap('mapa-tile', 'assets/mapa.json', null, Phaser.Tilemap.TILED_JSON);
    this.game.load.image('mapa', 'assets/mapa.png');
  }

  TestMap.prototype.create = function()
  {
    this.map = this.game.add.tilemap('mapa-tile');
    this.map.addTilesetImage('mapa');

    this.layers['piso'] = this.map.createLayer('piso');
    this.layers['piso'].resizeWorld();

    this.layers['obj'] = this.map.createLayer('Capa de patrones 2');
    this.layers['obj'].resizeWorld();
  }

  TestMap.prototype.update = function()
  {

  }

  return TestMap;
});
