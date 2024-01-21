//인증번호 전송 버튼 누르면
//1. 인증번호가 표시
//2. 3분타이머가 시작된다. (3분타이머는 0 미만으로 작아지진 않는다.)

var isStop = false
////함수로 리팩토링하기
function number(){
//    stop();
//[1]
//1.인증번호 랜덤 생성
let result = String(Math.floor(Math.random() * 1000000)).padStart(6,"0");
//2.dom 표시하기
document.getElementById("number").innerText = result;

//[2]
let time = 180;
let interval = setInterval(function(){
    if(!isStop){
// let time = 180;
if(time>=0){
//분과 초로 나누어서
let min = Math.floor(time/60);
let sec = String(time%60).padStart(2,"0");

let timeResult = min +":"+sec;
time= time-1;
document.getElementById("timer").innerHTML =  min +":"+sec;
} else{
    console.log('재시작..');
    clearInterval(interval)
}

}
// document.getElementById("timer").innerHTML = timeResult;
},1000)
}

//다시 인증번호 누르면 interval이 초기화되어야하는데
//함수 정의, 호출범위 잘 모르겠다;;
function stop(){
    // clearInterval(interval);
    isStop = true;
}