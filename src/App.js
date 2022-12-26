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
        <ClassOf nameOfClass='الدفعة الأولي' subTitle="يا مســـهل الحـــال يـــارب" countdownDate='2023-12-01T11:00:00' bgColor1='#273E47' />
        <ClassOf nameOfClass='الدفعة التانية' subTitle="إنها تقترب يا دودااااا" countdownDate='2024-03-01T11:00:00' bgColor1='#233329' />
        <ClassOf nameOfClass='الدفعة التالتة' subTitle="قلوبنا عندكو يا رجــــالة" countdownDate='2024-06-01T11:00:00' bgColor1='#273E47' />
        <ClassOf nameOfClass='دفعة الظباط' subTitle="يارب متكتبهاش علي حد" countdownDate='2025-04-01T11:00:00' bgColor1='#233329' />
      </Box>
      {/* لكل من لم يلتحق بالخدمة العسكرية */}
      <Box sx={{ m: 4 }}>
        <Typography textAlign='center' variant='h4' fontWeight='bold' color='white' sx={{ mb: 2 }}>رسالة لل مخدمش جيش</Typography>
        <div className="player">
          <ReactPlayer url='https://youtu.be/1QH0BeiyBzA' />
        </div>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
