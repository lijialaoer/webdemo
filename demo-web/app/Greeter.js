const greets = require('../jsonText/greet.json');

module.exports = function (){
    var greet = document.createElement('div');
    greet.textContent = greets.greetText;
    return greet;
}