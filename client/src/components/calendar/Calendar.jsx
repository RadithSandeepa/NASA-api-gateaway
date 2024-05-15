import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker} from '@mui/x-date-pickers/DatePicker';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import dayjs from 'dayjs';
import "./calendar.scss";
import { useState } from 'react';
import { motion } from "framer-motion";

const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(255, 165, 0)', 
      },
      secondary: {
        main: 'rgb(255, 0, 0)', 
      },
    },
    overrides: {
        MuiOutlinedInput: {
          root: {
            '& $input': {
              '&::placeholder': {
                color: '#FFA500', 
              },
            },
          },
        },
      },
});

const minDate = dayjs('1995-06-20');
const today = dayjs(); 

const Calendar = ({ onDateChange }) => {

  const [selectedDate, setSelectedDate] = useState(null); 

  const handleDateChange = (date) => {
    setSelectedDate(date); 
    // const formattedDate = date.format('YYYY-MM-DD'); 
    // onDateChange(formattedDate);
  };

  const handleTickClick = () => {
    if (selectedDate) {
      const formattedDate = selectedDate.format('YYYY-MM-DD'); // Format the selected date
      onDateChange(formattedDate); // Pass the formatted date to onDateChange function
    }
  };
 
  return (
    <div className="calendar">
        <ThemeProvider theme={theme} >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']} >
            <DatePicker label="Select Date" inputProps={{ style: { color: '#FFA500' } }} minDate={minDate} maxDate={today} value={selectedDate} onChange={handleDateChange}/>
            </DemoContainer>
        </LocalizationProvider>
        </ThemeProvider>
        <div className="btn"><motion.i class="fa-solid fa-circle-check" whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} onClick={handleTickClick}></motion.i></div>
    </div>
   
  )
}

export default Calendar;