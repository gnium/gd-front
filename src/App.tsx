// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import PublicLayout from "./layouts/PublicLayout/PublicLayout";
import AuthLayout from "./layouts/AuthLayout/AuthLayout";
import PrivateLayout from "./layouts/PrivateLayout/PrivateLayout";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { AuthProvider } from "./contexts/AuthContext";

import './App.scss';
import './App.css';
// Public pages

// Auth pages
import LoginPage from "./pages/LoginPage/LoginPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage/ForgotPasswordPage";

// Private pages
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import SettingsPage from "./pages/SettingsPage/SettingsPage";
import UsersPage from "./pages/UsersPage/UsersPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ReferralActionsPage from "./pages/ReferralActionsPage/ReferralActionsPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import ReferrersPage from "./pages/ReferrersPage/ReferrersPage";
import ReferralLinksPage from "./pages/ReferralLinksPage/ReferralLinksPage";
import ReferralClicksPage from "./pages/ReferralClicksPage/ReferralClicksPage";
import AuthRegisterDemoPage from "./pages/AuthRegisterDemoPage/AuthRegisterDemoPage";
import DomainCheckoutDemoPage from "./pages/DomainCheckoutDemoPage/DomainCheckoutDemoPage";
import MyCampaignsPage from "./pages/MyCampaignsPage/MyCampaignsPage";
import ReportingPage from "./pages/ReportingPage/ReportingPage";
import PayoutDetailsPage from "./pages/PayoutDetailsPage/PayoutDetailsPage";
import VisualAssetsPage from "./pages/VisualAssetsPage/VisualAssetsPage";
import PartnershipOraclePage from "./pages/PartnershipOraclePage/PartnershipOraclePage";
import SubmitReferralPage from "./pages/SubmitReferralPage/SubmitReferralPage";


const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Private routes */}
          <Route element={
            <PrivateRoute
              checkOnboarding={false}
            />
          }>
            <Route
              element={
                <PrivateLayout
                  showMenu={true}
                  showSidebar={false}
                  showFooter={true}
                />
              }
            >
              <Route path="/partnership-oracle" element={<PartnershipOraclePage />} />
            </Route>
            <Route
              element={
                <PrivateLayout
                  showMenu={true}
                  showSidebar
                  showFooter
                />
              }
            >

              <Route path="/" element={<MyCampaignsPage />} />
              <Route path="/reporting" element={<ReportingPage />} />
              <Route path="/payout-details" element={<PayoutDetailsPage />} />
              <Route path="/visual-assets" element={<VisualAssetsPage />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/notifications" element={<NotificationsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="/referral-actions" element={<ReferralActionsPage />} />
              <Route path="/referrers" element={<ReferrersPage />} />
              <Route path="/referral-links" element={<ReferralLinksPage />} />
              <Route path="/referral-clicks" element={<ReferralClicksPage />} />

              <Route path="/submit-referral" element={<SubmitReferralPage />} />
            </Route>
          </Route>
          {/* Public routes */}
          <Route element={<PublicLayout />}>
            <Route path="/auth/register" element={<AuthRegisterDemoPage />} />
            <Route path="/domains/checkout" element={<DomainCheckoutDemoPage />} />
          </Route>

          {/* Auth routes */}
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgot-password" element={<ForgotPasswordPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Route>

          {/* Ruta de 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;