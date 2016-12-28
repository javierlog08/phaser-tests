/**
 * Created By Javierlog08
 * Game Singleton.
 * This is where you put your Phaser Game Logic
 * Can include game component here and call it.
 */
define(function(require) {

  'use strict';

  var Engine = require("game/Engine");
  var Phaser = require("phaser");
  var HelloPhaserSeed = require("game/ui/HelloPhaserSeed");
  var TestMap = require("game/maps/TestMap");
  var Zelda = require("game/characters/Zelda");
  var Aldeano = require("game/characters/Aldeano");

  var GameEngine = new Engine();

  GameEngine.game = null;

  var helloPhaserSeed;
  var testMap;
  var zelda;
  var aldeano;
  var group;

  GameEngine.init = function()
  {
    // -- Init Phasergame instance
    GameEngine.game = new Phaser.Game(640, 360, Phaser.CANVAS, 'phaser-example', {
      preload: preload,
      create: create,
      update: update
    });

    // -- Put under, initiation for all yours Phaser Components
    //helloPhaserSeed = new HelloPhaserSeed(GameEngine.game);
    testMap = new TestMap(GameEngine.game);
    //zelda = new Zelda(GameEngine.game);
    aldeano = new Aldeano(GameEngine.game);
  }

  function preload()
  {
    testMap.preload();
    //zelda.preload();
    aldeano.preload();
  }

  function create()
  {
    GameEngine.game.physics.startSystem(Phaser.Physics.ARCADE);
    //helloPhaserSeed.create();
    testMap.create();
    //zelda.create();
    aldeano.create();

    group = GameEngine.game.add.group();

    group.add(aldeano.player, false, 0);
    group.add(testMap.layers.obj, false, 1);
    group.sort();
  }

  function update()
  {
    //helloPhaserSeed.update();
    testMap.update();
    aldeano.update();
  }

  return GameEngine;

});
