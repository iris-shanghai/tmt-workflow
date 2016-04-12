// var basePath = 'http://wximg.gtimg.com/tmt/_events/20150514-promo-vivo/dist/';
// var basePath = 'http://localhost:8080/';
//
// if (!(typeof webpsupport == 'function')) {
//     var webpsupport = function (cb) {
//         cb();
//     }
// }
//
//
// webpsupport(function (webpa) {
//     var loader = new WxMoment.Loader(),
//         fileList = [
//             'img/logo.png',
//             'img/bg.png',
//             'img/bgbg.png',
//             'img/blue_bg.png',
//             'img/hai.png',
//             'img/pinzi.png',
//             'img/QRC.png',
//             'img/shizhi1.png',
//             'img/shizhi2.png',
//             'img/txt001.png',
//             'img/txt002.png',
//             'img/txt003.png',
//             'img/txt004.png',
//             'img/wave002.png',
//             'img/wavemini.png',
//             'img/thumb.jpg'
//         ];
//
//     for (var i = 0; i < fileList.length; i++) {
//         var basename = fileList[i].substring(fileList[i].lastIndexOf('/') + 1);
//
//         if (webpa && img_map && (basename in img_map) && img_map[basename]) { //if webp
//             var path = fileList[i].replace(/\.\w+/, '.webp');
//         } else {
//             var path = fileList[i];
//         }
//
//         loader.addImage(basePath + path);
//     }
//
//     loader.addCompletionListener(function () {
//         $('.loading').remove();
//         $('.screen').eq(0).addClass('current');
//         $('.wrap').show();
//     });
//
//     //loading 进度监听
//     loader.addProgressListener(function (e) {
//         var percentUp = Math.round((e.completedCount / e.totalCount) * 100), //正序, 1-100
//             progressDown = 100 - percentUp;                                   //倒序, 100-1
//
//
//         $('.loading-num').text(percentUp + '%');
//     });
//
//     //启动
//     loader.start();
// });
//

//旋屏提示
new WxMoment.OrientationTip();

//切换
new WxMoment.PageSlider({
    pages: $('.screen')
});

//in html
var canvas, stage, exportRoot;
var totalImages = lib.properties.manifest.length;
var loadingImageId = 0;

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


//分享
// var share = new WxMoment.Share();

// var wa = new WxMoment.Analytics({
//     //projectName 请与微信商务团队确认
//     projectName: "20150514VIVO"
// });

//可以统计到按钮的点击事件
// $('#J-btn').click(function () {
//     //两个必填参数，分别为: 事件分类、事件名称
//     wa.sendEvent('click', 'yuyue');
// });
