document.querySelectorAll('.faq-question').forEach(function (q) {
    q.addEventListener('click', function () {
        const item = q.parentElement;
        const answer = item.querySelector('.faq-answer');
        const icon = q.querySelector('.faq-icon');
        const isOpen = answer.style.maxHeight;
        // Close all
        document.querySelectorAll('.faq-answer').forEach(a => {
            a.style.maxHeight = null;
            a.previousElementSibling.querySelector('.faq-icon').textContent = '+';
        });
        // Toggle current
        if (!isOpen) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            icon.textContent = '−';
        }
    });
    q.addEventListener('mouseenter', function () {
        q.style.filter = 'brightness(1.3)';
    });
    q.addEventListener('mouseleave', function () {
        q.style.filter = '';
    });
});
// Hide all answers by default
document.querySelectorAll('.faq-answer').forEach(a => a.style.maxHeight = null);