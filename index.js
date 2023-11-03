const worm = document.getElementById('worm');
        let toTop = document.querySelector('.to-top');
        let lastScrollY = 0;
        let wormScrollY = -1100;

        window.addEventListener('scroll', () => {
            if (wormScrollY < -130) {
                lastScrollY = window.scrollY;
                wormScrollY = -1100 + lastScrollY;
                toTop.style.top = wormScrollY + "px";
            } else {
                lastScrollY = window.scrollY;
                wormScrollY = -1100 + lastScrollY;
                toTop.style.top = "-130px";
            }
        })

        worm.addEventListener('click', () => {
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        })

        //menu
        const contact = document.getElementById('contact');
        const about = document.getElementById('about');
        const address = document.getElementById('address');
        const aboutButton1 = document.getElementById('aboutButton1');
        const aboutButton2 = document.getElementById('aboutButton2');
        const aboutButton3 = document.getElementById('aboutButton3');
        const aboutButton4 = document.getElementById('aboutButton4');
        const contactButton1 = document.getElementById('contactButton1');
        const contactButton2 = document.getElementById('contactButton2');
        const contactButton3 = document.getElementById('contactButton3');
        const contactButton4 = document.getElementById('contactButton4');
        const addressButton1 = document.getElementById('addressButton1');
        const addressButton2 = document.getElementById('addressButton2');
        const addressButton3 = document.getElementById('addressButton3');
        const addressButton4 = document.getElementById('addressButton4');

        function toAbout() {
            about.scrollIntoView();
        }

        function toContact() {
            contact.scrollIntoView();
        }

        function toAddress() {
            address.scrollIntoView();
        }

        function closeMenu() {
            menu.style.display = "none";
        }

        aboutButton1.addEventListener('click', toAbout);
        aboutButton2.addEventListener('click', toAbout);
        aboutButton3.addEventListener('click', toAbout);
        aboutButton4.addEventListener('click', toAbout);
        contactButton1.addEventListener('click', toContact);
        contactButton2.addEventListener('click', toContact);
        contactButton3.addEventListener('click', toContact);
        contactButton4.addEventListener('click', toContact);
        addressButton1.addEventListener('click', toAddress);
        addressButton2.addEventListener('click', toAddress);
        addressButton3.addEventListener('click', toAddress);
        addressButton4.addEventListener('click', toAddress);
        aboutButton3.addEventListener('click', closeMenu);
        aboutButton4.addEventListener('click', closeMenu);
        contactButton3.addEventListener('click', closeMenu);
        contactButton4.addEventListener('click', closeMenu);
        addressButton3.addEventListener('click', closeMenu);
        addressButton4.addEventListener('click', closeMenu);

        //burger
        const openNav = document.getElementById('openNav');
        const menu = document.getElementById('menu');

        openNav.addEventListener('click', () => {
            if (menu.style.display === "block") {
                menu.style.display = "none";
            } else {
                menu.style.display = "block";
            }
        })

        // changeLang
        let toEng = document.querySelectorAll('.EN')
        let toThai = document.querySelectorAll('.TH')
        const changeLang = document.getElementById('changeLangButton');
        const changeLangMobile = document.getElementById('changeLangButtonMobile');

        function changeLanguage() {
            toThai.forEach((element) => {
                element.classList.toggle('hide');
            });
            toEng.forEach((element) => {
                element.classList.toggle('hide');
            });
        }

        changeLang.addEventListener('change', changeLanguage);
        changeLangMobile.addEventListener('change', changeLanguage);
