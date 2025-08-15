import {
  FaTachometerAlt,
  FaUsers,
  FaStethoscope,
  FaMoneyBillWave,
  FaChartBar,
  FaShieldAlt,
  FaCog,
  FaHeadset,
  FaMobileAlt,
  FaPuzzlePiece,
} from "react-icons/fa";
import { MdInsights } from "react-icons/md";

import Dashboard from "../components/Dashboard";

//Users Imports
import DoctorOnboarding from "../components/Users/DoctorOnboarding";
import ViewUsers from "../components/Users/ViewUsers";
import AccountStatus from '../components/Users/AccountStatus';
import DoctorRatings from '../components/Users/DoctorRatings';
import BookingHistory from '../components/Users/BookingHistory';

//Consulation Managements Imports
import TotalConsulation from '../components/Consultation/TotalConsulation';


//Revenue And Payments Imports
import DocPayout from "../components/RevPayments/DocPayout" 
import DoctorCommissions from "../components/RevPayments/DoctorCommissions";

const sidebarItems = [
  {
    title: "Dashboard",
    icon: FaTachometerAlt,
    type: "link", 
    path: "dashboard",
    element: <Dashboard />,
  },
  {
    title: "User Management",
    icon: FaUsers,
    type: "dropdown",
    basePath: "users",
    items: [
      { name: "View/search/filter patients & doctors", path: "view", element: <ViewUsers /> },
      { name: "Doctor onboarding approval", path: "doctor-onboarding", element: <DoctorOnboarding /> },
      { name: "Activate & deactivate accounts", path: "account-status", element: <AccountStatus /> },
      { name: "View doctor ratings & feedback", path: "doctor-ratings", element: <DoctorRatings /> },
      { name: "View patient booking history", path: "booking-history", element: <BookingHistory /> },
    ],
  },
  {
    title: "Consultation Management",
    icon: FaStethoscope,
    type: "dropdown",
    basePath: "consultation",
    items: [
      { name: "Total consultations", path: "total-consultations", element: <TotalConsulation /> },
      { name: "View ongoing, upcoming, and past consultations" },
      { name: "Rescheduling or force-closing options" },
      { name: "No-show reports or cancellations" },
    ],
  },
  {
    title: "Revenue & Payments",
    icon: FaMoneyBillWave,
    type: "dropdown",
    basePath: "revenue",
    items: [
      { name: "Revenue breakdown" },
      { name: "Real-time revenue dashboard" },
      { name: "Doctor payout calculations", path: "doctors-payout", element: <DocPayout /> },
      { name: "Payment history logs" },
      { name: "Transactions, refunds" },
      { name: "Doctor commissions", path: "doctors-commissions", element: <DoctorCommissions /> },
      { name: "GST" },
    ],
  },
  {
    title: "Analytics & Reports",
    icon: FaChartBar,
    type: "dropdown",
    basePath: "analytics",
    items: [
      { name: "Charts for user growth" },
      { name: "Consultation volume trends" },
      { name: "Heatmap of top service locations" },
      { name: "CSV export/download option" },
    ],
  },
  {
    title: "Compliance / Audit Logs",
    icon: FaShieldAlt,
    type: "dropdown",
    basePath: "compliance",
    items: [
      { name: "Activity logs" },
      { name: "Data access history" },
      { name: "Document uploads and KYC verification logs" },
      { name: "Doctor credential expiry notifications" },
    ],
  },
  {
    title: "Settings & Configurations",
    icon: FaCog,
    type: "dropdown",
    basePath: "settings",
    items: [
      { name: "Consultation pricing rules" },
      { name: "Doctor availability configurations" },
      { name: "Notification templates" },
      { name: "Support chatbot content" },
    ],
  },
  {
    title: "Customer Support Tools",
    icon: FaHeadset,
    type: "dropdown",
    basePath: "support",
    items: [
      { name: "Raise/view tickets" },
      { name: "Assign tickets to support team" },
      { name: "View conversation history" },
      { name: "Trigger system-generated messages" },
    ],
  },
  {
    title: "App Insights",
    icon: MdInsights,
    type: "dropdown",
    basePath: "insights",
    items: [
      { name: "Crash/error reports" },
      { name: "Most used features" },
      { name: "Device/platform breakdown" },
      { name: "Integration with Firebase/Segment for tracking" },
    ],
  },
  {
    title: "Third-party Integration",
    icon: FaPuzzlePiece,
    type: "dropdown",
    basePath: "integration",
    items: [
      { name: "Pharmacy API logs" },
      { name: "Diagnostic lab API logs" },
      { name: "WhatsApp message delivery status" },
      { name: "Payment gateway webhook monitoring" },
    ],
  },
];

export default sidebarItems;
