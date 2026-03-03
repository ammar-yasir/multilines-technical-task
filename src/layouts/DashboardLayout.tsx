import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Sidebar/Sidebar";
import Header from "../components/Header/Header";
import { useAuth } from "../auth/useAuth";

const DashboardLayout = () =>{
  const { user, logout, loading } = useAuth();
  return (
    <div className="flex">
      <Sidebar onLogout={logout} />
      <div className="w-full flex flex-col">
        <Header user={user} onLogout={logout} />
        <main className="min-h-screen bg-background p-4">
          {loading ? (
            <div className="text-center text-secondary py-20">
              Loading ...
            </div>
          ) : (
            <Outlet />
          )}
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;