// window.setTimeout(callback, delay, args...);

const a = 5;
console.log(a);



function test1() {
    console.log("test1");
};

function test2() {
    console.log("test2");
};

function test3() {
    console.log("test3");
};

console.log("message");


const sets1 = setTimeout(test1, 2000);
const sets2 = setTimeout(test2, 5000);
const sets3 = setTimeout(test3, 100);

console.log(sets1, sets2, sets3);

function delTimer() {
    if (a === 5) {
        clearTimeout(sets3);
    };
};

clearTimeout(sets3);