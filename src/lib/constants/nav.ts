import {
  Building,
  ChartLine,
  Contact2,
  CreditCard,
  DollarSign,
  Home,
  Package,
  Settings,
  ShoppingBag,
  ShoppingCart,
  Table,
  Tag,
  Warehouse,
} from "lucide-react";

import { NavData } from "@/lib/types";

export const MAIN_NAV: NavData = {
  navGroups: [
    {
      title: "",
      items: [
        {
          title: "Home",
          url: "/dashboard",
          icon: Home,
        },
      ],
    },
    {
      title: "Operations",
      items: [
        {
          title: "Sales",
          icon: ShoppingCart,
          items: [
            {
              title: "Overview",
              url: "/dashboard/sales",
              icon: Tag,
            },
            {
              title: "Invoices",
              url: "/dashboard/sales/invoices",
              icon: Tag,
            },
            {
              title: "Deliveries",
              url: "/dashboard/sales/deliveries",
              icon: Tag,
            },
            {
              title: "Orders",
              url: "/dashboard/sales/orders",
              icon: Tag,
            },
            {
              title: "Quotes",
              url: "/dashboard/sales/quotes",
              icon: Tag,
            },
          ],
        },
        {
          title: "Purchases",
          icon: ShoppingBag,
          items: [
            {
              title: "Overview",
              url: "/dashboard/purchases",
              icon: Tag,
            },
            {
              title: "Invoices",
              url: "/dashboard/purchases/invoices",
              icon: Tag,
            },
            {
              title: "Deliveries",
              url: "/dashboard/purchases/deliveries",
              icon: Tag,
            },
            {
              title: "Orders",
              url: "/dashboard/purchases/orders",
              icon: Tag,
            },
            {
              title: "Quotes",
              url: "/dashboard/purchases/quotes",
              icon: Tag,
            },
          ],
        },
        {
          title: "Expenses",
          url: "/dashboard/expenses",
          icon: CreditCard,
        },
        {
          title: "Products",
          url: "/dashboard/products",
          icon: Package,
        },
        {
          title: "Inventory",
          url: "/dashboard/warehouses",
          icon: Warehouse,
        },
      ],
    },
    {
      title: "Finance",
      items: [
        {
          title: "Reports",
          url: "/dashboard/reports",
          icon: ChartLine,
        },
        {
          title: "Cash & Bank",
          url: "/dashboard/banks",
          icon: DollarSign,
        },
        {
          title: "Accounts",
          url: "/dashboard/accounts",
          icon: Table,
        },
        {
          title: "Fixed Assets",
          url: "/dashboard/fixed-assets",
          icon: Building,
        },
      ],
    },
    {
      title: "Directory",
      items: [
        {
          title: "Contacts",
          url: "/dashboard/contacts",
          icon: Contact2,
        },
      ],
    },
    {
      title: "Configuration",
      items: [
        {
          title: "Settings",
          url: "/dashboard/settings",
          icon: Settings,
        },
      ],
    },
  ],
};
