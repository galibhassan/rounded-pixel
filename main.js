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
    const pixels = Array.from(document.querySelectorAll("[data-pxid]"))
    const pxData = pixels.map((px)=>{
        return {
            pxid: px.getAttribute("data-pxid"),
            pxColor: px.style.backgroundColor
        }
    })
    const filename = document.querySelector(".save-lossless-filename")

    Utils.downloadObjectAsJson(pxData, filename.value)
})
