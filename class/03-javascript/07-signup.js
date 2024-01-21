// 모두 다 채워졌을때
//버튼이 활성화되어야한다.

const checkValidation = function(){
    let email = document.getElementById("email").value;
    let pw1 = document.getElementById("pw1").value;
    let pw2 = document.getElementById("pw2").value;

    //value 로 값을 가져오면 text, String 값으로 들어온다.
    if(email !== "" && pw1 !== "" & pw2 !==""){
    //if(email&&pw1&&pw2) /**거짓같은 값 - 하나라도 null이면 false로 나온다. */
        //모든 input이 비어있지 않을때
        document.getElementById("submit").disabled = false;
    } else{
        //하나라도 비어있을 때
        document.getElementById("submit").disabled = true;
    }

    
}

//이벤트가 감지될때마다 이 함수가 실행되어야한다.
//oninput