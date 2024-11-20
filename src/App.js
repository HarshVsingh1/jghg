import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { BsFillShieldLockFill } from "react-icons/bs";
import { CgSpinner } from "react-icons/cg";
import OtpInput from "otp-input-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { auth, RecaptchaVerifier } from "./firebase.config";
import { signInWithPhoneNumber } from "firebase/auth";
import { toast, Toaster } from "react-hot-toast";
import img2 from "./backimg.png";
import logo from "./logoimg.jpg";

// OTP Verification Component
function OTPVerification() {
  const [otp, setOtp] = useState("");
  const [ph, setPh] = useState("");
  const [loading, setLoading] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Initialize reCAPTCHA
  useEffect(() => {
    // Ensure reCAPTCHA is initialized only once
    if (!window.recaptchaVerifier) {
      try {
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 
          "recaptcha-container", 
          {
            size: "invisible",
            callback: (response) => {
              console.log("reCAPTCHA verified successfully");
            },
            "expired-callback": () => {
              toast.error("reCAPTCHA expired. Please try again.");
            }
          }
        );
      } catch (error) {
        console.error("reCAPTCHA Initialization Error:", error);
        toast.error("Failed to initialize reCAPTCHA");
      }
    }

    // Cleanup function
    return () => {
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
      }
    };
  }, []);

  // Handle phone number submission
  async function onSignup() {
    // Validate phone number
    if (!ph) {
      toast.error("Please enter a valid phone number");
      return;
    }

    setLoading(true);

    // Ensure phone number is in international format
    const phoneNumber = ph.startsWith("+") ? ph : `+${ph}`;

    try {
      // Ensure reCAPTCHA verifier is ready
      const appVerifier = window.recaptchaVerifier;
      
      if (!appVerifier) {
        throw new Error("reCAPTCHA not initialized");
      }

      // Send OTP
      const confirmationResult = await signInWithPhoneNumber(
        auth, 
        phoneNumber, 
        appVerifier
      );

      // Store confirmation result globally
      window.confirmationResult = confirmationResult;

      // Update UI
      setLoading(false);
      setShowOTP(true);
      toast.success("OTP sent successfully!");

    } catch (error) {
      console.error("OTP Send Error:", error);
      setLoading(false);
      toast.error(`Failed to send OTP: ${error.message}`);
    }
  }

  // Handle OTP verification
  async function onOTPVerify() {
    // Validate OTP
    if (!otp) {
      toast.error("Please enter OTP");
      return;
    }

    setLoading(true);

    try {
      // Verify OTP
      if (!window.confirmationResult) {
        throw new Error("No OTP confirmation result");
      }

      const result = await window.confirmationResult.confirm(otp);
      
      // Set user and navigate
      setUser(result.user);
      setLoading(false);
      toast.success("Login Successful!");
      navigate("/main");

    } catch (error) {
      console.error("OTP Verification Error:", error);
      setLoading(false);
      toast.error(`OTP Verification Failed: ${error.message}`);
    }
  }

  return (
    <section
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <Toaster toastOptions={{ duration: 4000 }} />
        
        {/* reCAPTCHA container */}
        <div id="recaptcha-container"></div>

        {user ? (
          <h2 className="text-center text-white font-medium text-2xl">
            Successfully Logged In!
          </h2>
        ) : (
          <div className="w-80 flex flex-col gap-4 rounded-lg p-4">
            <h1 className="text-center leading-normal text-white font-medium text-3xl mb-6">
              Welcome to <br /> PashuCare
            </h1>

            {showOTP ? (
              <>
                <div className="bg-white text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <BsFillShieldLockFill size={30} />
                </div>
                <label 
                  htmlFor="otp" 
                  className="font-bold text-xl text-white text-center"
                >
                  Enter your OTP
                </label>
                <OtpInput
                  value={otp}
                  onChange={setOtp}
                  OTPLength={6}
                  otpType="number"
                  disabled={false}
                  autoFocus
                  className="opt-container"
                />
                <button
                  onClick={onOTPVerify}
                  className="bg-emerald-600 w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                  <span>Verify OTP</span>
                </button>
              </>
            ) : (
              <>
                <div className="text-emerald-500 w-fit mx-auto p-4 rounded-full">
                  <img src={logo} alt="Logo" className="w-17 h-17" />
                </div>
                <label
                  htmlFor="phone"
                  className="font-bold text-xl text-white text-center"
                >
                  Verify your phone number
                </label>
                <PhoneInput 
                  country={"in"} 
                  value={ph} 
                  onChange={setPh} 
                />
                <button
                  onClick={onSignup}
                  className="bg-black w-full flex gap-1 items-center justify-center py-2.5 text-white rounded"
                >
                  {loading && <CgSpinner size={20} className="mt-1 animate-spin" />}
                  <span>Send code via SMS</span>
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

// Main Website Component
function MainSite() {
  return (
    <iframe
      src="/index.html"
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Main Site"
    />
  );
}

// App Component with Routing
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<OTPVerification />} />
        <Route path="/main" element={<MainSite />} />
      </Routes>
    </Router>
  );
}

export default App;