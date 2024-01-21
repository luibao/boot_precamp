let classmates = ["철수", "영희", "훈이"]
// undefined
classmates
// (3) ['철수', '영희', '훈이']

classmates[0]
// '철수'
classmates[1]
// '영희'
classmates[2]
// '훈이'
classmates.includes("훈이")
// true
classmates.includes("맹구")
// false
classmates.push("맹구")
// 4
classmates.includes("맹구")
// true
classmates.indexOf("훈이")
// 2
classmates.indexOf("맹구")
// 3
classmates.pop()
// '맹구'
classmates.pop()
// '훈이'

classmates
// (2) ['철수', '영희']


let developer = ["끈기", "열정", "긍정", "독기", "중꺾마"]
// undefined
developer[3]
// '독기'
let dream = ["커리어점프", "성공", "할수있다"]
// undefined
developer.join(dream)
// '끈기커리어점프,성공,할수있다열정커리어점프,성공,할수있다긍정커리어점프,성공,할수있다독기커리어점프,성공,할수있다중꺾마'
developer.concat(dream)
// (8) ['끈기', '열정', '긍정', '독기', '중꺾마', '커리어점프', '성공', '할수있다']
developer
// (5) ['끈기', '열정', '긍정', '독기', '중꺾마']
dream
// (3) ['커리어점프', '성공', '할수있다']
let concatarray = developer.concat(dream);
// undefined
concatarray;
// (8) ['끈기', '열정', '긍정', '독기', '중꺾마', '커리어점프', '성공', '할수있다']