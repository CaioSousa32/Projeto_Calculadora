function transposta(){
    var newArray = [];
    var array = [
    [1,1,1],
    [2,2,2],
    [3,3,3]
]
    for(var i = 0; i < array.length; i++){
        newArray.push([]);
    };

    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array.length; j++){
            newArray[j].push(array[i][j]);
        };
    };

    return newArray;
}
resultado = transposta()
console.log(resultado)