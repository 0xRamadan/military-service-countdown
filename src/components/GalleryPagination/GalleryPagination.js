import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// import images
import class1 from "../../assets/cover.jpg"
import class2 from "../../assets/d1.jpg"
import class3 from "../../assets/d11.jpg"
import class4 from "../../assets/d2.png"
import class5 from "../../assets/d22.jpg"



const images = [
    {
        original: class1,
    },
    {
        original: class2,
    },
    {
        original: class3,
    },
    {
        original: class4,
    },
    {
        original: class5,
    },
];

const GalleryPagination = () => {
    return (
        <Container sx={{ p: 3 }}>
            <Typography align='center' sx={{ mb: 2 }} color="white" variant="h3">Military Service Countdown</Typography>
            <Typography align='center' sx={{ mb: 2 }} color="white" variant="h4"> 🥰بنعد الليالي في حبك يا مصــــــر</Typography>
            <ImageGallery showPlayButton={false} showBullets={true} autoPlay={true} showNav={false} items={images} />
        </Container>
    )
}

export default GalleryPagination;
