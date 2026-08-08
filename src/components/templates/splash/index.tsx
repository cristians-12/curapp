import React from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { images } from '@/assets';

export default function SplashTemplate() {
    return (
        <View style={styles.container}>
            <Image
                source={images.logo}
            />
        </View>
    );
}