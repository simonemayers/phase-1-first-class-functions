function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
    return receivesAFunction
}
function returnsAnAnonymousFunction(){
    return () => console.log("I love pizza")
}