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

        this.eyeDropperEnabled = false;
        this.eraserEnabled = false;
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
        // px.style.display = "inline-block"
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
        domRef.addEventListener('pointerover', (e) => {
            {
                e.preventDefault()
                if (this.board.drawable) {
                    if (!this.eraserEnabled) {
                        const currentColor = this.globalStore.getCurrentColor()
                        this.setColor(currentColor)
                    } else {
                        const currentColor = null;
                        this.setColor(currentColor)
                        // console.log(this.eraserEnabled)
                    }

                }
            }
        });
        domRef.addEventListener('pointerdown', (e) => {
            {
                e.preventDefault()
                if (!this.eyeDropperEnabled) {
                    if(!this.eraserEnabled) {
                        const currentColor = this.globalStore.getCurrentColor()
                        this.setColor(currentColor)
                    } else {
                        const currentColor = null;
                        this.setColor(currentColor)
                    }

                } else {
                    // pick color
                    const pickedColor = domRef.style.backgroundColor;
                    const {nrgb, hex} = Utils.rgb2nrgb(pickedColor)
                    this.globalStore.setColor(hex)

                }
            }
        });

        document.body.addEventListener('keydown', (e) => {
            // e.preventDefault()
            if (e.key === "Alt") {
                this.eyeDropperEnabled = true;
            } else {
                this.eyeDropperEnabled = false;
            }

            if(e.key === "e") {
                this.eraserEnabled = !this.eraserEnabled;
            }
        })

        document.body.addEventListener('keyup', (e) => {
            e.preventDefault()
            this.eyeDropperEnabled = false;
        })



    }
}