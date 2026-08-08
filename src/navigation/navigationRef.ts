import {createNavigationContainerRef} from '@react-navigation/native';

import type {RootStackParamList} from '@/types/navigation';

/**
 * Referencia global al NavigationContainer.
 * Permite navegar desde fuera de los componentes (sagas, servicios, etc.).
 */
export const navigationRef = createNavigationContainerRef<RootStackParamList>();

/** Reinicia el stack dejando una única ruta en la raíz. */
export function resetTo(routeName: keyof RootStackParamList): void {
  if (navigationRef.isReady()) {
    navigationRef.reset({
      index: 0,
      routes: [{name: routeName}],
    });
  }
}
