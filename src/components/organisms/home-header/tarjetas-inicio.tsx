import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type TarjetasInicioProps = {
    cant: number | string;
    texto: string;
};

export const tarjetasInicio = ({ cant, texto }: TarjetasInicioProps) =>{

    return(

        <View style = {styles.tarjetasInicio}>
        {/* ICONO */}
        <Text style = {styles.textnum}>{cant}</Text>
        <Text style = {styles.text}>{texto}</Text>
        </View>

    );

}