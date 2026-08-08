/**
 * Design tokens de color.
 * Usar siempre estos valores (o derivados) en los componentes,
 * nunca colores hardcodeados.
 */
export const colors = {
  // Primarios
  primary: '#4F46E5',
  primaryLight: '#818CF8',
  primaryDark: '#3730A3',
  onPrimary: '#FFFFFF',

  // Fondos y superficies
  background: '#F9FAFB',
  surface: '#FFFFFF',
  surfaceVariant: '#F3F4F6',

  // Texto
  textPrimary: '#111827',
  textSecondary: '#6B7280',
  textDisabled: '#9CA3AF',
  textOnPrimary: '#FFFFFF',

  // Bordes y divisores
  border: '#E5E7EB',

  // Estados
  success: '#16A34A',
  warning: '#D97706',
  error: '#DC2626',
  info: '#2563EB',

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const;
