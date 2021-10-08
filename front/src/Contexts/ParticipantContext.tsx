import { createContext, ReactNode, useContext, useState } from "react";
import { participantType } from "../types/participant";

interface ParticipantContextData {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
  participants: participantType[];
  setParticipants: (value: participantType[]) => void;
};

interface ModalProviderProps {
  children: ReactNode
};

const ParticipantContext = createContext(
  {} as ParticipantContextData
)

export function ParticipantProvider({ children }: ModalProviderProps) {
  const [showModal, setShowModal] = useState(false);
  const [participants, setParticipants] = useState<participantType[]>([]);
  return (
    <ParticipantContext.Provider value={{ showModal, setShowModal, participants, setParticipants }}>
      {children}
    </ParticipantContext.Provider>
  )
}

export const useParticipantContext = () => useContext(ParticipantContext);