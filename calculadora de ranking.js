let resultado = calcular(1987,1896)

if(resultado<=10){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de ferro")
}else if(resultado>=11 && resultado<=20){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de bronze")
}else if(resultado>=21 && resultado<=50){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de prata")
}else if(resultado>=51 && resultado<=80){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de ouro")
}else if(resultado>=81 && resultado<=90){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de diamante")
}else if(resultado>=91 && resultado<=100){
    console.log("O Herói tem de saldo de "+[resultado][0]+" está no nivel de lendário")
}else if(resultado>=101){
    console.log("O Herói tem de saldo de "+ [resultado][0]+" está no nivel de Imortal")
}else{
    console.log("nível invalido")
}
function calcular(vitorias, derrotas){
    let calculo = (vitorias - derrotas)
    return calculo
}
