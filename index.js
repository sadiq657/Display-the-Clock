function updatecurrentTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    // Format hours, minutes, and seconds
    hours = hours % 12;
    hours = hours ? hours : 12; // 12 instead of 0
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Determine AM/PM
    const ampm = hours >= 12 ? 'AM' : 'PM';

    // Display time
    document.getElementById('current-time').innerText = `${hours}:${minutes}:${seconds} ${ampm}`;
}

// Update time every second
setInterval(updatecurrentTime, 1000);

// Initial update
updatecurrentTime();