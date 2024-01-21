// 조건문실습

if(1+1 ===2){
    console.log('정답');
} else{
    console.log('틀림');
}
// VM350:2 정답
// undefined
if(true){

    console.log('ㅋㅋ');
}
// VM430:3 ㅋㅋ
// undefined
if(0){
    console.log('정답');
} else{
    console.log('틀림');
}
// VM468:4 틀림
// undefined
if(""){
    console.log('정답');
} else{
    console.log('틀림');
}
// VM505:4 틀림
// undefined
if(document.all){
    console.log('정답');
} else{
    console.log('틀림');
}
// VM520:4 틀림


//

const profile = {

    name: '철수',
    age: 12,
    school: '다람쥐초등학교'
}

// if(profile.age>==20){
//     console.log('성인입니다.');}
// else if(profile.age>==8 && profile.age<==19){
//     console.log('학생입니다.');
// } else{
//     console.log('어린이입니다.');
// }
//비교연산자에는 >== >= 느슨한비교, 엄격한비교가 없다.
//동치 비교에만 느슨한지 엄격한지 !!가있다

if(profile.age>=20){
    console.log('성인입니다.');}
else if(profile.age>=8 && profile.age<=19){
    console.log('학생입니다.');
} else{
    console.log('어린이입니다.');
}


//1.코드최적화
//2. -1살, -2살 error handling

if(profile.age>=20){
    console.log('성인입니다.');}
else if(profile.age>=8 ){
    console.log('학생입니다.');
} else if(profile.age >0){
    console.log('어린이입니다.');
} else {
    console.log('잘못 입력하셨습니다.');
}

