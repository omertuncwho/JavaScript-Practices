function modula (a,b){
if (a%b==0)
{
console.log(`The number ${a} is divisible by the number ${b}`)
}
else if (a%b==1)
{
console.log(`The number ${a} is not divisible by ${b}`);
}
}
modula(13,2);