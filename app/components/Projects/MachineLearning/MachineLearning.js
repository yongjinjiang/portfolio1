import React from 'react';
import PropTypes from 'prop-types';
// import dayjs from 'dayjs';
// import url from 'url';
import Cell from '../Cell';
//import data from '../../../data/projects';

const MachineLearning = ({ data }) => (
  <div className="machinelearning">
    <div className="link-to" id="machinelearning" />
    <div className="title">
      <h3>2. Machine Learning</h3>
    </div>
  {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
  </div>
);

//MachineLearning.propTypes = {
//  data: PropTypes.shape({
//    title: PropTypes.string.isRequired,
//    link: PropTypes.string.isRequired,
//    image: PropTypes.string.isRequired,
//    date: PropTypes.string.isRequired,
//    desc: PropTypes.string.isRequired,
//  }).isRequired,
//};

export default MachineLearning;
