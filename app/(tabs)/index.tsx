import { useState } from "react";
import { Text, View } from "react-native";
import Header from "~/components/Header";
import RideOptionsCard from "~/components/Home/RideOptionsCard";
import TabSwitch from "~/components/TabSwitch";
// import Map from "~/components/Map/Map";

export default function Home (){
    
    const [activeTab, setActiveTab] = useState<"Ride" | "Drive">("Ride");
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
                  <RideOptionsCard />
                </View>
              ) : (
                <View className="flex-1 items-center">
                  <Text className="text-2xl font-bold mb-4">Drive Content</Text>
                  <Text>This is where you would show drive-related content</Text>
                  {/* Add your drive-specific components here */}
                </View>
              )}
            </View>
        </View>
        
    )
}