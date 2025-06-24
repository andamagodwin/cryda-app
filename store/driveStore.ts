import { create } from 'zustand';

type Coordinates = {
  latitude: number;
  longitude: number;
  label: string;
};

type DriveState = {
  startLocation: Coordinates | null;
  endLocation: Coordinates | null;
  setStartLocation: (loc: Coordinates) => void;
  setEndLocation: (loc: Coordinates) => void;
};

export const useDriveStore = create<DriveState>((set) => ({
  startLocation: null,
  endLocation: null,
  setStartLocation: (loc) => set({ startLocation: loc }),
  setEndLocation: (loc) => set({ endLocation: loc }),
}));
