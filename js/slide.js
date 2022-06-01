let picWidth = 820;
let moveNum = 0;
let totalNum = 4;

for(var i=0; i<totalNum; i++){
    document.getElementById("pic"+i).style.left = (picWidth * i)+"px";
}

let dotList = document.createElement("ul");
dotList.setAttribute("id", "dotList");
document.getElementById("section1").appendChild(dotList);

for(var i=0; i<totalNum; i++){
    var li = document.createElement("li");
    li.setAttribute("id", "li" + i);
    document.getElementById("dotList").appendChild(li);
    document.getElementById("li" + i).innerText = i+1;

    document.getElementById("li" + i).onclick = function(){
        aniF();
        moveNum = this.id.substr(2,1);
        moveF();
    }
}

document.getElementById("li"+ moveNum).classList.add("active");

let prev_btn = document.createElement("button");
prev_btn.setAttribute("id", "prev_btn");
prev_btn.innerText = "이전";
document.getElementById("slide").appendChild(prev_btn);

let next_btn = document.createElement("button");
next_btn.setAttribute("id", "next_btn");
next_btn.innerText = "다음";
document.getElementById("slide").appendChild(next_btn);

let nameText = document.getElementById("name");
nameText.innerText = "그란플로리스";

document.getElementById("text" + moveNum).classList.add("fadeIn");

var aniF = function(){
    document.getElementById("text" + (moveNum)).classList.remove("fadeIn");
    document.getElementById("text" + (moveNum)).classList.add("fadeOut");
}

var moveF = function(){
    for(var i=0; i<totalNum; i++){
        document.getElementById("pic" + i).style.left = (picWidth * (i-moveNum)) + "px";
        document.getElementById("li"+ i).classList.remove("active");
    }

    document.getElementById("text" + moveNum).classList.remove("fadeOut");
    document.getElementById("text" + moveNum).classList.add("fadeIn");

    if(moveNum == 0){
        nameText.innerText = "그란플로리스";
    } else if(moveNum == 1) {
        nameText.innerText = "웨스트코스트";
    } else if(moveNum == 2) {
        nameText.innerText = "루프트하펜";
    } else {
        nameText.innerText = "알프라이라 임시주둔지";
    }

    for(var i=0; i<totalNum; i++){
        document.getElementById("li" + i).classList.remove("active");
    }
    document.getElementById("li" + moveNum).classList.add("active");
}

document.getElementById("prev_btn").onclick = function(){
    aniF();
    if(moveNum>0){
        moveNum--;
    } else {
        moveNum = (totalNum - 1);
    }
    moveF();
}
document.getElementById("next_btn").onclick = function(){
    aniF();
    if(moveNum < totalNum - 1){
        moveNum++;
    } else {
        moveNum = 0;
    }
    moveF();
}

