/* SISTEMA DE GASTOS FAMILIARES

Crie um objeto que possuirá 2 propriedades, ambas
do tipo array:
   * receitas: []
   * despesas: []

Agora, crie uma função que irá calcular o total de receitas
e despesas e irá mostrar uma mensagem se a familía
está com saldo positivo ou negativo, seguido do valor do saldo. */

let caixa = {
    receitas: [1500, 1500],
    despesas: [80, 443.44, 465.11, 60, 367.89, 140, 140, 27.58, 700],
}

function somar(array) {
   let total = 0;

   for (let valor of array) {
     total += valor
    
   }
     return total
        
    }

function calculoTotal() {
    const calculoReceitas = somar(caixa.receitas);
    const calculoDespesas =  somar (caixa.despesas);
    const total = calculoReceitas - calculoDespesas;

    if(total >= 0){
        console.log(`Seu saldo é positivo: ${total}`)
        
    }else{
        console.log(`Seu saldo é negativo: ${total}`)
    }
    
}

calculoTotal()
    
