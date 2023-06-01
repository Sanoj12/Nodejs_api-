const express = require('express')
const router = express.Router();
const {
    getAllContacts,
    creatContact,
    getContact,
    updateContact,
    deleteContact 

} =require('../controller/contactController')

router.get('/api/contact', getAllContacts).post('/api/contact',creatContact);




router.get('/api/contact/:id',getContact)

router.put('/api/contact/:id',updateContact)

router.delete('/api/contact/:id', deleteContact)



module.exports = router;