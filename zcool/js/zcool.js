// 页面内容显示
// 方法一，字符串拼接
var cont_List = document.getElementById("contList");
var guess_Like = document.getElementById("guessLike");
for(var i = 0 ; i < 40 ; i++){
    var cl_str,gl_str
    var str = "<li>"+
                '<a href="#">'+
                    '<img src="img/contimg'+ (i+1) +'.jpg"/>'+
                    "<p>儿童书封面<span>插画-儿童插画</span></p>"+
                "</a>"+
                '<div class="cont_info">'+
                    '<span class="cont_info1">2111</span>'+
                    '<span class="cont_info2">8</span>'+
                    '<span class="cont_info3">95</span>'+
                "</div>"+
                '<div class="cont_user">'+
                    '<img src="img/user2.jpg"/>'+
                    "<p>灰色大米<span>3小时之前</span></p>"+
                "</div>"+
             "</li> "
    cl_str += str;
    if(i< 26 && i>20){
        gl_str +=str;    
    }
}
cont_List.innerHTML = cl_str;    // 主内容页面
guess_Like.innerHTML = gl_str;   // 猜你喜欢的页面
// 方法二思路：文档碎片插入；

// 轮播图，无缝轮播
var bigimg = document.getElementById("big_img");
var bigimg_li = bigimg.children;
var rightbtn = document.getElementById("right_btn");
var leftbtn = document.getElementById("left_btn");
var Cselfigure = document.querySelector(".Csel_figure")
var itme_width = bigimg_li[0].offsetWidth; // 记录一张照片的下标
var index = 0;  // 记录下标
rightbtn.children[0].onclick = function(){
    var hidden,show;
    hidden = index;
    if(index == bigimg_li.length - 1){
        index = 0;
        show = index
    }else{
        show = ++index;
    }
    bigimg_li[hidden].style.zIndex = 1;
    bigimg_li[show].style.zIndex = 2;
    bigimg_li[show].style.left = itme_width + "px";
    move(bigimg_li[show],0,"left");
    bigimg_li[hidden].style.left = 0;
    move(bigimg_li[hidden],-itme_width,"left");  
}

leftbtn.children[0].onclick = function(){
    var hidden,show;
    hidden = index;
    if(index == 0){
        index = bigimg_li.length - 1;
        show = index
    }else{
        show = --index;
    }
//    for(var i = 0 ; i < bigimg_li.length ; i++){
//     bigimg_li[i].style.zIndex = 0;
//    }
    
    bigimg_li[hidden].style.zIndex = 1;
    bigimg_li[show].style.zIndex = 2;
    bigimg_li[show].style.left = -itme_width + "px";
    move(bigimg_li[show],0,"left");
    bigimg_li[hidden].style.left = 0;
    move(bigimg_li[hidden],itme_width,"left");  
}

var timer = null;
timer = setInterval(rightbtn.children[0].onclick,4000);
Cselfigure.onmouseover = function(){
    clearInterval(timer);
}
Cselfigure.onmouseout = function(){
    timer = setInterval(rightbtn.children[0].onclick,4000);
}



// 移动导航条 
var Mobilenav = document.getElementById("Mobile_nav");
var Mobilenavimg = document.getElementById("Mobile_navimg");
var move_nav = document.getElementById("nav");
// var navbody = document.querySelector(".nav_body");

onscroll = function(){
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(scrollTop);
    
    if(scrollTop >= 606){
        if(move_nav.className == ""){
           move_nav.className = "nav_active";
            Mobilenavimg.style.opacity = 0; 
        }      
    }else{
        if(move_nav.className =="nav_active"){
            move_nav.className = "";
            Mobilenavimg.style.opacity = 1;
        }    
    }
}
    











function move(ele,target,attr){
    clearInterval(ele.timer);   // 先关闭在开启
    ele.timer = setInterval(function(){    // 开启对应的计时器
        if(attr == "opacity"){
            var iNow = parseInt(getStyle(ele,attr) * 100);
        }else{
            var iNow = parseInt(getStyle(ele,attr));
        }
        var speed = (target - iNow) / 6;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if(target == iNow){
            clearInterval(ele.timer);
        }else{
            if(attr == "opacity"){
                ele.style[attr] = (speed + iNow) / 100;
            }else{
                ele.style[attr] = speed + iNow + "px";
            }
        }
       
    },50)
}

function getStyle(ele,attr){
    if(getComputedStyle){
        return getComputedStyle(ele)[attr];
    }else{
        return ele.currentStyle[attr];
    }
}



