import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function useAffiliateTracking() {
  const trackClickMutation = useMutation({
    mutationFn: (data: { casinoId?: number; casinoName: string }) =>
      apiRequest("POST", "/api/track-click", data),
    onError: (error) => {
      console.warn("Failed to track affiliate click:", error);
    },
  });

  const trackClick = (casinoId: number, casinoName: string) => {
    trackClickMutation.mutate({ casinoId, casinoName });
  };

  return {
    trackClick,
    isTracking: trackClickMutation.isPending,
  };
}
