function multiplicacao(m1, m2) {
    var result = [];
    for (var i = 0; i < m1.length; i++) {
        result[i] = [];
        for (var j = 0; j < m2[0].length; j++) {
            var aux = 0;
            for (var k = 0; k < m1[0].length; k++) {
                aux += m1[i][k] * m2[k][j];
            }
            result[i][j] = aux;
        }
    }
    return result;
}

var m1 = [[1,2],
         [3,4]]
         
var m2 = [[5,6],
         [7,8]]

var resultado = multiplicacao(m1, m2)
console.log(resultado)