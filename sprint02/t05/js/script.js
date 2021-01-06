let str1 ="You're catnip to a girl like me. Handsome, dazed, and to die for...";
let str2 = 'Batman: "I tried to save you."';
let str3 ='Selina Kyle: catwoman"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful."';

let length = str1.length;
let upperCase = str1.toUpperCase;
let cat = str1 + "- Catwoman";
let replaced = str3.replace(/catwoman/gi, " ");
let char = str1.charAt(2);

alert(`Just string: ${str1}
Length: ${length}
Character number 2 is: ${char}
To uppercase ${upperCase}
Concatenation in a phrase: ${cat}
[Batman Returns] ${str2}
${replaced}`);
