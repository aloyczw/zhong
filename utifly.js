//求和函数
function sum(){
    _sum=0;
    for(let i=0;i<arguments.length;i++){
        _sum+=arguments[i]
    }
    return _sum;
}
//二维数组求和
function twoarry(arr){
    sum=0;

    for(let i=0;i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++){
            sum+=arr[i][j]
        }
    }
    return sum;
}
//数组平均数
function mean(arr){
    _mean=0;
    for(let i=0;i<arr.length;i++){
        _mean+=arr[i]/arr.length;
    }
    return _mean;
}
//数组最大值
function max(arr){
    _max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>_max){
            _max=arr[i];
        }
    }
    return _max;
}
//数组最小值
function min(arr){
    _min=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]<_min){
            _min=arr[i];
        }
    }
    return _min;
}
//数组排序
function sort1(arr){
    console.log(arr.sort(function(a,b){
        return a-b;
    }))
}
//数组随机四位数
function ran(){
    let arr=[];
    for(let i=0;i<1;i++){
        arr[i]=(Math.floor(Math.random()*9000)+1000);
    }
    return arr;  
}
//阶乘
function fact(n){
    if(n===1){
        return 1;
    }
    return n*fact(n-1);
}
//兔子数列
function rabbit(n){
    if(n===2 || n===1){
        return 1
    }
    return rabbit(n-1)+rabbit(n-2);
}
//随机颜色
function color1(a,b){
n=Math.floor(Math.random()*(b-a+1))+a;
n=n.toString(16);
if(n.length!==2){
    n='0'+n;
}
return n;
}
//运动函数
//@parem{dom} ele    运动的dom元素
//@parem{object}t arget  运动的目标位置
//@parem{function} cb
function move(ele,target,cb){
    const obj={}
    for(let attr in target){
        obj[attr]=setInterval(()=>{
            let curAttr//该变量获取到的的非行间样式值当前位置
            if(attr==='opacity'){
                //判断该运动元素属性是opacity  时给他一个取整
                curAttr=parseFloat(getStyle(ele,attr)*100)
            }else{
                curAttr=parseInt(getStyle(ele,attr))
            }
            //当前位置到目标位置的距离/运动系数=本次运动的距离
            let speed=(target[attr]-curAttr)/5
            //取整
            speed=speed>0?Math.ceil(speed):Math.floor(speed)
            //赋值 
            //如果达到啦就结束
            if(target[attr]===curAttr){
                //关闭定时器
                clearInterval(obj[attr])
                //删除对象里的对应成员
                delete obj[attr]
            //判断是不是所有运动都结束啦
            if(getTimerLength(obj)===0){
                //运动结束
                cb&&cb()
            }
            //如果没有达到运动目标位置 就对他赋值
           }else{
            if(attr==='opacity'){
                ele.style[attr]=(curAttr+speed)/100
            }else{
                ele.style[attr]=curAttr+speed+'px'
            }
           }
        },30)
    }
}
/**
 *getStyle  获取非行间样式
 *@param{Dom}   ele 获取哪一个元素的非行间样式
 * @param{string} attr   获取哪一个样式
 * @return{string}  
 你获取到的元素样式的值
 */
function getStyle(ele,attr){
    if(window.getComputedStyle){
        return window.getComputedStyle(ele)[attr]
    }else{
        return ele.currentStyle[attr]
    }
}
//obj对象里面的属性个数
function getTimerLength(obj){
    let n=0
    for(let attr in obj){
        n++
    }
    return n
}