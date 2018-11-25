function graph(equation){
    let x = [], y = [], z = [];
    for ( let xCoordinate = 0; xCoordinate < 30; xCoordinate++ ) {
        for( let yCoordinate = 0; yCoordinate < 30; yCoordinate++ ){
            x.push(xCoordinate);
            y.push(yCoordinate);
            z.push(x+y);
        }
    }
    var data = [{
        x: x,
        y: y,
        z: z,
        type: 'surface', 
    }];
    var layout = {
        autosize: true,
        width: window.innerWidth,
        height: window.innerHeight,
        margin: {
            l: 80,
            r: 80,
            b: 80,
            t: 20,
        },
        fill: "#444",
    };
    Plotly.newPlot( 'graph', data, layout );
}