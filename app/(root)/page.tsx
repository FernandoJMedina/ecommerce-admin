"use client";
import { useEffect } from "react";

import { Modal } from "@/components/ui/modal";
import {
  isOpenStoreModalSelector,
  onOpenStoreModalAction,
  useStoreModal,
} from "@/hooks/use-store-modal";

export default function SetupPage() {
  const onOpen = useStoreModal(onOpenStoreModalAction);
  const isOpen = useStoreModal(isOpenStoreModalSelector);

  useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  return <div className="p-4">RootPage</div>;
}
