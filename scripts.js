const input = document.getElementById('input');
const output = document.getElementById('output');

input.focus(); // Focus on input when the page loads    

output.innerHTML = header;

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
                output.innerHTML = header;
                break;
            case 'email':
                output.innerHTML += "Redirecting to Email Client...<br><br>";
                newTab(email);
                break;
            case 'github':
                output.innerHTML += "Redirecting to github...<br><br>";
                newTab(github);
                break;
            case 'linkedin':
                output.innerHTML += "Redirecting to linkedin...<br><br>";
                newTab(linkedin);
                break;
            case 'leetcode':
                output.innerHTML += "Redirecting to leetcode...<br><br>";
                newTab(leetcode);
                break;           
            case 'twitter':
                output.innerHTML += "Redirecting to twitter...<br><br>";
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
  

