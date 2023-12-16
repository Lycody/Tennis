System.register("chunks:///_virtual/Audio.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(i){var e,r,t,n,o;return{setters:[function(i){e=i.applyDecoratedDescriptor,r=i.initializerDefineProperty},function(i){t=i.cclegacy,n=i._decorator,o=i.AudioClip}],execute:function(){var u,l,c,a,p,s,f;t._RF.push({},"502c6NJnBRMya0noePTmlBP","Audio",void 0);var d=n.ccclass,y=n.property;i("Audio",(u=d("Audio"),l=y(String),c=y(o),u((s=e((p=function(){r(this,"Name",s,this),r(this,"Clip",f,this)}).prototype,"Name",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),f=e(p.prototype,"Clip",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),a=p))||a));t._RF.pop()}}}));

System.register("chunks:///_virtual/AudioManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Audio.ts"],(function(o){var n,i,u,t,e,r,c,s,l,a;return{setters:[function(o){n=o.applyDecoratedDescriptor,i=o.inheritsLoose,u=o.initializerDefineProperty,t=o.assertThisInitialized},function(o){e=o.cclegacy,r=o._decorator,c=o.System,s=o.AudioSource,l=o.Component},function(o){a=o.Audio}],execute:function(){var p,S,d,f,h,M,y,g,v,b,m,A;e._RF.push({},"a0e1b9j08hHUYSUhU9xb1j+","AudioManager",void 0);var N=r.ccclass,z=r.property;c.Priority;o("AudioManager",(p=N("AudioManager"),S=z(s),d=z(s),f=z(a),h=z(a),p(((A=function(o){function n(){for(var n,i=arguments.length,e=new Array(i),r=0;r<i;r++)e[r]=arguments[r];return n=o.call.apply(o,[this].concat(e))||this,u(n,"SoundSource",g,t(n)),u(n,"MusicSource",v,t(n)),u(n,"Sounds",b,t(n)),u(n,"Music",m,t(n)),n}i(n,o);var e=n.prototype;return e.onLoad=function(){n.instance=this},e.PlayMusic=function(o){var n=this.Music.find((function(n){return n.Name==o}));null==n?console.log("Sound Not Found...!"):(this.MusicSource.clip=n.Clip,this.MusicSource.play())},e.StopMusic=function(o){var n=this.Music.find((function(n){return n.Name==o}));null==n?console.log("Music Not Found...!"):(this.MusicSource.clip=n.Clip,this.MusicSource.stop())},e.PlaySound=function(o){var n=this.Sounds.find((function(n){return n.Name==o}));null==n?console.log("Sound Not Found...!"):(this.SoundSource.clip=n.Clip,this.SoundSource.play())},e.StopSound=function(o){var n=this.Sounds.find((function(n){return n.Name==o}));null==n?console.log("Music Not Found...!"):(this.SoundSource.clip=n.Clip,this.SoundSource.stop())},e.ButtonStopSound=function(){this.SoundSource.volume=1},e.ButtonOpenSound=function(){this.SoundSource.volume=0},e.ButtonStopMusic=function(){this.MusicSource.volume=1},e.ButtonOpenMusic=function(){this.MusicSource.volume=0},n}(l)).instance=void 0,g=n((y=A).prototype,"SoundSource",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=n(y.prototype,"MusicSource",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=n(y.prototype,"Sounds",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),m=n(y.prototype,"Music",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),M=y))||M));e._RF.pop()}}}));

System.register("chunks:///_virtual/debug-view-runtime-control.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,i,n,s,l,r,a,g,h,p,c,C,d,m,u,L;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,i=t.initializerDefineProperty,n=t.assertThisInitialized},function(t){s=t.cclegacy,l=t._decorator,r=t.Node,a=t.Color,g=t.Canvas,h=t.UITransform,p=t.instantiate,c=t.Label,C=t.RichText,d=t.Toggle,m=t.Button,u=t.director,L=t.Component}],execute:function(){var f,M,b,v,T,S,x,E,I;s._RF.push({},"b2bd1+njXxJxaFY3ymm06WU","debug-view-runtime-control",void 0);var A=l.ccclass,y=l.property;t("DebugViewRuntimeControl",(f=A("internal.DebugViewRuntimeControl"),M=y(r),b=y(r),v=y(r),f((x=e((S=function(t){function e(){for(var e,o=arguments.length,s=new Array(o),l=0;l<o;l++)s[l]=arguments[l];return e=t.call.apply(t,[this].concat(s))||this,i(e,"compositeModeToggle",x,n(e)),i(e,"singleModeToggle",E,n(e)),i(e,"EnableAllCompositeModeButton",I,n(e)),e._single=0,e.strSingle=["No Single Debug","Vertex Color","Vertex Normal","Vertex Tangent","World Position","Vertex Mirror","Face Side","UV0","UV1","UV Lightmap","Project Depth","Linear Depth","Fragment Normal","Fragment Tangent","Fragment Binormal","Base Color","Diffuse Color","Specular Color","Transparency","Metallic","Roughness","Specular Intensity","IOR","Direct Diffuse","Direct Specular","Direct All","Env Diffuse","Env Specular","Env All","Emissive","Light Map","Shadow","AO","Fresnel","Direct Transmit Diffuse","Direct Transmit Specular","Env Transmit Diffuse","Env Transmit Specular","Transmit All","Direct Internal Specular","Env Internal Specular","Internal All","Fog"],e.strComposite=["Direct Diffuse","Direct Specular","Env Diffuse","Env Specular","Emissive","Light Map","Shadow","AO","Normal Map","Fog","Tone Mapping","Gamma Correction","Fresnel","Transmit Diffuse","Transmit Specular","Internal Specular","TT"],e.strMisc=["CSM Layer Coloration","Lighting With Albedo"],e.compositeModeToggleList=[],e.singleModeToggleList=[],e.miscModeToggleList=[],e.textComponentList=[],e.labelComponentList=[],e.textContentList=[],e.hideButtonLabel=void 0,e._currentColorIndex=0,e.strColor=["<color=#ffffff>","<color=#000000>","<color=#ff0000>","<color=#00ff00>","<color=#0000ff>"],e.color=[a.WHITE,a.BLACK,a.RED,a.GREEN,a.BLUE],e}o(e,t);var s=e.prototype;return s.start=function(){if(this.node.parent.getComponent(g)){var t=this.node.parent.getComponent(h),e=.5*t.width,o=.5*t.height,i=.1*e-e,n=o-.1*o,s=this.node.getChildByName("MiscMode"),l=p(s);l.parent=this.node,l.name="Buttons";var r=p(s);r.parent=this.node,r.name="Titles";for(var u=0;u<2;u++){var L=p(this.EnableAllCompositeModeButton.getChildByName("Label"));L.setPosition(i+(u>0?450:150),n,0),L.setScale(.75,.75,.75),L.parent=r;var f=L.getComponent(c);f.string=u?"----------Composite Mode----------":"----------Single Mode----------",f.color=a.WHITE,f.overflow=0,this.labelComponentList[this.labelComponentList.length]=f}n-=20;for(var M=0,b=0;b<this.strSingle.length;b++,M++){b===this.strSingle.length>>1&&(i+=200,M=0);var v=b?p(this.singleModeToggle):this.singleModeToggle;v.setPosition(i,n-20*M,0),v.setScale(.5,.5,.5),v.parent=this.singleModeToggle.parent;var T=v.getComponentInChildren(C);T.string=this.strSingle[b],this.textComponentList[this.textComponentList.length]=T,this.textContentList[this.textContentList.length]=T.string,v.on(d.EventType.TOGGLE,this.toggleSingleMode,this),this.singleModeToggleList[b]=v}i+=200,this.EnableAllCompositeModeButton.setPosition(i+15,n,0),this.EnableAllCompositeModeButton.setScale(.5,.5,.5),this.EnableAllCompositeModeButton.on(m.EventType.CLICK,this.enableAllCompositeMode,this),this.EnableAllCompositeModeButton.parent=l;var S=this.EnableAllCompositeModeButton.getComponentInChildren(c);this.labelComponentList[this.labelComponentList.length]=S;var x=p(this.EnableAllCompositeModeButton);x.setPosition(i+90,n,0),x.setScale(.5,.5,.5),x.on(m.EventType.CLICK,this.changeTextColor,this),x.parent=l,(S=x.getComponentInChildren(c)).string="TextColor",this.labelComponentList[this.labelComponentList.length]=S;var E=p(this.EnableAllCompositeModeButton);E.setPosition(i+200,n,0),E.setScale(.5,.5,.5),E.on(m.EventType.CLICK,this.hideUI,this),E.parent=this.node.parent,(S=E.getComponentInChildren(c)).string="Hide UI",this.labelComponentList[this.labelComponentList.length]=S,this.hideButtonLabel=S,n-=40;for(var I=0;I<this.strMisc.length;I++){var A=p(this.compositeModeToggle);A.setPosition(i,n-20*I,0),A.setScale(.5,.5,.5),A.parent=s;var y=A.getComponentInChildren(C);y.string=this.strMisc[I],this.textComponentList[this.textComponentList.length]=y,this.textContentList[this.textContentList.length]=y.string,A.getComponent(d).isChecked=!!I,A.on(d.EventType.TOGGLE,I?this.toggleLightingWithAlbedo:this.toggleCSMColoration,this),this.miscModeToggleList[I]=A}n-=150;for(var D=0;D<this.strComposite.length;D++){var B=D?p(this.compositeModeToggle):this.compositeModeToggle;B.setPosition(i,n-20*D,0),B.setScale(.5,.5,.5),B.parent=this.compositeModeToggle.parent;var w=B.getComponentInChildren(C);w.string=this.strComposite[D],this.textComponentList[this.textComponentList.length]=w,this.textContentList[this.textContentList.length]=w.string,B.on(d.EventType.TOGGLE,this.toggleCompositeMode,this),this.compositeModeToggleList[D]=B}}else console.error("debug-view-runtime-control should be child of Canvas")},s.isTextMatched=function(t,e){var o=new String(t),i=o.search(">");return-1===i?t===e:(o=(o=o.substr(i+1)).substr(0,o.search("<")))===e},s.toggleSingleMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strSingle.length;i++)this.isTextMatched(o.string,this.strSingle[i])&&(e.singleMode=i)},s.toggleCompositeMode=function(t){for(var e=u.root.debugView,o=t.getComponentInChildren(C),i=0;i<this.strComposite.length;i++)this.isTextMatched(o.string,this.strComposite[i])&&e.enableCompositeMode(i,t.isChecked)},s.toggleLightingWithAlbedo=function(t){u.root.debugView.lightingWithAlbedo=t.isChecked},s.toggleCSMColoration=function(t){u.root.debugView.csmLayerColoration=t.isChecked},s.enableAllCompositeMode=function(t){var e=u.root.debugView;e.enableAllCompositeMode(!0);for(var o=0;o<this.compositeModeToggleList.length;o++){this.compositeModeToggleList[o].getComponent(d).isChecked=!0}var i=this.miscModeToggleList[0].getComponent(d);i.isChecked=!1,e.csmLayerColoration=!1,(i=this.miscModeToggleList[1].getComponent(d)).isChecked=!0,e.lightingWithAlbedo=!0},s.hideUI=function(t){var e=this.node.getChildByName("Titles"),o=!e.active;this.singleModeToggleList[0].parent.active=o,this.miscModeToggleList[0].parent.active=o,this.compositeModeToggleList[0].parent.active=o,this.EnableAllCompositeModeButton.parent.active=o,e.active=o,this.hideButtonLabel.string=o?"Hide UI":"Show UI"},s.changeTextColor=function(t){this._currentColorIndex++,this._currentColorIndex>=this.strColor.length&&(this._currentColorIndex=0);for(var e=0;e<this.textComponentList.length;e++)this.textComponentList[e].string=this.strColor[this._currentColorIndex]+this.textContentList[e]+"</color>";for(var o=0;o<this.labelComponentList.length;o++)this.labelComponentList[o].color=this.color[this._currentColorIndex]},s.onLoad=function(){},s.update=function(t){},e}(L)).prototype,"compositeModeToggle",[M],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),E=e(S.prototype,"singleModeToggle",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),I=e(S.prototype,"EnableAllCompositeModeButton",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),T=S))||T));s._RF.pop()}}}));

System.register("chunks:///_virtual/Game.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts"],(function(e){var i,t,n,o,r,s,l,a,u,c,p,h,m,d,f,g,T,b,B;return{setters:[function(e){i=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,l=e.Prefab,a=e.Node,u=e.Collider2D,c=e.Label,p=e.Sprite,h=e.SpriteFrame,m=e.v3,d=e.Contact2DType,f=e.instantiate,g=e.tween,T=e.Vec3,b=e.Component},function(e){B=e.AudioManager}],execute:function(){var D,S,y,L,v,C,G,w,z,P,E,A,N,W,k,M,_,x,F,O,H,I,U,R,Q,V,j,X,Z,q,J;r._RF.push({},"be0d0TCQsNHu7kBZQNeuXzP","Game",void 0);var K=s.ccclass,Y=s.property;e("Game",(D=K("Game"),S=Y(l),y=Y(a),L=Y(u),v=Y(u),C=Y(c),G=Y(c),w=Y(a),z=Y(a),P=Y(p),E=Y(h),A=Y(a),N=Y(a),W=Y(c),D((_=i((M=function(e){function i(){for(var i,t=arguments.length,r=new Array(t),s=0;s<t;s++)r[s]=arguments[s];return i=e.call.apply(e,[this].concat(r))||this,n(i,"Ball",_,o(i)),n(i,"BoxBall",x,o(i)),n(i,"Tennis",F,o(i)),n(i,"BarLose",O,o(i)),i.Balls=void 0,i.ballCollider=void 0,i.isTouching=!1,n(i,"speed",H,o(i)),n(i,"Score",I,o(i)),n(i,"SpeedLabel",U,o(i)),n(i,"speedDrop",R,o(i)),i.numScore=0,i.numBallDrop=0,n(i,"WinBG",Q,o(i)),n(i,"GameBG",V,o(i)),n(i,"WinAndLose",j,o(i)),n(i,"Frame",X,o(i)),n(i,"Life",Z,o(i)),n(i,"Dialog",q,o(i)),n(i,"TimeDialog",J,o(i)),i.numTime=3,i.DropPosition=[m(-224.983,1300),m(-3.821,1300),m(212.734,1300)],i}t(i,e);var r=i.prototype;return r.start=function(){var e=this;B.instance.PlayMusic("Music"),B.instance.onLoad(),this.Dialog.active=!0,this.WinBG.active=!1,this.GameBG.active=!0,this.diaLogTime(),setTimeout((function(){e.Tennis.on(d.BEGIN_CONTACT,e.CollisionBall,e),e.schedule((function(){e.DropBall()}),e.speedDrop),e.SpeedLabel.string="1",e.Tennis.node.on(a.EventType.TOUCH_START,e.onStartTennis,e),e.Tennis.node.on(a.EventType.TOUCH_MOVE,e.onMoveTennis,e),e.Tennis.node.on(a.EventType.TOUCH_END,e.onEndTennis,e),e.Tennis.node.on(a.EventType.TOUCH_CANCEL,e.onEndTennis,e),e.Dialog.active=!1}),3e3)},r.update=function(){this.numScore,this.updateNumscore()},r.diaLogTime=function(){var e=this,i=setInterval((function(){e.numTime-=1,e.TimeDialog.string=e.numTime.toString(),e.numTime<=0&&(e.numTime=0,e.TimeDialog.string=e.numTime.toString(),setTimeout((function(){clearInterval(i)}),3e3))}),1e3)},r.GeneratorDropLocation=function(){return Math.floor(Math.random()*this.DropPosition.length)},r.DropBall=function(){var e=f(this.Ball);this.BoxBall.addChild(e);var i=this.GeneratorDropLocation();this.BoxBall.setPosition(this.DropPosition[i].x,this.DropPosition[i].y),this.Balls=e.getComponent(u),this.Balls.on(d.BEGIN_CONTACT,this.CollisionDrop,this),g(e).to(this.speedDrop,{position:m(-3.821,-3e3)}).call((function(){e.destroy()})).start()},r.CollisionBall=function(e,i){this.ballCollider=i,1==e.tag&&2==i.tag&&(B.instance.PlaySound("Tennis"),this.BallBack(),this.numScore+=1,this.Score.string=this.numScore.toString(),this.CheckWin(this.Frame[0]))},r.CollisionDrop=function(e,i){this.BarLose=i,2==e.tag&&3==i.tag&&(B.instance.PlaySound("Error"),this.numBallDrop+=1,console.log("numBall",this.numBallDrop),this.CheckLose(this.Frame[1]),this.CheckLife())},r.BallBack=function(){var e=this;g(this.ballCollider.node).to(this.speedDrop,{position:m(this.Tennis.node.position.x,3e3)}).call((function(){e.ballCollider.destroy()})).start()},r.onStartTennis=function(e){this.isTouching=!0},r.onMoveTennis=function(e){if(this.isTouching){var i=e.getDelta(),t=this.Tennis.node.getPosition().x+=i.x*this.speed,n=this.Tennis.node.getPosition().y;this.Tennis.node.setPosition(new T(t,n))}},r.onEndTennis=function(e){this.isTouching=!1},r.updateNumscore=function(){5===this.numScore&&(this.Score.string=this.numScore.toString(),this.speedDrop=1.2,this.SpeedLabel.string="2"),12===this.numScore&&(this.Score.string=this.numScore.toString(),this.speedDrop=.8,this.SpeedLabel.string="3"),22===this.numScore&&(this.Score.string=this.numScore.toString(),this.speedDrop=.6,this.SpeedLabel.string="4"),34===this.numScore&&(this.Score.string=this.numScore.toString(),this.speedDrop=.5,this.SpeedLabel.string="5"),40===this.numScore&&(this.speedDrop=0)},r.CheckWin=function(e){var i=this;this.numScore>=40&&(this.speedDrop=0,this.unschedule(this.DropBall),setTimeout((function(){i.WinAndLose.spriteFrame=e,i.WinBG.active=!0}),500))},r.CheckLose=function(e){var i=this;this.numBallDrop>=5&&(this.speedDrop=0,this.unschedule(this.DropBall),setTimeout((function(){i.WinAndLose.spriteFrame=e,i.WinBG.active=!0}),500))},r.CheckLife=function(){var e=this;1===this.numBallDrop&&setTimeout((function(){e.Life[0].destroy()}),0),2===this.numBallDrop&&setTimeout((function(){e.Life[1].destroy()}),0),3===this.numBallDrop&&setTimeout((function(){e.Life[2].destroy()}),0),4===this.numBallDrop&&setTimeout((function(){e.Life[3].destroy()}),0),5===this.numBallDrop&&setTimeout((function(){e.Life[4].destroy()}),0)},i}(b)).prototype,"Ball",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),x=i(M.prototype,"BoxBall",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),F=i(M.prototype,"Tennis",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),O=i(M.prototype,"BarLose",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),H=i(M.prototype,"speed",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2.5}}),I=i(M.prototype,"Score",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),U=i(M.prototype,"SpeedLabel",[G],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),R=i(M.prototype,"speedDrop",[Y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1.6}}),Q=i(M.prototype,"WinBG",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),V=i(M.prototype,"GameBG",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),j=i(M.prototype,"WinAndLose",[P],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),X=i(M.prototype,"Frame",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),Z=i(M.prototype,"Life",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),q=i(M.prototype,"Dialog",[N],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),J=i(M.prototype,"TimeDialog",[W],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=M))||k));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts"],(function(t){var n,i,e,o,u,a,c,r,l,s;return{setters:[function(t){n=t.applyDecoratedDescriptor,i=t.inheritsLoose,e=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){u=t.cclegacy,a=t._decorator,c=t.Node,r=t.director,l=t.Component},function(t){s=t.AudioManager}],execute:function(){var f,d,B,p,O,S,h,v,y,M,g;u._RF.push({},"488f27BIfFJur32B/Ng+YhP","GameManager",void 0);var b=a.ccclass,m=a.property;t("GameManager",(f=b("GameManager"),d=m(c),B=m(c),p=m(c),O=m(c),f((v=n((h=function(t){function n(){for(var n,i=arguments.length,u=new Array(i),a=0;a<i;a++)u[a]=arguments[a];return n=t.call.apply(t,[this].concat(u))||this,e(n,"ButtonMusicOff",v,o(n)),e(n,"ButtonMusicOn",y,o(n)),e(n,"ButtonSoundOff",M,o(n)),e(n,"ButtonSoundOn",g,o(n)),n}i(n,t);var u=n.prototype;return u.start=function(){this.ButtonMusicOff.active=!1,this.ButtonMusicOn.active=!0,this.ButtonSoundOff.active=!1,this.ButtonSoundOn.active=!0},u.Home=function(){s.instance.PlaySound("Click"),r.loadScene("Home")},u.Replay=function(){s.instance.PlaySound("Click"),r.loadScene("Game")},u.BtnMusicOff=function(){s.instance.PlaySound("Click"),this.ButtonMusicOff.active=!1,this.ButtonMusicOn.active=!0},u.BtnMusicOn=function(){s.instance.PlaySound("Click"),this.ButtonMusicOff.active=!0,this.ButtonMusicOn.active=!1},u.BtnSoundOff=function(){s.instance.PlaySound("Click"),this.ButtonSoundOff.active=!1,this.ButtonSoundOn.active=!0},u.BtnSoundOn=function(){s.instance.PlaySound("Click"),this.ButtonSoundOff.active=!0,this.ButtonSoundOn.active=!1},n}(l)).prototype,"ButtonMusicOff",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(h.prototype,"ButtonMusicOn",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),M=n(h.prototype,"ButtonSoundOff",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=n(h.prototype,"ButtonSoundOn",[O],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),S=h))||S));u._RF.pop()}}}));

System.register("chunks:///_virtual/Home.ts",["./rollupPluginModLoBabelHelpers.js","cc","./AudioManager.ts"],(function(n){var t,e,o,i,c,r,s,a;return{setters:[function(n){t=n.inheritsLoose},function(n){e=n.cclegacy,o=n._decorator,i=n.director,c=n.sys,r=n.game,s=n.Component},function(n){a=n.AudioManager}],execute:function(){var u;e._RF.push({},"8859fE52+RNyqtFd5ppWJtG","Home",void 0);var l=o.ccclass;o.property,n("Home",l("Home")(u=function(n){function e(){return n.apply(this,arguments)||this}t(e,n);var o=e.prototype;return o.start=function(){a.instance.PlayMusic("Music")},o.BtnStart=function(){a.instance.PlaySound("Click"),i.loadScene("Game")},o.BtnExit=function(){a.instance.PlaySound("Click"),c.isBrowser?window.close():c.isNative?r.end():i.end()},e}(s))||u);e._RF.pop()}}}));

System.register("chunks:///_virtual/Loading.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,n,r,i,a,o,s,c,u,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,o=e._decorator,s=e.ProgressBar,c=e.Label,u=e.director,l=e.Component}],execute:function(){var h,g,p,m,d,L,P;a._RF.push({},"55aa1+v97JAu4ZyvjiSgtRv","Loading",void 0);var f=o.ccclass,B=o.property;e("Loading",(h=f("Loading"),g=B(s),p=B(c),h((L=t((d=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),o=0;o<n;o++)a[o]=arguments[o];return t=e.call.apply(e,[this].concat(a))||this,r(t,"LoadingBar",L,i(t)),t.numBar=0,r(t,"LabelPercent",P,i(t)),t.numPercent=0,t}n(t,e);var a=t.prototype;return a.start=function(){var e=this;this.LabelPercent.string=this.numPercent.toString()+"%",this.LoadingBar.progress=this.numBar,this.schedule((function(){e.Loading()}),.2)},a.Loading=function(){this.numPercent+=5,this.numBar+=.05,this.numBar>=1&&this.numPercent>=100&&(this.numBar=1,this.numPercent=100),this.LoadingBar.progress=this.numBar,this.LabelPercent.string=this.numPercent.toString()+"%",1===this.numBar&&100===this.numPercent&&u.loadScene("Home")},t}(l)).prototype,"LoadingBar",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=t(d.prototype,"LabelPercent",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=d))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Audio.ts","./AudioManager.ts","./Game.ts","./GameManager.ts","./Home.ts","./Loading.ts","./debug-view-runtime-control.ts"],(function(){return{setters:[null,null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});