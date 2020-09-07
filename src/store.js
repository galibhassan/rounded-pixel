class Store {
    constructor() {
        this.colorPicker_brush = document.getElementById("colorPicker_brush")
        this.colorPicker_fillEmptyPixels = document.getElementById("colorPicker_fillEmptyPixels")
        this.brushSize = 2
    }

    getCurrentColor() {
        return this.colorPicker_brush.value;
    }

    setColor(newColor) {
        this.colorPicker_brush.value = newColor;
    }

    getCurrentColor_fillEmptyPixels(){
        return this.colorPicker_fillEmptyPixels.value;
    }


    getPixelDataForEntireBoard() {
        const pixels = Array.from(document.querySelectorAll("[data-pxid]"))
        const pxData = pixels.map((px) => {
            return {
                pxid: px.getAttribute("data-pxid"),
                pxColor: px.style.backgroundColor
            }
        })
        return pxData;
    }
}