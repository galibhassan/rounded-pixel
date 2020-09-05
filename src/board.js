class Board {
    constructor(parentDiv, store) {
        this.globalStore = store;
        this.parentDiv = parentDiv;
        this.addRowsToBoard()

        this._enableEventListeners(this.parentDiv)

        this.dragging = false;
        this.mousedown = false;
        this.drawable = false;
        
    }

    getPixRow(rowIndex){
        const row = document.createElement("div")
        row.classList.add("pixel-row")
        for (let j=0; j<45; j++) {
            const rPixel = new RoundedPixel(this.globalStore, this, `${rowIndex}_${j}`, 20, 20, "white", 5)
            row.appendChild(rPixel.getPixel())
        }
        return row;
        
    }
    
    addRowsToBoard(){
        for (let i=0; i<26; i++) {
            let row = this.getPixRow(i)
            this.parentDiv.appendChild(row)
        }
    }

    handleBoardResize(){
        
    }


    _enableEventListeners(domRef){
        domRef.addEventListener('mousedown', (e)=>{
            this.mousedown = true;
        })

        domRef.addEventListener("mouseup", (e)=>{
            this.mousedown = false
        })
        domRef.addEventListener('mousemove', (e)=>{
            this.mousemove = true
        })
    }

    draw(){
        if(this.mousedown && this.mousemove) {
            //console.log('drawable')
            this.drawable = true;
        } else {
            //console.log('not drawable')
            this.drawable = false;
        }
    }
}