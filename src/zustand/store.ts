import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Asset } from "expo-asset";
interface MusicOnState {
  musicOn: boolean;
  off: () => void;
  on: () => void;
}
interface IconState {
  iconAssets: Asset[];
  setIconAssets: (iconAssets: Asset[]) => void;
}

export const useMusicStore = create<MusicOnState>()(
  persist(
    (set) => ({
      musicOn: true,
      off: () => set({ musicOn: false }),
      on: () => set({ musicOn: true }),
    }),
    {
      name: "music-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
export const useIconStore = create<IconState>((set) => ({
  iconAssets: [],

  setIconAssets: (iconAssets: Asset[]) => set({ iconAssets }),
}));
