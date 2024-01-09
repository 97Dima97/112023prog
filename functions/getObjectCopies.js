const getObjectCopies = (obj, number) => {
    let result = [];

    for (let i = 1; i <= number; i++) {
        result.push(Object.assign({}, obj, { serialNumber: i }));
    }

    return result;
}

export default getObjectCopies;







