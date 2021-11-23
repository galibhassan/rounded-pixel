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
let initialWidthRefImg = null;
let initialHeightRefImg = null;

const ZOOM_MAX = 3.0;
const ZOOM_MIN = 0.3;


// init
refImg.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Mona_Lisa.jpg/396px-Mona_Lisa.jpg";
refImg.style.display = "none";
slider_refImgOpacity.value = 100;
refImgScaleVal.innerText = "1.00";

bt_loadRefImg.addEventListener("click", (e)=>{
    refImg.style.display = "block"
    if((refImgURL.value).trim() === "") {
        throw("hello")
    }

    refImg.src = refImgURL.value;
})

refImg.addEventListener("load", (e)=>{
    initialWidthRefImg = refImg.clientWidth;
    initialHeightRefImg = refImg.clientHeight;
    initialScaleRefImg = 1;
    slider_refImgScale.value = parseInt(normalize(0,100, ZOOM_MIN, ZOOM_MAX, initialScaleRefImg));
})

refImg.addEventListener("error", (e)=>{
    console.log(e)
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
    const scaledVal = invNormalize(0, 100, ZOOM_MIN, ZOOM_MAX, sliderVal);
    refImgScaleVal.innerText = scaledVal.toFixed(2);

    const widthToBe_px = parseInt(initialWidthRefImg*scaledVal);
    const heightToBe_px = parseInt(initialHeightRefImg*scaledVal);
    refImg.style.width = `${widthToBe_px}px`;
    refImg.style.height = `${heightToBe_px}px`;
})