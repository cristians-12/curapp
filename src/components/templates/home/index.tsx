import ButtonIcon from '@/components/molecules/button-icon';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeTemplate() {
    return (
        <View>
            <ButtonIcon
                icon='notifications-outline'
                onTouch={() => null}
                color='black'
            />
        </View>
    );
}