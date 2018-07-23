/**
 * Implement a function to determine if a string has all unique characters, what
 * if you can't use additional datastructures?
 */
const isUnique = (str) => {
    const letters = [...str];
    letters.sort();
    for(let i = 0; i< letters.length; i++){
        if(i < letters.length-1){
            if(letters[i] === letters[i+1]) return false;
        }
    }
    return true;
}

export default isUnique;