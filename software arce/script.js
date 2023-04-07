<script>
    document.getElementById("boton").addEventListener("onclick", function(){
      var aside = document.getElementById("myaside");
      if (aside.style.display === "none") {
        aside.style.display = "block"
      } else {
        aside.style.display = "none"
      }
    });
  </script>