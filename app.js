window.onload = function () {
    const numbers = document.querySelector('.numbers')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    const time_zone = document.querySelector('.time_zone')
    const amPm = document.querySelector('.amPm')
    let amOrPm = "am"


    function display_date() {
        let date = new Date();
        console.log('hi');
        let amOrPm = "am";
        let hour = date.getHours();
        if (hour > 12) {
            amOrPm = "pm";
            hour -= 12;
        }
        hours.innerHTML = (hour);
        minutes.innerHTML = date.getMinutes();
        seconds.innerHTML = date.getSeconds();
        amPm.innerHTML = amOrPm;
        let time = date.toLocaleTimeString();

        console.log(time);
    }
    setInterval(display_date, 1000);

    let date = new Date();
    let timeZoneName = date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

    time_zone.innerHTML = timeZoneName;

    var toggleSwitch = document.getElementById("toggle-switch");

    toggleSwitch.addEventListener("click", function (e) {
        document.body.classList.toggle("night_mode")
    });








}
