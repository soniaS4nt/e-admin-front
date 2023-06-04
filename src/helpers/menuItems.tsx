import ProductIcon from "@/components/icons/ProductIcon";
import ReportIcon from "@/components/icons/ReportIcon";
import { MenuItems } from "@/interfaces/menu.interface";

export const menuItems: MenuItems[] = [
  {
    id: 0,
    icon: <ProductIcon className={" w-6 h-6"} />,
    name: "Dashboard",
    href: "/",
  },
  {
    id: 1,
    icon: <ProductIcon className={" w-6 h-6"} />,
    name: "Productos",
    href: "/product",
  },
  {
    id: 2,
    icon: <ReportIcon className={" w-6 h-6"} />,
    name: "Reportes",
    href: "/report",
  },
];
