class Board {
    constructor(parentDiv, store) {
        this.globalStore = store;
        this.parentDiv = parentDiv;
        this.cellWidth = this.globalStore.pixelSize.width;
        this.cellHeight = this.globalStore.pixelSize.height;
        this.borderRadius = parseInt(this.cellWidth*0.15+1);
        this.cellMargin = 1;

        this._enableEventListeners(this.parentDiv)
        
        this.dragging = false;
        this.pointerdown = false;
        this.drawable = false;
        
        this.generateGrid()
        console.log(this.getDim())
    }

    getPixRow(rowIndex) {
        const row = document.createElement("div")
        row.style.display = "flex";
        row.style.flexDirection = "row";

        row.classList.add("pixel-row")
        for (let j = 0; j < this.getDim().nRows +1; j++) {
            const rPixel = new RoundedPixel(
                this.globalStore, 
                this, 
                `${rowIndex}_${j}`, 
                this.cellWidth, 
                this.cellHeight, 
                null, 
                this.borderRadius
            );
            row.appendChild(rPixel.getPixel())
        }
        return row;

    }


    addRowsToBoard() {
        this.parentDiv.innerHTML = null;
        for (let i = 0; i < this.getDim().nCols +1; i++) {
            let row = this.getPixRow(i)
            this.parentDiv.appendChild(row)
        }
    }

    generateGrid(){
        this.cellWidth = globalStore.pixelSize.width;
        this.cellHeight = globalStore.pixelSize.height;
        this.addRowsToBoard()
    }

    getDim() {
        const w = this.parentDiv.offsetWidth
        const h = this.parentDiv.offsetHeight
        const nRows = parseInt(w / (this.cellWidth + 2 * this.cellMargin));
        const nCols = parseInt(h / (this.cellHeight + 2 * this.cellMargin));
        return {nRows, nCols}
    }
    handleBoardResize() {

    }


    _enableEventListeners(domRef) {
        domRef.addEventListener('pointerdown', (e) => {
            e.preventDefault()
            this.pointerdown = true;
        })

        domRef.addEventListener("pointerup", (e) => {
            e.preventDefault()
            this.pointerdown = false
        })
        domRef.addEventListener('pointermove', (e) => {
            e.preventDefault()
            this.pointermove = true
        })

    }

    draw() {
        if (!this.pointerdown) {
            this.drawable = false;
        }
        else if (this.pointerdown && this.pointermove) {
            //console.log('drawable')
            this.drawable = true;
        } else {
            //console.log('not drawable')
            this.drawable = false;
        }
    }
}