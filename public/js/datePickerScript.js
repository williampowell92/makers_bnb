$(() => {
  const dateFormat = 'dd/mm/yyyy';

  function getDate(element) {
    let date;
    try {
      date = $.datepicker.parseDate(dateFormat, element.value);
    } catch (error) {
      date = null;
    }
    return date;
  }

  const to = $('.input_field__endDate').datepicker({
    defaultDate: '+1w',
    changeMonth: true,
    numberOfMonths: 1
  }).on('change', () => {
    from.datepicker('option', 'maxDate', getDate(this));
  });

  const from = $('.input_field__startDate').datepicker({
    defaultDate: '+1w',
    changeMonth: true,
    numberOfMonths: 1
  }).on('change', () => {
    to.datepicker('option', 'minDate', getDate(this));
  });
});
