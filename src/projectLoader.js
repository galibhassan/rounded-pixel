class ProjectLoader {
    constructor(projectLoaderDomRef) {
        this.domRef = projectLoaderDomRef;
        this._enableEventListeners()
    }

    _enableEventListeners(){
        this.domRef.addEventListener("input", (e)=>{
            const chosenFile = this.domRef.files[0];
            console.log(chosenFile)
        })
    }
}