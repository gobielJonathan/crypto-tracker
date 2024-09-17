"use client";

import { ReactNode, useState } from "react";

import { AssetContext } from "@/context/asset";

export default function Layout({
  children,
}: {
  children: Readonly<ReactNode>;
}) {
  const [seeContext, setSeeContext] = useState(() => {
    const assetLsValue = localStorage.getItem("see-asset");
    if (assetLsValue) return localStorage.getItem("see-asset") === "true";
    return false;
  });

  const toggleSeeAsset = () => {
    setSeeContext((e) => !e);
    localStorage.setItem("see-asset", String(!seeContext));
  };

  return (
    <AssetContext.Provider
      value={{
        canSee: seeContext,
        toggleSeeAsset: toggleSeeAsset,
      }}
    >
      {children}
    </AssetContext.Provider>
  );
}
