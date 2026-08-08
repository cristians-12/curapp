import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';


export default function HomeHeader() {
   const fechaactual = new Date();
    return (
        <View style = {styles.container}>

            <View>
                <Text style = {styles.text}> {fechaactual.toLocaleDateString('es-CO',{
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric'
                })}</Text>
                <Text>Buenos dias, Ricardo</Text>
            </View>

        </View>
    );
}