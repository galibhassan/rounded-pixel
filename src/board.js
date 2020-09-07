class Board {
    constructor(parentDiv, store) {
        this.globalStore = store;
        this.parentDiv = parentDiv;
        this.cellWidth = 10;
        this.cellHeight = 10;
        this.borderRadius = parseInt(this.cellWidth*0.25)+1;
        this.cellMargin = 1;

        this._enableEventListeners(this.parentDiv)
        
        this.dragging = false;
        this.pointerdown = false;
        this.drawable = false;
        
        this.addRowsToBoard()
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
        for (let i = 0; i < this.getDim().nCols +1; i++) {
            let row = this.getPixRow(i)
            this.parentDiv.appendChild(row)
        }
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