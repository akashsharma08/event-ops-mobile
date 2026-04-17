import {
  createNavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import { AuthStackParamList } from './types';
type RootStackNavigationParam = AuthStackParamList;
export const navigationRef =
  createNavigationContainerRef<RootStackNavigationParam>();

/** Apply-coupon flow: stash payload then `goBack()` so the stack is not duplicated. */

export function replace<Name extends keyof RootStackNavigationParam>(
  name: Name,
  params?: RootStackNavigationParam[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.replace(name as string, params));
  }
}

export function push<Name extends keyof RootStackNavigationParam>(
  name: Name,
  params?: RootStackNavigationParam[Name],
) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name as string, params));
  }
}

export default navigationRef;
