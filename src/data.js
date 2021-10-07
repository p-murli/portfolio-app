import expense_dark from "./assets/images/expense_dark.jpg";
import pathfinder from "./assets/images/pathfinder.jpg";

const skillsList = [
    { title: "Python", value: 80 },
    { title: "Javascript", value: 70 },
    { title: "ReactJS", value: 70 },
    { title: "C++", value: 70 },
    { title: "Git", value: 70 },
];
const projectList = [
    {
        id: 1,
        title: "Expense Tracker",
        technologies: ["React JS", "Javascript", "HTML/CSS"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: expense_dark,
        long_description: "An application to track your expenses by entering your income and expense items. Shows the current balance and the list of transactions entered. Also has dark mode :)",
        short_description: "Expense Tracker Web App made with Javascript and ReactJS."
    },
    {
        id: 2,
        title: "Pathfinding Visualizer",
        technologies: ["Python", "Tkinter", "PyGame"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: pathfinder,
        long_description: "Built an interactive grid-based Path Finding Visualizer in Python using PyGame with ability to add obstacles and create random mazes. Built functionality to visualize algorithms like A* Search, Djikstra’s Algorithm, Breadth First Search on the interactive grid.",
        short_description: "Pathfinding Visualizer in Python using Pygame and Tkinter."
    },
    // {
    //     id: 3,
    //     title: "Burpees.io",
    //     technologies: ["React JS", "Node JS", "MongoDB"],
    //     backgroundImage:
    //         "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
    //     frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
    //     description: ""
    // },
];

const experienceList = [
    {
        id: 0,
        company: "Oracle",
        designation: "Software Engineer Intern",
        duration: "June 2021 - July 2021",
        description: "Worked in the Oracle Cloud Infrastructure Security Team. Developed an internal SPOG (Single Pane of Glass) solution based on the OCI Logging Service for logs management and retrieval. Analysed an existing security detection and suggested additional filters to improve the detection fidelity without inducing additional noise.",
        links: {
            website: "https://www.oracle.com/index.html",
        },
    },
    {
        id: 1,
        company: "Khyateh Consulting (finiteloop.io)",
        designation: "Summer Intern",
        duration: "May 2019 - July 2019",
        description: "Implemented Compression algorithms using Discrete Wavelet Transforms. Achieved a compression ratio of >50% for both 1-dimensional Signals and 2-dimensional GrayScale and Coloured images.",
        links: {
            website: "https://finiteloop.io/"
        },
    },
    // {
    //     id: 2,
    //     company: "vapoter.tn",
    //     links: {
    //         instagram: "https://www.instagram.com/vapoter.tn/",
    //     },
    // },
];

export { skillsList, projectList, experienceList };
