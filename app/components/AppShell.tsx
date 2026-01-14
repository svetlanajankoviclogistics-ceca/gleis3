// app/components/AppShell.tsx ovo je komponenta koja mi resava da mi futer bude na dnu
export default function AppShell({
  children,
  navbar,
  footer,
}: {
  children: React.ReactNode;
  navbar: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      {navbar}
      <main className="flex-grow pt-20">{children}</main>
      {footer}
    </div>
  );
}