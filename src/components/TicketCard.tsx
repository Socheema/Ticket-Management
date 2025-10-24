import { Card } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Ticket } from '../contexts/TicketContext';
import { Edit2, Trash2 } from 'lucide-react';

interface TicketCardProps {
  ticket: Ticket;
  onEdit: (ticket: Ticket) => void;
  onDelete: (ticket: Ticket) => void;
}

export const TicketCard = ({ ticket, onEdit, onDelete }: TicketCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-700 border-green-200';
      case 'in_progress':
        return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'closed':
        return 'bg-gray-100 text-gray-700 border-gray-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'open':
        return 'Open';
      case 'in_progress':
        return 'In Progress';
      case 'closed':
        return 'Closed';
      default:
        return status;
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-gray-900 flex-1 pr-2">{ticket.title}</h3>
        <Badge className={getStatusColor(ticket.status)}>
          {getStatusLabel(ticket.status)}
        </Badge>
      </div>

      <p className="text-gray-600 mb-4 line-clamp-2">
        {ticket.description || 'No description provided'}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-gray-500">
          {formatDate(ticket.createdAt)}
        </span>

        <div className="flex gap-2">
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onEdit(ticket)}
            className="hover:bg-indigo-50 hover:text-indigo-600"
          >
            <Edit2 className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="ghost"
            onClick={() => onDelete(ticket)}
            className="hover:bg-red-50 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};
