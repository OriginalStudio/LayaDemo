import { ui } from "../ui/layaMaxUI";
import LoadView from "./LoadView";
import MainView from "./MainView";

import Scene3D=Laya.Scene3D;
import Camera=Laya.Camera;
import Vector3=Laya.Vector3;
import DirectionLight=Laya.DirectionLight;
import MeshSprite3D=Laya.MeshSprite3D;
import BlinnPhongMaterial=Laya.BlinnPhongMaterial;
import Texture2D=Laya.Texture2D;
import PrimitiveMesh=Laya.PrimitiveMesh;

export default class MainScene extends ui.MainSceneUI{
    private loadView:LoadView;
    private mainView:MainView;
    private box:MeshSprite3D;
    constructor(){
        super();
    }

    onEnable():void{
        // 注册自定义事件
        Laya.stage.on("3D_LOAD_END",this,this.showMainView)
        Laya.stage.on("CREATE_3D_SCENE",this,this.createMainScene)
        // 添加LoadView
        this.loadView = new LoadView();
        Laya.stage.addChild(this.loadView);
    }

    private showMainView():void
    {   
        console.log("可以添加mainview了")
        // 添加MainView
        this.mainView = new MainView()
        Laya.stage.addChild(this.mainView);
    }

    private createMainScene():void{
        console.log("创建个3d场景试试")
        // //添加3D场景
        // var scene:Scene3D = Laya.stage.addChild(new Scene3D()) as Scene3D;
        
        // //添加照相机
        // var camera:Camera = (scene.addChild(new Camera(0, 0.1, 100))) as Camera;
        // camera.transform.translate(new Vector3(0, 3, 3));
        // camera.transform.rotate(new Vector3(-30, 0, 0), true, false);
        
        // //添加方向光
        // var directionLight:DirectionLight = scene.addChild(new DirectionLight()) as DirectionLight;
        // directionLight.color = new Vector3(0.6, 0.6, 0.6);
        // directionLight.transform.worldMatrix.setForward(new Vector3(1, -1, 0));
        
        // //添加自定义模型
        // this.box = scene.addChild(new MeshSprite3D(PrimitiveMesh.createBox(1, 1, 1))) as MeshSprite3D;
        // this.box.transform.rotate(new Vector3(0, 45, 0), false, false);
        // this.box.transform.position = new Vector3(0.1, 0, 0);
        // var material:BlinnPhongMaterial = new BlinnPhongMaterial();
        // Texture2D.load("res/layabox.png", Laya.Handler.create(null, function(tex:Texture2D):void {
        //     material.albedoTexture = tex;
        // }));
        // this.box.meshRenderer.material = material;
    }
}