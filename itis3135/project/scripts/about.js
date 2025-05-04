const civTips = [
    "Always build campuses early if you're going for a science victory.",
    "Use scouts to uncover tribal villages quickly.",
    "Trade routes boost your culture, science, and gold — use them wisely.",
    "Use alliances to share visibility and reduce war risk.",
    "Chop forests to speed up production — but plan ahead!",
    "Spies can cripple enemy space race progress late game.",
    "Gilgamesh can share rewards with allies — leverage that.",
    "Don't ignore amenities — unhappy cities slow you down.",
    "Wonders are powerful, but don’t delay your core infrastructure."
  ];
  
  function showRandomTip() {
    const tipDisplay = document.getElementById("tip-display");
    if (!tipDisplay) return;
  
    const randomIndex = Math.floor(Math.random() * civTips.length);
    tipDisplay.textContent = civTips[randomIndex];
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    showRandomTip();
  
    const button = document.getElementById("new-tip");
    if (button) {
      button.addEventListener("click", showRandomTip);
    }
  });
  

