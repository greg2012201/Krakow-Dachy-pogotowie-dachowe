export const modifierManage = (elements, modifier, remove) => {
  argValidation(elements, modifier, remove);
  elements.map((element) => {
    if (!remove) {
      element.classList.add(`${getClass(element, 0)}${modifier}`);
    } else {
      element.classList.remove(`${getClass(element, 0)}${modifier}`);
    }
  });
};

const argValidation = (elements, modifier, remove) => {
  const isElements =
    Array.isArray(elements) && elements === '[object NodeList]';
  const regex = /--[a-z0-9]/;
  const isModifier = regex.test(modifier);
  const isRemove = typeof remove === 'boolean';

  if (!isElements) {
    throw Error(
      `The argument: "${elements}" is not valid. Provide a valid value, the expected array of html elements such as div etc.`
    );
  }
  if (!isModifier) {
    throw Error(
      `The argument: "${modifier}" is not valid. Provide a valid value, for example:'--modifier'`
    );
  }
  if (!isRemove) {
    throw Error(
      `The argument: "${remove}" is not valid. Provide a valid value: true or false`
    );
  }
};
const getClass = (element, index) => element.classList.item(index);
