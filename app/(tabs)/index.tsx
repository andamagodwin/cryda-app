import { Text, View } from "react-native";
import Header from "~/components/Header";
import RideOptionsCard from "~/components/Home/RideOptionsCard";
// import Map from "~/components/Map/Map";

export default function Home (){
    return (
        <View className="flex-1 items-center">
            <Header/>
            <RideOptionsCard/>
        </View>
        
    )
}