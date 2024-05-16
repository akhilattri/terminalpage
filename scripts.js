const input = document.getElementById('input');
const output = document.getElementById('output');

input.focus(); // Focus on input when the page loads    

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const command = input.value.trim().toLowerCase();
        input.value = ''; // Clear input after pressing Enter

        // Handle different commands
        switch (command) {
            case 'help':
                output.innerHTML += enterlines(help);
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
                output.innerHTML += enterlines(social);
                break;
            case 'clear':
                output.innerHTML = welcome;
                break;
            case 'banner':
                output.innerHTML = enterlines(banner);
                break;
            default:
                output.innerHTML += unknown;
        }

        // Scroll to the bottom of the output area
        output.scrollTop = output.scrollHeight;
    }
});
  
function enterlines(container) {
    var t = "";
    container.forEach(function(text) {
        t += '<br>';
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
                t += "&nbsp; &nbsp;";
                i++;
            } else {
                t += text.charAt(i);
            }
        }
    });
    return t;
}
  