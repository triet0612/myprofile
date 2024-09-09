import type { Metadata } from "next";
import "./globals.css";
import TopBar from "@/components/top-bar";

export const metadata: Metadata = {
  title: "Terry Dang Dev",
  description: "Terry Dang's Profile",
  icons: [
    { rel: "icon", url: "/icon.webp" },
    { rel: "favicon", url: "/icon.webp" },
    { rel: "apple-icon", url: "/icon.webp" },
    { rel: "manifest", url: "/icon.webp" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col h-screen">
          <header>
            <TopBar />
          </header>
          <div className="overflow-y-scroll h-full">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
