document.addEventListener('DOMContentLoaded', function () {
    var lightbox = document.getElementById('portfolio-lightbox');
    if (!lightbox) return;

    var lightboxImg = document.getElementById('portfolio-lightbox-img');
    var lightboxTitle = document.getElementById('portfolio-lightbox-title');
    var lightboxDesc = document.getElementById('portfolio-lightbox-desc');
    var closeBtn = lightbox.querySelector('.portfolio-lightbox-close');
    var backdrop = lightbox.querySelector('.portfolio-lightbox-backdrop');

    function openLightbox(tile) {
        lightboxImg.src = tile.dataset.full;
        lightboxImg.alt = tile.dataset.title || '';
        lightboxTitle.textContent = tile.dataset.title || '';
        lightboxTitle.href = tile.dataset.url || '#';
        lightboxDesc.textContent = tile.dataset.caption || '';
        lightbox.hidden = false;
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        lightbox.hidden = true;
        lightboxImg.src = '';
        document.body.style.overflow = '';
    }

    document.querySelectorAll('.portfolio-tile').forEach(function (tile) {
        tile.addEventListener('click', function (event) {
            event.preventDefault();
            openLightbox(tile);
        });
    });

    closeBtn.addEventListener('click', closeLightbox);
    backdrop.addEventListener('click', closeLightbox);
    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !lightbox.hidden) closeLightbox();
    });
});
