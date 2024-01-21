const email = "codecamp@gmail.com"
// undefined
email.includes("@");
// true
email.split("@");
// (2) ['codecamp', 'gmail.com']
let userMail = email.split("@")[0]
// undefined
let company = email.split("@")[1]
// undefined
userMail
// 'codecamp'
company
// 'gmail.com'
let maskingMail = []; 
// undefined  **빈배열 만들어주는게 핵심!
//한글자씩 넣어준다.
// undefined
maskingMail.push(userMail[0])
// 1
maskingMail.push(userMail[1])
// 2
maskingMail.push(userMail[2])
// 3
maskingMail.push(userMail[3])
// 4
maskingMail
// (4) ['c', 'o', 'd', 'e']
maskingMail.push("*")
// 5
maskingMail.push("*")
// 6
maskingMail.push("*")
// 7
maskingMail.push("*")
// 8
maskingMail
// (8) ['c', 'o', 'd', 'e', '*', '*', '*', '*']
maskingMail.join("")
// 'code****'
maskingMail.join("") +"@"+ company
// 'code****@gmail.com'

let result = maskingMail.join("") +"@"+ company


// userMail.length를 구해서
// 5자리라면
// length-4
// 0 1 2 3 4
// 1
// length-4-1까지 push해준다음에 ....,,....
// 무조건 
// maskingMail.push("*") 4번해주면 된다.
