function displayInFo(args)
{
var output=" ";
if(typeof args.name=="string")
{
output+="name:"+args.name+"\n";
}
if(typeof args.age=="number")
{
output+="age:"+args.age+"\n";
}
alert(output);
}
displayInFo({
name:"java",
age:1200
});