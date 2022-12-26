import { Typography, Box} from "@mui/material";
import Countdown from "../../Countdown";

const ClassOf = ({ nameOfClass, countdownDate, subTitle, bgColor1 }) => {
    return (
        < Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                m: 'auto',
                maxWidth: '600px',
                bgcolor: bgColor1,
                borderRadius: 5,
                p: {xs: 1, sm: 4, xl: 5},
            }
            }
        >
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: '#fff',
                textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
            }}>
                <Typography variant="h4" fontWeight='bold' sx={{mb: 1}}>{nameOfClass}</Typography>
                <Typography  variant="h5" sx={{mb: 1}}>{subTitle}</Typography>
                <Countdown date={`${countdownDate}`}/>
            </Box>
        </ Box>
    )
}

export default ClassOf