"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { AssetStore, createAssetStore } from "@/stores/asset-store";
import { useStore } from "zustand";

export type AssetStoreApi = ReturnType<typeof createAssetStore>;

export const AssetStoreContext = createContext<AssetStoreApi | undefined>(
  undefined
);

export interface CounterStoreProviderProps {
  children: ReactNode;
}

export const AssetStoreProvider = ({ children }: CounterStoreProviderProps) => {
  const storeRef = useRef<AssetStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createAssetStore();
  }

  return (
    <AssetStoreContext.Provider value={storeRef.current}>
      {children}
    </AssetStoreContext.Provider>
  );
};

export const useAssetStore = <T,>(selector: (store: AssetStore) => T): T => {
  const counterStoreContext = useContext(AssetStoreContext);

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within CounterStoreProvider`);
  }

  return useStore(counterStoreContext, selector);
};
