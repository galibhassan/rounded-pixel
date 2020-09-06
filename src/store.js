class Store {
    constructor(){
        this.colorPicker_brush = document.getElementById("colorPicker_brush")
    }

    getCurrentColor(){
        return this.colorPicker_brush.value;
    }

    setColor(newColor){
        this.colorPicker_brush.value = newColor;
    }

}