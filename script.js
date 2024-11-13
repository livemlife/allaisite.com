// Sample AI Tools data
const tools = [
    { name: "ChatGPT", category: "Natural Language Processing", description: "A powerful language model for conversational AI.", link: "https://openai.com/chatgpt" },
    { name: "DALL-E", category: "Image Generation", description: "An AI model for generating images from text.", link: "https://openai.com/dall-e" },
    { name: "Whisper", category: "Speech Recognition", description: "A multilingual speech recognition system.", link: "https://openai.com/whisper" },
    { name: "TensorFlow", category: "Data Analysis", description: "An open-source library for machine learning.", link: "https://tensorflow.org" },
];

// Function to display tools
function displayTools() {
    const container = document.getElementById("tools-container");

    tools.forEach(tool => {
        const toolCard = document.createElement("div");
        toolCard.classList.add("tool-card");
        
        toolCard.innerHTML = `
            <h3>${tool.name}</h3>
            <p><strong>Category:</strong> ${tool.category}</p>
            <p>${tool.description}</p>
            <a href="${tool.link}" target="_blank">Learn More</a>
        `;
        
        container.appendChild(toolCard);
    });
}

// Run the function to display tools when page loads
window.onload = displayTools;
