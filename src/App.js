import React from 'react';
import './App.css';
// import Plotly from 'react-plotly.js'
import Plot from 'react-plotly.js';


class App extends React.Component {
  render() {
    return (
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+markers',
            marker: {color: 'grey'},
          },
          {type: 'scatter', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 600, height: 500, title: 'Plots'} }
      />
    );
  }
}
export default App;
