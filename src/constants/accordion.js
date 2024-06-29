function toggleAccordion(element) {
    // Toggle active class on clicked accordion item
    element.classList.toggle('active');

    // Select accordion content within the clicked item
    var content = element.nextElementSibling;

    // Toggle height of accordion content with animation
    if (content.style.maxHeight) {
        content.style.maxHeight = null; // Collapse accordion content
    } else {
        content.style.maxHeight = content.scrollHeight + 'px'; // Expand accordion content
    }
}