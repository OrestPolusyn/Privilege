if (rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [20, 5000],
    behaviour: 'tap',
    connect: true,
    step: 1,
    range: {
      'min': [0],
      'max': [10000]
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