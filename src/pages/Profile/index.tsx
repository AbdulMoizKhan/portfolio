import { Container, Divider, Stack, Typography } from "@mui/material";
import AlternateTimeline from "../../component/Timeline";

// Define timeline data
const experienceData = [
    {
        title: "Front-End Developer @Gaditek",
        date: "October 2023 - Present | Karachi, Pakistan",
        description: [
            "Developed new features and functionalities on Admin Console using Atomic Design Pattern.",
            "Proficient in React.js and Ant Design (AntD), utilizing them to develop responsive and dynamic web app functionality.",
            "Skilled in Redux for efficient state management, ensuring scalability and maintainability of applications.",
            "Integrating Axios for seamless data fetching and asynchronous operations, enhancing overall user experience.",
            "Created new pages and components within the Next.js framework, adhering to best practices for maintainability and scalability.",
            "Optimized the Error management and Success management using Axios interceptor.",
            "Reviewed and provided feedback on merge requests from other team members, ensuring code quality, adherence to coding standards, and alignment with project objectives."
        ],
        techUsed: ["React.js", "Ant Design (AntD)", "Redux", "Axios", "Next.js"]
    },
    {
        title: "Front-End Developer at XYZ Ltd",
        date: "June 2019 - December 2020",
        description: [
            "Implemented responsive UI components using React and Material-UI.",
            "Worked closely with designers to improve user experience and interface design."
        ],
        techUsed: ["React", "Material-UI"]
    }
];

const educationData = [
    {
        title: "Bachelor of Computer Engineering",
        date: "2019 - 2023 | FAST University, Karachi, Pakistan",
        description: [
            "Completed key courses in Data Structures, Algorithms, Database Systems, Web Development, Applied Machine Learning, Blockchain, and Information Security.",
            "Focused on software development, data structures, and algorithms.",
            "Enhanced practical knowledge and skills through participation in various projects and internships."
        ]
    },
    {
        title: "Advanced-Level (A-Level)",
        date: "2017 - 2019 | The City School, Karachi, Pakistan",
        description: [
            "During A-levels, studied Chemistry, Physics, and Mathematics, initially pursuing a premedical track before transitioning to Computer Engineering for further education.",
        ]
    },
    {
        title: "Ordinary-Level (O-Level)",
        date: "2015 - 2017 | The City School, Karachi, Pakistan",
        description: [
            "During O-levels, I pursued a diverse range of subjects including Mathematics, English, Chemistry, Physics, and Information and Communication Technology (ICT).",
        ]
    }
];

const Profile = () => {
    return (
        <Container sx={{ maxWidth: '1400px !important'}}>
            <Stack direction={"column"} sx={{

            }}>
                <Stack direction={"column"} sx={{ height: '100vh' }} justifyContent={'center'} >
                <Typography variant="h2" align="center" className="c-black">Creativity Powers Progress</Typography>
                    <img src="" alt="" />
                    <Stack>
                        <Typography variant="h3" className="c-black">Biography</Typography>
                        <Typography variant="h6" className="c-black">
                            Hi, I'm Abdul Moiz Khan, a passionate full-stack developer and machine learning enthusiast. 
                            With a solid background in computer science, I specialize in building robust web applications that 
                            blend seamless front-end interfaces with powerful back-end functionality. My expertise spans full-stack 
                            development, front-end design, and machine learning. I excel in creating user-centric digital experiences 
                            and innovative solutions, constantly seeking to push the boundaries of technology. I'm dedicated to continuous 
                            learning and thrive in collaborative environments. My goal is to leverage my skills to drive impactful projects 
                            and advance the field of technology.
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
            <Divider sx={{ margin: '60px 0px', borderColor: 'white' }}></Divider>
            <Stack direction={"column"}>
                <Typography variant="h2" align="center" className="c-black">Experience</Typography>
                <AlternateTimeline timelineData={experienceData} />
            </Stack>
            <Divider sx={{ margin: '60px 0px', borderColor: 'white' }}></Divider>
            <Stack direction={"column"}>
                <Typography variant="h2" align="center" className="c-black">Education & Certifications</Typography>
                <AlternateTimeline timelineData={educationData} />
            </Stack>
        </Container>
    );
}

export default Profile;
