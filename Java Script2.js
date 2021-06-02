let painel;
let nome, saldo, compra, produto, banco;
let n1, n2, sinal, res;
let a, b, c, d, soma, media;
let quan, quan_num, n3, n4, soma2, media2; 
let n5, n6, somaImpares, valor

painel = prompt('Escolha as opções de 1 a 5 que vem a seguir: \n1 .Simular uma compra \n2 .Calcular um valor de dois números \n3 .Calcular 4 números e a media desses valores \n4 .Calcular e saber a media desses valores \n5 .Calcular a soma de dois numeros impares dentro do intervalo definido ')

/*Simulador de compra*/
if(painel == 1)
{
nome = prompt('Qual é o seu nome?')
banco = prompt('Informe o seu banco')
produto = prompt('Informe o produto que você quer comprar')
alert('Informe o seu saldo e o valor do seu produto')
saldo = prompt('Informe o saldo da sua conta')
compra = prompt('Informe o valor do seu produto')
saldo_final = saldo - compra;
divida = compra - saldo;

if(saldo_final >= 0)
{
    alert(`Olá ${nome} acaba de comprar um(a) ${produto}, seu saldo agora é de R$ ${saldo_final},00`);
}
else
{
    alert(`Você não tem saldo suficiente, faltam R$ ${divida},00`);
}
alert(`Conferindo os seu dados, seu banco é o ${banco}`)
}

/*Calculadora de dois números*/
if(painel == 2)
{
    alert('Agora você deverá informar os dois números inteiros e a operação que deseja realizar');
    n1 =  prompt('Digite o primeiro número inteiro');
    n2 = prompt('Digite o segundo número inteiro');
    sinal = prompt('Digite a operação que deeja fazer. \n 1 = SOMA \n 2 = SUBTRAÇÃO \n 3 = MULTIPLICAÇÃO \n 4 = DIVISÃO');
    
    if(sinal == 1 )
    {
        res = parseInt(n1) + parseInt(n2);
        alert(`O resultado da operação é ${res}`);
    }

    if(sinal == 2 )
    {
        res = n1 - n2;
        alert(`O resultado da operação é ${res}`);
    }

    if(sinal == 3 )
    {
        res = n1 * n2;
        alert(`O resultado da operação é ${res}`);
    }

    if(sinal == 4 )
    {
        res = n1 / n2;
        alert(`O resultado da operação é ${res}`);
    }
}
/*Calculadora de quatro digitos*/
if(painel == 3)
{
nome = prompt('Qual é o seu nome?')    
alert(`Olá ${nome} Agora voçê irá digitar quatro números inteiros`);
a = prompt('Digite o primeiro número inteiro')
b = prompt('Digite o segundo número inteiro')
c = prompt('Digite o terceiro número inteiro')
d = prompt('Digite o quarto número inteiro')

soma = parseInt(a) + parseInt(b) + parseInt(c) + parseInt(d);
alert(`A soma dos quatro números e ${soma}`)
media = soma/4;
alert(`A media dos quatro números é ${media}`)
}

/*Calcular valor de qualquer numero numero*/
if(painel == 4)
{
    alert('Agora você deverá informar a quantidade de número que você deseja calcular a média e seus respectivos valores');
    quan = prompt('Digite quantos números serão calculados');
    quan_num=1;
    n3 = prompt(`Digite o ${quan_num}º valor`);
    n4 = 0;
    soma2 = parseInt(n3) + parseInt(n4);
    while(quan_num <  quan)
    {
        quan_num++;
        n4 = prompt(`Digite o ${quan_num}º valor`);
        soma2 = soma2 + parseInt(n4);
    }
    media2 = soma2/quan;
    alert(`A soma dos valores apresentados é ${soma2}`);
    alert(`A média dos valores apresentados é ${media2}`);
}

/*Calcular a soma de dois numeros impares dentro do intervalo definido*/
if(painel == 5)
{
    n5 = parseInt(prompt("Digite o primeiro valor"));
    n6 = parseInt(prompt("Digite o segundo valor, ele deve ser maior que o primeiro"));
    somaImpares = 0;
    valor = n5;
    for(valor; valor <= n6; valor++) 
    {
        if(valor%2 == 1)
        {
            somaImpares += valor;
        }
    }
    alert(`A soma dos números ímpares do intervalo de ${n5} e ${n6} é ${somaImpares}`);
}