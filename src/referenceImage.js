const bt_loadRefImg = document.getElementById("button_load_reference_image");
const refImgContainer = document.querySelector(".ref-image-container");
const refImg = document.querySelector(".ref-image");
const refImgURL = document.querySelector("#ref-img-url");
const bt_refImgMoveUp = document.querySelector("#bt_ref-img-move-up");
const bt_refImgMoveDown = document.querySelector("#bt_ref-img-move-down");
const bt_refImgMoveLeft = document.querySelector("#bt_ref-img-move-left");
const bt_refImgMoveRight = document.querySelector("#bt_ref-img-move-right");
const slider_refImgOpacity = document.querySelector("#slider-ref-img-opacity");
const slider_refImgScale = document.querySelector("#slider-ref-img-scale");
const refImgScaleVal = document.querySelector("#ref-img-scale-value");


// init
console.log(refImg.src)
refImg.src = "";
refImg.style.display = "none";
slider_refImgOpacity.value = 100;
refImgScaleVal.innerText = "1.00";

bt_loadRefImg.addEventListener("click", (e)=>{
    refImg.style.display = "block"
    refImg.src = refImgURL.value;
})

// move ref image
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

// opacity of ref image
slider_refImgOpacity.addEventListener("input", (e)=>{
    const sliderVal = parseFloat(slider_refImgOpacity.value);
    const opacityVal = sliderVal/100;
    console.log(opacityVal)
    refImg.style.opacity = opacityVal;
})

slider_refImgScale.addEventListener("input", (e)=>{
    const sliderVal = parseFloat(slider_refImgScale.value);
    const scaledVal = invNormalize(0, 100, 0.5, 2, sliderVal);
    console.log(scaledVal)
    refImgScaleVal.innerText = scaledVal.toFixed(2);
})