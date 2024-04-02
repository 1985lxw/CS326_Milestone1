document.addEventListener('DOMContentLoaded', function() {
    const sections = [
        'overview',
        'application-parts',
        'data-requirements',
        'wire-frames',
        'real-world-connection',
        'integrative-experience'
    ];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const header = section.querySelector('h2');
        const content = section.querySelectorAll('p');

        // Hide content initially
        content.forEach(p => {
            p.style.display = 'none';
        });

        // Add click event to toggle content visibility
        header.addEventListener('click', function() {
            content.forEach(p => {
                p.style.display = p.style.display === 'none' ? 'block' : 'none';
            });
        });
    });
});