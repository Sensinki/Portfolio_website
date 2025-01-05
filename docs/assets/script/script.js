// used ES6 (got help from ChatGPT while doing it ES6)
console.log("hello there :)");

// HAMBURGER MENU
// Resource: https://codepen.io/shooft/pen/MWZYoqa */
// open the menu
const openButton = document.querySelector("header > button");
openButton.addEventListener("click", () => {
    const theNav = document.querySelector("nav");
    theNav.classList.add("showMenu");
});

// close the menu
const closeButton = document.querySelector("nav button");
closeButton.addEventListener("click", () => {
    const theNav = document.querySelector("nav");
    theNav.classList.remove("showMenu");
});

// close the menu with "esc"
window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        const theNav = document.querySelector("nav");
        theNav.classList.remove("showMenu");
    }
});

// FETCHING SKILLS JSON FROM MY GITHUB REPO
const skillsApi = async () => {
    const skillGithubUrl = "https://raw.githubusercontent.com/Sensinki/Portfolio_website/refs/heads/main/docs/assets/script/skills.json";

    try {
        const response = await fetch(skillGithubUrl);
        const data = await response.json();
        const skillsList = document.querySelector(".skills");

        // got help from ChatGPT
        Object.keys(data).forEach((skillKey) => {
            const skill = data[skillKey];

            // creating elements
            const listItem = document.createElement("li");
            const img = document.createElement("img");
            img.classList.add("avatarIcon");
            img.src = skill.image;
            img.alt = skill.title;

            const titleParagraph = document.createElement("p");
            titleParagraph.classList.add("title");
            titleParagraph.textContent = skill.title;

            // img and titleParagraph should be in listItem
            listItem.appendChild(img);
            listItem.appendChild(titleParagraph);

            // listItem should be in skillsList
            skillsList.appendChild(listItem);
        });
    } catch (error) {
        console.error("Error fetching or processing JSON:", error);
    }
};
skillsApi();

// FETCHING PROJECTS JSON FROM MY GITHUB REPO
// const projectsApi = async () => {
//     const projectGithubUrl = "https://raw.githubusercontent.com/Sensinki/Portfolio_website/refs/heads/main/docs/assets/script/projects.json";

//     try {
//         const response = await fetch(projectGithubUrl);
//         const data = await response.json();
//         const projectsList = document.querySelector(".projects");

//         Object.keys(data).forEach((projectKey) => {
//             const project = data[projectKey];

//             // creating elements
//             const projectListItem = document.createElement("li");
//             const projectImg = document.createElement("img");
//             projectImg.classList.add("avatarIcon");
//             projectImg.src = project.image_project;
//             projectImg.alt = project.project_name;

//             const titleParagraph = document.createElement("p");
//             titleParagraph.classList.add("title");
//             titleParagraph.textContent = project.title;

//             // projectImg and titleParagraph should be in projectListItem
//             projectListItem.appendChild(projectImg);
//             projectListItem.appendChild(titleParagraph);

//             // projectListItem should be in projectsList
//             projectsList.appendChild(projectListItem);
//         });
//     } catch (error) {
//         console.error("Error fetching or processing JSON:", error);
//     }
// };
// projectsApi();

const projectsApi = async () => {
    const projectsGithubUrl = "https://raw.githubusercontent.com/Sensinki/Portfolio_website/refs/heads/main/docs/assets/script/projects.json";

    try {
        console.log("Fetching data from:", projectsGithubUrl); // Log the URL

        const response = await fetch(projectsGithubUrl);
        console.log("Response received:", response); // Log the raw response

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`); // Handle HTTP errors
        }

        const data = await response.json();
        console.log("Parsed JSON data:", data); // Log the JSON data

        const projectsList = document.querySelector(".projects");
        if (!projectsList) {
            console.error("Error: .projects element not found in the DOM!");
            return;
        }

        // Iterating over the keys in the JSON object
        Object.keys(data).forEach((key) => {
            const project = data[key];
            console.log(`Processing project: ${key}`, project); // Log each project

            // Creating elements
            const listItem = document.createElement("li");

            const img = document.createElement("img");
            img.src = project.image_project.replace("blob/main", "raw/main"); // Adjust GitHub URL
            img.alt = project.project_name;

            const title = document.createElement("h3");
            title.textContent = project.project_name;

            const description = document.createElement("p");
            description.textContent = project.project_explaining;

            const link = document.createElement("a");
            link.href = project.demo_project;
            link.textContent = "View Demo";
            link.target = "_blank";

            // Appending elements
            listItem.appendChild(img);
            listItem.appendChild(title);
            listItem.appendChild(description);
            listItem.appendChild(link);

            projectsList.appendChild(listItem);
        });

        console.log("All projects rendered successfully.");
    } catch (error) {
        console.error("Error fetching or processing JSON:", error); // Log any errors
    }
};

projectsApi();

// FIREFLY ANIMATION

const fireflies = document.querySelectorAll(".firefly");

// Create smooth random motion for each firefly
fireflies.forEach((firefly) => {
    const randomDuration = Math.random() * 10 + 5; // Random duration between 5s and 15s
    const randomSize = Math.random() * 0.5 + 0.5; // Random scale between 0.5 and 1
    const randomX = Math.random() * window.innerWidth; // Random horizontal position
    const randomY = Math.random() * window.innerHeight; // Random vertical position

    // Apply smooth random movement
    firefly.style.left = `${Math.random() * 100}vw`;
    firefly.style.top = `${Math.random() * 100}vh`;
    firefly.style.animationDuration = `${randomDuration}s`;
    firefly.style.transform = `scale(${randomSize})`;
});

