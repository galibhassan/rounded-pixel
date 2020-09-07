const canvas = document.querySelector(".canvas");
const pxWidthInput = document.getElementById("pxWidthInput")
const pxHeightInput = document.getElementById("pxHeightInput")
const button_regenerateGrid = document.querySelector(".button_regenerateGrid")

const globalStore = new Store()
const myBoard = new Board(canvas, globalStore)


// initial pixel size
pxWidthInput.value = 20
pxHeightInput.value = 20
globalStore.pixelSize.width = pxWidthInput.value;
globalStore.pixelSize.height = pxHeightInput.value;


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
colorPicker_board.value = Utils.rgbToHex(120, 110, 100)
colorPicker_board.addEventListener("input", (e) => {
    canvas.style.backgroundColor = colorPicker_board.value
})

// save
const saveButton = document.getElementById("saveButton");
saveButton.addEventListener("click", (e) => {
    html2canvas(canvas, { backgroundColor: null })
        .then(canvasOut => {
            const downloadLink = document.createElement("a")
            downloadLink.href = canvasOut.toDataURL();
            downloadLink.download = document.querySelector(".save-png-filename").value;
            downloadLink.click()

        });
})

const saveLossless_button = document.getElementById("saveLossless_button")
saveLossless_button.addEventListener("click", (e) => {

    const filename = document.querySelector(".save-lossless-filename")
    const pxData = globalStore.getPixelDataForEntireBoard()
    Utils.downloadObjectAsJson(pxData, filename.value)
})

const button_fillEmptyPixels = document.getElementById("button_fillEmptyPixels")
button_fillEmptyPixels.addEventListener("click", (e) => {
    const currentFillColor = globalStore.getCurrentColor_fillEmptyPixels();

    console.log(currentFillColor)
    const pxData = globalStore.getPixelDataForEntireBoard()
    pxData.forEach(px => {
        if (px.pxColor === "") {
            const currentPxDomRef = document.querySelector(`[data-pxid="${px.pxid}"]`)
            console.log(currentFillColor)
            currentPxDomRef.style.backgroundColor = `${currentFillColor}`
        }
    })
})

button_regenerateGrid.addEventListener("click", (e) => {
    let confirmation = window.confirm(`
        Your drawing will be lost!
        Still proceed?
    `)

    if (confirmation) {
        globalStore.pixelSize.width = parseInt(pxWidthInput.value),
            globalStore.pixelSize.height = parseInt(pxHeightInput.value)
        myBoard.generateGrid()
    }
})


const roundednessSlider = document.querySelector(".pixel-border-radius-control");
const roundednessValueDomRef = document.querySelector(".roundedness-slider-value");

roundednessSlider.value = parseInt(getClassFromStyleSheet("rounded-pixel")["borderRadius"])
roundednessValueDomRef.innerHTML = roundednessSlider.value;

console.log(roundednessSlider.value)
roundednessSlider.addEventListener("input", (e) => {
    roundednessValueDomRef.innerHTML = roundednessSlider.value;
    roundedPxClass = getClassFromStyleSheet("rounded-pixel")
    roundedPxClass["borderRadius"] = `${parseInt(roundednessSlider.value)}px`
})

function getClassFromStyleSheet(className){
    stylesArr = Array.from(document.styleSheets[0]["cssRules"]);
    let styleForRoundedPx;
    for (let i = 0; i < stylesArr.length; i++) {
        if (stylesArr[i]["cssText"].includes(className)) {
            styleForRoundedPx = stylesArr[i]
            break;
        }
    }
    return styleForRoundedPx.style;
}