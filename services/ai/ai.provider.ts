export type CrowdAIInput = {
  year: number;
  month: string;
};

export type CrowdAISpot = {
  name: string;
  lat: number;
  lng: number;
  weight: number;
  reason: string;
};

export type CrowdAIOutput = {
  spots: CrowdAISpot[];
};

export interface CrowdAIProvider {
  getCrowdPrediction(
    input: CrowdAIInput
  ): Promise<CrowdAIOutput>;
}
