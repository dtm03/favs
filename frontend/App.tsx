import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { PaperProvider } from 'react-native-paper';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import type { RootStackParamList } from './navigation/types';
import { HomeScreen } from './screens/HomeScreen';
import { ChatDetailScreen } from './screens/ChatDetailScreen';
import { ProfileEditScreen } from './screens/ProfileEditScreen';
import { favsTheme } from './theme/paperTheme';
import { colors } from './theme/colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <PaperProvider theme={favsTheme}>
          <NavigationContainer>
            <StatusBar style="dark" />
            <Stack.Navigator
              screenOptions={{
                headerStyle: { backgroundColor: colors.cream },
                headerTintColor: colors.charcoal,
                headerTitleStyle: { fontWeight: '700' },
                contentStyle: { backgroundColor: colors.cream },
              }}
            >
              <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen
                name="ChatDetail"
                component={ChatDetailScreen}
                options={({ route }) => ({ title: route.params.name })}
              />
              <Stack.Screen
                name="ProfileEdit"
                component={ProfileEditScreen}
                options={{ title: 'Profil anpassen' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
