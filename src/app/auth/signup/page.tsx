"use client";

import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";

import { InputWithLabel } from "@/components/form/Input";
import Button, { SocialMediaButton } from "@/components/form/Button";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignupPage() {
  const supabase = createClient();
  const [emailValidated, setEmailValidated] = useState(false);
  const [email, setEmail] = useState("");

  async function signUpWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) console.error("Error signing up with Google:", error);
  }

  const validateEmail = (email: string) => {
    setEmailValidated(emailRegex.test(email));
  };

  return (
    <div className="flex h-full flex-col gap-8 py-8">
      <hgroup className="flex flex-col gap-1">
        <h1 className="text-4xl font-semibold">Sign Up</h1>
        <p className="text-lg text-text-secondary">
          Take control of your financial journey.
        </p>
      </hgroup>
      <SignupForm
        email={email}
        setEmail={setEmail}
        emailValidated={emailValidated}
        validateEmail={validateEmail}
        supabase={supabase}
        signUpWithGoogle={signUpWithGoogle}
      />
      <span className="text-sm">
        Already have an account? <a href="/auth/login">Log in</a>
      </span>
    </div>
  );
}

function SignupForm({
  email,
  setEmail,
  emailValidated,
  validateEmail,
  supabase,
  signUpWithGoogle,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  emailValidated: boolean;
  validateEmail: (email: string) => void;
  supabase: any;
  signUpWithGoogle: () => void;
}) {
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleSignupButton = async (e: React.FormEvent) => {
    if (!email || !emailValidated) return;

    e.preventDefault();
    // if (!passwordRegex.test(password)) {
    //   setError(
    //     "Password must contain minimum 8 characters, at least one letter and one number."
    //   );
    //   return;
    // }

    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          // username: username,
        },
      },
    });

    if (error) {
      setError("Failed to sign up: " + error.message);
    } else {
      setError("");
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSignupButton}>
      <div className="flex flex-col gap-6 py-4">
        <SocialMediaButton onClick={signUpWithGoogle} />
        <div className="flex items-center gap-5">
          <span className="flex-grow border-b border-text-tertiary"></span>
          <span className="text-text-secondary">or Sign Up with Email</span>
          <span className="flex-grow border-b border-text-tertiary"></span>
        </div>
      </div>
      <InputWithLabel
        label="Email"
        type="email"
        value={email}
        onChange={(v) => {
          setEmail(v);
          setEmailIsValid(emailRegex.test(email));
        }}
        state={!emailIsValid ? "error" : "success"}
        subtext={
          !emailIsValid
            ? "Please enter a valid email address."
            : "Email is valid."
        }
      />
      {!emailValidated ? (
        <Button
          className="mt-4"
          disabled={!email}
          onClick={() => validateEmail(email)}
        >
          Continue
        </Button>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-4">
            <InputWithLabel
              label="First Name"
              value={firstName}
              onChange={setFirstName}
            />
            <InputWithLabel
              label="Last Name"
              value={lastName}
              onChange={setLastName}
            />
          </div>
          <InputWithLabel
            label="Username"
            value={username}
            onChange={setUsername}
          />
          <InputWithLabel
            iconHidden
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
            state={passwordRegex.test(password) ? "success" : "error"}
            subtext={
              passwordRegex.test(password)
                ? "Password is valid."
                : "Password must contain minimum 8 characters, at least one letter and one number."
            }
          />
          <Button className="mt-4" type="submit">
            Sign Up
          </Button>
          <span className="text-xs text-center text-text-secondary">
            By signing up you are agreeing to our{" "}
            <a href="/privacy">Privacy Policy</a> and{" "}
            <a href="/terms">Terms & Conditions</a>
          </span>
        </>
      )}
    </form>
  );
}

export default SignupPage;