const rangeSlider = document.querySelector('.filter-price__slider'),
  inputDataNumber = document.querySelector('.filter-price__inner'),
  minPrice = document.querySelector('.filter-price__slider .min'),
  maxPrice = document.querySelector('.filter-price__slider .max');


if (rangeSlider) {
  let inputDatasetFrom = inputDataNumber.dataset.priceFrom,
    inputDatasetTo = inputDataNumber.dataset.priceTo;

  minPrice.textContent = `$` + inputDatasetFrom.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');
  maxPrice.textContent = `$` + inputDatasetTo.replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1.');

  noUiSlider.create(rangeSlider, {
    start: [inputDatasetFrom, inputDatasetTo],
    behaviour: 'tap',
    connect: true,
    step: 1,
    range: {
      'min': +inputDatasetFrom,
      'max': +inputDatasetTo
    },
    format: wNumb({
      decimals: 3,
      thousand: '.',
      prefix: '$'
    })
  });

  const input0 = document.getElementById('price-from');
  const input1 = document.getElementById('price-to');
  const inputs = [input0, input1];

  rangeSlider.noUiSlider.on('update', function (values, handle) {
    inputs[handle].value = values[handle];
  });

  const setRangeSlider = (i, value) => {
    let arr = [null, null];
    arr[i] = value;
    rangeSlider.noUiSlider.set(arr);
  };

  inputs.forEach((el, index) => {
    el.addEventListener('change', (e) => {
      setRangeSlider(index, e.currentTarget.value);
    });
  });
}