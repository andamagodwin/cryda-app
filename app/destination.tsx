import { View, Text } from "react-native";
import LocationSelector from "~/components/Location/LocationPicker";


export default function Destination() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-lg font-bold text-gray-800">Destination Screen</Text>
      <LocationSelector/>
      {/* Add your destination-related components here */}
    </View>
  );
}