"use client";

import {
  isOpenStoreModalSelector,
  onCloseStoreModalAction,
  useStoreModal,
} from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/modal";

export const StoreModal = () => {
  const isOpen = useStoreModal(isOpenStoreModalSelector);
  const onClose = useStoreModal(onCloseStoreModalAction);
  return (
    <Modal
      title="Create store"
      description="Add a new store to manage products and categories"
      isOpen={isOpen}
      onClose={onClose}
    >
      Future create store form
    </Modal>
  );
};
