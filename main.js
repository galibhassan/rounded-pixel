const canvas = document.querySelector(".canvas");
const globalStore = new Store()
const myBoard = new Board(canvas, globalStore)


// drawing loop
const update = () => {
    myBoard.draw()
    requestAnimationFrame(update)
}
update()