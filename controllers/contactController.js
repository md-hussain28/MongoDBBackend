// contactController.js
import asyncHandler from 'express-async-handler'
import Contact from "../models/contactModel.js"
// @desc    Get all contacts
// @route   GET /api/contacts
// @access  Public
export const getContacts =asyncHandler(async (req, res) => {
  const contacts=await Contact.find();
   res.status(200).json(contacts);
});

// @desc    Create new contact
// @route   POST /api/contacts
// @access  Public
export const createContact =asyncHandler( async (req, res) => {
  console.log("Request body",req.body);
  const {name,email,phone}=req.body;
  if(!name||!email||!phone){
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact=await Contact.create(
    {
      name,email,phone
    }
  )
  res.status(200).json(contact);
});

// @desc    Get contact by ID
// @route   GET /api/contacts/:id
// @access  Public
export const getContactById =asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact for id ${req.params.id}` });
});

// @desc    Update contact by ID
// @route   PUT /api/contacts/:id
// @access  Public
export const updateContactById =asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

// @desc    Delete contact by ID
// @route   DELETE /api/contacts/:id
// @access  Public
export const deleteContactById =asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
});
