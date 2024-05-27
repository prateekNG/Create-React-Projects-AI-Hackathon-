/*
 *  Run the command: install npm install @google/generative-ai 
 */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');
const { generateIdeas } = require('./generateIdeas');

async function generateProjects(genAI, ideas) {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  // read the output.txt which has the content of the scaffolded project with syntax highlighting
  const seedProjectFilesContent = fs.readFileSync('./seed-projects/udemy-react-mega/Project Code, Files/output.txt', 'utf8');
  const seedProjectPlaylist = fs.readFileSync('./seed-projects/udemy-react-mega/playlist.txt', 'utf8');

  for (let i = 0; i < ideas.length; i++) {
    const prompt = `Analyze the project files of an online scaffolded React project provided below (in markdown format with syntax highlighting) \
and the list of the titles of the videos in its playlist, to create a detailed scaffolded project guide (in a markdown format) with similar complexity/depth, \
for students learning React by building projects themselves, breaking the project into phases and steps with clear instructions (without hand-holding or spoon-feeding) \
along with only the necessary hints code snippets/examples, based on idea provided below.\n\
The content of the project files with relative path:\n${seedProjectFilesContent}\n\n\
The playlist of the scaffolded project for learning React:\n${seedProjectPlaylist}\n\n
Please create a detailed scaffolded project guide, for programming students learning React by building projects themseleves, for the idea: ${ideas[i]}\n\n\
No need to provide any other comments or explanations, just the scaffolded project guide (in markdown format).`

    // console.log(prompt)

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    // console.log(text);

    // create a file for each project with name as the idea and write the text to the file
    fs.writeFileSync(`./projects/${ideas[i].split(':')[0].split(' ').join('_')}.md`, text);
  }
}

module.exports = {
  generateProjects
}