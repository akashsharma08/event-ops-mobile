import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Button, Text, View } from 'react-native';
import type { AuthStackParamList } from '../../../navigation/types';
import { styles } from './styles';

type Props = Readonly<NativeStackScreenProps<AuthStackParamList, 'ForgotPassword'>>;

export function ForgotPasswordScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Forgot password</Text>
      <Text style={styles.hint}>
        We will send a verification code to your email.
      </Text>
      <Button
        title="Send code"
        onPress={() =>
          navigation.navigate('OtpVerify', { email: 'you@example.com' })
        }
      />
      <View style={styles.gap} />
      <Button title="Back to log in" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}
