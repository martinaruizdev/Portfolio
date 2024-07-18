const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hiddenLeft');
hiddenElements.forEach((el)=> observer.observe(el));

const hiddenElements2 = document.querySelectorAll('.hiddenRight');
hiddenElements2.forEach((el)=> observer.observe(el));

const hiddenMobile = document.querySelectorAll('.hidden-mobile');
hiddenMobile.forEach((el)=> observer.observe(el));
