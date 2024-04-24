
// import React, { useState } from 'react';
// import '../Calender.css'; // Import your CSS file for styling

// function Calendar() {
//   // Initial state for selected date and scheduled meetings
//   const [selectedDate, setSelectedDate] = useState(new Date());
//   const [meetings, setMeetings] = useState([]);

//   // Function to handle date selection
//   const handleDateChange = (e) => {
//     const { name, value } = e.target;
//     setSelectedDate((prevDate) => {
//       let newDate = new Date(prevDate);
//       if (name === 'day') newDate.setDate(value);
//       if (name === 'month') newDate.setMonth(value - 1);
//       if (name === 'year') newDate.setFullYear(value);
//       return newDate;
//     });
//   };

//   // Generate arrays for days, months, and years
//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = Array.from({ length: 12 }, (_, i) => i + 1);
//   const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i);

//   // Function to schedule a meeting on the selected date
//   const scheduleMeeting = () => {
//     const formattedDate = selectedDate.toLocaleDateString('en-US');
//     setMeetings([...meetings, formattedDate]);
//   };

//   // Function to render scheduled meetings
//   const renderMeetings = () => {
//     return meetings.map((meeting, index) => (
//       <li key={index}>{meeting}</li>
//     ));
//   };

//   return (
//     <div className="calendar">
//       <div className="calendar-header">
//         <select name="day" value={selectedDate.getDate()} onChange={handleDateChange}>
//           {days.map((day) => (
//             <option key={day} value={day}>{day}</option>
//           ))}
//         </select>
//         <select name="month" value={selectedDate.getMonth() + 1} onChange={handleDateChange}>
//           {months.map((month) => (
//             <option key={month} value={month}>{month}</option>
//           ))}
//         </select>
//         <select name="year" value={selectedDate.getFullYear()} onChange={handleDateChange}>
//           {years.map((year) => (
//             <option key={year} value={year}>{year}</option>
//           ))}
//         </select>
//         <button onClick={scheduleMeeting}>Schedule Meeting</button>
//       </div>
//       <table className="calendar-table">
//         <thead>
//           <tr>
//             <th className="calendar-day-header">Sun</th>
//             <th className="calendar-day-header">Mon</th>
//             <th className="calendar-day-header">Tue</th>
//             <th className="calendar-day-header">Wed</th>
//             <th className="calendar-day-header">Thu</th>
//             <th className="calendar-day-header">Fri</th>
//             <th className="calendar-day-header">Sat</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             {Array.from({ length: 7 }, (_, i) => {
//               const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
//               const firstDayDiff = i - firstDayOfMonth;
//               const date = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate() + firstDayDiff);
//               return (
//                 <td key={i} className="calendar-day">{date.getDate()}</td>
//               );
//             })}
//           </tr>
//         </tbody>
//       </table>
//       <div className="meetings-container">
//         <h3>Scheduled Meetings</h3>
//         <ul>
//           {renderMeetings()}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Calendar;

import React, { useState, useEffect } from 'react';
import '../Calender.css'; 

function Calendar() {
  
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  const [meetings, setMeetings] = useState([]);

  
  const handleDateClick = (day) => {
    setSelectedDate(day);
  };

  const handleArrowNavigation = (e) => {
    if (e.keyCode === 37) { // Left arrow key
      setSelectedMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    } else if (e.keyCode === 39) { // Right arrow key
      setSelectedMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    }
  };


  const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - 50 + i);

  // Function to schedule a meeting on the selected date
  const scheduleMeeting = () => {
    const formattedDate = new Date(selectedYear, selectedMonth, selectedDate).toLocaleDateString('en-US');
    setMeetings([...meetings, formattedDate]);
  };

  // Function to render scheduled meetings
  const renderMeetings = () => {
    return meetings.map((meeting, index) => (
      <li key={index}>{meeting}</li>
    ));
  };

  // Update selected date when selectedYear or selectedMonth changes
  useEffect(() => {
    setSelectedDate(1);
  }, [selectedYear, selectedMonth]);

  return (
    <div className="calendar" onKeyDown={handleArrowNavigation} tabIndex="0">
      <div className="calendar-header">
        <select value={selectedMonth} onChange={(e) => setSelectedMonth(parseInt(e.target.value))}>
          {months.map((month, index) => (
            <option key={index} value={index}>{month}</option>
          ))}
        </select>
        <select value={selectedYear} onChange={(e) => setSelectedYear(parseInt(e.target.value))}>
          {years.map((year, index) => (
            <option key={index} value={year}>{year}</option>
          ))}
        </select>
        <button onClick={scheduleMeeting}>Schedule Meeting</button>
      </div>
      <table className="calendar-table">
        <thead>
          <tr>
            <th className="calendar-day-header">Sun</th>
            <th className="calendar-day-header">Mon</th>
            <th className="calendar-day-header">Tue</th>
            <th className="calendar-day-header">Wed</th>
            <th className="calendar-day-header">Thu</th>
            <th className="calendar-day-header">Fri</th>
            <th className="calendar-day-header">Sat</th>
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil((daysInMonth + (new Date(selectedYear, selectedMonth, 1).getDay() % 7)) / 7)).keys()].map((weekIndex) => (
            <tr key={weekIndex}>
              {[...Array(7).keys()].map((dayIndex) => {
                const dayNumber = weekIndex * 7 + dayIndex + 1 - (new Date(selectedYear, selectedMonth, 1).getDay() % 7);
                return (
                  <td
                    key={dayIndex}
                    className={`calendar-day ${dayNumber > 0 && dayNumber <= daysInMonth ? '' : 'calendar-day-disabled'} ${dayNumber === selectedDate ? 'calendar-day-selected' : ''}`}
                    onClick={() => dayNumber > 0 && dayNumber <= daysInMonth && handleDateClick(dayNumber)}
                  >
                    {dayNumber > 0 && dayNumber <= daysInMonth ? dayNumber : ''}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="meetings-container">
        <h3>Scheduled Meetings</h3>
         <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente autem necessitatibus dolorum iste ullam adipisci provident, obcaecati mollitia suscipit placeat eaque rem nulla excepturi. Eum, corporis eveniet?</div>
        <ul>
          {renderMeetings()}
        </ul>
      </div>
    </div>
  );
}

export default Calendar;





