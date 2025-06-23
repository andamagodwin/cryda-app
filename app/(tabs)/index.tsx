import { Text, View } from "react-native";
import Map from "~/components/Map/Map";

export default function Home (){
    return (
        <View className="flex-1 items-center justify-center">
            
            <Map/>
        </View>
    )
}