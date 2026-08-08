import * as Keychain from 'react-native-keychain';

import {KEYCHAIN_SERVICE} from '@/constants';

interface Tokens {
  accessToken: string;
  refreshToken: string;
}

/**
 * Guarda los tokens de acceso/refresh en el almacenamiento seguro
 * del dispositivo (Keychain en iOS, Keystore en Android).
 */
export async function setTokens(
  accessToken: string,
  refreshToken: string,
): Promise<void> {
  await Keychain.setGenericPassword(KEYCHAIN_SERVICE, JSON.stringify({accessToken, refreshToken}), {
    service: KEYCHAIN_SERVICE,
  });
}

/** Devuelve los tokens almacenados, o null si no existen / no son válidos. */
export async function getTokens(): Promise<Tokens | null> {
  const credentials = await Keychain.getGenericPassword({service: KEYCHAIN_SERVICE});
  if (!credentials) {
    return null;
  }
  try {
    return JSON.parse(credentials.password) as Tokens;
  } catch {
    return null;
  }
}

/** Elimina los tokens (logout). */
export async function clearTokens(): Promise<void> {
  await Keychain.resetGenericPassword({service: KEYCHAIN_SERVICE});
}
