/*const terminal = document.createElement("div");

function openTerminal()
{
    terminal.className = "terminal";
    console.log("[*] Terminal opened.")
    console.log(terminal.outerHTML);
}*/
var cat = document.querySelector(".categories");
var terms = document.createElement("div");

var finder = document.getElementById("draggable");

var categories = document.getElementById("categories");
var terminal = document.getElementById("trm");

function openTerminal()
{
    terminal.classList.add("terminal");
    console.log("[*] OPENED: Terminal.");
    console.log("[*] INNER: \n", terminal.outerHTML);
}

/*function openFinder() {   
    terms.setAttribute("class", "no-select");                                    
    terms.setAttribute("id", "draggable");
    cat.appendChild(terms);
    console.log("[*] OPENED: Finder.");
    console.log("[*] INNER: \n", categories.outerHTML);
}

function closeFinder() {
    finder.remove();
    console.log("[*] CLOSED: Finder.");
}*/



const frame = document.getElementById("draggable");
const sidebar = document.getElementById("sidebar");

function maximizeFrame()
{
  frame.style.width = 100 + "%";
  frame.style.height = 100 + "%";

  sidebar.style.width = 100 + "%";
  sidebar.style.height = 100 + "%";

}

function closeFrame()
{
  frame.remove();
}

function reduceFrame()
{
  frame.style.visibility = "hidden";
}

function respawnFrame()
{
  frame.style.visibility = "visible";
}