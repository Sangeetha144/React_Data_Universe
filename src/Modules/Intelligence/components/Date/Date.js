import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as React from 'react';
import dayjs from 'dayjs';

const today = dayjs();
const yesterday = dayjs().subtract(1, 'day');

function Date() {
  const [fromDate, setFromDate] = React.useState(yesterday);
  const [toDate, setToDate] = React.useState(today);

  const handleFromDateChange = (date) => {
    setFromDate(date);
    // Update minDate of "To" date picker to the next day of selected "From" date
    setToDate(date.add(1, 'day'));
  };

  return (
    <div className='datepicker' style={{ margin: '20px', display: 'flex', gap: '2%' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label='From'
          value={fromDate}
          onChange={handleFromDateChange}
          disableFuture
          views={['year', 'month', 'day']}
        />
        <DatePicker
          label='To'
          
          defaultValue={today}
          minDate={fromDate.add(1, 'day')} // Set minDate dynamically based on fromDate
          disableFuture
          views={['year', 'month', 'day']}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Date;
