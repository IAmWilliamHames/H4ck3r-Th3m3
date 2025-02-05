document.addEventListener('DOMContentLoaded', function() {
    // Add a typing effect to the about section
    const aboutText = document.querySelector('#about p');
    const text = aboutText.textContent;
    aboutText.textContent = '';
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            aboutText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50);
        }
    }

    typeWriter();

    // Add a hover effect to project items
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            project.style.backgroundColor = 'rgba(0, 255, 0, 0.2)';
        });
        project.addEventListener('mouseout', () => {
            project.style.backgroundColor = 'rgba(0, 255, 0, 0.05)';
        });
    });
});
