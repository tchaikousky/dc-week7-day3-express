const express = require('express'),
    router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Hello World'
        },
        partials: {
            partial: 'partial-index'
        }
    });
       
});

module.exports = router;