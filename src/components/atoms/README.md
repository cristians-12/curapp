# Atoms — Átomos

Unidad mínima de interfaz que no puede descomponerse más:

- Button, Text, Input, Icon, Spinner, Badge, Divider...

## Reglas

- Sin estado de negocio: solo reciben `props`.
- Altamente reutilizables y sin dependencias entre sí.
- Estilos guiados por los design tokens de `@/theme`.

## Convención

```
atoms/
  Button/
    index.tsx
    Button.styles.ts   # opcional
    Button.test.tsx    # opcional
```

Luego exportar desde `atoms/index.ts`:

```ts
export {default as Button} from './Button';
```
