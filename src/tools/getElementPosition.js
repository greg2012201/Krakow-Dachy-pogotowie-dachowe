export const getElementPosition = (element) => { //getRectParams
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        bottom: rect.bottom,
        vieportHeight: window.innerHeight,
    };
};