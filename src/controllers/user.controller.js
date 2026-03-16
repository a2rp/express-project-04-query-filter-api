const users = [
    { id: 1, name: "Ashish", age: 30, city: "Bangalore" },
    { id: 2, name: "Rahul", age: 25, city: "Delhi" },
    { id: 3, name: "Priya", age: 28, city: "Mumbai" },
    { id: 4, name: "Amit", age: 25, city: "Delhi" },
];

const getFilteredUsers = (req, res) => {
    const { age, city } = req.query;

    let filteredUsers = users;

    if (age) {
        filteredUsers = filteredUsers.filter(
            (user) => user.age === Number(age),
        );
    }

    if (city) {
        filteredUsers = filteredUsers.filter(
            (user) => user.city.toLowerCase() === city.toLowerCase(),
        );
    }

    res.json({
        filters: req.query,
        results: filteredUsers,
    });
};

module.exports = {
    getFilteredUsers,
};
