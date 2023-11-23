import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
interface MusicOnState {
  musicOn: boolean;
  off: () => void;
  on: () => void;
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
