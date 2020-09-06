class Utils {

    /**
     * 
     * @param {String} rgb of the form rgb(235, 0, 0)
     */
    static rgb2nrgb(_rgb) {
        if (!_rgb) return;
        
        const rgb = _rgb.toString()
        const csvString = rgb.split("rgb")[1].split("(")[1].split(")")[0]
        const csvStringUntrimmed = csvString.split(",")
        const r = parseInt(csvStringUntrimmed[0].trim())
        const g = parseInt(csvStringUntrimmed[1].trim())
        const b = parseInt(csvStringUntrimmed[2].trim())
        const nR = r / 255
        const nG = g / 255
        const nB = b / 255
        return {
            nrgb: {
                r: nR, g: nG, b: nB
            },
            rgb: {
                r, g, b
            },
            hex: rgbToHex(r, g, b)
        }
    }

    
    
    // ----------------------------------------------
    // code taken from:
    // https://stackoverflow.com/questions/19721439/download-json-object-as-a-file-from-browser
    static downloadObjectAsJson(exportObj, exportName){
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href",     dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
    // ----------------------------------------------
    
}


// ----------------------------------------------
// code taken from:
// https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// ----------------------------------------------



// test
//rgb2nrgb("rgb(235, 239, 255)")