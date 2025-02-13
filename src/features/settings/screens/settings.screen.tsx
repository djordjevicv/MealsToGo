import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { Text } from "../../../components/typography/text.component";

export const Settings = () => (
    <SafeAreaProvider>
      <SafeAreaView>
        <Text>Settings</Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );