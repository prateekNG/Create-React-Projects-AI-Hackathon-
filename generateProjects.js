/*
 *
 * install npm install @google/generative-ai
 *
 */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require('fs');

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI('AIzaSyAl8an5cj8L2sXOni5XL2tyXS8vxD81G7Q');

async function run() {
  // The Gemini 1.5 models are versatile and work with both text-only and multimodal prompts
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});

  // generated using ai
  const ideas = [
    "E-commerce Platform for Local Markets: A marketplace for small vendors in local communities.",
    "Food Delivery App for Regional Cuisines: Focused on delivering traditional and regional Indian foods.",
    "Healthcare Appointment Booking System: For clinics and hospitals in urban and rural areas.",
    "Educational Portal for Competitive Exams: Resources and test preparation for exams like UPSC, IIT-JEE, NEET.",
    "Job Portal for Skilled Laborers: Connecting skilled workers with employers.",
    "Local Events and Festivals Calendar: Highlighting cultural events and festivals in different regions.",
    "Agricultural Produce Marketplace: Connecting farmers with buyers directly.",
    "Digital Payment Solution for Rural Areas: Easy-to-use payment system for non-tech-savvy users.",
    "Public Transport Tracking App: Real-time tracking of buses and trains in cities.",
    "Tourism Guide App: Information about lesser-known tourist spots and cultural heritage sites.",
    "Real Estate Portal: For buying, selling, and renting properties in different Indian cities.",
    "Online Grocery Store: Focusing on locally sourced produce.",
    "Fitness and Wellness App: Tailored to Indian fitness regimes and wellness practices.",
    "Language Learning App: For learning Indian languages like Hindi, Tamil, Bengali, etc.",
    "Weather Forecast App: With detailed forecasts and alerts for different regions.",
    "Electricity and Water Bill Management: For easy bill payment and tracking usage.",
    "Women's Safety App: With features like emergency contacts and location tracking.",
    "Local News Aggregator: Curating news from various regional sources.",
    "Public Grievance Portal: Allowing citizens to report and track civic issues.",
    "Pet Adoption and Care Platform: Connecting pet owners with shelters and veterinary services.",
    "Plant and Gardening App: For urban gardening and farming tips.",
    "Cultural Learning Platform: Exploring Indian history, arts, and traditions.",
    "Ride-Sharing App: Focused on carpooling and bike-pooling within cities.",
    "Mobile Banking App: User-friendly interface for banking services.",
    "Volunteer and NGO Connect: Platform to connect volunteers with NGOs and social causes.",
    "Local Service Finder: For finding plumbers, electricians, carpenters, etc.",
    "Home Cooked Meal Delivery: Service connecting home cooks with consumers.",
    "Sports and Fitness Event Finder: Information on marathons, yoga classes, and other fitness events.",
    "Senior Citizen Support Platform: Services and support networks for the elderly.",
    "Student Scholarship Portal: Information and application for various scholarships.",
    "Personal Finance Management: Tools for budgeting, saving, and investing.",
    "Children’s Learning App: Educational games and activities for young children.",
    "Real-Time Pollution Monitor: Air quality index and pollution alerts.",
    "Book Exchange and Library Network: Platform for borrowing and exchanging books.",
    "Public Toilet Finder: Locating clean and accessible public restrooms.",
    "Local Artisans and Crafts Marketplace: Selling handmade crafts and artisanal products.",
    "Political Awareness Platform: Information on political parties, candidates, and elections.",
    "Skill Development and Training: Courses and training for enhancing job skills.",
    "Mental Health Support App: Resources and support networks for mental wellness.",
    "Crowdfunding Platform for Social Causes: For raising funds for community projects and social initiatives.",
    "Digital Classroom Management: Tools for teachers to manage online classes and assignments.",
    "Bus Booking System: For booking intercity and intracity bus tickets.",
    "Indian Recipes and Cooking Tips: Platform for sharing and discovering Indian recipes.",
    "Local Travel and Homestay App: Connecting travelers with local hosts and unique stays.",
    "Online Voting System: For organizing local community and organizational elections.",
    "Disaster Management App: Information and alerts for natural disasters and emergency response.",
    "Smart City Dashboard: Data and analytics for urban development and planning.",
    "Waste Management and Recycling: Solutions and information on waste disposal and recycling.",
    "Cultural Exchange Platform: For cultural exchange programs and interaction between different Indian states.",
    "Interactive Map of Historical Sites: Detailed information and virtual tours of historical and cultural sites."
  ];
  
  //read text file into a string, to be used as a sample project scaffold (also generated using AI)
  const sampleProject = fs.readFileSync('./sampleProjectScaffold.txt', 'utf8');

  for (let i = 0; i < ideas.length; i++) {
    const prompt = `Below is a sample template scaffoled for a student project for learning React\n ${sampleProject}\n
    Please create a detailed scaffolded project guide, for students learning react by building projects, for the idea provided below, in a format and structure similar to the one provided,
    especially the idea behind each phase but please add or remove tasks, phases, or any further details as required.\n
    ${ideas[i]}
    No need to provide any other comments or explanations, just the scaffolded project structure\n`
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    console.log(text);

    // create a file for each project with name as the idea and write the text to the file
    fs.writeFileSync(`./projects/${ideas[i].split(' ').join('_')}.md`, text);
  }
}

run();
