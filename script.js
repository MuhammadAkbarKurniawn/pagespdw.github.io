function updateDateTime() {
    const now = new Date();
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = days[now.getDay()];
    const date = now.getDate();
    const month = now.getMonth() + 1; // Ingat bahwa bulan dimulai dari 0 (Januari adalah bulan 0)
    const year = now.getFullYear();
    const hour = now.getHours();
    const minute = now.getMinutes();
    const ampm = hour >= 12 ? 'PM' : 'AM';
    const hour12 = hour % 12 || 12; // Konversi ke format 12 jam
    const minuteStr = String(minute).padStart(2, '0'); // Menambahkan nol di depan jika hanya satu digit
  
    let greeting = "";
  
    if (hour < 12) {
      greeting = "Good morning!";
    } else if (hour < 18) {
      greeting = "Good afternoon!";
    } else {
      greeting = "Good evening!";
    }
  
    const dateStr = `${dayOfWeek}, ${date}/${month}/${year}`;
    const timeStr = `${hour12}:${minuteStr} ${ampm}`;
  
    document.getElementById("greeting").textContent = greeting;
    document.getElementById("date-time").innerHTML = `${dateStr}<br>${timeStr}`;
  }
  
  updateDateTime();
  setInterval(updateDateTime, 1000);
  
  $(document).ready(function(){
    $('.carousel').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1, // Set number of slides to show at once
      slidesToScroll: 1 // Set number of slides to scroll at once
    });
  });
  
  
  
  