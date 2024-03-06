import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <div className="grid grid-cols-1 md:grid-cols-2  min-h-screen">
      <div className="hidden md:flex" style={{ backgroundImage: `url('/login_image.jpg')`,
                    height: '100vh',
                    backgroundSize: 'cover',    
      }}>

        <div className="flex items-start justify-start p-8">
              <Link href="/" className="flex items-center gap-x-4">
                 
                <ChevronLeft className="text-white font-bold" size={18} />
                  <span className="capitalize text-white text-md">
                    
                    go back to home
                    </span> 
              </Link>
        </div>
      </div>

      <div className="flex items-center justify-center md:p-x-10" >
        {children}
      </div>

  </div>
};

export default AuthLayout;
