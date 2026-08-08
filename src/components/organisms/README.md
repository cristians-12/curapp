# Organisms — Organismos

Secciones autónomas de interfaz formadas por moléculas y átomos:

- AppHeader, ProductCard, AppointmentList, FormLogin...

## Reglas

- Pueden usar hooks de UI (estado local, animaciones) pero **no** el store.
- Reciben datos por props desde templates/pages.

## Convención

```
organisms/
  ProductCard/
    index.tsx
    ProductCard.styles.ts   # opcional
    ProductCard.test.tsx    # opcional
```

Exportar desde `organisms/index.ts`.
