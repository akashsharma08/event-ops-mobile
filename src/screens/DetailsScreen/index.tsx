import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import type { MainStackParamList } from '../../navigation/types';
import { styles } from './styles';

type Props = NativeStackScreenProps<MainStackParamList, 'Details'>;

export function DetailsScreen({ route }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>{route.params?.title ?? 'Details'}</Text>
    </View>
  );
}
