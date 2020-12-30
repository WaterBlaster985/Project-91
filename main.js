function nextPage(){
    player1=document.getElementById("player1input").value
     player2=document.getElementById("player2input").value
     localStorage.setItem("p1", player1);
     localStorage.setItem("p2", player2);
     window.location="index2.html"
}

function send(){
        original=document.getElementById("word").value;
        original=original.toLowerCase();
        q_word=original;
    }