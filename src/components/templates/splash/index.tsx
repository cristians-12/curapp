import React, { useEffect } from 'react';
import { Image, Text, View } from 'react-native';
import { styles } from './styles';
import { images } from '@/assets';
import { navigationRef } from '@/navigation';

export default function SplashTemplate() {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigationRef.navigate('Home');
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

    return (
        <View style={styles.container}>
            <Image
                source={images.logo}
            />
            <Text style={styles.logoText}>WoundsApp</Text>
            <Text style={styles.texto}>Cargando datos clínicos...</Text>
        </View>
    );
}