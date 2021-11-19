const bt_loadRefImg = document.getElementById("button_load_reference_image");
const refImg = document.querySelector(".ref-image");
const refImgURL = document.querySelector("#ref-img-url");

// init
console.log(refImg.src)
refImg.src = "";

bt_loadRefImg.addEventListener("click", (e)=>{
    refImg.src = refImgURL.value;
})