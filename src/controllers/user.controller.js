const users = [
    { id: 1, name: "Ashish", age: 30, city: "Bangalore" },
    { id: 2, name: "Rahul", age: 25, city: "Delhi" },
    { id: 3, name: "Priya", age: 28, city: "Mumbai" },
    { id: 4, name: "Amit", age: 25, city: "Delhi" },
];

const getFilteredUsers = (req, res) => {
    const query = req.query;
    const unsupportedFilter = Object.keys(query).find(
        (key) => key !== "age" && key !== "city",
    );

    if (unsupportedFilter) {
        return res.status(400).json({
            error: {
                code: "UNSUPPORTED_FILTER",
                message: `"${unsupportedFilter}" is not a supported filter. Use age or city.`,
            },
        });
    }

    const ageValue = query.age;
    let age;

    if (ageValue !== undefined) {
        if (typeof ageValue !== "string" || !/^\d+$/.test(ageValue)) {
            return res.status(400).json({
                error: {
                    code: "INVALID_AGE_FILTER",
                    message: "The age filter must be a whole number from 0 to 120.",
                },
            });
        }

        age = Number(ageValue);

        if (!Number.isSafeInteger(age) || age > 120) {
            return res.status(400).json({
                error: {
                    code: "INVALID_AGE_FILTER",
                    message: "The age filter must be a whole number from 0 to 120.",
                },
            });
        }
    }

    const cityValue = query.city;

    if (
        cityValue !== undefined &&
        (typeof cityValue !== "string" ||
            cityValue.trim().length === 0 ||
            cityValue.trim().length > 100)
    ) {
        return res.status(400).json({
            error: {
                code: "INVALID_CITY_FILTER",
                message: "The city filter must contain between 1 and 100 characters.",
            },
        });
    }

    let filteredUsers = users;

    if (age !== undefined) {
        filteredUsers = filteredUsers.filter(
            (user) => user.age === age,
        );
    }

    if (cityValue !== undefined) {
        const normalizedCity = cityValue.trim().toLowerCase();
        filteredUsers = filteredUsers.filter(
            (user) => user.city.toLowerCase() === normalizedCity,
        );
    }

    const appliedFilters = {};

    if (ageValue !== undefined) {
        appliedFilters.age = ageValue;
    }

    if (cityValue !== undefined) {
        appliedFilters.city = cityValue.trim();
    }

    res.json({
        filters: appliedFilters,
        results: filteredUsers,
    });
};

module.exports = {
    getFilteredUsers,
};
