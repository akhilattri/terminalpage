const input = document.getElementById('inputtext');
const output = document.getElementById('output-wrapper');
const suggestionField = document.getElementById('terminal-suggestion');

input.focus(); // Focus on input when the page loads    

output.innerHTML = header + tip;

input.addEventListener('input', () => {
    const command = input.value;
    const matches = commands.filter(cmd => cmd.toLowerCase().startsWith(command.toLowerCase()));
    if (matches.length > 0 && command.length > 0) {
        const match = matches[0];
        suggestionField.textContent = match;
        suggestionField.innerHTML = `<span style="color: transparent">${command}</span>${match.slice(command.length)}`;
    } else {
        suggestionField.textContent = '';
    }
});

input.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault(); // Prevent the default tab behavior
        if (suggestionField.textContent) {
            input.value = suggestionField.textContent;
            suggestionField.textContent = '';
        }
    }
});


input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        suggestionField.textContent = '';
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