//ENT: leer numero, asignar el valor de a = 0 y b =1 
//PROC: comenzar con 0 y 1
//      recorrer los valores y sumar a + b 
//      repetir el proceso hasta cumplir con n numero 
//SAL: 0, 1, 1, 2, 3, 5, 8, 13
function numerosFibonacci(){
    let n = parseInt(prompt("Ingrese numero para serie Fibonacci"))
    let a=0 , b=1, c 
    console.log(a)
    console.log(b)
    for(let i=3; i<=n; i++){
        c = a + b
        console.log(c)
        a = b 
        b = c
    }
}
numerosFibonacci()
//ENT: leer numero
//PROC: recorrer los numeros desde 1 hasta el numero ingresado
//      verificar si el numero es divisible por i
//      si es divisible, mostrar i como divisor
//SAL: Divisores de numero: 1, 2, 3, ..., numero
function numerosDivisor(){
    let numero=parseInt(prompt("Ingrese numero"))
    console.log("Divisores de", numero, ":")
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
        console.log(i)
        }
    }
}
numerosDivisor()
//ENT: leer numero
//PROC: recorrer los numeros desde 1 hasta el numero ingresado
//      verificar si el numero es divisible por i
//      si es divisible, sumar i a la variable suma
//SAL: Suma de divisores: suma
function SumaDivisor(){
    let numero=parseInt(prompt("Ingrese numero"))
    let suma = 0 
    for(let i = 1; i <= numero; i++){
        if(numero % i === 0){
            suma = suma + i
        }
    }
    console.log("Suma de divisores: " , suma)
}
SumaDivisor()
//ENT: leer numero
//PROC: recorrer los numeros desde 1 hasta el numero ingresado
//      verificar si el numero es divisible por i
function NumeroPerfecto(){
    let numero=parseInt(prompt("Ingrese numero"))
    let suma = 0 
    for(let i = 1; i < numero; i++){
        if(numero % i === 0){
            suma = suma + i
        }   
    }
    if (numero === suma){
        console.log(numero, "Es un numero perfecto")
    }else{
        console.log(numero, "No es un numero perfecto")
    }
}
NumeroPerfecto()
//ENT: leer numero
//PROC: recorrer los numeros desde 1 hasta el numero ingresado
//      verificar si el numero es divisible por i
//      contar las veces que es divisible
//SAL: Si el contador es 2, el numero es primo
function NumeroPrimo(){
    let numero=parseInt(prompt("Ingrese numero"))
    let contador=0
    for(let i = 1; i <= numero; i++){
        if(numero % i ===0){
            contador++
        }
    }
    if (contador === 2){
        console.log(numero + " Es primo")
    }else{
        console.log(numero + " No es primo")
    }
}
NumeroPrimo()
//ENT: leer numero
//PROC: invertir el numero usando operaciones matematicas
//SAL: Numero invertido
function invertirNumero(){
    let numero=parseInt(prompt("Ingrese numeros"))
    let invertido = 0
    while(numero>0){
    let digito = numero % 10;
    invertido = invertido * 10 + digito;
    numero = Math.floor(numero / 10);
  }
  console.log("Número invertido:", invertido);
}
invertirNumero()
//ENT: leer numero
//PROC: contar los digitos del numero usando operaciones matematicas
//SAL: Cantidad de digitos
function ContarDigitos(){
    let numero=parseInt(prompt("Ingrese numeros"))
    contador = 0
    while(numero>0){
    let digito = Math.floor(numero / 10)
    contador++
    numero = digito
    }
    console.log(contador)
}
ContarDigitos()
//ENT: leer numero
//PROC: calcular el factorial del numero usando un ciclo
//SAL: Factorial del numero
function FactorialNumero(){
    let n = parseInt(prompt("Ingrese numero"))
    factorial = 1
    for(let i = n; i >= 1; i--){
        factorial = factorial * i
    }
    console.log(factorial)
}
FactorialNumero()
//ENT: leer numero, leer veces
//PROC: realizar una suma sucesiva n veces
//SAL: Resultado de la suma
function SumaSucesiva(){
    let numero=parseInt(prompt("Ingrese numeros"))
    let n = parseInt(prompt("ingrese las veces a repetir"))
    let suma = 0
    for ( let i = 1; i <= n ; i++){
        suma = suma + numero 
    }
    console.log(suma)
}
SumaSucesiva()
//ENT: leer numero, leer valor
//PROC: realizar una resta sucesiva n veces
//SAL: Resultado de la resta
function RestaSucesiva(){
    let numero=parseInt(prompt("Ingrese numeros"))
    let valor = parseInt(prompt("Ingrese un valor "))
    let resta = 0 
    for(let i = 1; i < valor; i++){
        resta = numero - valor
        numero = resta
    }
    console.log(resta)
}
RestaSucesiva()