import { Typography, Box, Container } from "@mui/material";
import Footer from './components/Footer'
import ReactPlayer from 'react-player'
import classes from './App.module.css'
import d1 from './images/d1.jpg'
import d11 from './images/d11.jpg'
import d2 from './images/d2.png'
import d22 from './images/d22.jpg'
import ClassOf from "./components/ClassOf/ClassOf.js";



function App() {
  return (
    <Box>
      <Container className={classes.titleCover}>
        <Typography className={classes.titleText} variant="h3" fontWeight='bold'>Military Service Countdown</Typography>
      </Container>
      <ClassOf nameOfClass='دفعة أولي' countdownDate='2023-12-01T16:00:00' image1={d1} image2={d11} bgColor1='#98A8A7' bgColor2='#213939'/>
      <ClassOf nameOfClass='دفعة تانية' countdownDate='2024-03-01T16:00:00' image1={d2} image2={d22} bgColor1='#AC705E' bgColor2='#482520'/>
      {/* عبارات لمن لم يلتحقوا بالخدمه العسكريه */}
      <Box sx={{ m: 4 }}>
        <Typography textAlign='center' variant='h4' fontWeight='bold' >رسالة لل مخدمش جيش</Typography>
        <div className="player">
          <ReactPlayer url='https://youtu.be/1QH0BeiyBzA' />
        </div>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
