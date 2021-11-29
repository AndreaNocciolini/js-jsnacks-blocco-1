// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const container = document.querySelector(`.container`);
const namesArray = [`Francis Scott Fitzgerald`, `Zelda Sayre Fitzgerald`, `Nick Carraway`, `Daisy Buchanan`, `Jordan Baker`, `Myrtle Wilson`];
const nameUser = prompt(`Insert your name`);

//******************FOR*****************/
// console.log(nameUser);
// console.log(namesArray);


// let invite = false;
// for (let i = 0; i < namesArray.length; i++) {
//     const element = namesArray[i];
//     console.log(element);

//     if (nameUser == element) {
//         invite = true;
//     }
//     console.log(invite)
// }
//******************FOR*****************/

let invite;
let i = 0
while (i <= namesArray.length - 1) {
    let element = namesArray[i].toLowerCase();

    if (nameUser.toLowerCase() == element) {
        invite = true;
    }
    else {
        
    }
    i++;
}

if (invite) {
    container.innerHTML = `Welcome, ${nameUser}!`
}
else {
    container.innerHTML = `You're not invited, ${nameUser}, please refrain from stay on this page.`
}

