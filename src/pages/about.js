import * as React from 'react'
import Layout from '../components/layout'
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Gatsby v5 example
          </Typography>
        </Box>
      </Container>
    </Layout>
  )
}
export default AboutPage