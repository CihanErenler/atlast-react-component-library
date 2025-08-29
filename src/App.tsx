import React from 'react';
import { ThemeToggle } from './components/ThemeSwitcher/ThemeSwitcher';
import Button from './components/Button/Button';
import Input from './components/Input/Input';
import Card from './components/Card/Card';
import Text from './components/Text/Text';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme(); // You can access theme anywhere in your app

  // State for controlled inputs in demos
  const [searchValue, setSearchValue] = React.useState('');
  const [passwordValue, setPasswordValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [websiteValue, setWebsiteValue] = React.useState('mysite');
  const [priceValue, setPriceValue] = React.useState('');
  const [weightValue, setWeightValue] = React.useState('');
  const [simplePasswordValue, setSimplePasswordValue] = React.useState('');
  const [strongPasswordValue, setStrongPasswordValue] = React.useState('');
  const [confirmPasswordValue, setConfirmPasswordValue] =
    React.useState('different');
  const [tweetValue, setTweetValue] = React.useState('');
  const [bioValue, setBioValue] = React.useState(
    'I love building great user interfaces with modern technologies.'
  );
  const [usernameValue, setUsernameValue] = React.useState('');
  const [requiredEmailValue, setRequiredEmailValue] = React.useState('');
  const [validationPasswordValue, setValidationPasswordValue] =
    React.useState('123');
  const [promoCodeValue, setPromoCodeValue] = React.useState('INVALID');
  const [httpsSearchValue, setHttpsSearchValue] = React.useState('');
  const [outlineValue, setOutlineValue] = React.useState('');
  const [filledValue, setFilledValue] = React.useState('');
  const [underlineValue, setUnderlineValue] = React.useState('');

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <h1>My App</h1>

          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {/* Choose your preferred theme switcher */}
            <ThemeToggle />
            {/* <ThemeSwitcherButton /> */}
            {/* <ThemeSelect /> */}

            <span style={{ fontSize: '0.875rem', opacity: 0.7 }}>
              Current: {theme}
            </span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main style={{ padding: '2rem' }}>
        <div className="card">
          <h2>Theme Demo</h2>
          <p>This content automatically adapts to light and dark themes!</p>

          {/* Button Showcase */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Solid Buttons</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Primary" variant="solid" color="primary" />
              <Button title="Secondary" variant="solid" color="secondary" />
              <Button title="Success" variant="solid" color="success" />
              <Button title="Danger" variant="solid" color="danger" />
              <Button title="Warning" variant="solid" color="warning" />
              <Button title="Info" variant="solid" color="info" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Purple" variant="solid" color="purple" />
              <Button title="Pink" variant="solid" color="pink" />
              <Button title="Cyan" variant="solid" color="cyan" />
              <Button title="Teal" variant="solid" color="teal" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Outline Buttons</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Primary" variant="outline" color="primary" />
              <Button title="Secondary" variant="outline" color="secondary" />
              <Button title="Success" variant="outline" color="success" />
              <Button title="Danger" variant="outline" color="danger" />
              <Button title="Warning" variant="outline" color="warning" />
              <Button title="Info" variant="outline" color="info" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Purple" variant="outline" color="purple" />
              <Button title="Pink" variant="outline" color="pink" />
              <Button title="Cyan" variant="outline" color="cyan" />
              <Button title="Teal" variant="outline" color="teal" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Ghost Buttons</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Primary" variant="ghost" color="primary" />
              <Button title="Secondary" variant="ghost" color="secondary" />
              <Button title="Success" variant="ghost" color="success" />
              <Button title="Danger" variant="ghost" color="danger" />
              <Button title="Warning" variant="ghost" color="warning" />
              <Button title="Info" variant="ghost" color="info" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Purple" variant="ghost" color="purple" />
              <Button title="Pink" variant="ghost" color="pink" />
              <Button title="Cyan" variant="ghost" color="cyan" />
              <Button title="Teal" variant="ghost" color="teal" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Soft Buttons</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Primary" variant="soft" color="primary" />
              <Button title="Secondary" variant="soft" color="secondary" />
              <Button title="Success" variant="soft" color="success" />
              <Button title="Danger" variant="soft" color="danger" />
              <Button title="Warning" variant="soft" color="warning" />
              <Button title="Info" variant="soft" color="info" />
            </div>

            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '0.75rem',
                flexWrap: 'wrap',
              }}
            >
              <Button title="Purple" variant="soft" color="purple" />
              <Button title="Pink" variant="soft" color="pink" />
              <Button title="Cyan" variant="soft" color="cyan" />
              <Button title="Teal" variant="soft" color="teal" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Button Sizes</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
            >
              <Button title="XS" variant="solid" color="primary" size="xs" />
              <Button title="Small" variant="solid" color="primary" size="sm" />
              <Button
                title="Medium"
                variant="solid"
                color="primary"
                size="md"
              />
              <Button title="Large" variant="solid" color="primary" size="lg" />
              <Button title="XL" variant="solid" color="primary" size="xl" />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Border Radius Variations</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button
                title="Small Radius"
                variant="solid"
                color="primary"
                borderRadius="small"
              />
              <Button
                title="Medium Radius"
                variant="solid"
                color="primary"
                borderRadius="medium"
              />
              <Button
                title="Full Radius"
                variant="solid"
                color="primary"
                borderRadius="full"
              />
            </div>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <h4>Disabled States</h4>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                marginTop: '1rem',
                flexWrap: 'wrap',
              }}
            >
              <Button
                title="Disabled Solid"
                variant="solid"
                color="primary"
                disabled
              />
              <Button
                title="Disabled Outline"
                variant="outline"
                color="primary"
                disabled
              />
              <Button
                title="Disabled Ghost"
                variant="ghost"
                color="primary"
                disabled
              />
            </div>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Current Theme: {theme}</h3>
          <p>
            The theme persists across page refreshes and follows your system
            preference by default.
          </p>
        </div>

        {/* Color System Showcase */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Modern Color System</h3>
          <p>Comprehensive, accessible color palette for modern UIs</p>

          {/* Brand Colors */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Brand Colors</h4>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-primary)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
              >
                Primary
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-secondary)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '120px',
                  textAlign: 'center',
                }}
              >
                Secondary
              </div>
            </div>
          </div>

          {/* Status Colors */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Status Colors</h4>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-success)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Success
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-warning)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Warning
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-danger)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Error
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--color-info)',
                  color: 'white',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Info
              </div>
            </div>
          </div>

          {/* Background Variations */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Background Layers</h4>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginTop: '0.5rem',
              }}
            >
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-primary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Primary
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-secondary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Secondary
              </div>
              <div
                style={{
                  padding: '1rem',
                  backgroundColor: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  border: '1px solid var(--border-primary)',
                  borderRadius: '8px',
                  minWidth: '100px',
                  textAlign: 'center',
                }}
              >
                Tertiary
              </div>
            </div>
          </div>

          {/* Text Hierarchy */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Text Hierarchy</h4>
            <div style={{ marginTop: '0.5rem' }}>
              <p
                style={{
                  color: 'var(--text-primary)',
                  margin: '0.25rem 0',
                  fontSize: '1.1rem',
                }}
              >
                Primary text - Main content and headings
              </p>
              <p
                style={{ color: 'var(--text-secondary)', margin: '0.25rem 0' }}
              >
                Secondary text - Supporting information
              </p>
              <p style={{ color: 'var(--text-tertiary)', margin: '0.25rem 0' }}>
                Tertiary text - Less important details
              </p>
              <p
                style={{
                  color: 'var(--text-placeholder)',
                  margin: '0.25rem 0',
                }}
              >
                Placeholder text - Form placeholders
              </p>
            </div>
          </div>
        </div>

        {/* Input Component Showcase */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Input Components</h3>
          <p>
            Flexible input components with multiple variants and enhanced
            features
          </p>

          {/* Basic Input Variants */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Input Variants</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Outline Input"
                placeholder="Enter text..."
                value={outlineValue}
                onChange={(e) => setOutlineValue(e.target.value)}
                variant="outline"
                helperText="This is an outline input"
              />
              <Input
                label="Filled Input"
                placeholder="Enter text..."
                value={filledValue}
                onChange={(e) => setFilledValue(e.target.value)}
                variant="filled"
                helperText="This is a filled input"
              />
              <Input
                label="Underline Input"
                placeholder="Enter text..."
                value={underlineValue}
                onChange={(e) => setUnderlineValue(e.target.value)}
                variant="underline"
                helperText="This is an underline input"
              />
            </div>
          </div>

          {/* Input with Icons */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Input with Icons</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                startIcon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m21 21-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                }
                helperText="Search with start icon"
              />
              <Input
                label="Password with Toggle"
                type="password"
                placeholder="Enter password..."
                value={passwordValue}
                onChange={(e) => setPasswordValue(e.target.value)}
                showPasswordToggle
                helperText="Click the eye icon to toggle visibility"
              />
              <Input
                label="Email with Both Icons"
                type="email"
                placeholder="your@email.com"
                value={emailValue}
                onChange={(e) => setEmailValue(e.target.value)}
                startIcon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                }
                endIcon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
                helperText="Email with verification status"
              />
            </div>
          </div>

          {/* Password Toggle Demo */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Password Toggle Functionality</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Simple Password"
                type="password"
                placeholder="Enter password..."
                value={simplePasswordValue}
                onChange={(e) => setSimplePasswordValue(e.target.value)}
                showPasswordToggle
                helperText="Toggle visibility with the eye icon"
              />
              <Input
                label="Password with Requirements"
                type="password"
                placeholder="Strong password..."
                value={strongPasswordValue}
                onChange={(e) => setStrongPasswordValue(e.target.value)}
                showPasswordToggle
                maxLength={50}
                showCharacterCount
                helperText="Must be at least 8 characters"
              />
              <Input
                label="Confirm Password"
                type="password"
                placeholder="Confirm password..."
                value={confirmPasswordValue}
                onChange={(e) => setConfirmPasswordValue(e.target.value)}
                showPasswordToggle
                error="Passwords don't match"
              />
            </div>
          </div>

          {/* Input with Text */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Input with Text Addons</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Website URL"
                placeholder="mysite"
                value={websiteValue}
                onChange={(e) => setWebsiteValue(e.target.value)}
                startText="https://"
                endText=".com"
                helperText="Enter your website name"
              />
              <Input
                label="Price"
                placeholder="0.00"
                value={priceValue}
                onChange={(e) => setPriceValue(e.target.value)}
                startText="$"
                helperText="Enter amount in USD"
              />
              <Input
                label="Weight"
                placeholder="0"
                value={weightValue}
                onChange={(e) => setWeightValue(e.target.value)}
                endText="kg"
                helperText="Enter weight in kilograms"
              />
            </div>
          </div>

          {/* Character Counter */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Character Counter</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Tweet"
                placeholder="What's happening?"
                value={tweetValue}
                onChange={(e) => setTweetValue(e.target.value)}
                maxLength={280}
                showCharacterCount
                helperText="Share your thoughts"
              />
              <Input
                label="Bio"
                placeholder="Tell us about yourself..."
                value={bioValue}
                onChange={(e) => setBioValue(e.target.value)}
                maxLength={160}
                showCharacterCount
                helperText="Keep it short and sweet"
              />
              <Input
                label="Username"
                placeholder="johndoe"
                value={usernameValue}
                onChange={(e) => setUsernameValue(e.target.value)}
                showCharacterCount
                helperText="Character count without limit"
              />
            </div>
          </div>

          {/* Error States */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Enhanced Error States</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Required Email"
                type="email"
                placeholder="your@email.com"
                value={requiredEmailValue}
                onChange={(e) => setRequiredEmailValue(e.target.value)}
                required
                error="Email is required"
                startIcon={
                  <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                }
              />
              <Input
                label="Password"
                type="password"
                placeholder="Password..."
                required
                value={validationPasswordValue}
                onChange={(e) => setValidationPasswordValue(e.target.value)}
                error="Password must be at least 8 characters"
                maxLength={50}
                showCharacterCount
              />
              <Input
                label="Promo Code"
                placeholder="SAVE20"
                value={promoCodeValue}
                onChange={(e) => setPromoCodeValue(e.target.value)}
                error="Invalid promo code"
                endButton
                endButtonTitle="Apply"
              />
            </div>
          </div>

          {/* Input Sizes */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Input Sizes</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Small Input"
                placeholder="Small size..."
                size="sm"
              />
              <Input
                label="Medium Input"
                placeholder="Medium size..."
                size="md"
              />
              <Input
                label="Large Input"
                placeholder="Large size..."
                size="lg"
              />
            </div>
          </div>

          {/* Input States */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Input States</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Required Field"
                placeholder="This field is required..."
                required
                helperText="This field is required"
              />
              <Input
                label="Error State"
                placeholder="Invalid input..."
                error="This field has an error"
                defaultValue="invalid@"
              />
              <Input
                label="Disabled Input"
                placeholder="Disabled input..."
                disabled
                helperText="This input is disabled"
              />
            </div>
          </div>

          {/* Input Types */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Input Types</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Input
                label="Email"
                type="email"
                placeholder="your@email.com"
                helperText="Enter a valid email address"
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                helperText="Enter your password"
              />
              <Input
                label="Number"
                type="number"
                placeholder="123"
                helperText="Enter a number"
              />
              <Input
                label="Search"
                type="search"
                placeholder="Search..."
                helperText="Search for something"
              />
              <Input
                label="Search with HTTPS"
                type="search"
                placeholder="Search..."
                value={httpsSearchValue}
                onChange={(e) => setHttpsSearchValue(e.target.value)}
                startText="https://"
                helperText="Search with HTTPS prefix"
              />
            </div>
          </div>

          {/* Full Width Example */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Full Width Input</h4>
            <div style={{ marginTop: '1rem' }}>
              <Input
                label="Full Width Message"
                placeholder="This input takes the full width of its container..."
                value=""
                onChange={() => {}}
                fullWidth
                helperText="This input spans the full width"
              />
            </div>
          </div>
        </div>

        {/* Card Component Showcase */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Card Components</h3>
          <p>
            Flexible card components with multiple variants and interactive
            states
          </p>

          {/* Card Variants */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Card Variants</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Card variant="elevated">
                <h5
                  style={{
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text-primary)',
                  }}
                >
                  Elevated Card
                </h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Uses shadows to create depth and hierarchy. Perfect for
                  content that needs to stand out.
                </p>
              </Card>

              <Card variant="outlined">
                <h5
                  style={{
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text-primary)',
                  }}
                >
                  Outlined Card
                </h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Clean border-based design. Great for subtle content
                  separation.
                </p>
              </Card>

              <Card variant="filled">
                <h5
                  style={{
                    margin: '0 0 0.5rem 0',
                    color: 'var(--text-primary)',
                  }}
                >
                  Filled Card
                </h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Background-based variant. Ideal for grouped content areas.
                </p>
              </Card>
            </div>
          </div>

          {/* Padding Variants */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Padding Options</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Card padding="sm">
                <strong>Small Padding</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                  Compact spacing for dense layouts
                </p>
              </Card>

              <Card padding="md">
                <strong>Medium Padding</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                  Standard spacing for most use cases
                </p>
              </Card>

              <Card padding="lg">
                <strong>Large Padding</strong>
                <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                  Generous spacing for important content
                </p>
              </Card>

              <Card
                padding="none"
                style={{ border: '2px dashed var(--border-primary)' }}
              >
                <div style={{ padding: 'var(--spacing-3)' }}>
                  <strong>No Padding</strong>
                  <p style={{ margin: '0.5rem 0 0 0', fontSize: '0.875rem' }}>
                    Full control over internal spacing
                  </p>
                </div>
              </Card>
            </div>
          </div>

          {/* Interactive Cards */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Interactive States</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Card hoverable>
                <h5 style={{ margin: '0 0 0.5rem 0' }}>Hoverable Card</h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Hover over this card to see the effect. Great for content that
                  users can explore.
                </p>
              </Card>

              <Card clickable onClick={() => alert('Card clicked!')}>
                <h5 style={{ margin: '0 0 0.5rem 0' }}>Clickable Card</h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Click this card to see the interaction. Perfect for navigation
                  or actions.
                </p>
              </Card>

              <Card
                variant="outlined"
                clickable
                onClick={() => alert('Outlined clickable card!')}
              >
                <h5 style={{ margin: '0 0 0.5rem 0' }}>Outlined + Clickable</h5>
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Combines variants with interactive states seamlessly.
                </p>
              </Card>
            </div>
          </div>

          {/* Radius Options */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Border Radius</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                marginTop: '1rem',
              }}
            >
              <Card radius="none" padding="sm">
                <strong>No Radius</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                  Sharp corners
                </p>
              </Card>

              <Card radius="sm" padding="sm">
                <strong>Small Radius</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                  Subtle rounding
                </p>
              </Card>

              <Card radius="md" padding="sm">
                <strong>Medium Radius</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                  Standard rounding
                </p>
              </Card>

              <Card radius="lg" padding="sm">
                <strong>Large Radius</strong>
                <p style={{ margin: '0.25rem 0 0 0', fontSize: '0.875rem' }}>
                  Generous rounding
                </p>
              </Card>
            </div>
          </div>

          {/* Title and Footer Examples */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Cards with Title and Footer</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              {/* Simple Title Card */}
              <Card title="Settings">
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Configure your application preferences and account settings.
                </p>
              </Card>

              {/* Card with Footer */}
              <Card
                title="Project Status"
                footer={
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <span>Last updated: 2 hours ago</span>
                    <Button size="sm" variant="outline" title="View Details">
                      View Details
                    </Button>
                  </div>
                }
              >
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  Your project is building successfully. All tests are passing.
                </p>
              </Card>

              {/* Custom Title with Icon */}
              <Card
                title={
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                    }}
                  >
                    <span>🎯</span>
                    <span>Achievements</span>
                  </div>
                }
                footer={
                  <Button size="sm" fullWidth title="View All Achievements">
                    View All Achievements
                  </Button>
                }
              >
                <p style={{ margin: 0, color: 'var(--text-secondary)' }}>
                  You've completed 8 out of 12 challenges this month.
                </p>
              </Card>
            </div>
          </div>

          {/* Real-world Examples */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Real-world Examples</h4>
            <div
              style={{
                display: 'grid',
                gap: '1.5rem',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                marginTop: '1rem',
              }}
            >
              {/* User Profile Card with Title */}
              <Card title="Team Member">
                <div
                  style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}
                  >
                    JD
                  </div>
                  <div>
                    <h6 style={{ margin: '0 0 0.25rem 0' }}>John Doe</h6>
                    <p
                      style={{
                        margin: 0,
                        color: 'var(--text-secondary)',
                        fontSize: '0.875rem',
                      }}
                    >
                      Frontend Developer
                    </p>
                  </div>
                </div>
              </Card>

              {/* Stats Card with Footer */}
              <Card
                title="Monthly Stats"
                variant="filled"
                footer={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <span style={{ fontSize: '0.875rem' }}>
                      ↗ +12% from last month
                    </span>
                    <Button size="sm" variant="ghost" title="Details">
                      Details
                    </Button>
                  </div>
                }
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '1rem',
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--color-primary)',
                      }}
                    >
                      1,234
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Users
                    </div>
                  </div>
                  <div>
                    <div
                      style={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: 'var(--color-success)',
                      }}
                    >
                      98.5%
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        color: 'var(--text-secondary)',
                      }}
                    >
                      Uptime
                    </div>
                  </div>
                </div>
              </Card>

              {/* Action Card with structured layout */}
              <Card
                title="🚀 Get Started"
                variant="outlined"
                clickable
                onClick={() => alert('Getting started!')}
                footer={
                  <span
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-primary)',
                    }}
                  >
                    Learn more →
                  </span>
                }
              >
                <p
                  style={{
                    margin: 0,
                    color: 'var(--text-secondary)',
                  }}
                >
                  Ready to build something amazing? Click here to begin your
                  journey.
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Text Component Showcase */}
        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Text Components</h3>
          <p>
            Versatile text component with color variants, typography styles, and
            semantic elements
          </p>

          {/* Color Variants */}
          <div style={{ marginTop: '1.5rem' }}>
            <h4>Color Variants</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Text color="default">Ant Design (default)</Text>
              <Text color="secondary">Ant Design (secondary)</Text>
              <Text color="success">Ant Design (success)</Text>
              <Text color="warning">Ant Design (warning)</Text>
              <Text color="danger">Ant Design (danger)</Text>
              <Text color="disabled">Ant Design (disabled)</Text>
              <Text color="link">Ant Design (link)</Text>
            </div>
          </div>

          {/* Style Variants */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Style Variants</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Text mark>Ant Design (mark)</Text>
              <Text code>Ant Design (code)</Text>
              <Text keyboard>Ant Design (keyboard)</Text>
              <Text underline>Ant Design (underline)</Text>
              <Text delete>Ant Design (delete)</Text>
              <Text strong>Ant Design (strong)</Text>
              <Text italic>Ant Design (italic)</Text>
            </div>
          </div>

          {/* Size Variants */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Size Variants</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Text size="xs">Extra Small Text (xs)</Text>
              <Text size="sm">Small Text (sm)</Text>
              <Text size="md">Medium Text (md) - Default</Text>
              <Text size="lg">Large Text (lg)</Text>
              <Text size="xl">Extra Large Text (xl)</Text>
            </div>
          </div>

          {/* Weight Variants */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Font Weight</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Text weight="normal">Normal Weight Text</Text>
              <Text weight="medium">Medium Weight Text</Text>
              <Text weight="semibold">Semibold Weight Text</Text>
              <Text weight="bold">Bold Weight Text</Text>
            </div>
          </div>

          {/* Heading Variants */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Heading Variants</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <Text size="h1">Heading 1 - Main Page Title</Text>
              <Text size="h2">Heading 2 - Section Title</Text>
              <Text size="h3">Heading 3 - Subsection Title</Text>
              <Text size="h4">Heading 4 - Minor Heading</Text>
              <Text size="h5">Heading 5 - Small Heading</Text>
              <Text size="h6">Heading 6 - Smallest Heading</Text>
            </div>
          </div>

          {/* Custom Heading Examples */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Custom Heading Styles</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              <Text size="h1" color="success">
                Success Heading
              </Text>
              <Text size="h2" color="warning">
                Warning Heading
              </Text>
              <Text size="h3" color="danger">
                Error Heading
              </Text>
              <Text size="h4" color="secondary">
                Secondary Heading
              </Text>
              <Text size="h5" weight="normal">
                Light Weight Heading
              </Text>
              <Text size="h6" weight="bold">
                Bold Small Heading
              </Text>
            </div>
          </div>

          {/* Element Types */}
          <div style={{ marginTop: '2rem' }}>
            <h4>HTML Elements</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Text as="p">Paragraph text element</Text>
              <Text as="small">Small text element</Text>
              <Text as="strong">Strong text element</Text>
              <Text as="em">Emphasized text element</Text>
              <Text as="code">Code text element</Text>
              <Text as="kbd">Keyboard text element</Text>
              {/* <Text as="mark">Mark text element</Text> */}
              <Text as="del">Deleted text element</Text>
            </div>
          </div>

          {/* Combined Styles */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Combined Styles</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginTop: '1rem',
              }}
            >
              <Text color="success" size="lg" weight="bold">
                Large Bold Success Text
              </Text>
              <Text color="warning" underline strong>
                Warning Text with Underline and Strong
              </Text>
              <Text color="danger" size="sm" italic>
                Small Italic Danger Text
              </Text>
              <div>
                <Text>Regular text with </Text>
                <Text code>inline code</Text>
                <Text> and </Text>
                <Text mark>highlighted text</Text>
                <Text> combined together.</Text>
              </div>
              <div>
                <Text>Press </Text>
                <Text keyboard>Ctrl</Text>
                <Text> + </Text>
                <Text keyboard>C</Text>
                <Text> to copy, or </Text>
                <Text color="link">click here</Text>
                <Text> for help.</Text>
              </div>
            </div>
          </div>

          {/* Real-world Examples */}
          <div style={{ marginTop: '2rem' }}>
            <h4>Real-world Examples</h4>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginTop: '1rem',
              }}
            >
              {/* Status Messages */}
              <Card title="Status Messages">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <Text color="success">
                    ✓ Operation completed successfully
                  </Text>
                  <Text color="warning">⚠ Please review your changes</Text>
                  <Text color="danger">✗ Error: Unable to save changes</Text>
                  <Text color="secondary">Last updated 5 minutes ago</Text>
                </div>
              </Card>

              {/* Code Documentation */}
              <Card title="Code Documentation">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <Text>
                    Use the <Text code>useState</Text> hook to manage component
                    state.
                  </Text>
                  <Text>
                    Press <Text keyboard>F12</Text> to open developer tools.
                  </Text>
                  <Text>
                    The <Text mark>important</Text> part is highlighted in
                    yellow.
                  </Text>
                  <Text>
                    <Text delete>Old implementation</Text> →{' '}
                    <Text color="success" strong>
                      New implementation
                    </Text>
                  </Text>
                </div>
              </Card>

              {/* Typography Hierarchy */}
              <Card title="Typography Hierarchy">
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                  }}
                >
                  <Text size="xl" weight="bold" color="default">
                    Main Heading
                  </Text>
                  <Text size="lg" weight="semibold" color="default">
                    Section Title
                  </Text>
                  <Text size="md" weight="medium" color="default">
                    Subsection Header
                  </Text>
                  <Text size="md" color="default">
                    Body text with normal weight and size for optimal
                    readability.
                  </Text>
                  <Text size="sm" color="secondary">
                    Secondary information and metadata
                  </Text>
                  <Text size="xs" color="disabled">
                    Fine print and disclaimers
                  </Text>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
