let equationArray = [];
let graphArea;

let inputEquation = function(x, y){
    return x*x*y*y;
}
function load(){
    graphArea = new plot();
    // addEquation(inputEquation);
    
}
function addEquation(inputEquation){

    equationArray.push(new equation(inputEquation, -10, 10, -10, 10));
}