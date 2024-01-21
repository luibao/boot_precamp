
var startTime = false;
let time = 180;
var interval = setInterval(function(){
    // time=180;
    if(startTime){
    if(time>=0){
        let min = Math.floor(time/60) //몫
        let sec = String(time%60).padStart(2,"0") //초
        //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
        console.log(min + ":" + sec)
        document.getElementById("timer").innerText = min +":"+sec
        time = time -1
        startTimer = true;
    } else {
    document.getElementById('finish').disabled = true;
    }
}
 

},1000)



function starting(){
    interval;
// let interval = setInterval(function(){
//     if(time>=0){
//         let min = Math.floor(time/60) //몫
//         let sec = String(time%60).padStart(2,"0") //초
//         //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
//         console.log(min + ":" + sec)
//         document.getElementById("timer").innerText = min +":"+sec
//         time = time -1
//         startTimer = true;
//     } else {
//     document.getElementById('finish').disabled = true;
// }
 

// },1000)
}
let auth = () => {

    let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
   document.getElementById('target').innerText = result;
//    document.getElementById('number').style.color = getRandomColor();
   document.getElementById('target').style.color = '#' + result;





    let time = 180;
    // var startTime = false;
    console.log('현재 상태는' + startTime);
    if(startTime ==false){
        startTimer();
    } else{
        pauseTimer();
    }

    function startTimer(){
        // clearInterval(interval);
        // starting();
        interval;
        startTime = true;
    // let interval = setInterval(function(){
    //     if(time>=0){
    //         let min = Math.floor(time/60) //몫
    //         let sec = String(time%60).padStart(2,"0") //초
    //         //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
    //         console.log(min + ":" + sec)
    //         document.getElementById("timer").innerText = min +":"+sec
    //         time = time -1
    //         startTimer = true;
    //     } else {
    //     document.getElementById('finish').disabled = true;
    // }
     
    
    // },1000)

    if(time ==160){
        document.getElementById('finish').disabled = true;
    }
   
} //startTimer()

function pauseTimer(){
    console.log('다시누른 지금상태는?' +startTime); //true
    console.log('true니깐, 정지시켜주고 + 시간초기화 + 다시 재생');
    clearInterval(interval);
    // startTime = true;
    
    time = 180;
    interval = setInterval(function(){
        // time=180;
        if(startTime){
        if(time>=0){
            let min = Math.floor(time/60) //몫
            let sec = String(time%60).padStart(2,"0") //초
            //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
            console.log(min + ":" + sec)
            document.getElementById("timer").innerText = min +":"+sec
            time = time -1
            startTimer = true;
        } else {
        document.getElementById('finish').disabled = true;
        }
    }
     
    
    },1000)
    
    
}
  

//타이머가 0이되었을때 인증완료 버튼 비활성화
}