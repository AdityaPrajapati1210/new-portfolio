// Smooth Scroll and Active Link
const navLinks = document.querySelectorAll('.nav-links a');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 150)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
});

// Skills Bubbles Generation & Movement
const skillsData = [
    { name: 'Python', icon: 'fab fa-python', top: '10%', left: '20%' },
    { name: 'DSA', icon: 'fas fa-brain', top: '30%', left: '60%' },
    { name: 'React', icon: 'fab fa-react', top: '20%', left: '80%' },
    { name: 'CPP', icon: 'fas fa-camera', top: '50%', left: '15%' },
    { name: 'MySQL', icon: 'fas fa-database', top: '70%', left: '40%' },
    { name: 'Git', icon: 'fab fa-git-alt', top: '15%', left: '45%' },
    { name: 'C', icon: 'fas fa-microchip', top: '60%', left: '75%' },
    { name: 'JavaScript', icon: 'fab fa-js', top: '40%', left: '30%' },
    { name: 'HTML5', icon: 'fab fa-html5', top: '75%', left: '10%' },
    { name: 'CSS', icon: 'fab fa-css3-alt', top: '80%', left: '60%' },
    { name: 'JavaScript', icon: 'fab fa-css3-alt', top: '10%', left: '70%' }
];

const bubbleContainer = document.getElementById('bubbles-container');

function createBubbles() {
    skillsData.forEach(skill => {
        const bubble = document.createElement('div');
        bubble.className = 'skill-bubble';
        bubble.style.top = skill.top;
        bubble.style.left = skill.left;

        bubble.innerHTML = `
            <i class="${skill.icon}"></i>
            <span>${skill.name}</span>
        `;

        // Random floating animation
        const randomDuration = 3 + Math.random() * 4;
        const randomDelay = Math.random() * 2;
        bubble.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite alternate`;

        bubbleContainer.appendChild(bubble);
    });
}

// Add Float Animation Keyframes via JS
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes float {
    0% { transform: translateY(0px) translateX(0px); }
    100% { transform: translateY(-20px) translateX(10px); }
}
`;
document.head.appendChild(styleSheet);

createBubbles();

// Contact Form Handling
emailjs.init("OQsoXfPQn7D6fNAjI");

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Send to YOU
    emailjs.sendForm(
      "service_aditya",
      "template_hp0lur4",
      this
    );

    // Auto reply to USER
    emailjs.sendForm(
      "service_aditya",
      "template_wj2x407",
      this
    ).then(() => {
      alert("Message sent successfully! 📩 Check your email.");
      form.reset();
    }).catch(err => {
      alert("Failed ❌ " + err.text);
    });
  });

// Certificates Filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const certCards = document.querySelectorAll('.cert-card');

if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.innerText;

            // Filter cards
            certCards.forEach(card => {
                const category = card.getAttribute('data-category');
                if (category === filter) {
                    card.style.display = 'flex';
                    // Trigger simple fade in
                    card.style.opacity = '0';
                    setTimeout(() => {
                        card.style.opacity = '1';
                    }, 50);
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}
