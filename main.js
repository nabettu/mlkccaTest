var milkcocoa = new MilkCocoa("https://io-oi8qondb6.mlkcca.com/");
var potisionDataStore = milkcocoa.dataStore("position");
var positionX = 150;
//アクセスユーザー固有のtokenを作成する
var token = Math.random().toString(36).slice(-8);

window.onload = function(){
  $("#unit")[0].style.top = "50%";
  $("#unit")[0].style.left = positionX+"px";

  $('#qc').qrcode({
         width:100,                               //QRコードの幅
         height:100,                              //QRコードの高さ 
         text:"http://nabettu.github.io/mlkccaTest/cont.html?token="+token          //QRコードの内容
     });
}

function sendControl(valueX,valueY){
  potisionDataStore.push({positionX : valueX,positionY : valueY},function(data){
    console.log("milkcocoa送信完了!");
  });
}

function openwin() {
  window.open("./cont.html?token="+token, "", "width=450,height=220,status=no,location=no,toolbar=no,menubar=no");
}

potisionDataStore.on("push",function(data){
  console.log(data);
  if(data.value.token == token){
    $("#openWin").hide();
    positionX = positionX+data.value.mv*30;
    $("#unit")[0].style.left = positionX+"px";
  }
});
