import { Typography, Box } from "@mui/material";
import ReactPlayer from 'react-player'

// import custom component
import ClassOf from "./components/ClassOf/ClassOf.js";
import Footer from './components/Footer'
import GalleryPagination from "./components/GalleryPagination/GalleryPagination";



function App() {
  return (
    <Box>
      <GalleryPagination />
      <Box sx={{
        display: 'flex', 
        flexDirection: 'column',
        m: 4,
        gap: 4
      }}>
        <ClassOf nameOfClass='دفعة أولي' countdownDate='2023-12-01T16:00:00' bgColor1='#273E47' />
        <ClassOf nameOfClass='دفعة تانية' countdownDate='2024-03-01T16:00:00' bgColor1='#233329' />
      </Box>
      {/* لكل من لم يلتحق بالخدمة العسكرية */}
      <Box sx={{ m: 4 }}>
        <Typography textAlign='center' variant='h4' fontWeight='bold' color='white' >رسالة لل مخدمش جيش</Typography>
        <div className="player">
          <ReactPlayer url='https://youtu.be/1QH0BeiyBzA' />
        </div>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
