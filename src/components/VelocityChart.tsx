import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const VelocityChart = ({ data }: any) => {
  const d3Container = useRef(null);

//   useEffect(() => {
//     if (data && d3Container.current) {
//       const svg = d3.select(d3Container.current);

//       // Imposta le dimensioni del grafico
//       const width = 400;
//       const height = 200;
//       svg.attr('width', width).attr('height', height);

      
//       // Imposta le scale
//       const xScale = d3.scaleLinear()
      
//         .domain(d3.extent(data, d => d.time))  // d.time è il timestamp
//         .range([0, width]);

//       const yScale = d3.scaleLinear()
//         .domain([0, d3.max(data, d => d.velocity)])  // d.velocity è la velocità
//         .range([height, 0]);

//       // Disegna gli assi
//       svg.append('g')
//         .call(d3.axisBottom(xScale))
//         .attr('transform', `translate(0, ${height})`);

//       svg.append('g')
//         .call(d3.axisLeft(yScale));

//       // Disegna la linea del grafico
//       const line = d3.line()
//         .x(d => xScale(d.time))
//         .y(d => yScale(d.velocity));

//       svg.append('path')
//         .datum(data)
//         .attr('fill', 'none')
//         .attr('stroke', 'blue')
//         .attr('stroke-width', 2)
//         .attr('d', line);
//     }
//   }, [data]);

  return (
    <svg ref={d3Container}></svg>
  );
};

export default VelocityChart;