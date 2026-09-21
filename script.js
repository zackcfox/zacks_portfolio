const roles = ["Web Designer", "Twitch Streamer", "Developer"];

const textElement = document.getElementById("typing-text");

if (textElement) {
  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function typeRole() {
    const currentRole = roles[roleIndex];

    if (!deleting) {
      textElement.textContent = currentRole.substring(0, charIndex + 1);
      charIndex++;

      if (charIndex === currentRole.length) {
        deleting = true;
        setTimeout(typeRole, 1300);
        return;
      }
    } else {
      textElement.textContent = currentRole.substring(0, charIndex - 1);
      charIndex--;

      if (charIndex === 0) {
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }

    setTimeout(typeRole, deleting ? 55 : 95);
  }

  typeRole();
}
