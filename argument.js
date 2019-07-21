let callenge = function ( name = 'sid', tip = 0) {
 return 'namr :' + name + '-tip :' + tip;
}

console.log(callenge(undefined,1))


let challenge = function(amount = 100, percent = .2) {
    return amount * percent;
}


console.log(      challenge(40, .001));