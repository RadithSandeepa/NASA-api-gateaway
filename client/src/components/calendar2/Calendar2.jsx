import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import dayjs from "dayjs";
import "./calendar2.scss";
import { useState } from "react";
import { motion } from "framer-motion";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(255, 165, 0)",
    },
    secondary: {
      main: "rgb(255, 0, 0)",
    },
  },
  overrides: {
    MuiOutlinedInput: {
      root: {
        "& $input": {
          "&::placeholder": {
            color: "#FFA500",
          },
        },
      },
    },
  },
});

const minDate = dayjs("1995-06-20");
const today = dayjs();

const Calendar2 = ({ onDateChange }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const handleTickClick = () => {
    if (startDate && endDate) {
      const formattedStartDate = startDate.format("YYYY-MM-DD");
      const formattedEndDate = endDate.format("YYYY-MM-DD");
      onDateChange(formattedStartDate, formattedEndDate);
    }
  };

  return (
    <div className="calendar2">
      <ThemeProvider theme={theme}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              inputProps={{ style: { color: "#FFA500" } }}
              minDate={minDate}
              maxDate={endDate || today}
              value={startDate}
              onChange={handleStartDateChange}
            />
            <p>to</p>
            <DatePicker
              label="End Date"
              inputProps={{ style: { color: "#FFA500" } }}
              minDate={startDate}
              maxDate={today}
              value={endDate}
              onChange={handleEndDateChange}
              disabled={!startDate}
            />
        </LocalizationProvider>
      </ThemeProvider>
      <div className="btn">
        <motion.i
          className="fa-solid fa-circle-check"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleTickClick}
        ></motion.i>
      </div>
    </div>
  );
};

export default Calendar2;
