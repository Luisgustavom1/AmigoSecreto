import { Request, Response } from 'express';
import { ParticipantType } from '../../types';
import sendEmail from '../../config/email';

const validator = require('validator');
const Participant = require('../models/Participant');

exports.getAllParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await Participant.allParticipants();

    res.status(200).json({
      success: true,
      participants
    });
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err,
    })
  }
};

exports.addParticipant = async (req: Request, res: Response) => {  
  try {
    const { name, email } = req.body;
    
    if(!name || !email) {
      return res.status(404).json({
        success: false,
        message: 'Insuficient data'
      })
    } 

    if(!validator.isEmail(email)) return res.status(404).json({
      success: false,
      message: 'Email invalid'
    })

    const participant = await Participant.findByEmail(email);
    
    if(!participant) {
      const newParticipant = await Participant.addParticipant(email, name);

      res.status(201).json({
        success: true,
        data: newParticipant,
        message: 'Participant successfully added',
      });
    } else {
      res.json({
        success: false,
        message: 'Participant already registered'
      })
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    })
  }
};

exports.editParticipant = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    if (!id) return res.status(404);
    
    const participant = await Participant.updateParticipant(id, name, email);
    
    res.status(200).json({
      success: true,
      message: 'Participante editado',
      participant
    })

  } catch (err) {
    res.status(400).json({
      success: false,
      message: err
    })
  }
};  

exports.deleteParticipant = async (req: Request, res: Response) => {
  try {
    const { id } = req.headers;

    if(!id) return res.status(400).json({
      success: false,
      message: 'Missing Data'
    })

    await Participant.deleteParticipant(id);
    
    res.status(200).json({
      success: true,
      message: 'Participant successfully removed',
    })
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err
    })
  }
};

exports.sortParticipants = async (req: Request, res: Response) => {
  try {
    const participants = await Participant.allParticipants();
    const drawnParticipants = [];

    const getSecretFriend = async (friend: number) => {
      const drawnParticipant = participants[drawnParticipants[friend]];
      const currentParticipant = participants[friend];
      
      currentParticipant.amigoSecreto = drawnParticipant.name;
      
      await Participant.updateAmigoSecreto(currentParticipant._id, drawnParticipant.name);
    };
    
    const getRandomIndex = (friend: number) => {
      const index = Math.floor(Math.random() * participants.length);
      const alreadyDrawn = drawnParticipants.includes(index);

      if(alreadyDrawn || drawnParticipants.length === index) {
        return getRandomIndex(friend);
      };

      drawnParticipants.push(index);

      getSecretFriend(friend);    
    }
    
    for (var c = 0; c < participants.length; c++) {
      getRandomIndex(c);
    }

    await participants.map((participant: ParticipantType) => 
      sendEmail(
        process.env.NODEMAILER_EMAIL, 
        participant.email, 
        'Amigo Secreto da eCondos', 
        `Olá, ${participant.name} tudo bem?
        Seu amigo secreto é o(a) ${participant.amigoSecreto}, capriche no presente!!`
      )
      .catch(err => console.log(err))
    )

    return res.status(200).json({
      success: true,
      message: 'Successfully sent emails'
    })
  } catch (err) {
    return res.json({
      success: false,
      message: err
    })
  }
}

exports.newSecretFriend = async (req: Request, res: Response) => {
  try {
    await Participant.deleteAll();

    return res.status(200).json({
      success: true,
      message: 'New secret friend'
    })
  } catch (err) {
    return res.json({
      success: false,
      message: err
    })
  }
};