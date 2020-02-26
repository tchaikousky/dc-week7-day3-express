const express = require('express'),
    router = express.Router();

router.get('/:age?', (req, res) => {
    const {age} = req.params;
    let yearOfBirth = getYear(age);

    res
    .status(200)
    .send(`<h1>You were born in ${yearOfBirth}.`)
    .end();

    function getYear(num) {
        let age = 2020 - num;
        return age;
    };
});




module.exports = router;