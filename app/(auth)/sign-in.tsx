import { useSignIn } from "@clerk/clerk-expo";
import { Link, useRouter } from "expo-router";
import { Text, View, Alert, StyleSheet } from "react-native";
import React from "react";
import HeaderNavigation from "@/core/HeaderNavigation";
import KeyBoard from "@/core/keyBoard";
import MyInputText from "@/core/myInputText";
import MyButton from "@/core/myButton";
import LineWithText from "@/core/lineWithText";

export default function Page() {
  const { signIn, setActive, isLoaded } = useSignIn();
  const router = useRouter();

  const [emailAddress, setEmailAddress] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) {
      return;
    }

    try {
      const signInAttempt = await signIn.create({
        identifier: emailAddress,
        password,
      });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.replace("/");
      } else {
        Alert.alert("woops !", "error try again");
        console.error(JSON.stringify(signInAttempt, null, 2));
      }
    } catch (err: any) {
      console.error(JSON.stringify(err, null, 2));
    }
  }, [isLoaded, emailAddress, password]);

  return (
    <>
      <HeaderNavigation pageTitle="" paddingTop={20} />

      <KeyBoard>
        <View style={{ gap: 6 }}>
          <MyInputText
            value={emailAddress}
            placeholder="Email..."
            onChangeText={(emailAddress) => setEmailAddress(emailAddress)}
          />
          <MyInputText
            value={password}
            placeholder="Password..."
            secureTextEntry={true}
            onChangeText={(password) => setPassword(password)}
          />
          <MyButton body="sign in" onSignInPress={onSignInPress} />
        </View>
        <View style={{ alignItems: "center", marginTop: 5 }}>
          <Text
            style={{
              color: "blue",
            }}
          >
            Forget password ?
          </Text>
        </View>
        <LineWithText />
        <View style={styles.button}>
          {/* <Text>Don't have an account?</Text> */}

          <Link href="/sign-up">
            <Text style={styles.text}>sign up</Text>
          </Link>
        </View>
      </KeyBoard>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 15,
    elevation: 3,
    backgroundColor: "red",
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
