const a = 100;
let b = 20;
let c = 10;
console.log(b, c);
const array1 = [
    {
        name : "강승현",
        age : "28",
        gender : "Man",
        food : [
            {
                name : "삼겹살",
                like : true
            },
            {
                name : "가지무침",
                like : false
            }
        ]
    },{
        name : "김대경",
        age : "28",
        gender : "Man"
    },{
        name : "이성환",
        age : "28",
        gender : "Man"
    }
]
const type = {
    colorName : [
        "빨강", "파랑", "초록", "노랑", "흰색"
    ],
    size : [
        "S", "M", "L", "XL", "XXL"
    ]
}
const object1 = {
    name : "남성의류",
    category : {
        name : [
            "발렌시아가", "베르사체", "꼼데가르송", "마스터마인"
        ]
    },
    type : {
        name1 : "상의",
        name1Type : [
            {
                name : "K-0221",
                size : type.size[1],
                color : type.colorName[0],
                price : 20000
            },
            {
                name : "K-01123",
                size : type.size[2],
                color : type.colorName[4],
                price : 150000
            }
        ],
        name2 : "하의",
        name2Type : [
            {
                name : "K-0221",
                size : type.size[1],
                color : type.colorName[0],
                price : 20000
            },
            {
                name : "K-01123",
                size : type.size[2],
                color : type.colorName[4],
                price : 150000
            }  
        ]
    }
}
function sayHello(name, age){
   return `이름은 ${name} 이고 나이는 ${age} 입니다.`;
};
const funn = sayHello("Ksh", 28);

console.log(funn);

const function1 = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a , b){
        return a - b;
    },   
    multiply: function(a , b){
        return a * b;
    }
}

const plus = function1.plus(10 , 20);
const minus = function1.minus(30 , 10);
const multiply = function1.multiply(4, 20);
console.log(plus);
console.log(minus);
console.log(multiply);