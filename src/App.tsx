import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import MLink from '@mui/material/Link';
import ProTip from './ProTip';
import Album from './components/Albumts';
import Blog from './components/blog/Blog';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MLink color="inherit" href="https://mui.com/">
        Your Website
      </MLink>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Album/>
    // <Container maxWidth="sm">
    //   <Box sx={{ my: 4 }}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Create React App example with TypeScript
    //     </Typography>
    //     <ProTip />
    //     <Copyright />
    //   </Box>
    // </Container>
  );
}
