var i;
var j;
i=[1,5,8,4,9,12,2];
alert(i.length);
var max=i[0];
var max1=i[0];
for(j=0;j<i.length;j++)
{
if(i[j]>max)
{
max1=max;
max=i[j];
}
else
if(i[j]>max1)
{
max1=i[j];
}
}
alert(max1);