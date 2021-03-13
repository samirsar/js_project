console.log("hii welcome bhootani k");
shownotes();

//if user click on add note it will be stor on local storage

let addbtn = document.getElementById("addbtn");
addbtn.addEventListener("click", function (e) {
    let addtext = document.getElementById("addtxtarea");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtext.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtext.value = "";
    console.log(notesobj);
    shownotes();
})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
       
       <div class=" notecards my-2 mx-2 card" style="width: 18rem;">
                
                <div class="card-body">
                  <h5 class="card-title">Note ${index + 1}</h5>
                  <p>${element}</p>
                  <button id="${index}" onclick="deleteNote(${index})" class="btn btn-primary">Delete note</button>
                </div>
              </div>
`
            ;


    });
    let noteselement = document.getElementById("notes");
    if (notesobj.length != 0) {
        noteselement.innerHTML = html;
    }
    else{
        noteselement.innerHTML=`nothing written man`;
    }

}

function deleteNote(index1)
{
    console.log("i am deleting");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index1,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes();

    

}
let Searchtxt=document.getElementById("Searchtxt");
Searchtxt.addEventListener("input",function()
{
    let inputval=Searchtxt.value.toLowerCase()
    console.log("input event fired",inputval);
    let notecards=document.getElementsByClassName("notecards");
    Array.from(notecards).forEach(function(element){
        let cardtext=element.getElementsByTagName("p")[0].innerText;
        // console.log(cardtext);
        if(cardtext.includes(inputval))
        {
            element.style.display="block";
        }
        else{
            element.style.display="none";
        }
    })
})