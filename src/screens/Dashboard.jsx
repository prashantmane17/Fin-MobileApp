import React from 'react';
import { View, Text, ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { LineChart, PieChart } from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

export default function Dashboard() {
    // Sample data for charts
    const lineData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            data: [20, 45, 28, 80, 99, 43],
        }]
    };

    const pieData = [
        {
            name: "Loans",
            population: 45,
            color: "#60A5FA",
            legendFontColor: "#fff",
        },
        {
            name: "Interest",
            population: 28,
            color: "#34D399",
            legendFontColor: "#fff",
        },
        {
            name: "Penalty",
            population: 27,
            color: "#F472B6",
            legendFontColor: "#fff",
        },
    ];

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            <ScrollView className="flex-1">
                {/* Header */}
                <View className="p-4 border-b border-gray-800">
                    <Text className="text-2xl font-bold text-white">Dashboard</Text>
                    <View className="flex-row justify-between mt-4">
                        <View className="flex-1 mr-2 bg-gray-800 p-4 rounded-lg">
                            <View className="flex-row items-center">
                                <Feather name="dollar-sign" size={20} color="#60A5FA" />
                                <Text className="text-gray-400 ml-2">Total Capital</Text>
                            </View>
                            <Text className="text-white text-xl mt-2">₹0</Text>
                        </View>
                        <View className="flex-1 ml-2 bg-gray-800 p-4 rounded-lg">
                            <View className="flex-row items-center">
                                <Feather name="credit-card" size={20} color="#34D399" />
                                <Text className="text-gray-400 ml-2">Available Credit</Text>
                            </View>
                            <Text className="text-white text-xl mt-2">₹0</Text>
                        </View>
                    </View>
                </View>

                {/* Main Stats */}
                <View className="p-4">
                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-yellow-900/30 rounded-full items-center justify-center">
                                <Feather name="dollar-sign" size={20} color="#FCD34D" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-gray-400">Total Outstanding Loan</Text>
                                <Text className="text-white text-xl">₹0</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-pink-900/30 rounded-full items-center justify-center">
                                <Feather name="credit-card" size={20} color="#F472B6" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-gray-400">Principal Payment</Text>
                                <Text className="text-white text-xl">₹0</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-blue-900/30 rounded-full items-center justify-center">
                                <Feather name="file-text" size={20} color="#60A5FA" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-gray-400">Total Processing Fee</Text>
                                <Text className="text-white text-xl">₹0</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-purple-900/30 rounded-full items-center justify-center">
                                <Feather name="percent" size={20} color="#A78BFA" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-gray-400">Interest Earnings</Text>
                                <Text className="text-white text-xl">₹0</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <View className="flex-row items-center">
                            <View className="w-10 h-10 bg-green-900/30 rounded-full items-center justify-center">
                                <Feather name="alert-circle" size={20} color="#34D399" />
                            </View>
                            <View className="ml-3">
                                <Text className="text-gray-400">Penalty Earnings</Text>
                                <Text className="text-white text-xl">₹0</Text>
                            </View>
                        </View>
                    </View>
                </View>

                {/* Charts */}
                <View className="p-4">
                    {/* Received Amount Chart */}
                    <View className="bg-gray-800 p-4 rounded-lg mb-4">
                        <Text className="text-white text-xl mb-4">Received Amount</Text>
                        <LineChart
                            data={lineData}
                            width={screenWidth - 48}
                            height={220}
                            yAxisLabel="₹"
                            chartConfig={{
                                backgroundColor: "#1F2937",
                                backgroundGradientFrom: "#1F2937",
                                backgroundGradientTo: "#1F2937",
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(96, 165, 250, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(156, 163, 175, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: "#60A5FA"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 16
                            }}
                        />
                    </View>

                    {/* Distribution Chart */}
                    <View className="bg-gray-800 p-4 rounded-lg">
                        <Text className="text-white text-xl mb-4">Distribution</Text>
                        <PieChart
                            data={pieData}
                            width={screenWidth - 48}
                            height={220}
                            chartConfig={{
                                backgroundColor: "#1F2937",
                                backgroundGradientFrom: "#1F2937",
                                backgroundGradientTo: "#1F2937",
                                decimalPlaces: 0,
                                color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                },
                            }}
                            accessor={"population"}
                            backgroundColor={"transparent"}
                            paddingLeft={"15"}
                            center={[10, 0]}
                            absolute
                        />
                    </View>
                </View>

                {/* Bottom Padding */}
                <View className="h-8" />
            </ScrollView>
        </SafeAreaView>
    );
}

