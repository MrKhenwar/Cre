"use client";

import { useEffect, useSyncExternalStore, type ReactNode } from "react";
import {
  ADS_STATUS_OPTIONS,
  BUSINESS_TYPES,
  CHALLENGES,
  currencyForCountry,
} from "@/lib/personalization";
import type { TierId } from "@/lib/pricing-data";

type StoreState = {
  countryCode: string | null;
  businessTypeId: string | null;
  challengeId: string | null;
  adsStatusId: string | null;
  dismissed: boolean;
  modalOpen: boolean;
  activeStep: number;
};

const STORAGE_KEY = "Crevis-personalization-v1";

const DEFAULT_STATE: StoreState = {
  countryCode: null,
  businessTypeId: null,
  challengeId: null,
  adsStatusId: null,
  dismissed: false,
  modalOpen: false,
  activeStep: 0,
};

type PersistedState = Pick<
  StoreState,
  "countryCode" | "businessTypeId" | "challengeId" | "adsStatusId" | "dismissed"
>;

function readPersisted(): PersistedState {
  if (typeof window === "undefined") return DEFAULT_STATE;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    return { ...DEFAULT_STATE, ...JSON.parse(raw) };
  } catch {
    return DEFAULT_STATE;
  }
}

let state: StoreState = { ...DEFAULT_STATE, ...readPersisted() };
const listeners = new Set<() => void>();

function emit() {
  listeners.forEach((listener) => listener());
}

function persist() {
  if (typeof window === "undefined") return;
  try {
    const { countryCode, businessTypeId, challengeId, adsStatusId, dismissed } =
      state;
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        countryCode,
        businessTypeId,
        challengeId,
        adsStatusId,
        dismissed,
      }),
    );
  } catch {
    // localStorage unavailable — personalization just won't persist
  }
}

function computeStartStep(): number {
  if (state.adsStatusId) return 4;
  if (state.challengeId) return 3;
  if (state.businessTypeId) return 2;
  if (state.countryCode) return 1;
  return 0;
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return DEFAULT_STATE;
}

function setAnswers(partial: Partial<StoreState>) {
  state = { ...state, ...partial };
  persist();
  emit();
}

function setStep(step: number) {
  state = { ...state, activeStep: step };
  emit();
}

function openModal() {
  state = { ...state, modalOpen: true, activeStep: computeStartStep() };
  emit();
}

function closeModal() {
  state = { ...state, modalOpen: false };
  emit();
}

function dismiss() {
  state = { ...state, dismissed: true, modalOpen: false };
  persist();
  emit();
}

function reset() {
  state = { ...DEFAULT_STATE };
  persist();
  emit();
}

export function usePersonalization() {
  const snapshot = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot,
  );

  const businessType =
    BUSINESS_TYPES.find((b) => b.id === snapshot.businessTypeId) ?? null;
  const challenge =
    CHALLENGES.find((c) => c.id === snapshot.challengeId) ?? null;
  const adsStatus =
    ADS_STATUS_OPTIONS.find((a) => a.id === snapshot.adsStatusId) ?? null;

  const recommendedTierId: TierId = adsStatus?.upsell
    ? "full-build"
    : (challenge?.recommendedTierId ?? "growth");

  return {
    ...snapshot,
    currency: currencyForCountry(snapshot.countryCode),
    isPersonalized: Boolean(
      snapshot.countryCode &&
        snapshot.businessTypeId &&
        snapshot.challengeId &&
        snapshot.adsStatusId,
    ),
    recommendedTierId,
    businessType,
    challenge,
    adsStatus,
    setAnswers,
    setStep,
    openModal,
    closeModal,
    dismiss,
    reset,
  };
}

export function PersonalizationProvider({
  children,
}: {
  children: ReactNode;
}) {
  useEffect(() => {
    if (state.dismissed) return;
    const timer = setTimeout(() => {
      if (!state.dismissed) openModal();
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
}
