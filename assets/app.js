/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any SCSS you import will output into a single css file (app.scss in this case)
import './styles/app.scss';

// start the Stimulus application
import './bootstrap';

// start the Bootstrap template
// this "modifies" the jquery module: adding behavior to it
// the bootstrap module export now
const bootstrap = require('bootstrap');

// and you can include specific pieces
require('bootstrap/js/dist/tooltip');
require('bootstrap/js/dist/popover');

window.addEventListener('DOMContentLoaded', () => {

    //TODO TOOLTIP

    //POPOVER
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    })
})
