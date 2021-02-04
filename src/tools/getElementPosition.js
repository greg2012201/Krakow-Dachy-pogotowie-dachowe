export const getElementPosition = (element) => { //getRectParams
    const rect = element.getBoundingClientRect();
    return {
        top: rect.top,
        bottom: rect.bottom,
        width: rect.width,
        height: rect.height,
        vieportHeight: window.innerHeight,
    };
};