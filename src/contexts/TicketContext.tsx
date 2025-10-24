import React, { createContext, useContext, useState, ReactNode } from 'react';

export type TicketStatus = 'open' | 'in_progress' | 'closed';

export interface Ticket {
  id: string;
  title: string;
  description: string;
  status: TicketStatus;
  createdAt: Date;
  updatedAt: Date;
}

interface TicketContextType {
  tickets: Ticket[];
  createTicket: (title: string, description: string, status: TicketStatus) => void;
  updateTicket: (id: string, title: string, description: string, status: TicketStatus) => void;
  deleteTicket: (id: string) => void;
  getTicketById: (id: string) => Ticket | undefined;
}

const TicketContext = createContext<TicketContextType | undefined>(undefined);

const mockTickets: Ticket[] = [
  {
    id: '1',
    title: 'Website login not working',
    description: 'Users are reporting they cannot log into the website',
    status: 'open',
    createdAt: new Date(2024, 9, 20),
    updatedAt: new Date(2024, 9, 20),
  },
  {
    id: '2',
    title: 'Add dark mode feature',
    description: 'Implement dark mode toggle for better user experience',
    status: 'in_progress',
    createdAt: new Date(2024, 9, 21),
    updatedAt: new Date(2024, 9, 22),
  },
  {
    id: '3',
    title: 'Fix mobile responsive issues',
    description: 'Dashboard not displaying correctly on mobile devices',
    status: 'closed',
    createdAt: new Date(2024, 9, 18),
    updatedAt: new Date(2024, 9, 19),
  },
  {
    id: '4',
    title: 'Update user profile page',
    description: 'Add ability to upload profile pictures',
    status: 'open',
    createdAt: new Date(2024, 9, 23),
    updatedAt: new Date(2024, 9, 23),
  },
];

export const TicketProvider = ({ children }: { children: ReactNode }) => {
  const [tickets, setTickets] = useState<Ticket[]>(mockTickets);

  const createTicket = (title: string, description: string, status: TicketStatus) => {
    const newTicket: Ticket = {
      id: Date.now().toString(),
      title,
      description,
      status,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    setTickets(prev => [newTicket, ...prev]);
  };

  const updateTicket = (id: string, title: string, description: string, status: TicketStatus) => {
    setTickets(prev =>
      prev.map(ticket =>
        ticket.id === id
          ? { ...ticket, title, description, status, updatedAt: new Date() }
          : ticket
      )
    );
  };

  const deleteTicket = (id: string) => {
    setTickets(prev => prev.filter(ticket => ticket.id !== id));
  };

  const getTicketById = (id: string) => {
    return tickets.find(ticket => ticket.id === id);
  };

  return (
    <TicketContext.Provider value={{ tickets, createTicket, updateTicket, deleteTicket, getTicketById }}>
      {children}
    </TicketContext.Provider>
  );
};

export const useTickets = () => {
  const context = useContext(TicketContext);
  if (context === undefined) {
    throw new Error('useTickets must be used within a TicketProvider');
  }
  return context;
};
