import { useEffect, useState } from "react";
import "./UserMenu.css";
import "./UserMenuMedia.css";
import { MdOutlineDashboard, MdDelete } from "react-icons/md";
import { CgMenuBoxed } from "react-icons/cg";
import { IoAlertCircleOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { BiMoneyWithdraw } from "react-icons/bi";
import { RiLockPasswordLine } from "react-icons/ri";
import { GiMoneyStack } from "react-icons/gi";
import { GrShieldSecurity, GrTransaction } from "react-icons/gr";
import { useLocation, useNavigate, Outlet, NavLink } from "react-router-dom";
import Dashboard from "../userDashboard/Dashboard";
import Investments from "../Investments/Investments";
import Deposit from "../Deposits/Deposit";
import Withdraw from "../withdraw/Withdraw";
import ChangePassword from "../changePassword/ChangePassword";
import AssignMoney from "../AssignMoney/AssignMoney";
import AssignProfit from "../AssignProfit/AssignProfit";

// import TradingViewWidget from "../../TradingViewWidget";
import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineCloseCircle } from "react-icons/ai";

// import { logout, reset } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import axios from "axios";
import DeleteUser from "../DeleteUser/DeleteUser";
// import citadelLogo from "../../assets/image/citadelLogo.png";
import naxtrologo from "../../assets/naxtrologo.png";
// import CITADEL from "/CITADEL.png";
import {
  expireSession,
  getWalletDetails,
  userResData,
  userStoreData,
  getAccountBalance,
} from "../../Redux/State";
// import { AiOutlineSchedule } from "react-icons/ai";
import ScheduleInvestment from "../scheduleInvestments/ScheduleInvestment";
import Transaction from "../transaction/Transaction";
import Referral from "../referral/Referral";
import SupportTicket from "../supportTicket/SupportTicket";
import TwoFA from "../2FA/TwoFA";
import Profile from "../profile/Profile";
import Kyc from "../../KYC/Kyc";
import { FaAngleDown, FaTicketAlt, FaUsers } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import ProfileSettingPage from "../profile/ProfileSettingPage";
import PendingKyc from "../PendingKyc/PendingKyc";
import PendingTickets from "../PendingTickets/PendingTickets";
import UserDetails from "../UserDetails/UserDetails";
import { FaUser } from "react-icons/fa";

const UserMenu = () => {
  const AdminUser = useSelector((state) => state.BTC.userRes);
  const accountBalance = useSelector((state) => state.BTC.accountBalance);
  const walletDetails = useSelector((state) => state.BTC.wallets);

  console.log(walletDetails);
  const [initDepositApi, setInitDepositApi] = useState(walletDetails?.deposit);
  const [initInterestApi, setnitInterestApi] = useState(
    walletDetails?.interest
  );
  const [initReferalApi, setInitReferalApi] = useState(walletDetails?.referal);
  const [initAccBalance, setInitAccBalance] = useState(accountBalance);
  const [dashboard, setDashboard] = useState(true);
  const [investment, setInvestment] = useState(false);
  const [scheduleInvestment, setScheduleInvestment] = useState(false);
  const [deposit, setDeposit] = useState(false);
  const [withdraw, setWithdraw] = useState(false);
  const [transaction, setTransaction] = useState(false);
  const [referral, setReferral] = useState(false);
  const [supportTicket, setSupportTicket] = useState(false);
  const [twoFA, setTwoFA] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [assign, setAssign] = useState(false);
  const [assignProfit, setAssignProfit] = useState(false);
  const [deleteUser, setDeleteUser] = useState(false);
  const [pendingTickets, setPendingTickets] = useState(false);
  const [pendingKyc, setPendingKyc] = useState(false);
  const [userDetails, setUserDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const { token, id } = useSelector((state) => state.BTC.user);

  console.log(accountBalance);

  const navigate = useNavigate();
  const location = useLocation();
  console.log(AdminUser);
  const [menu, setMenu] = useState(false);
  const dispatch = useDispatch();

  async function getAccountBalanceDetails() {
    try {
      const response = await axios.get(
        `https://naxtrotradebackup.onrender.com/getUserTotalBalance/${id}`
      );
      console.log(response);
      dispatch(getAccountBalance(response.data.accountBalance));
      setInitAccBalance(response.data.accountBalance);
    } catch (err) {
      toast.error(err.message || err || err.data);
      console.error(err);
    }
  }

  async function getDepositWallet() {
    try {
      const response = await axios.get(
        `https://naxtrotradebackup.onrender.com/getUserDepositWallet/${id}`
      );

      console.log(response);
      setInitDepositApi(response?.data?.depositWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }
  async function getReferalWallet() {
    try {
      const response = await axios.get(
        `https://naxtrotradebackup.onrender.com/getUserReferalWallet/${id}`
      );
      console.log(response);
      setInitReferalApi(response?.data?.referalWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }
  async function getIntersetWallet() {
    try {
      const response = await axios.get(
        `https://naxtrotradebackup.onrender.com/getUserIntrestWallet/${id}`
      );
      console.log(response);
      setnitInterestApi(response.data?.intrestWallet);
    } catch (err) {
      console.log(err);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err.response?.data?.message);
        setLoading(false);
      }
    }
  }

  useEffect(() => {
    getAccountBalanceDetails();
    getDepositWallet();
    getIntersetWallet();
    getReferalWallet();
  }, []);

  useEffect(() => {
    dispatch(getAccountBalance()),
      dispatch(
        getWalletDetails({
          deposit: initDepositApi,
          interest: initInterestApi,
          referal: initReferalApi,
        })
      );
  }, [initDepositApi, initInterestApi, initReferalApi]);

  async function LogoutUser() {
    setLoading(true);
    try {
      const response = await axios.post(
        `https://naxtrotradebackup.onrender.com/logout/${id}`,
        null,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setLoading(false);
      navigate("/");
      dispatch(
        userStoreData({
          name: "",
          email: "",
          id: "",
          token: "",
          login: "",
          admin: "",
        })
      );
      dispatch(userResData([]));
      console.log(response);
    } catch (err) {
      console.log(err);
      setLoading(true);
      if (err.message === "Network Error") {
        toast.error("No internet Connection");
        setLoading(false);
      } else if (err.message === "timeout exceeded") {
        toast.error("timeout exceeded");
        setLoading(false);
      } else if (
        err?.response?.data?.message === "Failed to authenticate user."
      ) {
        navigate("/login");
        dispatch(expireSession(true));
      } else if (err?.response?.data?.message === "jwt expired") {
        navigate("/login");
        dispatch(expireSession(true));
      } else {
        setLoading(false);
        toast.error(err?.data?.message);
        setLoading(false);
      }
    }
  }


  return (
    <div className="user-dashboard-body">
      <div className="user-dashboard-left-container">
        <div className="user-dashboard-left-body">
          <div className="user-dashboard-left-body-logo" onClick={()=>navigate("/")} >
            <img src={naxtrologo} alt="citadelLogo" />
          </div>
          <div className="user-dashboard-acct-balance-container">
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>General Balance</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>{initAccBalance}.00 USD</h3>
                </div>
              </div>
            </div>

            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Deposit Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.deposit}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Interest Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.interest}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>Referral Wallet</p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {walletDetails.referal}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-withdraw-btn-wrapper">
              <button
                onClick={() => {
                  navigate("/deposit");
                }}
              >
                Deposit
              </button>
              <button
                onClick={() => {
                  navigate("/withdraw");
                }}
              >
                Withdraw
              </button>
            </div>
          </div>
          <div className="user-dashboard-left-body-menu">
            <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-dashboard-active' : 'user-dashboard-left-menu-dashboard'}>
                <div className="user-dashboard-menu-dashboard-container">
                  <div className="user-dashboard-menu-dashboard-container-icon">
                    <MdOutlineDashboard className= "user-dashboard-menu-icon"/>
                  </div>
                  <div className="user-dashboard-menu-dashboard-container-title">
                    Dashboard
                  </div>
                </div>
            </NavLink>
            
            <NavLink to='/investment' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-investment-active' : 'user-dashboard-left-menu-investment'}>
              <div className="user-dashboard-menu-investment-container">
                  <div className="user-dashboard-menu-investment-container-icon">
                    <CgMenuBoxed className= "user-dashboard-menu-investment-icon"/>
                  </div>
                  <div className="user-dashboard-menu-investment-container-title">
                    Investment
                  </div>
                </div>
            </NavLink>
           
            <NavLink to='/deposit' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-deposit-active' : 'user-dashboard-left-menu-deposit'}>
              <div className="user-dashboard-menu-deposit-container">
                  <div className="user-dashboard-menu-deposit-container-icon">
                    <IoAlertCircleOutline className= "user-dashboard-menu-deposit-icon"/>
                  </div>
                  <div className="user-dashboard-menu-deposit-container-title">
                    Deposit
                  </div>
                </div>
            </NavLink>

            <NavLink to='/withdraw' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-withdraw-active' : 'user-dashboard-left-menu-withdraw'}>
              <div className="user-dashboard-menu-withdraw-container">
                  <div className="user-dashboard-menu-withdraw-container-icon">
                    <BiMoneyWithdraw className= "user-dashboard-menu-withdraw-icon"/>
                  </div>
                  <div className="user-dashboard-menu-withdraw-container-title">
                    Withdraw
                  </div>
                </div>
            </NavLink>

            <NavLink to='/transaction' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-transaction-active' : 'user-dashboard-left-menu-transaction'}>
              <div className="user-dashboard-menu-transaction-container">
                  <div className="user-dashboard-menu-transaction-container-icon">
                    <GrTransaction className= "user-dashboard-menu-transaction-icon"/>
                  </div>
                  <div className="user-dashboard-menu-transaction-container-title">
                    Transaction
                  </div>
                </div>
            </NavLink>

            <NavLink to='/referral' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-referral-active' : 'user-dashboard-left-menu-referral'}>
              <div className="user-dashboard-menu-referral-container">
                  <div className="user-dashboard-menu-referral-container-icon">
                    <FaUsers className= "user-dashboard-menu-referral-icon"/>
                  </div>
                  <div className="user-dashboard-menu-referral-container-title">
                    referrals
                  </div>
                </div>
            </NavLink>

            <NavLink to='/twoFA' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-twoFA-active' : 'user-dashboard-left-menu-twoFA'}>
              <div className="user-dashboard-menu-twoFA-container">
                  <div className="user-dashboard-menu-twoFA-container-icon">
                    <GrShieldSecurity className= "user-dashboard-menu-twoFA-icon"/>
                  </div>
                  <div className="user-dashboard-menu-twoFA-container-title">
                    2FA Security
                  </div>
                </div>
            </NavLink>

            <NavLink to='/changepassword' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
              <div className="user-dashboard-menu-changePassword-container">
                  <div className="user-dashboard-menu-changePassword-container-icon">
                    <RiLockPasswordLine className= "user-dashboard-menu-changePassword-icon"/>
                  </div>
                  <div className="user-dashboard-menu-changePassword-container-title">
                    Change Password
                  </div>
                </div>
            </NavLink>
  
            {AdminUser.isAdmin ? (
              <>
                <NavLink to='/assignmoney' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      Assign Deposit
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/assignprofit' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      Assign Interest
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/user-details' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <FaUser className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      User Details
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/delete-user' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      Del/Deactivate User Acc
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/pending-kyc' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      Pending KYC
                    </div>
                  </div>
                </NavLink>
              </>
            ) : null}
            <div className="user-dashboard-left-menu-logout">
              <button
                className="user-dashboard-logout-btn"
                onClick={LogoutUser}
              >
                {loading ? <ClipLoader color="white" size={21} /> : "Logout"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="user-left-container-media">
        <div className="dashboard-hamburger-wrapper">
          <RxHamburgerMenu
            className="dashboard-hamburger-menu"
            onClick={() => {
              setMenu(true);
            }}
          />
        </div>
      </div>

      {menu ? (
        <div className="mobile_menu">
          <div
          className="user-left-menu-wrapper-media">
          <div className="user-left-menu-logo-wrapper-media">
            <div className="user-left-menu-logo-container-media">
              <img src={naxtrologo} alt="citadelLogo" />
            </div>
            <IoMdClose
              className="close_menu"
              onClick={() => {
                setMenu(false);
              }}
            />
          </div>

          <div className="user-dashboard-acct-balance-container">
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>
                  General Balance
                </p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {accountBalance && `${accountBalance}`}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>

            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>
                  Deposit Wallet
                </p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {AdminUser.depositWallet}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div  className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>
                  Interest Wallet
                </p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {AdminUser.intrestWallet}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
            <div className="user-dashboard-deposit-wallet-container">
              <div className="user-dashboard-deposit-wallet-wrapper">
                <p>
                  Referral Wallet
                </p>
                <div className="user-dashboard-deposit-wallet-amount">
                  <h3>
                    {AdminUser.referalWallet}.00 <span>USD</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div
            className="user-dashboard-left-body-menu-media"
            style={{
              overflowY: "scroll",
              height: "30rem",
            }}
          >
            <div className="user-dashboard-left-body-menu">
              <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-dashboard-active' : 'user-dashboard-left-menu-dashboard'} onClick={() => {
                setMenu(false);
              }}>
                <div className="user-dashboard-menu-dashboard-container">
                  <div className="user-dashboard-menu-dashboard-container-icon">
                    <MdOutlineDashboard className= "user-dashboard-menu-icon"/>
                  </div>
                  <div className="user-dashboard-menu-dashboard-container-title">
                    <p>
                      Dashboard
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to='/investment' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-investment-active' : 'user-dashboard-left-menu-investment'} onClick={() => {
                setMenu(false);
              }}>
                <div className="user-dashboard-menu-investment-container">
                  <div className="user-dashboard-menu-investment-container-icon">
                    <CgMenuBoxed className= "user-dashboard-menu-investment-icon"/>
                  </div>
                  <div className="user-dashboard-menu-investment-container-title">
                    <p>
                      Investment
                    </p>
                  </div>
                </div>
              </NavLink>
              <NavLink to='/deposit' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-deposit-active' : 'user-dashboard-left-menu-deposit'} onClick={() => {
                setMenu(false);
              }}>
              <div className="user-dashboard-menu-deposit-container">
                  <div className="user-dashboard-menu-deposit-container-icon">
                    <IoAlertCircleOutline className= "user-dashboard-menu-deposit-icon"/>
                  </div>
                  <div className="user-dashboard-menu-deposit-container-title">
                    <p>
                      Deposit
                    </p>
                  </div>
                </div>
            </NavLink>

            <NavLink to='/withdraw' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-withdraw-active' : 'user-dashboard-left-menu-withdraw'} onClick={() => {
                setMenu(false);
              }}>
              <div className="user-dashboard-menu-withdraw-container">
                  <div className="user-dashboard-menu-withdraw-container-icon">
                    <BiMoneyWithdraw className= "user-dashboard-menu-withdraw-icon"/>
                  </div>
                  <div className="user-dashboard-menu-withdraw-container-title">
                    <p>
                      Withdraw
                    </p>
                  </div>
                </div>
            </NavLink>

            <NavLink to='/transaction' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-transaction-active' : 'user-dashboard-left-menu-transaction'} onClick={() => {
                setMenu(false);
              }}>
              <div className="user-dashboard-menu-transaction-container">
                  <div className="user-dashboard-menu-transaction-container-icon">
                    <GrTransaction className= "user-dashboard-menu-transaction-icon"/>
                  </div>
                  <div className="user-dashboard-menu-transaction-container-title">
                    <p>
                      Transaction
                    </p>
                  </div>
                </div>
            </NavLink>
            <NavLink to='/changepassword' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
              <div className="user-dashboard-menu-changePassword-container">
                  <div className="user-dashboard-menu-changePassword-container-icon">
                    <RiLockPasswordLine className= "user-dashboard-menu-changePassword-icon"/>
                  </div>
                  <div className="user-dashboard-menu-changePassword-container-title">
                    <p>
                      Change Password
                    </p>
                  </div>
                </div>
            </NavLink>
              {AdminUser.isAdmin ? (
                <>
                  <NavLink to='/assignmoney' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p>
                        Assign Deposit
                      </p>
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/assignprofit' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <GiMoneyStack className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p>
                        Assign Interest
                      </p>
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/user-details' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <FaUser className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p>
                        User Details
                      </p>
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/delete-user' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p>
                        Del/Deactivate User Acc
                      </p>
                    </div>
                  </div>
                </NavLink>

                <NavLink to='/pending-kyc' className={({ isActive }) => isActive ? 'user-dashboard-left-menu-changePassword-active' : 'user-dashboard-left-menu-changePassword'} onClick={() => {
                setMenu(false);
              }}>
                  <div className="user-dashboard-menu-changePassword-container">
                    <div className="user-dashboard-menu-changePassword-container-icon">
                      <MdDelete className= "user-dashboard-menu-changePassword-icon"/>
                    </div>
                    <div className="user-dashboard-menu-changePassword-container-title">
                      <p>
                        Pending KYC
                      </p>
                    </div>
                  </div>
                </NavLink>
                </>
              ) : null}
              <div className="user-dashboard-left-menu-logout">
                <button
                  className="user-dashboard-logout-btn"
                  onClick={LogoutUser}
                >
                  {loading ? <ClipLoader color="white" size={21} /> : "Logout"}
                </button>
              </div>
            </div>
          </div>
        </div>
        </div>
      ) : null}
      <div className="user-dashboard-right-container">
        <div className="user-dashboard-profile-container">
          <script
            defer
            src="https://www.livecoinwatch.com/static/lcw-widget.js"
          ></script>{" "}
          <div
            className="livecoinwatch-widget-5"
            lcw-base="USD"
            lcw-color-tx="#999999"
            lcw-marquee-1="coins"
            lcw-marquee-2="movers"
            lcw-marquee-items="10"
          ></div>
        </div>
        <div className="user-dashboard-profile-wrapper">
          <Profile user={AdminUser} />
        </div>

        <div className="user-dashboard-menu-content-container">
          <Outlet/>
          {/* <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/investment" element={<Investments />} />
            <Route
              path="/scheduleInvestment"
              element={<ScheduleInvestment />}
            />
            <Route path="/deposit" element={<Deposit />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="/referral" element={<Referral />} />
            <Route path="/supportTicket" element={<SupportTicket />} />
            <Route path="/pending-kyc" element={<PendingKyc />} />
            <Route path="/pending-tickets" element={<PendingTickets />} />
            <Route path="/twoFA" element={<TwoFA />} />
            <Route path="/change_password" element={<ChangePassword />} />
            <Route path="/delete-user" element={<DeleteUser />} />
            <Route path="/assign-money" element={<AssignMoney />} />
            <Route path="/assign-profit" element={<AssignProfit />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user-details" element={<UserDetails />} />
            <Route
              path="/profile-setting"
              element={<ProfileSettingPage user={AdminUser} />}
            />
            <Route path="/kyc" element={<Kyc />} />
          </Routes> */}
        </div>
      </div>
    </div>
  );
};

export default UserMenu;
