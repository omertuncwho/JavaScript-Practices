function heronFormula (a,b,c){

let corners = (a+b+c)/2;
let area = (corners*(corners-a)*(corners-b)*(corners-c)**(1/2));
console.log(`Area of the Triangle is: ${area}`);

}
heronFormula(5,12,13);