var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a2a9b85e-2c7e-4b0d-813c-d20d25e53921"],"propsByKey":{"a2a9b85e-2c7e-4b0d-813c-d20d25e53921":{"sourceSize":{"x":418,"y":400},"frameSize":{"x":418,"y":400},"frameCount":1,"frameDelay":12,"name":"p","sourceUrl":null,"size":66867,"version":"RnE_xXkEQ9OXPOkFanXo6IGwHlBMZj9_","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/a2a9b85e-2c7e-4b0d-813c-d20d25e53921.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var x = createSprite(200, 200);
x.setAnimation("p");
x.scale = 0.9;


var a = createSprite(47, 172);
a.height = 110;
a.width = 40;
a.shapeColor = "blue";
a.visible = false;

var b = createSprite(89, 178);
b.height = 120;
b.width = 40;
b.shapeColor = "blue";
b.visible = false;

var c = createSprite(132, 172);
c.height = 130;
c.width = 40;
c.shapeColor = "blue";
c.visible = false;

var d = createSprite(177, 172);
d.height = 140;
d.width = 40;
d.shapeColor = "blue";
d.visible = false;

var e = createSprite(220, 172);
e.height = 150;
e.width = 40;
e.shapeColor = "blue";
e.visible = false;

var h = createSprite(262, 172);
h.height = 160;
h.width = 36;
h.shapeColor = "blue";
h.visible = false;

var f = createSprite(305, 172);
f.height = 170;
f.width = 40;
f.shapeColor = "blue";
f.visible = false;

var g = createSprite(350, 172);
g.height = 180;
g.width = 40;
g.shapeColor = "blue";
g.visible = false;






function draw() {
  
 background("white");
  
 if (mousePressedOver(a)) {
    playSound("assets/category_alerts/airy_bell_notification.mp3");
  }
  
 if (mousePressedOver(b)) {
    playSound("assets/category_bell/vibrant_game_bell_ding.mp3");
  } 
   
  if (mousePressedOver(c)) {
    playSound("assets/category_bell/hollow_bell_notification.mp3");
  }
  
 if (mousePressedOver(d)) {
    playSound("assets/category_collect/collect_item_bling_1.mp3");
  } 
  
  if (mousePressedOver(e)) {
    playSound("assets/category_tap/game_bubble_pop_click.mp3");
  }
  
 if (mousePressedOver(h)) {
    playSound("assets/category_collect/retro_game_coin_pickup_12.mp3");
  } 
   
  if (mousePressedOver(f)) {
    playSound("assets/category_digital/bounce_2.mp3");
  }
  
 if (mousePressedOver(g)) {
    playSound("assets/category_hits/puzzle_game_organic_metal_tile_hit_1.mp3");
  } 
  
  
  
  
  
  
  
  
  
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
