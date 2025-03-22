import "../global.css"
import { Text, View } from 'react-native';
import { Link } from 'expo-router';
import { Leaf, Recycle, Award, Users } from "lucide-react"

export default function Index() {
  return (
    <View>
      <View className="sticky top-0 z-10 w-full border-b">
        <View className="flex flex-row h-16 items-center justify-between px-6">
          <View className="flex flex-row items-center gap-2">
            <Recycle className="h-6 w-6 text-[#16a249]" />
            <Text className="text-xl font-bold">E-Butshafu</Text>
          </View>
          <View className="flex flex-row items-center gap-3">
            <Link href="/screens/auth/Login">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-[0 0% 100%] hover:bg-[#f9f9f9] h-9 rounded-md px-3">
                Connexion
              </button>
            </Link>
            <Link href="/screens/auth/Register">
              <button className="inline-flex items-center justify-center gap-2 text-sm font-medium  bg-[#16a249] text-[#fff0f1] hover:bg-[#16a249]/90 h-9 rounded-md px-3">Inscription</button>
            </Link>
          </View>
        </View>
      </View>
    </View>
  );
}