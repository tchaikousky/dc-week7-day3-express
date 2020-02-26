const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    const snippet = `<h1>Foo Page</h1>`;
    res
    .status(200)
    .send(`<h1>Foo</h1>`)
    .end();
});

module.exports = router;