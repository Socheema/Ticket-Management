import { useNavigate } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { useTickets } from '../contexts/TicketContext';
import { Ticket, CheckCircle2, Clock, ArrowRight } from 'lucide-react';

export const Dashboard = () => {
  const navigate = useNavigate();
  const { tickets } = useTickets();

  const openTickets = tickets.filter(t => t.status === 'open').length;
  const inProgressTickets = tickets.filter(t => t.status === 'in_progress').length;
  const closedTickets = tickets.filter(t => t.status === 'closed').length;
  const totalTickets = tickets.length;

  const stats = [
    {
      title: 'Total Tickets',
      value: totalTickets,
      icon: Ticket,
      color: 'bg-indigo-100 text-indigo-600',
    },
    {
      title: 'Open Tickets',
      value: openTickets,
      icon: Clock,
      color: 'bg-green-100 text-green-600',
    },
    {
      title: 'Resolved Tickets',
      value: closedTickets,
      icon: CheckCircle2,
      color: 'bg-gray-100 text-gray-600',
    },
  ];

  const recentTickets = tickets.slice(0, 5);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header variant="app" />

      <main className="flex-1 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">
              Overview of your ticket management system
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card key={index} className="p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${stat.color}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <Card className="p-8 bg-gradient-to-br from-indigo-600 to-purple-600 text-white">
              <h2 className="text-white mb-2">Manage Tickets</h2>
              <p className="text-indigo-100 mb-6">
                View, create, edit, and delete your support tickets
              </p>
              <Button variant="secondary" onClick={() => navigate('/tickets')}>
                Go to Tickets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>

            <Card className="p-8">
              <h2 className="text-gray-900 mb-2">In Progress</h2>
              <p className="text-gray-600 mb-6">
                You have {inProgressTickets} {inProgressTickets === 1 ? 'ticket' : 'tickets'} currently being worked on
              </p>
              <Button variant="outline" onClick={() => navigate('/tickets')}>
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Card>
          </div>

          {/* Recent Activity */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-gray-900">Recent Tickets</h2>
              <Button variant="ghost" onClick={() => navigate('/tickets')}>
                View All
              </Button>
            </div>

            {recentTickets.length > 0 ? (
              <div className="space-y-4">
                {recentTickets.map((ticket) => (
                  <div
                    key={ticket.id}
                    className="flex items-start justify-between p-4 rounded-lg border hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex-1">
                      <h3 className="text-gray-900 mb-1">{ticket.title}</h3>
                      <p className="text-gray-600 line-clamp-1">{ticket.description}</p>
                    </div>
                    <div className="ml-4 flex items-center gap-2">
                      <span
                        className={`px-3 py-1 rounded-full ${
                          ticket.status === 'open'
                            ? 'bg-green-100 text-green-700'
                            : ticket.status === 'in_progress'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {ticket.status.replace('_', ' ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Ticket className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 mb-4">No tickets yet</p>
                <Button onClick={() => navigate('/tickets')}>
                  Create Your First Ticket
                </Button>
              </div>
            )}
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};
