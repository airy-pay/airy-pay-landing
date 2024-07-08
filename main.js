document.addEventListener('scroll', function() {
    
    const scrollTop = window.scrollY;
    const scrollSpeed = -0.5;

    const yPos = -scrollTop * scrollSpeed + 'px';

    document.body.style.backgroundPositionY = yPos;
});