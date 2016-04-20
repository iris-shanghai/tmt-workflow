
Core.FPS = 30;//֡Ƶ;
Core.WIDTH = 800;//������;
Core.HEIGHT = 1134;//������;
//Core.OFFICIALPATH = 'http://game.gtimg.cn/images/qipai/act/a20151210opening/';//�ļ�����·��;
Core.OFFICIALPATH = 'http://game.gtimg.cn/images/qipai/act/a20151210opening/';//�ļ�����·��;
Core.ISCHACE = true;//�Ƿ���ͼƬ����λͼ����;

/*
* createjs��loading����,��Ҫ�����ȼ�������loading�����ز�
* �ٺ���Ԥ��2-3���߶��������ز�
* ������Ҫ������һ��Ԥ�ز���;
* */
Core.PRELOADNUM = 1;//һ��ʼԤ�س�������,���������ڶ���loading����;
Core.PRELOADNUM2= 2;//����loading��������֮��,������ʼԤ�غ�������;
/*
 * */
Core.spritesheetPath = 'images/';
Core.content;
//Core.prototype.fps=40;
function Core() {
    var target;
    target=this;
    /*
     * str:canvas div name;
     * */
    this.init = function (str) {
        Config.CANVAS = document.getElementById(str);
        stage = new cjs.Stage(Config.CANVAS);
        stage.update();
        cjs.MotionGuidePlugin.install();//������������;
        cjs.Sound.alternateExtensions = ['mp3'];//������������;
        cjs.Touch.enable(stage);//����,�������������϶�;
        cjs.Ticker.setFPS(Core.FPS);
        cjs.Ticker.addEventListener('tick', stage);

        content=new cjs.Container();
        stage.addChild(content);
        Core.content=content;

        //Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_START, cjs.proxy(this.onLoadStart,this));
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_START, onLoadStart);
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_PROGRESS, onLoadProgress);
        Config.eventDispatcher.addEventListener(Config.EVENT_LOAD_COMPLETE, onLoadComplete);
    }
    /*
     * arr=[
     *   {id:'loading',atlas:2,src:[
     *      {src:'sounds/bg.mp3',id:bgSound},
     *      {src:'sounds/p0.mp3',id:bgP0}
     *   ]},
     *   {id:'p0',atlas:2,src:[]},
     *   {}
     * ];
     * */
    this.setSource = function (arr) {
        var data = [];
        for (var i = 0; i < arr.length; i++) {
            data[i] = [];
            data[i][0] = arr[i].id + '.js';
            data[i][1] = 'lib' + arr[i].id.substr(0, 1).toLocaleUpperCase() + arr[i].id.substr(1, arr[i].id.length - 1);
            data[i][2] = 'images' + arr[i].id.substr(0, 1).toLocaleUpperCase() + arr[i].id.substr(1, arr[i].id.length - 1);
            data[i][3] = arr[i].id;
            data[i][4] = [];
            for (var j = 0; j < arr[i].atlas; j++) {
                var tmp = String(j + 1);
                if (tmp == '1') tmp = '';
                data[i][4].push({
                    src: Core.spritesheetPath + arr[i].id + '/' + arr[i].id + '_atlas_' + tmp + '.json',
                    type: 'spritesheet',
                    id: arr[i].id + '_atlas_' + tmp
                });
            }
            for (var k = 0; k < arr[i].src.length; k++) {
                data[i][4].push(arr[i].src[k]);
            }
            data[i][5] = arr[i].childIndex;
        }
        //console.log(data);
        Config.preloading(data);
    }

    this.currentPage = 0;//��ǰ��������;
    this.loadNum = 0;//Ŀǰ�������ɵĳ�������;
    this.stage;

    var mcDataArr=[];//��������������Դ;
    var tmpId;//�����˳���������һ������id;
    var content;//
    function onLoadStart(e) {
        //console.log('onLoadStart:',e);
    }
    function onLoadProgress (e) {
        //console.log('onLoadProgress:',e);
        var pro;
        if(target.loadNum<Core.PRELOADNUM)//��һ�μ��ص�loading;
        {
            pro=((target.loadNum)/(Core.PRELOADNUM))+e.progress*(1/(Core.PRELOADNUM));
            //console.log('mainProgress:', pro);
            target.onLoadProgressHandler(pro);
        }
        else if(target.loadNum<(Core.PRELOADNUM+Core.PRELOADNUM2))
        {
            pro=((target.loadNum-Core.PRELOADNUM)/(Core.PRELOADNUM2))+e.progress*(1/(Core.PRELOADNUM2));
            target.onPageLoadingProgressHandler(pro);
        }
        else//Ԥ��loading;
        {
            //console.log('pageProgress:',target.currentPage, e.currentPage, e.progress*100>>0);
            if(target.currentPage== e.currentPage)
            {
                //console.log('pageProgress:',target.currentPage, e.currentPage, e.progress*100>>0);
                target.onPreLoadingProgressHandler(e.progress);
            }
        }
    }
    function onLoadComplete (e) {
        target.loadNum+=1;
        mcDataArr[e.currentPage]={
            currentPage: e.currentPage,
            queue: e.queue,
            arr: e.arr,
            thisFun: e.thisFun,
            mc:undefined
        };
        if(target.loadNum==Core.PRELOADNUM)//�״μ�������,����������������;
        {
            //console.log('mainComplete:', target.loadNum);
            target.onLoadCompleteHandler(e);
            Config.changeMate();
        }
        else if(target.loadNum==(Core.PRELOADNUM+Core.PRELOADNUM2))
        {
            target.onPageLoadingCompleteHandler(e);
        }
        else if(target.currentPage== e.currentPage)//������ǰ����Ԥ������,������Ҫ��ʾ�ĳ���,��������ʾ;
        {
            target.onPreLoadingCompleteHandler(e);

        }
        else//Ԥ������;
        {

        }
    }

    this.addContainer=function(name,index,resizeObj)
    {
        var container=new cjs.Container;
        container.name=name;
        //stage.addChildAt(container,index);
        content.addChildAt(container,index);
        var obj=resizeObj;
        obj.obj=container;
        //console.log(obj);
        Config.resize([obj]);
    }

    this.getContainer=function(name)
    {
        var container=content.getChildByName(name);
        return container;
    }

    this.getMc=function(i)//��ȡ��Ӧ�ĳ�����������;
    {
        var mc;
        var arr=mcDataArr[i];
        if(arr==undefined)//��������Ҫ��mc��û�м�������ʱ;
        {
            //console.log('');
        }
        else if(arr.mc==undefined)//��mc��������,��Ϊ����mc;
        {

            mc=arr.mc=Config.compositionMc(arr.id,arr.queue,arr.arr,arr.thisFun);
            //console.log('getMc:',mc.numChildren,mc.getChildAt(0).totalFrames);
            mc.pageId=i;
            //console.log('mc.pageId:',mc.pageId);
            if(mc.getChildAt(0).totalFrames)
            {
                target.addFrameScript(mc.getChildAt(0),mc.getChildAt(0).totalFrames-1,function(mc)
                {
                    mc.stop();
                    target.onScenesPlayEnd(mc.parent);
                })
            }
        }
        else//��mc��������,���Ѿ�����mc;
        {
            mc=arr.mc;
        }
        //console.log(mc);
        return mc
    }

    this.addScenes=function(name,id)//���ų���;
    {
        console.log('addScenes:',id);
        var mc;
        if(this.getContainer(name).numChildren==0)//�׸�����,�����˳�,��ʼ��ǰ������������;
        {
            mc=this.getMc(id);
            this.getContainer(name).addChild(mc);
            this.onScenesIn(mc);
        }
        else//�е�ǰ����,��ǰ������ʼ�˳�,�˳�����֮�������¸������Ľ�������;
        {
            tmpId=id;
            //console.log('tmpId:',tmpId);
            mc=this.getContainer(name).getChildAt(0);
            //console.log('core addScenes:',mc);
            this.onScenesOut(mc);
        }
    }

    this.onScenesOutComplete=function(name)//��ǰ�����˳�����,��Ҫ������һ��������������;
    {

        var mc;
        mc=this.getMc(tmpId);
        //console.log('onScenesOutComplete:',mc,tmpId);
        if(mc)//������һ�������Ѿ���������,��ִ���¸������Ŀ���;
        {
            //�˳�����,��Ҫ����չʾ�¸�����;
            //�Ƿ��Ƴ���ǰ����;
            //Ĭ��������,��һ������������ʱ����Ҫ�Ƴ���ǰ����;
            //��������,��Ҫ��һ�����������ڵ�ǰ��������;
            //this.getContainer(name).removeAllChildren();//Ĭ��������,��ǰ�����Ƴ�;
            //this.getContainer(name).addChild(mc);
            this.getContainer(name).addChildAt(mc,mcDataArr[tmpId].arr[5]);
            this.onScenesIn(mc);
        }
        else//������һ��������δ��������,����ִ��;
        {

        }
    }

    this.addFrameScript=function(mc,frame,fun)//�����ض�֡���Ӵ���;
    {
        if(!frame)
        {
            console.log('addFrameScript:frame==undefined');
            return;
        }
        var funStr='frame_'+frame.toString();
        mc[funStr]=function()
        {
            fun(mc);
        }
        mc.timeline.addTween(cjs.Tween.get(mc).wait(frame).call(mc[funStr]).wait(1));
    }
}
var coreP = Core.prototype;
coreP.onLoadProgressHandler=function(pro)//������loading����;
{
    console.log('onLoadProgressHandler:',pro);
}
coreP.onLoadCompleteHandler=function(e)//������loading��������;
{
    console.log('onLoadCompleteHandler:',e);
}
coreP.onPageLoadingProgressHandler=function(pro)
{}
coreP.onPageLoadingCompleteHandler=function(e)
{}
coreP.onPreLoadingProgressHandler=function(pro)
{}
coreP.onPreLoadingCompleteHandler=function(e)
{}
coreP.onScenesPlayEnd=function(mc)//������������;
{
    console.log('mc play end frame');
}
coreP.onScenesIn=function(mc)//��������;
{

}
coreP.onScenesOut=function(mc)//�����˳�;
{

}
