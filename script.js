// Ambil semua tautan di navbar
const navLinks = document.querySelectorAll(".menubar a");

// Tambahkan event listener untuk setiap tautan
navLinks.forEach(link => {
    link.addEventListener("click", function (event) {
        event.preventDefault(); // Hentikan navigasi ke URL

        // Ambil data-section dari tautan yang diklik
        const sectionId = this.getAttribute("data-section");

        // Ambil bagian yang sesuai dengan tautan yang diklik
        const targetSection = document.getElementById(sectionId);

        // Animasikan pergerakan halaman ke bagian yang sesuai
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: "smooth" // Animasi pergerakan
        });
    });
});
