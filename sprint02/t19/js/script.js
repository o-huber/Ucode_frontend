function checkBrackets(str) {
    let valid1 = /(\()/g;
    let valid2 = /(\))/g;
    let count = 0;

    if (typeof(str) != 'string' || (str.match(valid1) == null && str.match(valid2) == null)) {
        return -1;
    }

    if (str.match(valid1) == null) {
        return str.match(valid2).length;
    }
    if (str.match(valid2) == null) {
        return str.match(valid1).length;
    }

    if (str.search(valid2) < str.search(valid1)) {
        count += 1;
        str = str.slice(str.search(valid2) + 1);
    }

    let countOpen = str.match(valid1).length;
    let countClose = str.match(valid2).length;

    if (countOpen > countClose) {
        return count += countOpen - countClose;
    } else if (countClose > countOpen) {
        return count += countClose - countOpen;
    } else return count;

}

// console.log(checkBrackets('1)()(())2(()'));
// // 2
// console.log(checkBrackets(NaN));
// // -1