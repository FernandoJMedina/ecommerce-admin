import { create } from "zustand";

interface StoreModalProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useStoreModal = create<StoreModalProps>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export const isOpenStoreModalSelector = (state: StoreModalProps) =>
  state.isOpen;
export const onOpenStoreModalAction = (state: StoreModalProps) => state.onOpen;
export const onCloseStoreModalAction = (state: StoreModalProps) =>
  state.onClose;
