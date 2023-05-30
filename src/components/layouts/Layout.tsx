import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <NavBar />
      <div className="flex h-screen">
        <SideBar />
        <main className="w-full p-4 bg-slate-50">{children}</main>
      </div>
    </>
  );
}
