"use client";

import * as Switch from "@radix-ui/react-switch";

export default function SwitchComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 p-24">
      <label className="flex space-x-4 font-medium text-white">
        <span>Airplane mode</span>
        <Switch.Root className="w-11 rounded-full bg-gray-700 p-px shadow-inner shadow-black/50 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 active:bg-gray-600 data-[state=checked]:bg-sky-500 active:data-[state=checked]:bg-sky-400">
          <Switch.Thumb className="block h-6 w-6 rounded-full bg-gray-200 shadow-sm transition data-[state=checked]:translate-x-[18px] data-[state=checked]:bg-white" />
        </Switch.Root>
      </label>
    </div>
  );
}
