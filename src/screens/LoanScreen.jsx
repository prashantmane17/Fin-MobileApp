import React, { useState } from 'react';
import { View, Text, ScrollView, SafeAreaView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';


export default function LoanScreen() {
    const [searchQuery, setSearchQuery] = useState('');
    const [filter, setFilter] = useState('All');
    const [itemsPerPage, setItemsPerPage] = useState('25');

    // Sample data
    const loans = [
        {
            id: '1',
            name: 'Prashant',
            customerId: 'CUST-1001',
            loanId: 'LN-1001',
            amount: 10000,
            installments: 3,
            nextPayment: '18 Feb 2025',
            status: 'Active',
            phone: '989897896'
        },
    ];

    const renderLoanItem = ({ item }) => (
        <View className="bg-gray-800 rounded-lg p-4 mb-3">
            <View className="flex-row justify-between items-center mb-3">
                <View className="flex-row items-center">
                    <Text className="text-white text-lg font-semibold">{item.name}</Text>
                    <View className="ml-2 bg-blue-500/20 px-2 py-1 rounded">
                        <Text className="text-blue-400 text-xs">{item.customerId}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    className="bg-blue-500 px-4 py-1 rounded-full"
                    onPress={() => console.log('Pay')}
                >
                    <Text className="text-white">Pay</Text>
                </TouchableOpacity>
            </View>

            <View className="space-y-2">
                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Loan ID</Text>
                    <Text className="text-white">{item.loanId}</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Amount</Text>
                    <Text className="text-white">₹{item.amount.toLocaleString()}</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Installments</Text>
                    <View className="flex-row items-center">
                        <View className="w-4 h-4 rounded-full bg-yellow-500 mr-2" />
                        <Text className="text-white">{item.installments}</Text>
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Next Payment</Text>
                    <View className="flex-row items-center">
                        <View className="w-2 h-2 rounded-full bg-red-500 mr-2" />
                        <Text className="text-white">₹3,300.00</Text>
                    </View>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-400">Due Date</Text>
                    <Text className="text-white">{item.nextPayment}</Text>
                </View>

                <View className="flex-row justify-between items-center">
                    <View className="flex-row items-center">
                        <Feather name="phone" size={14} color="#9CA3AF" />
                        <Text className="text-gray-400 ml-1">{item.phone}</Text>
                    </View>
                    <View className="bg-green-500/20 px-3 py-1 rounded-full">
                        <Text className="text-green-400">{item.status}</Text>
                    </View>
                </View>
            </View>
        </View>
    );

    return (
        <SafeAreaView className="flex-1 bg-gray-900">
            {/* Header */}
            <View className="p-4 border-b border-gray-800 flex-row justify-between items-center">
                <View className="flex-row items-center">
                    <View className="w-10 h-10 bg-blue-500 rounded-lg items-center justify-center">
                        <Feather name="dollar-sign" size={24} color="white" />
                    </View>
                    <Text className="text-2xl font-bold text-white ml-3">Loans</Text>
                </View>
                <TouchableOpacity
                    className="bg-blue-500 flex-row items-center px-4 py-2 rounded-lg"
                    onPress={() => console.log('Add Loan')}
                >
                    <Feather name="plus" size={20} color="white" />
                    <Text className="text-white ml-2">Add Loan</Text>
                </TouchableOpacity>
            </View>

            {/* Search and Filters */}
            <View className="p-4 space-y-4">
                <View className="flex-row space-x-2">
                    <TouchableOpacity
                        className="bg-gray-800 px-4 py-2 rounded-lg flex-row items-center"
                        onPress={() => console.log('Filter')}
                    >
                        <Feather name="filter" size={20} color="#9CA3AF" />
                        <Text className="text-white ml-2">{filter}</Text>
                        <Feather name="chevron-down" size={20} color="#9CA3AF" className="ml-2" />
                    </TouchableOpacity>

                    <View className="flex-1 bg-gray-800 flex-row items-center px-4 rounded-lg">
                        <Feather name="search" size={20} color="#9CA3AF" />
                        <TextInput
                            className="flex-1 ml-2 text-white py-2"
                            placeholder="Search..."
                            placeholderTextColor="#9CA3AF"
                            value={searchQuery}
                            onChangeText={setSearchQuery}
                        />
                    </View>
                </View>

                <View className="flex-row justify-between items-center">
                    <Text className="text-gray-400">Total: {loans.length}</Text>
                    <View className="flex-row items-center space-x-2">
                        <Text className="text-gray-400">Show:</Text>
                        <TouchableOpacity
                            className="bg-gray-800 px-3 py-1 rounded-lg flex-row items-center"
                            onPress={() => console.log('Change items per page')}
                        >
                            <Text className="text-white">{itemsPerPage}</Text>
                            <Feather name="chevron-down" size={16} color="#9CA3AF" className="ml-1" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Loans List */}
            <FlatList
                data={loans}
                renderItem={renderLoanItem}
                keyExtractor={item => item.id}
                contentContainerClassName="p-4"
                ListEmptyComponent={
                    <View className="flex-1 items-center justify-center py-8">
                        <Text className="text-gray-400">No loans found</Text>
                    </View>
                }
            />

            {/* Pagination */}
            <View className="p-4 border-t border-gray-800 flex-row justify-between items-center">
                <TouchableOpacity
                    className="bg-gray-800 p-2 rounded-lg"
                    onPress={() => console.log('Previous')}
                >
                    <Feather name="chevron-left" size={20} color="#9CA3AF" />
                </TouchableOpacity>

                <Text className="text-white">Page 1 of 1</Text>

                <TouchableOpacity
                    className="bg-gray-800 p-2 rounded-lg"
                    onPress={() => console.log('Next')}
                >
                    <Feather name="chevron-right" size={20} color="#9CA3AF" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

