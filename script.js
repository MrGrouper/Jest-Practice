

const calculator = function(str, x, y){
    if(isNaN(x) || isNaN(y)) throw new Error('parameter is NaN')
    if(str == 'add') return x+y;
    if(str == 'subtract') return x-y;
    if(str == 'multiply') return x*y;
    if(str == 'divide') return x/y;
    else throw new Error('Operation not valid')
};

const reverseString = function(str) {
    let newString = "";
    for (let i = str.length -1; i>=0; i--) {
        newString += str[i];
    }
return newString;
};


const capitalize = function(str){
    if(typeof str !== 'string') {throw Error('parameter is not a string')}
    else return str.charAt(0).toUpperCase()+str.slice(1)
}

const caesarCipher = function(str, shift) {
    let uniStrArray = [];
    let newArray = []
    for (let i = 0; i <str.length; i++ ) {
    uniStrArray[i] = str.charCodeAt(i)
    if(uniStrArray[i] >= 65 && uniStrArray[i] <= 90){
        uniStrArray[i] = ((uniStrArray[i]- 65 + shift) % 26)+65
    }
    else if (uniStrArray[i] >= 97 && uniStrArray[i] <=122){
        uniStrArray[i] = ((uniStrArray[i]- 97 + shift) % 26)+97
    }
    newArray[i] = String.fromCharCode([uniStrArray[i]])
};
 return newArray.join("")

}

const analyzeArray = function(arr){
    const n = arr.length;
        for (let i = 0; i<n; i++){
            if(typeof arr[i] !== 'number') throw new Error('NaN')
        };
    let sum = arr.reduce(function(a, b){
        return a + b;
          });    
    const min0 = Math.min(...arr);
    const max0 = Math.max(...arr);
    const avg = sum/n;

    return {average: avg, min: min0, max: max0, length: n }
    

}
module.exports = {capitalize, reverseString, calculator, caesarCipher, analyzeArray}