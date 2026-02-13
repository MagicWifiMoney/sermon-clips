"use client";

export function WizardStep({
  active,
  children,
}: {
  active: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`transition-all duration-300 ${
        active ? "opacity-100 translate-x-0" : "opacity-0 absolute translate-x-8 pointer-events-none"
      }`}
    >
      {active && children}
    </div>
  );
}
