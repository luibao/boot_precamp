function makeNumber(){
    alert('안녕~');
    //1.무작위 숫자 6개 생성
 
    // alert(String(Math.floor(Math.random()*1000000)).padStart(6,"0"));
    let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");

//변수선언
// const token = ~~ const로 선언해주었음.
// javascript로 조작하는 가능성은?

    alert(result);
    //2. innerHTML 변경하기
    document.getElementById('number').innerHTML = result;

    //근데 자꾸 생성되는 문제점?
    
}

let auth = () => {
    let result = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
   document.getElementById('number').innerHTML = result;
   document.getElementById('number').style.color = getRandomColor();
//    document.getElementById('number').style.color = '#' + result;
}
//생성시마다 글자생성바꿔주기..
//랜덤한? 색상
function getRandomColor() {
	return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

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