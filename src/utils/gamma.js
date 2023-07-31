export const AddGammaProperty = (data) => {
    data.forEach((point) => {
        const { Ash, Hue, Magnesium } = point;
        point.Gamma = (Ash * Hue) / Magnesium;
    });
};