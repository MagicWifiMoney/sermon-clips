"use client";

import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="h-16 bg-white border-b border-[#E8E4DC] flex items-center justify-between px-6">
      <button
        onClick={onMenuClick}
        className="lg:hidden p-2 -ml-2 rounded-lg text-[#5c5c5c] hover:bg-[#F5F1EB]"
      >
        <Menu className="w-5 h-5" />
      </button>

      <div className="lg:hidden" />

      <div className="flex-1" />

      <UserButton
        appearance={{
          elements: {
            avatarBox: "w-9 h-9",
          },
        }}
      />
    </header>
  );
}
