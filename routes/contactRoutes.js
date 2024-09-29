import express from "express";
import {
  getContacts,
  createContact,
  getContactById,
  updateContactById,
  deleteContactById,
} from "../controllers/contactController.js";
const router = express.Router();

router
   .route("/")
   .get(getContacts)
   .post(createContact);

router
  .route("/:id")
  .get(getContactById)
  .put(updateContactById)
  .delete(deleteContactById);

export default router;
