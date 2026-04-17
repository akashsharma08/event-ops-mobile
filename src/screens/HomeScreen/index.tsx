import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import type { MainStackParamList } from '../../navigation/types';
import { useAppDispatch } from '../../store/hooks';
import { signOut } from '../../store/slices/authSlice';
import { styles } from './styles';

type Props = NativeStackScreenProps<MainStackParamList, 'Home'>;

export function HomeScreen({ navigation }: Props) {
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Open details"
        onPress={() =>
          navigation.navigate('Details', { title: 'From home' })
        }
      />
      <View style={styles.gap} />
      <Button title="Sign out" onPress={() => dispatch(signOut())} />
    </View>
  );
}
