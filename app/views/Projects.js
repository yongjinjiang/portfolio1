import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import DataVisualization from '../components/Projects/DataVisualization/DataVisualization';
import MachineLearning from '../components/Projects/MachineLearning/MachineLearning';
import Physics from '../components/Projects/Physics/Physics';
import { data1, data2, data3 }  from '../data/projects';


const sections1 = [
  '1. Data Visualization',
  '2. Machine Learning',
  '3. Physics',
];

const Projects = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      {/* <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <p>A selection of projects that I&apos;m not too ashamed of</p>
        </div>
      </header> */}
      <header>
        <div className="title">
          <h2><Link to="/projects">Projects</Link></h2>
          <div className="link-container">
            {sections1.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase().replace(/[.\d\s]/g, '')}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <DataVisualization data={data1} />
      <MachineLearning data={data2} />
      <Physics data={data3} />

      {/* {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))} */}
    </article>
  </Main>
);

export default Projects;
