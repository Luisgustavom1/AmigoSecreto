import { Schema, model } from "mongoose";

import { ParticipantType } from '../../types';

const ParticipantSchema = new Schema<ParticipantType>({
  name: {type: String, required: true},
  email: {type: String, required: true},
  amigoSecreto: {type: String, default: ''} 
}, {
  timestamps: true,
});

const ParticipantModel = model<ParticipantType>('Participant', ParticipantSchema);

module.exports = {
  allParticipants: async () => {
    const participants = await ParticipantModel.find();

    return participants;
  },

  addParticipant: async (email: string, name: string) => {
    const participant = await ParticipantModel.create({
      email: email,
      name: name,
    })
    return participant
  },

  findByEmail: async (email: string) => {
    const participant = await ParticipantModel.findOne({ email });
    
    return participant
  },

  updateParticipant: async (id: string, name: string, email: string) => {
    const participant = await ParticipantModel.findByIdAndUpdate(id, {
      name,
      email,
    });
    
    return participant
  },

  updateAmigoSecreto: async (id: string, amigoSecreto: string) => {
    const participant = await ParticipantModel.findByIdAndUpdate(id, {
      amigoSecreto
    });
    
    return participant
  },

  deleteParticipant: async (id: string) => {
    await ParticipantModel.findByIdAndRemove(id);
  },

  deleteAll: async () => {
    await ParticipantModel.deleteMany({})
  }
}
