const elementChoices = Array.from(document.querySelectorAll('.js-choice'));

if (!!elementChoices.length) {
  elementChoices.forEach(el => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });
}