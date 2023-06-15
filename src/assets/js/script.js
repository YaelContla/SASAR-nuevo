(function ($) {

    function onlyLetter(e) {
        const keynum9 = 9;
        const keynum39 = 39;
        const keynum8 = 8;
        const keynum44 = 44;
        const key = e.keyCode || e.which;
        const tecla = String.fromCharCode(key).toLowerCase();
        const letras = ' áéíóúàèìòùäëïöüabcdefghijklmnñopqrstuvwxyz';
        const especiales = [keynum8, keynum9, keynum39, keynum44];
        let tecla_especial = false
        for (var i in especiales) {
            if (key === especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if (letras.indexOf(tecla) === -1 && !tecla_especial) {
            return false;
        } else {
            return true;
        }
    }
    function isValidCURP(e) {
        const keynum47 = 47;
        const keynum81f = 8;
        const keynum48 = 48;
        const key = e.keyCode || e.which;
        const tecla = String.fromCharCode(key).toLowerCase();
        const letras = ' áéíóúàèìòùäëïöüabcdefghijklmnñopqrstuvwxyz1234567890';
        const keynum58 = 58;
        const especiales = [keynum47, keynum58, keynum81f, keynum48];
        let tecla_especial = false
        for (const i in especiales) {
            if (key === especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if (letras.indexOf(tecla) === -1 && !tecla_especial) {
            return false;
        } else {
            return true;
        }
    }
    function isValidCURP(e) {
        const keynum47 = 47;
        const keynum81f = 8;
        const keynum48 = 48;
        const key = e.keyCode || e.which;
        const tecla = String.fromCharCode(key).toLowerCase();
        const letras = ' áéíóúàèìòùäëïöüabcdefghijklmnñopqrstuvwxyz1234567890';
        const keynum58 = 58;
        const especiales = [keynum47, keynum58, keynum81f, keynum48];
        let tecla_especial = false
        for (const i in especiales) {
            if (key === especiales[i]) {
                tecla_especial = true;
                break;
            }
        }
        if (letras.indexOf(tecla) === -1 && !tecla_especial) {
            return false;
        } else {
            return true;
        }
    }
$(document).ready(function(){
/*Function that validates only letters
you only need to use classes in your inputs:
ValidLetters*/
$('.ValidLetters').each(function () {
    jQuery(this).on('keypress input', function (event) {
        if (event.type === 'keypress') {
            return onlyLetter(event);
        }
        if (event.type === 'input') {
            const bufferValue = $(this).val().replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ ]/g, '');
            $(this).val(bufferValue);
        }
    });
});
/*Function that validates numbers
you only need to use classes in your inputs:
ValidNumber or ValidOnlyNumber*/
        const keynum47 = 47;
        const keynum81f = 8;
        const keynum48 = 48;
    $('.ValidNumber, .ValidOnlyNumber').each(function () {
        jQuery(this).on('keypress input', function (event) {
            if (event.type === 'keypress') {
            const keynum = window.event ? window.event.keyCode : e.which;
            if ((keynum === keynum81f || keynum === keynum48 || keynum === 0))
                return true;
            if (keynum <= keynum47 || keynum >= keynum58) return false;
            return /\d/.test(String.fromCharCode(keynum));
                    }
            if (event.type === 'input') {
                var bufferValue = $(this).val().replace(/\D/g, '');
                $(this).val(bufferValue);
            }
        });
    });
    $('.ValidLettersNum').each(function () {
        jQuery(this).on('keypress input', function (event) {
            if (event.type === 'keypress') {
                return isValidCURP(event);
            }
            if (event.type === 'input') {
                const bufferValue = $(this).val().replace(/[^A-Za-zñÑáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ1234567890]/g, '');
                $(this).val(bufferValue);
            }
        });
        $('[data-toggle="tooltip"]').tooltip()
});
    $('#selectlote').on('change', function () {
        $('.aceptar-lotes').removeClass('disabled');
    });
    $('.aceptar-lotes').on('click', function () {
        $(".btn-xlsx").removeClass('disabled');
    });
    $('.bs-tooltip').tooltip();
});
})(window.jQuery);