import {ui} from "../ui/layaMaxUI";
    
export default class LoadView extends ui.LoadViewUI{

    // 更新列表
    private loadlist:Array<string> =[];

    constructor(){
        super();
    }

    onEnable():void{
        this.on("3D_LOAD_END",this,this.testEvent)
        this.startLoad();
    }

    onDisable():void{

    }
    
    // 开始加载3D资源
    private startLoad():void{
        console.log("开始更新...")
        // Laya.Loader.create("")

        
        Laya.timer.once(3000,this,this.onLoadComplete)
    }

    private onLoadComplete():void{
        Laya.stage.event("3D_LOAD_END");
        this.removeSelf();
    }

    private testEvent():void
    {
        console.log("舰艇懂啊了")
    }
}