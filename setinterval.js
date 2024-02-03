// console.log("dsajknod");

// const ab = "c";
// console.log(ab);

// const userName = prompt("NAme!!!!!!!!!!!!!!!!!!!!!!!!!!");


// setInterval(sumNum, 2000, userName);

// function sumNum() {
//    alert((243746873 + 3428) * 0);
// };



// Завдання "Лічильник": Створіть лічильник, який збільшується на одиницю кожну секунду. Виводьте значення лічильника на сторінці.


// setInterval(counter, 1000);
//   let num = 0;

// function counter() {
//  let b = num++;
    
//     alert(`лічильник ${b}`);
// };



// Завдання "Зміна кольору": Створіть блок, який змінює свій фоновий 
// колір кожні 3 секунди. Використовуйте setInterval для зміни кольору.


const boxEl = document.querySelector(".box");

setInterval(changeColor, 1000);

function changeColor() {
    const red = Math.random() * (255 - 1) + 1;
    const green = Math.random() * (255 - 1) + 1;
    const blue = Math.random() * (255 - 1) + 1;
    boxEl.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
};


