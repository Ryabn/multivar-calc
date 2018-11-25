function graph(equation){
    let x = [], y = [], z = [];
    for ( let xCoordinate = 0; xCoordinate < 10; xCoordinate++ ) {
        x[xCoordinate] = [];
        y[xCoordinate] = [];
        z[xCoordinate] = [];
        for( let yCoordinate = 0; yCoordinate < 10; yCoordinate++ ){
            x[xCoordinate].push(xCoordinate);
            y[xCoordinate].push(yCoordinate);
            z[xCoordinate].push(xCoordinate*xCoordinate+yCoordinate);
            console.log(`(${x[xCoordinate][yCoordinate]}, ${y[xCoordinate][yCoordinate]}, ${z[xCoordinate][yCoordinate]})`);
        }
    }
    z.forEach(e =>{
        console.log(e);
    })
    var data = [{
        z: z,
        type: 'surface', 
        showscale: false
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