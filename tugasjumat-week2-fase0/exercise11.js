function balikKata(kata) {
    var result = '';
    for(var i = kata.lenght - 1; i >= 0; i--) {
        result += kata[i];
    }
    return result;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));