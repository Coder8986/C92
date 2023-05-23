player_1_name = localStorage.getItem("player_1_name");
player_2_name = localStorage.getItem("player_2_name");
console.log(player_1_name,player_2_name);
player_1_score = 0;
player_2_score = 0;
document.getElementById("Player1_name").innerHTML=player_1_name+" : ";
document.getElementById("Player2_name").innerHTML=player_2_name+ " : ";
document.getElementById("Player1_score").innerHTML=player_1_score;
document.getElementById("Player2_score").innerHTML=player_2_score;
document.getElementById("player_question").innerHTML="Question-"+player_1_name;
document.getElementById("player_answer").innerHTML="answer-"+player_2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();

    Character1 = word.charAt(1);

    Character2 = word.charAt(Math.floor(word.length/2));
    Character3 = word.charAt(word.length-1);

    Remove_Character1 = word.replace(Character1, "_");

    Remove_Character2 = Remove_Character1.replace(Character2, "_");

    Remove_Character3 = Remove_Character2.replace(Character3, "_");
    console.log(Remove_Character3)

   Question_word = "<h4 id='word_display'> Q."+Remove_Character3+"</h4> <br>";
   InputBox = "Answer: <input type='text' id='input_checkbox'> <br> <br>";
   CheckButton="<button class='btn btn-info' onclick='check()'> Check </button>";

   row = Question_word + InputBox + CheckButton;

   document.getElementById("output").innerHTML = row;

   document.getElementById("word").value = "";
   
}
Answer_turn = "player_2"
Question_turn = "player_1"

function check(){
Get_Answer = document.getElementById("input_checkbox").value;
Answer = Get_Answer.toLowerCase();

if(Answer == word){

    if (Answer_turn == "player_1"){
        player_1_score = player_1_score + 1;
        document.getElementById("Player1_score").innerHTML = player_1_score;
        
    }

    else{
        player_2_score = player_2_score + 1;
        document.getElementById("Player2_score").innerHTML = player_2_score;   
    }
}

    if(Question_turn == "player_1"){
        Question_turn = "player_2";
        document.getElementById("player_question").innerHTML = "Question turn- " + player_2_name;

    }

    else{
        Question_turn = "player_1";
        document.getElementById("player_question").innerHTML = "Question turn- " + player_1_name;
    }

    if(Answer_turn == "player_1"){
        Answer_turn = "player_2";
        document.getElementById("player_answer").innerHTML = "Answer turn- " + player_2_name;

    }

    else{
        Answer_turn = "player_1";
        document.getElementById("player_answer").innerHTML = "Answer turn- " + player_1_name;

    }
    document.getElementById("output").innerHTML = ""


}
