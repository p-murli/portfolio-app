import React from "react";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-scroll";

const Logo = (props) => {
    const classes = useStyles();
    return (
        <Link spy smooth duration={500} offset={-70} to="home" className={classes.root}>
            {/* <Mehdibha {...props} /> */}
            Padmanabhan Murli
        </Link>
    );
};

const useStyles = makeStyles((theme) => ({
    root: {
        cursor: "pointer",
    },
}));

export default Logo;
