# Templates — Plantillas

Layouts que definen la posición y estructura de los organismos, sin datos finales.

- `HomeTemplate`, `AuthTemplate`, `DetailsTemplate`...

## Reglas

- Sin lógica de negocio ni acceso al store.
- Reciben organismos como `children` o props.
- Ideales para reutilizar el mismo layout en varias páginas.

## Convención

```
templates/
  HomeTemplate/
    index.tsx
    HomeTemplate.styles.ts   # opcional
```

Exportar desde `templates/index.ts`.
