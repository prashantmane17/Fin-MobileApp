import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useColorScheme } from 'nativewind';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function ForgotPasswordReset() {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { colorScheme } = useColorScheme();
    const navigation = useNavigation();
    const route = useRoute();
    const { email, otp } = route.params;

    const handleSubmit = async () => {
        if (newPassword !== confirmPassword) {
            Alert.alert('Error', 'Passwords do not match');
            return;
        }

        try {
            const response = await fetch('https://your-api-url.com/api/auth/reset-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            const data = await response.json();

            if (response.ok) {
                Alert.alert('Success', 'Password reset successfully', [
                    { text: 'OK', onPress: () => navigation.navigate('Login') }
                ]);
            } else {
                Alert.alert('Error', data.message || 'Failed to reset password');
            }
        } catch (error) {
            Alert.alert('Error', 'An error occurred while resetting password');
        }
    };

    return (
        <View className={`flex-1 justify-center px-6 ${colorScheme === 'dark' ? 'bg-gray-900' : 'bg-gray-100'}`}>
            <Text className={`text-2xl font-bold mb-4 ${colorScheme === 'dark' ? 'text-white' : 'text-gray-800'}`}>Reset Password</Text>
            <Text className={`mb-4 ${colorScheme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>Enter your new password</Text>
            <TextInput
                className={`p-4 rounded-lg mb-4 ${colorScheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                placeholder="New Password"
                placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
            />
            <TextInput
                className={`p-4 rounded-lg mb-4 ${colorScheme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border ${colorScheme === 'dark' ? 'border-gray-700' : 'border-gray-300'}`}
                placeholder="Confirm New Password"
                placeholderTextColor={colorScheme === 'dark' ? '#9CA3AF' : '#6B7280'}
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
            />
            <TouchableOpacity
                className="bg-blue-500 p-4 rounded-lg"
                onPress={handleSubmit}
            >
                <Text className="text-white text-center font-semibold">Reset Password</Text>
            </TouchableOpacity>
        </View>
    );
}

