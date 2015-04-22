var milkcocoa = new MilkCocoa("https://io-oi8qondb6.mlkcca.com/");
var potisionDataStore = milkcocoa.dataStore("position");
var positionX = window.innerWidth/2;
var positionY = window.innerHeight/2;
console.log(window);

var length = 8
var token = Math.random().toString(36).slice(-length);

window.onload = function(){
  $("#unit")[0].style.top = positionY+"px";
  $("#unit")[0].style.left = positionX+"px";
}

function sendControl(valueX,valueY){
  potisionDataStore.push({positionX : valueX,positionY : valueY},function(data){
    console.log("milkcocoa送信完了!");
  });
}

function openwin() {
  window.open("./cont.html?token="+token, "", "width=400,height=200,status=no,location=no,toolbar=no,menubar=no");
  $("#openWin").hide();
}

potisionDataStore.on("push",function(data){
  console.log(data);
  if(data.value.token == token){
    positionX = positionX+data.value.mv;
    $("#unit")[0].style.left = positionX+"px";
  }
});
