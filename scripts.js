const input = document.getElementById('inputtext');
const output = document.getElementById('output');

input.focus(); // Focus on input when the page loads    

output.innerHTML = header + tip;

const commands = [
    "help",
    "about",
    "social",
    "twitter",
    "leetcode",
    "linkedin",
    "github",
    "banner",
    "hello",
    "clear",
    "portfolio",
    "projects",
    "email",
    "skills",
    "contact"
];

input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior
        const inputval = input.value;
        const matches = commands.filter(cmd => cmd.startsWith(inputval));
        if (matches.length === 1) {
            input.value = matches[0];
        }
    }
});


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        input.value = ''; // Clear input after pressing Enter

        // Handle different commands
        switch (command) {
            case 'help':
                output.innerHTML += help_lines;
                break;
            case 'about':
                output.innerHTML += about;
                break;
            case 'projects':
                output.innerHTML += projects;
                break;
            case 'skills':
                output.innerHTML += skills;
                break;
            case 'contact':
                output.innerHTML += contact;
                break;
            case 'social':
                output.innerHTML += links;
                break;
            case 'clear':
                output.innerHTML = banner_lines;
                break;
            case 'email':
                output.innerHTML += "Redirecting to Email Client...";
                newTab(email);
                break;
            case 'github':
                output.innerHTML += "Redirecting to github...";
                newTab(github);
                break;
            case 'linkedin':
                output.innerHTML += "Redirecting to linkedin...";
                newTab(linkedin);
                break;
            case 'leetcode':
                output.innerHTML += "Redirecting to leetcode...";
                newTab(leetcode);
                break;           
            case 'twitter':
                output.innerHTML += "Redirecting to twitter...";
                newTab(twitter);
                break;        
            case 'portfolio':
                output.innerHTML += "Redirecting to (old) portfolio website";
                newTab(old_portfolio);
                break;
            case 'banner':
            case 'hello':
                output.innerHTML += banner_lines;
                break;
            default:
                output.innerHTML += unknown;
        }
        output.innerHTML += "<br><br>";
        window.scrollTo({
            top: document.body.offsetHeight,
            behavior: 'smooth'
        });
  
    }
});

function newTab(link) {
    setTimeout(function() {
        window.open(link, "_blank");
    }, 500);
}
  

