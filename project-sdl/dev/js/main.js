var canvas, stage, exportRoot;
var totalImages = lib.properties.manifest.length;
var loadingImageId = 0;

//分享
var share = new WxMoment.Share();

var wa = new WxMoment.Analytics({
    projectName: "20160423sdl"
});

var video = new WxMoment.Video({

    vid: "t0195fsw197",
    pic: "http://wximg.qq.com/wxp/moment/V1X7aTACe/img/video-thumb.jpg",
    oninited: function () {
    },
    onplaying: function () {
    },
    onpause: function () {
    },
    onresume: function () {
    },
    onallended: function () {
    },
    onfullscreen: function (isfull) {
    }
});


var pageSlider = new WxMoment.PageSlider({
    pages: $('.screen'),
    direction: 'vertical',
    currentClass: 'current',
    rememberLastVisited: false,
    animationPlayOnce: false,
    oninit: function () {

    },
    onbeforechange: function () {

    },
    onchange: function () {
    },
    onSwipeUp: function () {

      if(this.index === 0){
       pageSlider.next();
      //  wa.sendEvent('pv', 'moveToPage2');
      }

    },
    onSwipeDown: function () {
    },
    onSwipeLeft: function () {},
    onSwipeRight: function () {}
});

function init() {
	// --- write your JS code here ---

	canvas = document.getElementById("canvas");
	images = images||{};

	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", handleFileLoad);
	loader.addEventListener("complete", handleComplete);
	loader.loadManifest(lib.properties.manifest);
}

function handleFileLoad(evt) {

	if (evt.item.type == "image") {
    images[evt.item.id] = evt.result;
    var percentUp = Math.round((loadingImageId / totalImages) * 100); //正序, 1-100
    var progressDown = 100 - percentUp;                               //倒序, 100-1
    $('.loading-num').text(percentUp + '%');
    loadingImageId +=1;
  }

}

function handleComplete(evt) {
  $('.loading').remove();
  $('.screen').eq(0).addClass('current');
  $('.wrap').show();

	exportRoot = new lib.SDL_h5_ok();

	stage = new createjs.Stage(canvas);
	stage.addChild(exportRoot);
	stage.update();

	createjs.Ticker.setFPS(lib.properties.fps);
	createjs.Ticker.addEventListener("tick", stage);
}

new WxMoment.OrientationTip();

new WxMoment.PageSlider({
    pages: $('.screen')
});

$('#videoTrigger').click(function () {
  video.getPlayer().enterFullScreen();
  video.getPlayer().play();
  wa.sendEvent('click', 'videoPlay');
});
