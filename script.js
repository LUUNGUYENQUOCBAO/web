

const header = document.querySelector("header")
window.addEventListener("scroll",function(){
    x = window.pageYOffset
    if(x>0){
        header.classList.add("sticky")
    }
    else{
        header.classList.remove("sticky")
    }
})

const imgPosition = document.querySelectorAll(".aspect-ratio-169 img")
const imgContainer = document.querySelector('.aspect-ratio-169')
const dotItem =document.querySelectorAll(".dot")
let imgNumber = imgPosition.length
let index = 0
    // console.log(imgPosition)
imgPosition.forEach(function(image,index){
    image.style.left = index*100 + "%"
    dotItem[index].addEventListener("click",function(){
        Slider (index)
    })
})
function imgsilder (){
    index++;
    console.log(index )
    if (index>=imgNumber) {index=0}  
     Slider (index)
}
function Slider (index) {
    imgContainer.style.left = "-" +index*100+ "%"
    const dotActive = document.querySelector('.active')
    dotActive.classList.remove("active")
    dotItem[index].classList.add("active")
}
setInterval(imgsilder,5000)

const itemsliderbar = document.querySelectorAll(".cartegory-left-li")
itemsliderbar.forEach(function(menu,index){
    menu.addEventListener("click",function(){
        menu.classList.toggle("block")
    })
})
//--------------------------PRODUCT----------------------//
const bigImg = document.querySelector(".product-content-left-big-img img")
const smallImg = document.querySelectorAll(".product-content-left-small-img img")
smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})



const thongtinsanpham = document.querySelector(".thongtinsanpham")
const khuyenmai = document.querySelector(".khuyenmai")
if(thongtinsanpham){
    thongtinsanpham.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-khuyenmai").style.display ="none"
        document.querySelector(".product-content-right-bottom-content-thongtinsanpham").style.display= "block"
    })
}
if(khuyenmai){
    khuyenmai.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-khuyenmai").style.display= "block"
        document.querySelector(".product-content-right-bottom-content-thongtinsanpham").style.display= "none"
    })
}
const button = document.querySelector(".product-content-right-bottom-top")
if(button){
    button.addEventListener("click",function(){
        document.querySelector(".product-content-right-bottom-content-big").classList.toggle("activeB")
    })
}

