// Apply theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.body.className = savedTheme;
  }
};

// Function to set and save theme
function setTheme(theme) {
  document.body.className = theme;
  localStorage.setItem("theme", theme);

  // Animate the box on theme change
  const box = document.getElementById("animatedBox");
  box.style.animation = "none"; // Reset animation
  void box.offsetWidth; // Trigger reflow
  box.style.animation = "popIn 0.5s ease-out"; // Re-apply animation
}
