import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { BarChart } from 'react-native-chart-kit';

export default function ProfileScreen() {
    // Sample data for charts
    const investmentData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            data: [20, 15, 25, 18, 28, 22]
        }]
    };

    const returnsData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            data: [15, 12, 18, 14, 20, 16]
        }]
    };

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <ScrollView className="flex-1">
                {/* Banner and Profile Section */}
                <View className="relative">
                    {/* Banner */}
                    <View className="h-48 bg-gradient-to-r from-blue-400 to-purple-500" />

                    {/* Profile Picture and Actions */}
                    <View className="absolute -bottom-16 left-0 right-0 px-4">
                        <View className="flex-row items-end justify-between">
                            <View className="relative">
                                <Image
                                    source={{ uri: '/placeholder.svg' }}
                                    className="w-32 h-32 rounded-full bg-gray-800 border-4 border-gray-900"
                                />
                                <View className="absolute -right-2 -bottom-2 bg-gray-900 rounded-full p-2">
                                    <Feather name="camera" size={20} color="#60A5FA" />
                                </View>
                            </View>
                            <View className="flex-row gap-2 mb-2">
                                <TouchableOpacity className="bg-white/10 rounded-lg px-4 py-2 flex-row items-center">
                                    <Feather name="camera" size={16} color="#fff" />
                                    <Text className="text-white ml-2">Change Photo</Text>
                                </TouchableOpacity>
                                <TouchableOpacity className="bg-white/10 rounded-lg px-4 py-2 flex-row items-center">
                                    <Feather name="edit" size={16} color="#fff" />
                                    <Text className="text-white ml-2">Edit Profile</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Profile Info */}
                <View className="mt-20 px-4">
                    <Text className="text-2xl font-bold text-white">Amar</Text>

                    <View className="mt-4 space-y-4">
                        <View className="flex-row items-center">
                            <Feather name="mail" size={20} color="#9CA3AF" />
                            <Text className="text-gray-400 ml-2">prashmn17@gmail.com</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Feather name="phone" size={20} color="#9CA3AF" />
                            <Text className="text-gray-400 ml-2">989896896</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Feather name="map-pin" size={20} color="#9CA3AF" />
                            <Text className="text-gray-400 ml-2">Chikodi</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Feather name="briefcase" size={20} color="#9CA3AF" />
                            <Text className="text-gray-400 ml-2">Iq</Text>
                        </View>
                        <View className="flex-row items-center">
                            <Feather name="calendar" size={20} color="#9CA3AF" />
                            <Text className="text-gray-400 ml-2">Joined 16-jan-2025</Text>
                        </View>
                    </View>
                </View>

                {/* Stats Cards */}
                <View className="p-4 mt-6">
                    {/* Total Investment */}
                    <View className="bg-gray-800 rounded-lg p-4 mb-4">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white text-lg">Total Investment</Text>
                            <Feather name="dollar-sign" size={20} color="#A78BFA" />
                        </View>
                        <Text className="text-white text-2xl font-bold mb-4">₹0</Text>
                        <BarChart
                            data={investmentData}
                            width={320}
                            height={100}
                            chartConfig={{
                                backgroundColor: '#1F2937',
                                backgroundGradientFrom: '#1F2937',
                                backgroundGradientTo: '#1F2937',
                                color: (opacity = 1) => `rgba(167, 139, 250, ${opacity})`,
                                labelColor: () => 'transparent',
                                strokeWidth: 2,
                                barPercentage: 0.5,
                            }}
                            withInnerLines={false}
                            showBarTops={false}
                            fromZero
                            style={{
                                borderRadius: 16,
                            }}
                        />
                    </View>

                    {/* Returns Earned */}
                    <View className="bg-gray-800 rounded-lg p-4 mb-4">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white text-lg">Returns Earned</Text>
                            <Feather name="trending-up" size={20} color="#34D399" />
                        </View>
                        <Text className="text-white text-2xl font-bold mb-4">₹0</Text>
                        <BarChart
                            data={returnsData}
                            width={320}
                            height={100}
                            chartConfig={{
                                backgroundColor: '#1F2937',
                                backgroundGradientFrom: '#1F2937',
                                backgroundGradientTo: '#1F2937',
                                color: (opacity = 1) => `rgba(52, 211, 153, ${opacity})`,
                                labelColor: () => 'transparent',
                                strokeWidth: 2,
                                barPercentage: 0.5,
                            }}
                            withInnerLines={false}
                            showBarTops={false}
                            fromZero
                            style={{
                                borderRadius: 16,
                            }}
                        />
                    </View>

                    {/* Active Duration */}
                    <View className="bg-gray-800 rounded-lg p-4">
                        <View className="flex-row justify-between items-center mb-4">
                            <Text className="text-white text-lg">Active Duration</Text>
                            <Feather name="clock" size={20} color="#60A5FA" />
                        </View>
                        <Text className="text-white text-2xl font-bold">0 Years</Text>
                        <Text className="text-gray-400">Member since 2025</Text>
                    </View>
                </View>

                {/* Bottom Padding */}
                <View className="h-8" />
            </ScrollView>
        </SafeAreaView>
    );
}

