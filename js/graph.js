function equation(x, y){
    return x*y*x*y;
}
function calculateEquationReturnData(equation, limits){
    let x = [], y = [], z = [];
    let graphBoundaries = {
        xS: limits.x1,
        xL: limits.x2,
        yS: limits.y1,
        yL: limits.y2,
        zS: 0,
        zL: 0,
    };
    for ( let xCoordinate = limits.x1; xCoordinate <= limits.x2; xCoordinate++ ) {
        x[xCoordinate-limits.x1] = [];
        y[xCoordinate-limits.x1] = [];
        z[xCoordinate-limits.x1] = [];
        for( let yCoordinate = limits.y1; yCoordinate <= limits.y2; yCoordinate++ ){
            let zCoordinate = equation(xCoordinate, yCoordinate);
            if(zCoordinate > graphBoundaries.zL){
                graphBoundaries.zL = zCoordinate;
            }
            if(zCoordinate < graphBoundaries.zS){
                graphBoundaries.zS = zCoordinate;
            }
            x[xCoordinate-limits.x1].push(xCoordinate);
            y[xCoordinate-limits.x1].push(yCoordinate);
            z[xCoordinate-limits.x1].push(zCoordinate);
        }
    }
    //Z Max will be either highest z value or x1 limit 0 depending on which is smaller
    graphBoundaries.zL = graphBoundaries.zL > limits.x2 ? limits.x2 : graphBoundaries.zL;
    graphBoundaries.zS = graphBoundaries.zS < limits.x1 ? limits.x2 : graphBoundaries.zS;
    graph(x, y, z, graphBoundaries);
}

function graph(x, y, z, graphBoundaries){
    var data = [{
        x: x,
        y: y,
        z: z,
        type: 'surface', 
        showscale: true
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
                range: [ graphBoundaries.xS, graphBoundaries.xL ],
            },
            yaxis: {
                range: [ graphBoundaries.yS, graphBoundaries.yL ],
            },
            zaxis: {
                range: [ graphBoundaries.zS, graphBoundaries.zL ],
            }
        }
    };
    Plotly.newPlot( 'graph', data, layout );
}