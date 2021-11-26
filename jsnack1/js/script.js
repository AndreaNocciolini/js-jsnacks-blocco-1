// Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

//*************************QUICK EXERCISE***************************

// const num0 = parseFloat(prompt(`Insert a number`));
// const num1 = parseFloat(prompt(`Insert another number`));
// const num2 = parseFloat(prompt(`Insert a third number`));
// const num3 = parseFloat(prompt(`Insert one more number`));
// const num4 = parseFloat(prompt(`Insert another one number`));
// const num5 = parseFloat(prompt(`Insert a new number`));
// const num6 = parseFloat(prompt(`Insert again a number`));
// const num7 = parseFloat(prompt(`Insert a number!`));
// const num8 = parseFloat(prompt(`Type a number`));
// const num9 = parseFloat(prompt(`Insert a last number`));

// console.log(num0, num1, num2, num3, num4, num5, num6, num7,num8, num9)

// let sum = parseFloat(num0 + num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9)
// console.log(sum)

// const container = document.querySelector(`.container`);
// container.innerHTML = sum;

//*************************END QUICK EXERCISE************************


//****************** FOR ***************//

// const container = document.querySelector(`.container`);
// let sum = 0;
//  for (let i = 0; i < 10; i++) {
//      const number = parseFloat(prompt(`Insert a number`));
//      sum += number;   
//  }

// container.innerHTML = sum;
// console.log(sum);

//****************** END FOR ***************//

//****************** WHILE ************//

const container = document.querySelector(`.container`);
let sum = 0;
let i = 0;
while (i < 10) {
    const number = parseFloat(prompt(`Insert a number`));
    sum += number;
    i++;
}

container.innerHTML = sum;
console.log(sum);

//****************** END WHILE ************//