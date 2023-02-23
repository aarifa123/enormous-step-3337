import React from 'react';
import { Box, IconButton, useBreakpointValue } from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function Carousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '10px' });

  // These are the images used in the slide
  const cards = [
    'https://scontent.fixm3-1.fna.fbcdn.net/v/t39.30808-6/329765448_485319643811205_3550758620060415020_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a26aad&_nc_ohc=2_4ZOwKCbKgAX-VukBV&_nc_ht=scontent.fixm3-1.fna&oh=00_AfAGt7dtU_YowZDBAY5L7MC0xoGt2Y7vIAuUNcx9SzyI5A&oe=63FD0FF3',
    'https://www.shopickr.com/wp-content/uploads/2018/06/koovs-fashion-brand-london.jpg',
    'https://scontent.fixm3-1.fna.fbcdn.net/v/t1.6435-9/97262181_10157672397892875_263775979124555776_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=TuyvYffJqK0AX_y_I6I&_nc_ht=scontent.fixm3-1.fna&oh=00_AfAtUFb5AjLGRfWOUhsd38R_Is_huPywpJQLH4EYVjFpag&oe=641EAAFF',
  ];

  return (
    <Box
      position={'relative'}
    //   height={'600px'}
    //   width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        colorScheme="messenger"
        borderRadius="full"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((url, index) => (
          <Box
            key={index}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${url})`}
          />
        ))}
      </Slider>
    </Box>
  );
}