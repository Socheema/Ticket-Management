import { useState } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { TicketCard } from '../components/TicketCard';
import { CreateEditTicketModal } from '../components/CreateEditTicketModal';
import { DeleteConfirmationDialog } from '../components/DeleteConfirmationDialog';
import { useTickets, Ticket, TicketStatus } from '../contexts/TicketContext';
import { toast } from 'sonner@2.0.3';
import { Plus, Search, Ticket as TicketIcon } from 'lucide-react';

export const TicketManagement = () => {
  const { tickets, createTicket, updateTicket, deleteTicket } = useTickets();
  const [searchQuery, setSearchQuery] = useState('');
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingTicket, setEditingTicket] = useState<Ticket | null>(null);
  const [deletingTicket, setDeletingTicket] = useState<Ticket | null>(null);

  const filteredTickets = tickets.filter(ticket =>
    ticket.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCreateTicket = (title: string, description: string, status: TicketStatus) => {
    createTicket(title, description, status);
    toast.success('Ticket created successfully');
  };

  const handleUpdateTicket = (title: string, description: string, status: TicketStatus) => {
    if (editingTicket) {
      updateTicket(editingTicket.id, title, description, status);
      toast.success('Ticket updated successfully');
      setEditingTicket(null);
    }
  };

  const handleDeleteTicket = () => {
    if (deletingTicket) {
      deleteTicket(deletingTicket.id);
      toast.success('Ticket deleted successfully');
      setDeletingTicket(null);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header variant="app" />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <h1 className="text-gray-900 mb-2">Tickets</h1>
              <p className="text-gray-600">
                Manage and track all your support tickets
              </p>
            </div>
            <Button onClick={() => setIsCreateModalOpen(true)}>
              <Plus className="w-4 h-4 mr-2" />
              Create New Ticket
            </Button>
          </div>

          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="search"
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Tickets Grid */}
          {filteredTickets.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onEdit={setEditingTicket}
                  onDelete={setDeletingTicket}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TicketIcon className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-gray-900 mb-2">
                {searchQuery ? 'No tickets found' : 'No tickets yet'}
              </h3>
              <p className="text-gray-600 mb-6">
                {searchQuery
                  ? 'Try adjusting your search terms'
                  : 'Create your first ticket to get started'}
              </p>
              {!searchQuery && (
                <Button onClick={() => setIsCreateModalOpen(true)}>
                  <Plus className="w-4 h-4 mr-2" />
                  Create First Ticket
                </Button>
              )}
            </div>
          )}
        </div>
      </main>

      <Footer />

      {/* Modals */}
      <CreateEditTicketModal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        onSave={handleCreateTicket}
      />

      <CreateEditTicketModal
        isOpen={!!editingTicket}
        onClose={() => setEditingTicket(null)}
        onSave={handleUpdateTicket}
        ticket={editingTicket}
      />

      <DeleteConfirmationDialog
        isOpen={!!deletingTicket}
        onClose={() => setDeletingTicket(null)}
        onConfirm={handleDeleteTicket}
        ticketTitle={deletingTicket?.title}
      />
    </div>
  );
};
