
let number = 303;
let bigInt = BigInt(303);
let str = "name";
let bool = true;
let nul = null;
let undef;
let object = new Array(303);
let sym= Symbol("symb");
let func = function() {};

alert(`number is ${typeof(number)}
bigInt is ${typeof(bigInt)}
str is ${typeof(str)}
bool is ${typeof(bool)}
nul is ${typeof(nul)}
undef is ${typeof(undef)}
object is ${typeof(object)}
sym is ${typeof(sym)}
func is ${typeof(func)}`);