export const modifierManage = (elements, modifier, remove) => {
  elements.flat().map((element) => {
    if (!remove) {
      element.classList.add(`${getClass(element, 0)}${modifier}`);
    } else {
      element.classList.remove(`${getClass(element, 0)}${modifier}`);
    }
  });
};

const getClass = (element, index) => element.classList.item(index);
