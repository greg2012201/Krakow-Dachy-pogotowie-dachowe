import {getElementPosition} from './getElementPosition';
import {modifierManage} from './modifierManage';
const getElementToAddModifier = (elements, modifier, toggle) => {
  elements.flat().map((element) => {
    if (isInView(getElementPosition(element))) {
      modifierManage([element], modifier, false);
    } else if (!isInView(getElementPosition(element)) && toggle) {
      modifierManage([element], modifier, true);
    }
  });
};

const isInView = ({top, bottom, vieportHeight}) => {
  return top - vieportHeight <= 0 && bottom >= 0;
};

export const isElementInSight = (elements, toggle) => {
  const init = () => {
    getElementToAddModifier(elements, '--into-view', toggle);
    requestAnimationFrame(init);
  };

  getElementToAddModifier(elements, '--into-view', toggle);
  document.addEventListener('DOMContentLoaded', init);
};
