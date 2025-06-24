import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Header from "~/components/Header";
import RideOptionsCard from "~/components/Home/RideOptionsCard";
import TabSwitch from "~/components/TabSwitch";
import { useLocalSearchParams } from "expo-router";
import CreateDriveForm from "~/components/Home/CreateDriveForm";

// import Map from "~/components/Map/Map";


type Location = {
  latitude: number;
  longitude: number;
  label: string;
};



export default function Home (){
    const { from, to } = useLocalSearchParams<{
      from?: string;
      to?: string;
    }>();



    const [fromCoords, setFromCoords] = useState<Location | null>(null);
    const [toCoords, setToCoords] = useState<Location | null>(null);

    const [activeTab, setActiveTab] = useState<"Ride" | "Drive">("Ride");

    useEffect(() => {
  try {
    if (from && to) {
      const fromParsed: Location = JSON.parse(decodeURIComponent(from));
      const toParsed: Location = JSON.parse(decodeURIComponent(to));
      setFromCoords(fromParsed);
      setToCoords(toParsed);
    }
  } catch (err) {
    console.error("Invalid location format", err);
  }
}, [from, to]);



    const handleTabChange = (tab: "left" | "right") => {
        setActiveTab(tab === "left" ? "Ride" : "Drive");
    };
    return (
        <View className="flex-1 items-center">
            <Header/>
            <View style={{ padding: 10 }}>
                <TabSwitch onTabChange={handleTabChange} />
            </View>
            {/* Content that changes based on the selected tab */}
            <View className="w-full flex-1 items-center justify-center">
              {activeTab === "Ride" ? (
                <View className="flex-1 items-center w-full">
                  <RideOptionsCard
                    fromCoords={fromCoords}
                    toCoords={toCoords}
                  />

                </View>
              ) : (
                <View className="flex-1 items-center w-full">
                  <CreateDriveForm/>
                  {/* Add your drive-specific components here */}
                </View>
              )}
            </View>
        </View>
        
    )
}