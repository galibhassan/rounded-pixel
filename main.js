const canvas = document.querySelector(".canvas");
const globalStore = new Store()
const myBoard = new Board(canvas, globalStore)


// drawing loop
const update = () => {
    myBoard.draw()
    requestAnimationFrame(update)
}
update()


// change background color
const colorPicker_board = document.getElementById("colorPicker_board");
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
        downloadLink.download = "rounded-pixel_art.png";
        downloadLink.click()

    });
})