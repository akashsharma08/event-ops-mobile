import AsyncStorage from '@react-native-async-storage/async-storage';

const ACCESS_KEY = '@eventops/access_token';
const REFRESH_KEY = '@eventops/refresh_token';

export type AuthTokens = {
  accessToken: string | null;
  refreshToken: string | null;
};

export async function getTokens(): Promise<AuthTokens> {
  const [accessToken, refreshToken] = await Promise.all([
    AsyncStorage.getItem(ACCESS_KEY),
    AsyncStorage.getItem(REFRESH_KEY),
  ]);
  return { accessToken, refreshToken };
}

export async function saveTokens(accessToken: string, refreshToken: string) {
  await AsyncStorage.multiSet([
    [ACCESS_KEY, accessToken],
    [REFRESH_KEY, refreshToken],
  ]);
}

export async function clearTokens() {
  await AsyncStorage.multiRemove([ACCESS_KEY, REFRESH_KEY]);
}
