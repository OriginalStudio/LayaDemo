import {ui} from "../ui/layaMaxUI";

import Event=Laya.Event;
import Scene3D=Laya.Scene3D;
import Camera=Laya.Camera;
import Vector3=Laya.Vector3;
import DirectionLight=Laya.DirectionLight;
import MeshSprite3D=Laya.MeshSprite3D;
import BlinnPhongMaterial=Laya.BlinnPhongMaterial;
import Texture2D=Laya.Texture2D;
import PrimitiveMesh=Laya.PrimitiveMesh;
import Handler=Laya.Handler;

export default class MainView extends ui.MainViewUI{
    private box:MeshSprite3D;
    private turnRotation:Vector3 = new Vector3(0, 0.01, 0);
    constructor(){
        super();
    }

    onEnable():void{
        Laya.stage.event("CREATE_3D_SCENE")

        //添加3D场景
        var scene:Scene3D = Laya.stage.addChild(new Scene3D()) as Scene3D;
        
        //添加照相机
        var camera:Camera = (scene.addChild(new Camera(0, 0.1, 100))) as Camera;
        camera.transform.translate(new Vector3(0, 3, 3));
        camera.transform.rotate(new Vector3(-30, 0, 0), true, false);
        
        //添加方向光
        var directionLight:DirectionLight = scene.addChild(new DirectionLight()) as DirectionLight;
        directionLight.color = new Vector3(0.6, 0.6, 0.6);
        directionLight.transform.worldMatrix.setForward(new Vector3(1, -1, 0));
        
        //添加自定义模型
        this.box = scene.addChild(new MeshSprite3D(PrimitiveMesh.createBox(1, 1, 1))) as MeshSprite3D;
        this.box.transform.rotate(new Vector3(0, 45, 0), false, false);
        this.box.transform.position = new Vector3(0.1, 0, 0);
        var material:BlinnPhongMaterial = new BlinnPhongMaterial();
        Texture2D.load("res/layabox.png", Laya.Handler.create(null, function(tex:Texture2D):void {
            material.albedoTexture = tex;
        }));
        this.box.meshRenderer.material = material;

        this.btn1.on(Event.CLICK,this,this.onChoose,['1']);
		this.btn2.on(Event.CLICK,this,this.onChoose,['2']);
        this.btn3.on(Event.CLICK,this,this.onChoose,['3']);
        this.btn4.on(Event.CLICK,this,this.onChoose,['4']);
        
        Laya.timer.frameLoop(1, this, this.ratateSprite3D);
    }

    private ratateSprite3D():void{
        this.box.transform.rotate(this.turnRotation, false);
    }

    private onChoose(id):void{
        console.log("服饰ID：" + id)
        var material:BlinnPhongMaterial = new BlinnPhongMaterial();
        Texture2D.load("res/bg"+ id +".png", Handler.create(null, function(tex:Texture2D):void {
            material.albedoTexture = tex;
        }));
        this.box.meshRenderer.material = material;
    }
}