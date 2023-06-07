const asyncHandler = require("express-async-handler");
const contact=require("../models/contactModel")


//get all contact

//@route GET/api/contact

const getAllContacts = asyncHandler(async(req, res) => {
    const Contacts=await contact.find({user_id: req.user.id});
    //console.log(req.body)
    res.status(200).json(Contacts)
});

//@create a new contact
//POST api/contacts

const creatContact = asyncHandler(async (req, res) => {
    //console.log("result:", req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("please fill all the fields")
    }
    const Contacts= await contact.create({
        name,
        email,
        phone,
        user_id:req.user.id
    });

    res.status(201).json(Contacts);

});

//@get contact with id

//route GET api/contact/:id

const getContact = asyncHandler(async (req, res) => {
    const Contacts = await contact.findById(req.params.id);
    if(!Contacts){
        res.status(404);
        throw new Error("Contants not found")
    }
    res.status(200).json(Contacts);

});

//update contact

//route PUT api/contact/:id

const updateContact = asyncHandler(async (req, res) => {
    const Contacts= await contact.findById(req.params.id);
    if(!Contacts){
        res.status(404);
        throw new Error("Contact not found")
    }
    const updatedContact=await contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
        );
    res.status(200).json(updatedContact);

});


//DELETE CONTACT

//@route delete  api/contact/:id

const deleteContact = asyncHandler(async (req, res) => {
      const Contacts= await contact.findById(req.params.id);
      if(!Contacts){
        res.status(404);
        throw new Error("Contact not found")
      }
      await contact.deleteOne()

    res.status(200).json(Contacts);

});


module.exports = {
    getAllContacts,
    creatContact,
    getContact,
    updateContact,
    deleteContact
}