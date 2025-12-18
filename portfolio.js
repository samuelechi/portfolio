document.addEventListener("DOMContentLoaded", () => {
    
    // --- Typed JS Configuration ---
    const typed = new Typed('.typed-text', {
        strings: ['Modern Web Apps', 'Secure Backends', 'Shopify Stores', 'Digital Experiences'],
        typeSpeed: 60,
        backSpeed: 40,
        loop: true
    });

    // --- Mobile Menu Toggle ---
    const menuBtn = document.getElementById('menu-btn');
    const navLinks = document.getElementById('nav-links');
    const menuIcon = menuBtn.querySelector('i');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // Toggle Icon
        if(navLinks.classList.contains('active')){
            menuIcon.classList.remove('bx-menu');
            menuIcon.classList.add('bx-x');
        } else {
            menuIcon.classList.add('bx-menu');
            menuIcon.classList.remove('bx-x');
        }
    });

    // Close menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.add('bx-menu');
            menuIcon.classList.remove('bx-x');
        });
    });

    // --- Scroll Reveal Animation ---
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2000,
        delay: 200,
        reset: false 
    });

    sr.reveal('.hero-text', { origin: 'left' });
    sr.reveal('.hero-img', { origin: 'right', delay: 400 });
    sr.reveal('.about-image-wrapper', { origin: 'left' });
    sr.reveal('.about-details', { origin: 'right' });
    sr.reveal('.skill-category', { interval: 200 });
    sr.reveal('.project-card', { interval: 100 });
    sr.reveal('.contact-wrapper', { origin: 'bottom' });

    // --- GitHub API Integration ---
    const githubContainer = document.getElementById('github-container');

    if(githubContainer) {
        // Fetch top 3 most recently updated repos
        fetch('https://api.github.com/users/samuelechi/repos?sort=updated&per_page=3')
            .then(response => response.json())
            .then(data => {
                githubContainer.innerHTML = ''; // Clear loading text

                data.forEach(repo => {
                    const repoCard = document.createElement('article');
                    repoCard.classList.add('project-card');
                    repoCard.style.padding = '1.5rem'; 
                    
                    repoCard.innerHTML = `
                        <div class="card-content" style="padding:0;">
                            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem;">
                                <h3 style="margin:0; font-size:1.1rem;">
                                    <i class='bx bxl-github' style="color:var(--primary);"></i> ${repo.name}
                                </h3>
                                <span style="font-size:0.8rem; background:rgba(255,255,255,0.1); padding:2px 8px; border-radius:4px;">
                                    ⭐ ${repo.stargazers_count}
                                </span>
                            </div>
                            <p style="font-size:0.9rem; color:var(--text-muted); height: 60px; overflow:hidden;">
                                ${repo.description || 'No description available.'}
                            </p>
                            <div class="tech-stack-mini" style="margin-top:1rem;">
                                <span>${repo.language || 'Code'}</span>
                            </div>
                            <a href="${repo.html_url}" target="_blank" class="card-link" style="margin-top:auto;">
                                View Repo <i class='bx bx-right-arrow-alt'></i>
                            </a>
                        </div>
                    `;
                    githubContainer.appendChild(repoCard);
                });
            })
            .catch(error => {
                githubContainer.innerHTML = `<p style="color:red; width:100%; text-align:center;">GitHub feed temporarily unavailable.</p>`;
            });
    }

});


  



