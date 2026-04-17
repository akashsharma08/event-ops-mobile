import React, { useEffect } from 'react';
import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BackHandler, Keyboard, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from '../../constants/colors';
import { hpx, wpx } from '../../utils/metric';
import GetStarted from '../sheets/get-started-sheet/GetStarted';
import { useBottomSheet } from './useBottomSheet';
import styles from './sheetProvider.styles';

const BottomSheetHost = () => {
  const { sheet, closeSheet } = useBottomSheet();
  const { bottom } = useSafeAreaInsets();

  useEffect(() => {
    if (!sheet) {
      return undefined;
    }
    const onHardwareBackPress = () => {
      closeSheet();
      return true;
    };
    const sub = BackHandler.addEventListener('hardwareBackPress', onHardwareBackPress);
    return () => sub.remove();
  }, [sheet, closeSheet]);

  if (!sheet) return null;

  const content = (() => {
    switch (sheet.type) {
      case 'getStarted':
        return <GetStarted />;
      default:
        return null;
    }
  })();
  const renderBackdrop = (props: any) =>
    sheet ? (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        opacity={1}
        onPress={closeSheet}
        style={[props.style, { backgroundColor: colors.blackEightyPercent }]}
      />
    ) : null;

  return (
    <BottomSheet
      handleComponent={HandleComponent}
      backgroundStyle={{
        backgroundColor: colors.black,
        borderWidth: 0.2,
        borderRadius: hpx(32),
        borderColor: colors.white,
      }}
      enableOverDrag={false}
      index={0}
      onChange={index => {
        if (index === -1) {
          Keyboard.dismiss();
        }
      }}
      backdropComponent={renderBackdrop}
      enablePanDownToClose
      onClose={closeSheet}
    >
      <BottomSheetView
        style={{
          flex: 1,
          paddingBottom: bottom + hpx(16),
          paddingHorizontal: wpx(16),
        }}
      >
        {content}
      </BottomSheetView>
    </BottomSheet>
  );
};
const HandleComponent = () => (
  <View style={styles.handleComponent}>
    <View style={styles.pan} />
  </View>
);
export default BottomSheetHost;
