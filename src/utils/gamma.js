export const addGammaProperty = (data) => {
    data.forEach((point) => {
        const { Ash, Hue, Magnesium } = point;
        point.Gamma = (Ash * Hue) / Magnesium;
    });
};