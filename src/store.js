class Store {
    constructor(){
        this.colorPicker = document.getElementById("colorPicker")
    }

    getCurrentColor(){
        return this.colorPicker.value;
    }

}