const express = require('express')
const router = express.Router()
const {getContacts,getOneContact,addContact,updateContact,deleteContact} = require('../controllers/contactControllers');
const validateToken = require('../middleware/validateTokenHandler');


router.use(validateToken)
router.route('/').get(getContacts).post(addContact);
router.route('/:id').get(getOneContact).put(updateContact).delete(deleteContact);

// router.route('/').get(getContacts);

// router.route('/:id').get(getOneContact);

// router.route('/').post(addContact);

// router.route('/:id').put(updateContact);

// router.route('/:id').delete(deleteContact);

module.exports = router;