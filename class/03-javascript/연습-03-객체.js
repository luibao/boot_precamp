let friend = {

    이름 :'철수',
    age :13,
    camp: "",
}
// undefined
friend
// {이름: '철수', age: 13, camp: ''}
friend['이름']
// '철수'
friend.이름
// '철수'
friend.camp
// ''



let classmates = [

    {
        name :'철수', age: 13, school :'초등학교',
    },
    {
        name:"영희", age: 8, school :"유치원생",
    },
    {
        name:'훈이'
    }
    ]
// undefined
classmates
// (3) [{…}, {…}, {…}]0: {name: '철수', age: 13, school: '초등학교'}1: {name: '영희', age: 8, school: '유치원생'}2: {name: '훈이'}length: 3[[Prototype]]: Array(0)
classmates[2]
// {name: '훈이'}
classmates[1].age
// 8
classmates[1]
// {name: '영희', age: 8, school: '유치원생'}

