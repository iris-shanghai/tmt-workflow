function init(){canvas=document.getElementById("canvas"),images=images||{};var e=new createjs.LoadQueue(!1);e.addEventListener("fileload",handleFileLoad),e.addEventListener("complete",handleComplete),e.loadManifest(lib.properties.manifest)}function handleFileLoad(e){if("image"==e.item.type){images[e.item.id]=e.result;var a=Math.round(loadingImageId/totalImages*100);$(".loading-num").text(a+"%"),loadingImageId+=1}}function handleComplete(e){$(".loading").remove(),$(".screen").eq(0).addClass("current"),$(".wrap").show(),exportRoot=new lib.SDL_h5_ok,stage=new createjs.Stage(canvas),stage.addChild(exportRoot),stage.update(),createjs.Ticker.setFPS(lib.properties.fps),createjs.Ticker.addEventListener("tick",stage)}new WxMoment.OrientationTip,new WxMoment.PageSlider({pages:$(".screen")});var canvas,stage,exportRoot,totalImages=lib.properties.manifest.length,loadingImageId=0;