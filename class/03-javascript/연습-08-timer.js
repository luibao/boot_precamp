// setInterval(function(){
    
//     if(time==0){
//         break;
//     }
//     console.log(time)
//     time = time -1;
// },1000)

setInterval(function(){
    if(time>=0){
        console.log(time)
    time = time -1;
    }
},1000)

//일단 break 대신에 return을 사용하였다.
// You don't have a loop to break from. You are calling your function recursively, this is not the same as a loop. Use return instead of break:


setInterval(function(){
    
    if(time<0){
        return;
    }
    console.log(time)
    time = time -1;
},1000)