import mongoose from "mongoose";
import Joi from "joi";
import IPlace from "../dtos/IPlace";

const placeSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId, ref:'User',
    required: true
  },
  title: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 255,
  },
  address: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 255,
  },
  photos: {
    type: [String],
    required: true,
  },
  description: {
    types: String,
    required: true,
    minLength: 10,
    maxLength: 500,
  },
  perks: {
    type: [String],
    required: true,
  },
  extraInfo: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  checkIn: {
    type: Number,
    required: true,
    min: 1,
    max: 60,
  },
  checkOut: {
    type: Number,
    required: true,
    min: 1,
    max: 60,
  },
  maxGuests: {
    type: Number,
    required: true,
    min: 1,
    max: 100,
  },
});

const Place = mongoose.model("Place", placeSchema);

function validatePlace(place: IPlace) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    address: Joi.string().min(10).max(255).required(),
    photos: Joi.array().items(Joi.string()).required(),
    description: Joi.string().min(10).max(500).required(),
    perks: Joi.array().items(Joi.string()).required(),
    extraInfo: Joi.string().min(3).max(50).required(),
    checkIn: Joi.number().integer().min(1).max(60).required(),
    checkOut: Joi.number().integer().min(1).max(60).required(),
    maxGuests: Joi.number().integer().min(1).max(100).required(),
  });

  return schema.validate(place);
}

export { validatePlace, Place };
