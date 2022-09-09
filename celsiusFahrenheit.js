/* Crie uma função que receba uma string em celsius ou fahrenheit e faça 
a transformação de uma unidade para outra

C = (F-32) * 5/9

F = C * 9/5 + 32 */

function transform (degree) {
    const haveCelsius = degree.includes('C');
    const haveFahrenheit = degree.includes ('F');
 
    let newDegree = Number(degree.replace('F', ''));
    let formula = (fahrenheit) => (fahrenheit-32) * 5/9;
    let temperede = 'C';

    if(haveCelsius){
        newDegree = Number(degree.replace('C', ''));
        formula = (celsius) => celsius * 9/5 + 32;
        temperede = 'F';   
    }

    return formula(newDegree) + temperede
}

console.log(transform('50C'))