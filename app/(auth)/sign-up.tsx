import * as React from "react";
import {
  TextInput,
  Button,
  View,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useSignUp } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { Text } from "@/components/Themed";
import HeaderNavigation from "@/core/HeaderNavigation";
import KeyBoard from "@/core/keyBoard";
import MyInputText from "@/core/myInputText";
import MyButton from "@/core/myButton";

export default function SignUpScreen() {
  const { isLoaded, signUp, setActive } = useSignUp();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [pendingVerification, setPendingVerification] = React.useState(false);
  const [code, setCode] = React.useState("");

  const onSignUpPress = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      await signUp.create({
        emailAddress,
        password,
      });

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      setPendingVerification(true);
    } catch (err: any) {
      // See https://clerk.com/docs/custom-flows/error-handling
      // for more info on error handling
      Alert.alert("woops !", "error try again");

      console.error(JSON.stringify(err, null, 2));
    }
  };

  const onPressVerify = async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const completeSignUp = await signUp.attemptEmailAddressVerification({
        code,
      });

      if (completeSignUp.status === "complete") {
        await setActive({ session: completeSignUp.createdSessionId });
        router.replace("/");
      } else {
        console.error(JSON.stringify(completeSignUp, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  };

  return (
    <>
      <HeaderNavigation pageTitle="" paddingTop={20} />

      <KeyBoard>
        <View style={{ gap: 6 }}>
          <View style={{ gap: 6 }}>
            {!pendingVerification && (
              <>
                <MyInputText
                  value={emailAddress}
                  placeholder="Email..."
                  onChangeText={(email) => setEmailAddress(email)}
                />
                <MyInputText
                  value={password}
                  placeholder="Password..."
                  secureTextEntry={true}
                  onChangeText={(password) => setPassword(password)}
                />
                <MyButton body="Sign Up" onSignInPress={onSignUpPress} />
              </>
            )}
            {pendingVerification && (
              <>
                <MyInputText
                  value={code}
                  placeholder="Code..."
                  onChangeText={(code) => setCode(code)}
                />
                <MyButton body="Verify Email" onSignInPress={onPressVerify} />
              </>
            )}
          </View>
          <View>
            <Text>alredy have account ? </Text>
            <Link href="/sign-in">
              <Text>Sign in</Text>
            </Link>
          </View>
        </View>
      </KeyBoard>
    </>
  );
}
