function add_user() {
    player_1_name = document.getElementById("Player1_name_input").value;
    player_2_name = document.getElementById("Player2_name_input").value;
    localStorage.setItem("player_1_name", player_1_name);
    localStorage.setItem("player_2_name", player_2_name);
    window.location = "game_page.html";
}

