export default function OnboardingLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center p-6">
      {children}
    </div>
  );
}
