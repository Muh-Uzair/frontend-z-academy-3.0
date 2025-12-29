import { headers } from "next/headers";

const StudentDashboardPage = async () => {
  const headerList = await headers();
  const cookieHeader = headerList.get("cookie");

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACK_END_URL}/auth/rotate-token`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(cookieHeader && { Cookie: cookieHeader }),
      },
    },
  );

  const data = await res.json();
  console.log("Test cookies response:", data);

  return <div>Student Dashboard</div>;
};

export default StudentDashboardPage;
