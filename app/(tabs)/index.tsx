import { useState } from "react";
import { Text, View } from "react-native";
import Header from "~/components/Header";
import RideOptionsCard from "~/components/Home/RideOptionsCard";
import TabSwitch from "~/components/TabSwitch";
import CreateDriveForm from "~/components/Home/CreateDriveForm";
import { useDriveStore } from "~/store/driveStore"; // ✅ Import your Zustand store

export default function Home() {
  const [activeTab, setActiveTab] = useState<"Ride" | "Drive">("Ride");

  const startLocation = useDriveStore((state) => state.startLocation); // ✅ Zustand
  const endLocation = useDriveStore((state) => state.endLocation);     // ✅ Zustand

  const handleTabChange = (tab: "left" | "right") => {
    setActiveTab(tab === "left" ? "Ride" : "Drive");
  };

  return (
    <View className="flex-1 items-center bg-white">
      <Header />
      <View style={{ padding: 10 }}>
        <TabSwitch onTabChange={handleTabChange} />
      </View>

      <View className="w-full flex-1 items-center justify-center">
        {activeTab === "Ride" ? (
          <View className="flex-1 items-center w-full">
            <RideOptionsCard
              fromCoords={startLocation}
              toCoords={endLocation}
            />
          </View>
        ) : (
          <View className="flex-1 items-center w-full">
            <CreateDriveForm />
          </View>
        )}
      </View>
    </View>
  );
}
