// src/app/verify-otp/page.tsx (ya components/VerifyOtp.tsx)

"use client";

import AppHeading from "@/components/AppHeading";
import ContentCenteredDiv from "@/components/ContentCenteredDiv";
import LoadingSpinner from "@/components/LoadingSpinner";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

const VerifyOtp = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get("email");
  const role = searchParams.get("role");
  const [isLoading, setIsLoading] = useState(false);

  console.log(role);

  const handleComplete = async (otp: string) => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/verify-otp`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            otp,
            role,
          }),
        },
      );

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(
          errorData.message || `Signup failed: ${response.status}`,
        );
      }

      const data = await response.json();
      toast.success("Email verified");
      console.log("Email verified:", data);
    } catch (error: unknown) {
      console.error("Error during student signup:", error);
      toast.error("Error in email verification");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContentCenteredDiv className="px-4">
      <Card className="relative w-full max-w-md overflow-hidden shadow-xl">
        {/* Loading overlay */}
        {isLoading && (
          <div
            className={cn(
              "bg-background/80 absolute inset-0 flex items-center justify-center backdrop-blur-sm transition-opacity duration-300",
              isLoading ? "opacity-100" : "pointer-events-none opacity-0",
            )}
          >
            <div className="flex flex-col items-center gap-3">
              <LoadingSpinner />
              <p className="text-muted-foreground text-sm font-medium">
                Verifying OTP...
              </p>
            </div>
          </div>
        )}

        <CardHeader className="space-y-1 text-center">
          <CardTitle>
            <AppHeading variant="h3" color="brand">
              Verify Your Email
            </AppHeading>
          </CardTitle>
          <CardDescription className="text-base">
            We&apos;ve sent a 6-digit code to
            <span className="text-foreground mt-1 block font-medium">
              {email || "your registered email"}
            </span>
          </CardDescription>
        </CardHeader>

        <CardContent className="grid gap-6">
          <div className="flex justify-center">
            <InputOTP
              maxLength={6}
              onComplete={handleComplete}
              disabled={isLoading} // Disable OTP input during loading
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>

          <div className="text-muted-foreground text-center text-sm">
            Didn&apos;t receive the code?{" "}
            <button
              className="text-primary font-medium hover:underline"
              disabled={isLoading}
            >
              Resend OTP
            </button>
          </div>
        </CardContent>
      </Card>
    </ContentCenteredDiv>
  );
};

export default VerifyOtp;
