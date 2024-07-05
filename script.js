function addRecommendation() {


    if (!document.getElementById) return;

    var comment = document.recsform.comment.value;
    console.log("comment :\n" + comment);

    var fullname = document.recsform.fullname.value;
    if (fullname.length === 0) {
        fullname = "Anonymous";
    } else {
        fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1);
    }
    console.log("fullname :\n" + fullname);

    let recsList = document.querySelector(".recommendation-list-container");

    // create new div with the right class:
    let newCard = document.createElement('div');
    newCard.className = "recommendation-card";

    //create the paragraphs:

    let newComment = document.createElement("p");
    newComment.textContent = "\"" + comment + "\"";
    newCard.appendChild(newComment);

    let newFullName = document.createElement("p");
    newFullName.textContent = "__" + fullname;
    newCard.appendChild(newFullName);

    recsList.appendChild(newCard);

}

function submitRecommendation(e) {
    e.preventDefault();
    addRecommendation();
    e.stopImmediatePropagation();
}






function addText() {
    if (!document.getElementById) return;
    var sentence = document.changeform.sentence.value;
    var node = document.createTextNode(" " + sentence);
    document.getElementById("paragraph1").appendChild(node);
    document.changeform.sentence.value = "";
}
/**
   <h1 id="heading1">
       Create Your Own Content
   </h1>
   <p id="paragraph1"> 
       Using the W3C DOM, you can dynamically add
       sentences to this paragraph.
   </p>
   <p>
       Type a sentence and click the Add! button.
   </p>

   <form name="changeform">
       <input type="text" name="sentence" size="65" />
       <button type="button" onclick="addText();">
           Add!
       </button>
   </form>

 */
