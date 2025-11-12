import React, { useState } from "react";
import "./Register.css";
import "./RegisterRes.css";
import { useNavigate, Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { toast } from "react-toastify";
import Country from "../signUp/Country";
import visibilityIcon from "../../assets/svg/visibilityIcon.svg";
import naxtrologo from "../../assets/asset_mogul_logo.png";

const Register = () => {
  const nav = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  // Form states
  const [userName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [country, setCountry] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const countries = Country();

  const registerUser = async (e) => {
    e.preventDefault();

    // Validation
    if (!userName.trim()) {
      toast.error("Username field cannot be empty");
      return;
    }
    if (!email.trim()) {
      toast.error("Email field cannot be empty");
      return;
    }
    if (!country.trim()) {
      toast.error("Please select your country");
      return;
    }
    if (!mobile.trim()) {
      toast.error("Mobile number field cannot be empty");
      return;
    }
    if (!password.trim()) {
      toast.error("Password field cannot be empty");
      return;
    }
    if (!confirmPassword.trim()) {
      toast.error("Confirm password field cannot be empty");
      return;
    }
    if (password.trim() !== confirmPassword.trim()) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const dataObj = {
        userName: userName.trim(),
        email: email.trim(),
        password: password.trim(),
        mobile: mobile.trim(),
        country: country.trim(),
      };

      const response = await axios.post(
        "https://assets-mogul-backend.onrender.com/registration",
        dataObj
      );

      console.log(response);
      toast.success(response?.data?.message || "Registration successful!");
      setLoading(false);
      
      // Clear form
      setUsername("");
      setEmail("");
      setMobile("");
      setCountry("");
      setPassword("");
      setConfirmPassword("");
      
      // Navigate to login
      nav("/login");
      
    } catch (err) {
      setLoading(false);
      console.log(err);
      
      if (err?.response?.data?.error) {
        toast.error(err.response.data.error);
      } else if (err?.response?.data?.message) {
        toast.error(err.response.data.message);
      } else if (err?.message === "Network Error") {
        toast.error("Bad Internet Connection");
      } else {
        toast.error("Registration failed. Please try again.");
      }
    }
  };

  const code = countries.find((countryCode) => countryCode.country === country);

  return (
    <div className="register-container">
      <div className="signUp_Page">
        <div className="signUp_PageWrapper">
          <div className="signUpCard">
            <form onSubmit={registerUser} className="signUpInput_Wrapper">
              <div className="Login_LogoPart">
                <Link to={"/"}>
                  <img
                    src={naxtrologo}
                    height={120}
                    alt="Logo"
                    className="Login_LogoPart_Img"
                  />
                </Link>
              </div>

              <div className="SignUpForm_Header">
                <span>Create New Account</span>
              </div>

              <div className="SignUp_InputsParts">
                {/* Username */}
                <div className="SignUp_Inputs">
                  <span>
                    Username <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <input
                    value={userName}
                    onChange={(e) => setUsername(e.target.value)}
                    type="text"
                    placeholder="JohnDoe17"
                  />
                </div>

                {/* Email */}
                <div className="SignUp_Inputs">
                  <span>
                    Email <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="johnDoe@me.com"
                  />
                </div>

                {/* Country */}
                <div className="SignUp_Inputs">
                  <span>
                    Country <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  >
                    <option value="">Select Your Country</option>
                    {countries.map((country) => (
                      <option key={country.country} value={country.country}>
                        {country.country} ({country.code})
                      </option>
                    ))}
                  </select>
                </div>

                {/* Mobile */}
                <div className="SignUp_Inputs" id="signup-special">
                  <span>
                    Mobile Number <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <h4 className="Country_Code">
                    {!country ? countries[0].code : code?.code}
                  </h4>
                  <input
                    value={mobile}
                    type="number"
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="00000000"
                    id="special-input"
                  />
                </div>

                {/* Password */}
                <div className="SignUp_Inputs">
                  <span>
                    Password <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="8 characters, incl 1 uppercase, lowercase"
                  />
                  <img
                    src={visibilityIcon}
                    alt="showPassword"
                    className="showPassword"
                    style={{
                      padding: "3%",
                      top: "70%",
                      right: "1%",
                    }}
                    onClick={() => setShowPassword((prev) => !prev)}
                  />
                </div>

                {/* Confirm Password */}
                <div className="SignUp_Inputs">
                  <span>
                    Confirm Password <span style={{ color: "red", fontSize: "16px" }}>*</span>
                  </span>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                  />
                  <img
                    src={visibilityIcon}
                    alt="showPassword"
                    className="showPassword"
                    style={{
                      padding: "3%",
                      top: "70%",
                      right: "1%",
                    }}
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  />
                </div>
              </div>

              <div className="SignUp_Buttons">
                <button disabled={loading} type="submit">
                  {loading ? (
                    <ClipLoader
                      id="clipLoader"
                      display="block"
                      position="absolute"
                      top="4px"
                      left="4px"
                      color="#c48742"
                    />
                  ) : (
                    "Create Account"
                  )}
                </button>
                <div className="Login_Route">
                  <span>Already have an account? </span>
                  <span
                    onClick={() => nav("/login")}
                    style={{
                      color: "gold",
                      textDecoration: "underline",
                      cursor: "pointer",
                    }}
                  >
                    Log in
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;