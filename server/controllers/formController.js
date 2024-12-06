const Form = require('../models/Form');
const { v4: uuidv4 } = require('uuid');

exports.createForm = async (req, res) => {
  try {
    const { title, headerImage, questions } = req.body;
    
    const publicId = uuidv4();

    const newForm = new Form({
      title,
      headerImage,
      questions,
      publicId,
      createdBy: req.user ? req.user._id : null
    });

    await newForm.save();

    res.status(201).json({
      message: 'Form created successfully',
      form: newForm,
      shareLink: `/form/${publicId}`
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Error creating form', 
      error: error.message 
    });
  }
};

exports.getFormByPublicId = async (req, res) => {
  try {
    const { publicId } = req.params;
    const form = await Form.findOne({ publicId });

    if (!form) {
      return res.status(404).json({ message: 'Form not found' });
    }

    res.json(form);
  } catch (error) {
    res.status(500).json({ 
      message: 'Error fetching form', 
      error: error.message 
    });
  }
};
