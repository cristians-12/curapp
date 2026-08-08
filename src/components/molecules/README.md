# Molecules — Moléculas

Combinación de dos o más átomos que cumple una función específica:

- SearchBar (Input + Icon + Button)
- FormField (Label + Input + ErrorMessage)
- ProfileHeaderRow (Avatar + Text)

## Reglas

- Solo dependen de átomos (o de otras moléculas).
- Siguen sin conocer el negocio: reciben datos y callbacks por props.

## Convención

```
molecules/
  SearchBar/
    index.tsx
    SearchBar.styles.ts   # opcional
    SearchBar.test.tsx    # opcional
```

Exportar desde `molecules/index.ts`.
