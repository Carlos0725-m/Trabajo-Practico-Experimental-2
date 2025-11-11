//ENT: n_valores = [5, 8, 10]
//PROC: Para cada n, generar la serie.
//• Usar un ciclo que sume los dos anteriores.
//SAL: Serie Fibonacci(5): 0, 1, 1, 2, 3
//Fibonacci(8): 0, 1, 1, 2, 3, 5, 8, 13
//Fibonacci(10): 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function SerieFibonacci(){
    let n_valores = [5,8,10]
    for(let j = 0; j < n_valores.length; j++){
        numero = n_valores[j]
        console.log("Fibonacci " + numero)
        let a=0 , b=1, c 
        console.log(a)
        console.log(b)
        for(let i=3; i<=numero; i++){
            c = a + b
            console.log(c)
            a = b 
            b = c
    }
}
}
SerieFibonacci()

//ENT: numeros = [6, 10, 15]
//PROC: Para cada numero, encontrar sus divisores.
//SAL: Divisores de 6: 1, 2, 3, 6
//Divisores de 10: 1, 2, 5, 10
//Divisores de 15: 1, 3, 5, 15
function DivisoresNumero(){
    let numeros = [6,10,15]
    for(let j = 0; j < numeros.length; j++){
        valor = numeros[j]
        console.log("divisores de "+ valor)
        for(let i = 1; i <= valor; i++){
        if(valor % i === 0){
            console.log(i)
        }
        }
    }
}
DivisoresNumero()

//ENT: numeros = [6, 12, 28]
//PROC: Para cada numero, sumar sus divisores.
//SAL: Suma divisores de 6: 12
//     Suma divisores de 12: 28
//     Suma divisores de 28: 56
function SumaSerieDivisores(){
    let numeros = [6,12,28]

    for(let j = 0; j < numeros.length; j++){
        let suma = 0
        valor = numeros[j]
        console.log("Suma divisores de "+ valor)

        for(let i = 1; i <= valor; i++){
        if(valor % i === 0){
            suma = suma + i
        }
    }
    console.log (suma)
    }
}
SumaSerieDivisores()
//ENT: numeros = [6, 10, 28, 30]
//PROC: Para cada numero, verificar si es perfecto.
//SAL: Numeros perfectos: 6, 28
function NumerosPerfectoLista(){
    let numeros = [6, 10, 28, 30]
    for ( let j = 0; j<numeros.length; j++){
        let suma = 0
        let valor = numeros[j]
        for(let i = 1; i < valor ; i++){
            if ( valor %i ===0 ){
                suma = suma + i
            }
        }
        if ( suma == valor){
            console.log(valor)
        }
    }
}
NumerosPerfectoLista()
//ENT: numeros = [4, 5, 6, 7, 8]
//PROC: Para cada numero, verificar si es primo.
//SAL: Numeros primos: 5, 7
function NumerosPrimosLista(){
    let numeros = [5, 6, 7, 8, 11]
    for (let j = 0; j < numeros.length; j++){
        let contador = 0
        let valor = numeros[j]
        for(let i = 1; i <= valor; i++){
            if (valor % i == 0) {
                contador++
            }
        }
        if(contador == 2){
            console.log(valor)
        }
    }
}
NumerosPrimosLista()
//ENT: numeros = [123, 456, 789]
//PROC: Para cada numero, invertirlo.
//SAL: 123 → 321
//     456 → 654
//     780 → 987
function InvertirVariosNum(){
    let numeros = [123, 456, 780]
    for(let j=0; j < numeros.length; j++){
        let invertido = 0
        let valor = numeros[j]
        while(valor>0){
        let digito = valor % 10;
        invertido = invertido * 10 + digito;
        valor = Math.floor(valor / 10);
        }
        console.log(numeros[j] + " → " + invertido)
        }
}
InvertirVariosNum()
//ENT: numeros = [45, 678, 12345]
//PROC: Para cada numero, contar sus digitos.
//SAL: 45 → 2 digitos
//     678 → 3 digitos
//     12345 → 5 digitos
function DigitosVariosNum(){
    let numeros = [45, 678, 12345]
    for(let j=0; j < numeros.length; j++){
        let contador = 0
        valor = numeros[j]
        while(valor > 0){
        let digito = Math.floor(valor / 10)
        contador++
        valor = digito
     }
    console.log(numeros[j] +" → "+ contador + " digitos")
}
}
DigitosVariosNum()
//ENT: numeros = [3, 4, 5]
//PROC: Para cada numero, calcular su factorial.
//SAL: 3! = 6
//     4! = 24
//     5! = 120
function FactorialVariosNum(){
    let numeros = [3, 4, 5]
    for(let j=0; j < numeros.length; j++){
        factorial = 1
        valor = numeros[j]
        for(let i = valor; i >= 1; i--){
        factorial = factorial * i
    }
    console.log(valor + "! = " + factorial)
}
}
FactorialVariosNum()
//ENT: numeros = [2, 3, 4]
//PROC: Para cada numero, realizar una suma sucesiva n veces.
//SAL: 2 sumado 4 veces = 28
//     3 sumado 4 veces = 32
//     4 sumado 4 veces = 36
function SumasSucesivasLista(){
    let numeros = [2, 3, 4]
    let veces =  4
    for(let j=0; j < numeros.length; j++){
        let suma = 0
        let valor = numeros[j]
         for ( let i = 1; i <= veces ; i++){
        suma = suma + valor
    }
    console.log(suma)
}
}
SumasSucesivasLista()
//ENT: numeros = [15, 22, 30]
//PROC: Para cada numero, realizar una resta sucesiva hasta que el resultado sea menor que un valor dado.
//SAL: 15 restado 4 sucesivamente = 3
//     22 restado 4 sucesivamente = 2
//     30 restado 4 sucesivamente = 2
function RestaSucesivaListas(){
    let numeros = [15, 22, 30];
    let valor = 4;
    for (let j = 0; j < numeros.length; j++) {
        let num = numeros[j];
        while (num >= valor) {
            num = num - valor;
        }
    console.log(num)
}
}
debugger
RestaSucesivaListas()