const express = require('express')
const router = express.Router();
const {
    getAllContacts,
    creatContact,
    getContact,
    updateContact,
    deleteContact 

} =require('../controller/contactController');
const vaildateToken = require('../middleware/vaildateTokenHandler');



router.get('/api/contact',vaildateToken, getAllContacts).post('/api/contact',vaildateToken,creatContact);




router.get('/api/contact/:id',vaildateToken,getContact)

router.put('/api/contact/:id',vaildateToken,updateContact)

router.delete('/api/contact/:id',vaildateToken,deleteContact)



module.exports = router;