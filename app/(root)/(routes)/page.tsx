"use client";
import { useEffect } from "react";

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
  return null;
}
