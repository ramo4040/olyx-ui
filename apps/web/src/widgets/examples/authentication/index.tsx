"use client";

import "./style.css";
import { Button, Input, Separator } from "@olyx/react";
import { GitHubIcon } from "@/assets/svg/github";
import { Logo } from "@/components/misc";

export function Authentication() {
  return (
    <div data-ui="authentication">
      {/* Left panel - Brand */}
      <div className="auth-brand-panel">
        <div>
          <div className="auth-brand-logo">
            <Logo />
            <span>Olyx</span>
          </div>
        </div>
      </div>

      {/* Right panel - Form */}
      <div className="auth-form-panel">
        <Button variant="primary" mode="ghost" className="auth-login-link">
          Login
        </Button>

        <div className="auth-form-container">
          <div className="auth-form-header">
            <h1>Create an account</h1>
            <p>Enter your email below to create your account</p>
          </div>

          <form
            className="auth-form"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Account creation form"
          >
            <label htmlFor="email-input" className="visually-hidden">
              Email address
            </label>
            <Input
              id="email-input"
              type="email"
              placeholder="name@example.com"
              aria-required="true"
            />

            <Button
              variant="primary"
              mode="filled"
              className="auth-submit-btn"
              type="submit"
            >
              Sign In with Email
            </Button>
          </form>

          <Separator variant="content">Or continue with</Separator>

          <Button variant="neutral" mode="stroke" className="auth-social-btn">
            <GitHubIcon />
            GitHub
          </Button>

          <p className="auth-terms">
            By clicking continue, you agree to our{" "}
            <a href="/terms">Terms of Service</a> and{" "}
            <a href="/privacy">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
