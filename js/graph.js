class plot{
    constructor(x, y, z, limits){
        this.layout = {
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
                    range: [ -STANDARD_LIMIT, STANDARD_LIMIT ],
                },
                yaxis: {
                    range: [ -STANDARD_LIMIT, STANDARD_LIMIT ],
                },
                zaxis: {
                    range: [ -STANDARD_LIMIT, STANDARD_LIMIT ],
                }
            }
        };
        Plotly.newPlot( 'graph', [{ x:[0, 1, 2, 3 ], y: [0, 1, 2, 3], z:[0, 0, 0, 0], type: 'surface', 
        showscale: true}], this.layout );
    }
    graph(x, y, z, limits){
        this.plots.push([{
            // x: x,
            // y: y,
            // z: z,
            type: 'surface', 
            showscale: true
        }]);
        //change up limits if needed
        Plotly.restyle( 'graph', data, layout );
    }
}

