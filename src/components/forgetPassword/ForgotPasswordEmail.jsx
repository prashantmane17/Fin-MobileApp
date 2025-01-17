import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPasswordEmail() {
    const [email, setEmail] = useState('');
    const { colorScheme } = useColorScheme();
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            const response = await fetch('https://your-api-url.com/api/auth/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            const data = await response.json();

            if (response.ok) {
                navigation.navigate('ForgotPasswordOTP', { email });
            } else {
                Alert.alert('Error', data.message || 'Failed to send OTP');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while sending OTP');
        }
    };

    return (
        <View className={`flex-1 justify-center px-6 ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Text className={`text-2xl font-bold mb-4 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Forgot Password</Text>
            <Text className={`mb-4 ${colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Enter your email to receive a password reset OTP</Text>
            <TextInput
                className={`p-4 rounded-lg mb-4 ${colorScheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                placeholder="Email"
                placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
            <TouchableOpacity
                className="bg-blue-500 p-4 rounded-lg"
                onPress={handleSubmit}
            >
                <Text className="text-white text-center font-semibold">Send OTP</Text>
            </TouchableOpacity>
        </View>
    );
}

