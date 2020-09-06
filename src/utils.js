
/**
 * 
 * @param {String} rgb of the form rgb(235, 0, 0)
 */
const rgb2nrgb = (rgb) => {
    const csvString = rgb.split("rgb")[1].split("(")[1].split(")")[0]
    csvString.split(",")
    
}