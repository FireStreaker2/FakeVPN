import { useState } from "react";
import { Stack, TamaguiProvider, Text } from "tamagui";
import { Switch } from "tamagui";
import * as Haptics from "expo-haptics";

import config from "./tamagui.config";

export default function App() {
	const [connected, setConnected] = useState(false);

	return (
		<TamaguiProvider config={config}>
			<Stack
				display="flex"
				justifyContent="center"
				alignItems="center"
				w="100%"
				h="100%"
				backgroundColor="$color.gray3Dark"
			>
				<Text fontSize="$11" color="white">
					Fake VPN
				</Text>
				<Switch
					size="$7"
					m="10%"
					borderColor="$colorTransparent"
					backgroundColor={connected ? "red" : "gray"}
					onCheckedChange={() => {
						setConnected(!connected);

						Haptics.notificationAsync(
							Haptics.NotificationFeedbackType.Success
						);
					}}
				>
					<Switch.Thumb animation="quick" backgroundColor="white" size="$6" />
				</Switch>

				<Stack alignItems="center">
					<Text color={connected ? "red" : "white"}>
						{connected ? "Connected" : "Disconnected"}
					</Text>

					<Stack display="flex" flexDirection="row" mt="5%">
						<Text mr={5} color="white">
							Your Internet is
						</Text>
						<Text color={connected ? "red" : "white"}>
							{connected ? "secure" : "insecure"}
						</Text>
					</Stack>
				</Stack>
			</Stack>
		</TamaguiProvider>
	);
}
