import { View, Text, Image, Pressable } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Feather from "@expo/vector-icons/Feather";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Ionicons from "@expo/vector-icons/Ionicons";

const Profile = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 p-4">
        <Text className="mb-6 font-normal text-black text-4xl">Profile</Text>
        <View className="flex-row justify-between items-center bg-[#34967C] mb-10 px-7 rounded-md h-[90px]">
          <View className="flex-row items-center gap-4">
            <Image source={require("@/assets/images/user-image.png")} />
            <View>
              <Text className="font-semibold text-white text-xl">
                Cole Baidoo
              </Text>
              <Text className="font-thin text-white text-sm">@block_cs</Text>
            </View>
          </View>
          <Feather name="edit-3" size={24} color="white" />
        </View>

        <View className="gap-3 bg-white mb-4 p-4 rounded-md h-[350px]">
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="mb-2 font-semibold text-lg">My Account</Text>
                <Text className="font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="mb-2 font-normal text-lg">
                  Saved Beneficiary
                </Text>
                <Text className="font-thin text-gray-700">
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text className="mb-2 font-normal text-lg">
                  Face ID / Touch ID
                </Text>
                <Text className="font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <Ionicons
                  name="shield-checkmark-outline"
                  size={24}
                  color="#0601B4"
                />
              </View>
              <View>
                <Text className="mb-2 font-normal text-lg">
                  Two-Factor Authentication
                </Text>
                <Text className="font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <MaterialIcons name="logout" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="mb-2 font-normal text-lg">Log out</Text>
                <Text className="font-thin text-gray-700">
                  Further secure your account for safety
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>

        <Text className="mb-6 font-normal text-black text-xl">More</Text>

        <View className="gap-3 bg-white mb-4 p-4 rounded-md h-[139px]">
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="mb-2 font-semibold text-lg">My Account</Text>
                <Text className="font-thin text-gray-700">
                  Make Changes to your account
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
          <Pressable className="flex-row justify-between items-center mb-2">
            <View className="flex-row items-center gap-4">
              <View className="justify-center items-center bg-[#0601B4]/10 rounded-full w-12 h-12">
                <FontAwesome6 name="user" size={24} color="#0601B4" />
              </View>
              <View>
                <Text className="mb-2 font-normal text-lg">
                  Saved Beneficiary
                </Text>
                <Text className="font-thin text-gray-700">
                  Manage your saved accounts
                </Text>
              </View>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={34}
              color="black"
            />
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default Profile;
