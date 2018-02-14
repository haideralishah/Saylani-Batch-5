

/*



***********Quiz Text 1*************

1) Inside which HTML element do we put the JavaScript?

<script src=''></script>

























2) What is the keyword that displays a message box?

alert();
window.alert();
window. alert();
window .alert();
window . alert();
alert( 'haider' );
alert ( 'haider' );















3) alert syntex.
	a)alert "message"; //invalid
	b)alert 'message'; //invalid
	c)alert("message"); //valid
	d)alert('message'); //valid
	e)Alert("message"); //invalid
	f)Alert('message');//invalid









4) What is the keyword that declares a variable?
var

var userName = 'haider';













5) how to declared a variible?

var aVariable;
var useralert;












6) how to declared multiple variable in one line/statement?

var userName, userMessage, abcd;
if(){
	userName = [1,2,3,4];
}











7) In a single statement declare a variable and assign a string to it. 
var userName = 'haider';








8) Assign a string to a variable that has already been declared.

userMessage = 'hello world';








9) This statement has already been coded.
var bestMan = "Charlie";
Assign the variable a new string value.















10) how to alert a variable?
var userName = 'haider';
alert(userName);















11) If a number is enclosed in quotes, it's a ______. example.("10")? 

string








12) What is the value of total?
	var a = 100;
	var b = 10;
	var total = a + b;











13) alert('10' + '20');

1020















14) alert(10 + '20');
1020







15) In a single statement declare a variable and assign a number to it. 

var num1;
num1 = 5;
var num2 = 3;




16) Rewrite this using camelCase.
var Nameofband;

var nameOfBand;



17) Legal and Illegal variables names.
	a) COUNT  //Legal    
	b) 1st   // Illegal
	c) _file1  //Legal
	d) FILE*     // Illegal
	e) $count     //Legal
	f) The Answer    // Illegal
	g) user$name      //Legal
	h) alert           // Illegal
	i) HOME_DIRECTORY  //Legal







18) alert(20 % 6); alert(2 + 4 * 2);
2

10






19) How can we add a single line comment in JavaScript?
//






20) How to insert a comment that has more than one line?
/*















































**********Quiz Text 2********


string
number
boolean
undefined
object
null



1) var arr = [];
   alert(typeof arr); // Object
   alert(typeof arr[2]) // undefined



















2) var arr = [32,"asd",true,54,NaN,92,"qwerty"];
   alert(arr[-2]);

undefined






















3) var arr = [1,2,3,4,5];
   alert(arr[arr.length]);

   undefined


























4) var arr = [1,2,3,4,5];
   var arr2 = arr;
   arr.push(6,7,8,9);
   arr2.push(10,11,12,13);
   console.log(arr);
   console.log(arr2);


























5) var arr = [];
   var arr2 = [];
   alert(arr == arr2);
false























6) var arr = [1,2,3];
   arr[5] = 10;
   arr.push(4,5);
   arr[8].push(10)
   console.log(arr);

error



























7) var arr = [1,2,3];
   console.log( arr.unshift( arr.pop() ) );
   console.log(arr);

3,1,2




























8) var arr = [1,2,3,4,5,6,7,8,9];
   var a = arr.splice(2, 2, 10,20);
   console.log(arr);
   console.log(arr.length);
   console.log(a)
   console.log(a.length)
















*************Quiz 3*********


1) var result = prompt(NaN);
   alert(typeof result);
string


 var result = +prompt(NaN);
   alert(typeof result);

number

















































2) var result = alert("hello") + prompt("xyz"); //name
   alert(result);

undefinedUserInput













































3) var num = 10;
   var cost = num++;
   var result = prompt(++num + cost++); // 22
   alert(typeof result); //string

















































4) alert(confirm("string", "string", "string"));

true or false 























































5) var result = confirm("xyz");//ok
   alert(result) // true or false
   alert(typeof result) // boolean



















































6) var result = prompt("xyz");
   alert(result);
   alert(typeof result);


















































7) var result = typeof confirm("xyz");

// boolean



















































8) var result = confirm("xyz") + +prompt("xyz");//5
   alert(result);
true = 1;
false = 0;













































9) var result = confirm("xyz") + prompt("xyz");//string
   alert(result)

concate


















































10) var num = 10;
    var result = +prompt("xyz");//++num
    alert(result);













































11) var result = parseFloat("10.10");
    alert(result)
    alert(typeof result)








































12) var result = parseInt(confirm() + +prompt(""));//123.123

















































13) var num = +prompt("xyz");//2
    var result = +num;
    alert(result);
    alert(typeof result);











































14) var result = +String(prompt());//10
    alert(result);
    alert(typeof result);













































15) var result = confirm("xyz")++ - ++confirm("xyz");

error















**************Quiz 5*******
1) if (city = "Las Vegas") { 
       alert("Las Vegas")
   }
   alert(city)
// cityName












2)  if (UndefinedValue) { 
        alert("if") 
        }
    else { 
        alert("else")
    }

error












3)  if (false) { alert("if") }
    else { alert("else") }
    if(true){ alert("2nd if") }
else 
2nd if

















4)  var a; 
    (a || func)();
    (a && func)();
    function func(){
        alert("func")
    }
















5)  function chicken() { 
       return egg();
    } 
    function egg() { 
        return chicken();
    } 
    alert(chicken() + " came first.");





















6)  function power(base, exponent) { 
        if (exponent == 0) 
            return 1;
        else 
            return base * power(base, exponent - 1);
    }

    alert(power(2,4))
    (2,(2,(2,(2,1))))
















7)  var string = ""
    if(string){
        alert(string + "if");
    }


false condition


userName = ''
userName = undefined

users = []
user = null

















8)  funtion gradeFunc(obtMarks, totalMarks){
        // code here
        return grade;
    }












	********Quiz 6**********





	1) var arr = [];
   alert(typeof arr);
   alert(typeof arr[2])


object
undefined














2) var arr = [32,"asd",true,54,NaN,92,"qwerty"];
   alert(arr[-2]);






















3) var arr = [1,2,3,4,5];
   alert(arr[arr.length]);


























4) var arr = [1,2,3,4,5];
   var arr2 = arr;
   arr.push(6,7,8,9);
   arr2.push(10,11,12,13);
   console.log(arr);
   console.log(arr2);


























5) var arr = [];
   var arr2 = [];
   alert(arr == arr2);
























6) var arr = [1,2,3];
   arr[5] = 10;
   arr.push(4,5);
   arr[8].push(10)
   console.log(arr);





























7) var arr = [1,2,3];
   console.log( arr.unshift( arr.pop() ) );
   console.log(arr);






























8) var arr = [1,2,3,4,5,6,7,8,9];
   var a = arr.splice(2, -2, 10,20);
   console.log(arr);
   console.log(arr.length);
   console.log(a)
   console.log(a.length)


























*/





if ((a === b || c === d) && (x === y || z === v)) {
	console.log('hello');
}

if ((a === b || c === d)) {
	if((x === y || z === v)){
		console.log('hello');
	}
}




if ((a === b && z === v) || (x === y && c === d)) {

}

if ((a === b || c === d)) {
	if((x === y || z === v)){
		console.log('hello');
	}
}



if(a === b){
	0
}
else if(x ===y){
	1
	if(a === b){
		1.5
	}
}

else if(z === v){
	1
}