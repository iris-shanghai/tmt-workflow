(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 640,
	height: 1008,
	fps: 30,
	color: "#FFFFFF",
	manifest: [
		{src:"../img/bg.png", id:"bg"},
		{src:"../img/bgbg.png", id:"bgbg"},
		{src:"../img/blue_bg.png", id:"blue_bg"},
		{src:"../img/hai.png", id:"hai"},
		{src:"../img/pinzi.png", id:"pinzi"},
		{src:"../img/shizhi1.png", id:"shizhi1"},
		{src:"../img/shizhi2.png", id:"shizhi2"},
		{src:"../img/txt001.png", id:"txt001"},
		{src:"../img/txt002.png", id:"txt002"},
		{src:"../img/txt003.png", id:"txt003"},
		{src:"../img/txt004.png", id:"txt004"},
		{src:"../img/wave002.png", id:"wave002"},
		{src:"../img/wavemini.png", id:"wavemini"}
	]
};





(lib.bg = function() {
	this.initialize(img.bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,160,285);


(lib.bgbg = function() {
	this.initialize(img.bgbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,619);


(lib.blue_bg = function() {
	this.initialize(img.blue_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,400,400);


(lib.hai = function() {
	this.initialize(img.hai);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,566,433);


(lib.pinzi = function() {
	this.initialize(img.pinzi);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,166,487);


(lib.shizhi1 = function() {
	this.initialize(img.shizhi1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,352);


(lib.shizhi2 = function() {
	this.initialize(img.shizhi2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,198,352);


(lib.txt001 = function() {
	this.initialize(img.txt001);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,283,119);


(lib.txt002 = function() {
	this.initialize(img.txt002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,454,156);


(lib.txt003 = function() {
	this.initialize(img.txt003);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,464,109);


(lib.txt004 = function() {
	this.initialize(img.txt004);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,250,126);


(lib.wave002 = function() {
	this.initialize(img.wave002);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,300,300);


(lib.wavemini = function() {
	this.initialize(img.wavemini);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,360,360);


(lib.wave002_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave002();
	this.instance.setTransform(-150,-150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-150,-150,300,300);


(lib.wave001 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wavemini();
	this.instance.setTransform(-180,-180);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-180,-180,360,360);


(lib.Tween4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt001();
	this.instance.setTransform(-141.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-59.5,283,119);


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt001();
	this.instance.setTransform(-141.5,-59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-141.5,-59.5,283,119);


(lib.Tween2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt002();
	this.instance.setTransform(-227,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227,-78,454,156);


(lib.Tween1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt002();
	this.instance.setTransform(-227,-78);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-227,-78,454,156);


(lib.Symbol11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.hai();
	this.instance.setTransform(-283,-216.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-283,-216.5,566,433);


(lib.Symbol9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.txt003();
	this.instance.setTransform(-232,-54.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-232,-54.5,464,109);


(lib.Symbol3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shizhi2();
	this.instance.setTransform(-99,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-176,198,352);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.shizhi1();
	this.instance.setTransform(-99,-176);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-176,198,352);


(lib.pinzi_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pinzi();
	this.instance.setTransform(-83,-243.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-83,-243.5,166,487);


(lib.Symbol12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.wave002_1("synched",0);
	this.instance.setTransform(0,0,1.575,1.367);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({scaleX:1.49,scaleY:1.47},29).to({scaleX:1.58,scaleY:1.37},30).to({scaleX:1.68,scaleY:1.29},30).to({scaleX:1.58,scaleY:1.37},30).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-236.2,-205,472.6,410.1);


(lib.Symbol8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		/* Rotate Continuously
		Rotates symbol instance continuously by updating its rotation property within an Tick event.

		Instructions:
		1. The default rotation of the code as written is clock-wise.
		2. To change the direction of the rotation to counter clock-wise, change the number 10 below to a negative value.
		3. To change the speed at which the symbol instance rotates, change the number 10 below to the number of degrees you want to rotate the symbol instance each frame. Higher numbers cause faster rotation.
		4. Because the animation uses an Tick event, it progresses only when the playhead moves to a new frame. The speed of the animation is also affected by the document frame rate.

		*/
		this.addEventListener("tick",fl_RotateContinuously_2.bind(this));

		function fl_RotateContinuously_2(){
			this.shui_001.rotation += -0.06;

		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 1
	this.shui_001 = new lib.wave001();
	this.shui_001.setTransform(0,0,2,2);

	this.timeline.addTween(cjs.Tween.get(this.shui_001).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-360,-360,720,720);


(lib.Symbol7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.pinzi_1("synched",0);
	this.instance.setTransform(0,0,1,1,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({y:-10},49).to({y:0},50).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-189.1,-253.6,378.2,507.2);


// stage content:



(lib.SDL_h5_ok = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_90 = function() {
		/* Stop at This Frame
		The  timeline will stop/pause at the frame where you insert this code.
		Can also be used to stop/pause the timeline of movieclips.
		*/

		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(90).call(this.frame_90).wait(1));

	// Layer 1
	this.instance = new lib.Symbol3("synched",0);
	this.instance.setTransform(104.3,756.3,0.791,1.45,-19.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(9).to({_off:false},0).wait(1).to({rotation:-19.6,x:85.3,y:764.6},0).wait(1).to({scaleY:1.45,x:69.9,y:771.3},0).wait(1).to({rotation:-19.5,x:56.7,y:777.1},0).wait(1).to({x:45.2,y:782.1},0).wait(1).to({rotation:-19.4,x:35,y:786.6},0).wait(1).to({scaleY:1.45,x:25.8,y:790.6},0).wait(1).to({x:17.5,y:794.3},0).wait(1).to({rotation:-19.3,x:9.9,y:797.6},0).wait(1).to({x:2.9,y:800.7},0).wait(1).to({x:-3.6,y:803.5},0).wait(1).to({rotation:-19.2,x:-9.6,y:806.2},0).wait(1).to({x:-15.2,y:808.6},0).wait(1).to({scaleY:1.45,x:-20.4,y:810.9},0).wait(1).to({x:-25.3,y:813},0).wait(1).to({x:-29.8,y:815},0).wait(1).to({rotation:-19.1,x:-34.1,y:816.9},0).wait(1).to({x:-38.1,y:818.7},0).wait(1).to({x:-41.9,y:820.3},0).wait(1).to({x:-45.4,y:821.9},0).wait(1).to({x:-48.8,y:823.4},0).wait(1).to({x:-51.9,y:824.8},0).wait(1).to({x:-54.9,y:826.1},0).wait(1).to({x:-57.7,y:827.3},0).wait(1).to({rotation:-19,x:-60.3,y:828.4},0).wait(1).to({x:-62.8,y:829.5},0).wait(1).to({x:-65.2,y:830.6},0).wait(1).to({x:-67.4,y:831.5},0).wait(1).to({scaleY:1.45,x:-69.4,y:832.4},0).wait(1).to({x:-71.4,y:833.3},0).wait(1).to({x:-73.2,y:834.1},0).wait(1).to({x:-74.9,y:834.8},0).wait(1).to({x:-76.5,y:835.5},0).wait(1).to({x:-78,y:836.2},0).wait(1).to({x:-79.4,y:836.8},0).wait(1).to({x:-80.7,y:837.4},0).wait(1).to({x:-82,y:837.9},0).wait(1).to({x:-83.1,y:838.4},0).wait(1).to({rotation:-18.9,x:-84.1,y:838.9},0).wait(1).to({x:-85.1,y:839.3},0).wait(1).to({x:-86,y:839.7},0).wait(1).to({x:-86.8,y:840},0).wait(1).to({x:-87.5,y:840.3},0).wait(1).to({x:-88.1,y:840.6},0).wait(1).to({x:-88.7,y:840.9},0).wait(1).to({x:-89.2,y:841.1},0).wait(1).to({x:-89.7,y:841.3},0).wait(1).to({x:-90,y:841.5},0).wait(1).to({x:-90.4,y:841.6},0).wait(1).to({x:-90.6,y:841.7},0).wait(1).to({x:-90.8,y:841.8},0).to({_off:true},1).wait(31));

	// Layer 2
	this.instance_1 = new lib.Symbol2("synched",0);
	this.instance_1.setTransform(691.3,350.7,0.796,2.163,-18.4,0,0,0.1,-0.1);

	this.instance_2 = new lib.Symbol3("synched",0);
	this.instance_2.setTransform(113.7,755.4,0.769,1.418,0,-19.4,-11.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2},{t:this.instance_1}]},1).to({state:[]},1).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regY:0.1,scaleX:2.9,scaleY:1.7,rotation:0,skewX:-18.4,skewY:-34.8,x:407.4,y:561.6},0).wait(1).to({regX:0,regY:0,scaleX:3.26,scaleY:1.54,skewX:-19.4,skewY:-33.9,x:333.5,y:597},0).wait(1).to({regX:0.1,regY:-0.1,scaleX:2.74,scaleY:1.37,skewX:-19.1,skewY:-39.8,x:259.5,y:652.6},0).wait(1).to({regX:-0.1,regY:-0.2,scaleX:2.07,scaleY:1.46,skewX:-18.7,skewY:-36.7,x:221.7,y:679},0).wait(1).to({regX:0,regY:0.1,scaleX:1.5,scaleY:1.44,skewX:-18.6,skewY:-38.5,x:193.1,y:704},0).wait(1).to({regX:-0.2,scaleX:1.05,scaleY:1.45,skewY:-26.5,x:163.8,y:727.6},0).wait(1).to({regX:-0.1,scaleX:0.92,scaleY:1.47,skewX:-17.1,skewY:-25,x:139.9,y:749.6},0).wait(1).to({regX:0.2,scaleX:0.9,scaleY:1.48,skewX:-18.6,skewY:-21.6,x:119.5,y:752.5},0).to({_off:true},1).wait(82));

	// Layer 12
	this.instance_3 = new lib.Symbol11("synched",0);
	this.instance_3.setTransform(354,473,1.073,1.365,26.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(4).to({_off:false},0).wait(1).to({scaleX:1.14,scaleY:1.55,rotation:31.4,x:352.1,y:445.5,alpha:0.789},0).wait(1).to({scaleX:1.18,scaleY:1.67,rotation:34.3,x:350.9,y:428.1,alpha:0.655},0).wait(1).to({scaleX:1.22,scaleY:1.75,rotation:36.5,x:350,y:415.1,alpha:0.555},0).wait(1).to({scaleX:1.24,scaleY:1.82,rotation:38.2,x:349.3,y:404.7,alpha:0.475},0).wait(1).to({scaleX:1.26,scaleY:1.88,rotation:39.7,x:348.7,y:396.1,alpha:0.409},0).wait(1).to({scaleX:1.28,scaleY:1.93,rotation:40.9,x:348.2,y:388.9,alpha:0.353},0).wait(1).to({scaleX:1.3,scaleY:1.97,rotation:42,x:347.7,y:382.6,alpha:0.305},0).wait(1).to({scaleX:1.31,scaleY:2.01,rotation:42.9,x:347.4,y:377.2,alpha:0.263},0).wait(1).to({scaleX:1.32,scaleY:2.04,rotation:43.7,x:347,y:372.4,alpha:0.227},0).wait(1).to({scaleX:1.33,scaleY:2.07,rotation:44.4,x:346.8,y:368.3,alpha:0.195},0).wait(1).to({scaleX:1.34,scaleY:2.09,rotation:45,x:346.5,y:364.6,alpha:0.167},0).wait(1).to({scaleX:1.35,scaleY:2.11,rotation:45.5,x:346.3,y:361.4,alpha:0.142},0).wait(1).to({scaleX:1.36,scaleY:2.13,rotation:46,x:346.1,y:358.6,alpha:0.12},0).wait(1).to({scaleX:1.36,scaleY:2.15,rotation:46.4,x:345.9,y:356,alpha:0.101},0).wait(1).to({scaleX:1.37,scaleY:2.17,rotation:46.8,x:345.8,y:353.8,alpha:0.084},0).wait(1).to({scaleX:1.37,scaleY:2.18,rotation:47.1,x:345.6,y:351.9,alpha:0.069},0).wait(1).to({scaleX:1.38,scaleY:2.19,rotation:47.4,x:345.5,y:350.2,alpha:0.056},0).wait(1).to({scaleX:1.38,scaleY:2.2,rotation:47.6,x:345.4,y:348.8,alpha:0.045},0).wait(1).to({scaleX:1.38,scaleY:2.21,rotation:47.8,x:345.3,y:347.5,alpha:0.035},0).wait(1).to({scaleX:1.39,scaleY:2.21,rotation:48,x:345.2,y:346.5,alpha:0.027},0).wait(1).to({scaleX:1.39,scaleY:2.22,rotation:48.2,y:345.6,alpha:0.02},0).wait(1).to({scaleX:1.39,scaleY:2.23,rotation:48.3,x:345.1,y:344.8,alpha:0.015},0).wait(1).to({scaleX:1.39,scaleY:2.23,rotation:48.4,y:344.3,alpha:0.01},0).wait(1).to({scaleX:1.39,scaleY:2.23,rotation:48.5,y:343.8,alpha:0.006},0).wait(1).to({scaleX:1.39,scaleY:2.24,x:345,y:343.4,alpha:0.004},0).wait(1).to({scaleX:1.39,scaleY:2.24,rotation:48.6,y:343.2,alpha:0.002},0).wait(1).to({scaleY:2.24,y:343.1,alpha:0.001},0).wait(1).to({scaleY:2.24,y:343,alpha:0},0).wait(1).to({startPosition:0},0).to({_off:true},1).wait(57));

	// Layer 11 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("ADxWLMgIRgsVIAwAAMAIRAsVg");
	var mask_graphics_1 = new cjs.Graphics().p("AgtWIMgHdgsPII4AAMAHdAsPg");
	var mask_graphics_2 = new cjs.Graphics().p("Ak+WEMgGpgsHIQmAAMAGpAsHg");
	var mask_graphics_3 = new cjs.Graphics().p("Ao/WBMgF4gsBIX3AAMAF4AsBg");
	var mask_graphics_4 = new cjs.Graphics().p("AswV+MgFLgr7IesAAMAFLAr7g");
	var mask_graphics_5 = new cjs.Graphics().p("AwSV7MgEhgr1MAlGAAAMAEgAr1g");
	var mask_graphics_6 = new cjs.Graphics().p("AzlV5MgD4grxMArDAAAMAD4Arxg");
	var mask_graphics_7 = new cjs.Graphics().p("A2nV3MgDUgrsMAwjAAAMADUArsg");
	var mask_graphics_8 = new cjs.Graphics().p("A5aV0MgCygrnMA1nAAAMACyArng");
	var mask_graphics_9 = new cjs.Graphics().p("A7+VyMgCTgrjMA6PAAAMACUArjg");
	var mask_graphics_10 = new cjs.Graphics().p("A+SVwMgB3grfMA+cAAAMAB3Arfg");
	var mask_graphics_11 = new cjs.Graphics().p("EggWAVvMgBegrcMBCLAAAMABeArcg");
	var mask_graphics_12 = new cjs.Graphics().p("EgiLAVtMgBIgrZMBFfAAAMABIArZg");
	var mask_graphics_13 = new cjs.Graphics().p("EgjwAVsMgA1grXMBIWAAAMAA1ArXg");
	var mask_graphics_14 = new cjs.Graphics().p("EglGAVrMgAlgrVMBKyAAAMAAkArVg");
	var mask_graphics_15 = new cjs.Graphics().p("EgmMAVqMgAYgrTMBMxAAAMAAYArTg");
	var mask_graphics_16 = new cjs.Graphics().p("EgnCAVpMgAOgrRMBOTAAAMAAOArRg");
	var mask_graphics_17 = new cjs.Graphics().p("EgnqAVpMgAFgrRMBPaAAAMAAFArRg");
	var mask_graphics_18 = new cjs.Graphics().p("EgoAAVoMgACgrQMBQDAAAMAACArQg");
	var mask_graphics_19 = new cjs.Graphics().p("EgoIAVoMAAAgrQMBQSAAAMAAAArQg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:315,y:239}).wait(1).to({graphics:mask_graphics_1,x:315,y:239.2}).wait(1).to({graphics:mask_graphics_2,x:315,y:239.5}).wait(1).to({graphics:mask_graphics_3,x:315,y:239.7}).wait(1).to({graphics:mask_graphics_4,x:315,y:239.9}).wait(1).to({graphics:mask_graphics_5,x:315,y:240.1}).wait(1).to({graphics:mask_graphics_6,x:315,y:240.3}).wait(1).to({graphics:mask_graphics_7,x:315,y:240.5}).wait(1).to({graphics:mask_graphics_8,x:315,y:240.7}).wait(1).to({graphics:mask_graphics_9,x:315,y:240.8}).wait(1).to({graphics:mask_graphics_10,x:315,y:240.9}).wait(1).to({graphics:mask_graphics_11,x:315,y:241.1}).wait(1).to({graphics:mask_graphics_12,x:315,y:241.2}).wait(1).to({graphics:mask_graphics_13,x:315,y:241.3}).wait(1).to({graphics:mask_graphics_14,x:315,y:241.3}).wait(1).to({graphics:mask_graphics_15,x:315,y:241.4}).wait(1).to({graphics:mask_graphics_16,x:315,y:241.4}).wait(1).to({graphics:mask_graphics_17,x:315,y:241.5}).wait(1).to({graphics:mask_graphics_18,x:315,y:241.5}).wait(1).to({graphics:mask_graphics_19,x:315,y:241.5}).wait(1).to({graphics:null,x:0,y:0}).wait(71));

	// Layer 6
	this.instance_4 = new lib.Tween1("synched",0);
	this.instance_4.setTransform(241.1,261.2);
	this.instance_4._off = true;

	this.instance_5 = new lib.Tween2("synched",0);
	this.instance_5.setTransform(331.1,261.2);
	this.instance_5._off = true;

	this.instance_4.mask = this.instance_5.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(5).to({_off:false},0).wait(1).to({x:276.9},0).wait(1).to({x:288.7},0).wait(1).to({x:295.7},0).wait(1).to({x:300.8},0).wait(1).to({x:304.9},0).wait(1).to({x:308.3},0).wait(1).to({x:311.3},0).wait(1).to({x:314},0).wait(1).to({x:316.5},0).wait(1).to({x:318.5},0).wait(1).to({x:320.3},0).wait(1).to({x:321.8},0).wait(1).to({x:323},0).wait(1).to({x:324.1},0).wait(1).to({x:324.9},0).wait(1).to({x:325.6},0).wait(1).to({x:326.3},0).wait(1).to({x:326.8},0).wait(1).to({x:327.2},0).wait(1).to({x:327.6},0).wait(1).to({x:327.9},0).wait(1).to({x:328.2},0).wait(1).to({x:328.5},0).wait(1).to({x:328.7},0).wait(1).to({x:328.9},0).wait(1).to({x:329.1},0).wait(1).to({x:329.2},0).wait(1).to({x:329.4},0).wait(1).to({x:329.5},0).wait(1).to({x:329.7},0).wait(1).to({x:329.8},0).wait(1).to({x:329.9},0).wait(1).to({x:330},0).wait(1).to({x:330.1},0).wait(1).to({x:330.2},0).wait(1).to({x:330.4},0).wait(1).to({x:330.5},0).wait(1).to({x:330.6},0).wait(1).to({x:330.7},0).wait(1).to({x:330.8},0).wait(1).to({x:330.9},0).wait(1).to({x:331},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48).to({_off:false},0).to({x:332.1},42).wait(1));

	// Layer 7
	this.instance_6 = new lib.Tween3("synched",0);
	this.instance_6.setTransform(403.6,168.7);
	this.instance_6._off = true;

	this.instance_7 = new lib.Tween4("synched",0);
	this.instance_7.setTransform(333.6,168.7);
	this.instance_7._off = true;

	this.instance_6.mask = this.instance_7.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(5).to({_off:false},0).wait(1).to({x:375.7},0).wait(1).to({x:366.6},0).wait(1).to({x:361.1},0).wait(1).to({x:357.1},0).wait(1).to({x:354},0).wait(1).to({x:351.3},0).wait(1).to({x:349},0).wait(1).to({x:346.9},0).wait(1).to({x:345},0).wait(1).to({x:343.4},0).wait(1).to({x:342},0).wait(1).to({x:340.8},0).wait(1).to({x:339.9},0).wait(1).to({x:339.1},0).wait(1).to({x:338.4},0).wait(1).to({x:337.8},0).wait(1).to({x:337.4},0).wait(1).to({x:337},0).wait(1).to({x:336.6},0).wait(1).to({x:336.3},0).wait(1).to({x:336.1},0).wait(1).to({x:335.9},0).wait(1).to({x:335.7},0).wait(1).to({x:335.5},0).wait(1).to({x:335.3},0).wait(1).to({x:335.2},0).wait(1).to({x:335.1},0).wait(1).to({x:334.9},0).wait(1).to({x:334.8},0).wait(1).to({x:334.7},0).wait(1).to({x:334.6},0).wait(1).to({x:334.5},0).wait(1).to({x:334.4},0).wait(1).to({startPosition:0},0).wait(1).to({x:334.3},0).wait(1).to({x:334.2},0).wait(1).to({x:334.1},0).wait(1).to({x:334},0).wait(1).to({x:333.9},0).wait(1).to({x:333.8},0).wait(1).to({startPosition:0},0).wait(1).to({x:333.7},0).to({_off:true},1).wait(43));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(48).to({_off:false},0).to({x:332.6},42).wait(1));

	// Layer 8
	this.instance_8 = new lib.Symbol9("synched",0);
	this.instance_8.setTransform(336.1,313.7,1,1.024,0,12.4,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(5).to({_off:false},0).wait(1).to({scaleY:1.02,skewX:10.4},0).wait(1).to({scaleY:1.02,skewX:8.8},0).wait(1).to({scaleY:1.01,skewX:7.6},0).wait(1).to({scaleY:1.01,skewX:6.5},0).wait(1).to({scaleY:1.01,skewX:5.6},0).wait(1).to({scaleY:1.01,skewX:4.9},0).wait(1).to({scaleY:1.01,skewX:4.2},0).wait(1).to({scaleY:1.01,skewX:3.6},0).wait(1).to({scaleY:1.01,skewX:3.1},0).wait(1).to({scaleY:1,skewX:2.6},0).wait(1).to({scaleY:1,skewX:2.3},0).wait(1).to({skewX:1.9},0).wait(1).to({scaleY:1,skewX:1.6},0).wait(1).to({skewX:1.3},0).wait(1).to({scaleY:1,skewX:1.1},0).wait(1).to({skewX:0.9},0).wait(1).to({scaleY:1,skewX:0.7},0).wait(1).to({skewX:0.6},0).wait(1).to({skewX:0.4},0).wait(1).to({skewX:0.3},0).wait(1).to({scaleY:1,skewX:0.2},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:0.1},0).wait(1).to({startPosition:0},0).wait(1).to({skewX:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(1).to({startPosition:0},0).wait(58));

	// Layer 9
	this.instance_9 = new lib.txt004();
	this.instance_9.setTransform(360.2,771.3);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(91));

	// Layer 14
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,577.2,-330.3)).s().p("EgyJBO1MAAAhUQUA0cge+AvigrWMAAVBnwQuMhVvKJ+QuSJZtzQNIrwEPIoFD7IkJHYIlgAiIkjFcg");
	this.shape.setTransform(321.1,568.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,650.7,-457.9)).s().p("EgmqA64MAAAhUPQagvpZNyyMAZoBEyQjLBnjNCHQuRJYt2QNIrtEQIoFD7IkJHXIlgAiIkjFcg");
	this.shape_1.setTransform(247.5,696);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,667.3,-486.4)).s().p("EgkEA2bMAAAhUPQUGr3TWtrMAgtA+3IhMAwQuRJZt2QNIrtEPIoFD7IkJHYIlgAhIkjFdg");
	this.shape_2.setTransform(230.9,724.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,700,-505.8)).s().p("Ege9AzZMAAAhUPQPlpMPIqSMAfOBANQppH4pcLEIrvEPIoDD7IkKHYIlfAhIkkFdg");
	this.shape_3.setTransform(198.3,743.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,733.6,-522.7)).s().p("EgZtAwwMAAAhUPQLhmzLSnZMAcoBEhQkUEWkRFAIrvEPIoDD7IkJHYIlgAhIkkFdg");
	this.shape_4.setTransform(164.6,760.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,750.7,-532.3)).s().p("EgXDAvQMAAAhUPQJLlaJAlyMAb7BHKQhoBzhnB6IrwEPIoED7IkIHYIlgAhIkjFdg");
	this.shape_5.setTransform(147.6,770.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,770.1,-542.9)).s().p("EgUBAtmMAAAhUQQGgj1GbkBMAbIBIiIo8DOIoFD7IkHHYIlgAiIkjFcg");
	this.shape_6.setTransform(128.2,781.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,789.3,-549)).s().p("EgRAAspMAAAhUPQE9i7E6jCMAYKBIzIi6BEIoFD6IkKHYIldAiIkkFcg");
	this.shape_7.setTransform(109,787.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,797.5,-555.7)).s().p("EgPvArmMAAAhUQQDPh5DNh9MAZCBHoIgXAIIoFD7IkJHYIleAiIkjFcg");
	this.shape_8.setTransform(100.8,793.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,804.5,-560.7)).s().p("EgOoAq0MAAAhUPID3iTMAZaBHFImPDCIkKHYIleAiIkjFcg");
	this.shape_9.setTransform(93.8,798.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,810.4,-572.3)).s().p("EgNuApAMAAAhS6MAbcBEWIkaCJIkJHYIleAiIkjFcg");
	this.shape_10.setTransform(87.9,810.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,820.7,-592.9)).s().p("EgMGAlyMAAAhMeMAYNA/fIhMAkIkJHYIlgAiIkhFcg");
	this.shape_11.setTransform(77.6,831);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,835.9,-641.1)).s().p("ApueQMAAAg9bMATdA3ZIgkBAIlgAhIkhFdg");
	this.shape_12.setTransform(62.3,879.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,856.4,-704.6)).s().p("AmhUVMAAAgpkMANDAlcIkOFDg");
	this.shape_13.setTransform(41.9,942.7);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,864.7,-737.2)).s().p("AlOPPIAA/ZIKdeYIhoB9g");
	this.shape_14.setTransform(33.6,975.3);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.bf(img.blue_bg, null, new cjs.Matrix2D(1,0,0,1,879.3,-780.9)).s().p("Ai8IaIAAxbIF5SDg");
	this.shape_15.setTransform(18.9,1019);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},3).to({state:[{t:this.shape_13}]},5).to({state:[{t:this.shape_14}]},5).to({state:[{t:this.shape_15}]},5).to({state:[]},4).wait(58));

	// Layer 20
	this.instance_10 = new lib.bgbg();
	this.instance_10.setTransform(0,0,1.778,1.777);

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(91));

	// pinzi
	this.instance_11 = new lib.Symbol7();
	this.instance_11.setTransform(342.4,572.4,1.21,1.21,0.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(4).to({_off:false},0).wait(87));

	// Layer 17
	this.instance_12 = new lib.wave002_1("synched",0);
	this.instance_12.setTransform(559.2,673.3,0.961,0.834);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(4).to({_off:false},0).wait(1).to({scaleX:1.34,scaleY:1.26,skewX:13.2,skewY:10.9,x:590,y:671.4,alpha:0.637},0).wait(1).to({scaleX:1.45,scaleY:1.39,skewX:17.3,skewY:14.3,x:599.6,y:670.9,alpha:0.524},0).wait(1).to({scaleX:1.53,scaleY:1.48,skewX:20,skewY:16.5,x:606,y:670.5,alpha:0.449},0).wait(1).to({scaleX:1.59,scaleY:1.54,skewX:22.1,skewY:18.2,x:610.7,y:670.2,alpha:0.394},0).wait(1).to({scaleX:1.63,scaleY:1.6,skewX:23.7,skewY:19.5,x:614.5,y:670,alpha:0.349},0).wait(1).to({scaleX:1.67,scaleY:1.64,skewX:25.1,skewY:20.7,x:617.8,y:669.8,alpha:0.31},0).wait(1).to({scaleX:1.71,scaleY:1.68,skewX:26.4,skewY:21.7,x:620.7,y:669.6,alpha:0.275},0).wait(1).to({scaleX:1.74,scaleY:1.72,skewX:27.4,skewY:22.6,x:623.2,y:669.5,alpha:0.246},0).wait(1).to({scaleX:1.77,scaleY:1.75,skewX:28.3,skewY:23.3,x:625.3,y:669.4,alpha:0.222},0).wait(1).to({scaleX:1.79,scaleY:1.77,skewX:29.1,skewY:24,x:627.1,y:669.3,alpha:0.2},0).wait(1).to({scaleX:1.81,scaleY:1.79,skewX:29.8,skewY:24.5,x:628.7,y:669.2,alpha:0.182},0).wait(1).to({scaleX:1.82,scaleY:1.81,skewX:30.3,skewY:25,x:630,y:669.1,alpha:0.166},0).wait(1).to({scaleX:1.84,scaleY:1.83,skewX:30.8,skewY:25.4,x:631.2,y:669,alpha:0.152},0).wait(1).to({scaleX:1.85,scaleY:1.84,skewX:31.3,skewY:25.8,x:632.2,alpha:0.14},0).wait(1).to({scaleX:1.86,scaleY:1.86,skewX:31.7,skewY:26.1,x:633.2,y:668.9,alpha:0.129},0).wait(1).to({scaleX:1.87,scaleY:1.87,skewX:32.1,skewY:26.4,x:634,y:668.8,alpha:0.119},0).wait(1).to({scaleX:1.88,scaleY:1.88,skewX:32.4,skewY:26.7,x:634.8,alpha:0.11},0).wait(1).to({scaleX:1.89,scaleY:1.89,skewX:32.7,skewY:26.9,x:635.5,alpha:0.102},0).wait(1).to({scaleX:1.9,scaleY:1.9,skewX:32.9,skewY:27.2,x:636.1,y:668.7,alpha:0.095},0).wait(1).to({scaleX:1.9,scaleY:1.9,skewX:33.2,skewY:27.4,x:636.7,alpha:0.088},0).wait(1).to({scaleX:1.91,scaleY:1.91,skewX:33.4,skewY:27.6,x:637.2,alpha:0.082},0).wait(1).to({scaleX:1.92,scaleY:1.92,skewX:33.6,skewY:27.7,x:637.7,y:668.6,alpha:0.076},0).wait(1).to({scaleX:1.92,scaleY:1.92,skewX:33.8,skewY:27.9,x:638.2,alpha:0.07},0).wait(1).to({scaleX:1.93,scaleY:1.93,skewX:34,skewY:28,x:638.6,alpha:0.065},0).wait(1).to({scaleX:1.93,scaleY:1.94,skewX:34.2,skewY:28.2,x:639,alpha:0.06},0).wait(1).to({scaleX:1.94,scaleY:1.94,skewX:34.3,skewY:28.3,x:639.4,y:668.5,alpha:0.056},0).wait(1).to({scaleX:1.94,scaleY:1.95,skewX:34.5,skewY:28.4,x:639.7,alpha:0.052},0).wait(1).to({scaleX:1.94,scaleY:1.95,skewX:34.6,skewY:28.6,x:640.1,alpha:0.048},0).wait(1).to({scaleX:1.95,scaleY:1.95,skewX:34.8,skewY:28.7,x:640.4,alpha:0.044},0).wait(1).to({scaleX:1.95,scaleY:1.96,skewX:34.9,skewY:28.8,x:640.7,alpha:0.041},0).wait(1).to({scaleX:1.96,scaleY:1.96,skewX:35,skewY:28.9,x:641,y:668.4,alpha:0.037},0).wait(1).to({scaleX:1.96,scaleY:1.97,skewX:35.1,skewY:29,x:641.2,alpha:0.034},0).wait(1).to({scaleX:1.96,scaleY:1.97,skewX:35.3,skewY:29.1,x:641.5,alpha:0.031},0).wait(1).to({scaleX:1.96,scaleY:1.97,skewX:35.4,x:641.7,alpha:0.028},0).wait(1).to({scaleX:1.97,scaleY:1.98,skewX:35.5,skewY:29.2,x:642,alpha:0.026},0).wait(1).to({scaleX:1.97,scaleY:1.98,skewX:35.6,skewY:29.3,x:642.2,alpha:0.023},0).wait(1).to({scaleX:1.97,scaleY:1.98,skewY:29.4,x:642.4,alpha:0.02},0).wait(1).to({scaleX:1.98,scaleY:1.99,skewX:35.7,skewY:29.5,x:642.6,y:668.3,alpha:0.018},0).wait(1).to({scaleX:1.98,scaleY:1.99,skewX:35.8,x:642.8,alpha:0.016},0).wait(1).to({scaleX:1.98,scaleY:1.99,skewX:35.9,skewY:29.6,x:643,alpha:0.013},0).wait(1).to({scaleX:1.98,scaleY:1.99,skewX:36,skewY:29.7,x:643.2,alpha:0.011},0).wait(1).to({scaleX:1.98,scaleY:2,x:643.4,alpha:0.009},0).wait(1).to({scaleX:1.99,scaleY:2,skewX:36.1,skewY:29.8,x:643.5,alpha:0.007},0).wait(1).to({scaleX:1.99,scaleY:2,skewX:36.2,x:643.7,alpha:0.005},0).wait(1).to({scaleX:1.99,scaleY:2,skewX:36.3,skewY:29.9,x:643.9,alpha:0.004},0).wait(1).to({scaleX:1.99,scaleY:2,x:644,alpha:0.002},0).wait(1).to({scaleX:1.99,scaleY:2.01,skewX:36.4,skewY:30,x:644.2,alpha:0},0).to({_off:true},1).wait(39));

	// Layer 18
	this.instance_13 = new lib.Symbol12();
	this.instance_13.setTransform(548.2,766.2,0.864,1,4.7);

	this.instance_14 = new lib.Symbol8();
	this.instance_14.setTransform(292.1,851.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14},{t:this.instance_13}]},1).wait(90));

	// Layer 19
	this.instance_15 = new lib.bg();
	this.instance_15.setTransform(0,0,4,3.86);

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(91));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320,514.8,885.9,1135.3);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;
