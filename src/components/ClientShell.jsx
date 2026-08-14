"use client";
import { useState } from 'react';
import { SidebarProvider } from '@/contexts/SidebarContext';
import Sidebar from '@/components/Sidebar';
import Tutorial from '@/components/Tutorial';

export default function ClientShell({ children }) {
  const [sidebarForceOpen, setSidebarForceOpen] = useState(undefined);

  return (
    <SidebarProvider>
      <div className="relative">
        <Sidebar
          forceOpen={sidebarForceOpen}
          onToggle={(isOpen) => {
            if (!isOpen) setSidebarForceOpen(undefined);
          }}
        />
        <Tutorial onSidebarToggle={(shouldOpen) => setSidebarForceOpen(shouldOpen)} />
        {children}
      </div>
    </SidebarProvider>
  );
}
