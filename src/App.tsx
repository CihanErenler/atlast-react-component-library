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

          {/* Test your themed buttons */}
          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Button title="Success" variant="solid" color="primary"></Button>
            <Button
              title="Secondary"
              variant="solid"
              color="secondary"
            ></Button>
            <Button title="Success" variant="solid" color="success"></Button>
            <Button title="Danger" variant="solid" color="danger"></Button>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              marginTop: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <Button
              title="Primary Outline"
              variant="outline"
              color="primary"
            ></Button>
            <Button
              title="Primary Ghost"
              variant="ghost"
              color="primary"
            ></Button>
          </div>
        </div>

        <div className="card" style={{ marginTop: '2rem' }}>
          <h3>Current Theme: {theme}</h3>
          <p>
            The theme persists across page refreshes and follows your system
            preference by default.
          </p>
        </div>
      </main>
    </div>
  );
}

export default App;
