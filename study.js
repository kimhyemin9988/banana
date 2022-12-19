var myArray = [[1,2,3],[4,5,6],[[7,8,9],[10,11,12]]];
myArray[2][0][1] = 8;

var abc = 1;
JSON.stringify(abc); // console.log '1'
var stringa = "1"; //  console.log  '1'
JSON.stringify(stringa); //console.log '"1"'
JSON.parse(stringa);//console.log 1
JSON.parse(abc); // console.log 1
/*switch*/
function next(item){
    var answer = "" /*빈 문자열*/
    switch (item) {
        case 1:
        case 2: /*한번에 여러개 가능 */
            answer ="low";
            return answer;
        case 3:
            answer = "all good!";
            return answer;
    }
}

/*Math 함수*/
Math.pow(a,b);//a값을 밑수로 b제곱함
Math.sqrt(a); // 값에 제곱근을 씌움
Math.round(a); //값을 반올림한 정수

function abTest(a,b){
    if(a<0 || b<0)
    {
        return undefined;
    }
    else{
        return Math.round(Math.pow(Math.sqrt(a)+Math.sqrt(b),2));/*2제곱*/
    }
}
abTest(2,2);

/*객체 내부 key값에 빈공간이 있는 경우 => []표기법
    점표기법을 쓰려면 key값이 ""로 감싸져있어야함
    안감싸져있거나 내부에 공백이 있으면 대괄호 써야함
*/
var testObj = { /*객체 생성시 괄호(=)넣는거 잊지 말기!*/
    "an apple":"red",
    "a banana":"yello",
    "a carot":"orange"
};
 console.log(testObj["an apple"]); //'red'

 var testObj = {
    12:"red",
    16:"yello",
    18:"orange"
};
var abc = 12;
console.log(testObj[abc]); //'red'

// 객체.(key 값) = "(값)"
// 객체["key값"] = "(값)"으로 객체에 추가할수 있음
var testObja = {
    "anapple":"red",
    "abanana":"yello",
    "acarot":"orange"
};
// delete 객체.(key값)
delete testObja.anapple; /*.이 아니라 공백임을 주의*/
delete testObja["abanana"];

/*  특성에 대한 개체 테스트
    key값을 가진 값을 찾기
   Object.prototype.hasOwnProperty() 메서드 사용
    객체에 ""가 없을때!*/

var testObjb = {
    apple:"red",
    banana:"yello",
    carot:"orange"
};

function checkObj(checkProp)
{
    if(testObjb.hasOwnProperty(checkProp))
    {
        return testObjb[checkProp];
    }
    else{
        return "not find";
    }

}

console.log(checkObj("apple"));

/*manipulating complex objects(복잡한 객체 조직)
    배열안에 객체가 있는 경우*/

var myMusic = [
    {
        "artist" : "idle",
        "title":"tomboy",
        "release_year":"2022",
        "formats":["CD","digital"],
        "gold":true}];
myMusic.length;// 1
myMusic[0].formats;//   ['CD', 'digital']
myMusic[0]["artist"];// 'idle'
myMusic[0]["formats"][0];// 'CD'

/*중첩된 객체(Nested Objects)
    객체안에 객체가 있는것이 중첩!*/

var myMusic = /*배열 없이 객체만 있음*/
{
    "kpop":{
    "artist" : {"idle":{"title":["tomboy","Latata"]}}}};

myMusic.length; //undefined 
myMusic.kpop.artist.idle.title; // ['tomboy', 'Latata']
myMusic.kpop.artist.idle.title[0];
/*'tomboy' ->배열이기때문에 점이나 대괄호로 검색할 수 없다.*/

/*중첩된 배열(Nested arrays)
    배열안에 객체가 있는 형태
    그 안의 값이 배열로 중첩될 수 있음*/

/*record collection*/
var mycollection = 
    {
      "1":{
          "album":"i never die",
          "artist":"idle",
          "tracks":["말리지마","tomboy"]},
        "2":{
            "album":"기디업",
             "artist":"the boyz",
              "tracks":["기디업","text me back"]},
        "3":{
            "album":"봄바람",
            "artist":"워너원",
              "tracks":["봄바람","불꽃놀이"]},
        "4":{
            "album":[],
            "artist":"itzy",
              "tracks":[]},
        "5":{"album":"eleven"}};
var collectionCopy = JSON.parse(JSON.stringify(mycollection));
/*변경되기 전에 원본의 복사본을 저장 */

function updateRecords(id, prop, value){ /*id,속성,값 */
    
    if(value == "") // //속성의 값이 없으면 지운다, tracks포함
    {
        delete mycollection[id][prop];
    }

    if(prop !== "tracks")//속성의 값이 있는데 그게 트랙이 아닌 경우
    {
        mycollection[id][prop] = value; //value에 ""붙여서 들어가겠징?, update해준다
    }
    else // 트랙인 경우
    {
        mycollection[id][prop] = mycollection[id][prop] || []; //트랙이 있으면 그냥두고 없으면 빈배열을 id.prop에 만든다
        mycollection[id][prop].push(value); //맨뒤에 값 추가
    }
    
/*이 함수를 통해 객체안의 각 key(1,2,3,4,5)와 속성(album,artist,tracks)을 이용해 값을 update하고
전체 collection을 반환*/
    return mycollection;
}

updateRecords(1,"album","i am");
updateRecords(4,"tracks","i wish");
updateRecords(3,"tracks","해냄");
updateRecords(5,"tracks","완성?");

/*2:24:17 (코딩 챌린지)
    배열안에 객체가 있는 형태*/

var contacts = [
    {
        "groupName":"르세라핌",
        "memberNumber":"5",
        "member":["사쿠라","채원","은채","카즈하","윤진"]
    },
    {
        "groupName":"아이브",
        "memberNumber":"6",
        "member":["원영","리즈","레이","유진","가을","이서"]

    },
    {
        "groupName":"블랙핑크",
        "memberNumber":"4",
        "member":["제니","로제","지수","리사"]

    },
    {
        "groupName":"뉴진스",
        "memberNumber":"5",
        "member":["하니","민지","다니엘","해린","혜인"]

    }
]
/* 이름과 속성을 전달하는 함수 
    (뉴진스,menber) -> ["하니","민지","다니엘","해린","혜인"]
    (르세라핌,memberNumber) -> 5가 반환
    전달된 이름이 연락처와 일치하지 않는 경우(ex 트와이스) 해당 연락처 없음을 반환
    속성이 없으면 ex) (뉴진스, 타이틀) No such property를 반환*/
function lookUpProfile(name, prop){
    for(i=0; i<contacts.length; i++)
    {
        if(contacts[i]["groupName"] == name)
        //모든 객체의 이름을 확인//contacts[1]["groupName"] == "아이브"
        {
            if(contacts[i][prop] == undefined)//
            {
                return "No such property";
            }//위에서 세번째부터 여기까지를  return contacts[i][prop]옆에 || 로 표시하는게 이해 안감...
            //이해는 가는데...
            return contacts[i][prop];
        }
    }

    return "해당 정보 없음";

}

var data = lookUpProfile("뉴진스","member");//["하니","민지","다니엘","해린","혜인"]
var data = lookUpProfile("트와이스","member"); // 해당 정보 없음
var data = lookUpProfile("르세라핌","memberNumber");// 5가 반환
console.log(data);

/* 삼항연산자 이중*/

function checkSing(num){
    return num>0 ? "positive" : num<0 ? "negative" : "zero"}


/*prevent object mutation*/
const MATH_CONSTANTS = {
    PI:3.14
};
Object.freeze(MATH_CONSTANTS); // 값이 변하는것을 막을 수 있다.

/* 고차 함수 화살표 */

/*프로퍼티와 메소드*/
var arrayEx = [4,5,6,-9.8,-10,-4.44]
var num1 = 13;
var num2 = 3.33;
Number.isInteger(num1);//true
Number.isInteger(num2);//false
arrayEx.filter(num => num>0);// 배열중에 0보타 큰 것만
arrayEx.map(x => x*2); //배열의 모든 값에 대해 *2를 한뒤에 return


/* 즉시 실행 함수 */
(function(){
    return 4;
}()
); // '4'
num1 = 22;
(function(){
    return num1*2;
}(num1)
); //'44'


/*write Higher order arrow functions(고차 화살표 함수 작성)*/

const increment = (function(){
    return function increment(number, value = 1){ //넣지 않으면 1로 됨
        return number + value;
    };
}()
); //즉시실행함수의 반환값에 다시 함수가 있음
increment(5,2); //7
increment(5);//6

/*pop,shift*/
myArray = [1,2,3];
myArray.pop(); // 3
console.log(myArray); // [1,2], 3이 제거됨<->push
myArray.shift();//1
console.log(myArray);// [2], 1이 제거됨 <->unshif

/*reduce???이해 x , 2:54:00*/

/*Spread Operator(확산 연산자) */


const arr1 = ["사쿠라","채원","은채","카즈하","윤진"];
let arr2;
(function() {
    arr2 = arr1;
    console.log(arr2); //['사쿠라', '채원', '은채', '카즈하', '윤진']
    arr1[0] = "원영";
    console.log(arr2);// ???['원영', '채원', '은채', '카즈하', '윤진']
    console.log(arr1);// ['원영', '채원', '은채', '카즈하', '윤진']
}()); //자바스크립트는 한쪽만 바꿔도 둘다 적용되는듯...
//=>그렇게 하지 않기 위해 확산 연산자 사용

(function() {
    arr2 = [...arr1]; // [...ar2] = arr1도 같은 결과
    console.log(arr2); //['사쿠라', '채원', '은채', '카즈하', '윤진']
    arr1[0] = "원영";
    console.log(arr2);// ['사쿠라', '채원', '은채', '카즈하', '윤진']
    console.log(arr1);// ['원영', '채원', '은채', '카즈하', '윤진']
}()); 

/*Destructuring assignment(비구조화 할당) */
var voxel = {x:3.6, y:7.4, z:6.54}
/* 옛날 방식 */
var a = voxel.x;
var b = voxel.y;
var c = voxel.z;

const { x: a, y: b, z: c} = voxel;//a = 3.6,b=7.4,c=6.54

/* destructuring assignment with nested objects
    (중첩된 개체를 사용한 비구조화 할당)*/

const LOCAL_FORECAST = {
    today:{min:72, max:83},
    tomorrow:{min: 73.3, max: 84.6 }
};
function getMaxOfTomorrow(forecast){
    const{tomorrow:{max:maxOfTomorrow}} = forecast;
    return maxOfTomorrow;
}
getMaxOfTomorrow(LOCAL_FORECAST); // 84.6

/* destructuring assignment to assign variables from arrays
    배열에서 비구조화 할당을 사용해서 변수를 할당 */
const [z,x] = [1, 2, 3, 4, 5, 6];
const [ , , ,y] = [1, 2, 3, 4, 5, 6]; // y=4; 쉼표를 사용

let c = 8, d = 6; 
(function(){ //둘의 자리 바꾸기
    [c,d]=[d,c]; // [c,d]=[6,8]
    return [c,d]; // [6,8]
}());

/*비구조화 할당을 사용해 객체를 함수의 매개변수로 전달 */
const stats = {
    max: 56.78,
    standard: 4.34,
    median:34.54,
    mode:23.87
};

var half = (function(){
    return function half(stats)
    /*중괄호 써서 줄이기 stats=>{max, mode} */
    {
        return stats.max +  stats.mode;
    }
}());

stats;
half(stats);


/*
Ajax,api에서 필요한 정보만 가져올때 사용 구조분해 할당

-백틱은 여러줄 문자열을 만들 수 있다
-작은따옴표 큰 따옴표 쓸수 있다
-변수를 바로 넣을 수 있다 ${}사용해서

3:11:46 (키가 변수의 이름인 객체를 생성하려는 경우)
-객체에 함수 포함되는 경우(간결한 선언에서 :function만 제거 가능)
Var zeus = new 셔틀(주피터)

Var zeus = 함수 (생성자명)(값)
{
   This.값 = 리얼 값;
}
이래야 되는거 아닌가?
생성자명을 생략했다고 쳐도 왜 제우스가 아닌 셔틀이 들어가나
3:13:01 직접 해보기
스페이스 셔틀과 타겟플랜트의 관계란?
뭐가나올지는 알겠는데 왜 이러는지는 모르겠다

_로 변수를 시작하면 개인변수로 해당범위 외부또는
해당 클래스 밖에 엑세스하면 안된다

-게터세터 다시 확인
대체내보내기 파일에서 한가지만
*/
