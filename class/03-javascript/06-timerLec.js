let isStarted = false;
let time = 10;
let  timer = setInterval(function(){
    if(isStarted == true){
            if(time>=0){
                let min = Math.floor(time/60) //몫
                let sec = String(time%60).padStart(2,"0") //초
                //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
                console.log(min + ":" + sec)
                document.getElementById("timer").innerText = min +":"+sec
                time = time -1
            } else {
            document.getElementById('finish').disabled = true;
            isStarted = false; //** 잊지말자. */
            console.log('타이머 작동중')
            clearInterval(timer);
        }
    }
         
        
        },1000)
    


let auth = () => {
    console.log('버튼눌렀을때 현재상태는' +isStarted);
    if(isStarted == false){
        //타이머가 작동중이 아닐때
        isStarted = true;
        document.getElementById("finish").disabled = false;

        let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
       document.getElementById('target').innerText = result;
    //    document.getElementById('number').style.color = getRandomColor();
       document.getElementById('target').style.color = '#' + result;
    
        let time = 10;
        clearInterval(timer);
        // let timer
       
        timer = setInterval(function(){
            if(time>=0){
                let min = Math.floor(time/60) //몫
                let sec = String(time%60).padStart(2,"0") //초
                //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
                console.log(min + ":" + sec)
                document.getElementById("timer").innerText = min +":"+sec
                time = time -1
            } else {
            document.getElementById('finish').disabled = true;
            isStarted = false; //** 잊지말자. */
            console.log('타이머 작동중')
            clearInterval(timer);
        }
         
        
        },1000)
    
        if(time ==160){
            document.getElementById('finish').disabled = true;
        }


    } else{
        //isStarted == true일때
        //타이머가 작동중일때
        console.log('나는지금작동중이야 isStarted = true' + isStarted);
        clearInterval(timer);
        //재할당 해야 다시 시작함.
        time = 10;
        isStarted = true;
        timer = setInterval(function(){
    if(isStarted == true){
        document.getElementById("finish").disabled = false;

            if(time>=0){
                let min = Math.floor(time/60) //몫
                let sec = String(time%60).padStart(2,"0") //초
                //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
                console.log(min + ":" + sec)
                document.getElementById("timer").innerText = min +":"+sec
                time = time -1
            } else {
                //time == 0이 되었을때 자동으로 바뀐다.
            document.getElementById('finish').disabled = true;
            isStarted = false; //** 잊지말자. */
            console.log('타이머 작동중')
            clearInterval(timer);
        }
    }
         
        
        },1000)
    

    }




  

//타이머가 0이되었을때 인증완료 버튼 비활성화
}