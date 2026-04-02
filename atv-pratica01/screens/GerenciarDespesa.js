import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import DespesaRecentes from './screens/DespesaRecentes';
import TodasDespesas from './screens/TodasDespesas';
import IconButton from './components/IconButton';
import { GlobalStyles } from './constants/styles';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function BottonTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        headerTintColor: 'white',
        tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
        tabBarActiveTintColor: GlobalStyles.colors.accent500,
        headerRight: ({ tintColor }) => (
          <IconButton
            icon="add"
            size={24}
            color={tintColor}
            onPress={() => {
              navigation.navigate('GerenciarDespesa');
            }}
          />
        ),
      })}
    >
      <Tab.Screen
        name="DespesasRecentes"
        component={DespesaRecentes}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hourglass" size={size} color={color} />
          ),
          tabBarLabel: 'Recentes',
          title: 'Despesas Recentes',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
      <Tab.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
          tabBarLabel: 'Todas',
          title: 'Todas as Despesas',
          tabBarLabelStyle: { fontSize: 12 },
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="Despesas"
          component={BottonTabScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GerenciarDespesa"
          component={GerenciarDespesa}
          options={{
            presentation: 'modal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});