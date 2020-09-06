class RoundedPixel {
    constructor(globalStore, board, pxid, width, height, backgroundColor, borderRadius) {
        this.globalStore = globalStore;
        this.width = width;
        this.height = height;
        this.backgroundColor = backgroundColor;
        this.parent = parent;
        this.borderRadius = borderRadius;
        this.pxid = pxid;
        this.board = board;

        this.altKeyDown = false;
    }

    getPixel() {
        const px = document.createElement("div");
        px.classList.add("rounded-pixel")
        px.style.width = this.width + "px";
        px.style.height = this.height + "px";
        // px.style.border = "1px solid white"
        px.style.backgroundColor = this.backgroundColor;
        px.style.borderRadius = this.borderRadius + "px";
        px.setAttribute("data-pxid", this.pxid);
        px.style.display = "inline-block"
        this._enableEventListeners(px)
        return px;
    }

    setColor(newColor) {
        this.color = newColor;
        this.getDomRef().style.backgroundColor = this.color;

    }

    getDomRef() {
        return document.querySelectorAll(`[data-pxid="${this.pxid}"]`)[0];
    }

    getPxId() {
        return this.pxid
    }

    _enableEventListeners(domRef) {
        domRef.addEventListener('mouseover', (e) => {
            {
                e.preventDefault()
                if (this.board.drawable) {
                    const currentColor = this.globalStore.getCurrentColor()
                    this.setColor(currentColor)
                }
            }
        });
        domRef.addEventListener('mousedown', (e) => {
            {
                e.preventDefault()
                if (!this.altKeyDown) {
                    const currentColor = this.globalStore.getCurrentColor()
                    this.setColor(currentColor)
                } else {
                    // pick color
                    const pickedColor = domRef.style.backgroundColor;
                    console.log(pickedColor)
                    this.globalStore.setColor(pickedColor)

                }
            }
        });

        document.body.addEventListener('keydown', (e) => {
            e.preventDefault()
            if (e.key === "Alt") {
                this.altKeyDown = true;
            } else {
                this.altKeyDown = false;
            }
        })

        document.body.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.altKeyDown = false;
        })



    }
}