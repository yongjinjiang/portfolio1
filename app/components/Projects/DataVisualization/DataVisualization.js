import React from 'react';
import PropTypes from 'prop-types';
import Cell from '../Cell';

const DataVisualization = ({ data }) => (
  <div className="datavisualization">
    <div className="link-to" id="datavisualization" />
    <div className="title">
      <h3>1. Data Visualization </h3>
    </div>
    {data.map((project) => (
      <Cell
        data={project}
        key={project.title}
      />
    ))}
  </div>
);

DataVisualization.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default DataVisualization;
