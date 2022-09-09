/* TRANSFORMAR NOTAS ESCOLARES

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres A B CDATASection

- de 90 para cima - A
- entre 80/89 - B
- entre 70/79 - C
- entre 60/69 - D
- menor que 60 - F */

let score = 50 ;

function getScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    if (scoreA) {
        return 'A'
    }else if (scoreB){
        return 'B'
    }else if (scoreC){
        return 'C'
    }else if (scoreD){
        return 'D'
    }else if (scoreF){
        return 'F'
    }else{
        return 'Valor não definido'
        
    }

}

    console.log(getScore(93))
    console.log(getScore(85))
    console.log(getScore(77))
    console.log(getScore(62))
    console.log(getScore(50))
    console.log(getScore(-1))
    console.log(getScore('A'))


    
