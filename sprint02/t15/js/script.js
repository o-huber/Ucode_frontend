let num1 = prompt('Enter begin range number: ', 1);
let num2 = prompt('Enter end range number: ', 100);



function checkDivision(beginRange, endRange ) {
    for (let i = beginRange; i <= endRange; i++) {
        if (i % 2 == 0 && i % 3 == 0 && i % 10 == 0) {
            console.log(`${i} - is even, a multiple of 3, a multiple of 10`);

        } else if (i % 2 == 0 && i % 10 == 0) {
            console.log(`${i} - is even, a multiple of 10`);

        } else if (i % 2 == 0 && i % 3 == 0) {
            console.log(`${i} - is even, a multiple of 3`);

        } else if (i % 3 == 0) {
            console.log(`${i} - is a multiple of 3`);

        } else if (i % 2 == 0) {
            console.log(`${i} - is even`);
        } else console.log(`${i}`);
    }
}

checkDivision(num1, num2);