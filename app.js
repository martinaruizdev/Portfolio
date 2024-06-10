let togglebtn = document.querySelector(".togglebtn");
let nav = document.querySelector(".navlinks");
let links = document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
    this.classList.toggle("click");
    nav.classList.toggle("open");
})

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
