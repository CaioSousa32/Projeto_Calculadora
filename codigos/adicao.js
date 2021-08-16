function soma(){
        var a, b, c;
    a = [[3, 9],
         [4 ,3]]

    b = [[1, 6],
         [4, 2]]

    c = [];
 
        for (var i=0; i < a.length; i++){
            for (var j=0; j < a[i].length; j++) { 
                   c.push(a[i][j] + b[i][j])
            }     
        }
        return c   
    }
 
    var resultado = soma()
    console.log(resultado)