// Header Script
        //script untuk header
        function triggerAnimation() {
            const searchBox = document.getElementById('searchBox');
            const searchIcon = document.getElementById('searchIcon');

            searchBox.classList.toggle('open');

            // Ganti gambar pada tombol berdasarkan kondisi search box
            if (searchBox.classList.contains('open')) {
                searchIcon.src = "https://drive.google.com/thumbnail?id=1rCjVxYXQdyzcotOQYnx11z4_Q84Wi-ai"; // Gambar saat search box terbuka
            } else {
                searchIcon.src = "https://drive.google.com/thumbnail?id=1vjkRgS1YOizpgIYk1uYqlpS7-6bgX7rU"; // Gambar awal
            }
        }

        function openNav() {
            document.getElementById("mySidebar").style.right = "0";
        }

        function closeNav() {
            document.getElementById("mySidebar").style.right = "-250px";
        }
// End Of Header Script

// Home Script
        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk home part-1
        function resizeText() {
            let judulDiv = document.querySelector('.judul');
            let jh1 = document.querySelector('.judul h1');
            let jh2 = document.querySelector('.judul h2');

            let jdivWidth = judulDiv.clientWidth; // Ambil lebar div

            jh1.style.fontSize = jdivWidth * 0.13 + 'px'; // 100% dari lebar div
            jh2.style.fontSize = jdivWidth * 0.043 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText);
        window.addEventListener('load', resizeText);


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk home part-12
        function resizeText12() {
            let judul12Div = document.querySelector('.judul12');
            let jh11 = document.querySelector('.judul12 h1');
            let jh12 = document.querySelector('.judul12 h2');

            let jdivWidth12 = judul12Div.clientWidth; // Ambil lebar div

            jh11.style.fontSize = jdivWidth12 * 0.13 + 'px'; // 100% dari lebar div
            jh12.style.fontSize = jdivWidth12 * 0.043 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText12);
        window.addEventListener('load', resizeText12);


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk home part-2
        function resizeText2() {
            let exploreDiv = document.querySelector('.explore');
            let eh1 = document.querySelector('.explore h1');
            let eh2 = document.querySelector('.explore h2');

            let edivWidth = exploreDiv.clientWidth; // Ambil lebar div

            eh1.style.fontSize = edivWidth * 0.12 + 'px'; // 100% dari lebar div
            eh2.style.fontSize = edivWidth * 0.12 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText2);
        window.addEventListener('load', resizeText2);


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk home part-21
        function resizeText21() {
            let explore21Div = document.querySelector('.explore21');
            let eh21 = document.querySelector('.explore21 h1');
            let eh22 = document.querySelector('.explore21 h2');

            let edivWidth21 = explore21Div.clientWidth; // Ambil lebar div

            eh21.style.fontSize = edivWidth21 * 0.12 + 'px'; // 100% dari lebar div
            eh22.style.fontSize = edivWidth21 * 0.12 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText21);
        window.addEventListener('load', resizeText21);


        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk home part-3
        function resizeText3() {
            let btn1Div = document.querySelector('.btn1');
            let btn2Div = document.querySelector('.btn2');
            let btn3Div = document.querySelector('.btn3');

            let sh1 = document.querySelector('.btn1');
            let sh2 = document.querySelector('.btn2');
            let sh3 = document.querySelector('.btn3');

            let btn1Width = btn1Div.clientWidth; // Ambil lebar div
            let btn2Width = btn2Div.clientWidth; // Ambil lebar div
            let btn3Width = btn3Div.clientWidth; // Ambil lebar div


            sh1.style.fontSize = btn1Width * 0.07 + 'px'; // 100% dari lebar div
            sh2.style.fontSize = btn2Width * 0.08 + 'px'; // 50% dari lebar div
            sh3.style.fontSize = btn3Width * 0.08 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText3);
        window.addEventListener('load', resizeText3);
// End Of Home Script

// About Script
    //script untuk about part-1
        function resizeText() {
            let ajudulDiv = document.querySelector('.about_judul');
            let ajh1 = document.querySelector('.about_judul h1');
            let ajh2 = document.querySelector('.about_judul h2');
            let ajh3 = document.querySelector('.about_judul h3');

            let ajdivWidth = ajudulDiv.clientWidth; // Ambil lebar div

            ajh1.style.fontSize = ajdivWidth * 0.13 + 'px'; // 100% dari lebar div
            ajh2.style.fontSize = ajdivWidth * 0.043 + 'px'; // 50% dari lebar div
            ajh3.style.fontSize = ajdivWidth * 0.033 + 'px'; // 50% dari lebar div
        }

        window.addEventListener('resize', resizeText);
        window.addEventListener('load', resizeText);

    
// End Of About Script

// Footer Script
        //-------------------------------------------------------------------------------------------------------------------------------------------------------
        //script untuk footer
        function resizeTextfooter() {
            let footerDiv = document.querySelector('.judulfooter');
            let fh1 = document.querySelector('.footer p');

            let fdivWidth = footerDiv.clientWidth; // Ambil lebar div

            fh1.style.fontSize = fdivWidth * 0.028 + 'px'; // 100% dari lebar div
        }

        window.addEventListener('resize', resizeTextfooter);
        window.addEventListener('load', resizeTextfooter);
// End Of Footer Script