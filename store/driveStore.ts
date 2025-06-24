import { create } from 'zustand';

type Coordinates = {
  latitude: number;
  longitude: number;
  label: string;
};



type Drive = {
  driver_name: string;
  car_type: string;
  number_plate: string;
  seats: number;
  price: number;
  start_location: Location;
  end_location: Location;
  departure_time: string;
  created_at?: string;
};


type DriveState = {
  startLocation: Coordinates | null;
  endLocation: Coordinates | null;
  drives: Drive[];
  setStartLocation: (loc: Coordinates) => void;
  setEndLocation: (loc: Coordinates) => void;
};

export const useDriveStore = create<DriveState>((set) => ({
  startLocation: null,
  endLocation: null,
  drives: [],
  setStartLocation: (loc) => set({ startLocation: loc }),
  setEndLocation: (loc) => set({ endLocation: loc }),
}));
