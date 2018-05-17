const config = {}

config.skills = [
  {
    title: 'Front-End',
    list: ['HTML5 / CSS3', 'Javascript', 'React / React-Native', 'Redux']
  },
  {
    title: 'Back-End',
    list: ['Node', 'Express', 'PostgreSQL', 'Sequelize']
  },
  {
    title: 'UX Design',
    list: ['Interaction Design', 'Wireframing', 'UX Research', 'Info. Architecture']
  }
];

config.devProjects = [
  {
    title: 'TRAVELPEDIA',
    description: 'Travelpedia is a mobile app built with React-Native, Redux, and Expo. It allows users to get information about historical landmarks and architecture through images they take or have stored on their smart phones. Travelpedia utilizes Google Cloud Vision API for image recognition and Wikipedia to retrieve insightful information about the landmark.',
    images:[
      '/assets/travel_mobile.png',
      '/assets/travel-eiffel.png'
    ],
    body: 'How it works: I use Expo\'s built-in asynchronous functions to obtain a base-64 string from an image. I then send the base-64 to Google Cloud Vision API in a Post request - if the image recognition is successful, Google responds with a JSON object which I parse to obtain the name of the landmark within the image. After receiving name of the landmark, I query the Wikipedia API to get a summary description of the landmark. I also built a simpler web app where Users can choose images from their computer. This was built with Node, Express, React, and SCSS.',
    route: 'https://github.com/yynnooot/TravelpediaMobile'
  },
  {
    title: 'CODE COMBAT',
      description: 'Our team noticed that the learning resources available to new programmers were not very engaging. So we wanted to create an application that provides a fun experience for new and seasoned programmers alike. We built CodeCombat, an application where developers can improve their coding skills through solo training challenges, or live coding battles - where Users of similar rank go head-to-head and battle for points and rank.',
      images:[
        '/assets/codecombat-landing.png',
        '/assets/codecombat3.png'
      ],
      body: 'I served as project manager and led UI Development. We utitlized such technologies as React, Redux, Node, Express and PostgreSQL for our database. For Users to type their code, we used Ace Editor, and sent the user-submitted code to our back-end through websockets (Sockets.io). In order to safely run user-submitted code, we utilized VM2 to create a virtual sandbox environment.',
      route: 'http://code-combat.herokuapp.com/'
  }
];

config.uxProjects = [
  {
    title: 'HEARTBEAT',
    description: 'HeartBeat is an application for the Apple Watch. It is designed for patients with pre-existing heart conditions, and allows users to monitor their heart activity while recording any symptoms they may experience. The data collected can then be used by their physicians in providing best possible care.',
    route: '/ux_heartbeat',
    images: [
      {
        original: 'assets/heart1.png',
        thumbnail: 'assets/heart1.png'
      },
      {
        original: 'assets/heart2.png',
        thumbnail: 'assets/heart2.png'
      },
      {
        original: 'assets/heart3.png',
        thumbnail: 'assets/heart3.png'
      },
      {
        original: 'assets/heart4.png',
        thumbnail: 'assets/heart4.png'
      },
      {
        original: 'assets/heart5.png',
        thumbnail: 'assets/heart5.png'
      },
      {
        original: 'assets/heart6.png',
        thumbnail: 'assets/heart6.png'
      },
      {
        original: 'assets/heart7.png',
        thumbnail: 'assets/heart7.png'
      }
    ]
  },
  {
    title: 'HUDDLE INSIGHTS',
    description: 'Huddle Insights, a SaaS platform by Value Stream Labs, is a social data sharing platform. It allows market analysts, consultants, and researchers to join \"huddles\" and share data and insights with other members. Our team was tasked with creating wireframes for the huddle experience.',
    route: '/ux_huddleinsights',
    images: [
      {
        original: 'assets/huddle1.png',
        thumbnail: 'assets/huddle1.png'
      },
      {
        original: 'assets/huddle2.png',
        thumbnail: 'assets/huddle2.png'
      },
      {
        original: 'assets/huddle3.png',
        thumbnail: 'assets/huddle3.png'
      },
      {
        original: 'assets/huddle4.png',
        thumbnail: 'assets/huddle4.png'
      },
      {
        original: 'assets/huddle5.png',
        thumbnail: 'assets/huddle5.png'
      },
      {
        original: 'assets/huddle6.png',
        thumbnail: 'assets/huddle6.png'
      },
      {
        original: 'assets/huddle7.png',
        thumbnail: 'assets/huddle7.png'
      }
    ]
  }
];

module.exports = config;
