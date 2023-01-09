window.onload = function () {
    const numbers = document.querySelector('.numbers')
    const hours = document.querySelector('.hours')
    const minutes = document.querySelector('.minutes')
    const seconds = document.querySelector('.seconds')
    const time_zone = document.querySelector('.time_zone')

    function display_date() {
        let date = new Date();
        console.log('hi');
        hours.innerHTML = (date.getHours()/2 -1);
        minutes.innerHTML = date.getMinutes();
        seconds.innerHTML = date.getSeconds();
    }
    setInterval(display_date, 1000);

    let date = new Date();
    let timeZoneName = date.toString().match(/\(([A-Za-z\s].*)\)/)[1];

    time_zone.innerHTML = timeZoneName;


}
