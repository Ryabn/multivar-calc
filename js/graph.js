function equation(x, y){
    return Math.cos(x) * Math.sin(y);
}
function calculateEquationReturnData(equation, limits){
    let x = [], y = [], z = [];
    let dimensions = {
        xS: limits.x1,
        xL: limits.x2,
        yS: limits.y1,
        yL: limits.y2,
        zS: 0,
        zL: 0,
    };
    for ( let xCoordinate = limits.x1; xCoordinate < limits.x2; xCoordinate++ ) {
        x[xCoordinate] = [];
        y[xCoordinate] = [];
        z[xCoordinate] = [];
        for( let yCoordinate = limits.y1; yCoordinate < limits.y2; yCoordinate++ ){
            let zCoordinate = equation(xCoordinate, yCoordinate);
            if(zCoordinate > zL)
            x[xCoordinate].push(xCoordinate);
            y[xCoordinate].push(yCoordinate);
            z[xCoordinate].push(zCoordinate);
        }
    }
    graph(z, dimensions);
}
function graph(z, dimensions){
    var data = [{
        z: z,
        type: 'surface', 
        showscale: false
    }];
    var layout = {
        autosize: false,
        width: window.innerWidth,
        height: window.innerHeight,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
        },
        scene: {
            aspectmode: "manual",
            aspectratio: {
                x: 2,
                y: 2,
                z: 2,
            },
            xaxis: {
                color: '#000',
                range: [ dimensions.xS, dimensions.xL ],
            },
            yaxis: {
                range: [ dimensions.yS, dimensions.yL ],
            },
            zaxis: {
                range: [ dimensions.zS, dimensions.zL ],
            }
        }
    };
    Plotly.newPlot( 'graph', data, layout );
}