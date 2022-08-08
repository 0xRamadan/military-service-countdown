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
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
      }}>
        <Typography sx={{ mt: 3 }} variant="h4">Military Service Countdown</Typography>
        <Countdown date={`${year}-12-01T16:00:00`} />
      </Box>
      {/* عبارات لمن لم يلتحقوا بالخدمه العسكريه */}
      <Box sx={{m: 4}}>
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
