
import { ReactNode } from 'react';
import { AlertCircle } from "lucide-react";
import DashboardNav from "@/components/DashboardNav";

interface DashboardLayoutProps {
  children: ReactNode;
  isLoading: boolean;
  error: string | null;
  title?: string;
}

const DashboardLayout = ({ children, isLoading, error, title = "Portfolio Dashboard" }: DashboardLayoutProps) => {
  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">Loading dashboard...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      
      <main className="container mx-auto py-6 px-4">
        <h1 className="text-3xl font-bold mb-6">{title}</h1>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 flex items-center">
            <AlertCircle className="mr-2" size={20} />
            <span>{error}</span>
          </div>
        )}
        
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
