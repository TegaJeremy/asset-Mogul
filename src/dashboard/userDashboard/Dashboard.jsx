import { useEffect, useState } from "react";
import "./Dashboard.css";
import "./DashboardMedia.css";
import {
  CryptoCurrencyMarket,
  EconomicCalendar,
  StockMarket,
  SymbolOverview,
} from "react-ts-tradingview-widget";
import CheckVerifications from "./CheckVerifications";
import { FaCoins, FaWallet } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { expireSession } from "../../Redux/State";
import { BounceLoader } from "react-spinners";
import { Link } from "react-router-dom";
import GeneralNumbers from "./GeneralNumbers";
import InsightChart from "./InsightChart";
import ProgressBar from "./ProgressBar";
import { TbArrowWaveRightUp } from "react-icons/tb";

const Dashboard = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [totalDeposit, setTotalDeposit] = useState(0);
  const [lastDeposit, setLastDeposit] = useState(0);
  const [rejectedDeposit, setRejectedDeposit] = useState(0);
  const [pendingDeposit, setPendingDeposit] = useState(0);
  const [totalWithdrawal, setTotalWithdrawal] = useState(0);
  const [pendingWithdrawal, setPendingWithdrawal] = useState(0);
  const [rejectedWithdrawal, setRejectedWithdrawal] = useState(0);
  const [lastWithdrawal, setLastWithdrawal] = useState(0);
  const [nitInterestApi, setnitInterestApi] = useState(0);
  const [lastInvestment, setLastInvestment] = useState(0);
  const [runningInvestment, setRunningInvestment] = useState(0);
  const [completedInvestment, setCompletedInvestment] = useState(0);
  const [lastestTransaction, setlastestTransaction] = useState({});
  const { id } = useSelector((state) => state.BTC.user);
  const AdminUser = useSelector((state) => state.BTC.userRes);

  async function getTotalDeposit() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getTotalDeposit/${id}`
      );
      console.log(response);
      setTotalDeposit(response?.data?.totalDeposit);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getLastDeposit() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getLastDeposit/${id}`
      );
      console.log(response);
      setLastDeposit(response?.data?.amount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getTotalWithdrawal() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getTotalWithdraw/${id}`
      );
      console.log(response);
      setTotalWithdrawal(response?.data?.totalWithdrawalAmount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getPendingwithdrawl() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getPendingwithdrawl/${id}`
      );
      console.log(response);
      setPendingWithdrawal(response?.data?.PendingWithdraw);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function RejectedWithdral() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/RejectedWithdral/${id}`
      );
      console.log(response);
      setRejectedWithdrawal(response?.data?.rejectedWithdraw);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getLastWithdrawal() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getLastWithdrawal/${id}`
      );
      console.log(response);
      setLastWithdrawal(response?.data?.amount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getIntersetWallet() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getUserIntrestWallet/${id}`
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

  async function getLastInvestment() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getLastInvestment/${id}`
      );
      console.log(response);
      setLastInvestment(response?.data?.amount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getRunningInvestment() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getRunningInvestment/${id}`
      );
      console.log(response);
      setRunningInvestment(response?.data?.amount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getCompletedInvestment() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getCompletedInvestment/${id}`
      );
      console.log(response);
      setCompletedInvestment(response?.data?.amount);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  async function getLatestTransaction() {
    try {
      const response = await axios.get(
        `https://asset-mogul-back.onrender.com/getLatestTransaction/${id}`
      );
      console.log(response);
      setlastestTransaction(response.data?.data);
      console.log(lastestTransaction);
    } catch (err) {
      console.log(err);
      if (err?.message === " Network Error") {
        toast.error("Bad Internet Connection");
      } else if (err?.response?.data?.message === "jwt expired") {
        nav("/login");
        dispatch(expireSession(true));
      } else {
        toast.error(err?.response?.data?.message);
      }
    }
  }

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.livecoinwatch.com/static/lcw-widget.js";
    script.defer = true;
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      document.body.removeChild(script);
    };
  }, []); // Run only once on component mount

  useEffect(() => {
    getTotalDeposit();
    getLastDeposit();
    getTotalWithdrawal();
    getPendingwithdrawl();
    RejectedWithdral();
    getLastWithdrawal();
    getIntersetWallet();
    getLastInvestment();
    getRunningInvestment();
    getCompletedInvestment();
    getLatestTransaction();
  }, []);

  return (
    <div className="dashboard-content-container">
      <div className="dashboard-content-body">
        <ProgressBar/>
        <div className="balance_section_body">
          <div className="balance_section_card_container">
            <div className="balance_section_card_top">
              <div className="balance_section_card_logo"></div>
              <p>Total Deposit</p>
              <TbArrowWaveRightUp className="arrow_wave"/>
            </div>
            <h3>${totalDeposit}</h3>
            <div className="balance_section_card_bottom">
              <div className="balance_section_card_bottom_text_container addWidth">
                <p>Last Deposit</p>
                <h3>${lastDeposit}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Pending</p>
                <h3>${pendingDeposit}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Rejected</p>
                <h3>$0</h3>
              </div>
            </div>
          </div>
          <div className="balance_section_card_container">
            <div className="balance_section_card_top">
              <div className="balance_section_card_logo"></div>
              <p>Total Withdrawal</p>
              <TbArrowWaveRightUp className="arrow_wave"/>
            </div>
            <h3>${totalWithdrawal}</h3>
            <div className="balance_section_card_bottom">
              <div className="balance_section_card_bottom_text_container addWidth">
                <p>Last Withdraw</p>
                <h3>${lastWithdrawal}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Pending</p>
                <h3>${pendingWithdrawal}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Rejected</p>
                <h3>${rejectedWithdrawal}</h3>
              </div>
            </div>
          </div>
          <div className="balance_section_card_container">
            <div className="balance_section_card_top">
              <div className="balance_section_card_logo"></div>
              <p>Interest Balance</p>
              <TbArrowWaveRightUp className="arrow_wave"/>
            </div>
            <h3>${nitInterestApi}</h3>
            <div className="balance_section_card_bottom">
              <div className="balance_section_card_bottom_text_container addWidth">
                <p>Last Invest</p>
                <h3>${lastInvestment}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Running</p>
                <h3>${runningInvestment}</h3>
              </div>
              <div className="balance_section_card_bottom_text_container">
                <p>Completed</p>
                <h3>${completedInvestment}</h3>
              </div>
            </div>
          </div>
        </div>
        {
          AdminUser.isAdmin ? <GeneralNumbers/> : null
        }
        
        {
          AdminUser.isAdmin ? null : <CheckVerifications />
        }
        <>
          {
            AdminUser.isAdmin ? 
            <div className="chart_container">
              <InsightChart/>
            </div>
            : null
          }
          <div className="dashboard-coin-card-container">
            <div className="dashboard-coin-balance-body">
              <SymbolOverview width="100%" colorTheme="dark" />
            </div>
          </div>
          <div className="dashboard-balance-and-profit-holder">
            <div className="dashboard-coin-balance-card-up">
                <div className="dashboard-total-deposit-wrapper-up-wrapper">
                  <span className="dashboard-total-deposit-wrapper-up-wrapper-icon-holder">
                    <FaWallet className="dashboard-total-deposit-wrapper-up-wrapper-icon" />
                  </span>
                  <div className="dashboard-total-deposit-wrapper-up-wrapper-title">
                    <h3 className="dashboard-total-deposit-wrapper-up-wrapper-title-h3">
                      Total Deposit Balance
                    </h3>
                    <h2 className="dashboard-total-deposit-wrapper-up-wrapper-title-amount">
                      {totalDeposit || "N/A"} USD
                    </h2>
                  </div>
                </div>
            </div>
            <div className="dashboard-coin-balance-card-down">
                <div className="dashboard-total-deposit-wrapper-down-wrapper">
                  <span className="dashboard-total-deposit-wrapper-down-wrapper-icon-holder">
                    <FaCoins className="dashboard-total-deposit-wrapper-down-wrapper-icon" />
                  </span>
                  <div className="dashboard-total-deposit-wrapper-down-wrapper-title">
                    <h3 className="dashboard-total-deposit-wrapper-down-wrapper-title-h3">
                      Total Withdraw
                    </h3>
                    <h2 className="dashboard-total-deposit-wrapper-down-wrapper-title-amount">
                      {totalWithdrawal || "N/A"} USD
                    </h2>
                  </div>
                </div>
            </div>
          </div>
          <div className="dashboard_plan">
            <h3>Start a plan :</h3>
            <div className="the_plans">
              <div className="plans" onClick={()=>nav("/investment")}>Starter Plan</div>
              <div className="plans" onClick={()=>nav("/investment")}>Premium Plan</div>
              <div className="plans" onClick={()=>nav("/investment")}>Enterprise Plan</div>
              <div className="plans" onClick={()=>nav("/investment")}>Pro Plan</div>
              <div className="plans" onClick={()=>nav("/investment")}>Ultimate Plan</div>
            </div>
          </div>
          <div className="dashboard_stock_widget">
            <StockMarket width="100%" colorTheme="dark" />
          </div>
          <div className="dashboard-recent-transaction-investment-container">
            <div className="dashboard-recent-investment">
              <div className="dashboard-recent-investment-body">
                <h5 className="dashboard-recent-investment-card-title">
                  Latest Transaction
                </h5>
              </div>

              {!loading ? (
                <div
                  style={{
                    textAlign: "center",
                  }}
                >
                  <span>Please wait...</span>
                  <BounceLoader size={120} color="orangered" />
                </div>
              ) : lastestTransaction?.length === null ? (
                <p
                  style={{
                    color: "orangered",
                    fontSize: "1.2rem",
                    textAlign: "center",
                  }}
                >
                  No transaction yet
                </p>
              ) : (
                <div className="table-container">
                  <table className="transaction-table">
                    <thead className="transaction-table-head">
                      <tr className="transaction-table-row">
                        <th className="transaction-table-th">Id</th>
                        <th className="transaction-table-th">Amount</th>
                        <th className="transaction-table-th">Date</th>
                        <th className="transaction-table-th">Type</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr className="transaction-table-row">
                        <td className="transaction-table-data">
                          {lastestTransaction?.ID
                            ? lastestTransaction.ID
                            : "N/A"}
                        </td>
                        <td className="transaction-table-data">
                          {lastestTransaction?.amount}
                        </td>
                        <td className="transaction-table-data">
                          {new Date(
                            lastestTransaction?.timestamp
                          ).toLocaleDateString()}
                        </td>
                        <td className="transaction-table-data">
                          {lastestTransaction?.type}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
          <div className="dashboard_stock_widget">
            <CryptoCurrencyMarket width="100%" colorTheme="dark" />
          </div>
        </>
      </div>
    </div>
  );
};

export default Dashboard;
