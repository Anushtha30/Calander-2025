document.addEventListener('DOMContentLoaded', () => {
  const calendar = document.getElementById('calendar');
  const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (month, year) => {
      return new Date(year, month + 1, 0).getDate();
  }

  const generateCalendar = () => {
      for (let month = 0; month < 12; month++) {
          const monthDiv = document.createElement('div');
          monthDiv.classList.add('month');

          const monthHeader = document.createElement('div');
          monthHeader.classList.add('month-header');
          monthHeader.innerText = months[month];
          monthDiv.appendChild(monthHeader);

          const daysDiv = document.createElement('div');
          daysDiv.classList.add('days');

          // Add days of the week header
          const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
          daysOfWeek.forEach(day => {
              const dayDiv = document.createElement('div');
              dayDiv.classList.add('day');
              dayDiv.innerText = day;
              daysDiv.appendChild(dayDiv);
          });

          // Get the first day of the month (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
          const firstDay = new Date(2025, month, 1).getDay();

          // Add empty days for the first week if the month doesn't start on Sunday
          for (let i = 0; i < firstDay; i++) {
              const emptyDiv = document.createElement('div');
              emptyDiv.classList.add('day');
              daysDiv.appendChild(emptyDiv);
          }

          // Add actual days of the month
          for (let day = 1; day <= daysInMonth(month, 2025); day++) {
              const dayDiv = document.createElement('div');
              dayDiv.classList.add('day');
              dayDiv.innerText = day;
              daysDiv.appendChild(dayDiv);
          }

          monthDiv.appendChild(daysDiv);
          calendar.appendChild(monthDiv);
      }
  }

  generateCalendar();
});
