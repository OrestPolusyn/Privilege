const elementChoices = Array.from(elementChoice);

if (!!elementChoices.length) {
  elementChoices.forEach(el => {
    const choicesNum = new Choices(el, {
      searchEnabled: false,
      itemSelectText: ''
    });
  });
}