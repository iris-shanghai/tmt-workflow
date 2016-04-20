(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 800,
	height: 960,
	fps: 30,
	color: "#003300",
	manifest: [
		{src:"images/loading/loadingbg.jpg", id:"loadingbg"}
	]
};



// symbols:



(lib.我享受智慧带来的快乐1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.生存 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib._0 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib._0401 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib._0411 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib._0412 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib._042 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib._051 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib._052 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib._053 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib._054 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.改变世界 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.eye0 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.footprint1 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.footprint2 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.footprint3 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.load = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.loadingbg = function() {
	this.initialize(img.loadingbg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.loadinggear = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.loadingpic = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.loading页 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.灯泡关闭 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.灯泡亮 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.宇宙 = function() {
	this.spriteSheet = ss["loading_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.Typingword6 = function() {
	this.initialize();

	// 光标
	this.instance = new lib._051();
	this.instance.setTransform(-121.9,-193.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-121.9,-193.2,381,208);


(lib.Typingword5 = function() {
	this.initialize();

	// 光标
	this.instance = new lib._0411();
	this.instance.setTransform(-90.3,-9.2);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-90.3,-9.2,319,116);


(lib.Typingcursor复制2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#DFE7EA").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape.setTransform(5.5,24.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(211,221,226,0.776)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_1.setTransform(5.5,24.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(199,210,217,0.553)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_2.setTransform(5.5,24.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(186,200,209,0.325)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_3.setTransform(5.5,24.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(174,189,200,0.102)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_4.setTransform(5.5,24.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("rgba(174,189,200,0.325)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_5.setTransform(5.5,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("rgba(174,189,200,0.553)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_6.setTransform(5.5,24.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("rgba(174,189,200,0.776)").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_7.setTransform(5.5,24.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#AEBDC8").s().p("Ag2D0IAAnoIBsAAIAAHog");
	this.shape_8.setTransform(5.5,24.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,11,49);


(lib.text00 = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib._052();
	this.instance.setTransform(67.4,-11.7);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(67.4,-11.7,162,134);


(lib.logo = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._0412();
	this.instance.setTransform(11,72.1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(11,72.1,102,80);


(lib.loading_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib._0();
	this.instance.setTransform(59,16.8);

	this.instance_1 = new lib._0();
	this.instance_1.setTransform(59,16.8);

	this.instance_2 = new lib._0();
	this.instance_2.setTransform(59,16.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance,p:{x:59}}]},10).to({state:[{t:this.instance_1,p:{x:59}},{t:this.instance,p:{x:73}}]},9).to({state:[{t:this.instance_2},{t:this.instance_1,p:{x:73}},{t:this.instance,p:{x:87.5}}]},9).to({state:[{t:this.instance_1,p:{x:59}},{t:this.instance,p:{x:73}}]},9).to({state:[{t:this.instance,p:{x:59}}]},9).wait(9));

	// load
	this.instance_3 = new lib.load();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(55));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,30);


(lib.loadbg复制2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.loadingbg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.loadbg复制 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.loadingbg();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.heart0 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._0401();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,141,128);


(lib.gear2 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.loadinggear();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.footprint03 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.footprint3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.footprint02 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.footprint2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,54,34);


(lib.footprint01 = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.footprint1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,108,55);


(lib.eee = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#151515").s().p("Ag5A5QgXgXAAgiQAAghAXgYQAYgXAhAAQAiAAAXAXQAYAYAAAhQAAAigYAXQgXAYgiAAQghAAgYgYg");
	this.shape.setTransform(8.2,8.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,16.3,16.3);


(lib.earthhhhh = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib._042();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,146,146);


(lib.line0 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#727E82").ss(1,2,0,3).p("Egj5AN6MBHzAAAEgj5gN5MBHzAAA");
	this.shape.setTransform(229.8,95);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#727E82").ss(3,2,0,3).p("Egj5gOxMBHzAAAEgj5AOyMBHzAAA");
	this.shape_1.setTransform(229.8,94.6);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.5,-1.5,462.6,192.2);


(lib.lam = function() {
	this.initialize();

	// 图层 1
	this.instance = new lib.灯泡亮();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,72,78);


(lib.元件2 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Au3OYIAA8vIdvAAIAAcvg");
	this.shape.setTransform(95.3,92);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,190.6,184.1);


(lib.black000 = function() {
	this.initialize();

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("Eg+fBLAMAAAiV/MB8/AAAMAAACV/g");
	this.shape.setTransform(400,480);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


(lib.Typingword4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:true,playId:4}
		);
	}
	this.frame_78 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:false,playId:4}
		);
	}
	this.frame_89 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(78).call(this.frame_78).wait(11).call(this.frame_89).wait(1));

	// 图层 5
	this.instance = new lib.line0();
	this.instance.setTransform(123.3,-58,1,1,0,0,0,229.8,94.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:123.8,alpha:1},9).wait(81));

	// 光标
	this.instance_1 = new lib.Typingcursor复制2();
	this.instance_1.setTransform(-99.4,-59,0.66,0.93,0,0,0,5.5,24.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({x:-74.2},0).wait(4).to({x:-40},0).wait(4).to({x:-2.6},0).wait(4).to({x:32.9},0).wait(4).to({x:69.8},0).wait(4).to({x:105.8},0).wait(4).to({x:141.8},0).wait(4).to({x:177.8},0).wait(4).to({x:214.3},0).wait(4).to({x:249.4},0).wait(4).to({x:288.7},0).wait(4).to({x:322.3},0).wait(4).to({x:350.3},0).wait(12).to({alpha:0},10).to({_off:true},1).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AodATIAAm0IEyAAIAAG0g");
	var mask_graphics_22 = new cjs.Graphics().p("AodAfIAAm1IKGAAIAAG1g");
	var mask_graphics_26 = new cjs.Graphics().p("AodAfIAAm1IP8AAIAAG1g");
	var mask_graphics_30 = new cjs.Graphics().p("AqvAfIAAm1IVfAAIAAG1g");
	var mask_graphics_34 = new cjs.Graphics().p("AtoAfIAAm1IbRAAIAAG1g");
	var mask_graphics_38 = new cjs.Graphics().p("AwcAfIAAm1MAg5AAAIAAG1g");
	var mask_graphics_42 = new cjs.Graphics().p("AzQAfIAAm1MAmhAAAIAAG1g");
	var mask_graphics_46 = new cjs.Graphics().p("A2EAfIAAm1MAsJAAAIAAG1g");
	var mask_graphics_50 = new cjs.Graphics().p("A46AfIAAm1MAx1AAAIAAG1g");
	var mask_graphics_54 = new cjs.Graphics().p("A7qAfIAAm1MA3UAAAIAAG1g");
	var mask_graphics_58 = new cjs.Graphics().p("A+uDbIAAm1MA9dAAAIAAG1g");
	var mask_graphics_62 = new cjs.Graphics().p("EghWADbIAAm1MBCtAAAIAAG1g");
	var mask_graphics_66 = new cjs.Graphics().p("EgjfADbIAAm1MBG/AAAIAAG1g");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:-54.2,y:-41.8}).wait(4).to({graphics:mask_graphics_22,x:-54.2,y:-40.7}).wait(4).to({graphics:mask_graphics_26,x:-54.2,y:-40.7}).wait(4).to({graphics:mask_graphics_30,x:-39.6,y:-40.7}).wait(4).to({graphics:mask_graphics_34,x:-21.2,y:-40.7}).wait(4).to({graphics:mask_graphics_38,x:-3.2,y:-40.7}).wait(4).to({graphics:mask_graphics_42,x:14.8,y:-40.7}).wait(4).to({graphics:mask_graphics_46,x:32.8,y:-40.7}).wait(4).to({graphics:mask_graphics_50,x:51.1,y:-40.7}).wait(4).to({graphics:mask_graphics_54,x:68.6,y:-40.7}).wait(4).to({graphics:mask_graphics_58,x:88.2,y:-59.5}).wait(4).to({graphics:mask_graphics_62,x:105,y:-59.5}).wait(4).to({graphics:mask_graphics_66,x:118.7,y:-59.5}).wait(24));

	// 图层 6
	this.instance_2 = new lib.我享受智慧带来的快乐1();
	this.instance_2.setTransform(-104,-80.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(72));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-154.6,463.6,193.2);


(lib.Typingword3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:true,playId:3}
		);
	}
	this.frame_67 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:false,playId:3}
		);
	}
	this.frame_78 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(67).call(this.frame_67).wait(11).call(this.frame_78).wait(1));

	// 图层 5
	this.instance = new lib.line0();
	this.instance.setTransform(113,-58,1,1,0,0,0,229.8,94.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:113.5,alpha:1},9).wait(70));

	// 光标
	this.instance_1 = new lib.Typingcursor复制2();
	this.instance_1.setTransform(-56.1,-53,0.66,0.928,0,0,0,5.5,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({x:-26.1},0).wait(4).to({x:6.4},0).wait(4).to({x:43.9},0).wait(4).to({x:79.4},0).wait(4).to({x:116.4},0).wait(4).to({x:152.9},0).wait(4).to({x:188.4},0).wait(4).to({x:226.4},0).wait(4).to({x:261.4},0).wait(4).to({x:288.4},0).wait(13).to({alpha:0},11).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AicDVIAAmpIE5AAIAAGpg");
	var mask_graphics_22 = new cjs.Graphics().p("Ak5DVIAAmpIJzAAIAAGpg");
	var mask_graphics_26 = new cjs.Graphics().p("An0DVIAAmpIPpAAIAAGpg");
	var mask_graphics_30 = new cjs.Graphics().p("AqmDVIAAmpIVMAAIAAGpg");
	var mask_graphics_34 = new cjs.Graphics().p("AtfDVIAAmpIa+AAIAAGpg");
	var mask_graphics_38 = new cjs.Graphics().p("AwVDVIAAmpMAgrAAAIAAGpg");
	var mask_graphics_42 = new cjs.Graphics().p("AzHDVIAAmpMAmOAAAIAAGpg");
	var mask_graphics_46 = new cjs.Graphics().p("A2FDVIAAmpMAsKAAAIAAGpg");
	var mask_graphics_50 = new cjs.Graphics().p("A40DVIAAmpMAxoAAAIAAGpg");
	var mask_graphics_54 = new cjs.Graphics().p("A67DVIAAmpMA12AAAIAAGpg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:-44.3,y:-53.3}).wait(4).to({graphics:mask_graphics_22,x:-28.7,y:-53.3}).wait(4).to({graphics:mask_graphics_26,x:-9.9,y:-53.3}).wait(4).to({graphics:mask_graphics_30,x:7.8,y:-53.3}).wait(4).to({graphics:mask_graphics_34,x:26.3,y:-53.3}).wait(4).to({graphics:mask_graphics_38,x:44.6,y:-53.3}).wait(4).to({graphics:mask_graphics_42,x:62.3,y:-53.3}).wait(4).to({graphics:mask_graphics_46,x:81.3,y:-53.3}).wait(4).to({graphics:mask_graphics_50,x:98.8,y:-53.3}).wait(4).to({graphics:mask_graphics_54,x:112.3,y:-53.3}).wait(25));

	// 图层 3
	this.instance_2 = new lib.改变世界();
	this.instance_2.setTransform(-56.7,-75.1);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(18).to({_off:false},0).wait(61));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-118.8,-154.6,463.6,193.2);


(lib.Typingword2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:true,playId:2}
		);
	}
	this.frame_119 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:false,playId:2}
		);
	}
	this.frame_130 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(119).call(this.frame_119).wait(11).call(this.frame_130).wait(1));

	// 图层 3
	this.instance = new lib.line0();
	this.instance.setTransform(108.5,-58,1,1,0,0,0,229.8,94.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(122));

	// 光标
	this.instance_1 = new lib.Typingcursor复制2();
	this.instance_1.setTransform(-47.7,-89.9,0.66,0.95,0,0,0,5.5,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({x:-12.9},0).wait(4).to({x:21.1},0).wait(4).to({x:57.5},0).wait(4).to({x:90.3},0).wait(3).to({x:130.3},0).wait(4).to({x:165.9},0).wait(4).to({x:203.1},0).wait(4).to({x:239.1},0).wait(4).to({x:270.3},0).wait(3).to({x:-111.8,y:-19.3},0).wait(6).to({x:-68.2},0).wait(4).to({x:-33.4},0).wait(8).to({x:2.6},0).wait(4).to({x:38.6},0).wait(4).to({x:75},0).wait(4).to({x:111.4},0).wait(4).to({x:147.8},0).wait(4).to({x:185},0).wait(4).to({x:221},0).wait(4).to({x:257.4},0).wait(4).to({x:293.4},0).wait(4).to({x:321.4},0).wait(11).to({alpha:0},10).to({_off:true},1).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AiQDpIAAnRIEhAAIAAHRg");
	var mask_graphics_24 = new cjs.Graphics().p("Ak+DpIAAnRIJ9AAIAAHRg");
	var mask_graphics_28 = new cjs.Graphics().p("An0DpIAAnRIPpAAIAAHRg");
	var mask_graphics_32 = new cjs.Graphics().p("AqYDpIAAnRIUxAAIAAHRg");
	var mask_graphics_35 = new cjs.Graphics().p("AtgDpIAAnRIbBAAIAAHRg");
	var mask_graphics_39 = new cjs.Graphics().p("AwSDpIAAnRMAglAAAIAAHRg");
	var mask_graphics_43 = new cjs.Graphics().p("AzMDpIAAnRMAmZAAAIAAHRg");
	var mask_graphics_47 = new cjs.Graphics().p("A2ADpIAAnRMAsBAAAIAAHRg");
	var mask_graphics_51 = new cjs.Graphics().p("A4cDpIAAnRMAw5AAAIAAHRg");
	var mask_graphics_60 = new cjs.Graphics().p("A9XJKIAAnTIF4AAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_64 = new cjs.Graphics().p("A9XJKIAAnTILUAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_72 = new cjs.Graphics().p("A9XJKIAAnTIQ8AAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_76 = new cjs.Graphics().p("A9XJKIAAnTIWkAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_80 = new cjs.Graphics().p("A9XJKIAAnTIcQAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_84 = new cjs.Graphics().p("A9XJKIAAnTMAh6AAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_88 = new cjs.Graphics().p("A9XJKIAAnTMAnmAAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_92 = new cjs.Graphics().p("A9XJKIAAnTMAtaAAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_96 = new cjs.Graphics().p("A9XJKIAAnTMAzCAAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_100 = new cjs.Graphics().p("A9XJKIAAnTMA4uAAAIAAHTgAzhh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_104 = new cjs.Graphics().p("A/KJKIAAnTMA+VAAAIAAHTgA1Uh2IAAnTMAw5AAAIAAHTg");
	var mask_graphics_108 = new cjs.Graphics().p("EghWAJKIAAnTMBCuAAAIAAHTgA3gh2IAAnTMAw5AAAIAAHTg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:-31.9,y:-89.9}).wait(4).to({graphics:mask_graphics_24,x:-14.5,y:-89.9}).wait(4).to({graphics:mask_graphics_28,x:3.7,y:-89.9}).wait(4).to({graphics:mask_graphics_32,x:20.1,y:-89.9}).wait(3).to({graphics:mask_graphics_35,x:40.1,y:-89.9}).wait(4).to({graphics:mask_graphics_39,x:57.9,y:-89.9}).wait(4).to({graphics:mask_graphics_43,x:76.5,y:-89.9}).wait(4).to({graphics:mask_graphics_47,x:94.5,y:-89.9}).wait(4).to({graphics:mask_graphics_51,x:110.1,y:-89.9}).wait(9).to({graphics:mask_graphics_60,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_64,x:78.6,y:-54.5}).wait(8).to({graphics:mask_graphics_72,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_76,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_80,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_84,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_88,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_92,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_96,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_100,x:78.6,y:-54.5}).wait(4).to({graphics:mask_graphics_104,x:90.2,y:-54.5}).wait(4).to({graphics:mask_graphics_108,x:104.2,y:-54.5}).wait(23));

	// 图层 1
	this.instance_2 = new lib.宇宙();
	this.instance_2.setTransform(-105.9,-111.7);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(111));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.3,-154.6,463.6,193.2);


(lib.Typingword复制 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:true,playId:0}
		);
	}
	this.frame_203 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:false,playId:0}
		);
	}
	this.frame_219 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(203).call(this.frame_203).wait(16).call(this.frame_219).wait(1));

	// 光标
	this.instance = new lib.Typingcursor复制2();
	this.instance.setTransform(-10.9,-39.7,0.661,0.803,0,0,0,5.6,24.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(18).to({x:23.1},0).wait(4).to({x:51.1},0).wait(4).to({x:79},0).wait(4).to({x:108.1},0).wait(4).to({x:131.2},0).wait(19).to({x:165.4},0).wait(4).to({x:192.7},0).wait(4).to({x:221.8},0).wait(4).to({x:250},0).wait(3).to({x:-67,y:31.4},0).wait(15).to({x:-34},0).wait(4).to({x:-7},0).wait(4).to({x:23.6},0).wait(4).to({x:51.2},0).wait(4).to({x:80.6},0).wait(4).to({x:107.6},0).wait(4).to({x:135.2},0).wait(4).to({x:165.2},0).wait(4).to({x:192.8},0).wait(4).to({x:222.5},0).wait(4).to({x:249.8},0).wait(4).to({x:279.2},0).wait(4).to({x:306.8},0).wait(3).to({x:-39.6,y:104.1},0).wait(15).to({x:-6},0).wait(4).to({x:24},0).wait(16).to({x:51},0).wait(4).to({x:79.8},0).wait(3).to({x:109.8},0).wait(4).to({x:136.2},0).wait(4).to({x:165.3},0).wait(4).to({x:193.8},0).wait(4).to({x:220.8},0).wait(4).to({x:250.2},0).wait(3).to({x:272.1},0).wait(10).to({alpha:0},10).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_18 = new cjs.Graphics().p("AiIDKIAAmTIERAAIAAGTg");
	var mask_graphics_22 = new cjs.Graphics().p("AkRDKIAAmTIIjAAIAAGTg");
	var mask_graphics_26 = new cjs.Graphics().p("AmdDKIAAmTIM7AAIAAGTg");
	var mask_graphics_30 = new cjs.Graphics().p("AouDKIAAmTIRdAAIAAGTg");
	var mask_graphics_34 = new cjs.Graphics().p("AqiDKIAAmTIVFAAIAAGTg");
	var mask_graphics_53 = new cjs.Graphics().p("AtNDKIAAmTIabAAIAAGTg");
	var mask_graphics_57 = new cjs.Graphics().p("AvVDKIAAmTIerAAIAAGTg");
	var mask_graphics_61 = new cjs.Graphics().p("AxnDKIAAmTMAjPAAAIAAGTg");
	var mask_graphics_65 = new cjs.Graphics().p("Az0DKIAAmTMAnpAAAIAAGTg");
	var mask_graphics_83 = new cjs.Graphics().p("A4ZI3IAAnAIEcAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_87 = new cjs.Graphics().p("A4ZI3IAAnAIIrAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_91 = new cjs.Graphics().p("A4ZI3IAAnAINdAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_95 = new cjs.Graphics().p("A4ZI3IAAnAIRyAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_99 = new cjs.Graphics().p("A4ZI3IAAnAIWXAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_103 = new cjs.Graphics().p("A4ZI3IAAnAIajAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_107 = new cjs.Graphics().p("A4ZI3IAAnAIe3AAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_111 = new cjs.Graphics().p("A4ZI3IAAnAMAjjAAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_115 = new cjs.Graphics().p("A4ZI3IAAnAMAn3AAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_119 = new cjs.Graphics().p("A4ZI3IAAnAMAsgAAAIAAHAgAvOihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_123 = new cjs.Graphics().p("A4YI3IAAnAMAwvAAAIAAHAgAvQihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_127 = new cjs.Graphics().p("A62I3IAAnAMA1tAAAIAAHAgAxWihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_131 = new cjs.Graphics().p("A9AI3IAAnAMA6BAAAIAAHAgAzgihIAAmVMAnoAAAIAAGVg");
	var mask_graphics_149 = new cjs.Graphics().p("A4kOcIAAm+IE4AAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_153 = new cjs.Graphics().p("A4kOcIAAm+IJaAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_169 = new cjs.Graphics().p("A4kOcIAAm+INoAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_173 = new cjs.Graphics().p("A4kOcIAAm+ISIAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_176 = new cjs.Graphics().p("A4kOcIAAm+IW0AAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_180 = new cjs.Graphics().p("A4kOcIAAm+Ia6AAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_184 = new cjs.Graphics().p("A4kOcIAAm+IfdAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_188 = new cjs.Graphics().p("A4kOcIAAm+MAj6AAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_192 = new cjs.Graphics().p("A4kOcIAAm+MAoIAAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_196 = new cjs.Graphics().p("A4kOcIAAm+MAssAAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");
	var mask_graphics_199 = new cjs.Graphics().p("A4kOcIAAm+MAwJAAAIAAG+gA9ADSIAAm+MA6BAAAIAAG+gAzgoGIAAmVMAnoAAAIAAGVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(18).to({graphics:mask_graphics_18,x:6.2,y:-39.7}).wait(4).to({graphics:mask_graphics_22,x:19.9,y:-39.7}).wait(4).to({graphics:mask_graphics_26,x:33.8,y:-39.7}).wait(4).to({graphics:mask_graphics_30,x:48.4,y:-39.7}).wait(4).to({graphics:mask_graphics_34,x:59.9,y:-39.7}).wait(19).to({graphics:mask_graphics_53,x:77,y:-39.7}).wait(4).to({graphics:mask_graphics_57,x:90.7,y:-39.7}).wait(4).to({graphics:mask_graphics_61,x:105.2,y:-39.7}).wait(4).to({graphics:mask_graphics_65,x:119.3,y:-39.7}).wait(18).to({graphics:mask_graphics_83,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_87,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_91,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_95,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_99,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_103,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_107,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_111,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_115,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_119,x:90,y:-3.2}).wait(4).to({graphics:mask_graphics_123,x:90.2,y:-3.2}).wait(4).to({graphics:mask_graphics_127,x:103.6,y:-3.2}).wait(4).to({graphics:mask_graphics_131,x:117.4,y:-3.2}).wait(18).to({graphics:mask_graphics_149,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_153,x:117.4,y:32.5}).wait(16).to({graphics:mask_graphics_169,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_173,x:117.4,y:32.5}).wait(3).to({graphics:mask_graphics_176,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_180,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_184,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_188,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_192,x:117.4,y:32.5}).wait(4).to({graphics:mask_graphics_196,x:117.4,y:32.5}).wait(3).to({graphics:mask_graphics_199,x:117.4,y:32.5}).wait(21));

	// 图层 3
	this.instance_1 = new lib.loading页();
	this.instance_1.setTransform(-62.1,-57.5);
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(202));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-14.6,-59.5,7.3,39.4);


(lib.share = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.元件2();
	this.instance.setTransform(82.5,79.2,1,1,0,0,0,95.3,92);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(45));

	// 图层 1
	this.instance_1 = new lib._053();

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({x:-2},0).wait(1).to({x:2},0).wait(1).to({x:-3},0).wait(1).to({x:2},0).wait(1).to({x:-3},0).wait(1).to({x:0},0).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-12.8,-12.8,190.5,184.1);


(lib.logog = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.logo();
	this.instance.setTransform(158.5,50.7,1,1,0,0,0,73,73);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(96.5,49.8,102,80);


(lib.load000 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_15 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(15).call(this.frame_15).wait(1));

	// 图层 1
	this.instance = new lib.loading_1();
	this.instance.setTransform(46,15,1,1,0,0,0,46,15);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:0},14).to({_off:true},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,59,30);


(lib.heart = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.heart0();
	this.instance.setTransform(149,43.3,1,1,0,0,0,69.5,63.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.05,scaleY:1.05},0).wait(1).to({scaleX:1.17,scaleY:1.17},0).to({scaleX:1,scaleY:1},9,cjs.Ease.get(1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(79.5,-20.3,141,128);


(lib.gotoindex = function() {
	this.initialize();

	// 图层 2
	this.instance = new lib.元件2();
	this.instance.setTransform(46.5,40.7,1,0.734,0,0,0,95.3,92);
	this.instance.alpha = 0.02;

	// 图层 1
	this.instance_1 = new lib._054();

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-48.8,-26.8,190.5,135.1);


(lib.ggo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3
	this.instance = new lib.元件2();
	this.instance.setTransform(36.7,26.8,1.587,1.587,0,0,0,95.3,92);
	this.instance.alpha = 0.02;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(20));

	// 图层 4
	this.instance_1 = new lib.lam();
	this.instance_1.setTransform(36,39,1,1,0,0,0,36,39);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:0},9).to({alpha:1},10).wait(1));

	// 图层 2
	this.instance_2 = new lib.灯泡关闭();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20));

	// 图层 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(22,13,3,0.012)").s().p("AjqDrQhhhiAAiJQAAiIBhhiQBihhCIAAQCJAABiBhQBhBiAACIQAACJhhBiQhiBhiJAAQiIAAhihhg");
	this.shape.setTransform(33.3,33.3);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(20));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114.5,-119.2,302.4,292.1);


(lib.gear3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gear2();
	this.instance.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},24).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.gear2_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gear2();
	this.instance.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},34).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.gear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.gear2();
	this.instance.setTransform(28.5,28.5,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},59).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,57,57);


(lib.footprint031 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.footprint03();
	this.instance.setTransform(23,23,1,1,0,0,0,23,23);
	this.instance.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).wait(15).to({alpha:0},16,cjs.Ease.get(-1)).to({_off:true},1).wait(79));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,46);


(lib.footprint021 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.footprint02();
	this.instance.setTransform(27,17,1,1,0,0,0,27,17);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).wait(15).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,54,34);


(lib.footprint011 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.footprint01();
	this.instance.setTransform(54,27.5,1,1,0,0,0,54,27.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9,cjs.Ease.get(1)).wait(15).to({alpha:0},15,cjs.Ease.get(-1)).to({_off:true},1).wait(80));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,108,55);


(lib.footprint0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 脚印1-2
	this.instance = new lib.footprint011();
	this.instance.setTransform(175.8,27,1,1,8.7,0,0,54.1,27.5);
	this.instance.alpha = 0.801;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(49).to({_off:false},0).wait(71));

	// 脚印1-1
	this.instance_1 = new lib.footprint011();
	this.instance_1.setTransform(129.8,-38.9,1,1,0,0,0,54,27.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(39).to({_off:false},0).wait(81));

	// 脚印2-2
	this.instance_2 = new lib.footprint021();
	this.instance_2.setTransform(-24.3,24.7,1.185,1.185,8.2,0,0,27,17.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(91));

	// 脚印2-1
	this.instance_3 = new lib.footprint021();
	this.instance_3.setTransform(-36,-31.2,1,1,0,0,0,27,17);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(19).to({_off:false},0).wait(101));

	// 脚印3-2
	this.instance_4 = new lib.footprint031();
	this.instance_4.setTransform(-147.8,86.2,1,1,0,0,0,23,23);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(10).to({_off:false},0).wait(110));

	// 脚印3-1
	this.instance_5 = new lib.footprint031();
	this.instance_5.setTransform(-185.7,51.8,0.913,0.913,-13.9,0,0,23,23.1);
	this.instance_5.alpha = 0.801;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(120));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.2,26.3,50.8,50.9);


(lib.eyeyey3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABvACIgLgKQBehZCCAAQCKAABiBkQhcBhiEAAQiEAAhdhigAokABIgLgKQBehaCBAAQCKAABjBlQhdBiiDAAQiEAAhdhjg");
	mask.setTransform(57.5,11.3);

	// 图层 2
	this.instance = new lib.eee();
	this.instance.setTransform(39.4,13.5,1,1,0,0,0,8.2,8.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:26.4,y:0.5},9).to({x:8.2,y:10.9},10).to({x:24.5,y:20},10).to({x:39.4,y:13.5},10).wait(1));

	// eee
	this.instance_1 = new lib.eee();
	this.instance_1.setTransform(105.1,13.5,1,1,0,0,0,8.2,8.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:92.1,y:0.5},9).to({x:73.9,y:10.9},10).to({x:90.2,y:20},10).to({x:105.1,y:13.5},10).wait(1));

	// 图层 1
	this.instance_2 = new lib.eye0();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(40));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,23);


(lib.eyeyey2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABvACIgLgKQBehZCCAAQCKAABiBkQhcBhiEAAQiEAAhdhigAokABIgLgKQBehaCBAAQCKAABjBlQhdBiiDAAQiEAAhdhjg");
	mask.setTransform(57.5,11.3);

	// 图层 2
	this.instance = new lib.eee();
	this.instance.setTransform(25.5,18.2,1,1,0,0,0,8.2,8.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:17.7},0).wait(1).to({y:16.3},0).wait(1).to({y:14.4},0).wait(1).to({y:12.1},0).wait(1).to({y:9.7},0).wait(1).to({y:7.6},0).wait(1).to({y:6},0).wait(1).to({y:4.9},0).wait(1).to({y:4.5},0).wait(21).to({y:4.8},0).wait(1).to({y:5.5},0).wait(1).to({y:6.7},0).wait(1).to({y:8.3},0).wait(1).to({y:10.4},0).wait(1).to({y:12.6},0).wait(1).to({y:14.8},0).wait(1).to({y:16.6},0).wait(1).to({y:17.7},0).wait(1).to({y:18.2},0).wait(21));

	// eee
	this.instance_1 = new lib.eee();
	this.instance_1.setTransform(89.9,18.2,1,1,0,0,0,8.2,8.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({y:17.7},0).wait(1).to({y:16.3},0).wait(1).to({y:14.4},0).wait(1).to({y:12.1},0).wait(1).to({y:9.7},0).wait(1).to({y:7.6},0).wait(1).to({y:6},0).wait(1).to({y:4.9},0).wait(1).to({y:4.5},0).wait(21).to({y:4.8},0).wait(1).to({y:5.5},0).wait(1).to({y:6.7},0).wait(1).to({y:8.3},0).wait(1).to({y:10.4},0).wait(1).to({y:12.6},0).wait(1).to({y:14.8},0).wait(1).to({y:16.6},0).wait(1).to({y:17.7},0).wait(1).to({y:18.2},0).wait(21));

	// 图层 1
	this.instance_2 = new lib.eye0();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,23);


(lib.eyeyey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 3 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ABvABIgLgJQBehWCCAAQCKAABjBgQhdBdiEgBQiEAAhdhdgAokABIgMgJQBfhWCBAAQCKAABjBgQhdBciDAAQiEAAhdhdg");
	mask.setTransform(57.9,11.2);

	// 图层 2
	this.instance = new lib.eee();
	this.instance.setTransform(10.9,10.9,1,1,0,0,0,8.2,8.2);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({x:11.5},0).wait(1).to({x:13.2},0).wait(1).to({x:16.1},0).wait(1).to({x:19.7},0).wait(1).to({x:24},0).wait(1).to({x:28.5},0).wait(1).to({x:32.8},0).wait(1).to({x:36.2},0).wait(1).to({x:38.6},0).wait(1).to({x:39.4},0).wait(21).to({x:38.8},0).wait(1).to({x:36.9},0).wait(1).to({x:33.8},0).wait(1).to({x:29.5},0).wait(1).to({x:24.5},0).wait(1).to({x:19.4},0).wait(1).to({x:14.9},0).wait(1).to({x:11.9},0).wait(1).to({x:10.9},0).wait(21));

	// eee
	this.instance_1 = new lib.eee();
	this.instance_1.setTransform(76.6,10.9,1,1,0,0,0,8.2,8.2);

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({x:77.2},0).wait(1).to({x:78.9},0).wait(1).to({x:81.8},0).wait(1).to({x:85.4},0).wait(1).to({x:89.7},0).wait(1).to({x:94.2},0).wait(1).to({x:98.5},0).wait(1).to({x:101.9},0).wait(1).to({x:104.3},0).wait(1).to({x:105.1},0).wait(21).to({x:104.5},0).wait(1).to({x:102.6},0).wait(1).to({x:99.5},0).wait(1).to({x:95.2},0).wait(1).to({x:90.2},0).wait(1).to({x:85.1},0).wait(1).to({x:80.6},0).wait(1).to({x:77.6},0).wait(1).to({x:76.6},0).wait(21));

	// 图层 1
	this.instance_2 = new lib.eye0();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,114,23);


(lib.eyeye = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1  复制 2
	this.instance = new lib.eyeyey2();
	this.instance.setTransform(184.5,180.1,1,1,0,0,0,57,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(60));

	// 图层 1 复制
	this.instance_1 = new lib.eyeyey3();
	this.instance_1.setTransform(254.8,10.2,1,1,0,0,0,57,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(60));

	// 图层 1
	this.instance_2 = new lib.eyeyey();
	this.instance_2.setTransform(57,58.7,1,1,0,0,0,57,11.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(60));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1.3,311.8,196.2);


(lib.bollll = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.earthhhhh();
	this.instance.setTransform(158.5,50.7,1,1,0,0,0,73,73);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},99).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(85.5,-22.3,146,146);


(lib.Typingword1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:true,playId:1}
		);
	}
	this.frame_69 = function() {
		Config.sendEvent(
			Config.eventDispatcher,
			'keyboradSoundControl',
			{play:false,playId:1}
		);
	}
	this.frame_85 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(69).call(this.frame_69).wait(16).call(this.frame_85).wait(1));

	// 图层 3
	this.instance = new lib.line0();
	this.instance.setTransform(108.5,-58,1,1,0,0,0,229.8,94.6);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},9).wait(77));

	// 光标
	this.instance_1 = new lib.Typingcursor复制2();
	this.instance_1.setTransform(-65.2,-64,0.66,0.95,0,0,0,5.5,24.4);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(20).to({x:-30.4},0).wait(4).to({x:3.6},0).wait(4).to({x:40},0).wait(4).to({x:72.8},0).wait(3).to({x:112.8},0).wait(4).to({x:148.4},0).wait(4).to({x:185.6},0).wait(4).to({x:221.6},0).wait(4).to({x:257},0).wait(4).to({x:287.8},0).wait(14).to({alpha:0},15).to({_off:true},1).wait(1));

	// 图层 2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_20 = new cjs.Graphics().p("AiQDpIAAnRIEhAAIAAHRg");
	var mask_graphics_24 = new cjs.Graphics().p("Ak+DpIAAnRIJ9AAIAAHRg");
	var mask_graphics_28 = new cjs.Graphics().p("An0DpIAAnRIPpAAIAAHRg");
	var mask_graphics_32 = new cjs.Graphics().p("AqYDpIAAnRIUxAAIAAHRg");
	var mask_graphics_35 = new cjs.Graphics().p("AtgDpIAAnRIbBAAIAAHRg");
	var mask_graphics_39 = new cjs.Graphics().p("AwSDpIAAnRMAglAAAIAAHRg");
	var mask_graphics_43 = new cjs.Graphics().p("AzMDpIAAnRMAmZAAAIAAHRg");
	var mask_graphics_47 = new cjs.Graphics().p("A2ADpIAAnRMAsBAAAIAAHRg");
	var mask_graphics_51 = new cjs.Graphics().p("A4xDpIAAnRMAxjAAAIAAHRg");
	var mask_graphics_55 = new cjs.Graphics().p("A7LDpIAAnRMA2XAAAIAAHRg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(20).to({graphics:mask_graphics_20,x:-49.4,y:-64}).wait(4).to({graphics:mask_graphics_24,x:-32,y:-64}).wait(4).to({graphics:mask_graphics_28,x:-13.8,y:-64}).wait(4).to({graphics:mask_graphics_32,x:2.6,y:-64}).wait(3).to({graphics:mask_graphics_35,x:22.6,y:-64}).wait(4).to({graphics:mask_graphics_39,x:40.4,y:-64}).wait(4).to({graphics:mask_graphics_43,x:59,y:-64}).wait(4).to({graphics:mask_graphics_47,x:77,y:-64}).wait(4).to({graphics:mask_graphics_51,x:94.8,y:-64}).wait(4).to({graphics:mask_graphics_55,x:110.1,y:-64}).wait(31));

	// 图层 1
	this.instance_2 = new lib.生存();
	this.instance_2.setTransform(-61,-85.8);
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(20).to({_off:false},0).wait(66));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.3,-154.6,463.6,193.2);


(lib.loading06 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_43 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(43).call(this.frame_43).wait(1));

	// 交互区-share
	this.share_mc = new lib.share();
	this.share_mc.setTransform(-2.5,204.5,1,1,0,0,0,83,82.5);
	this.share_mc.alpha = 0;
	this.share_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.share_mc).wait(16).to({_off:false},0).to({y:232.5,alpha:1},19,cjs.Ease.get(1)).wait(9));

	// 交互区-官网
	this.home_mc = new lib.gotoindex();
	this.home_mc.setTransform(-1.8,346.3,1,1,0,0,0,42,18);
	this.home_mc.alpha = 0;
	this.home_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.home_mc).wait(22).to({_off:false},0).to({y:375.8,alpha:1},21,cjs.Ease.get(1)).wait(1));

	// 文字
	this.instance = new lib.Typingword6();
	this.instance.setTransform(49.5,-110.1,1,1,0,0,0,121,65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({y:-130.1,alpha:1},9,cjs.Ease.get(1)).wait(31));

	// 日期
	this.instance_1 = new lib.text00();
	this.instance_1.setTransform(3.9,27.2,1,1,0,0,0,155.2,96);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(13).to({_off:false},0).to({y:17.2,alpha:1},8,cjs.Ease.get(1)).wait(23));

	// 图层 2
	this.instance_2 = new lib.black000();
	this.instance_2.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({x:-0.4,y:-0.4,alpha:1},16).wait(28));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.headgear = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 2
	this.instance = new lib.gear3();
	this.instance.setTransform(67.3,41.9,0.854,0.854,5.5,0,0,28.5,28.4);

	this.instance_1 = new lib.gear2_1();
	this.instance_1.setTransform(120.3,50.3,0.939,0.939,-7.5,0,0,28.5,28.4);

	this.instance_2 = new lib.gear();
	this.instance_2.setTransform(42.6,89.2,1,1,0,0,0,28.5,28.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	// 图层 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#AEBDC8").ss(1,1,1).p("AGklsIACAAQBBAIAwAwQA7A7AABTQAABSg7A6Qg6A4hSAAQgUAAgTgDQgFgBgGgCQgzgMgogmQg6g6AAhSQAAhTA6g7QA6g6BTAAQANAAAMACgAhNm2QAuAMAiAkQA2A2AABNQAAAfgJAbQgGARgIAPQgMAWgTASQg0A2hNAAQgQAAgPgCQgHgBgGgCQgwgLgmgmQg2g2AAhMQAAgsASglQAFgMAIgLQAKgOANgNQA2g2BMAAQAaAAAXAGIHxBKAowBxQANgTASgSQA/g/BaAAQBZAAA/A/QBABAAABZQAAArgPAkQAAADgBACQgQAlggAgQg/A/hZAAQhaAAg/g/QhAg/AAhaQAAg9AdgxQACgDACgDIEMnFAidhNICMAdIAzh5AivE0ICelkIFqBI");
	this.shape.setTransform(79.4,67.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#AEBDC8").ss(1,1,1).p("AGllsIABAAQBBAIAwAwQA7A7AABTQAABSg7A6Qg6A4hSAAQgUAAgTgDQgFgCgGAAQgzgNgogmQg6g6AAhSQAAhTA6g7QA6g6BTAAQANAAANACgAhNm2QAuAMAiAkQA2A2AABNQAAAfgJAbQgGARgIAPQgMAVgTATQg0A2hNAAQgQAAgPgCQgHgBgGgCQgwgLgmgmQg2g2AAhMQAAgsASglQAFgMAIgLQAKgOANgNQA2g2BMAAQAaAAAXAGIHyBKAowByQANgUASgSQA/g/BaAAQBZAAA/A/QBABAAABZQAAArgOAlQgBABgBADQgQAlggAgQg/A/hZAAQhaAAg/g/QhAg/AAhaQAAg9AegwQABgDACgDIEMnGAidhNICMAdIAzh5AiuE1ICdllIFqBJ");
	this.shape_1.setTransform(80.1,68);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// 图层 1
	this.instance_3 = new lib.loadingpic();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,172,200);


(lib.go = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_10 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(10).call(this.frame_10).wait(1));

	// 图层 1
	this.instance = new lib.ggo();
	this.instance.setTransform(34.1,60,1.064,1.064,0,0,0,33.3,33.3);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},10).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-123.2,-102.3,321.8,310.8);


(lib.loading05 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_63 = function() {
		//this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(63).call(this.frame_63).wait(21));

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(63).to({_off:false},0).to({alpha:0},20).wait(1));

	// 文字
	this.instance = new lib.Typingword5();
	this.instance.setTransform(49.5,-110.1,1,1,0,0,0,121,65);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(7).to({_off:false},0).to({y:-130.1,alpha:1},17,cjs.Ease.get(1)).wait(39).to({alpha:0},20).wait(1));

	// 图层 2
	this.instance_1 = new lib.logog();
	this.instance_1.setTransform(3.9,57.2,1,1,0,0,0,155.2,96);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(7).to({_off:false},0).to({y:17.2,alpha:1},22,cjs.Ease.get(1)).wait(34).to({alpha:0},20).wait(1));

	// 图层 3
	this.instance_2 = new lib.loadbg复制2();
	this.instance_2.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({alpha:1},14,cjs.Ease.get(-1)).wait(49).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.loading04 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(21));

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(84).to({_off:false},0).to({alpha:0},20).wait(1));

	// 文字 word_mc
	this.word_mc = new lib.Typingword4();
	this.word_mc.setTransform(-3.5,-142.1,1,1,0,0,0,121,65);

	this.timeline.addTween(cjs.Tween.get(this.word_mc).wait(84).to({alpha:0},20).wait(1));

	// 图层 2
	this.instance = new lib.heart();
	this.instance.setTransform(3.9,17.2,1,1,0,0,0,155.2,96);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(70).to({alpha:0},20).wait(1));

	// 图层 3
	this.instance_1 = new lib.loadbg复制2();
	this.instance_1.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(-1)).wait(70).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.loading03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_79 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(79).call(this.frame_79).wait(21));

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(79).to({_off:false},0).to({alpha:0},20).wait(1));

	// 文字 word_mc
	this.word_mc = new lib.Typingword3();
	this.word_mc.setTransform(6.5,-142.1,1,1,0,0,0,121,65);

	this.timeline.addTween(cjs.Tween.get(this.word_mc).wait(79).to({alpha:0},20).wait(1));

	// 图层 2
	this.instance = new lib.bollll();
	this.instance.setTransform(-0.4,17.2,1,1,0,0,0,155.2,96);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(65).to({alpha:0},20).wait(1));

	// 图层 3
	this.instance_1 = new lib.loadbg复制2();
	this.instance_1.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(-1)).wait(65).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.loading02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_124 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(124).call(this.frame_124).wait(21));

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(124).to({_off:false},0).to({alpha:0},20).wait(1));

	// 文字 word_mc
	this.word_mc = new lib.Typingword2();
	this.word_mc.setTransform(11.9,-142.8,1,1,0,0,0,121,65);

	this.timeline.addTween(cjs.Tween.get(this.word_mc).wait(124).to({x:11.7,alpha:0},20).wait(1));

	// 图层 2
	this.instance = new lib.eyeye();
	this.instance.setTransform(3.9,17.2,1,1,0,0,0,155.2,96);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({alpha:1},14).wait(110).to({alpha:0},20).wait(1));

	// 图层 3
	this.instance_1 = new lib.loadbg复制();
	this.instance_1.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},14,cjs.Ease.get(-1)).wait(110).to({alpha:0},20).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.loading01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_84 = function() {
		//this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(84).call(this.frame_84).wait(18));

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(84).to({_off:false},0).to({alpha:0},17).wait(1));

	// 文字 word_mc
	this.word_mc = new lib.Typingword1();
	this.word_mc.setTransform(11.9,-142.8,1,1,0,0,0,121,65);

	this.timeline.addTween(cjs.Tween.get(this.word_mc).wait(84).to({alpha:0},17).wait(1));

	// 脚印
	this.instance = new lib.footprint0();
	this.instance.setTransform(-183.4,58.1,1,1,0,0,0,-184.6,53.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(55).to({alpha:0},17).wait(1));

	// 图层 6
	this.instance_1 = new lib.loadbg复制2();
	this.instance_1.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({alpha:1},19,cjs.Ease.get(1)).wait(65).to({alpha:0},17,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.loading00 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"load完停在这里，点击GO退场":99});

	// GO start_mc
	this.start_mc = new lib.go();
	this.start_mc.setTransform(-1.5,266.6,1,1,0,0,0,33.3,33.3);
	this.start_mc._off = true;

	this.timeline.addTween(cjs.Tween.get(this.start_mc).wait(99).to({_off:false},0).to({alpha:0},17).wait(1));

	// load...
	this.instance = new lib.loading_1();
	this.instance.setTransform(-0.3,293.7,1,1,0,0,0,29.5,15);

	this.instance_1 = new lib.load000();
	this.instance_1.setTransform(-0.3,293.7,1,1,0,0,0,29.5,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},99).to({state:[]},1).wait(17));

	// 文字 word_mc
	this.word_mc = new lib.Typingword复制();
	this.word_mc.setTransform(0.1,58.8,1,1,0,0,0,121,65);

	this.timeline.addTween(cjs.Tween.get(this.word_mc).wait(99).to({alpha:0},17,cjs.Ease.get(-1)).wait(1));

	// 进度条 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_1 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_2 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_3 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_4 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_5 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_6 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_7 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_8 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_9 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_10 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_11 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_12 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_13 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_14 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_15 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_16 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_17 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_18 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_19 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_20 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_21 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_22 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_23 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_24 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_25 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_26 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_27 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_28 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_29 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_30 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_31 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_32 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_33 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_34 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_35 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_36 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_37 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_38 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_39 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_40 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_41 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_42 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_43 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_44 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_45 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_46 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_47 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_48 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_49 = new cjs.Graphics().p("AwZR0MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_50 = new cjs.Graphics().p("AwZRpMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_51 = new cjs.Graphics().p("AwZReMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_52 = new cjs.Graphics().p("AwZRSMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_53 = new cjs.Graphics().p("AwZRHMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_54 = new cjs.Graphics().p("AwZQ8MAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_55 = new cjs.Graphics().p("AwZQxMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_56 = new cjs.Graphics().p("AwZQmMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_57 = new cjs.Graphics().p("AwZQbMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_58 = new cjs.Graphics().p("AwZQQMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_59 = new cjs.Graphics().p("AwZQFMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_60 = new cjs.Graphics().p("AwZP6MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_61 = new cjs.Graphics().p("AwZPuMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_62 = new cjs.Graphics().p("AwZPjMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_63 = new cjs.Graphics().p("AwZPYMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_64 = new cjs.Graphics().p("AwZPNMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_65 = new cjs.Graphics().p("AwZPCMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_66 = new cjs.Graphics().p("AwZO3MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_67 = new cjs.Graphics().p("AwZOsMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_68 = new cjs.Graphics().p("AwZOhMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_69 = new cjs.Graphics().p("AwZOWMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_70 = new cjs.Graphics().p("AwZOKMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_71 = new cjs.Graphics().p("AwZN/MAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_72 = new cjs.Graphics().p("AwZN0MAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_73 = new cjs.Graphics().p("AwZNpMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_74 = new cjs.Graphics().p("AwZNeMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_75 = new cjs.Graphics().p("AwZNTMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_76 = new cjs.Graphics().p("AwZNIMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_77 = new cjs.Graphics().p("AwZM9MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_78 = new cjs.Graphics().p("AwZMyMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_79 = new cjs.Graphics().p("AwZMmMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_80 = new cjs.Graphics().p("AwZMbMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_81 = new cjs.Graphics().p("AwZMQMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_82 = new cjs.Graphics().p("AwZMFMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_83 = new cjs.Graphics().p("AwZL6MAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_84 = new cjs.Graphics().p("AwZLvMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_85 = new cjs.Graphics().p("AwZLkMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_86 = new cjs.Graphics().p("AwZLZMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_87 = new cjs.Graphics().p("AwZLOMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_88 = new cjs.Graphics().p("AwZLCMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_89 = new cjs.Graphics().p("AwZK3MAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_90 = new cjs.Graphics().p("AwZKsMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_91 = new cjs.Graphics().p("AwZKhMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_92 = new cjs.Graphics().p("AwZKWMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_93 = new cjs.Graphics().p("AwZKLMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_94 = new cjs.Graphics().p("AwZKAMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_95 = new cjs.Graphics().p("AwZJ1MAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_96 = new cjs.Graphics().p("AwZJqMAAAgjnMAgzAAAMAAAAjng");
	var mask_graphics_97 = new cjs.Graphics().p("AwZJeMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_98 = new cjs.Graphics().p("AwZJTMAAAgjmMAgzAAAMAAAAjmg");
	var mask_graphics_99 = new cjs.Graphics().p("AwZJIMAAAgjmMAgzAAAMAAAAjmg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-0.9,y:-5.1}).wait(1).to({graphics:mask_graphics_1,x:-0.9,y:-7.3}).wait(1).to({graphics:mask_graphics_2,x:-0.9,y:-9.6}).wait(1).to({graphics:mask_graphics_3,x:-0.9,y:-11.8}).wait(1).to({graphics:mask_graphics_4,x:-0.9,y:-14}).wait(1).to({graphics:mask_graphics_5,x:-0.9,y:-16.2}).wait(1).to({graphics:mask_graphics_6,x:-0.9,y:-18.5}).wait(1).to({graphics:mask_graphics_7,x:-0.9,y:-20.7}).wait(1).to({graphics:mask_graphics_8,x:-0.9,y:-22.9}).wait(1).to({graphics:mask_graphics_9,x:-0.9,y:-25.1}).wait(1).to({graphics:mask_graphics_10,x:-0.9,y:-27.3}).wait(1).to({graphics:mask_graphics_11,x:-0.9,y:-29.6}).wait(1).to({graphics:mask_graphics_12,x:-0.9,y:-31.8}).wait(1).to({graphics:mask_graphics_13,x:-0.9,y:-34}).wait(1).to({graphics:mask_graphics_14,x:-0.9,y:-36.2}).wait(1).to({graphics:mask_graphics_15,x:-0.9,y:-38.5}).wait(1).to({graphics:mask_graphics_16,x:-0.9,y:-40.7}).wait(1).to({graphics:mask_graphics_17,x:-0.9,y:-42.9}).wait(1).to({graphics:mask_graphics_18,x:-0.9,y:-45.1}).wait(1).to({graphics:mask_graphics_19,x:-0.9,y:-47.3}).wait(1).to({graphics:mask_graphics_20,x:-0.9,y:-49.6}).wait(1).to({graphics:mask_graphics_21,x:-0.9,y:-51.8}).wait(1).to({graphics:mask_graphics_22,x:-0.9,y:-54}).wait(1).to({graphics:mask_graphics_23,x:-0.9,y:-56.2}).wait(1).to({graphics:mask_graphics_24,x:-0.9,y:-58.5}).wait(1).to({graphics:mask_graphics_25,x:-0.9,y:-60.7}).wait(1).to({graphics:mask_graphics_26,x:-0.9,y:-62.9}).wait(1).to({graphics:mask_graphics_27,x:-0.9,y:-65.1}).wait(1).to({graphics:mask_graphics_28,x:-0.9,y:-67.3}).wait(1).to({graphics:mask_graphics_29,x:-0.9,y:-69.6}).wait(1).to({graphics:mask_graphics_30,x:-0.9,y:-71.8}).wait(1).to({graphics:mask_graphics_31,x:-0.9,y:-74}).wait(1).to({graphics:mask_graphics_32,x:-0.9,y:-76.2}).wait(1).to({graphics:mask_graphics_33,x:-0.9,y:-78.5}).wait(1).to({graphics:mask_graphics_34,x:-0.9,y:-80.7}).wait(1).to({graphics:mask_graphics_35,x:-0.9,y:-82.9}).wait(1).to({graphics:mask_graphics_36,x:-0.9,y:-85.1}).wait(1).to({graphics:mask_graphics_37,x:-0.9,y:-87.3}).wait(1).to({graphics:mask_graphics_38,x:-0.9,y:-89.6}).wait(1).to({graphics:mask_graphics_39,x:-0.9,y:-91.8}).wait(1).to({graphics:mask_graphics_40,x:-0.9,y:-94}).wait(1).to({graphics:mask_graphics_41,x:-0.9,y:-96.2}).wait(1).to({graphics:mask_graphics_42,x:-0.9,y:-98.5}).wait(1).to({graphics:mask_graphics_43,x:-0.9,y:-100.7}).wait(1).to({graphics:mask_graphics_44,x:-0.9,y:-102.9}).wait(1).to({graphics:mask_graphics_45,x:-0.9,y:-105.1}).wait(1).to({graphics:mask_graphics_46,x:-0.9,y:-107.3}).wait(1).to({graphics:mask_graphics_47,x:-0.9,y:-109.6}).wait(1).to({graphics:mask_graphics_48,x:-0.9,y:-111.8}).wait(1).to({graphics:mask_graphics_49,x:-0.9,y:-114}).wait(1).to({graphics:mask_graphics_50,x:-0.9,y:-115.1}).wait(1).to({graphics:mask_graphics_51,x:-0.9,y:-116.2}).wait(1).to({graphics:mask_graphics_52,x:-0.9,y:-117.4}).wait(1).to({graphics:mask_graphics_53,x:-0.9,y:-118.5}).wait(1).to({graphics:mask_graphics_54,x:-0.9,y:-119.6}).wait(1).to({graphics:mask_graphics_55,x:-0.9,y:-120.7}).wait(1).to({graphics:mask_graphics_56,x:-0.9,y:-121.8}).wait(1).to({graphics:mask_graphics_57,x:-0.9,y:-122.9}).wait(1).to({graphics:mask_graphics_58,x:-0.9,y:-124}).wait(1).to({graphics:mask_graphics_59,x:-0.9,y:-125.1}).wait(1).to({graphics:mask_graphics_60,x:-0.9,y:-126.2}).wait(1).to({graphics:mask_graphics_61,x:-0.9,y:-127.4}).wait(1).to({graphics:mask_graphics_62,x:-0.9,y:-128.5}).wait(1).to({graphics:mask_graphics_63,x:-0.9,y:-129.6}).wait(1).to({graphics:mask_graphics_64,x:-0.9,y:-130.7}).wait(1).to({graphics:mask_graphics_65,x:-0.9,y:-131.8}).wait(1).to({graphics:mask_graphics_66,x:-0.9,y:-132.9}).wait(1).to({graphics:mask_graphics_67,x:-0.9,y:-134}).wait(1).to({graphics:mask_graphics_68,x:-0.9,y:-135.1}).wait(1).to({graphics:mask_graphics_69,x:-0.9,y:-136.2}).wait(1).to({graphics:mask_graphics_70,x:-0.9,y:-137.4}).wait(1).to({graphics:mask_graphics_71,x:-0.9,y:-138.5}).wait(1).to({graphics:mask_graphics_72,x:-0.9,y:-139.6}).wait(1).to({graphics:mask_graphics_73,x:-0.9,y:-140.7}).wait(1).to({graphics:mask_graphics_74,x:-0.9,y:-141.8}).wait(1).to({graphics:mask_graphics_75,x:-0.9,y:-142.9}).wait(1).to({graphics:mask_graphics_76,x:-0.9,y:-144}).wait(1).to({graphics:mask_graphics_77,x:-0.9,y:-145.1}).wait(1).to({graphics:mask_graphics_78,x:-0.9,y:-146.2}).wait(1).to({graphics:mask_graphics_79,x:-0.9,y:-147.4}).wait(1).to({graphics:mask_graphics_80,x:-0.9,y:-148.5}).wait(1).to({graphics:mask_graphics_81,x:-0.9,y:-149.6}).wait(1).to({graphics:mask_graphics_82,x:-0.9,y:-150.7}).wait(1).to({graphics:mask_graphics_83,x:-0.9,y:-151.8}).wait(1).to({graphics:mask_graphics_84,x:-0.9,y:-152.9}).wait(1).to({graphics:mask_graphics_85,x:-0.9,y:-154}).wait(1).to({graphics:mask_graphics_86,x:-0.9,y:-155.1}).wait(1).to({graphics:mask_graphics_87,x:-0.9,y:-156.2}).wait(1).to({graphics:mask_graphics_88,x:-0.9,y:-157.4}).wait(1).to({graphics:mask_graphics_89,x:-0.9,y:-158.5}).wait(1).to({graphics:mask_graphics_90,x:-0.9,y:-159.6}).wait(1).to({graphics:mask_graphics_91,x:-0.9,y:-160.7}).wait(1).to({graphics:mask_graphics_92,x:-0.9,y:-161.8}).wait(1).to({graphics:mask_graphics_93,x:-0.9,y:-162.9}).wait(1).to({graphics:mask_graphics_94,x:-0.9,y:-164}).wait(1).to({graphics:mask_graphics_95,x:-0.9,y:-165.1}).wait(1).to({graphics:mask_graphics_96,x:-0.9,y:-166.2}).wait(1).to({graphics:mask_graphics_97,x:-0.9,y:-167.4}).wait(1).to({graphics:mask_graphics_98,x:-0.9,y:-168.5}).wait(1).to({graphics:mask_graphics_99,x:-0.9,y:-169.6}).wait(1).to({graphics:null,x:0,y:0}).wait(17));

	// 图层 4
	this.instance_2 = new lib.headgear();
	this.instance_2.setTransform(-1.3,-227.1,1,1,0,0,0,86,100);

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(99).to({alpha:0},17,cjs.Ease.get(-1)).wait(1));

	// 头
	this.instance_3 = new lib.headgear();
	this.instance_3.setTransform(-1.3,-227.1,1,1,0,0,0,86,100);
	this.instance_3.alpha = 0.199;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(99).to({alpha:0},17,cjs.Ease.get(-1)).wait(1));

	// 图层 6
	this.instance_4 = new lib.loadingbg();
	this.instance_4.setTransform(-400,-480);

	this.instance_5 = new lib.loadbg复制2();
	this.instance_5.setTransform(0,0,1,1,0,0,0,400,480);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4}]}).to({state:[{t:this.instance_5}]},99).to({state:[{t:this.instance_5}]},17).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(99).to({_off:false},0).to({alpha:0},17,cjs.Ease.get(-1)).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-400,-480,800,960);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(7));

	// 图层 2
	this.instance = new lib.loading00();
	this.instance.setTransform(1.9,1.9,1,1,0,0,0,-398.1,-478.1);

	this.instance_1 = new lib.loading01();
	this.instance_1.setTransform(1.9,1.9,1,1,0,0,0,-398.1,-478.1);

	this.instance_2 = new lib.loading02();
	this.instance_2.setTransform(400.5,480.5);

	this.instance_3 = new lib.loading03();
	this.instance_3.setTransform(400.5,480.5);

	this.instance_4 = new lib.loading04();
	this.instance_4.setTransform(400.5,480.5);

	this.instance_5 = new lib.loading05();
	this.instance_5.setTransform(400.5,480.5);

	this.instance_6 = new lib.loading06();
	this.instance_6.setTransform(400.5,480.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,960);


// stage content:



(lib.loading = function() {
	this.initialize();

	// 图层 4
	this.instance = new lib.元件1();
	this.instance.setTransform(79,88.5,1,1,0,0,0,79,88.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(400,480,800,960);

})(libLoading = libLoading||{}, imagesLoading = imagesLoading||{}, createjs = createjs||{}, ss = ss||{});
var libLoading, imagesLoading, createjs, ss;