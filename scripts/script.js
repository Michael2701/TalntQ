class TalntQ{
    constructor(){
        this.init();
    }

    init(){
        this.initMenuBTNS();
        this.initScrollBTNs();
        this.toggleMainMenu();
        this.handleFormSubmit();
        this.initCustomersGallery();
        this.handleMainMenuVisability();
    }

    handleMainMenuVisability(){
        const body = document.getElementsByTagName('body')[0];
        const topMenu = document.getElementById('top-menu');
        let hideMenuTimeout;
    
        function hideMenu() {
            if(window.innerWidth > 920 && body.scrollTop > 200){
                topMenu.classList.add('hidden');
            }
        }
    
        function showMenu() {
            topMenu.classList.remove('hidden');
            if(window.innerWidth > 920){
                clearTimeout(hideMenuTimeout);
                hideMenuTimeout = setTimeout(hideMenu, 2000);
            }
        }

        hideMenuTimeout = setTimeout(hideMenu, 2000);

        body.addEventListener('scroll', () => {
            showMenu();
        });
        

    }

    toggleMainMenu(){
        const humburger = document.getElementById('nav-icon');
        const navLinks = document.getElementById('nav-links');

        humburger.addEventListener('click', e => {
            if(humburger.classList.contains('open')){
                humburger.classList.remove('open');
                navLinks.classList.remove('open');
                navLinks.classList.add('close');
            }else{
                humburger.classList.add('open');
                navLinks.classList.remove('close');
                navLinks.classList.add('open');
            }
            
        });

        window.addEventListener('resize', e => {
            const navLinks = document.getElementById('nav-links');
            if(window.innerWidth > 920){
                navLinks.classList.remove('open');
                navLinks.classList.remove('close');
            }
        });
    }

    handleFormSubmit(){
        const form = document.getElementById('contact-form');

        form.addEventListener('submit', e => {
            e.preventDefault();
            // todo
        });
    }

    initCustomersGallery(){
        this.scrollTo('card-customers-gallery-bullet', function(className, targetEl){
            const bullets = document.getElementsByClassName(className);

            for(let i = 0; i < bullets.length; i++){
                bullets[i].classList.remove('active');
            }
            targetEl.classList.add('active');
        });
    }

    initMenuBTNS(){
        this.scrollTo('top-menu-link', function(){
            if(window.innerWidth <= 920){
                const navLinks = document.getElementById('nav-links');    
                const humburger = document.getElementById('nav-icon');

                humburger.classList.remove('open');
                navLinks.classList.remove('open');
                navLinks.classList.add('close');
            }
        });
    }

    initScrollBTNs(){
        this.scrollTo('scroll-btn');
    }

    scrollTo(className, callback=null){
        const links = document.getElementsByClassName(className);
        let options = {
            behavior: 'smooth',
            block: 'end',
            inline: 'start'
        }

        if(window.innerWidth <= 920){
            options.block = 'start';
            options.inline = 'end';
        }

        for(let i = 0; i < links.length; i++){
            links[i].addEventListener('click', e => {
                if(callback) callback(className, e.target);
                const nextSectionId = e.target.getAttribute('data-id');
                document.getElementById(nextSectionId).scrollIntoView(options);
            });
        }
    }
}