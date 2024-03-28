document.getElementById("setup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form values
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const numPlayers = parseInt(document.querySelector('input[name="playernumb"]:checked').value);
    
    // Redirect to game page with query parameters
    window.location.href = `game.html?first_name=${firstName}&last_name=${lastName}&num_players=${numPlayers}`;
});
