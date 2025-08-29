import { ThemeToggle } from './components/ThemeSwitcher/ThemeSwitcher';
import Button from './components/Button/Button';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme } = useTheme(); // You can access theme anywhere in your app

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
      </main>
    </div>
  );
}

export default App;
