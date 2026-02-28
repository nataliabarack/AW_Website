import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { authClient } from '@/api/authClient';
import { X } from 'lucide-react';

export default function PortfolioModal({ isOpen, onClose, portfolio }) {
  const [showAccessChoice, setShowAccessChoice] = useState(false);
  const [showLoginDialog, setShowLoginDialog] = useState(false);
  const [showProfessionalDialog, setShowProfessionalDialog] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [formData, setFormData] = useState({ name: '', surname: '', companyName: '', email: '' });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [showVerification, setShowVerification] = useState(false);
  const [verificationCode, setVerificationCode] = useState('');
  const [showPasswordSetup, setShowPasswordSetup] = useState(false);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [signUpError, setSignUpError] = useState('');
  
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const isAuth = await authClient.auth.isAuthenticated();
        setIsAuthenticated(isAuth);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  const handleStartInvesting = () => {
    setShowAccessChoice(true);
  };

  const handleChooseSignUp = () => {
    setShowAccessChoice(false);
    setShowProfessionalDialog(true);
  };

  const handleChooseLogin = () => {
    setShowAccessChoice(false);
    setShowLoginDialog(true);
  };

  const handleLoginSubmit = async () => {
    try {
      setLoginError('');
      await authClient.auth.login(loginData.email, loginData.password);
      setShowLoginDialog(false);
      setLoginData({ email: '', password: '' });
      setIsAuthenticated(true);
      setShowForm(true);
    } catch (error) {
      setLoginError(error.message || 'Login failed. Please try again.');
    }
  };
  
  const handleAgree = () => {
    setShowProfessionalDialog(false);
    setShowForm(true);
  };
  
  const handleLoginSuccess = () => {
    setShowAuthDialog(false);
    setShowForm(true);
  };
  
  const handleSubmit = () => {
    setSignUpError('');
    if (!formData.name || !formData.surname || !formData.email) {
      setSignUpError('Please fill in all required fields');
      return;
    }
    if (!password || !confirmPassword) {
      setSignUpError('Please enter both password fields');
      return;
    }
    if (password !== confirmPassword) {
      setSignUpError('Passwords do not match');
      return;
    }
    const validation = validatePassword(password);
    if (!validation.hasLength || !validation.hasCapital || !validation.hasNumber) {
      setSignUpError('Password must meet all requirements');
      return;
    }
    // Send verification email
    console.log('Sending verification code to:', formData.email);
    setShowForm(false);
    setShowVerification(true);
  };

  const handleVerificationSubmit = () => {
    setSignUpError('');
    if (!verificationCode) {
      setSignUpError('Please enter the verification code');
      return;
    }
    // Verify code and proceed to password setup
    setShowVerification(false);
    setShowPasswordSetup(true);
  };

  const validatePassword = (pwd) => {
    return {
      hasLength: pwd.length >= 8,
      hasCapital: /[A-Z]/.test(pwd),
      hasNumber: /[0-9]/.test(pwd)
    };
  };

  const handlePasswordSubmit = () => {
    setSignUpError('');
    if (!password || !confirmPassword) {
      setSignUpError('Please enter both password fields');
      return;
    }
    if (password !== confirmPassword) {
      setSignUpError('Passwords do not match');
      return;
    }
    const validation = validatePassword(password);
    if (!validation.hasLength || !validation.hasCapital || !validation.hasNumber) {
      setSignUpError('Password must meet all requirements');
      return;
    }
    // Create account with password
    console.log('Account created:', { ...formData, password });
    setShowPasswordSetup(false);
    setIsAuthenticated(true);
    setShowForm(true);
  };

  const resetForm = () => {
    setFormData({ name: '', surname: '', companyName: '', email: '' });
    setVerificationCode('');
    setPassword('');
    setConfirmPassword('');
    setSignUpError('');
  };
  
  // Show access choice dialog immediately if no portfolio (used from Home page)
  if (!portfolio) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Access AW Prism Portfolios</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-black text-sm">
              Do you have an existing account with us?
            </p>
            <div className="flex gap-3 flex-col">
              <Button 
                onClick={handleChooseSignUp}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white w-full"
              >
                Create New Account
              </Button>
              <Button 
                onClick={handleChooseLogin}
                variant="outline"
                className="w-full"
              >
                Login to Existing Account
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-xs text-gray-600">
              <p className="font-semibold text-black">Important Disclaimers & Data Protection</p>
              <p>
                This document is provided for informational purposes only and does not constitute an offer or solicitation to purchase or sell any securities in any jurisdiction where such offer or solicitation would be unlawful.
              </p>
              <p>
                The information is intended exclusively for professional investors within the meaning of Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA) and qualified investors pursuant to Art. 10 para. 3 and 3quater CISA.
              </p>
              <p>
                Past performance is not indicative of future results. Investments in alternative assets involve substantial risks, including illiquidity, potential loss of principal, and limited regulatory oversight.
              </p>
              <p>
                Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
              </p>
              <p>
                By proceeding, you confirm that you meet the definition of a professional investor under Swiss law and acknowledge that you have read and understood these disclaimers.
              </p>
            </div>
          </div>

          {/* Nested dialogs */}
          <Dialog open={showProfessionalDialog} onOpenChange={setShowProfessionalDialog}>
            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2d6a4f]">Professional Investor Confirmation</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div className="space-y-3 text-sm text-black">
                  <p className="font-semibold">
                    I confirm that I am a professional investor as defined by applicable regulations, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA)</li>
                    <li>Qualified investors pursuant to Art. 10 para. 3 and 3quater CISA</li>
                  </ul>
                  
                  <p className="font-semibold mt-4">Important Disclaimers:</p>
                  <p>
                    This material is provided for informational purposes only and does not constitute an offer, solicitation, or recommendation to purchase or sell any securities or financial instruments in any jurisdiction.
                  </p>
                  <p>
                    The information contained herein is intended exclusively for professional investors and may not be suitable for all investors. Investment in private markets involves substantial risks, including but not limited to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Loss of principal investment</li>
                    <li>Illiquidity and extended lock-up periods</li>
                    <li>Limited transparency and regulatory oversight</li>
                    <li>Concentration risk and leverage risk</li>
                    <li>Currency and market volatility</li>
                  </ul>
                  
                  <p>
                    Past performance is not indicative of future results. No representation or warranty is made regarding the accuracy, completeness, or timeliness of the information provided.
                  </p>
                  <p>
                    Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
                  </p>
                  <p>
                    By proceeding, you acknowledge that you have read, understood, and agree to be bound by these terms and confirm your status as a professional investor under applicable law.
                  </p>
                </div>
                <div className="flex gap-3 justify-end pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowProfessionalDialog(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleAgree}
                    className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white"
                  >
                    I Agree
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2d6a4f]">Login to Your Account</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {loginError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-800">{loginError}</p>
                  </div>
                )}
                <div>
                  <Label htmlFor="login-email" className="text-sm font-medium text-black">Email *</Label>
                  <Input 
                    id="login-email"
                    type="email"
                    value={loginData.email}
                    onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                    className="mt-1"
                    placeholder="Enter your email address"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="login-password" className="text-sm font-medium text-black">Password *</Label>
                  <Input 
                    id="login-password"
                    type="password"
                    value={loginData.password}
                    onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                    className="mt-1"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowLoginDialog(false);
                      setLoginData({ email: '', password: '' });
                      setLoginError('');
                    }}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleLoginSubmit}
                    disabled={!loginData.email || !loginData.password}
                    className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
                  >
                    Login
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showForm} onOpenChange={setShowForm}>
            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2d6a4f]">Access AW Prism Portfolios</DialogTitle>
              </DialogHeader>
              <div className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-black">Name *</Label>
                    <Input 
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="mt-1"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="surname" className="text-sm font-medium text-black">Surname *</Label>
                    <Input 
                      id="surname"
                      value={formData.surname}
                      onChange={(e) => setFormData({...formData, surname: e.target.value})}
                      className="mt-1"
                      placeholder="Enter your surname"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="companyName" className="text-sm font-medium text-black">Company Name</Label>
                    <Input 
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                      className="mt-1"
                      placeholder="Enter your company name (optional)"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-black">Email *</Label>
                    <Input 
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="mt-1"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="password" className="text-sm font-medium text-black">Password *</Label>
                    <Input 
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="mt-1"
                      placeholder="Enter your password"
                      required
                    />
                    <div className="mt-3 space-y-2 text-xs">
                      <p className={validatePassword(password).hasLength ? 'text-green-600' : 'text-gray-500'}>
                        ✓ At least 8 characters
                      </p>
                      <p className={validatePassword(password).hasCapital ? 'text-green-600' : 'text-gray-500'}>
                        ✓ One capital letter (A-Z)
                      </p>
                      <p className={validatePassword(password).hasNumber ? 'text-green-600' : 'text-gray-500'}>
                        ✓ One number (0-9)
                      </p>
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="confirm-password" className="text-sm font-medium text-black">Confirm Password *</Label>
                    <Input 
                      id="confirm-password"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="mt-1"
                      placeholder="Confirm your password"
                      required
                    />
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-xs text-gray-600">
                  <p className="font-semibold text-black">Important Disclaimers</p>
                  <p>
                    This document is provided for informational purposes only and does not constitute an offer or solicitation to purchase or sell any securities in any jurisdiction where such offer or solicitation would be unlawful.
                  </p>
                  <p>
                    The information is intended exclusively for professional investors within the meaning of Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA) and qualified investors pursuant to Art. 10 para. 3 and 3quater CISA.
                  </p>
                  <p>
                    Past performance is not indicative of future results. Investments in alternative assets involve substantial risks, including illiquidity, potential loss of principal, and limited regulatory oversight.
                  </p>
                  <p>
                    Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
                  </p>
                  <p>
                    By submitting this form, you confirm that you meet the definition of a professional investor under Swiss law and acknowledge that you have read and understood these disclaimers.
                  </p>
                </div>

                <div className="flex gap-3 justify-end">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                  <Button 
                    onClick={handleSubmit}
                    disabled={!formData.name || !formData.surname || !formData.email}
                    className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showVerification} onOpenChange={setShowVerification}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2d6a4f]">Verify Your Email</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {signUpError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-800">{signUpError}</p>
                  </div>
                )}
                <p className="text-sm text-black">
                  We've sent a verification code to <strong>{formData.email}</strong>
                </p>
                <div>
                  <Label htmlFor="verification-code" className="text-sm font-medium text-black">Verification Code *</Label>
                  <Input 
                    id="verification-code"
                    value={verificationCode}
                    onChange={(e) => setVerificationCode(e.target.value)}
                    className="mt-1"
                    placeholder="Enter the 6-digit code"
                    maxLength="6"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowVerification(false);
                      setShowForm(true);
                      setVerificationCode('');
                      setSignUpError('');
                    }}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handleVerificationSubmit}
                    disabled={!verificationCode}
                    className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
                  >
                    Verify
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={showPasswordSetup} onOpenChange={setShowPasswordSetup}>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle className="text-xl text-[#2d6a4f]">Set Your Password</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                {signUpError && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                    <p className="text-sm text-red-800">{signUpError}</p>
                  </div>
                )}
                <div>
                  <Label htmlFor="password" className="text-sm font-medium text-black">Password *</Label>
                  <Input 
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mt-1"
                    placeholder="Enter your password"
                    required
                  />
                  <div className="mt-3 space-y-2 text-xs">
                    <p className={validatePassword(password).hasLength ? 'text-green-600' : 'text-gray-500'}>
                      ✓ At least 8 characters
                    </p>
                    <p className={validatePassword(password).hasCapital ? 'text-green-600' : 'text-gray-500'}>
                      ✓ One capital letter (A-Z)
                    </p>
                    <p className={validatePassword(password).hasNumber ? 'text-green-600' : 'text-gray-500'}>
                      ✓ One number (0-9)
                    </p>
                  </div>
                </div>
                <div>
                  <Label htmlFor="confirm-password" className="text-sm font-medium text-black">Confirm Password *</Label>
                  <Input 
                    id="confirm-password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-1"
                    placeholder="Confirm your password"
                    required
                  />
                </div>
                <div className="flex gap-3 justify-end pt-4 border-t">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      setShowPasswordSetup(false);
                      setPassword('');
                      setConfirmPassword('');
                      setSignUpError('');
                    }}
                  >
                    Back
                  </Button>
                  <Button 
                    onClick={handlePasswordSubmit}
                    disabled={!password || !confirmPassword}
                    className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
                  >
                    Create Account
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-serif text-[#2d6a4f]">
            {portfolio.name}
          </DialogTitle>
        </DialogHeader>
        {portfolio.comingSoon ? (
          <div className="bg-[#2d6a4f]/10 border border-[#2d6a4f]/20 rounded-lg p-4 text-center">
            <p className="text-lg font-semibold text-[#2d6a4f]">Coming Soon</p>
            <p className="text-sm text-[#2d6a4f]/70 mt-1">This portfolio will be available shortly upon request</p>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <p className="text-lg text-black leading-relaxed font-light">
                {portfolio.description}
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#2d6a4f]/5 to-[#2d6a4f]/10 rounded-lg p-6">
              <p className="text-sm text-[#2d6a4f] font-bold mb-2">Target Return</p>
              <p className="text-4xl font-bold text-[#2d6a4f]">{portfolio.return}%</p>
            </div>

            <div>
              <p className="text-sm text-[#2d6a4f] font-bold mb-3">Access leading global managers including</p>
              <div className="flex justify-between items-center text-lg text-black leading-relaxed font-light">
                {portfolio.managers.map((manager, idx, arr) => (
                  <React.Fragment key={idx}>
                    <span>{manager}</span>
                    {idx < arr.length - 1 && <span className="text-[#2d6a4f]/30">|</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

            <div className="border-t border-[#C0C0C0]/30 pt-6 mt-6">
              <p className="text-sm text-black mb-4 text-right">
                The AW Infrastructure Prism is available upon subscription for professional investors only
              </p>
              <div className="flex justify-end">
                <Button 
                  onClick={handleStartInvesting}
                  className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white"
                >
                  Start Investing
                </Button>
              </div>
            </div>
          </div>
        )}
      </DialogContent>

      <Dialog open={showProfessionalDialog} onOpenChange={setShowProfessionalDialog}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Professional Investor Confirmation</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-3 text-sm text-black">
              <p className="font-semibold">
                I confirm that I am a professional investor as defined by applicable regulations, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA)</li>
                <li>Qualified investors pursuant to Art. 10 para. 3 and 3quater CISA</li>
              </ul>
              
              <p className="font-semibold mt-4">Important Disclaimers:</p>
              <p>
                This material is provided for informational purposes only and does not constitute an offer, solicitation, or recommendation to purchase or sell any securities or financial instruments in any jurisdiction.
              </p>
              <p>
                The information contained herein is intended exclusively for professional investors and may not be suitable for all investors. Investment in private markets involves substantial risks, including but not limited to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Loss of principal investment</li>
                <li>Illiquidity and extended lock-up periods</li>
                <li>Limited transparency and regulatory oversight</li>
                <li>Concentration risk and leverage risk</li>
                <li>Currency and market volatility</li>
              </ul>
              
              <p>
                Past performance is not indicative of future results. No representation or warranty is made regarding the accuracy, completeness, or timeliness of the information provided.
              </p>
              <p>
                Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
              </p>
              <p>
                By proceeding, you acknowledge that you have read, understood, and agree to be bound by these terms and confirm your status as a professional investor under applicable law.
              </p>
            </div>
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => setShowProfessionalDialog(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleAgree}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white"
              >
                I Agree
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showAccessChoice} onOpenChange={setShowAccessChoice}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Access Infrastructure Prism</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <p className="text-black text-sm">
              Do you have an existing account with us?
            </p>
            <div className="flex gap-3 flex-col">
              <Button 
                onClick={handleChooseSignUp}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white w-full"
              >
                Create New Account
              </Button>
              <Button 
                onClick={handleChooseLogin}
                variant="outline"
                className="w-full"
              >
                Login to Existing Account
              </Button>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-xs text-gray-600">
              <p className="font-semibold text-black">Important Disclaimers & Data Protection</p>
              <p>
                This document is provided for informational purposes only and does not constitute an offer or solicitation to purchase or sell any securities in any jurisdiction where such offer or solicitation would be unlawful.
              </p>
              <p>
                The information is intended exclusively for professional investors within the meaning of Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA) and qualified investors pursuant to Art. 10 para. 3 and 3quater CISA.
              </p>
              <p>
                Past performance is not indicative of future results. Investments in alternative assets involve substantial risks, including illiquidity, potential loss of principal, and limited regulatory oversight.
              </p>
              <p>
                Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
              </p>
              <p>
                By proceeding, you confirm that you meet the definition of a professional investor under Swiss law and acknowledge that you have read and understood these disclaimers.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Login to Your Account</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {signUpError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{signUpError}</p>
              </div>
            )}
            {loginError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{loginError}</p>
              </div>
            )}
            <div>
              <Label htmlFor="login-email" className="text-sm font-medium text-black">Email *</Label>
              <Input 
                id="login-email"
                type="email"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
                className="mt-1"
                placeholder="Enter your email address"
                required
              />
            </div>
            <div>
              <Label htmlFor="login-password" className="text-sm font-medium text-black">Password *</Label>
              <Input 
                id="login-password"
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                className="mt-1"
                placeholder="Enter your password"
                required
              />
            </div>
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowLoginDialog(false);
                  setLoginData({ email: '', password: '' });
                  setLoginError('');
                }}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleLoginSubmit}
                disabled={!loginData.email || !loginData.password}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
              >
                Login
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>



      <Dialog open={showVerification} onOpenChange={setShowVerification}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Verify Your Email</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {signUpError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{signUpError}</p>
              </div>
            )}
            <p className="text-sm text-black">
              We've sent a verification code to <strong>{formData.email}</strong>
            </p>
            <div>
              <Label htmlFor="verification-code" className="text-sm font-medium text-black">Verification Code *</Label>
              <Input 
                id="verification-code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                className="mt-1"
                placeholder="Enter the 6-digit code"
                maxLength="6"
                required
              />
            </div>
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowVerification(false);
                  setShowForm(true);
                  setVerificationCode('');
                  setSignUpError('');
                }}
              >
                Back
              </Button>
              <Button 
                onClick={handleVerificationSubmit}
                disabled={!verificationCode}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
              >
                Verify
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showPasswordSetup} onOpenChange={setShowPasswordSetup}>
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">Set Your Password</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {signUpError && (
              <div className="bg-red-50 border border-red-200 rounded-lg p-3">
                <p className="text-sm text-red-800">{signUpError}</p>
              </div>
            )}
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-black">Password *</Label>
              <Input 
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1"
                placeholder="Enter your password"
                required
              />
              <div className="mt-3 space-y-2 text-xs">
                <p className={validatePassword(password).hasLength ? 'text-green-600' : 'text-gray-500'}>
                  ✓ At least 8 characters
                </p>
                <p className={validatePassword(password).hasCapital ? 'text-green-600' : 'text-gray-500'}>
                  ✓ One capital letter (A-Z)
                </p>
                <p className={validatePassword(password).hasNumber ? 'text-green-600' : 'text-gray-500'}>
                  ✓ One number (0-9)
                </p>
              </div>
            </div>
            <div>
              <Label htmlFor="confirm-password" className="text-sm font-medium text-black">Confirm Password *</Label>
              <Input 
                id="confirm-password"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1"
                placeholder="Confirm your password"
                required
              />
            </div>
            <div className="flex gap-3 justify-end pt-4 border-t">
              <Button 
                variant="outline" 
                onClick={() => {
                  setShowPasswordSetup(false);
                  setPassword('');
                  setConfirmPassword('');
                  setSignUpError('');
                }}
              >
                Back
              </Button>
              <Button 
                onClick={handlePasswordSubmit}
                disabled={!password || !confirmPassword}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
              >
                Create Account
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={showForm} onOpenChange={setShowForm}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-[#2d6a4f]">AW Prism</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-black">Name *</Label>
                <Input 
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="mt-1"
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div>
                <Label htmlFor="surname" className="text-sm font-medium text-black">Surname *</Label>
                <Input 
                  id="surname"
                  value={formData.surname}
                  onChange={(e) => setFormData({...formData, surname: e.target.value})}
                  className="mt-1"
                  placeholder="Enter your surname"
                  required
                />
              </div>
              <div>
                <Label htmlFor="companyName" className="text-sm font-medium text-black">Company Name</Label>
                <Input 
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                  className="mt-1"
                  placeholder="Enter your company name (optional)"
                />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-black">Email *</Label>
                <Input 
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="mt-1"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <Label htmlFor="password" className="text-sm font-medium text-black">Password *</Label>
                <Input 
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1"
                  placeholder="Enter your password"
                  required
                />
                <div className="mt-3 space-y-2 text-xs">
                  <p className={validatePassword(password).hasLength ? 'text-green-600' : 'text-gray-500'}>
                    ✓ At least 8 characters
                  </p>
                  <p className={validatePassword(password).hasCapital ? 'text-green-600' : 'text-gray-500'}>
                    ✓ One capital letter (A-Z)
                  </p>
                  <p className={validatePassword(password).hasNumber ? 'text-green-600' : 'text-gray-500'}>
                    ✓ One number (0-9)
                  </p>
                </div>
              </div>
              <div>
                <Label htmlFor="confirm-password" className="text-sm font-medium text-black">Confirm Password *</Label>
                <Input 
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="mt-1"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 space-y-3 text-xs text-gray-600">
              <p className="font-semibold text-black">Important Disclaimers</p>
              <p>
                This document is provided for informational purposes only and does not constitute an offer or solicitation to purchase or sell any securities in any jurisdiction where such offer or solicitation would be unlawful.
              </p>
              <p>
                The information is intended exclusively for professional investors within the meaning of Art. 10 para. 3 and 3ter of the Swiss Federal Act on Collective Investment Schemes (CISA) and qualified investors pursuant to Art. 10 para. 3 and 3quater CISA.
              </p>
              <p>
                Past performance is not indicative of future results. Investments in alternative assets involve substantial risks, including illiquidity, potential loss of principal, and limited regulatory oversight.
              </p>
              <p>
                Your personal data will be processed in accordance with our Data Protection Policy and applicable data protection regulations. We commit to protecting your privacy and handling your information securely and confidentially.
              </p>
              <p>
                By submitting this form, you confirm that you meet the definition of a professional investor under Swiss law and acknowledge that you have read and understood these disclaimers.
              </p>
            </div>

            <div className="flex gap-3 justify-end">
              <Button 
                variant="outline" 
                onClick={() => setShowForm(false)}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleSubmit}
                disabled={!formData.name || !formData.surname || !formData.email}
                className="bg-[#2d6a4f] hover:bg-[#1a5742] text-white disabled:opacity-50"
              >
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </Dialog>
  );
}