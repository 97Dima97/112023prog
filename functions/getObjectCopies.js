const getObjectCopies = (obj, namber) => {
    let result = [];

    for (let i = 1; i < namber + 1; i++) {
        result.push(Object.assign({}, obj, { serialNumber: i }));
    }

    return result;
}

export default getObjectCopies;







