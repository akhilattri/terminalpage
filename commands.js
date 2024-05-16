var twitter = "https://twitter.com/akhilattri_";
var linkedin = "https://www.linkedin.com/in/akhilattri/";
var github = "https://github.com/akhilattri";
var email = 'mailto:akhilattri001+pf@gmail.com';

let welcomeline = "<p>Welcome to My Portfolio!  <br><br> Enter 'help' to get started! <br><br></p>",
    about = '<p>About Me: I am a web developer passionate about creating awesome projects!</p>',
    projects = '<p>Projects: Here are some of my recent projects...</p>',
    skills = '<p>Skills: I am proficient in HTML, CSS, JavaScript, and more!</p>',
    contact = '<p>Contact: You can reach me at example@example.com</p>',
    unknown = '<p>Command not recognized. Type "help" for a list of available commands.</p>';

social = [
    "<br>",
    'Twitter        <a href="' + twitter + '" target="_blank">twitter/akhilattri' + '</a>',
    'linkedin       <a href="' + linkedin + '" target="_blank">linkedin/akhilattri' + "</a>",
    'github         <a href="' + github + '" target="_blank">github/akhilattri' + "</a>",
    "<br>"
];
help = [
    '<br>',
    '<span class="command">about</span>&emsp;&emsp;     About me<br>',
    '<span class="command">social</span>&emsp;&emsp;    Display social links<br>',
    '<span class="command">projects</span>&emsp;&emsp;  View projects<br>',
    '<span class="command">help</span>&emsp;&emsp;      Display all commands<br>',
    '<span class="command">email</span>&emsp;&emsp;     Send an Email<br>',
    '<span class="command">clear</span>&emsp;&emsp;     Clear terminal<br>',
    '<span class="command">hello</span>&emsp;&emsp;     Display the header<br>',
    '<br>',
];

banner2 = [
"<pre>",
"         __      __           ___               __    __                   ",
"        /\ \    /\ \      __ /\_ \             /\ \__/\ \__         __     ",
"    __  \ \ \/'\\ \ \___ /\_\\//\ \        __  \ \ ,_\ \ ,_\  _ __ /\_\    ",
"  /'__`\ \ \ , < \ \  _ `\/\ \ \ \ \     /'__`\ \ \ \/\ \ \/ /\`'__\/\ \   ",
" /\ \L\.\_\ \ \\`\\ \ \ \ \ \ \ \_\ \_  /\ \L\.\_\ \ \_\ \ \_\ \ \/ \ \ \  ",
" \ \__/.\_\\ \_\ \_\ \_\ \_\ \_\/\____\ \ \__/.\_\\ \__\\ \__\\ \_\  \ \_\ ",
"  \/__/\/_/ \/_/\/_/\/_/\/_/\/_/\/____/  \/__/\/_/ \/__/ \/__/ \/_/   \/_/ ",
"</pre>"
]

banner = [
    "<pre>",
    "+-+-+-+-+-+ +-+-+-+-+-+",
    "|a|k|h|i|l| |a|t|t|r|i|",
    "+-+-+-+-+-+ +-+-+-+-+-+",
    "</pre>"
]

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

banner_lines = enterlines(banner);

header = banner_lines + "<br><br>" + welcomeline;

links = enterlines(social);