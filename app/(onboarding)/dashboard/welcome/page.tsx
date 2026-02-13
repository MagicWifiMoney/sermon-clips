"use client";

import { useEffect } from "react";
import { usePostHog } from "posthog-js/react";
import { OnboardingWizard } from "@/components/onboarding/onboarding-wizard";

export default function WelcomePage() {
  const posthog = usePostHog();

  useEffect(() => {
    posthog.capture("onboarding_started", { step: 1 });
  }, [posthog]);

  return <OnboardingWizard />;
}
