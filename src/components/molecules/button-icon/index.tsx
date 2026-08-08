import React from 'react';
import { TouchableOpacity } from 'react-native';

import { Icon } from '@/components/atoms';

interface Props {
    icon: string;
    onTouch: () => void;
    color?: string;
}

export default function ButtonIcon({ icon, onTouch, color }: Props) {
    return (
        <TouchableOpacity onPress={onTouch}>
            <Icon name={icon} size={24} color={color} />
        </TouchableOpacity>
    );
}
