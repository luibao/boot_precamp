
const p2Focus = () => {
let p1 = document.getElementById("p1").value;
if(p1.length==3){
    document.getElementById("p2").focus();
}
}
const p3Focus = () => {
    let p2 = document.getElementById("p2").value;
    if(p2.length==4){
        document.getElementById("p3").focus();
    }
    }

const tokenFocus = () => {
        let p3 = document.getElementById("p3").value;
        if(p3.length==4){
            document.getElementById('tokenButton').removeAttribute("disabled");
            document.getElementById("tokenButton").style.cursor= "pointer";
            // document.getElementById("tokenButton").style= "color: white; background-color: #298eb5";
            document.getElementById("tokenButton").style.color = '#0068FF';
            document.getElementById("tokenButton").style.backgroundColor = 'white';
            
        }else{
                document.getElementById('tokenButton').setAttribute('disabled',true);
                document.getElementById('tokenButton').style.color = '';

        }
    }

//인증번호 전송버튼 누른경우
let tokenFunction = () => {
    //토큰정보 생성
    let auth = String(Math.floor(Math.random()*1000000)).padStart(6,"0");
    //토큰 보여주기.
    document.getElementById("showNumber").innerText = auth;

    //타이머
     time= 5;
     isStarted = true;
    interval;
    //다시 재할당해줘야함;
    //처음 시작했을때랑, 다시 시작했을때를 구분해줘야함
   
    //**이러지말고 이미 인증된경우에는. 다시 하지말자;; */
    if(isConfirmed){
        alert("이미 인증완료하셨습니다.");
           //인증번호 전송버튼 비활성화
    document.getElementById('tokenButton').setAttribute('disabled',true);
    document.getElementById('tokenButton').style.color = '';

    }



}


//인증확인버튼 누른경우
let confirmToken = () => {
    alert('인증이 완료되었습니다.');
    isConfirmed = true;
    //토큰 정보를 "000000", 시간을 '3:00'
    document.getElementById('showNumber').innerHTML = '000000';
         // let time= 180;    
     //timer을 종료시켜야함;
    clearInterval(interval);
    document.getElementById('timeShow').innerHTML = "3:00";  
   
    //인증번호 전송버튼 비활성화
    document.getElementById('tokenButton').setAttribute('disabled',true);
    document.getElementById('tokenButton').style.color = '';
    //인증완료 버튼으로 바꿔주기
    document.getElementById('tokenConfirm').innerHTML = "인증 완료";
    document.getElementById('tokenConfirm').setAttribute('disabled',true);
    document.getElementById('tokenConfirm').style.backgroundColor = '';
    document.getElementById('tokenConfirm').style.color = '';


    //가입하기 버튼 활성화
    document.getElementById('submitButton').removeAttribute("disabled");
    document.getElementById("submitButton").style.cursor= "pointer";
    // document.getElementById("tokenButton").style= "color: white; background-color: #298eb5";
    document.getElementById("submitButton").style.color = '#0068FF';
    document.getElementById("submitButton").style.backgroundColor = 'white';
    
}

let isConfirmed = false; //인증되었니?
let time = 180;
let isStarted = false;
let interval = setInterval(
        function(){
            if(isStarted){
            if(time>=0){
                //인증확인 버튼 활성화
        document.getElementById('tokenConfirm').removeAttribute("disabled");
        document.getElementById("tokenConfirm").style.cursor= "pointer";
        document.getElementById("tokenConfirm").style.backgroundColor = '#0068FF';
        document.getElementById("tokenConfirm").style.color = 'white';    
    
              let min = Math.floor(time /60);
              let sec = String(time % 60).padStart(2,"0");
              document.getElementById('timeShow').innerText = min +":" + sec; 
              time = time-1;
    
                //시간 이내에 인증확인 버튼을 누르면 확인창 alert
       
    
    
            }else{
                //시간이 다 지난 경우.
                //인증확인 버튼을 회색으로 되돌리고, 비활성화.
                document.getElementById('tokenConfirm').setAttribute('disabled',true);
                document.getElementById('tokenConfirm').style.backgroundColor = '';
                document.getElementById('tokenConfirm').style.color = '';
                //토큰 정보를 "000000", 시간을 '3:00'
                document.getElementById('showNumber').innerHTML = '000000';
                // let time= 180;    
                document.getElementById('timeShow').innerHTML = "3:00";        
            }
        }
    }
    ,1000);

//회원가입 버튼 누르기
let submitClick = () => {
    //초기화하기?

    checkEmail();
   checkName();
    checkPw();      
    checkRegion();
    checkRadio();

    //모든 에러메세지가 없는경우.
    //가입 축하 함수~~
    joinUs();

}
//이름확인 함수
let checkName = () => {
    document.getElementById('nameError').innerText="";
    if( document.getElementById('name').value==""){
        document.getElementById('nameError').innerText = '이름을 입력해주세요.';
    }
}
//이메일 확인 함수
let checkEmail = () => {
    document.getElementById('emailError').innerText="";
    if( document.getElementById('email').value==""){
        document.getElementById('emailError').innerText = '이메일을 입력해주세요.';
    } else if(!document.getElementById('email').value.includes('@')){
        document.getElementById('emailError').innerText = '이메일이 올바른지 확인해주세요.';
    }
    
}
//비밀번호 확인 함수
let checkPw = () => {
    document.getElementById('pw1Error').innerText="";
    document.getElementById('pw2Error').innerText="";
    if( document.getElementById('pw1').value=="" || document.getElementById('pw2').value==""){
        document.getElementById('pw1Error').innerText = '비밀번호를 입력해주세요.';
        document.getElementById('pw2Error').innerText=  '비밀번호를 입력해주세요.';
    } else if(document.getElementById('pw1').value != document.getElementById('pw2').value ){
        document.getElementById('pw2Error').innerText = '비밀번호가 올바른지 확인해주세요.';
    }
}

//지역선택 확인함수
let checkRegion = () => {
    // alert(document.getElementById('region').value);
    document.getElementById('regionError').innerText= '';
    if(
        document.getElementById('region').value== 0){

    document.getElementById('regionError').innerText= '지역을 선택해주세요.';
        }
}

let checkRadio = () => {

    document.getElementById('radioError').innerText = '';
  
    // alert(document.getElementById('radioFemale').checked);
    //false false 이면안됨
    //하나라도 true여야
    

    if(!(document.getElementById('radioFemale').checked || document.getElementById('radioMale').checked)){
    document.getElementById('radioError').innerText = '성별을 선택해주세요';} 
}

//가입 축하함수
let joinUs = () => {

    if(!(document.getElementById('emailError').innerText || document.getElementById('nameError').innerText ||
    document.getElementById('pw1Error').innerText ||
    document.getElementById('pw2Error').innerText ||
    document.getElementById('regionError').innerText ||
    document.getElementById('radioError').innerText)){
        alert('회원가입을 축하합니다!');
    }


}