const getNameAndAge = (names, birthYears) => {
    const result = [];

    for (let i = 0; i < names.length; i++) {
        const currentYear = new Date().getFullYear();
        result.push({ name: names[i], age: currentYear - birthYears[i] });
    };

    return result;
}

export default getNameAndAge;



