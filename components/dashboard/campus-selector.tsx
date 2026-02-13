"use client";

import useSWR from "swr";
import { Building2 } from "lucide-react";

interface Campus {
  id: string;
  name: string;
  isDefault: boolean;
}

interface CampusSelectorProps {
  value: string;
  onChange: (campusId: string) => void;
  className?: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function CampusSelector({
  value,
  onChange,
  className = "",
}: CampusSelectorProps) {
  const { data, isLoading } = useSWR<Campus[]>("/api/campuses", fetcher);

  const campuses = data ?? [];

  if (isLoading) {
    return (
      <div
        className={`flex items-center gap-2 text-sm text-[#2D2D2D]/50 ${className}`}
      >
        <Building2 className="h-4 w-4" />
        <span>Loading campuses...</span>
      </div>
    );
  }

  if (campuses.length === 0) {
    return null;
  }

  return (
    <div className={`space-y-1.5 ${className}`}>
      <label className="flex items-center gap-1.5 text-sm font-medium text-[#2D2D2D]">
        <Building2 className="h-4 w-4 text-[#E8725A]" />
        Campus
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-3 py-2 text-sm rounded-md border border-[#E8E4DC] bg-white text-[#2D2D2D] focus:outline-none focus:ring-2 focus:ring-[#E8725A]/30 focus:border-[#E8725A] appearance-none cursor-pointer"
      >
        <option value="">No campus</option>
        {campuses.map((campus) => (
          <option key={campus.id} value={campus.id}>
            {campus.name}
            {campus.isDefault ? " (Default)" : ""}
          </option>
        ))}
      </select>
    </div>
  );
}
