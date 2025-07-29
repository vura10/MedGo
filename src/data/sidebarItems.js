// src/data/sidebarItems.js
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

const sidebarItems = [
  {
    title: "User Management",
    icon: FaUsers,
    type: "dropdown",
    items: [
      "View/search/filter patients & doctors",
      "Doctor onboarding approval",
      "Activate / deactivate accounts",
      "View doctor ratings & feedback",
      "View patient booking history",
    ],
  },
  {
    title: "Consultation Management",
    icon: FaStethoscope,
    type: "dropdown",
    items: [
      "Total consultations",
      "View ongoing, upcoming, and past consultations",
      "Rescheduling or force-closing options",
      "No-show reports or cancellations",
    ],
  },
  {
    title: "Revenue & Payments",
    icon: FaMoneyBillWave,
    type: "dropdown",
    items: [
      "Revenue breakdown",
      "Real-time revenue dashboard",
      "Doctor payout calculation and release module",
      "Payment history logs",
      "Transactions, refunds",
    ],
  },
  {
    title: "Analytics & Reports",
    icon: FaChartBar,
    type: "dropdown",
    items: [
      "Charts for user growth",
      "Consultation volume trends",
      "Heatmap of top service locations",
      "CSV export/download option",
    ],
  },
  {
    title: "Compliance / Audit Logs",
    icon: FaShieldAlt,
    type: "dropdown",
    items: [
      "Activity logs",
      "Data access history",
      "Document uploads and KYC verification logs",
      "Doctor credential expiry notifications",
    ],
  },
  {
    title: "Settings & Configurations",
    icon: FaCog,
    type: "dropdown",
    items: [
      "Consultation pricing rules",
      "Doctor availability configurations",
      "Notification templates",
      "Support chatbot content",
    ],
  },
  {
    title: "Customer Support Tools",
    icon: FaHeadset,
    type: "dropdown",
    items: [
      "Raise/view tickets",
      "Assign tickets to support team",
      "View conversation history",
      "Trigger system-generated messages",
    ],
  },
  {
    title: "App Insights",
    icon: MdInsights,
    type: "dropdown",
    items: [
      "Crash/error reports",
      "Most used features",
      "Device/platform breakdown",
      "Integration with Firebase/Segment for tracking",
    ],
  },
  {
    title: "Third-party Integration",
    icon: FaPuzzlePiece,
    type: "dropdown",
    items: [
      "Pharmacy API logs",
      "Diagnostic lab API logs",
      "WhatsApp message delivery status",
      "Payment gateway webhook monitoring",
    ],
  },
];

export default sidebarItems;
