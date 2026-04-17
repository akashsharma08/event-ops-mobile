import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider } from 'react-redux';
import { StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { PersistGate } from 'redux-persist/integration/react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import BottomSheetHost from '../components/bottom-sheet/BottomSheetHost';
import { BottomSheetProvider } from '../components/bottom-sheet/BottomSheetProvider';
import { RootNavigator } from '../navigation/RootNavigator';
import { persistor, store } from '../store';
import colors from '../constants/colors';
import { navigationRef } from '../navigation/NavigationService';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: 1 },
    mutations: { retry: 0 },
  },
});

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <PersistGate persistor={persistor} loading={null}>
            <SafeAreaProvider>
              <BottomSheetModalProvider>
                <BottomSheetProvider>
                  <NavigationContainer ref={navigationRef}>
                    <RootNavigator />
                  </NavigationContainer>
                  <BottomSheetHost />
                </BottomSheetProvider>
              </BottomSheetModalProvider>
            </SafeAreaProvider>
          </PersistGate>
        </Provider>
      </QueryClientProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
});
