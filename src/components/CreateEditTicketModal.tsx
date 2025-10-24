import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { Ticket, TicketStatus } from '../contexts/TicketContext';

interface CreateEditTicketModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (title: string, description: string, status: TicketStatus) => void;
  ticket?: Ticket | null;
}

export const CreateEditTicketModal = ({
  isOpen,
  onClose,
  onSave,
  ticket,
}: CreateEditTicketModalProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState<TicketStatus>('open');
  const [titleError, setTitleError] = useState('');

  useEffect(() => {
    if (ticket) {
      setTitle(ticket.title);
      setDescription(ticket.description);
      setStatus(ticket.status);
    } else {
      setTitle('');
      setDescription('');
      setStatus('open');
    }
    setTitleError('');
  }, [ticket, isOpen]);

  const handleSave = () => {
    setTitleError('');

    if (!title.trim()) {
      setTitleError('Title is required');
      return;
    }

    onSave(title, description, status);
    handleClose();
  };

  const handleClose = () => {
    setTitle('');
    setDescription('');
    setStatus('open');
    setTitleError('');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {ticket ? 'Edit Ticket' : 'Create New Ticket'}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-5 py-4">
          <div className="space-y-2">
            <Label htmlFor="title">
              Title <span className="text-red-500">*</span>
            </Label>
            <Input
              id="title"
              placeholder="Enter ticket title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className={titleError ? 'border-red-500' : ''}
            />
            {titleError && (
              <p className="text-red-600">{titleError}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="status">Status</Label>
            <Select value={status} onValueChange={(value) => setStatus(value as TicketStatus)}>
              <SelectTrigger id="status">
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in_progress">In Progress</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Enter ticket description (optional)"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={4}
            />
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            {ticket ? 'Save Changes' : 'Create Ticket'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
