let STANDARD_LIMIT = 10;

class equation{
    constructor(equationFunction, x1, x2, y1, y2){
        this.equationFunction = equationFunction;
        this.limits.x1 = x1;
        this.limits.x2 = x2;
        this.limits.y1 = y1;
        this.limits.y2 = y2;
        this.calculateEquationReturnData(this.equationFunction);
    }

    calculateEquationReturnData(equation){
        let x = [], y = [], z = [];
        for ( let xCo = this.limits.x1; xCo <= this.limits.x2; xCo++ ) {
            x[xCo-this.limits.x1] = [];
            y[xCo-this.limits.x1] = [];
            z[xCo-this.limits.x1] = [];
            for( let yCo = this.limits.y1; yCo <= this.limits.y2; yCo++ ){
                let zCo = equation(xCo, yCo);
                if(zCo > this.limits.z2){
                    this.limits.z2 = zCo;
                }
                if(zCo < this.limits.z1){
                    this.limits.z1 = zCo;
                }
                x[xCo-this.limits.x1].push(xCo);
                y[xCo-this.limits.x1].push(yCo);
                z[xCo-this.limits.x1].push(zCo);
            }
        }
        //Z Max will be either highest z value or x1 limit 0 depending on which is smaller
        this.limits.z2 = this.limits.z2 > this.limits.x2 ? this.limits.x2 : this.limits.z2;
        this.limits.z1 = this.limits.z1 < this.limits.x1 ? this.limits.x2 : this.limits.z1;
        
        /** @see graph.js */
        // graph(x, y, z, this.limits);
    }
}
equation.limits = {
    x1: -STANDARD_LIMIT,
    x2: STANDARD_LIMIT,
    y1: -STANDARD_LIMIT,
    y2: STANDARD_LIMIT,
    z1: 0,
    z2: 0,
}
equation.prototype.equationFunction = function(x, y){
    return 0;
};