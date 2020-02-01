// TODO Add a couple lines about each project
const data1 = [
  {
    title: 'Bellybutton diversity',
    subtitle: 'NOVEMBER, 2018',
    // link: '/projects/D3-Journalism/',
    link: 'https://belly-button-biodiversity-j.herokuapp.com/',
    image: '/images/projects/bellybutton.png',
    date: '2018-10-20',
    desc: 'Dashboard for plotting belly button biodiversity.  '
      + 'Three complementary plots -- a pie plot, a scatter plot, and a gauge chart -- are brought together for enhancing the visualization effect.'
      // + ' Plotly.js  and d3.js are used to make the visualizations. ',
  },
  {
    title: 'Real global Earthquake',
    subtitle: 'NOVEMBER, 2018',
    // link: '/projects/D3-Journalism/',
    link: 'https://yongjinjiang.github.io/Mapping-earthquake/',
    image: '/images/projects/earthquake.jpg',
    date: '2018-12-20',
    desc: 'Dashboard for Visualization of recent 7-days earthquake data (together with data for tectonic plates) from  United States Geological Survey(USGS). '
    + 'Tools used: Leaflet.js,GeoJSON, and d3.js.',
  },
  {
    title: 'D3 Journalism',
    subtitle: 'NOVEMBER, 2018',
    // link: '/projects/D3-Journalism/',
    link: 'https://yongjinjiang.github.io/D3-DataJournalism/',
    image: '/images/projects/D3_Journalism.png',
    date: '2018-11-20',
    desc: 'A data tool for series of feature stories '
      + 'about the health risks facing particular demographics. The dataset used is obtained from the U.S. Census Bureau and the Behavioral Risk Factor Surveillance System. '
      + 'Tools used: D3.js,d3-tip, Bootstrap,Popper.js,jQuery.js,etc.',
  },
  {
    title: 'Mars Exploration',
    subtitle: 'NOVEMBER, 2018',
    // link: '/projects/D3-Journalism/',
    link: 'https://mars--scraping.herokuapp.com/',
    image: '/images/projects/mars_scrape.png',
    date: '2018-11-10',
    desc: 'Scrapes various websites for data related to the Mission to Mars, '
      + 'and displays the information in a single HTML page.'
      + ' The tools used in this project: Requests, Beautiful Soup, Selenium, '
      + 'PyMongo, Flask. Deployed on Heroku.',
  },
];


// TODO Add a couple lines about each project
const data2 = [
  {
    title: 'Deep Reinforcement learning',
    subtitle: 'NOVEMBER, 2019',
    // link: '/projects/D3-Journalism/',
    link: 'https://github.com/yongjinjiang/ReinformentLearning-QuantumWellStatePreparation/',
    image: '/images/projects/Reinforce.jpeg',
    date: '2019-11-20',
    desc: 'Two reinforcement algorithms, Deep Q-learning (DQL) and deep deterministic policy gradient (DDPG) are used to solve'
      + ' a problem from quantum mechanics, i.e., finding the time-dependent protocal to drive a system into a particular quantum state. ',
  },
  {
    title: 'Feature selection for random dataset on DAG',
    subtitle: 'September, 2019',
    // link: '/projects/D3-Journalism/',
    link: 'https://github.com/yongjinjiang/DirectedAcyclicGraph',
    image: '/images/projects/DAG1.jpeg',
    date: '2019-9-20',
    desc: 'The minimum feature set for an arbitrarily chosen target variable in simulated data sets which are randomly '
    + 'generated in directed acyclic graphs (also known as Bayesian network). Some generic rules to determine the robust feature subset is found and discussed',
  },
  {
    title: 'Data format translation: RNN with Attention',
    subtitle: 'NOVEMBER, 2019',
    // link: '/projects/D3-Journalism/',
    link: 'https://github.com/yongjinjiang/DataFormatTranslation',
    image: '/images/projects/attn-model.png',
    date: '2018-11-20',
    desc: 'A Neural Machine Translation (NMT) with the attention mechanism is built. This model was trained from scratch '
       + 'with a training set of 10000 pairs of (human readable date, the machine-readable date).  ',
  },

  {
    title: 'Style transfer: generating an artistic picture',
    subtitle: 'January, 2019',
    // link: '/projects/D3-Journalism/',
    link: 'https://github.com/yongjinjiang/Neural-Style-Transfer',
    image: '/images/projects/content_plus_style.jpeg',
    date: '2019-1-20',
    desc: ' A "content" image  and a "style" image, is mixed into a "generated" image by the CNN neural network. A hybrid cost function is defined to realize the style transfer. ',
  },

];

const data3 = [
  {
    title: 'Tunable optical properties of multilayer black phosphorus thin films',
    subtitle: 'NOVEMBER, 2019',
    link: '/BP.pdf',
    image: '/images/projects/BP.jpeg',
    date: '2014-8-27',
    desc: 'An effecive model was proposed to describe few-layer BP films, '
    + 'which was first realized in early 2014. Based on this model, the optical conductivity '
    + 'tensor was numerically calculated. The predicted optical data was analyzed extensively as'
    + ' a function of different features such as'
    + ' thickness, doping, and light polarization. (Reference: Phys. Rev. B 90, 075434(2014). 457 Citations) ',
  },
  {
    title: 'A proposal for pure valley current generation in graphene',
    subtitle: '2013-1-23',
    // link: '/projects/D3-Journalism/',
    link: '/Pumping.pdf',
    image: '/images/projects/pumping.jpeg',
    date: '2013-1-23',
    desc: 'There are two “flavors” (or, “valleys”) of electrons in graphene(i.e., the single layer of graphite), corresponding to two regions in momentum space. '
    + 'Can we create a state in which electrons with different "flavor" flow in opposite direction? This is a much sought for goal '
    + ' in graphene research community.  Our proposal was a simple pumping scheme based on the suspended graphene nanoelectrical-mechanical system! '
    + 'A hidden symmetry in the model for suspended graphene was revealed and leveraged to prove the symmetry relation of the pumped current.'
    + ' Reference: Phys. Rev. Lett. 110, 046601(2013). 171 citations.',
  },
  {
    title: 'Unconventional superconductivity in graphene',
    subtitle: 'May, 2008',
    link: '/d+id.pdf',
    image: '/images/projects/d+id.jpeg',
    date: '2008-5-20',
    desc: 'The point group symmetry of graphene was used to systematically analyze possible superconducting states in graphene'
       + ' with local spin singlet pairing order. A special state, d1+id2 state was studied in detail, especially, its Andreev conductivity was'
       + 'calculated and analyzed with respect to features such as doping, pairing strength. '
       + ' Reference: Physical Review B 77 (23), 235420(2008). 57 citations.',
  },
  {
    title: 'scattering wave approach to quantum transport',
    subtitle: 'NOVEMBER, 2006',
    link: '/ScatteringWave.pdf',
    image: '/images/projects/SolveScatteringWave.jpeg',
    date: '2006-8-1',
    desc: 'A set of linear equations was derived to rigorously solve the quantum scattering wave function in a multi-terminal lattice model. '
      + 'Based on this scattering wave,  various quantum transport properties can be calcuated.  This approach was succesfully applied to study '
      + 'the edge spin-orbital coupled(ESO) model and predicted that ESO model can have some experimental significance. '
      + ' Reference: Physical Review B 74 (7), 075302(2006). 49 citations.',
  },
];

export { data1, data2, data3 };
