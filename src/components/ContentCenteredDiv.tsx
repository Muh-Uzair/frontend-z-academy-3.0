// src/components/ContentCenteredDiv.tsx

import React from "react";
import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ContentCenteredDivProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const ContentCenteredDiv = ({
  children,
  className,
  ...props
}: ContentCenteredDivProps) => {
  return (
    <div
      className={cn(
        "bg-background flex min-h-screen flex-col items-center justify-center px-4",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default ContentCenteredDiv;
