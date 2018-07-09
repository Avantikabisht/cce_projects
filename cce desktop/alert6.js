var num1=5;
var num2=num1;
num1=6;
alert(num2);//no change in the final value
var Obj1=new Object();
var Obj2=new Object();
var Obj2=Obj1;
Obj1.name="as";//check if obj2 is not created and no value is given to it we get output as not sa
Obj2.name="sa";
alert(Obj2.name);