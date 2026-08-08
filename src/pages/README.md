# Pages — Páginas

Nivel superior del Atomic Design: la pantalla concreta que ve el usuario.

En React Native este nivel corresponde a las **screens** que registras en
React Navigation (stack, tabs, etc.).

- `HomeScreen`, `LoginScreen`, `ProfileScreen`...

## Reglas

- Única capa que conecta el store (dispatch/selectors) y los servicios.
- Compone templates y organismos; nunca estilos ni lógica de UI compleja.

## Convención

```
pages/
  Home/
    index.tsx
    Home.screen.tsx   # opcional: registro del screen para navegación
    Home.test.tsx     # opcional
```

Exportar desde `pages/index.ts`.
