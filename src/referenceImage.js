const bt_loadRefImg = document.getElementById("button_load_reference_image");
const refImgContainer = document.querySelector(".ref-image-container");
const refImg = document.querySelector(".ref-image");
const refImgURL = document.querySelector("#ref-img-url");
const bt_refImgMoveUp = document.querySelector("#bt_ref-img-move-up");
const bt_refImgMoveDown = document.querySelector("#bt_ref-img-move-down");
const bt_refImgMoveLeft = document.querySelector("#bt_ref-img-move-left");
const bt_refImgMoveRight = document.querySelector("#bt_ref-img-move-right");


// init
console.log(refImg.src)
refImg.src = "";

bt_loadRefImg.addEventListener("click", (e)=>{
    refImg.src = refImgURL.value;
})


const refImgMoveUnit = 30
bt_refImgMoveRight.addEventListener("click", (e)=>{
    let currentPosVal_STR = window.getComputedStyle(refImgContainer,null).getPropertyValue("left");
    currentPosVal = parseInt(currentPosVal_STR.replace("px", ""));
    console.log(currentPosVal)
    refImgContainer.style.left = `${currentPosVal + refImgMoveUnit}px`;
});

bt_refImgMoveLeft.addEventListener("click", (e)=>{
    let currentPosVal_STR = window.getComputedStyle(refImgContainer,null).getPropertyValue("left");
    currentPosVal = parseInt(currentPosVal_STR.replace("px", ""));
    console.log(currentPosVal)
    refImgContainer.style.left = `${currentPosVal - refImgMoveUnit}px`;
});

bt_refImgMoveUp.addEventListener("click", (e)=>{
    let currentPosVal_STR = window.getComputedStyle(refImgContainer,null).getPropertyValue("top");
    currentPosVal = parseInt(currentPosVal_STR.replace("px", ""));
    console.log(currentPosVal)
    refImgContainer.style.top = `${currentPosVal - refImgMoveUnit}px`;
});

bt_refImgMoveDown.addEventListener("click", (e)=>{
    let currentPosVal_STR = window.getComputedStyle(refImgContainer,null).getPropertyValue("top");
    currentPosVal = parseInt(currentPosVal_STR.replace("px", ""));
    console.log(currentPosVal)
    refImgContainer.style.top = `${currentPosVal + refImgMoveUnit}px`;
});
