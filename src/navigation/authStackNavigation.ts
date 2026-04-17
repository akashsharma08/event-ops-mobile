import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { AuthStackParamList } from './types';

type AuthPopTarget = 'Login' | 'Register';

/**
 * If `target` already exists below the focused screen in the auth stack, pops to it
 * without pushing a duplicate. Otherwise navigates to `target`.
 */
export function popToAuthRouteIfBehind<
  Current extends keyof AuthStackParamList,
>(
  navigation: NativeStackNavigationProp<AuthStackParamList, Current>,
  target: AuthPopTarget,
): void {
  const state = navigation.getState();
  const { index, routes } = state;

  let targetIndex = -1;
  for (let i = 0; i < index; i += 1) {
    if (routes[i]?.name === target) {
      targetIndex = i;
    }
  }

  if (targetIndex >= 0) {
    navigation.pop(index - targetIndex);
    return;
  }

  if (target === 'Login') {
    navigation.navigate('Login');
  } else {
    navigation.navigate('Register');
  }
}
