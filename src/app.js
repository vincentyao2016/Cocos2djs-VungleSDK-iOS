
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        /////////////////////////////
        // 3. add your codes below...
        // add a label shows "Hello World"
        // create and initialize a label
        var helloLabel = new cc.LabelTTF("Hello World", "Arial", 38);
        // position the label on the center of the screen
        helloLabel.x = size.width / 2;
        helloLabel.y = size.height / 2 + 200;
        // add the label as a child to this layer
        this.addChild(helloLabel, 5);

        // add "HelloWorld" splash screen"
        this.sprite = new cc.Sprite(res.HelloWorld_png);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite, 0);
                                      
                                      
        var button=new ccui.Button();
        button.loadTextures(res.HelloWorld_png,res.HelloWorld_png);
                                      button.x=10
                                      button.y=size.height/2;
                                      button.addTouchEventListener(this.touchEvent,this);
                                      this.addChild(button);
                                      

        return true;
    },
                                      touchEvent: function(sender,type)
                                      {
                                      switch (type)
                                      {
                                      case ccui.Widget.TOUCH_BEGAN:
                                      break;
                                      
                                      case ccui.Widget.TOUCH_MOVED:
                                      break;
                                      
                                      case ccui.Widget.TOUCH_ENDED:
                                      cc.log("sss");
                                      
                                      jsb.reflection.callStaticMethod("NativeOcClass",
                                                                      "callNativeLog");

                                      
                                      break;
                                      
                                      case ccui.Widget.TOUCH_CANCELLED:
                                      break; 
                                      default:
                                      break;
                                      
                                      }
                                      
                                      }
                                     
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

