function downloadCV() {
    // Implement download CV functionality here
    
    document.querySelector('.portfolio__button--download-cv')
        .addEventListener('click', () => {
            console.log('Download CV button clicked');
            const link = document.createElement('a');

            link.href = '../public/resume/Barbalias Evangelos_Resume_2024.pdf';
            link.download = 'Barbalias_Evangelos_Resume_2024.pdf';

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
}

function redirectToGithub() {
    console.log('GitHub icon clicked');
    window.location.href = 'https://github.com/vaggelisbarb';
}

function redirectToLinkedin() {
    console.log('LinkedIn icon clicked');
    window.location.href = 'https://www.linkedin.com/in/evangelos-barmpalias-488b3b18b/';
}

function openEducationPage() {
    window.location.href = 'education.html'; // Redirect to education.html
}

function openThesisRepo() {
    window.location.href = 'https://github.com/vaggelisbarb/RISCV-Microprocessor';
}