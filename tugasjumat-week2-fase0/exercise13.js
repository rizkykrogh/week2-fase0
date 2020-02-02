function xo(str) {
    var xCount = 0;
    var oCount = 0;
    for(var i = 0; i < str.length; i++) {
        if(str[i] === 'o') {
            oCount++;
        } else if(str[i] === 'x') {
            xCount++;
        }
    }
    if(oCount === xCount) {
        return true;
    }   else {
        return false;
    }
}

console.log(xo('xoxoxo'));
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));