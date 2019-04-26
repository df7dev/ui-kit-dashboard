import $ from 'jquery';
window.jQuery = $;
window.$ = $;
console.log( "Desenvolvido por: @diogofrancoweb" );
import 'bootstrap';
import '../../node_modules/@fortawesome/fontawesome-free/js/all';
import 'chart.js';
import 'chartjs-plugin-datalabels';
import './custom.js';

$(document).ready(function() {
    $('.table-dashboard tbody tr').click(function(event) {
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }
    });
    $('.table-dashboard tbody tr').on('touchstart', '.publications', function(){
        if (event.target.type !== 'checkbox') {
            $(':checkbox', this).trigger('click');
        }
    });
});
