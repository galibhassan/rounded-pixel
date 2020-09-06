class Board {
    constructor(parentDiv, store) {
        this.globalStore = store;
        this.parentDiv = parentDiv;
        this.addRowsToBoard()

        this._enableEventListeners(this.parentDiv)

        this.dragging = false;
        this.pointerdown = false;
        this.drawable = false;
        
    }

    getPixRow(rowIndex){
        const row = document.createElement("div")
        row.classList.add("pixel-row")
        for (let j=0; j<45; j++) {
            const rPixel = new RoundedPixel(this.globalStore, this, `${rowIndex}_${j}`, 10, 10, "", 3)
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
        domRef.addEventListener('pointerdown', (e)=>{
            e.preventDefault()
            this.pointerdown = true;
        })
        
        domRef.addEventListener("pointerup", (e)=>{
            e.preventDefault()
            this.pointerdown = false
        })
        domRef.addEventListener('pointermove', (e)=>{
            e.preventDefault()
            this.pointermove = true
        })
        
    }

    draw(){
        if(!this.pointerdown) {
            this.drawable = false;
        }
        else if(this.pointerdown && this.pointermove) {
            //console.log('drawable')
            this.drawable = true;
        } else {
            //console.log('not drawable')
            this.drawable = false;
        }
    }
}