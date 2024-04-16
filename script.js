var btn=document.querySelector(".click")
var page1=document.querySelector(".page1")
var page2=document.querySelector(".page2")
var flag=0
var r=Math.floor(Math.random()*255)
var g=Math.floor(Math.random()*255)
var b=Math.floor(Math.random()*255)
// console.log(r,g,b)
var pqr =Math.floor(Math.random()*255)
console.log(pqr)

btn.addEventListener("click",function(){
    if(flag == 0){
        page2.style.zIndex="2"
        flag=1
    }else{
        page2.style.zIndex="-1"
        flag=0    
    }
})
page1.addEventListener("click",function(){
    var r=Math.floor(Math.random()*255)
    var g=Math.floor(Math.random()*255)
    var b=Math.floor(Math.random()*255)
    
    page1.style.backgroundColor= `rgb(${r},${g},${b})`
})