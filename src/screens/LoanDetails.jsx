import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function LoanDetails() {
    const [activeTab, setActiveTab] = useState('General Info');

    const tabs = ['General Info', 'Payment Schedule', 'History', 'Documents'];

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            {/* Header */}
            <View className="p-4 border-b border-gray-800">
                <View className="flex-row items-center justify-between">
                    <TouchableOpacity
                        className="flex-row items-center"
                        onPress={() => console.log('Back to Loans')}
                    >
                        <Feather name="arrow-left" size={20} color="#9CA3AF" />
                        <Text className="text-gray-400 ml-2">Back to Loans</Text>
                    </TouchableOpacity>
                    <View className="bg-emerald-500/20 px-3 py-1 rounded-lg">
                        <Text className="text-emerald-400">Loan ID: LN-1001</Text>
                    </View>
                </View>
                <Text className="text-2xl font-bold text-white mt-2">Prashant</Text>
            </View>

            <ScrollView className="flex-1">
                {/* Key Metrics */}
                <View className="p-4 bg-gray-800/50">
                    <View className="flex-row flex-wrap gap-3">
                        <View className="flex-1 bg-white rounded-lg p-4 min-w-[150]">
                            <Text className="text-gray-600 text-sm">Total Loan Amount</Text>
                            <Text className="text-gray-900 text-xl font-bold mt-1">₹10000</Text>
                        </View>

                        <View className="flex-1 bg-blue-50 rounded-lg p-4 min-w-[150]">
                            <Text className="text-gray-600 text-sm">Total Repayment</Text>
                            <Text className="text-gray-900 text-xl font-bold mt-1">₹10,300</Text>
                        </View>

                        <View className="flex-1 bg-yellow-50 rounded-lg p-4 min-w-[150]">
                            <Text className="text-gray-600 text-sm">Outstanding Balance</Text>
                            <Text className="text-gray-900 text-xl font-bold mt-1">₹100</Text>
                        </View>

                        <View className="flex-1 bg-pink-50 rounded-lg p-4 min-w-[150]">
                            <Text className="text-gray-600 text-sm">Loan Term</Text>
                            <Text className="text-gray-900 text-xl font-bold mt-1">3 Months</Text>
                        </View>
                    </View>
                </View>

                {/* Tabs */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    className="border-b border-gray-800"
                >
                    {tabs.map((tab) => (
                        <TouchableOpacity
                            key={tab}
                            onPress={() => setActiveTab(tab)}
                            className={`px-4 py-3 border-b-2 ${activeTab === tab ? 'border-blue-500' : 'border-transparent'
                                }`}
                        >
                            <Text className={`${activeTab === tab ? 'text-blue-500' : 'text-gray-400'
                                }`}>{tab}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Loan Information */}
                <View className="p-4">
                    <Text className="text-2xl font-bold text-white mb-4">Loan Information</Text>

                    <View className="grid grid-cols-2 gap-4">
                        <View className="bg-gray-800 p-4 rounded-lg">
                            <Text className="text-gray-400">Total loan amount</Text>
                            <Text className="text-white text-xl font-bold mt-1">₹10000</Text>
                        </View>

                        <View className="bg-gray-800 p-4 rounded-lg">
                            <Text className="text-gray-400">Interest Rate</Text>
                            <Text className="text-white text-xl font-bold mt-1">1%</Text>
                        </View>

                        <View className="bg-gray-800 p-4 rounded-lg">
                            <Text className="text-gray-400">Loan Term</Text>
                            <Text className="text-white text-xl font-bold mt-1">3 Months</Text>
                        </View>

                        <View className="bg-gray-800 p-4 rounded-lg">
                            <Text className="text-gray-400">Monthly EMI</Text>
                            <Text className="text-white text-xl font-bold mt-1">₹3300</Text>
                        </View>
                    </View>

                    <View className="mt-4 space-y-4">
                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Feather name="credit-card" size={20} color="#9CA3AF" />
                                <Text className="text-gray-400 ml-2">Payment Method</Text>
                            </View>
                            <Text className="text-white">UPI Transfer</Text>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Feather name="calendar" size={20} color="#9CA3AF" />
                                <Text className="text-gray-400 ml-2">Issue Date</Text>
                            </View>
                            <Text className="text-white">18 Jan 2025</Text>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Feather name="mail" size={20} color="#9CA3AF" />
                                <Text className="text-gray-400 ml-2">Email</Text>
                            </View>
                            <Text className="text-white">prashmn17@gmail.com</Text>
                        </View>

                        <View className="flex-row justify-between items-center">
                            <View className="flex-row items-center">
                                <Feather name="phone" size={20} color="#9CA3AF" />
                                <Text className="text-gray-400 ml-2">Phone</Text>
                            </View>
                            <Text className="text-white">989897896</Text>
                        </View>
                    </View>

                    <View className="flex-row gap-4 mt-6">
                        <View className="flex-1 bg-green-500/10 p-4 rounded-lg">
                            <Text className="text-green-500">Total Paid</Text>
                            <Text className="text-green-500 text-xl font-bold mt-1">₹100</Text>
                        </View>

                        <View className="flex-1 bg-blue-500/10 p-4 rounded-lg">
                            <Text className="text-blue-500">Processing Fee</Text>
                            <Text className="text-blue-500 text-xl font-bold mt-1">₹800</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

