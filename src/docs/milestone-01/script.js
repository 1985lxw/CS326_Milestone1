document.addEventListener("DOMContentLoaded", function() {
    const sections = ["overview", "application-parts", "data-requirements", "wire-frames", "real-world-connection", "integrative-experience"];

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const header = section.querySelector("h2");
        const content = section.querySelectorAll("p, .wire-frame-cont"); // Include wireframe containers in content

        // Set initial state to collapsed
        content.forEach(item => {
            item.style.display = "none";
        });

        // Add click event listener to toggle visibility
        header.addEventListener("click", function() {
            if (content[0].style.display === "none") {
                // Expand the section
                content.forEach(item => {
                    item.style.display = "block";
                });
                header.innerHTML = header.innerHTML.replace("Expand", "Collapse");
            } else {
                // Collapse the section
                content.forEach(item => {
                    item.style.display = "none";
                });
                header.innerHTML = header.innerHTML.replace("Collapse", "Expand");
            }
        });
    });
});