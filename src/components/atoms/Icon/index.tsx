import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';

import { colors } from '@/theme';

const BaseIcon = Ionicons as unknown as React.ComponentType<{
  name: string;
  size: number;
  color: string;
}>;

export interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

function Icon({ name, size = 24, color = colors.primary }: IconProps): React.JSX.Element {
  return <BaseIcon name={name} size={size} color={color} />;
}

export default Icon;
