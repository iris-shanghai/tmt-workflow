(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 960,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.BG3 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.m1 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.m2 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.m3 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.m4 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.POKERA = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.POKERB = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.POKERC = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.POKERD = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.QIZICHE = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.QIZIMA = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.T1 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.T2 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.text32 = function() {
	this.spriteSheet = ss["p4_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.TT1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.T2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,365,37);


(lib.TT0 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.T1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,260,35);


(lib.text02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.text32();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,309,99);


(lib.qoma = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.QIZIMA();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,108);


(lib.qiju = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.QIZICHE();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,95,108);


(lib.pokerC2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.POKERD();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,272);


(lib.pokerC = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.POKERC();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,135,272);


(lib.POKERB_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.POKERB();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,157,222);


(lib.POKERA_1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.POKERA();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,158,221);


(lib.majiang4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.m4();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,76,124);


(lib.majiang3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.m2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,124);


(lib.majiang2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.m3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,124);


(lib.majiang1 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.m1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,77,124);


(lib.bg3 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.BG3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.text001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_26 = function() {
		this.stop()
	}
	this.frame_106 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(26).call(this.frame_26).wait(80).call(this.frame_106).wait(154));

	// 图层 4
	this.instance = new lib.text02();
	this.instance.setTransform(184,28.1,1,1,0,0,0,154.5,49.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(94).to({_off:false},0).to({alpha:1},12).wait(154));

	// 图层 1
	this.instance_1 = new lib.TT0();
	this.instance_1.setTransform(182,17.5,1,1,0,0,0,130,17.5);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14).wait(65).to({alpha:0},15).to({_off:true},1).wait(165));

	// TT1
	this.instance_2 = new lib.TT1();
	this.instance_2.setTransform(182.5,59.3,1,1,0,0,0,182.5,18.7);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(10).to({_off:false},0).to({alpha:1},16).wait(53).to({alpha:0},15).to({_off:true},1).wait(165));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(52,0,260,35);


(lib.majiang = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.majiang4();
	this.instance.setTransform(268.8,62,1,1,0,0,0,38.2,62);

	this.instance_1 = new lib.majiang3();
	this.instance_1.setTransform(191.9,62,1,1,0,0,0,38.6,62);

	this.instance_2 = new lib.majiang2();
	this.instance_2.setTransform(115,62,1,1,0,0,0,38.4,62);

	this.instance_3 = new lib.majiang1();
	this.instance_3.setTransform(38.3,62,1,1,0,0,0,38.3,62);

	this.addChild(this.instance_3,this.instance_2,this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,306.6,124);


(lib.PPOKER = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_281 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(281).call(this.frame_281).wait(1));

	// 图层 2
	this.instance = new lib.pokerC();
	this.instance.setTransform(68.6,110.7,0.741,0.741,0,0,180,67.5,136);
	this.instance._off = true;

	this.instance_1 = new lib.pokerC2();
	this.instance_1.setTransform(68.6,110.7,0.267,0.741,0,0,0,67.5,136);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(69).to({_off:false},0).to({scaleX:0.42},2).to({_off:true},1).wait(210));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(72).to({_off:false},0).to({scaleX:0.82,scaleY:0.7,x:63.2},2).to({_off:true},1).wait(207));

	// A
	this.instance_2 = new lib.POKERA_1();
	this.instance_2.setTransform(65.8,110.6,0.741,0.741,0,0,0,79,110.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(75).to({_off:false},0).to({scaleX:0.8,scaleY:0.8,x:65.9},11,cjs.Ease.get(1)).wait(1).to({scaleX:0.8,scaleY:0.8,x:66.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:67.2},0).wait(1).to({scaleX:0.79,scaleY:0.79,x:69},0).wait(1).to({scaleX:0.78,scaleY:0.78,x:71.7},0).wait(1).to({scaleX:0.76,scaleY:0.76,x:74.9},0).wait(1).to({scaleX:0.75,scaleY:0.75,x:77.8},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:79.9,y:110.5},0).wait(1).to({scaleX:0.74,scaleY:0.74,x:80.6,y:110.6},0).wait(41).to({regX:79.1,rotation:10.9,x:6.5,y:119.8},7,cjs.Ease.get(-1)).to({regX:79,rotation:0,x:-67.8,y:129.1},8,cjs.Ease.get(1)).to({x:-72.1},6).wait(1).to({x:-71.2},0).wait(1).to({x:-68.6},0).wait(1).to({x:-64.3},0).wait(1).to({x:-58.3},0).wait(1).to({x:-50.6},0).wait(1).to({x:-41.4},0).wait(1).to({x:-30.8},0).wait(1).to({x:-18.8},0).wait(1).to({x:-5.7},0).wait(1).to({x:8.4},0).wait(1).to({x:23.2},0).wait(1).to({x:38.6},0).wait(1).to({x:54.3},0).wait(1).to({x:70.2},0).wait(1).to({x:86.1},0).wait(1).to({x:101.7},0).wait(1).to({x:117},0).wait(1).to({x:131.7},0).wait(1).to({x:145.7},0).wait(1).to({x:159},0).wait(1).to({x:171.5},0).wait(1).to({x:183},0).wait(1).to({x:193.5},0).wait(1).to({x:203},0).wait(1).to({x:211.6},0).wait(1).to({x:219},0).wait(1).to({x:225.5},0).wait(1).to({x:230.8},0).wait(1).to({x:235.2},0).wait(1).to({x:238.6},0).wait(1).to({x:241},0).wait(1).to({x:242.4},0).wait(1).to({x:242.8},0).to({alpha:0},10).to({_off:true},1).wait(82));

	// 图层 3
	this.instance_3 = new lib.POKERB_1();
	this.instance_3.setTransform(80.3,111,0.741,0.741,0,0,0,78.5,111.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(79).to({_off:false},0).to({rotation:-8.4,x:63.2,alpha:1},9,cjs.Ease.get(1)).to({regY:111,rotation:-5.8,x:66.9,y:110.2},5).wait(19).to({regY:111.1,rotation:-8.4,x:63.2,y:111},5,cjs.Ease.get(1)).to({rotation:0,x:80.3},9,cjs.Ease.get(-1)).to({_off:true},1).wait(155));

	// 图层 3 复制
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#B78E69").ss(3,1,0,3).p("AFOgRIB/i+AJPDtIChhLAgNhiIgWkPAoJFyIjmhVAl5AeIivii");
	this.shape.setTransform(53,41.7);

	this.instance_4 = new lib.POKERB_1();
	this.instance_4.setTransform(80.3,111,0.741,0.741,0,0,0,78.5,111.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},42).to({state:[]},3).to({state:[{t:this.instance_4}]},40).to({state:[{t:this.instance_4}]},9).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},19).to({state:[{t:this.instance_4}]},5).to({state:[{t:this.instance_4}]},9).to({state:[]},1).wait(149));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(85).to({_off:false},0).to({regY:111,rotation:-15.9,x:53.9,y:110.9,alpha:1},9,cjs.Ease.get(1)).to({rotation:-14.2,x:57.7,y:111.7},5).wait(19).to({rotation:-15.9,x:53.9,y:110.9},5,cjs.Ease.get(1)).to({regY:111.1,rotation:0,x:80.3,y:111},9,cjs.Ease.get(-1)).to({_off:true},1).wait(149));

	// qi
	this.instance_5 = new lib.qiju();
	this.instance_5.setTransform(62.8,166.4,1,1,-10.7,0,0,47.5,54);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({rotation:0,x:62.7,y:298.3,alpha:1},8,cjs.Ease.get(-1)).to({y:281.8},3).to({y:298.3},3).wait(8).to({scaleX:1.01,scaleY:1.01,rotation:1.3,x:62.5,y:292.2},0).wait(1).to({scaleX:1.04,scaleY:1.04,rotation:4.9,x:62,y:275.2},0).wait(1).to({scaleX:1.08,scaleY:1.08,rotation:10,x:61.2,y:250.7},0).wait(1).to({scaleX:1.13,scaleY:1.13,rotation:15.6,x:60.3,y:223.6},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:20.9,x:59.5,y:198.6},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:25,x:58.9,y:178.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:27.5,x:58.5,y:166.7},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:28.4,x:58.4,y:162.6},0).wait(1).to({scaleX:1.23,scaleY:1.23,rotation:28.1,y:161.9},0).wait(1).to({scaleX:1.22,scaleY:1.22,rotation:27.1,x:58.3,y:159.7},0).wait(1).to({scaleX:1.2,scaleY:1.2,rotation:24.9,x:58.2,y:154.9},0).wait(1).to({scaleX:1.17,scaleY:1.17,rotation:20.8,x:58,y:145.9},0).wait(1).to({scaleX:1.1,scaleY:1.1,rotation:12.7,x:57.8,y:128.2},0).wait(1).to({scaleX:1.02,scaleY:1.02,rotation:2.5,x:57.4,y:106.1},0).wait(1).to({scaleX:1,scaleY:1,rotation:0,x:57.3,y:100.7},0).to({scaleX:0.9,scaleY:0.9},4).to({scaleX:1,scaleY:1},4,cjs.Ease.get(1)).wait(18).to({alpha:0},5).to({_off:true},1).wait(208));

	// qi
	this.instance_6 = new lib.qoma();
	this.instance_6.setTransform(58.5,-73.9,1,1,-92.2,0,0,47.5,54);
	this.instance_6.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).to({rotation:0,y:102.1,alpha:1},10,cjs.Ease.get(-1)).to({rotation:-12.7,x:58.6,y:91.1},3).to({y:102.1},3).to({_off:true},26).wait(240));

	// 图层 5 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_156 = new cjs.Graphics().p("EglpAQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_157 = new cjs.Graphics().p("EgktAQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_158 = new cjs.Graphics().p("EgjyAQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_159 = new cjs.Graphics().p("Egi3AQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_160 = new cjs.Graphics().p("Egh8AQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_161 = new cjs.Graphics().p("EghBAQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_162 = new cjs.Graphics().p("EggGAQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_163 = new cjs.Graphics().p("A/KQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_164 = new cjs.Graphics().p("A+PQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_165 = new cjs.Graphics().p("A9UQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_166 = new cjs.Graphics().p("A8ZQBIAA5yMA4UAAAIAAZyg");
	var mask_graphics_167 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_168 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_169 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_170 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_171 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_172 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_173 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_174 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_175 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_176 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_177 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_178 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_179 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_180 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_181 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_182 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_183 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_184 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_185 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_186 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_187 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_188 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_189 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");
	var mask_graphics_190 = new cjs.Graphics().p("A8JQBIAA5yMA4TAAAIAAZyg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(156).to({graphics:mask_graphics_156,x:-241,y:102.6}).wait(1).to({graphics:mask_graphics_157,x:-235.1,y:102.6}).wait(1).to({graphics:mask_graphics_158,x:-229.2,y:102.6}).wait(1).to({graphics:mask_graphics_159,x:-223.3,y:102.6}).wait(1).to({graphics:mask_graphics_160,x:-217.3,y:102.6}).wait(1).to({graphics:mask_graphics_161,x:-211.4,y:102.6}).wait(1).to({graphics:mask_graphics_162,x:-205.5,y:102.6}).wait(1).to({graphics:mask_graphics_163,x:-199.6,y:102.6}).wait(1).to({graphics:mask_graphics_164,x:-193.7,y:102.6}).wait(1).to({graphics:mask_graphics_165,x:-187.8,y:102.6}).wait(1).to({graphics:mask_graphics_166,x:-181.8,y:102.6}).wait(1).to({graphics:mask_graphics_167,x:-171.6,y:102.6}).wait(1).to({graphics:mask_graphics_168,x:-159.7,y:102.6}).wait(1).to({graphics:mask_graphics_169,x:-147.9,y:102.6}).wait(1).to({graphics:mask_graphics_170,x:-136.1,y:102.6}).wait(1).to({graphics:mask_graphics_171,x:-124.2,y:102.6}).wait(1).to({graphics:mask_graphics_172,x:-112.4,y:102.6}).wait(1).to({graphics:mask_graphics_173,x:-100.6,y:102.6}).wait(1).to({graphics:mask_graphics_174,x:-88.7,y:102.6}).wait(1).to({graphics:mask_graphics_175,x:-76.9,y:102.6}).wait(1).to({graphics:mask_graphics_176,x:-65.1,y:102.6}).wait(1).to({graphics:mask_graphics_177,x:-53.2,y:102.6}).wait(1).to({graphics:mask_graphics_178,x:-41.4,y:102.6}).wait(1).to({graphics:mask_graphics_179,x:-29.6,y:102.6}).wait(1).to({graphics:mask_graphics_180,x:-17.7,y:102.6}).wait(1).to({graphics:mask_graphics_181,x:-6,y:102.6}).wait(1).to({graphics:mask_graphics_182,x:2,y:102.6}).wait(1).to({graphics:mask_graphics_183,x:12,y:102.6}).wait(1).to({graphics:mask_graphics_184,x:23.7,y:102.6}).wait(1).to({graphics:mask_graphics_185,x:36.2,y:102.6}).wait(1).to({graphics:mask_graphics_186,x:48.5,y:102.6}).wait(1).to({graphics:mask_graphics_187,x:59.6,y:102.6}).wait(1).to({graphics:mask_graphics_188,x:68.4,y:102.6}).wait(1).to({graphics:mask_graphics_189,x:73.9,y:102.6}).wait(1).to({graphics:mask_graphics_190,x:75.9,y:102.6}).wait(1).to({graphics:null,x:0,y:0}).wait(91));

	// 图层 4
	this.instance_7 = new lib.majiang();
	this.instance_7.setTransform(57.7,125.4,0.922,0.922,0,0,0,153.5,62);
	this.instance_7._off = true;

	this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(156).to({_off:false},0).to({_off:true},68).wait(58));

	// majiang4
	this.instance_8 = new lib.majiang4();
	this.instance_8.setTransform(164,125.4,0.922,0.922,0,0,0,38.3,62);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(224).to({_off:false},0).to({regX:38.2,scaleX:0.92,scaleY:0.92,rotation:-80.2,x:215.6,y:80.4},5,cjs.Ease.get(-1)).to({regX:38.3,regY:62.1,rotation:-110.8,x:235.4,y:62.9,alpha:0},16).wait(37));

	// majiang3
	this.instance_9 = new lib.majiang3();
	this.instance_9.setTransform(93.1,125.4,0.922,0.922,0,0,0,38.6,62);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(224).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:80.2,x:102.6,y:61.9},5,cjs.Ease.get(-1)).to({regX:38.7,rotation:110.8,x:106.3,y:37.5,alpha:0},16).wait(37));

	// majiang2
	this.instance_10 = new lib.majiang2();
	this.instance_10.setTransform(22.1,125.4,0.922,0.922,0,0,0,38.4,62);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(224).to({_off:false},0).to({scaleX:0.92,scaleY:0.92,rotation:-80.2,x:16.1,y:10.6},5,cjs.Ease.get(-1)).to({regX:38.3,rotation:-110.8,x:13.8,y:-33.6,alpha:0},16).wait(37));

	// majiang1
	this.instance_11 = new lib.majiang1();
	this.instance_11.setTransform(-48.6,125.4,0.922,0.922,0,0,0,38.3,62);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(224).to({_off:false},0).to({regX:38.2,scaleX:0.92,scaleY:0.92,rotation:-80.2,x:-84.2,y:93.6},5,cjs.Ease.get(-1)).to({regX:38.3,rotation:-110.8,x:-97.9,y:81.3,alpha:0},16).wait(37));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(2.8,-123.4,111.5,99);


(lib.STAGE05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 文字1
	this.instance = new lib.text001("synched",0);
	this.instance.setTransform(403.6,203,1,1,0,0,0,182.5,39);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(246));

	// 图案
	this.instance_1 = new lib.PPOKER();
	this.instance_1.setTransform(424.3,494.1,1,1,0,0,0,79,110.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(9).to({_off:false},0).wait(246));

	// 图层 1
	this.instance_2 = new lib.bg3();
	this.instance_2.setTransform(400,480,1,1,0,0,0,400,480);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14).wait(241));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


// stage content:



(lib.p4 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.STAGE05();
	this.instance.setTransform(400,480,1,1,0,0,0,400,480);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(400,480,800,960);

})(libP4 = libP4||{}, imagesP4 = imagesP4||{}, createjs = createjs||{}, ss = ss||{});
var libP4, imagesP4, createjs, ss;