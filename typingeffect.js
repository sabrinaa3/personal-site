<script>
    const nameToType = "Sabrina Allan";
    const typedText = document.getElementById("typing");
    const cursor = document.getElementById("cursor");

    let index = 0;

    function typeEffect() {
     if (index < nameToType.length) {
     
       typedText.textContent += nameToType.charAt(index);
       index++;
       setTimeout(typeEffect, 150); 
     } else {
    
       cursor.style.animation = "blink 0.7s step-start infinite";
     }
    }
    window.onload = () => {
      typeEffect();
    };
  </script>