var twitter = "https://twitter.com/akhilattri_";
var linkedin = "https://www.linkedin.com/in/akhilattri/";
var github = "https://github.com/akhilattri";
var email = 'mailto:akhilattri001+pf@gmail.com';
var leetcode = "https://leetcode.com/u/akhilattri/"
var old_portfolio = "https://akhilattri.github.io/portfolio/"

let welcomeline = "Welcome to My Portfolio!  <br><br> Enter 'help' to get started! <br><br> ",
    tip = "[Tip: You can use arrow keys for traversing command history] <br><br>",
    about = 'About Me: I am a web developer passionate about creating awesome projects!',
    projects = 'Projects: Here are some of my recent projects...',
    skills = 'Skills: I am proficient in HTML, CSS, JavaScript, and more!',
    contact = 'Contact: You can reach me at akhilattri001@gmail.com',
    unknown = "is not a recognized command. Check for typo or enter 'help' to list all commands";

social = [
    'Twitter        <a href="' + twitter + '" target="_blank">twitter/akhilattri</a>',
    'Linkedin       <a href="' + linkedin + '" target="_blank">linkedin/akhilattri</a>',
    'Github         <a href="' + github + '" target="_blank">github/akhilattri',
];
help = [
    '<span class="command">about</span>         about me',
    '<span class="command">social</span>        display all social links',
    '<span class="command">leetcode</span>      visit my leetcode',
    '<span class="command">linkedin</span>      visit my linkedin',
    '<span class="command">github</span>        visit my github',
    '<span class="command">twitter</span>       visit my github',
    '<span class="command">projects</span>      view projects',
    '<span class="command">portfolio</span>     view (old) portfolio website',
    '<span class="command">skills</span>        view things i can do',
    '<span class="command">contact</span>       connect with me',
    '<span class="command">help</span>          display all commands',
    '<span class="command">email</span>         send an Email',
    '<span class="command">clear</span>         clear terminal',
    '<span class="command">hello</span>         display the header',
    '<span class="command">history</span>       display history of commands entered'
];
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
    "contact",
    "history"
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
    "<center>",
    "<pre>",
    "+-+-+-+-+-+ +-+-+-+-+-+",
    "|a|k|h|i|l| |a|t|t|r|i|",
    "+-+-+-+-+-+ +-+-+-+-+-+",
    "</pre>",
    "</center>"
]

function enterlines(container) {
    var t = "";
    container.forEach(function(text) {
        t += '<br><br>';
        for (let i = 0; i < text.length; i++) {
            if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
                t += "&nbsp;&nbsp;";
                i++;
            } else {
                t += text.charAt(i);
            }
        }
    });
    return t;
}

banner_lines = enterlines(banner) ;

header = banner_lines + welcomeline;

links = enterlines(social);

help_lines = enterlines(help)
