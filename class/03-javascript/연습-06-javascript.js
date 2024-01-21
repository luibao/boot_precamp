let persons = [
    {name : '철수', age: 17},
    {name:'영희', age: 22},
    {name: '아이바오', age: 11},
    {name: '푸바오', age: 3}
]
// undefined
for(let count =0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log('성인입니다.');
    }else{
        console.log('미성년자입니다.');
    }
}
// VM1547:5 미성년자입니다.
// VM1547:3 성인입니다.
// 2VM1547:5 미성년자입니다.
// undefined
for(let count =0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log(pelet persons = [
    {name : '철수', age: 17},
    {name:'영희', age: 22},
    {name: '아이바오', age: 11},
    {name: '푸바오', age: 3}
]
// undefined
for(let count =0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log('성인입니다.');
    }else{
        console.log('미성년자입니다.');
    }
}
// VM1547:5 미성년자입니다.
// VM1547:3 성인입니다.
// 2VM1547:5 미성년자입니다.
// undefined
for(let count =0; count<persons.length; count++){
    if(persons[count].age>=19){
        console.log(persons[count].name + '님은 성인입니다.');
    }else{
        console.log(persons[count].name+ '님은 미성년자입니다.');
    }
}
// VM1675:5 철수님은 미성년자입니다.
// VM1675:3 영희님은 성인입니다.
// VM1675:5 아이바오님은 미성년자입니다.
// VM1675:5 푸바오님은 미성년자입니다.
rsons[count].name + '님은 성인입니다.');
    }else{
        console.log(persons[count].name+ '님은 미성년자입니다.');
    }
}
// VM1675:5 철수님은 미성년자입니다.
// VM1675:3 영희님은 성인입니다.
// VM1675:5 아이바오님은 미성년자입니다.
// VM1675:5 푸바오님은 미성년자입니다.