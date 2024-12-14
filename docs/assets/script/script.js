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



// FETCHING JSON FROM MY GITHUB REPO
const skillsApi = async () => {
    const skillGithubUrl = "https://github.com/Sensinki/Portfolio_website/blob/main/docs/assets/script/skills.json";

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
