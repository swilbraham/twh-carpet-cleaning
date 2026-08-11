import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Homepage Backup | TWH Carpet Cleaning",
  robots: { index: false, follow: false },
};

export default function BackupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
