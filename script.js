// Active sidebar button switching
document.querySelectorAll('.aside-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.aside-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
    });
});
