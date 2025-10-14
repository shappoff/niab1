import * as React from "react";
import type {Metadata, Viewport} from "next";
import GAAnalytics from "@/components/shared/GAAnalytics";
import "./globals.css";
import AlertInfo from "@/components/featured/niab/AlertInfo";
import ReactQueryTanstack from "@/components/featured/niab/ReactQueryTanstack";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: "Фонды и описи НИАБ",
  description: "Удобный поиск описей по фондам НИАБ (Национальный исторический архив Беларуси).",
  icons: [
    {
      url: '/niab/favicon.ico',
      type: 'image/x-icon',
      sizes: 'any',
      rel: 'icon'
    }
  ],
  keywords: ['НИАБ', 'Фонды', 'Описи', 'генеалогия', 'Беларусь'],
  referrer: 'origin',
  robots: {index: true, follow: true},
  verification: {
    google: "WcZLxrvNHupEwOXBZ_xza8RMaDFrJ_7Nc_Ax_vyo0zw",
    yandex: "cd605c554612fb41"
  },
  other: {
    robots: "index, follow",
    charset: "UTF-8",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
    {
      !!process.env.DEBUG ? <></> : <GAAnalytics />
    }
      <body>
      <AlertInfo severity="info" anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>Количество записей в базе: Минск 816389 Гродно 201590</AlertInfo>
      <ReactQueryTanstack>{children}</ReactQueryTanstack>
      </body>
    </html>
  );
}
