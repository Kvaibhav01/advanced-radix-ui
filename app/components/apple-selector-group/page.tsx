"use client";

import * as RadioGroup from "@radix-ui/react-radio-group";

import { useState } from "react";

let options = [
  {
    value: "1tb",
    label: "1TB SSD Storage",
    price: 0,
  },
  {
    value: "2tb",
    label: "2TB SSD Storage",
    price: 400,
  },
  {
    value: "4tb",
    label: "4TB SSD Storage",
    price: 1000,
  },
  {
    value: "8tb",
    label: "8TB SSD Storage",
    price: 2200,
  },
];

export default function SwitchComponent() {
  const [selectedValue, setselectedValue] = useState(options[0].value);
  let selectedOption = options.find((option) => option.value === selectedValue);
  const numberFormat = new Intl.NumberFormat("en-us", {
    style: "currency",
    currency: "USD",
    signDisplay: "never",
  });

  return (
    <div className="font-apple flex min-h-screen flex-col items-center justify-center p-24 text-gray-900">
      <form
        action={(formData) => {
          let data = Object.fromEntries(formData);
          alert(JSON.stringify(data));
        }}
        className="w-full max-w-sm"
      >
        <h2 className="text-2xl font-medium">
          Storage.{" "}
          <span className="text-gray-600">How much space do you need?</span>
        </h2>
        <RadioGroup.Root
          name="storage"
          value={selectedValue}
          onValueChange={(value) => setselectedValue(value)}
          className="mt-8 space-y-4"
        >
          {options.map((option) => (
            <RadioGroup.Item
              className={`focus-visible:outline-apple-blue-focus flex w-full justify-between rounded-xl border px-4 py-[20px] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4 ${
                option.value === selectedValue
                  ? "border-apple-blue ring-apple-blue ring-1 ring-inset"
                  : "border-gray-500"
              }`}
              key={option.value}
              type="button"
              value={option.value}
            >
              <span className="font-medium">{option.label}</span>
              {selectedOption && selectedValue != option.value && (
                <span className="text-gray-600">
                  {option.price > selectedOption.price ? "+ " : "- "}
                  {numberFormat.format(option.price - selectedOption.price)}
                </span>
              )}
            </RadioGroup.Item>
          ))}
        </RadioGroup.Root>

        <div className="mt-8 text-right">
          <button
            type="submit"
            className="bg-apple-blue hover:bg-apple-blue-hover focus-visible:outline-apple-blue-focus rounded-[8px] px-[15px] py-[7px] text-sm font-medium text-white transition focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-4"
          >
            Add to Bag
          </button>
        </div>
      </form>
    </div>
  );
}
