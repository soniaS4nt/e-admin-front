import { menuItems } from "@/helper/menuItems";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SideBar() {
  const router = useRouter();

  return (
    <aside className="bg-gray-200 w-1/4 ">
      <div className="m-3">
        {" "}
        {menuItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center m-2">
            <Link
              href={item.href}
              className={`nav-link ${
                router.pathname === item.href ? "bg-black text-slate-50" : ""
              } flex flex-row items-center p-2 w-full rounded-xl justify-center`}
            >
              <div>{item.icon}</div> {item.name}
            </Link>
          </div>
        ))}
      </div>
    </aside>
  );
}
