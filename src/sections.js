const headerInfo = {
  name: "Shehab Elhariry",
  title: "Frontend Developer",
  links: [
    {
      id: 1,
      label: "/shehabelhariry",
      url: "https://www.linkedin.com/in/shehabelhariry/",
      image: "faLinkedin",
    },
    {
      id: 2,
      label: "/shehabelhariry",
      url: "https://github.com/shehabelhariry",
      image: "faGithub",
    },
    {
      id: 3,
      label: "shehab.elhariry@hotmail.com",
      url: "#",
      image: "faInbox",
    },
  ],
};
const sections = [
  {
    title: "Work Experience",
    areaKey: "work_experience",
    entries: [
      {
        title: "Staff SW Engineer ",
        subtitle: "Incorta",
        date: "Jan 2019 - Present",
        description: [
          "Building reusable, scalable components with React js and integrating them into the Incorta product",
          "Building and maintaining geo-spatial support to the Incorta product using mapbox",
          "Building a simple file system to achieve dashboard browsing",
          "Writing integeration tests for the features using react-testing-library",
        ],
      },
      {
        title: "Frontend Developer",
        subtitle: "Badr",
        date: "July 2018 - Dec 2019",
        description: [
          "Supporting 5+ JavaScript projects that vary in business domains",
          "Creating and maintaining projects that vary in technologies (React js, Vue js and jQuery)",
          "Planning and execution of multiple in house websites",
        ],
      },
      {
        title: "Frontend Developer",
        subtitle: "Qowwa",
        date: "July 2018 - Dec 2019",
        description: [
          "Creating an Android app using React Native",
          "Creating an Android app using Apache Cordova",
        ],
      },
      {
        title: "External Instructor",
        subtitle: "ITI",
        date: "Feb 2019 , Feb 2018",
        description: ["Teaching courses on JavaScript ES6 and GIT"],
      },
    ],
  },
  {
    title: "Skills",
    areaKey: "skills",
    measures: [
      { name: "HTML", metric: "Excellent" },
      { name: "CSS", metric: "Excellent" },
      { name: "Sass", metric: "Excellent" },
      { name: "Less", metric: "Excellent" },
      { name: "JavaScript", metric: "Excellent" },
      { name: "React", metric: "Excellent" },
      { name: "Redux", metric: "Excellent" },
      { name: "React Native", metric: "Excellent" },
      { name: "Cordova", metric: "Excellent" },
      { name: "Git", metric: "Excellent" },
      { name: "Vue JS", metric: "Excellent" },
      { name: "jQuery", metric: "Excellent" },
    ],
  },
  {
    title: "Education",
    areaKey: "education",
    entries: [
      {
        title: "Diploma in UI Design",
        subtitle: "ITI (Alexandria)",
        date: "Oct 2016 - Jul 2017",
        description: [
          "Learning the basics of UI design",
          "Learning the foundations of computer science",
        ],
      },
      {
        title: "Bachelor's in Mechanical Engineering",
        subtitle: "Alexandria University",
        date: "Oct 2016 - Jul 2017",
        description: [
          "Learning the foundations of problem solving",
          "Learning technical research",
        ],
      },
    ],
  },
  {
    title: "Languages",
    areaKey: "language",
    measures: [
      { name: "Arabic", metric: "Excellent" },
      { name: "English", metric: "Excellent" },
      { name: "French", metric: "Excellent" },
    ],
  },
];

export { sections, headerInfo };
