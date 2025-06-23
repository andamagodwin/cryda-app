

import { View, Text, TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons';

export default function Header() {
    // Example data - you would fetch this from your state or API
    const userTokens = 1250;
    const hasNewNotifications = true;

    return (
        <View className="w-full flex-row items-center justify-between bg-white px-6 pt-6 pb-3 h-28">
            {/* You can place a logo or greeting here */}
            <View>
                <Text className="text-xl font-bold text-gray-800">cryda</Text>
            </View>

            {/* Right-side icons */}
            <View className="flex-row items-center space-x-4">
                {/* Tokens Display */}
                <TouchableOpacity className="flex-row items-center space-x-2 rounded-full bg-gray-100 px-3 py-1.5">
                    <Feather name="database" size={18} color="#b45309" />
                    <Text className="font-bold text-amber-700">{userTokens}</Text>
                </TouchableOpacity>

                {/* Notification Bell */}
                <TouchableOpacity className="relative p-1">
                    <Feather name="bell" size={24} color="black" />
                    {hasNewNotifications && (
                        <View className="absolute right-1 top-1 h-2.5 w-2.5 rounded-full border-2 border-white bg-red-500" />
                    )}
                </TouchableOpacity>
            </View>
        </View>
    )
}