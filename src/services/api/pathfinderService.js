import { comparisonsData, detailedComparisonsData, featuresData } from "@/services/mockData/pathfinderData";

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const getFeatures = async () => {
  await delay(300);
  return [...featuresData];
};

export const getComparisons = async () => {
  await delay(400);
  return [...comparisonsData];
};

export const getFullComparison = async () => {
  await delay(200);
  return [...detailedComparisonsData];
};
export const getFeatureById = async (id) => {
  await delay(200);
  const feature = featuresData.find(item => item.Id === parseInt(id));
  if (!feature) {
    throw new Error('Feature not found');
  }
  return { ...feature };
}

export const getComparisonByFeatureId = async (featureId) => {
  await delay(200);
  const comparison = comparisonsData.find(item => item.featureId === featureId);
  if (!comparison) {
    throw new Error('Comparison not found');
  }
  return { ...comparison };
}