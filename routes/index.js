const express = requiere('express');
const router = express.router.Router();

/*Get home page*/

router.get('/',(req, res, next) => {
    res.render('index')
});
    
module.exports = router;