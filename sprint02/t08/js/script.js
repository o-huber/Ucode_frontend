let value = prompt('Enter a number from 1 to 4:');

if (value === '1'){
  alert(value * 2 / 'a');
}else if (value === '2'){
  alert((value - value) / 0);
}else if (value === '3'){
  alert(0 * Infinity);
}else if (value === '4'){
  alert(value * 40000000 == Infinity);
}else{
  alert('Wrong input');
}