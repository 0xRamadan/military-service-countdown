import { Typography, Box } from "@mui/material";
import Countdown from "./Countdown.js";
import Footer from './components/Footer'
import ReactPlayer from 'react-player'

function App() {

  // calculate current year
  const currentDate = new Date();
  const year = currentDate.getMonth() === 11 && currentDate.getDate() > 23 ? currentDate.getFullYear() + 1 : currentDate.getFullYear();

  return (
    <div className="App">
      <Typography sx={{ m: 3 }} variant="h4" fontWeight='bold' textAlign='center'>Military Service Countdown</Typography>
      {/* دفعة أولي */}
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <Typography variant='h5' fontWeight='bold'>دفعة أولي</Typography>
        <Countdown date={`2023-12-01T16:00:00`} />
      </Box>
      {/* دفعة تانيه */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center'
        }}
      >
        <Typography variant='h5' fontWeight='bold' >دفعة تانية</Typography>
        <Countdown date={`2024-03-01T16:00:00`} />
      </Box>
      {/* عبارات لمن لم يلتحقوا بالخدمه العسكريه */}
      <Box sx={{ m: 4 }}>
        <Typography textAlign='center' variant='h4' >رسالة لل مخدمش جيش</Typography>
        <div className="player">
          <ReactPlayer url='https://youtu.be/1QH0BeiyBzA' />
        </div>
      </Box>
      <Footer />
    </div>
  );
}

export default App;
