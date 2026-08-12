import React from 'react';
import { Text, View, Image} from 'react-native';
import { styles } from './styles';
import { tarjetasInicio } from './tarjetas-inicio';

const cantCitas = 8, cantPacientes = 24;

export default function HomeHeader() {

    
    

    return (
        <View style = {styles.container}>

            <View>
                <View style = {styles.encabezado}>
                <Text style = {styles.textSaludo}>Buenos dias, Ricardo.</Text>
            </View>

            <View style = {{flexDirection: "row", justifyContent: "space-between", paddingTop: 16, paddingLeft: 40, paddingRight: 40}}>
            {tarjetasInicio({ cant: cantPacientes, texto: "Pacientes" })}
            {tarjetasInicio({ cant: cantCitas, texto: "Citas" })}
            </View>
                   
            </View>

        </View>
    );
}