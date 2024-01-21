let time = 180
setInterval(function(){
    if(time>=0){
        let min = Math.floor(time/60) //몫
        let sec = String(time%60).padStart(2,"0") //초
        //2자리가 되지않았을때, 앞에서부터 0을 채워주세요.
        console.log(min + ":" + sec)
        time = time -1
    }

    
},1000)