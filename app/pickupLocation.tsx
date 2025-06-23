import { View, Text } from 'react-native';
import Map from '~/components/Map/Map';

export default function PickupLocation() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Map/>

    </View>
  );
}