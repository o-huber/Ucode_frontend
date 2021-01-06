function multiplic(num){
    let res = '';
    let i =1;
    while (i <= 10) {
        res += `${num} * ${i} = ${num * i}\n`;
        i++;
    }
    alert(res);
}
multiplic (prompt("Number"));