const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

const { generateProjects } = require('./generateProjects');
const { generateIdeas } = require('./generateIdeas');
const { reviewAndModifyProjectGuide } = require('./reviewAndModifyProjectGuide');

const genAI = new GoogleGenerativeAI('AIzaSyAl8an5cj8L2sXOni5XL2tyXS8vxD81G7Q');

async function main() {
    // Generate project ideas
    const ideas = await generateIdeas(genAI, 10);

    // Log the ideas
    console.log(ideas);

    // Generate projects based on the ideas after waiting for 5 seconds to avoid any the rate limit
    await new Promise(resolve => setTimeout(resolve, 5000));
    await generateProjects(genAI, ideas);

    // Read the just the project file names inside the ./projects directory, exclude the directories
    const projectFiles = fs.readdirSync('./projects', { withFileTypes: true })
        .filter(dirent => dirent.isFile())
        .map(dirent => dirent.name);


    // Log the project files
    console.log(projectFiles);

    projectFiles.forEach(async (fileName) => {
        await reviewAndModifyProjectGuide(genAI, fileName);
    });
}

main();