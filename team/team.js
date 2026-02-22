const teamMembers = [
        {
        name: "Santhoshkumar R",
        role: "Frontend Designer & Developer",
        desc: "Developed the Home page, assisted with cart integration, and contributed to the Men’s page styling.",
        img: "./images/Santhoshkumar_photo.jpg",
        github: "https://github.com/santhosh-kumar-0",
        linkedin: "https://www.linkedin.com/in/santhoshkumar-r-405542320/",
        portfolio: "https://santhosh-kumar-0.github.io/MY-PORTFOLIO/"
    },
    {
        name: "Sanjay S",
        role: "Team Leader & Frontend Developer",
        desc: "Managed the team and developed the Women’s page. Also supported the Kids page.",
        img: "./images/Sanjay_photo.jpg",
        github: "https://github.com/sanjay-15-06",
        linkedin: "https://www.linkedin.com/in/sanjay-s-b44539320",
        portfolio: "https://enchanting-tarsier-6a13c0.netlify.app/"
    },
    {
        name: "Aswin Kumar N",
        role: "Frontend Developer",
        desc: "Built the full Cart module, created the Team page, and integrated cart features across all product pages.",
        img: "./images/Aswin_Kumar_photo.jpg",
        github: "https://github.com/ASWIN-KUMAR-5?tab=repositories",
        linkedin: "https://www.linkedin.com/in/aswin-kumar-n-640758320",
        portfolio: "https://famous-arithmetic-7ea0f0.netlify.app/"
    },
    {
        name: "Logesh Kumar A",
        role: "Frontend Developer",
        desc: "Developed the Men’s product page layout and styling.",
        img: "./images/Logesh_Kumar_photo.jpg",
        github: "https://github.com/Logesh-Kumar07",
        linkedin: "https://www.linkedin.com/in/logesh-kumar-0b52532b9",
        portfolio: "https://precious-mooncake-567a41.netlify.app/"
    },
    {
        name: "Praneeth D",
        role: "Contributor",
        desc: "Helped with the basic structure of the Kids page.",
        img: "./images/Praneeth_photo.jpg",
        github: "https://github.com/praneethd190",
        linkedin: "https://www.linkedin.com/in/praneeth-d-16b75a320",
        portfolio: "#"
    }
];

const grid = document.getElementById("team-grid");
let hideNameTimeout = null;

teamMembers.forEach((m) => {
    const card = document.createElement("div");
    card.className = "team-card w-[280px] md:w-[320px] pb-6 text-center";

    card.innerHTML = `
      <div class="photo-container mb-4">
        <a href="${m.portfolio}" target="_blank">
          <img src="${m.img}" alt="${m.name}" class="transition" />
          <div class="overlay">
            <h3 id="name-${m.name.replace(/\s/g, '-')}" class="name-text">${m.name}</h3>
          </div>
        </a>
      </div>
      
      <!-- Role and Description are permanently visible -->
      <div class="card-details px-6 mb-4">
          <p class="role-text text-green-400 font-semibold">${m.role}</p>
          <p class="desc-text text-sm text-gray-300 mt-1">${m.desc}</p>
      </div>

      <!-- Links remain permanently visible -->
      <div class="flex justify-center space-x-8 mt-2 px-6">
        <a href="${m.github}" target="_blank" rel="noopener noreferrer" class="icon-btn text-green-400 link-btn" data-name="${m.name}" data-link="GitHub">
          <i data-lucide="github" class="w-6 h-6"></i>
        </a>
        <a href="${m.linkedin}" target="_blank" rel="noopener noreferrer" class="icon-btn text-blue-400 link-btn" data-name="${m.name}" data-link="LinkedIn">
          <i data-lucide="linkedin" class="w-6 h-6"></i>
        </a>
        <a href="${m.portfolio}" target="_blank" rel="noopener noreferrer" class="icon-btn text-yellow-400 link-btn" data-name="${m.name}" data-link="Portfolio">
          <i data-lucide="globe" class="w-6 h-6"></i>
        </a>
      </div>
    `;

    // --- NEW JAVASCRIPT LOGIC FOR TIMED NAME DISPLAY ---
    const photoContainer = card.querySelector('.photo-container');
    const nameElement = card.querySelector('.name-text');

    photoContainer.addEventListener('mouseenter', () => {
        // Clear any existing timer to prevent immediate hide if the mouse moves rapidly
        clearTimeout(hideNameTimeout);
        
        // 1. Show the overlay (CSS handles the overlay opacity)
        photoContainer.querySelector('.overlay').classList.add('show-overlay');
        
        // 2. Add the class to make the name text visible
        nameElement.classList.add('show-name');

        // 3. Set a timeout to hide the name after 2 seconds (2000ms)
        hideNameTimeout = setTimeout(() => {
            nameElement.classList.remove('show-name');
            // Hide the overlay shortly after the name hides
            setTimeout(() => {
                photoContainer.querySelector('.overlay').classList.remove('show-overlay');
            }, 400); // 400ms is the CSS transition duration
        }, 2000);
    });

    photoContainer.addEventListener('mouseleave', () => {
        // If the mouse leaves before the 2-second timeout, clear the timeout
        clearTimeout(hideNameTimeout);
        // Start the immediate hide process
        nameElement.classList.remove('show-name');
        
        // Hide the overlay shortly after the name hides
        setTimeout(() => {
            photoContainer.querySelector('.overlay').classList.remove('show-overlay');
        }, 400); // 400ms is the CSS transition duration
    });
    // ---------------------------------------------------

    grid.appendChild(card);
});

// Neon Popup for link clicks (Remains the same)
document.addEventListener("click", (e) => {
    const target = e.target.closest(".link-btn");
    if (!target) return;

    e.preventDefault();

    const { name, link } = target.dataset;

    // Create popup
    const popup = document.createElement("div");
    popup.className = "popup";
    popup.textContent = `🔗 Opening ${link} for ${name}...`;

    const rect = target.getBoundingClientRect();
    popup.style.left = `${rect.left + rect.width / 2}px`;
    popup.style.top = `${rect.top + window.scrollY}px`;
    document.body.appendChild(popup);

    setTimeout(() => popup.classList.add("show"), 50);
    setTimeout(() => popup.classList.remove("show"), 1800);
    setTimeout(() => popup.remove(), 2400);

    // 🚀 Actually open the link now
    const href = target.getAttribute("href");
    if (href && href !== "#") {
        window.open(href, "_blank", "noopener,noreferrer");
    }
});

lucide.createIcons();