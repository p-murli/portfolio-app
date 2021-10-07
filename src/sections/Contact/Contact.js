import React from "react";
import SectionContainer from "../../containers/SectionContainer";
// import MessageBox from "../../components/MessageBox/MessageBox";
import { Button, Box, ButtonGroup } from "@material-ui/core";
// import { Stack } from '@mui/material/Stack';

const Contact = () => {
  return (
    <SectionContainer id="contact" title="Contact" maxWidth="sm" reverse>
      {/* <MessageBox /> */}
      <Box justifyContent="center" display="flex" >
      <ButtonGroup fullWidth orientation='vertical' size="large" display="flex" justifyContent="center" mt={2} >
        <Button
            // className={classes.submitBtn}
            size="large"
            type="submit"
            // fullWidth
            variant="text"
            color="primary"
            href="https://www.linkedin.com/in/padmanabhan-murli-609927183/"
            
        >
            Get in Touch on LinkedIn
        </Button>
        <Button
            // className={classes.submitBtn}
            size="large"
            type="submit"
            // fullWidth
            variant="text"
            color="primary"
            href="mailto:pmurli5@outlook.com"
        >
            Get in Touch by Email
        </Button>
      </ButtonGroup>
      </Box>
    </SectionContainer>
  );
};

export default Contact;
