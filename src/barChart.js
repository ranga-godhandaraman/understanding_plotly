import React from "react";
import Plot from "react-plotly.js";

class BarChart extends React.Component {
    render() {
        return (
            <div>
                <Plot
                    var data={[
                        {
                            x: ['giraffes', 'orangutans', 'monkeys'],
                            y: [20, 14, 23],
                            type: 'bar'
                        }
                    ]}
                />
            </div>
        )
    }
}
export default BarChart;