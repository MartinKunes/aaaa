# aaaa
<html>
  <head>
    <script>
      // Initialize variables for the game
      var player = document.getElementById("player");
      var playerX = 0;
      var playerY = 0;
      var teleport = false;

      // Move the player when the mouse moves
      document.onmousemove = function(e) {
        playerX = e.clientX;
        playerY = e.clientY;
        player.style.left = playerX + "px";
        player.style.top = playerY + "px";

        // Teleport the player to the opposite side of the screen if they reach the edge
        if (playerX > window.innerWidth - player.clientWidth) {
          playerX = 0;
          teleport = true;
        } else if (playerX < 0) {
          playerX = window.innerWidth - player.clientWidth;
          teleport = true;
        }
        if (playerY > window.innerHeight - player.clientHeight) {
          playerY = 0;
          teleport = true;
        } else if (playerY < 0) {
          playerY = window.innerHeight - player.clientHeight;
          teleport = true;
        }
        
        if (teleport) {
          player.style.left = playerX + "px";
          player.style.top = playerY + "px";
          teleport = false;
        }
      };
    </script>
  </head>
  <body>
    <div id="player"></div>
  </body>
</html>
