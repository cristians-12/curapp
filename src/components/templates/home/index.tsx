import ButtonIcon from '@/components/molecules/button-icon';
import HomeHeader from '@/components/organisms/home-header';
import QuickActions from '@/components/organisms/quick-actions';
import React from 'react';
import { Text, View } from 'react-native';

export default function HomeTemplate() {
    return (
        <View>
            <HomeHeader />
            {/* <ButtonIcon
                icon='notifications-outline'
                onTouch={() => null}
                color='black'
            /> */}
            <QuickActions />

            
        </View>
    );
}