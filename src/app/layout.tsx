import "globals.css";
import { TopNavBar } from "components/TopNavBar";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title: "Konect U - Resume Builder",
  description:
    "Konect U is a powerful resume builder that allows anyone to create a modern professional resume.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#161921' }}>
        <TopNavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
