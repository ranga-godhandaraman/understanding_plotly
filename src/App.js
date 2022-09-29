import React from 'react';
import './App.css';
// import Plotly from 'react-plotly.js'
import Plot from 'react-plotly.js';
import BarChart from './barChart';


class App extends React.Component {
  render() {
    return (
      <div>
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'grey'},
          },
          { x: [1, 2, 3], 
            y: [2, 5, 3],
            type: 'scatter',
            marker:{color:'blue'}
          },
        ]}
        layout={ {width: 600, height: 500, title: 'Plots'} }
      />

      <BarChart/>
      </div>
    );
  }
}
export default App;
