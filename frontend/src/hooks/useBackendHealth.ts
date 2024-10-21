// src/hooks/useBackendHealth.ts

import { useQuery } from '@tanstack/react-query';
import axiosClient from '../api/axiosClient';
import { AxiosError } from 'axios';

const fetchBackendHealth = async (): Promise<boolean> => {
  console.log('Checking backend health...');
  const response = await axiosClient.get('/health');
  // 200 = OK | Health
  return response.status === 200;
};

const useBackendHealth = (): boolean | null => {
  const { data, error, isLoading } = useQuery<boolean, AxiosError>(
    ['backendHealth'],
    fetchBackendHealth,
    {
      retry: false, // Disable retry on failure
      refetchOnWindowFocus: false, // Disable refetch on window focus
      refetchOnReconnect: true, // Enable refetch on reconnect
      staleTime: 1000 * 60, // 1 minute
      cacheTime: 1000 * 60 * 10, // 10 minutes
      refetchInterval: 1000 * 60, // Refetch every 1 minute
      refetchIntervalInBackground: true, // Continue re-fetching even when the tab is in the background
    }
  );

  if (isLoading) return null;
  if (error) return false;
  return data ?? false;
};

export default useBackendHealth;
