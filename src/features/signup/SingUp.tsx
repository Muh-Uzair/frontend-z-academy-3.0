"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { toast } from "sonner";

// Student Form Schema
const studentFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

// Instructor Form Schema (exact same fields)
const instructorFormSchema = z.object({
  fullName: z
    .string()
    .min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters." }),
});

type StudentFormValues = z.infer<typeof studentFormSchema>;
type InstructorFormValues = z.infer<typeof instructorFormSchema>;

// CMP CMP CMP
const SignUp = () => {
  // VARS

  const [isLoading, setIsLoading] = useState(false);

  const studentForm = useForm<StudentFormValues>({
    resolver: zodResolver(studentFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // Instructor Form
  const instructorForm = useForm<InstructorFormValues>({
    resolver: zodResolver(instructorFormSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
    },
  });

  // FUNCTIONS
  async function onStudentSubmit(values: StudentFormValues) {
    console.log("Student Sign Up:", values);

    // Optional: Add a loading state if you're using it in a form (e.g., with react-hook-form)
    try {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/signup/student`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...values,
            role: "student",
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
      toast.success("Event has been created");
      console.log("Signup successful:", data);
    } catch (error: unknown) {
      console.error("Error during student signup:", error);
      toast.error("Error during student signup");
    } finally {
      setIsLoading(false);
    }
  }

  function onInstructorSubmit(values: InstructorFormValues) {
    console.log("Instructor Sign Up:", values);
    // TODO: API call to /api/auth/signup with role: "instructor"
  }

  // JSX JSX JSX
  return (
    <div className="bg-background flex h-screen items-center justify-center">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Tabs defaultValue="student" className="w-full">
          <TabsList className="min-h-12 w-full border border-(--brand-color) bg-(--brand-color-extra-light)">
            <TabsTrigger
              value="student"
              className="text-(--brand-color) data-[state=active]:bg-(--brand-color) data-[state=active]:text-white"
            >
              Student Sign Up
            </TabsTrigger>
            <TabsTrigger
              value="instructor"
              className="text-(--brand-color) data-[state=active]:bg-(--brand-color) data-[state=active]:text-white"
            >
              Instructor Sign Up
            </TabsTrigger>
          </TabsList>

          {/* Student Tab */}
          <TabsContent value="student">
            <Card>
              <CardHeader>
                <CardTitle>Student Sign Up</CardTitle>
                <CardDescription>
                  Create your student account to start learning.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...studentForm}>
                  <form
                    onSubmit={studentForm.handleSubmit(onStudentSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={studentForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
                          </FormControl>
                          <FormDescription>
                            Your full name as you&apos;d like it displayed.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={studentForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="john@example.com"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            We&apos;ll send a confirmation email here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={studentForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="••••••••"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Must be at least 8 characters long.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      {isLoading && <Spinner />}
                      Sign Up as Student
                    </Button>
                    <Button type="button" variant="outline" className="w-full">
                      Sign Up with Google
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-muted-foreground text-sm">
                  Already have an account?{" "}
                  <Link href="/signin" className="hover:text-primary underline">
                    Sign In
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>

          {/* Instructor Tab - Exact Same Form */}
          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <CardTitle>Instructor Sign Up</CardTitle>
                <CardDescription>
                  Create your instructor account to start teaching on zAcademy.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...instructorForm}>
                  <form
                    onSubmit={instructorForm.handleSubmit(onInstructorSubmit)}
                    className="space-y-6"
                  >
                    <FormField
                      control={instructorForm.control}
                      name="fullName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Dr. Jane Smith" {...field} />
                          </FormControl>
                          <FormDescription>
                            Your full name as you&apos;d like it displayed to
                            students.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={instructorForm.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="jane@university.edu"
                              type="email"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            We&apos;ll send a verification email here.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={instructorForm.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Password</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="••••••••"
                              type="password"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            Must be at least 8 characters long.
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" className="w-full">
                      Sign Up as Instructor
                    </Button>
                    <Button type="button" variant="outline" className="w-full">
                      Sign Up with Google
                    </Button>
                  </form>
                </Form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <p className="text-muted-foreground text-sm">
                  Already have an account?{" "}
                  <Link href="/signin" className="hover:text-primary underline">
                    Sign In
                  </Link>
                </p>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SignUp;
