import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#F5F1EB] flex items-center justify-center px-4">
      <SignIn
        forceRedirectUrl="/dashboard"
        appearance={{
          elements: {
            rootBox: "mx-auto",
            cardBox: "shadow-xl shadow-[#2D2D2D]/5",
            headerTitle: "text-[#2D2D2D]",
            headerSubtitle: "text-[#5c5c5c]",
            formButtonPrimary: "bg-[#E8725A] hover:bg-[#d4654f]",
            footerActionLink: "text-[#E8725A] hover:text-[#d4654f]",
          },
        }}
      />
    </div>
  );
}
