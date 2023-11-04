"use client";

import { tree } from "next/dist/build/templates/app-page";
import { create } from "zustand";

type SettingsStore = {
  isOpen: boolean;
  onOpne: () => void;
  onClose: () => void;
};

export const useSettings = create<SettingsStore>((set) => ({
  isOpen: false,
  onOpne: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
