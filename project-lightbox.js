document.addEventListener('DOMContentLoaded', () => {
    const figures = document.querySelectorAll('main .focus-figure img, main .project-image img');
    if (!figures.length) return;

    const dialog = document.createElement('dialog');
    dialog.className = 'project-lightbox';
    dialog.setAttribute('aria-label', 'Enlarged project image');

    const toolbar = document.createElement('div');
    toolbar.className = 'project-lightbox-toolbar';
    const caption = document.createElement('span');
    caption.className = 'project-lightbox-caption';
    const sizeButton = document.createElement('button');
    sizeButton.type = 'button';
    sizeButton.textContent = 'Actual size';
    sizeButton.setAttribute('aria-label', 'View image at actual size');
    const closeButton = document.createElement('button');
    closeButton.type = 'button';
    closeButton.textContent = 'Close ✕';
    closeButton.setAttribute('aria-label', 'Close enlarged image');
    toolbar.append(caption, sizeButton, closeButton);

    const viewport = document.createElement('div');
    viewport.className = 'project-lightbox-viewport';
    const enlarged = document.createElement('img');
    enlarged.className = 'project-lightbox-image';
    viewport.append(enlarged);
    dialog.append(toolbar, viewport);
    document.body.append(dialog);

    function openFigure(figure) {
        enlarged.src = figure.currentSrc || figure.src;
        enlarged.alt = figure.alt;
        caption.textContent = figure.closest('figure')?.querySelector('figcaption')?.textContent.trim() || figure.alt || 'Project image';
        dialog.classList.remove('is-actual-size');
        sizeButton.textContent = 'Actual size';
        sizeButton.setAttribute('aria-label', 'View image at actual size');
        viewport.scrollTop = 0;
        viewport.scrollLeft = 0;
        dialog.showModal();
        closeButton.focus();
    }

    figures.forEach((figure) => {
        const link = figure.closest('a');
        const trigger = link || figure;
        figure.classList.add('project-zoomable');

        if (!link) {
            figure.tabIndex = 0;
            figure.setAttribute('role', 'button');
            figure.setAttribute('aria-label', `Enlarge image: ${figure.alt || 'project figure'}`);
            figure.addEventListener('keydown', (event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    openFigure(figure);
                }
            });
        }

        trigger.addEventListener('click', (event) => {
            event.preventDefault();
            openFigure(figure);
        });
    });

    sizeButton.addEventListener('click', () => {
        const actualSize = dialog.classList.toggle('is-actual-size');
        sizeButton.textContent = actualSize ? 'Fit screen' : 'Actual size';
        sizeButton.setAttribute('aria-label', actualSize ? 'Fit image to screen' : 'View image at actual size');
        viewport.scrollTop = 0;
        viewport.scrollLeft = 0;
    });
    closeButton.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (event) => {
        if (event.target === dialog) dialog.close();
    });
});
