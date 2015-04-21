var milkcocoa = new MilkCocoa("https://io-oi8qondb6.mlkcca.com/");
var potisionDataStore = milkcocoa.dataStore("position");
var positionX = window.innerWidth/2;
var positionY = window.innerHeight/2;
console.log(window);

window.onload = function(){
  $("#unit")[0].style.top = positionY+"px";
  $("#unit")[0].style.left = positionX+"px";
}

function sendControl(valueX,valueY){
  potisionDataStore.push({positionX : valueX,positionY : valueY},function(data){
    console.log("milkcocoa送信完了!");
  });
}

potisionDataStore.on("push",function(data){
  positionY = positionY+data.value.positionY;
  positionX = positionX+data.value.positionX;
  $("#unit")[0].style.top = positionY+"px";
  $("#unit")[0].style.left = positionX+"px";
});
