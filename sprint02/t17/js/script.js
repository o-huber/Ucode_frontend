let name = prompt("Enter your first name:");
let surname = prompt("Enter your last name:");

let valid = /^[a-z]{1,20}$/i;

name = name.toLowerCase();
surname = surname.toLowerCase();
name = name.charAt(0).toUpperCase() + name.slice(1);
surname = surname.charAt(0).toUpperCase() + surname.slice(1);


if (surname.search(valid) == -1 || name.search(valid) == -1) {
    alert("Wrong input!");
    console.log("Wrong input!");
} else {
    alert(`Hello, ${name} ${surname}`);
    console.log(`Hello, ${name} ${surname}`);
}