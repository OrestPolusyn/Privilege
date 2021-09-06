const elementChoice = document.querySelectorAll('.js-choice');

elementChoice.forEach(el => {
  const choicesNum = new Choices(el, {
    searchEnabled: false,
    itemSelectText: ''
  });
});