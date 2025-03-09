// const blackNumbers = [26, 35, 28, 29, 22, 31, 20, 33, 24, 10, 8, 11, 13, 6, 17, 2, 4, 15];
// const redNumbers = [3, 12, 7, 18, 9, 14, 1, 16, 5, 23, 30, 36, 27, 34, 25, 21, 19, 32];

const rouletteNumbers = [26, 3, 35, 12, 28, 7, 29, 18, 22, 9, 31, 14, 20, 1, 33, 16,
    24, 5, 10, 23, 8, 30, 11, 36, 13, 27, 6, 34, 17, 25, 2, 21, 4, 19, 15, 32];

const degreeDelta = 360/37;

export function getRouletteDegrees(winnerNumber) {
    let index = 0;
    if ((index = rouletteNumbers.findIndex(number => number === winnerNumber)) !== -1) {
        console.log(index)
        return (index + 1) * -degreeDelta;
    }

    return degreeDelta/2;
}
