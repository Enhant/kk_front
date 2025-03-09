import rnc from 'randomcolor';

const getPlayerColor = (name, luminosity = 'dark') => rnc({
    seed: name,
    luminosity
});

export default getPlayerColor;
