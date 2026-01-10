import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Button } from '../../components/ui/button';
import {
    LayoutDashboard,
    Settings,
    BarChart3,
    Phone,
    ImageIcon,
    FileText,
    Wrench,
    LogOut,
    Menu,
    X,
    ExternalLink,
} from 'lucide-react';
import { useState } from 'react';

const menuItems = [
    { path: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { path: '/admin/site-settings', label: 'Site Ayarları', icon: Settings },
    { path: '/admin/analytics', label: 'Analitik & Etiketler', icon: BarChart3 },
    { path: '/admin/contact', label: 'İletişim Bilgileri', icon: Phone },
    { path: '/admin/hero', label: 'Hero Bölümü', icon: ImageIcon },
    { path: '/admin/about', label: 'Hakkımızda', icon: FileText },
    { path: '/admin/services', label: 'Hizmetler', icon: Wrench },
];

const SIDEBAR_WIDTH = 280;

export function AdminLayout() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/admin/login');
    };

    return (
        <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            {/* Mobile sidebar overlay */}
            {sidebarOpen && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        backdropFilter: 'blur(4px)',
                        zIndex: 40,
                    }}
                    className="lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    width: SIDEBAR_WIDTH,
                    background: 'linear-gradient(180deg, #1e293b 0%, #0f172a 100%)',
                    boxShadow: '4px 0 24px rgba(0,0,0,0.15)',
                    zIndex: 50,
                    transform: sidebarOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s ease-out',
                }}
                className="lg:!transform-none"
            >
                <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                    {/* Logo & Close Button */}
                    <div style={{ padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: 44,
                                    height: 44,
                                    background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #ec4899 100%)',
                                    borderRadius: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 8px 16px rgba(139, 92, 246, 0.3)',
                                }}>
                                    <span style={{ fontSize: 24 }}>🌈</span>
                                </div>
                                <div>
                                    <h1 style={{ fontWeight: 700, color: 'white', fontSize: 18, margin: 0 }}>Gökkuşağı</h1>
                                    <p style={{ fontSize: 12, color: '#94a3b8', margin: 0 }}>Yönetim Paneli</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setSidebarOpen(false)}
                                className="lg:hidden"
                                style={{
                                    padding: 8,
                                    borderRadius: 8,
                                    color: '#94a3b8',
                                    background: 'transparent',
                                    border: 'none',
                                    cursor: 'pointer',
                                }}
                            >
                                <X style={{ width: 20, height: 20 }} />
                            </button>
                        </div>
                    </div>

                    {/* Navigation */}
                    <nav style={{ flex: 1, padding: 16, overflowY: 'auto' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                            {menuItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <NavLink
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => setSidebarOpen(false)}
                                        style={({ isActive }) => ({
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: 12,
                                            padding: '12px 16px',
                                            borderRadius: 12,
                                            textDecoration: 'none',
                                            transition: 'all 0.2s',
                                            background: isActive
                                                ? 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)'
                                                : 'transparent',
                                            color: isActive ? 'white' : '#cbd5e1',
                                            boxShadow: isActive ? '0 4px 12px rgba(139, 92, 246, 0.3)' : 'none',
                                            fontWeight: isActive ? 600 : 500,
                                        })}
                                    >
                                        <Icon style={{ width: 20, height: 20, flexShrink: 0 }} />
                                        <span>{item.label}</span>
                                    </NavLink>
                                );
                            })}
                        </div>
                    </nav>

                    {/* User & Logout */}
                    <div style={{ padding: 16, borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16, padding: '0 8px' }}>
                            <div style={{
                                width: 40,
                                height: 40,
                                background: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
                            }}>
                                <span style={{ fontSize: 14, fontWeight: 700, color: 'white' }}>
                                    {user?.name?.charAt(0).toUpperCase() || 'A'}
                                </span>
                            </div>
                            <div style={{ flex: 1, minWidth: 0 }}>
                                <p style={{ fontSize: 14, fontWeight: 600, color: 'white', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {user?.name || 'Admin'}
                                </p>
                                <p style={{ fontSize: 12, color: '#94a3b8', margin: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                    {user?.email}
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={handleLogout}
                            style={{
                                width: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'flex-start',
                                gap: 8,
                                padding: '10px 16px',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid rgba(255,255,255,0.1)',
                                borderRadius: 10,
                                color: '#cbd5e1',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontSize: 14,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                                e.currentTarget.style.color = '#cbd5e1';
                            }}
                        >
                            <LogOut style={{ width: 16, height: 16 }} />
                            Çıkış Yap
                        </button>
                    </div>
                </div>
            </aside>

            {/* Main content wrapper - properly offset from sidebar */}
            <div
                className="main-content-wrapper"
                style={{
                    marginLeft: 0,
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <style>{`
                    @media (min-width: 1024px) {
                        .main-content-wrapper {
                            margin-left: ${SIDEBAR_WIDTH}px !important;
                        }
                        aside {
                            transform: translateX(0) !important;
                        }
                    }
                `}</style>

                {/* Header */}
                <header style={{
                    position: 'sticky',
                    top: 0,
                    zIndex: 30,
                    backgroundColor: 'rgba(255,255,255,0.9)',
                    backdropFilter: 'blur(12px)',
                    borderBottom: '1px solid #e2e8f0',
                    padding: '16px 24px',
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="lg:hidden"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu style={{ width: 24, height: 24 }} />
                        </Button>
                        <div style={{ flex: 1 }} />
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 8,
                                padding: '8px 16px',
                                fontSize: 14,
                                fontWeight: 500,
                                color: '#3b82f6',
                                textDecoration: 'none',
                                borderRadius: 8,
                                transition: 'all 0.2s',
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.backgroundColor = '#eff6ff';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <ExternalLink style={{ width: 16, height: 16 }} />
                            Siteyi Görüntüle
                        </a>
                    </div>
                </header>

                {/* Page content */}
                <main style={{ flex: 1, padding: 24 }}>
                    <Outlet />
                </main>

                {/* Footer */}
                <footer style={{
                    padding: '16px 24px',
                    borderTop: '1px solid #e2e8f0',
                    backgroundColor: 'rgba(255,255,255,0.5)',
                }}>
                    <p style={{ textAlign: 'center', fontSize: 14, color: '#64748b', margin: 0 }}>
                        © {new Date().getFullYear()} Gökkuşağı Temizlik Hizmetleri - Admin Panel
                    </p>
                </footer>
            </div>
        </div>
    );
}
