import "./globals.css";
export const metadata = {
  title: "Pixel Planner",
  description: "Created by Yash Raghuvanshi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
