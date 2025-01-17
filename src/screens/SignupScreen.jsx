
import { View, Text, TextInput, TouchableOpacity, Alert, Switch, StatusBar } from "react-native"
import { Mail } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons';

export default function SignupScreen() {
    const navigation = useNavigation()

    return (
        <View className={`flex-1 items-center justify-center bg-gray-900 p-4`}>
            <StatusBar barStyle="dark-content" />
            <View className="w-full max-w-md p-6 bg-gray-700 rounded-lg shadow-lg">
                <View className="mb-4 flex justify-center items-center">
                    <View className="h-16 w-16 bg-blue-600 rounded-full flex items-center justify-center">
                        <Mail className="h-8 w-8 text-white" />
                    </View>
                </View>

                <Text className="text-center text-2xl font-semibold text-white mb-5">Welcome </Text>

                <View className="space-y-4">
                    <View className="space-y-2">
                        <Text className="text-white">Name</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="user" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="Enter your Full Name"
                                placeholderTextColor="#6B7280"
                            />
                        </View>
                    </View>
                    <View className="space-y-2">
                        <Text className="text-white">Email</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="mail" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="john@example.com"
                                placeholderTextColor="#6B7280"
                                keyboardType="email-address"

                            />
                        </View>
                    </View>
                    <View className="space-y-2">
                        <Text className="text-white">Phone Number</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="phone" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="9876543210"
                                placeholderTextColor="#6B7280"
                                keyboardType="email-address"

                            />
                        </View>
                    </View>
                    <View className="space-y-2">
                        <Text className="text-white">Company Name</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="briefcase" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="Enter Company Name"
                                placeholderTextColor="#6B7280"
                            />
                        </View>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-white">Password</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="Create your password"
                                placeholderTextColor="#6B7280"
                                secureTextEntry

                            />
                        </View>
                    </View>
                    <View className="space-y-2">
                        <Text className="text-white">Confirm Password</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput
                                className="bg-[#1F2937] text-white border-[2px] border-[#4B5563] rounded-lg p-2 pl-8"
                                placeholder="Confirm your  password"
                                placeholderTextColor="#6B7280"
                                secureTextEntry

                            />
                        </View>
                    </View>

                    <TouchableOpacity

                        style={{
                            backgroundColor: '#3B82F6',
                            padding: 16,
                            borderRadius: 8,
                            alignItems: 'center',
                        }}
                    >
                        <Text className="text-white font-semibold">Sign Up</Text>
                    </TouchableOpacity>
                </View>

                <View className="mt-4 flex-row justify-center">
                    <Text className='text-gray-300'>
                        Already have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text className='font-semibold text-blue-400' >Login</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
