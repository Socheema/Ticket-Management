import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card } from '../components/ui/card';
import { useAuth } from '../contexts/AuthContext';
import { toast } from 'sonner@2.0.3';
import { DecorativeCircles } from '../components/DecorativeCircles';
import { Ticket, Loader2 } from 'lucide-react';

export const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [confirmPasswordError, setConfirmPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setNameError('');
    setEmailError('');
    setPasswordError('');
    setConfirmPasswordError('');

    // Client-side validation
    let hasError = false;

    if (!name) {
      setNameError('Name is required');
      hasError = true;
    }

    if (!email) {
      setEmailError('Email is required');
      hasError = true;
    }

    if (!password) {
      setPasswordError('Password is required');
      hasError = true;
    }

    if (password !== confirmPassword) {
      setConfirmPasswordError('Passwords do not match');
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);
    const result = await signup(name, email, password);
    setIsLoading(false);

    if (result.success) {
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } else {
      if (result.error?.toLowerCase().includes('email')) {
        setEmailError(result.error);
      } else if (result.error?.toLowerCase().includes('password')) {
        setPasswordError(result.error);
      } else {
        toast.error(result.error || 'Signup failed');
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden py-12">
      <DecorativeCircles />
      
      <div className="w-full max-w-md px-4 relative z-10">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Ticket className="w-7 h-7 text-white" />
            </div>
            <span className="font-semibold text-gray-900">TicketFlow</span>
          </Link>
        </div>

        <Card className="p-8 shadow-xl">
          <h1 className="text-gray-900 mb-2 text-center">Create Account</h1>
          <p className="text-gray-600 text-center mb-6">Get started with TicketFlow today</p>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                type="text"
                placeholder="John Doe"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={nameError ? 'border-red-500' : ''}
                disabled={isLoading}
              />
              {nameError && (
                <p className="text-red-600">{nameError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={emailError ? 'border-red-500' : ''}
                disabled={isLoading}
              />
              {emailError && (
                <p className="text-red-600">{emailError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={passwordError ? 'border-red-500' : ''}
                disabled={isLoading}
              />
              {passwordError && (
                <p className="text-red-600">{passwordError}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="••••••••"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className={confirmPasswordError ? 'border-red-500' : ''}
                disabled={isLoading}
              />
              {confirmPasswordError && (
                <p className="text-red-600">{confirmPasswordError}</p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating account...
                </>
              ) : (
                'Sign Up'
              )}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-indigo-600 hover:text-indigo-700">
                Login
              </Link>
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
};
