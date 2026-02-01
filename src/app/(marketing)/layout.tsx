import { SiteHeader } from "@/components/marketing/site-header";
import { ThemeProvider } from "@/components/theme-provider";

export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <div className="flex min-h-svh flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
      </div>
    </ThemeProvider>
  );
}
