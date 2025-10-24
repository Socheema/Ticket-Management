import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { WaveBackground } from '../components/WaveBackground';
import { DecorativeCircles } from '../components/DecorativeCircles';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CheckCircle2, Clock, BarChart3 } from 'lucide-react';

export const LandingPage = () => {
  const navigate = useNavigate();
  
  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Monitor ticket status and progress in real-time with instant updates.',
      icon: Clock,
      image: 'https://images.unsplash.com/photo-1748256622734-92241ae7b43f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjEyNTA4NjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Easy Organization',
      description: 'Organize tickets by status, priority, and category for better workflow.',
      icon: BarChart3,
      image: 'https://images.unsplash.com/photo-1700561306724-b3723282ce5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXNrJTIwbWFuYWdlbWVudCUyMG9yZ2FuaXplfGVufDF8fHx8MTc2MTI5ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: 'Quick Resolution',
      description: 'Streamline your support process and resolve issues faster than ever.',
      icon: CheckCircle2,
      image: 'https://images.unsplash.com/photo-1758519290233-a03c1d17ecc9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXBwb3J0JTIwY3VzdG9tZXIlMjBzZXJ2aWNlfGVufDF8fHx8MTc2MTI5ODk0MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header variant="landing" />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 overflow-hidden">
        <DecorativeCircles />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-gray-900 mb-6">
              Manage Your Tickets with Ease
            </h1>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              A modern, intuitive ticket management system that helps teams track, organize, 
              and resolve support tickets efficiently. Streamline your workflow today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => navigate('/signup')}>
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" onClick={() => navigate('/login')}>
                Login
              </Button>
            </div>
          </div>
        </div>

        <WaveBackground />
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-gray-900 mb-4">
              Everything You Need
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Powerful features to help you manage your support tickets effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-video w-full overflow-hidden bg-gray-100">
                    <ImageWithFallback
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <h3 className="text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto">
            Join thousands of teams who trust TicketFlow for their support management
          </p>
          <Button size="lg" variant="secondary" onClick={() => navigate('/signup')}>
            Create Free Account
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};
