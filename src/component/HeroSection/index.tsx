import { Box, Button, Container, Divider, Stack, Typography } from '@mui/material';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import heroimg from '../../assets/herobackground.webp'
import { useState } from 'react';

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  // const skillSet = [
  //   { name: 'Javascript', icon: '', },
  //   { name: 'Express', icon: '', },
  //   { name: 'Next Js', icon: '', },
  //   { name: 'Git', icon: '', },
  //   { name: 'React', icon: '', },
  //   { name: 'Mongodb', icon: '', },
  //   { name: 'Postgres', icon: '', },
  //   { name: 'MySql', icon: '', },
  //   { name: 'Sass', icon: '', },
  //   { name: 'TypeScript', icon: '', },
  // ]

  return (
    <>
      <img src={heroimg} alt="" style={{
        width: '100%', height: '100vh',
        filter: 'grayscale(100%)', zIndex: '-1', position: 'absolute'
      }} />
      <Container sx={{ height: '100vh' }} className='hero'>
        <Stack direction={'column'} sx={{ height: '100%' }} justifyContent={'center'} gap={3}>
          <Typography variant='h2'>Websites Done Right.</Typography>
          <Typography variant='body1'>A full-stack developer based in Karachi, Pakistan, I specialize in
            crafting rich, interactive web applications. With expertise in building projects for both
            small and large businesses, I deliver tailored solutions to meet diverse needs. My extensive experience
            spans various technologies, ensuring robust, scalable, and efficient applications. From concept to
            deployment, I am committed to delivering high-quality code and exceptional user experiences.
            Let's bring your vision to life with innovative and effective web solutions, designed to drive engagement and success.</Typography>
          <Stack direction={'row'} gap={2}>
            <Button className='button ' sx={{ backgroundColor: 'rgb(5, 31, 78)' }} endIcon={<KeyboardArrowRightIcon />} >I need a Website</Button>
            <Button
              className='button'
              sx={{
                backgroundColor: hovered ? 'white' : 'rgb(5, 31, 78)',
                color: hovered ? 'rgb(5, 31, 78)' : 'white',
                transition: 'all 0.3s ease',
              }}
              endIcon={hovered === false ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              {hovered ? 'Download CV' : "I’m looking to hire"}
            </Button>
          </Stack>
        </Stack>
      </Container>
      {/* <Divider sx={{ margin: '60px 0px', borderColor: 'white' }}></Divider>
      <Box sx={{ backgroundColor: 'rgb(5, 31, 78)', height: '600px' }}>
        <Typography variant='h3' sx={{ paddingTop: '50px', textAlign: 'center', color: 'white' }}>Skills</Typography>
        <Typography variant='h5' sx={{ textAlign: 'center', color: 'white' }}>The skills, tools and technologies I am really good at:</Typography>
        <Stack></Stack>
      </Box> */}
    </>
  );
};

export default HeroSection