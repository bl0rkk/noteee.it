const noteInput = document.getElementById('note-input');

noteInput.addEventListener('input', function () {
    this.style.height = 'auto'; // Reset the height
    this.style.height = this.scrollHeight + 'px'; // Set the height to match the content
});

var addButton = document.getElementById("add-btn");

addButton.addEventListener("click",function noteMaker(){
    const randomColor = Math.floor(Math.random()*16777215).toString(16);

    var noteContent = document.getElementById("note-input").value.trim();
    if(noteContent === ""){
        alert("Please enter text before adding notes");
        return;
    }

    var containerDiv = document.querySelector(".row");
    
    var newDiv = document.createElement("div");
    newDiv.className = "taken-notes col-lg-4 col-sm-12";

    newDiv.style.backgroundColor = "#" + randomColor;

    var noteParagraph = document.createElement("p");
    noteParagraph.className = "note-content";

    noteParagraph.innerHTML = noteContent;

    newDiv.appendChild(noteParagraph);
    containerDiv.appendChild(newDiv);

    document.getElementById("note-input").value = "";

});











