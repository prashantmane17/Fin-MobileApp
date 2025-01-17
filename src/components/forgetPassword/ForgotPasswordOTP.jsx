import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ForgotPasswordOTP() {
    const [otp, setOtp] = useState('');
    const { colorScheme } = useColorScheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { email } = route.params;

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://your-api-url.com/api/auth/verify-otp', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp }),
            });

            const data = await response.json();

            if (response.ok) {
                navigation.navigate('ForgotPasswordReset', { email, otp });
            } else {
                Alert.alert('Error', data.message || 'Invalid OTP');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while verifying OTP');
        }
    };

    return (
        <View className={`flex-1 justify-center px-6 ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Text className={`text-2xl font-bold mb-4 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Enter OTP</Text>
            <Text className={`mb-4 ${colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Enter the OTP sent to your email</Text>
            <TextInput
                className={`p-4 rounded-lg mb-4 ${colorScheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                placeholder="OTP"
                placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
                value={otp}
                onChangeText={setOtp}
                keyboardType="number-pad"
            />
            <TouchableOpacity
                className="bg-blue-500 p-4 rounded-lg"
                onPress={handleSubmit}
            >
                <Text className="text-white text-center font-semibold">Verify OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

