function areaOfTriangle(a,b,ang){
    let pi= Math.PI;
let angle=a*b*Math.sin(ang*pi/180)/2;
console.log(`Angle is: ${angle}`);

}
areaOfTriangle(10,20,50);