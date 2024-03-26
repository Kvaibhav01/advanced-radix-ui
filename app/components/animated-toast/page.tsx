"use client";

import { XMarkIcon } from "@heroicons/react/20/solid";
import * as Toast from "@radix-ui/react-toast";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function AnimatedToast() {
  const [toasts, setToasts] = useState<{ id: string; message: string }[]>([]);

  return (
    <div className="flex min-h-screen items-center justify-start bg-gray-900 p-4 text-gray-50">
      <button
        onClick={() =>
          setToasts([
            ...toasts,
            { id: window.crypto.randomUUID(), message: getRandomMessage() },
          ])
        }
        className="rounded border-t border-white/20 bg-sky-500 px-4 py-2 font-medium focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-sky-500 active:bg-sky-600"
      >
        Save changes
      </button>

      <Toast.Provider>
        <AnimatePresence mode="popLayout">
          {toasts.map((toast) => (
            <Toast.Root
              key={toast.id}
              duration={3000}
              asChild
              forceMount
              onOpenChange={() =>
                // Filter out or remove from array so unmounting with `forceMount` can happen
                setToasts(toasts.filter((t) => t.id !== toast.id))
              }
            >
              <motion.li
                initial={{ x: "calc(100% + 16px)" }}
                animate={{ x: 0 }}
                exit={{ opacity: 0, zIndex: -1, transition: { duration: 0.2 } }}
                transition={{ type: "spring", bounce: 0, duration: 0.6 }}
                layout
                className="flex items-center justify-between rounded border border-gray-700 bg-gray-800 px-6 py-4 text-sm font-medium focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-sky-400"
              >
                <Toast.Description>{toast.message}</Toast.Description>
                <Toast.Close className="rounded text-gray-400 hover:text-gray-200 focus-visible:text-gray-200 focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-sky-500">
                  <XMarkIcon className="size-5" />
                </Toast.Close>
              </motion.li>
            </Toast.Root>
          ))}
        </AnimatePresence>
        <Toast.Viewport className="fixed right-4 top-4 flex w-80 flex-col-reverse gap-3 rounded focus-visible:outline focus-visible:outline-[2px] focus-visible:outline-offset-2 focus-visible:outline-sky-400" />
      </Toast.Provider>
    </div>
  );
}

function getRandomMessage() {
  const notificationLabels = [
    "New message recieved",
    "Changes saved",
    "Changes discarded",
    "All changes saved!",
    "Update successful!",
    "Download complete",
    "Payment processed",
    "Password changed",
    "Event cancelled",
    "Appointment booked!",
    "Item added to cart",
    "Item removed from cart",
    "Item quantity changed",
    "Item in stock",
    "Item out of stock",
    "Item updated",
    "New comment on post",
    "Reminder: Call with Erik today",
    "Weather alert: flood like conditions",
    "Discount code applied!",
  ];

  const randomIndex = Math.floor(Math.random() * notificationLabels.length);
  return notificationLabels[randomIndex];
}
