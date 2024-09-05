
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-3xl">Aora</Text>
      <Link href="/profile">
        <Text>Go to profile</Text>
      </Link>
      <StatusBar style="auto" />
    </View>
  );
}
