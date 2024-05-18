
let body = document.body;
document.getElementById("toggleSwitch").addEventListener("click", () => {
    body.classList.toggle("dark-mode")
})

function handleIntersection(entries, observer) {
    entries.forEach(entry => {

        if (entry.isIntersecting) {

            document.querySelectorAll('nav a').forEach(link => {
                link.classList.remove('active');
            });
            const targetId = entry.target.getAttribute('id');
            document.querySelector(`nav a[href="#${targetId}"]`).classList.add('active');
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
});

document.querySelectorAll('.row').forEach(section => {
    observer.observe(section);
});

const dateObj = new Date()
document.getElementById("footerDate").innerText = "Yashcx84@" + dateObj.getFullYear();


// Animation
const tl = gsap.timeline()
tl.from(".Home #animated, header #animated", {
    opacity: 0,
    y: 200,
    duration: 0.3,
    delay: 1,
    stagger: 0.4
})
gsap.utils.toArray([".experties #animated", ".projectContainer #animated", ".contactContainer #animated"]).forEach(section => {
    gsap.from(section, {
        opacity: 0,
        y: 100,
        duration: 0.6,
        stagger: 0.4,
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none none"
        }
    });
});

gsap.from(".experties #animatedCard, .projectContainer #animatedCard", {
    opacity: 0,
    y: 100,
    delay: 0.4,
    scrollTrigger: {
        trigger: ".experties #animatedCard",
    }
})