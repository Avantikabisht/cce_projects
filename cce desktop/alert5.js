function max(a)
{
var i;
var h;
h=a[0];
for(i=0;i<a.length;i++)
{
if(a[i]>h)
{
h=a[i];
}
}
document.write("max"+h);
}
var a=[9,2,7,8];
max(a);