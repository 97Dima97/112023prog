const getNameAndAge = (names, birthYears) => {
    const result = [];

    for (let i = 0; i < names.length; i++) {
        const currentYear = new Date().getFullYear() - birthYears[i];
        result.push({ name: names[i], age: currentYear });
    };

    return result;
}

export default getNameAndAge;



