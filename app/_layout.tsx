import { NewsProvider } from "@/context/NewsContext";
import { Stack } from "expo-router";
import "../css/global.css";

export default function Layout() {
  return (
    <NewsProvider>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      />
    </NewsProvider>
  );
}
