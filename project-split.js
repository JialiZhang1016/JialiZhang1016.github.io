document.addEventListener('DOMContentLoaded', () => {
    if (!document.body.classList.contains('project-resizable')) return;

    const minPercent = 20;
    const maxPercent = 55;
    const defaultPercent = 30;
    const storageKey = 'project-sidebar-percent';
    const root = document.documentElement;

    const handle = document.createElement('div');
    handle.className = 'project-resize-handle';
    handle.tabIndex = 0;
    handle.setAttribute('role', 'separator');
    handle.setAttribute('aria-orientation', 'vertical');
    handle.setAttribute('aria-label', 'Resize profile and project columns');
    handle.setAttribute('aria-valuemin', String(minPercent));
    handle.setAttribute('aria-valuemax', String(maxPercent));
    handle.title = 'Drag to resize · Arrow keys to adjust · Double-click to reset';

    const grip = document.createElement('span');
    grip.className = 'project-resize-grip';
    const arrows = document.createElement('span');
    arrows.className = 'arrows';
    arrows.textContent = '↔';
    const value = document.createElement('span');
    grip.append(arrows, value);
    handle.append(grip);
    document.body.append(handle);

    function clamp(percent) {
        return Math.min(maxPercent, Math.max(minPercent, Math.round(percent)));
    }

    function setPercent(percent, persist = false) {
        const sidebar = clamp(percent);
        const projects = 100 - sidebar;
        root.style.setProperty('--sidebar-width', `${sidebar}%`);
        root.style.setProperty('--main-width', `${projects}%`);
        root.style.setProperty('--project-main-max-width', `${1200 + (defaultPercent - sidebar) * 12}px`);
        value.textContent = `${sidebar}%`;
        handle.setAttribute('aria-valuenow', String(sidebar));
        handle.setAttribute('aria-valuetext', `${sidebar}% profile, ${projects}% projects`);
        if (persist) {
            try { localStorage.setItem(storageKey, String(sidebar)); } catch (_) { /* Storage may be unavailable. */ }
        }
    }

    let saved = defaultPercent;
    try {
        const parsed = Number(localStorage.getItem(storageKey));
        if (Number.isFinite(parsed) && parsed >= minPercent && parsed <= maxPercent) saved = parsed;
    } catch (_) { /* Keep the default split. */ }
    setPercent(saved);

    handle.addEventListener('pointerdown', (event) => {
        if (event.button !== 0 || window.innerWidth <= 1024) return;
        event.preventDefault();
        handle.setPointerCapture(event.pointerId);
        handle.classList.add('is-dragging');
        document.body.classList.add('is-resizing');
    });

    handle.addEventListener('pointermove', (event) => {
        if (!handle.hasPointerCapture(event.pointerId)) return;
        setPercent(event.clientX / window.innerWidth * 100);
    });

    function finishDrag(event) {
        if (!handle.hasPointerCapture(event.pointerId)) return;
        handle.releasePointerCapture(event.pointerId);
        handle.classList.remove('is-dragging');
        document.body.classList.remove('is-resizing');
        setPercent(Number(handle.getAttribute('aria-valuenow')), true);
    }
    handle.addEventListener('pointerup', finishDrag);
    handle.addEventListener('pointercancel', finishDrag);

    handle.addEventListener('keydown', (event) => {
        const current = Number(handle.getAttribute('aria-valuenow'));
        const step = event.shiftKey ? 5 : 1;
        let next;
        if (event.key === 'ArrowLeft') next = current - step;
        else if (event.key === 'ArrowRight') next = current + step;
        else if (event.key === 'Home') next = minPercent;
        else if (event.key === 'End') next = maxPercent;
        else return;
        event.preventDefault();
        setPercent(next, true);
    });

    handle.addEventListener('dblclick', () => setPercent(defaultPercent, true));
});
