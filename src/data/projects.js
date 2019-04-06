import React from "react"
export const projects = [
  {
    id: "coment",
    category: "fullstack",
    title: "Co/Ment",
    description: "Mentor/Mentee matching service",
    staticImage: "icons/coment_static.png",
    hoverImage: "icons/coment.gif",
    overlay: true,
    overlayTitle: "Co/Ment",
    overlayDescription: "A group project produced after completing FreeCodeCamp, this service is intended to support the community by connecting new coders with more experienced programmers for mentoring sessions.  A team of 3 coders collaborated remotely over 2 months to produce this project using React, Redux and Express.",
    projectURL: "https://coment.glitch.me",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/ursamajors/coment",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "Redux", "MongoDB", "Express"]
  },{
    id: "chat",
    category: "fullstack",
    title: "Serverless Chat",
    description: "A Serverless Chat App",
    staticImage: "icons/chat_static.png",
    hoverImage: "icons/chat_static.png",
    overlay: true,
    overlayTitle: "Serverless Chat",
    overlayDescription: "A chat service built in 1 day for a coding challenge, so styling and functionality is very basic. The service is built on AWS using Appsync, Dynamo and Cognito.  Notably the entire service can be deployed through serverless, including the appsync components.",
    projectURL: "https://chat.genest.io",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/chat-client",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "AWS", "Serverless", "Cognito", "AppSync", "GraphQL"]
  },{
    id: "fixation",
    category: "fullstack",
    title: "Fixation - A Pinterest Clone",
    description: "Full Stack - Foundation 6 + Express/Passport/MongoD",
    staticImage: "icons/fixation_static.png",
    hoverImage: "icons/fixation.gif",
    overlay: true,
    overlayTitle: "Fixation",
    overlayDescription: <span>A Pinterest clone built with Foundation 6 for a mobile-first design.  Social login on the client is done with Hello.js library; Authentication on the server is done with JWT.  The Masonry layout was built with <a href="https://github.com/eiriklv/react-masonry-component" target="_blank">react-masonry-component</a></span>,
    projectURL: "https://fixation.glitch.me",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/fixation",
    repositoryURLText: "Visit the github repo",
    skills: ["Foundation 6", "Hello.js", "react-masonry-component", "Express", "JWT", "Passport"]
  },{
    id: "stockwatch",
    category: "fullstack",
    title: "StockWatch - An Interactive Stock Tracker",
    description: "Full Stack - Foundation/D3 + Express/Websockets",
    staticImage: "icons/stockwatch_static.png",
    hoverImage: "icons/stockwatch.gif",
    overlay: true,
    overlayTitle: "Stockwatch",
    overlayDescription: "An interactive stock tracking app built with D3 and Foundation 6 for a mobile-first design.  The client and server use web sockets to synch the data across multiple clients.",
    projectURL: "https://dg-stockwatch.glitch.me",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/stockwatch",
    repositoryURLText: "Visit the github repo",
    skills: ["D3.js", "WebSockets", "Foundation 6", "Express", "CSS"]
  },
  // {
  //   id: "bookshelf",
  //   category: "fullstack",
  //   title: "BookShelf - A book trading community",
  //   description: "Full Stack - Foundation/React + Express/MongoDB",
  //   staticImage: "icons/bookshelf_static.png",
  //   hoverImage: "icons/bookshelf.gif",
  //   overlay: true,
  //   overlayTitle: "BookShelf",
  //   overlayDescription: "An interactive book trading app built with React and Foundation 6.  The back end is Express/MongoDB featuring Passport.js for local login.",
  //   projectURL: "https://dg-bookclub.glitch.me",
  //   projectURLText: "Visit the live project page",
  //   repositoryURL: "https://github.com/genestd/bookclub",
  //   repositoryURLText: "Visit the github repo",
  //   skills: ["React", "Redux", "MongoDB", "Express", "Passport", "Foundation 6"]
  // },
  {
    id: "rogue",
    category: "react",
    title: "Dark Wizard - A dungeon crawler game",
    description: "React/redux + HTML5 canvas",
    staticImage: "icons/roguelike_static.png",
    hoverImage: "icons/roguelike.gif",
    overlay: true,
    overlayTitle: "Dungeon Crawler Game",
    overlayDescription: `This is a roguelike dungeon crawler game created using HTML5 canvas, with React/redux to manage rendering and state.
    The dungeons are procedurally generated with a goal of keeping the rooms close together while maintaining randomness.
    All of the game icons are simple paths made in canvas.  The darkness effect is done using multiple layers.`,
    projectURL: "https://genestd.github.io/darkwizard",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/darkwizard",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "Redux", "Canvas", "HTML", "CSS", "SVG"]
  },{
    id: "dataviz",
    category: "react",
    title: "D3 Chart Gallery",
    description: "D3.js + React/redux",
    staticImage: "icons/dataviz_static.png",
    hoverImage: "icons/dataviz.gif",
    overlay: true,
    overlayTitle: "D3 Visualization Gallery",
    overlayDescription: `A carousel of D3 visualizations created for FreeCodeCamp's Data Visualization challenges.
    It contains a barchart, scatterplot, force-directed graph, Mercator projection map and a heatmap.
    In addition to learning D3, I created an API to fetch data and learned about GEOJSON mapping data.
    D3 was my favorite technology to learn and I am constantly amazed by its scope and versatility.`,
    projectURL: "https://genestd.github.io/dataviz",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/dataviz",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "Redux", "D3.js", "REST API", "HTML", "CSS" ]
  },{
    id: "gol",
    category: "react",
    title: "Conway's Game of Life",
    description: `A cell division simulation
    React/redux + grommet.js`,
    staticImage: "icons/gol.png",
    hoverImage: "icons/gol.gif",
    overlay: true,
    overlayTitle: "Conway's Game of Life",
    overlayDescription: `The goal was to simulate Conway's Game of Life - a sort of cellular automation -  in a React app.
    The rules of the "game" are detailed in the app.  I used the Grommet framework to give it a clean design.`,
    projectURL: "https://genestd.github.io/gameoflife",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/gameoflife",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "Redux", "Grommet.js", "HTML", "CSS"]
  },{
    id: "nflviz",
    category: "react",
    title: "NFL Custom Charts",
    description: "React/redux + D3.js",
    staticImage: "icons/nflviz_static.png",
    hoverImage: "icons/nflviz.gif",
    overlay: true,
    overlayTitle: "NFL Custom Charts",
    overlayDescription: <span>I had an idea to chart some different variables from the 2016 NFL season.
    The data was downloaded from <a href='www.profootballreference.com' target='_blank'>profootballreference.com.</a>
    You can find some interesting correlations, such as the effect of average starting position on wins.</span>,
    projectURL: "https://genestd.github.io/nflviz",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/nflviz",
    repositoryURLText: "Visit the github repo",
    skills: ["React", "Redux", "D3.js", "HTML", "CSS"]
  },{
    id: "weather",
    category: "html",
    title: "Instant Weather",
    description: "HTML5/CSS3 + Dark Sky weather API",
    staticImage: "icons/weather_static.png",
    hoverImage: "icons/weather_static.png",
    overlay: true,
    overlayTitle: "Local Weather",
    overlayDescription: <span>The goal of this project was to create a page to display the user's local weather (using geolocation).
    If geolocation access is enabled by the browser, it looks up the user's location using the google maps API,
    otherwise it defaults to Alcatraz, CA. The coordinates are passed to the Dark Sky weather API and the resulting JSON object is parsed and displayed using jQuery.
    Weather icons were sourced from https://erikflowers.github.io/weather-icons/.</span>,
    projectURL: "https://genestd.github.io/weather",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/weather",
    repositoryURLText: "Visit the github repo",
    skills: ["HTML", "CSS", "jQuery", "Dark Sky API", "geolocation"]
  },{
    id: "api",
    category: "html",
    title: "API Collection",
    description: "Express.js server hub for API endpoints",
    staticImage: "icons/api_static.png",
    hoverImage: "icons/api_static.png",
    overlay: true,
    overlayTitle: "API Collection",
    overlayDescription: `Initially created this project to make a proxy API request to the St. Louis Fed FRED API to fetch GDP data for D3.
    I added some other endpoints and landing pages to supplement the FreeCodeCamp API/Microservice challenges`,
    projectURL: "https://dg-api.glitch.me/",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://dg-api.glitch.me/",
    repositoryURLText: "Visit the glitch repo",
    skills: ["Node.js", "Express", "MongoDB", "REST API", "HTML", "CSS"]
  },{
    id: "simon",
    category: "html",
    title: "Simon Clone",
    description: "HTML5/CSS3 + web audio API",
    staticImage: "icons/simon_static.png",
    hoverImage: "icons/simon_static.png",
    overlay: true,
    overlayTitle: "Simon Clone",
    overlayDescription: `The objective of this project was to replicate the game Simon.
    I initially thought of making the board an SVG and animating the paths, but ultimately used plain CSS which was surprisingly simple.
    The buttons are animated using the velocity.js package.
    Sounds are created through the HTML5 Web Audio API.  Get Simon to count to 20 to win the game!`,
    projectURL: "https://genestd.github.io/simon",
    projectURLText: "Visit the live project page",
    repositoryURL: "https://github.com/genestd/simon",
    repositoryURLText: "Visit the github repo",
    skills: ["HTML", "CSS", "Velocity.js", "jQuery", "Web Audio API"]
  },{
    id: "more",
    category: "html",
    title: <a href="https://github.com/genestd" target="_blank">View More Projects</a>,
    description: "Check out more of my projects at Github",
    staticImage: "icons/github_static.png",
    hoverImage: "icons/github_static.png",
    overlay: false,
    overlayTitle: "",
    overlayDescription: ``,
    projectURL: "",
    projectURLText: "",
    repositoryURL: "",
    repositoryURLText: "",
    skills: []
  }
]
