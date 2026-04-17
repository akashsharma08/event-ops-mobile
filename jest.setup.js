/* eslint-env jest */

jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);

jest.mock('react-native-keyboard-aware-scroll-view', () => {
  const { ScrollView } = require('react-native');
  return { KeyboardAwareScrollView: ScrollView };
});

jest.mock('react-native-gesture-handler', () => {
  const { View } = require('react-native');
  return {
    GestureHandlerRootView: View,
    PanGestureHandler: View,
    TapGestureHandler: View,
    ScrollView: require('react-native').ScrollView,
    Swipeable: View,
    DrawerLayout: View,
    State: {},
    Directions: {},
  };
});

jest.mock('@gorhom/bottom-sheet', () => require('@gorhom/bottom-sheet/mock'));

jest.mock('react-native-svg', () => {
  const React = require('react');
  const { View } = require('react-native');
  /** @param {Record<string, unknown>} props */
  const Mock = (props) => React.createElement(View, props);
  return { __esModule: true, default: Mock, Svg: Mock, Path: Mock, Circle: Mock, Rect: Mock };
});

jest.mock('react-native-svg-circle-country-flags', () => {
  const React = require('react');
  const { View } = require('react-native');
  const MockFlag = () => React.createElement(View, null);
  return new Proxy(
    {},
    {
      get() {
        return MockFlag;
      },
    },
  );
});

jest.mock('react-native-mask-input', () => {
  const { TextInput } = require('react-native');
  return { __esModule: true, default: TextInput };
});

jest.mock('react-native-linear-gradient', () => {
  const React = require('react');
  const { View } = require('react-native');
  /** @param {{ children?: React.ReactNode } & Record<string, unknown>} props */
  return (props) => {
    const { children, ...rest } = props;
    return React.createElement(View, rest, children);
  };
});

jest.mock('redux-persist', () => {
  const actual = jest.requireActual('redux-persist');
  return {
    ...actual,
    persistStore: () => ({
      purge: () => Promise.resolve(),
      flush: () => Promise.resolve(),
      pause: () => {},
      persist: () => {},
    }),
  };
});

jest.mock('@react-native-async-storage/async-storage', () =>
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

jest.mock('redux-persist/integration/react', () => {
  const React = require('react');
  return {
    PersistGate: ({ children }) => React.createElement(React.Fragment, null, children),
  };
});
