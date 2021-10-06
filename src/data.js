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
        title: "Tunflix",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://cdn.cbeditz.com/cbeditz/preview/black-red-gradient-background-wallpaper-74-11614352798fbqrv1wpuv.jpg",
        frontImage: "https://i.ibb.co/L0F7mKX/tunflix.png",
    },
    {
        id: 2,
        title: "Code Hub",
        technologies: ["React JS"],
        backgroundImage:
            "https://img.freepik.com/free-vector/dark-gradient-background-with-copy-space_53876-99548.jpg?size=626&ext=jpg&ga=GA1.2.2102900112.1628985600",
        frontImage: "https://i.ibb.co/zNMJFTW/Webp-net-resizeimage.png",
    },
    {
        id: 3,
        title: "Burpees.io",
        technologies: ["React JS", "Node JS", "MongoDB"],
        backgroundImage:
            "https://media.istockphoto.com/vectors/abstract-purple-vector-background-with-stripes-vector-id972475894?k=6&m=972475894&s=612x612&w=0&h=99AirGMOb64N2-1ZSMYRjEBp2USrAdzXUGzQMh5o6Js=",
        frontImage: "https://themes-backend.material-ui.com/wp-content/uploads/2021/05/01_preview.jpg",
    },
];

const experienceList = [
    {
        id: 0,
        company: "Oracle",
        designation: "Software Engineer Intern",
        duration: "June 2021 - July 2021",
        description: "sample exp",
        links: {
            website: "https://www.oracle.com/index.html",
        },
    },
    {
        id: 1,
        company: "Khyateh Consulting (finiteloop.io)",
        designation: "Summer Intern",
        duration: "May 2019 - July 2019",
        description: "sample exp",
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
