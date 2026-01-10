import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { AdminLayout } from './components/AdminLayout';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { SiteSettingsPage } from './pages/SiteSettings';
import { AnalyticsSettingsPage } from './pages/AnalyticsSettings';
import {
    ContactSettingsPage,
    HeroSettingsPage,
    AboutSettingsPage,
    ServicesSettingsPage
} from './pages/Placeholder';

function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated, isLoading } = useAuth();

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return <Navigate to="/admin/login" replace />;
    }

    return <>{children}</>;
}

function AdminRoutes() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <AdminLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<Navigate to="/admin/dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="site-settings" element={<SiteSettingsPage />} />
                <Route path="analytics" element={<AnalyticsSettingsPage />} />
                <Route path="contact" element={<ContactSettingsPage />} />
                <Route path="hero" element={<HeroSettingsPage />} />
                <Route path="about" element={<AboutSettingsPage />} />
                <Route path="services" element={<ServicesSettingsPage />} />
            </Route>
        </Routes>
    );
}

export function AdminApp() {
    return (
        <AuthProvider>
            <AdminRoutes />
        </AuthProvider>
    );
}

export default AdminApp;
