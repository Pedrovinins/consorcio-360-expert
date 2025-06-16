
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import LoginPage from "./features/auth/components/LoginPage";
import MainLayout from "./components/layout/MainLayout";
import Dashboard from "./pages/Dashboard";
import Simulation from "./pages/Simulation";
import Leads from "./pages/Leads";
import Contacts from "./pages/Contacts";
import Opportunities from "./pages/Opportunities";
import Activities from "./pages/Activities";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
              path="/"
              element={
                <ProtectedRoute>
                  <MainLayout />
                </ProtectedRoute>
              }
            >
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="simulation" element={<Simulation />} />
              <Route path="leads" element={<Leads />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="opportunities" element={<Opportunities />} />
              <Route path="activities" element={<Activities />} />
              <Route path="campaigns" element={<div className="p-6"><h1 className="text-2xl font-bold">Campanhas - Em desenvolvimento</h1></div>} />
              <Route path="analytics" element={<div className="p-6"><h1 className="text-2xl font-bold">Analytics - Em desenvolvimento</h1></div>} />
              <Route path="automation" element={<div className="p-6"><h1 className="text-2xl font-bold">Automação - Em desenvolvimento</h1></div>} />
              <Route path="settings" element={<div className="p-6"><h1 className="text-2xl font-bold">Configurações - Em desenvolvimento</h1></div>} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
