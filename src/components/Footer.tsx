import { Link } from 'react-router-dom';
import { Ticket } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Ticket className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">TicketFlow</span>
            </div>
            <p className="text-gray-600 max-w-md">
              Streamline your support workflow with our modern ticket management system. Track, organize, and resolve tickets efficiently.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Security
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-gray-600">
          <p>&copy; {currentYear} TicketFlow. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
