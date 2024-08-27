import {
    Box,
    Stack,
    SxProps,
    Drawer,
    IconButton,
    Container,
    Button,
    List,
    ListItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import TextButton from "../Buttons/TextButtons";
import logo from '../../assets/moizlogo.png'
const TextLinks = [
    { title: "HOME", id: "/" },
    { title: "PROFILE", id: "/profile" },
    // { title: "", icon: },
    { title: "ABOUT", id: "/about" },
    { title: "SERVICES", id: "/services" },
    { title: "PROJECTS", id: "/projects" },
];

const wrapper: SxProps = {
    position: 'fixed',
    // boxShadow: '0px 4px 40px rgba(0, 0, 0, 0.10)',
    height: { xs: "60px", sm: "75px", md: "90px" },
    // background: 'linear-gradient(90deg, rgba(60.76, 143.20, 194.44, 0.95) 0%, rgba(31.98, 48.95, 59.50, 0.95) 60%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
    // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    width: "100vw",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // zIndex: 1000,
    // position: "relative",
};

// width: 32%;
// display: flex;
// /* flex-direction: row; */
// align-items: center;
// justify-content: center;
const btnWrapper: SxProps = {
    borderRadius: "8px",
    background: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
};

const navbarWrap: SxProps = {
    mb: { md: 0, xs: 2 },
    mt: { md: 0, xs: 1 },
    background: 'linear-gradient(90deg, rgba(60.76, 143.20, 194.44, 0.95) 0%, rgba(31.98, 48.95, 59.50, 0.95) 60%), linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    padding:'30px 60px',
    borderRadius:'40px',
    display: {
        md: "flex",
        xs: "none",
    },
};

const drawerBtn: SxProps = {
    marginLeft: "auto",
    display: {
        md: "none",
        xs: "flex",
    },
    color: "white",
};

const drawerItems: SxProps = {
    // borderBottom: "1px solid #4b4040",
    padding: "15px 20px",
    display: "block",
    textAlign: "center",
};

// const closeBtn = (variant: string | null | undefined): SxProps => {
//   return {
//     color: variant === "light" ? "text.primary" : "text.secondary",
//     "&:hover": { color: "error.main" },
//   };
// };
// const drawerItems: SxProps = {
//   borderBottom: "1px solid #4b4040",
//   padding: "15px 20px",
//   display: "block",
//   textAlign: "center",
// };
const Header = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <>
            <>
                <Box sx={wrapper}>
                    {/* <Container> */}
                    <Stack
                        direction={"row"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        sx={{ height: '100%', width: '70%', pr: { xs: '20px', sm: '30px', md: '100px' }, pl: { xs: 'px', sm: '30px', md: '70px', lg: '100px' } }}
                    >
                        {/* <Box sx={{ scale: { xs: '1', sm: '1.25', md: '1.75' } }}>
                         <img src={logo} alt="" style={{
                            width: '162px',
                            height: '38px',
                            marginTop: '5px',
                            color: 'white',
                        }}/> 
                    </Box> */}

                        <Stack
                            direction={"row"}
                            alignItems={"center"}
                            spacing={5}
                            sx={navbarWrap}
                            className="navbar_main"
                        >
                            {TextLinks?.map((text, index) => (
                                index === 2 ? (
                                    <></>
                                    // <img src={logo}/>
                                ) : <TextButton
                                    title={text?.title}
                                    // hoverColor={"tomato"}
                                    redirectLink={text.id}
                                    key={text.title}
                                />
                            ))}
                        </Stack>

                        <IconButton
                            sx={drawerBtn}
                            size="large"
                            edge="start"
                            aria-label="logo"
                            onClick={toggleDrawer}
                        >
                            <MenuIcon
                            />
                        </IconButton>
                        <Drawer
                            PaperProps={{
                                sx: {
                                    backgroundColor: "white",
                                    width: "100%",
                                },
                            }}
                            anchor="top"
                            open={isDrawerOpen}
                            onClose={() => setIsDrawerOpen(false)}
                        >
                            <Box sx={{ alignSelf: "end" }}>
                                <IconButton
                                    sx={{
                                        margin: "12px 16px 5px 0px",
                                    }}
                                    size="medium"
                                    onClick={toggleDrawer}
                                >
                                    <CloseIcon />
                                </IconButton>
                            </Box>
                            <Box>
                                <Box>
                                    <List>
                                        {TextLinks.map((item, index) => (
                                            <ListItem
                                                sx={drawerItems}
                                                onClick={() => setIsDrawerOpen(false)}
                                                key={index}
                                            >
                                                <TextButton
                                                    type={"dropdown"}
                                                    color={"#000"}
                                                    title={item.title}
                                                    hoverColor={"tomato"}
                                                    redirectLink={item.id}
                                                    key={item.title}
                                                />
                                            </ListItem>
                                        ))}
                                    </List>
                                </Box>
                            </Box>
                        </Drawer>
                    </Stack>
                    {/* </Container> */}
                </Box>
            </>
        </>
    );
}
export default Header;
