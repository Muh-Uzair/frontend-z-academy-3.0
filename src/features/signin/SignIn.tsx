import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ContentCenteredDiv from "@/components/ContentCenteredDiv";
import Link from "next/link";

const SignIn = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>Signin to your account</CardTitle>
          <CardDescription>
            Enter your email below to Signin to your account
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link href={"/signup"}>Sign Up</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input
                  placeholder="••••••••"
                  id="password"
                  type="password"
                  required
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Signin
          </Button>
          <Button variant="outline" className="w-full">
            Signin with Google
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignIn;
