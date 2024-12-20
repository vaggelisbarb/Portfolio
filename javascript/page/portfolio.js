downloadCV();
redirectToGihub();
redirectToLinkedin();

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

function redirectToGihub() {
    document.querySelector('.portfolio__social-link--github')
        .addEventListener('click', () => {
            console.log('GitHub img clicked');
            window.location.href = 'https://github.com/vaggelisbarb';
        });
}

function redirectToLinkedin() {
    document.querySelector('.portfolio__social-link--linkedin')
        .addEventListener('click', () => {
            console.log('LinkedIn img clicked');
            window.location.href = 'https://www.linkedin.com/in/evangelos-barmpalias-488b3b18b/';
        });
}

function openEducationPage() {
    const portfolioContainer = document.querySelector('.portfolio');
}