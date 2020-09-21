// グローバルに展開
phina.globalize();
// アセット
var ASSETS = {
  // 画像
  image: {
    'chara': 'img/chara.jpg',
    'BigBone':'img/BigBone.jpg',
  },
};

var SPEED=10;
var PLAYERHP=100;
var BoneAttack=1;
/*
* メインシーン
*/
phina.define("MainScene", {
  // 継承
  superClass: 'DisplayScene',
  // コンストラクタ
  init: function() {
    // 親クラス初期化
    this.superInit();
    
    this.backgroundColor="black";
    
    this.label_player_hp=Label('HP：'+PLAYERHP).addChildTo(this);
    this.label_player_hp.x=this.gridX.center();
    this.label_player_hp.y=this.gridY.center();
    this.label_player_hp.fill='blue'; 
    
    var chara=Sprite("chara",48,48).addChildTo(this);
    chara.x=this.gridX.center();
    chara.y=this.gridY.center();
    this.chara=chara;
    
    var BigBone=Sprite('BigBone',50,50).addChildTo(this);
    BigBone.x=this.gridX.center();
    BigBone.y=this.gridX.span(4);
    this.BigBone=BigBone;
    
    chara.update = function(app) {
      var key = app.keyboard;
      // 上下左右移動
      if (key.getKey('left')) { chara.x -= SPEED; }
      if (key.getKey('right')) { chara.x += SPEED; }
      if (key.getKey('up')) { chara.y -= SPEED; }
      if (key.getKey('down')) { chara.y += SPEED; }
    }
  },
  
  update:function(app){
    
    
    var label=this.label
    var BigBone=this.BigBone;
    var chara=this.chara;
    if(chara.hitTestElement(BigBone)){
      PLAYERHP=PLAYERHP-BoneAttack;
      this.label_player_hp.text='HP：'+PLAYERHP;
    }
    

  }



});
/*
 * メイン処理
 */
phina.main(function() {
  // アプリケーションを生成
  var app = GameApp({

    // MainScene から開始
    startLabel: 'main',
    

    // アセット読み込み
    assets: ASSETS,
  });
  // fps表示
  //app.enableStats();
  // 実行
  app.run();
});




