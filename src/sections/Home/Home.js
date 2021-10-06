import React, { useContext, useEffect } from "react";
import { Typography, Button, makeStyles } from "@material-ui/core";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";
import HomeContainer from "../../containers/HomeContainer";
import loaderContext from "../../contexts/loaderContext";

const Home = () => {
    const classes = useStyles();
    const { isLoading } = useContext(loaderContext);
    const controls = useAnimation();

    useEffect(() => {
        if (!isLoading) {
            controls.start((i) => ({
                y: 0,
                opacity: 1,
                transition: { delay: i * 0.1 + 1.2 },
            }));
        } else {
            controls.start({ opacity: 0, y: 5 });
        }
    }, [isLoading, controls]);

    return (
        <HomeContainer id="home">
            <div>
                <Typography
                    component={motion.div}
                    animate={controls}
                    custom={0}
                    color="primary"
                    variant="h5"
                    style={{ marginBottom: "0px" }}
                >
                    Hi
                    <motion.div
                        style={{ display: "inline-block" }}
                        animate={{ rotate: [50, 90, 50] }}
                        transition={{ repeat: Infinity, duration: 1.4, repeatDelay: 0.7 }}
                    >
                        👋
                    </motion.div>
                    , I'm
                </Typography>
                <motion.div animate={controls} custom={1}>
                    <Typography 
                        animate={controls} 
                        variant="h2" 
                        color="white"
                    >
                        PADMANABHAN MURLI
                    </Typography>
                </motion.div>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={2}
                    variant="h2"
                    color="secondary"
                    className={classes.subTitle}
                >
                    I like to build stuff.
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={3}
                    variant="body2"
                    color="initial"
                    style={{ marginBottom: "0" }}
                >
                    Software Engineer
                </Typography>
                <Typography
                    component={motion.p}
                    animate={controls}
                    custom={4}
                    variant="body1"
                    color="initial"
                    style={{ marginBottom: "30px" }}
                >
                    Based in Bangalore, India.
                </Typography>
                <motion.div animate={controls} custom={5}>
                    <Button
                        component={Link}
                        spy
                        smooth
                        offset={0}
                        duration={500}
                        to="contact"
                        variant="outlined"
                        color="primary"
                        size="large"
                    >
                        Get in touch
                    </Button>
                </motion.div>
            </div>
        </HomeContainer>
    );
};

const useStyles = makeStyles((theme) => ({
    subTitle: {
        marginBottom: "16px",
        fontSize: "75px",
        [theme.breakpoints.down("sm")]: {
            fontSize: "45px",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "35px",
        },
    },
}));

export default Home;
