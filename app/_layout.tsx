import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useFrameworkReady } from '@/hooks/useFrameworkReady';
import useCachedResources from '@/hooks/useCachedResources';
import SplashScreen from '@/components/SplashScreen';

export default function RootLayout() {
  useFrameworkReady();
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return <SplashScreen />;
  }

  return (
    <>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}