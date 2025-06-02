export const CalcTotalScore = (scoreSheet) => {
    const sum = scoreSheet.reduce((accumulator, currentObject) => {
        return accumulator + currentObject["value"];
    }, 0);
    return sum;
};