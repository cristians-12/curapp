import type {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import type {
  CompositeNavigationProp,
  NavigationProp,
} from '@react-navigation/native';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

/**
 * Parámetros del stack raíz.
 * Agregar aquí cada nueva pantalla y sus parámetros.
 */
export type RootStackParamList = {
  Splash: undefined;
  Home: undefined;
};

/** Parámetros de las tabs inferiores. */
export type BottomTabsParamList = {
  HomeTab: undefined;
  HistoryTab: undefined;
  Profile: undefined;
};

/**
 * Props de navegación compuestas (stack + tabs).
 * Útil para pantallas dentro de las tabs que también navegan en el stack.
 */
export type AppNavigationProp = CompositeNavigationProp<
  NativeStackNavigationProp<RootStackParamList>,
  BottomTabNavigationProp<BottomTabsParamList>
>;

export type StackNavigation = NavigationProp<RootStackParamList>;
