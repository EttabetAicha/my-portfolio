const COMMANDS = {
  help: '<span style="color:#2dbb41">Supported commands:</span> <span class="code"></br>about➜</span>  Overview<span class="code"></br>experience➜</span> Work experience<span class="code"></br>education➜</span> My academic journey<span class="code"></br>skills➜</span>  What i can do<span class="code"></br>contact➜</span>  Reach out to me<span class="code"></br>party➜</span>  Lets throw a party.<span class="code"></br>clear➜</span>  clear terminal ',
  about:"Hello 👋<br>I'm Aicha Ettabet, a 23-year-old web developer 💻currently residing in Morocco. I find great satisfaction in realizing the limitless potential of impact that I can achieve through my creations. This is what motivates me each day to strive for continuous improvement as a developer..",
  skills: '<span class="code">Programming Languages:</span> JavaScript, Python, C, python, SQL <br><span class="code">Web Development Technologies:</span>HTML, CSS , React.js, Redux, Bootstrap, Tailwind , Sass, jQuery, Mongodb<br><span class="code">Back-End Technologies:</span> Express.js, Laravel, PHP <br><span class="code">Outils et Logiciels</span> Git, Github, Gitlab, VS code, jira , lunix, Figma , jira  ',
  education: '<span class="code">2021-2023➜</span>Specialized Technician Diploma in Full-Stack Web Development</br><span class="code">2020-2021➜</span>First year in Legal, Economic, and Social Sciences</br><span class="code">2019-2020➜</span>Bachelor of Life and Earth Sciences',
  experience: "<span class='code'>Développeuse web full stack (Stage)➜</span>During my internship, I actively participated in the development of an Enterprise Resource Planning (ERP) project. My main responsibilities included designing and developing human resources management interfaces using technologies such as ReactJs, TailwindCSS, Laravel, and MongoDB..",
  contact:'You can contact me on any of the following links:<br>["<a target="_blank" rel="noopener noreferrer" href="https://github.com/EttabetAicha" class="social link">GitHub</a>", "<a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aicha-ettabet-635585213/" class="social link">LinkedIn</a>"]',
  party: '🎉🎈🎵💃💃',
  clear: 'clear',

};
let userInput, terminalOutput;
const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();

  if (input.length === 0) {
    return;
  }

  // "Secret" party command
  if (input === "party") {
    startTheParty();
  }
  if (input === "clear") {
    // Clear the terminal screen
    terminalOutput.innerHTML = "";
    return;
  }

  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: <span class="output">"${input}"</span></div>`;
    console.log("Oops! no such command");
  } else {
    output += `<div class="output"> ${COMMANDS[input]} </div>`;
  }

  terminalOutput.innerHTML = `${terminalOutput.innerHTML}<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(0, userInput.innerHTML.length - 1);
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);

// TOP SECRET, DON'T READ
const startTheParty = () => {
  var confettiSettings = {
    target: "canvas",
    max: "1000",
    size: "1",
    animate: true,
    props: ["square", "triangle", "line"],
    colors: [
      [165, 104, 246],
      [230, 61, 135],
      [0, 199, 228],
      [253, 214, 126]
    ],
    clock: "25",
    rotate: true,
    width: "1680",
    height: "971",
    start_from_edge: true,
    respawn: false
  };
  var confetti = new ConfettiGenerator(confettiSettings);
  confetti.render();
};

