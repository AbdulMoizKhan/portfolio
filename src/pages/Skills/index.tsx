import { Container, Stack, Typography } from "@mui/material"

const Skills = () => {
  return (
    <Container sx={{ maxWidth: '1400px !important', paddingTop: '200px' }}>
      <Stack direction={"column"}>
        <Typography variant={"h2"} align="center">My Skills</Typography>
        <Typography variant="body2" align="center"> I am a skilled developer with expertise in front-end and back-end technologies, 
          cloud services, and AI/ML frameworks. I have a proven track record of developing robust web 
          applications, deploying scalable systems, and implementing machine learning models.</Typography>
      </Stack>
    </Container>
  )
}

export default Skills
