const canvas = document.querySelector(".canvas");
const globalStore = new Store()
const myBoard = new Board(canvas, globalStore)


// drawing loop
const update = () => {
    myBoard.draw()
    requestAnimationFrame(update)
}
update()

const colorPicker_brush = document.getElementById("colorPicker_brush")
colorPicker_brush.value = Utils.rgbToHex(236, 156, 65)

// change background color
const colorPicker_board = document.getElementById("colorPicker_board");
// initial value
colorPicker_board.value = Utils.rgbToHex(120,110, 100)
colorPicker_board.addEventListener("input", (e)=>{
    canvas.style.backgroundColor = colorPicker_board.value
})

// save
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (e)=> {
    html2canvas(canvas, {backgroundColor: null})
    .then(canvasOut => {
        const downloadLink = document.createElement("a")
        downloadLink.href = canvasOut.toDataURL();
        downloadLink.download = document.querySelector(".save-png-filename").value;
        downloadLink.click()

    });
})

const saveLossless_button = document.getElementById("saveLossless_button")
saveLossless_button.addEventListener("click", (e)=>{
    
    const filename = document.querySelector(".save-lossless-filename")
    const pxData = globalStore.getPixelDataForEntireBoard()
    Utils.downloadObjectAsJson(pxData, filename.value)
})

const button_fillEmptyPixels = document.getElementById("button_fillEmptyPixels")
button_fillEmptyPixels.addEventListener("click", (e)=>{
    const currentFillColor = globalStore.getCurrentColor_fillEmptyPixels();

    console.log(currentFillColor)
    const pxData = globalStore.getPixelDataForEntireBoard()
    pxData.forEach(px=>{
        if(px.pxColor==="") {
            const currentPxDomRef = document.querySelector(`[data-pxid="${px.pxid}"]`)
            console.log(currentFillColor)
            currentPxDomRef.style.backgroundColor = `${currentFillColor}`
        }
    })
})
