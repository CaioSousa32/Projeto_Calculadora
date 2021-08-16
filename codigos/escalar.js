function escalar() {


    var n = 5

    var matriz_a = [
        [1, 2, 3],
        [5, 6, 7]
    ]

    var matriz_b = []

    for (var i = 0; i < matriz_a.length; i++) {
        for (var j = 0; j < matriz_a[i].length; j++) {
            matriz_b.push(n * matriz_a[i][j])
        }
    }

    console.log(matriz_b)
}
 escalar()