
import { View, Text, TextInput, TouchableOpacity, Alert, Switch, StatusBar } from "react-native"
import { Mail, Lock, LockIcon } from "lucide-react-native"
import { useNavigation } from "@react-navigation/native"
import { Feather } from '@expo/vector-icons';

export default function LoginForm() {
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

                <Text className="text-center text-2xl font-semibold text-white mb-5">Welcome back</Text>

                <View className="space-y-4">
                    <View className="space-y-2">
                        <Text className="text-white">Email</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="mail" size={20} color="#fff" />
                            </View>
                            <TextInput
                                style={{
                                    paddingLeft: 36,
                                    backgroundColor: '#1F2937',
                                    color: '#ffffff',
                                    borderWidth: 1,
                                    borderColor: '#4B5563',
                                    padding: 10,
                                    borderRadius: 8,
                                }}
                                placeholder="Enter your email"
                                placeholderTextColor="#6B7280"
                                keyboardType="email-address"

                            />
                        </View>
                    </View>

                    <View className="space-y-2">
                        <Text className="text-white">Password</Text>
                        <View className="relative">
                            <View className="absolute top-2.5 left-1.5 z-20">
                                <Feather name="lock" size={20} color="#fff" />
                            </View>
                            <TextInput className="pl-8 bg-[#1F2937]"
                                style={{

                                    color: '#ffffff',
                                    borderWidth: 1,
                                    borderColor: '#4B5563',
                                    padding: 10,
                                    borderRadius: 8,
                                }}
                                placeholder="Enter your password"
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
                        <Text className="text-white font-semibold">Login</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => navigation.navigate('ForgotPasswordEmail')}
                    className="mt-6 "
                >
                    <Text className="text-center text-sm text-gray-100" >Forgot password?</Text>
                </TouchableOpacity>


                <View className="mt-4 flex-row justify-center">
                    <Text className='text-gray-300'>
                        Don't have an account?{' '}
                    </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                        <Text className='font-semibold text-blue-400' >Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
