const { GoogleGenerativeAI } = require("@google/generative-ai");
const { generateProjects } = require('./generateProjects');
const { generateIdeas } = require('./generateIdeas');

const genAI = new GoogleGenerativeAI('AIzaSyAl8an5cj8L2sXOni5XL2tyXS8vxD81G7Q');

async function main() {
    // Generate project ideas
    const ideas = await generateIdeas(genAI, 3);

    // Log the ideas
    console.log(ideas);

    // Generate 5 projects based on the ideas after waiting for 5 seconds to avoid any the rate limit
    // await new Promise(resolve => setTimeout(resolve, 5000));
    // await generateProjects(genAI, ideas);
}

main();