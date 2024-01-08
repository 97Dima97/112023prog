const getComparisonResultObj = (objOne, objTwo) => {
    objOne = Object.keys(objOne);
    objTwo = Object.keys(objTwo);
    let result = {};
    result = objOne.filter(el => objTwo.indexOf(el) > -1);

    return { identicalProps: result, objOne: objOne, objTwo: objTwo };

}

export default getComparisonResultObj;







