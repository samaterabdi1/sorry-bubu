
    function showLove() {
      document.getElementById("hiddenMsg").style.display = "block";
      for (let i = 0; i < 20; i++) {
        const heart = document.createElement("div");
        heart.classList.add("floating-heart");
        heart.textContent = "💗";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = 20 + Math.random() * 30 + "px";
        heart.style.animationDuration = 4 + Math.random() * 4 + "s";
        document.getElementById("hearts").appendChild(heart);

        const bubble = document.createElement("div");
        bubble.classList.add("bubble");
        bubble.style.left = Math.random() * 100 + "%";
        bubble.style.animationDuration = 6 + Math.random() * 4 + "s";
        bubble.style.width = bubble.style.height = 10 + Math.random() * 15 + "px";
        document.getElementById("bubbles").appendChild(bubble);
      }
    }

    for (let i = 0; i < 100; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.top = Math.random() * 100 + "%";
      star.style.left = Math.random() * 100 + "%";
      document.getElementById("stars").appendChild(star);
    }
 