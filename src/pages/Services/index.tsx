import { Container, Stack, Typography } from "@mui/material";
import { BsCloudFog2Fill } from "react-icons/bs";
import { CgFigma } from "react-icons/cg";
import { SiGooglemybusiness, SiHiveBlockchain } from "react-icons/si";
import { TbSeo } from "react-icons/tb";
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import { CardsService } from "../../component/Card";

const sliderArr = [
  {
    title: "Web Design & Development",
    description: 'Transform your ideas into stunning websites tailored to your needs. Our expert team of designers and developers will ensure your website stands out in the digital landscape.',
    imageUrl: slider3,
  },
  {
    title: "Software Testing Service",
    description: "Ensure the quality and reliability of your software with our comprehensive testing services. From functional testing to performance optimization, we've got you covered.",
    imageUrl: slider2,
  },
  {
    title: "Mobile App Development",
    description: 'Empower your business with a sleek and intuitive mobile app. Our experienced developers will bring your ideas to life, creating a seamless user experience for your customers.',
    imageUrl: slider1,
  },
  {
    title: "UI/UX Design",
    description: "Deliver exceptional user experiences with our cutting-edge UI/UX design services. From wireframing to prototyping, we'll help you create intuitive interfaces that captivate your audience.",
    imgLogo: <CgFigma
      style={{
        color: '#7082ff',
        height: '34px',
        width: '34px'
      }} />,
  },
  {
    title: "Digital Marketing Solutions",
    description: "Maximize your online presence and drive growth with our strategic digital marketing solutions. From SEO to social media management, we'll help you reach your target audience and achieve your business goals.",
    imgLogo: <TbSeo
      style={{
        color: '#7082ff',
        height: '34px',
        width: '34px'
      }} />,
  },
  {
    title: "Cloud Computing Services",
    description: "Unlock the full potential of the cloud with our tailored solutions. From migration to optimization, we'll help you leverage cloud technologies to streamline your operations and scale your business.",
    imgLogo: <BsCloudFog2Fill
      style={{
        color: '#7082ff',
        height: '34px',
        width: '34px'
      }} />,
  },
  {
    title: "E-commerce Development",
    description: "Launch a successful online store with our e-commerce development expertise. From customizing platforms to implementing payment gateways, we'll help you create a seamless shopping experience for your customers.",
    imgLogo: <SiGooglemybusiness
      style={{
        color: '#7082ff',
        height: '34px',
        width: '34px'
      }} />,
  },
  {
    title: "Blockchain Solutions",
    description: "Explore the possibilities of blockchain technology with our innovative solutions. From decentralized applications to smart contracts, we'll help you harness the power of blockchain for your business.",
    imgLogo: <SiHiveBlockchain
      style={{
        color: '#7082ff',
        height: '34px',
        width: '34px'
      }} />,
  },
];
const Services = () => {
  return (
    <Container sx={{ maxWidth: '1400px !important', paddingTop: '200px' }}>
      <Stack direction={"column"}>
        <Typography variant={"h2"} align="center">My Services</Typography>
        <Typography variant="body2" align="center"> I offer full-stack development, ML/AI, DevOps, SQA, and technical writing.
          Specializing in React, Next.js, & Python I deliver scalable, efficient solutions for websites, apps, and backend systems.</Typography>
      </Stack>
        <Swiper
          centeredSlides={true}
          // autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 90,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            // when window width is >= 1280px
            1390: {
              slidesPerView: 4,
              spaceBetween: 80,
            },
          }}
        >
          {sliderArr.map((slider, index) => (
            <SwiperSlide>
              <CardsService
                key={index}
                imgSource={slider.imageUrl}
                cardTitle={slider.title}
                cardDescription={slider.description}
                imgLogo={slider.imgLogo}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </Container>
  )
}

export default Services
