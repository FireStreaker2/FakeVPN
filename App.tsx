import { useState } from "react";
import { useColorScheme } from "react-native";
import { Stack, TamaguiProvider, Text } from "tamagui";
import { Switch } from "tamagui";

import config from "./tamagui.config";

export default function App() {
	const [connected, setConnected] = useState(false);
	const scheme = useColorScheme();

	return (
		<TamaguiProvider config={config} defaultTheme={scheme}>
			<Stack
				display="flex"
				justifyContent="center"
				alignItems="center"
				w="100%"
			>
				<Text fontSize="$11">Fake VPN</Text>
				<Switch
					size="$7"
					backgroundColor={connected ? "red" : "gray"}
					onCheckedChange={() => setConnected(!connected)}
				>
					<Switch.Thumb animation="quick" backgroundColor="white" size="$6" />
				</Switch>

				<Stack alignItems="center">
					<Text>{connected ? "Connected" : "Disconnected"}</Text>
					<Text>Your Internet is {connected ? "secure" : "insecure"}</Text>
				</Stack>
			</Stack>
		</TamaguiProvider>
	);
}
