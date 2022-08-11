import { Typography, Box} from "@mui/material";
import classes from './ClassOf.module.css'
import Countdown from "../../Countdown";

const ClassOf = ({ nameOfClass, countdownDate, image1, image2, bgColor1, bgColor2 }) => {
    return (
        < Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', lg: 'row' },
                justifyContent: 'space-evenly',
                alignItems: 'center',
                bgcolor: bgColor1,
                gap: '20px',
                borderRadius: 5,
                boxShadow: `3px 3px ${bgColor2}`,
                m: 4,
                p: 4,
            }
            }
        >
            <img src={image1} alt='d1' className={classes.image} />
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                color: '#fff',
                textShadow: '0 2px 3px rgba(0, 0, 0, 0.3)'
            }}>
                <Typography variant="h4" fontWeight='bold'>{nameOfClass}</Typography>
                <Countdown date={`${countdownDate}`}/>
            </Box>
            <img src={image2} alt='d11' className={classes.image} />
        </ Box>
    )
}

export default ClassOf