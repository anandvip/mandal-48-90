document.addEventListener('DOMContentLoaded', function() {
  const trackerContainer = document.getElementById('tracker-container');

  // -----------------------------------------------------
  // Your Data Structure (Example)
  const weeksData = [
      // Data for week -3
      { week: -3, days: [
          { morning: true, evening: false },
          // ... data for other days of week -3
      ]},  
      // Data for week -2
      { week: -2, days: [ /* ... */ ] }, 
      // Data for week -1
      { week: -1, days: [ /* ... */ ] },

  ];
  // -----------------------------------------------------

  // Generate Weeks
  for (let weekNum = 0; weekNum < weeksData.length; weekNum++) { 
    const week = document.createElement('details');
    week.classList.add('week');

    const summary = document.createElement('summary');
    summary.classList.add('summary');
    summary.textContent = `Week ${weeksData[weekNum].week}`; // Adjust based on your data
    week.appendChild(summary);

    // Generate Days
    for (let dayNum = 0; dayNum < weeksData[weekNum].days.length; dayNum++) {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');

      // Morning Session
      const morningSessionContainer = createSessionDiv(true, weeksData[weekNum].days[dayNum].morning);
      dayDiv.appendChild(morningSessionContainer);

      // Vertical Line
      const verticalLine = document.createElement('div');
      verticalLine.classList.add('vertical-line');
      dayDiv.appendChild(verticalLine);

      // Evening Session
      const eveningSessionContainer = createSessionDiv(false, weeksData[weekNum].days[dayNum].evening); 
      dayDiv.appendChild(eveningSessionContainer);

      week.appendChild(dayDiv);
    }

    trackerContainer.appendChild(week);
  }
});

function createSessionDiv(isMorningSession, completed) {
  const sessionContainer = document.createElement('div');
  sessionContainer.classList.add('session-container');

  const sessionType = document.createElement('div');
  sessionType.classList.add('session-type');
  sessionType.textContent = isMorningSession ? 'Morning' : 'Evening';
  sessionContainer.appendChild(sessionType);

  const sessionCompletion = document.createElement('div');
  sessionCompletion.classList.add('session-completion');
  sessionCompletion.textContent = completed ? 'Completed' : 'Not Completed';
  sessionCompletion.classList.add(completed ? 'completed' : 'not-completed');
  sessionContainer.appendChild(sessionCompletion);

  return sessionContainer;
}
