// es6
// var在ES6里是用来升级全局变量的下例打印出1
// 一：新的声明方式
var a = 1;
console.log(a);
// 用匿名函数给他进行一个包裹，然后在匿名函数中调用这个a变量结果依然可以
var a1=1;
window.onload= function(){
    console.log(a1);
}//1
// 用区块的方式进行调用测试
var a2=2;
{
   var a2=3;
}
console.log(a2);//打印出3（因为var是全局声明的。）
// let局部声明（let是防止你的数据污染的，let声明只在区块内起作用，外部是不可以调用的）
var a3=2;
{
   let a3=3;
}
console.log(a3);//2（如果我们只在区块里声明，不再外部声明，我们打印a时就会报错，显示找不到变量。）
// 举个var变量被污染的例子 
for(var i=0;i<10;i++){
console.log('循环体中:'+i);//（打印出0-9）
}
console.log('循环体外:'+i);//（打印出10）
// 用let声明的循环
// for(let j=0;j<10;j++){
// console.log('循环体中:'+j);//(打印出0-9)
// }
// console.log('循环体外:'+j);//（报错显示未定义）
// const声明常量
// const a=1;
// var a='2';
// console.log(a);//直接报错因为const是定义一个不能改变的变量
// 二：变量的解构赋值
// ES6允许按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。解构赋值在实际开发中可以大量减少我们的代码量，并且让我们的程序结构更清晰。
// 数组的解构赋值：
// 正常的赋值方式let A=0;let B=1;let C=2;let D=4;

//可以简写为以下这种形式
// 可以简单的理解为等号左边和等号右边的形式要统一，如果不统一解构将失败。   
let [A,[B,C],D]=[1,[2,3],4];
console.log(A,B,C,D)//1,2,3,4
// 解构的默认值：
let [foo = true] =[];
console.log(foo); //控制台打印出true
let [c,d="e"]=['b']
console.log(c+d); //控制台显示“be”
// 如果出现undefined则使用默认值
// 如果后面出现null则为技术胖，null空值的话不能取默认值
let [e,f="JSPang"]=['技术胖',undefined];
console.log(e+f); //控制台显示“技术胖JSPang”
// 对象的解构赋值（对象的解构与数组有一个重要的不同。数组的元素是按次序排列的，变量的取值由它的位置决定；而对象的属性没有次序，变量必须与属性同名，才能取到正确的值。）
let {fooo,bar} = {fooo:'JSPang',bar:'技术胖'};
console.log(fooo+bar); //控制台打印出了“JSPang技术胖”
// 圆括号的使用
// 如果在解构之前就定义了变量
let foo1;
({foo1} ={foo1:'JSPang'});//如果不写外面这个大括号则会报错
console.log(foo1); //控制台输出jspang
// 字符串解构（这是因为，此时字符串被转换成了一个类似数组的对象。）
// 在实战项目中解构Json数据格式还是很普遍的
const [a4,a5,a6,a7,a8,a9]="JSPang";
console.log(a4);
console.log(a5);
console.log(a6);
console.log(a7);
console.log(a8);
console.log(a9); 
// 三：扩展运算符和rest运算符(…（三个点）。它们可以很好的为我们解决参数和对象数组未知情况下的编程,使代码更健壮和简洁。)
// 对象扩展运算符（…）：
// 允许它传入的参数是不确定的。这时候可以使用对象扩展运算符来作参数
function jspang(...arg){
    console.log(arg[0]);
    console.log(arg[1]);
    console.log(arg[2]);
    console.log(arg[3]);
 
}
jspang(1,2,3);//控制台输出了 1,2,3，undefined，这说明是可以传入多个值，并且就算方法中引用多了也不会报错。
// 扩展运算符的用处：
// 下面这种方式改变arr2但是arr1也一起改变了因为我们这是对内存堆栈的引用，而不是真正的赋值。
let arr1=['www','jspang','com'];
// let arr2=arr1;//把这一句改为let arr2=[...arr1];即可解决这个问题
let arr2=[...arr1];
console.log(arr2);//["www", "jspang", "com"]
arr2.push('shengHongYu');
console.log(arr1);//["www", "jspang", "com", "shengHongYu"]
// rest运算符（和对象扩展运算符很相似）
function jspang(first,...arg){
    console.log(arg.length);//7
}
jspang(0,1,2,3,4,5,6,7);
// 循环输出rest运算符
// 用for…of循环来进行打印出arg的值for…of的循环可以避免我们开拓内存空间，增加代码运行效率
function jspang1(first,...arg){
    for(let val of arg){
        console.log(val);//输出1-7第一个first值不打印
    }
}
jspang1(10,1,2,3,4,5,6,71);
// 四：字符串模版（字符串模版的出现让我们再也不用拼接变量了，而且支持在模板里有简单计算操作。）
// es5的字符串拼接
let jspan='技术胖';
let blog = '我是你的老朋友'+jspan+'。';
console.log(blog);
// es6的字符串模版
let jsp='技术胖';
let blo = `<b>121212</b>，我是你的老朋友${jsp}。<br/>121212`;//使用tab上面的键也可以使用html标签
document.write(blo);
// 对运算的支持：
let a10=1;
let a11=2;
let result=`${a10+a11}`;
console.log(result);
// 字符串查找
// es5的写法
let js='技术胖';
let bl = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(bl.indexOf(js));//返回索引位置20
// ES6直接用includes就可以判断，不再返回索引值
let a12='技术胖';
let a13 = '非常高兴你能看到这篇文章，我是你的老朋友技术胖。这节课我们学习字符串模版。';
console.log(a13.includes(a12));//true
console.log(a13.startsWith(a12));//false
console.log(a13.endsWith(a12));//false
// 判断开头是否存在：a13.startsWith(a12);
// 判断结尾是否存在：a13.endsWith(a12);
// 复制字符串(有时候是需要字符串重复的，比如分隔符和特殊符号)
console.log('jspang|'.repeat(3));//打印出 jspang|jspang|jspang|
// 五：ES6数字操作（二进制和八进制数字的声明并不是ES6的特性，回顾一下）
let binary = 0B010101;
console.log(binary);//21二进制
let bin=0o666;
console.log(bin);//438八进制
// 数字判断和转换
// 可以使用Number.isFinite( )来进行数字验证，只要是数字，不论是浮点型还是整形都会返回true，其他时候会返回false。
let a14= 11/4;
console.log(Number.isFinite(a14));//true
console.log(Number.isFinite('jspang'));//false
console.log(Number.isFinite(NaN));//false
console.log(Number.isFinite(undefined));//false
// NaN是特殊的非数字，可以使用Number.isNaN()来进行验证
console.log(Number.isNaN(NaN));//true
let a15=123.1;
console.log(Number.isInteger(a15)); //false判断是否为整数
let a16='9.18';
console.log(Number.parseInt(a16)); //9整数转换
console.log(Number.parseFloat(a16));//9.18浮点型转换
// 整数的操作是有一个取值范围的，它的取值范围就是2的53次方
let a17 = Math.pow(2,53)-1;
console.log(a17); //9007199254740991
// 在我们计算时会经常超出这个值，所以我们要进行判断，ES6提供了一个常数，叫做最大安全整数，以后就不需要我们计算了。
console.log(Number.MAX_SAFE_INTEGER);//9007199254740991最大安全整数
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991最小安全整数
let a18= Math.pow(2,53)+1;
console.log(Number.isSafeInteger(a18));//false超出最大安全整数所以为false
// 六：ES6中新增的数组知识
// JSON数组格式转换
let  json = {
    '0': 'jspang',
    '1': '技术胖',
    '2': '大胖逼逼叨',
    length:3
}
 
let arr=Array.from(json);
console.log(arr)//输出三个数组形式 ["jspang", "技术胖", "大胖逼逼叨"]
// Array.of()方法：负责把一堆文本，数字，字符串或者变量转换成数组正常需要使用eval来进行转换但使用eval效率是很低的
let arr3 =Array.of(3,4,5,6);
console.log(arr3); //[3, 4, 5, 6]
// find( )实例方法:
// 所谓的实例方法就是并不是以Array对象开始的，而是必须有一个已经存在的数组，然后使用的方法，这就是实例方法
let arr4=[1,2,3,4,5,6,7,8,9];
console.log(arr4.find(function(value,index,arr){
    return value > 5;
}))//输出6 在函数中如果找到符合条件的数组元素就进行return，并停止查找

// value：表示当前查找的值。
// index：表示当前查找的数组索引。
// arr：表示当前数组。
// fill( )实例方法：把数组进行填充，它接收三个参数，第一个参数是填充的变量，第二个是开始填充的位置，第三个是填充到的位置。
let arr5=[0,1,2,3,4,5,6,7,8,9];
arr5.fill('js1',2,5);
console.log(arr5);// [0, 1, "js1", "js1", "js1", 5, 6, 7, 8, 9]把数组从第二位到第五位用jspang进行填充
// 数组的遍历 for…of循环：这种形式比ES5的for循环要简单而且高效
let arr6=['jspang','技术胖','大胖逼逼叨']
for (let item of arr6){
    console.log(item);//输出jspang 技术胖 大胖逼逼叨
}
// 加索引输出索引
let arr7=['jspang','技术胖','大胖逼逼叨']
for (let index of arr7.keys()){
    console.log(index);//0  1  2
}
// 同时输出数组的内容和索引
let arr8=['jspang','技术胖','大胖逼逼叨']
for (let [index,val] of arr8.entries()){
    console.log(index+':'+val);//输入索引及对应值0:jspang 1:技术胖 2:大胖逼逼叨
}
// 七：ES6中的箭头函数和扩展
// ES5中的函数写法

function add(a,b){
    return a+b;
}
console.log(add(1,2));//3
// ES6中给我们增加了默认值的操作
function add1(a,b=1){
    return a+b;
}
console.log(add1(1));//2
// 主动抛出错误
// function add2(a,b=1){
    function add2(a,b){
   'use strict'
    if(a == 0){
        throw new Error('This is error')
    }
     return a+b;
}
 
// console.log(add2(0));//抛出错误
 console.log(add2(1,2))
 console.log(add2.length);//2
// 如果在以上位置加入'use strict'会报错，原因就是加入了默认值，取消就可以用了比如function add2(a,b){}并调用add2(1,2)就可以了
// 获得需要传递的参数个数
// 如果我们去掉严谨模式，并给第二个参数加上默认值的话，这时候add.length的值就变成了1， 也就是说它得到的是必须传入的参数。
// 箭头函数
var add3 =(a,b=1) => a+b;
console.log(add3(1));//2
// 在箭头函数中，方法体内如果是两句话，那就需要在方法体外边加上{}括号
// 箭头函数中不可加new，也就是说箭头函数不能当构造函数进行使用。
var add4 =(a,b=1) => {
    console.log('jspang')
    return a+b;
};
console.log(add4(1));
// 八：ES6中的函数和数组补漏
// 对象的函数解构（直接把这个JSON格式数据当作参数）

let json1 = {
    a:'jspang',
    b:'技术胖'
}
function fun({a,b='jspang'}){
    console.log(a,b);
}
fun(json1);//jspang 技术胖
// 数组的函数解构
let arr9 = ['jspang','技术胖','免费教程'];
function fun1(a,b,c){
    console.log(a,b,c);//jspang 技术胖 免费教程
}
fun1(...arr9);
// in是用来判断对象或者数组中是否存在某个值的
let obj={
    a:'jspang',
    b:'技术胖'
}
console.log('a' in obj);  //true
let arr10=[,,,,,];
console.log(0 in arr10); //false 这里的0指的是数组下标位置是否为空。
 
let arr11=['jspang','技术胖'];
console.log(0 in arr11);  // true
// 数组的遍历方法
let arr12=['jspang','技术胖','前端教程'];
// forEach循环的特点是会自动省略为空的数组元素，相当于直接给我们筛空了
arr12.forEach((val,index)=>console.log(index,val));//0 "jspang" 1 "技术胖" 2 "前端教程"
arr12.filter(x=>console.log(x));//打印出jspang 技术胖 免费教程
arr12.some(x=>console.log(x));//jspang 技术胖 免费教程
console.log(arr12.map(web=>'web'));//jspang全部替换为web
// 数组转换字符串
console.log(arr12.join('|'));//jspang |技术胖 |免费教程
console.log(arr12.toString());//jspang,技术胖,免费教程
// 九：ES6中对象（ES6允许把声明的变量直接赋值给对象）
let name="jspang";
let skill= 'web';
var obj1= {name,skill};
console.log(obj1);  //{name: "jspang", skill: "web"}
// 对象Key值构建
let key='skill';
var obj2={
    [key]:'web'
}
console.log(obj2.skill);//web
// 自定义对象方法(对象方法就是把兑现中的属性，用匿名函数的形式编程方法)
var obj2={
    add:function(a,b){
        return a+b;
    }
}
console.log(obj2.add(1,2));  //3
//对象的比较方法,以前进行对象值的比较，经常使用===来判断
var obj3 = {name:'jspang'};
var obj4 = {name:'jspang'};
console.log(obj3.name === obj4.name);//true
 // Object.is(  ) 对象比较 ES6为我们提供了is方法进行对比。
console.log(Object.is(obj3.name,obj4.name)); //true
// 区分一下(===为同值相等，is()为严格相等。)
console.log(+0 === -0);  //true
console.log(NaN === NaN ); //false
console.log(Object.is(+0,-0)); //false
console.log(Object.is(NaN,NaN)); //true
// Object.assign(  )合并对象
var b1={a:'jspang'};
var b2={b:'技术胖'};
var b3={c:'web'};
let b4=Object.assign(b1,b2,b3)
console.log(b4);//{a: "jspang", b: "技术胖", c: "web"}
// 十：Symbol在对象中的作用（通过场景应用的方式学习Symbol，它的意思是全局标记）
// 声明Symbol
var a19 = new String;
var a20 = new Number;
var a21 = new Boolean;
var a22 = new Array;
var a23 = new Object; 
var a24= Symbol();
console.log(typeof(a24));//Symbol
var g = Symbol('jspang');
console.log(g);//Symbol(jspang)红色的字体
console.log(g.toString());//Symbol(jspang)
// Symbol在对象中的应用
var jspanga = Symbol();
var obj5={
    [jspanga]:'技术胖'
}
console.log(obj5[jspanga]);//技术胖
obj5[jspanga]='web';
console.log(obj5[jspanga]);//web
// Symbol对象元素的保护作用(如果循环输出时，并不希望全部输出例如不想显示出年龄)
let obj6={name:'jspang',skill:'web'};
let age=Symbol();
obj6[age]=18;
for (let item in obj6){
    console.log(obj6[item]);//jspang web
} 
console.log(obj6);//{name: "jspang", skill: "web", Symbol(): 18}
// 十一：Set和WeakSet数据结构
// Set的数据结构是以数组的形式构建的。(Set和Array 的区别是Set不允许内部有重复的值，如果有只显示一个，相当于去重。虽然Set很像数组，但是他不是数组。)
let setArr = new Set(['jspang','技术胖','web','jspang']);
// forEach循环
setArr.forEach((value)=>console.log(value));//jspang 技术胖 web
// set的循环 for…of…循环：
for (let item of setArr){
    console.log(item);//jspang 技术胖 web
}
console.log(setArr.size);//3  获得Set值的数量。
console.log(setArr);//Set(3) {"jspang", "技术胖", "web"}
// Set值的增删查
// 追加add： 
setArr.add('前端职场');
console.log(setArr);//Set(4) {"jspang", "技术胖", "web","前端职场"}
// 删除delete：
setArr.delete('前端职场');
console.log(setArr); //Set(3) {"jspang", "技术胖", "web"}
// 查找has：
console.log(setArr.has('jspang'));//true
// 删除clear:
setArr.clear();
console.log(setArr);//set(0){}
// WeakSet的声明（直接在new 的时候就放入值，将报错。WeakSet里边的值也是不允许重复的）
let weakObj=new WeakSet();
let obj7={a:'jspang',b:'技术胖'}
weakObj.add(obj7);
console.log(weakObj);//WeakSet {{…}}里面有一个object对象里面是对应的值
// 在实际开发中Set用的比较多，WeakSet用的并不多，但是他对传入值必须是对象作了很好的判断，我们灵活应用还是有一定的用处的。
// 十二：map数据结构
// Json和map格式的对比。map的效率和灵活性更好
// 把它看成一种特殊的键(key)值(value)对，但你的key可以设置成数组，值也可以设置成字符串，让它不规律对应起来。
let json2 = {
    name:'jspang',
    skill:'web'
}
console.log(json2.name);//jspang
var map=new Map();
map.set(json2,'iam');
console.log(map);//Map(1) {{…} => "iam"}
// 相当于key:{name:"jspang", skill:"web"} value:iam 
// map.set('jspang',json2);
// console.log(map);//Map(1) {"jspang" => {…}}
// 相当于key:jspang value:{name:"jspang" ,skill:"web"} 
console.log(map.get(json2));//iam 取值get
// map.delete(json2);
// console.log(map)//Map(0) {} 删除delete
console.log(map.size);//1 只有一个iam值 size属性
console.log(map.has('jspang'))//false 查找是否存在has
map.clear()//和map.delete(json2);效果一样，全部删除，清除所有元素clear
// 十三：用Proxy进行预处理
// Proxy的存在就可以让我们给函数加上这样的钩子函数，你也可以理解为在执行方法前预处理一些代码。你可以简单的理解为他是函数或者对象的生命周期。
new Proxy({},{});//声明Proxy
var pro = new Proxy({
    add: function (val) {
        return val + 10;
    },
    name: 'I am Jspang'
}, 
 {//get属性是在你得到某对象属性值时预处理的方法，他接受三个参数
   // target：得到的目标值;key：目标的key值，相当于对象的属性;property：这个不太常用
   get:function(target,key,property){
            console.log('come in Get');//come in Get
            return target[key];
        },
        // set属性是值你要改变Proxy属性值时，进行的预先处理。它接收四个参数。
        // target:目标值。key：目标的Key值。value：要改变的值。receiver：改变前的原始值。
   set:function(target,key,value,receiver){
            console.log(`setting ${key} = ${value}`);//setting name = 技术胖
            return target[key] = value;
        }
    });
// 先输出了come in Get。相当于在方法调用前的钩子函数。
console.log(pro.name);//I am Jspang
// 先输出了setting name = 技术胖 然后是come in Get 最后才是 技术胖。
pro.name='技术胖';
console.log(pro.name);//技术胖
// apply的使用
// apply的作用是调用内部的方法，它使用在方法体是一个匿名函数时。
let target = function () {
    return 'I am JSPang';
};
var handler = {
    apply(target, ctx, args) {
        console.log('do apply');
        return Reflect.apply(...arguments);
    }
}
 
var pro1 = new Proxy(target, handler);
// 先输出了do apply 之后是 I am JSPang
console.log(pro1());
// 十四：promise对象的使用（解决了回调地域的问题，可以想象他是一种承诺，当它成功时执行一些代码，当它失败时执行一些代码。它更符合人类的行为思考习惯，而不在是晦涩难懂的冰冷语言。）
// 一个过程是有一定的顺序的，你必须保证上一步完成，才能顺利进行下一步
let state=1;
function step1(resolve,reject){
    console.log('1.开始-洗菜做饭');//1.开始-洗菜做饭
    if(state==1){
        resolve('洗菜做饭--完成');
    }else{
        reject('洗菜做饭--出错');
    }
}
 
 
function step2(resolve,reject){
    console.log('2.开始-坐下来吃饭');//开始-坐下来吃饭
    if(state==1){
        resolve('坐下来吃饭--完成');
    }else{
        reject('坐下来吃饭--出错');
    }
}
 
 
function step3(resolve,reject){
    console.log('3.开始-收拾桌子洗碗');//开始-收拾桌子洗完
     if(state==1){
        resolve('收拾桌子洗碗--完成');
    }else{
        reject('收拾桌子洗碗--出错');
    }
}
 
new Promise(step1).then(function(val){
    console.log(val);//洗菜做饭--完成
    return new Promise(step2);
 
}).then(function(val){
     console.log(val);//坐下来吃饭--完成
    return new Promise(step3);
}).then(function(val){
    console.log(val)//收拾桌子洗碗--完成
    return val;
});
// 十五：class类的使用
// 类的声明
 class coder{
    name(val){
        console.log(val);//jspang
        return val//返回一个val
    }
    // 这里需要注意的是两个方法中间不要写逗号了，还有这里的this指类本身，还有要注意return 的用法。
     // 类的多方法声明
     skill(val){
        console.log(this.name('jspang')+':'+'Skill:'+val);//jspang:Skill:web
    }
    // 类的传参
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
 
    add(){
        return this.a+this.b;
    }
}
// 类的使用
let jw= new coder;
jw.name('jspang');
jw.skill("web")
// 用constructor来约定了传递参数，然后用作了一个add方法，把参数相加。
let jw1=new coder(1,2);
console.log(jw1.add());//3
// class的继承(声明一个htmler的新类并继承coder类，htmler新类里边为空，这时候我们实例化新类，并调用里边的name方法。结果也是可以调用到的。481行会打印出技术胖)
class htmler extends coder{
}
 
let pang=new htmler;
pang.name('技术胖');
// 十六：模块化操作（这个要是实际页面中实验）
// export :负责进行模块化，也是模块的输出。
// import : 负责把模块引，也是模块的引入操作。
// export可以让我们把变量，函数，对象进行模块话，提供外部调用接口，让外部进行引用。
// temp.js
// export var a = 'jspang';
// 然后可以在index.js中以import的形式引入。/
// import {a} from './temp.js';
// console.log(a);//输出jspang
// 多变量的输出
// var a31 ='jspang';
// var a32 ='技术胖';
// var a33 = 'web';
// export {a31,a32,a33}
// 函数的模块化输出

// export function add(a34,a35){
//     return a34+a35;
// }
// as的用法
// 如果不想暴露模块里边的变量名称，可以给模块起一个更语义话的名称
// var a ='jspang';
// var b ='技术胖';
// var c = 'web';
 
// export {
//     x as a,
//     y as b,
//     z as c
// }

// export default的使用
// 加上default相当是一个默认的入口。在一个文件里export default只能有一个。我们来对比一下export和export   default的区别
// 1.export
// export var a ='jspang';
 
// export function add(a,b){
//     return a+b;
// }
// 对应的导入方式
// import {a,add} form './temp';//也可以分开写
// 2.export defalut
// export default var a='jspang';
// 对应的引入方式
// import str from './temp';