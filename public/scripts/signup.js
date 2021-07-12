
var today = new Date();
var day = parseInt(String(today.getDate()).padStart(2, '0'));
var month = parseInt(String(today.getMonth()).padStart(2, '0'));
var year = today.getFullYear();

const datepicker = MCDatepicker.create({
    el: '#bday',
    dateFormat: 'MMM-DD-YYYY',
    bodyType: 'inline',
    maxDate: new Date(year - 13, month, day)
})