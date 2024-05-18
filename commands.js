var twitter = "https://twitter.com/akhilattri_";
var linkedin = "https://www.linkedin.com/in/akhilattri/";
var github = "https://github.com/akhilattri";
var email = 'mailto:akhilattri001+pf@gmail.com';
var leetcode = "https://leetcode.com/u/akhilattri/"
var old_portfolio = "https://akhilattri.github.io/portfolio/"

let welcomeline = "Welcome to My Portfolio!  <br><br> Enter 'help' to get started! <br><br> ",
    tip = "[Tip: You can use Tab auto-complete] <br><br>",
    about = 'About Me: I am a web developer passionate about creating awesome projects!',
    projects = 'Projects: Here are some of my recent projects...',
    skills = 'Skills: I am proficient in HTML, CSS, JavaScript, and more!',
    contact = 'Contact: You can reach me at akhilattri001@gmail.com',
    unknown = 'Command not recognized. Type "help" for a list of available commands.';

social = [
    'Twitter        <a href="' + twitter + '" target="_blank">twitter/akhilattri</a><br>',
    'Linkedin       <a href="' + linkedin + '" target="_blank">linkedin/akhilattri</a><br>',
    'Github         <a href="' + github + '" target="_blank">github/akhilattri</a><br>',
];
help = [
    '<span class="command">about</span>     about me<br>',
    '<span class="command">social</span>    display all social links<br>',
    '<span class="command">leetcode</span>    visit my leetcode<br>',
    '<span class="command">linkedin</span>    visit my linkedin<br>',
    '<span class="command">github</span>    visit my github<br>',
    '<span class="command">twitter</span>    visit my github<br>',
    '<span class="command">projects</span>  view projects<br>',
    '<span class="command">portfolio</span>  view (old) portfolio website<br>',
    '<span class="command">skills</span>    view things i can do<br>',
    '<span class="command">contact</span>   connect with me<br>',
    '<span class="command">help</span>      display all commands<br>',
    '<span class="command">email</span>     send an Email<br>',
    '<span class="command">clear</span>     clear terminal<br>',
    '<span class="command">hello</span>     display the header<br>',
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
    "contact"
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

banner_lines = enterlines(banner) ;

header = banner_lines + welcomeline;

links = enterlines(social);

help_lines = enterlines(help)