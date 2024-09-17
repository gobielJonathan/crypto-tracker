"use client";

import { type ReactNode } from "react";
import { AssetStoreProvider } from "@/providers/asset";

export default function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  return <AssetStoreProvider>{children}</AssetStoreProvider>;
}
