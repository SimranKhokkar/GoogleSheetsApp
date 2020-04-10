const router = require('express').Router();
const applicationController = require('../controllers/index');

/**
 * @url '/'
 * @method 'GET'
 */
router.get('/', (req, res) => {   
    res.render('first');
});

/**
 * @url '/sheetData'
 * @method 'POST'
 */
router.post('/sheetData', (req, res) => {
    applicationController.displaySheetData(req.body, (err, result) => {
        if (err) {
            res.status(500).json(err);
        }
        else {
            res.json({result}).status(200); 
        }
    });
});

module.exports = router;