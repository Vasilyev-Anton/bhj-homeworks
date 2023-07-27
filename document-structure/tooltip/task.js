'use strict';

const hasTooltip = Array.from(document.querySelectorAll('.has-tooltip'));

hasTooltip.forEach((item) => {
    item.insertAdjacentHTML('beforeEnd', `<div class='tooltip'>${item.title}</div>`);

    const tooltip = item.querySelector('.tooltip');

    const coordinates = item.getBoundingClientRect();
    tooltip.style.left = coordinates.left + 'px';
    tooltip.style.top = coordinates.bottom + 7 + 'px';

    item.addEventListener('click', (item) => {
        item.preventDefault();

        if (tooltip.classList.contains('tooltip_active')) {
            tooltip.classList.remove('tooltip_active');
        } else {
            document
                .querySelectorAll('.tooltip_active')
                .forEach((item) => item.classList.remove('tooltip_active'));

            tooltip.classList.add('tooltip_active');
        }
    });
});