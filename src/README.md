# Arquitectura Atómica — CurApp

Base de arquitectura atómica (Atomic Design) para React Native.

## Estructura

```
src/
├── components/
│   ├── atoms/        # Unidad mínima: Button, Text, Input, Icon...
│   ├── molecules/    # Combinación de átomos: SearchBar, FormField...
│   ├── organisms/    # Secciones completas: Header, Card, ProductList...
│   └── templates/    # Layouts que posicionan organismos
├── pages/            # Nivel "pages": pantallas finales (usa los templates)
├── navigation/       # RootStack, BottomTabs, navigationRef (patrón iteach)
├── theme/            # Design tokens: colors, typography, spacing
├── store/            # Redux Toolkit + Redux Saga
│   ├── slices/       # Slices de estado por feature
│   └── sagas/        # Efectos secundarios / llamadas API
├── services/         # Capa de infraestructura
│   ├── api/          # Cliente axios con interceptores de token
│   └── storage/      # Persistencia segura (Keychain)
├── constants/        # Constantes globales (URLs, keys, etc.)
├── hooks/            # Hooks personalizados (useAppDispatch, useAppSelector...)
├── types/            # Tipos TypeScript compartidos
└── utils/            # Funciones puras de utilidad
```

## Reglas de los niveles

| Nivel      | ¿Qué es?                                              | ¿Qué sabe?                      |
| ---------- | ----------------------------------------------------- | ------------------------------- |
| **Atoms**  | Elemento más pequeño, indivisible                     | Nada (props)                    |
| **Molecules** | Combina 2+ átomos con una función específica       | Átomos                          |
| **Organisms** | Secciones autónomas de UI                          | Moléculas, hooks                |
| **Templates** | Layouts que ubican organismos sin datos finales    | Organismos                      |
| **Pages**  | Pantalla concreta, conecta datos (Redux/API)         | Templates, store, servicios     |

## Convenciones

- **Imports con alias**: `@/` apunta a `src/` (configurado en `babel.config.js` y `tsconfig.json`).
  ```ts
  import { colors } from '@/theme';
  import { useAppSelector } from '@/hooks';
  ```
- **Un componente por carpeta**, con su propio `index`:
  ```
  atoms/
    Button/
      index.tsx        # Componente
      Button.styles.ts # Estilos (opcional)
      Button.test.tsx  # Test (opcional)
  ```
- **Bariles** (`index.ts`) en cada carpeta para exportar de forma limpia.
- Los componentes de UI **no acceden al store directamente**; reciben datos por props.
  Las páginas son las únicas que conectan Redux/hooks.
- Nombres en `PascalCase` para componentes y `camelCase` para archivos/hooks.

## Cómo empezar

1. Agrega un átomo: `src/components/atoms/Button/index.tsx`.
2. Úsalo en una molécula u organismo, luego en un template.
3. Crea una página en `src/pages/` que consuma el template y conecte el store.
4. Registra la pantalla en `src/navigation/RootStack.tsx` (o en `BottomTabs.tsx`)
   y agrega sus parámetros a `RootStackParamList` / `BottomTabsParamList`
   en `src/types/navigation.ts`.
5. Para navegar desde fuera de componentes (sagas, servicios) usa
   `navigationRef` / `resetTo` de `@/navigation`.

> `App.tsx` ya monta el `Provider` de Redux y el `NavigationContainer`
> con el `RootStack` (equivalente al `AppContent` del proyecto de referencia).

## Pendientes (siguientes pasos)

- **Ciclo de vida del token**: manejo de `401` y renovación con `refreshToken`
  (el cliente ya adjunta el `accessToken` desde Keychain).
- **Deep linking** (`src/navigation/linking/`): el proyecto de referencia (iteach)
  lo incluye en su carpeta de navegación; pendiente de portar.
- Conectar el `Provider` de Redux y la navegación en `App.tsx`.
- Tests unitarios para `services/api`, `services/storage` y `store`.
