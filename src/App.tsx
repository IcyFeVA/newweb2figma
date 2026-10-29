import { useState, type FormEvent } from 'react'
import {
  Button,
  Checkbox,
  MantineProvider,
  PasswordInput,
  Text,
  TextInput,
  createTheme,
} from '@mantine/core'
import { ArrowRight, Eye, EyeOff, Mail } from 'lucide-react'
import './App.css'

const theme = createTheme({
  primaryColor: 'teal',
  defaultRadius: 'sm',
  fontFamily: 'Aptos, "Segoe UI Variable", "Segoe UI", sans-serif',
})

function PasswordToggleIcon({ reveal }: { reveal: boolean }) {
  const Icon = reveal ? EyeOff : Eye
  return <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
}

function App() {
  const [message, setMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setMessage('Demo only. Authentication is not connected and no data was sent.')
  }

  function handleRecovery() {
    setMessage('Password recovery is not connected in this demo.')
  }

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      <main className="auth-page">
        <div className="auth-layout">
          <aside className="visual-panel" aria-hidden="true">
            <div className="visual-panel__topline">
              <span className="visual-mark">
                <span />
                <span />
                <span />
              </span>
              <span className="visual-index">01 / 01</span>
            </div>
            <div className="visual-art">
              <div className="visual-art__grid" />
              <div className="visual-art__block visual-art__block--mint" />
              <div className="visual-art__block visual-art__block--orange" />
              <div className="visual-art__outline" />
              <div className="visual-art__line" />
            </div>
            <div className="visual-panel__bottomline">
              <span>FORM / 001</span>
              <span>ACCESS</span>
            </div>
          </aside>

          <section className="form-panel" aria-labelledby="sign-in-title">
            <form className="sign-in-form" onSubmit={handleSubmit}>
              <div className="form-heading">
                <div className="form-kicker">
                  <span className="form-kicker__dot" />
                  ACCOUNT ACCESS
                </div>
                <Text component="h1" id="sign-in-title" className="form-title">
                  Welcome back
                </Text>
                <Text className="form-description">
                  Enter your details to continue.
                </Text>
              </div>

              <div className="form-fields">
                <TextInput
                  label="Email address"
                  placeholder="you@example.com"
                  type="email"
                  name="email"
                  autoComplete="email"
                  required
                  leftSection={<Mail size={17} strokeWidth={1.8} aria-hidden="true" />}
                  leftSectionPointerEvents="none"
                  size="md"
                />
                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  name="password"
                  autoComplete="current-password"
                  minLength={8}
                  required
                  visibilityToggleIcon={PasswordToggleIcon}
                  visibilityToggleFocusable
                  visibilityToggleButtonProps={{ 'aria-label': 'Toggle password visibility' }}
                  size="md"
                />
              </div>

              <div className="form-options">
                <Checkbox label="Remember me" name="remember" color="teal" />
                <button className="text-action" type="button" onClick={handleRecovery}>
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                size="md"
                fullWidth
                rightSection={<ArrowRight size={17} strokeWidth={1.9} aria-hidden="true" />}
                className="submit-button"
              >
                Sign in
              </Button>

              <Text className="form-status" role="status" aria-live="polite">
                {message}
              </Text>

              <div className="form-footnote">
                <span className="footnote-rule" />
                <span>DEMO FORM · NO ACCOUNT DATA IS SENT</span>
              </div>
            </form>
          </section>
        </div>
      </main>
    </MantineProvider>
  )
}

export default App
