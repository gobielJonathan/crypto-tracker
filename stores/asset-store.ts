import { createStore } from "zustand/vanilla";

export type AssetState = {
  canSee: boolean;
};

export type AssetActions = {
  toggleSeeAsset: () => void;
};

export type AssetStore = AssetState & AssetActions;

export const defaultInitState: AssetState = {
  canSee: false,
};

export const createAssetStore = (initState: AssetState = defaultInitState) => {
  return createStore<AssetStore>()((set) => ({
    ...initState,
    toggleSeeAsset: () => set((prev) => ({ canSee: !prev.canSee })),
  }));
};
