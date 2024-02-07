"use client";
import { SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import { SpeakerWaveIcon } from "@heroicons/react/20/solid";
import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export default function iOSSlider({
  minValue = 0,
  maxValue = 100,
  stepValue = 1,
}: {
  minValue?: number;
  maxValue?: number;
  stepValue?: number;
}) {
  const [isUsingPointer, setIsUsingPointer] = useState(false);
  const [sliderValue, setSliderValue] = useState(50);
  const [stash, setStash] = useState({
    clientX: 0,
    sliderValue,
  });

  return (
    <div className="mx-auto flex min-h-screen flex-col items-center justify-center bg-gray-900 font-apple text-white">
      <div className="group w-full max-w-xs touch-none select-none hover:cursor-grab active:cursor-grabbing">
        <div className="flex items-center gap-3 transition-[margin] duration-[350ms] *:duration-[350ms] hover:-mx-3">
          <SpeakerXMarkIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
          <Slider.Root
            value={[sliderValue]}
            min={minValue}
            max={maxValue}
            step={stepValue}
            onValueCommit={([value]) => setSliderValue(value)}
            defaultValue={[50]}
            className="transitin relative flex h-1.5 grow transition-[height] group-hover:h-4"
            onPointerDown={(e) => {
              setStash({ clientX: e.clientX, sliderValue });
              setIsUsingPointer(true);
            }}
            onPointerMove={(e) => {
              if (e.buttons > 0) {
                let differenceInPixels = e.clientX - stash.clientX;
                let sliderWidth = e.currentTarget.clientWidth;
                let pixelsPerUnit = (maxValue - minValue) / sliderWidth;
                let differenceInUnits = differenceInPixels * pixelsPerUnit;
                let stashValue = stash.sliderValue + differenceInUnits;
                let clampedValue = clamp(stashValue, minValue, maxValue);
                let steppedValue = roundToStep(clampedValue, stepValue);

                setSliderValue(steppedValue);
              }
            }}
            onBlur={() => setIsUsingPointer(false)}
          >
            <Slider.Track
              className={`${isUsingPointer ? "" : "group-has-[:focus-visible]:outline group-has-[:focus-visible]:outline-2 group-has-[:focus-visible]:outline-offset-2 group-has-[:focus-visible]:outline-apple-blue-focus"} relative h-full grow overflow-hidden rounded-full bg-gray-700`}
            >
              <Slider.Range className="absolute h-full bg-gray-300 transition group-hover:bg-white">
                {/* Done to not have a transition on focus and make it instantly white */}
                <div className="absolute inset-0 group-has-[:focus-visible]:bg-white"></div>
              </Slider.Range>
            </Slider.Track>
            <Slider.Thumb />
          </Slider.Root>
          <SpeakerWaveIcon className="size-5 transition group-hover:scale-125 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}

function clamp(number: number, minValue: number, maxValue: number) {
  return Math.min(maxValue, Math.max(number, minValue));
}

function roundToStep(number: number, step: number) {
  const inverseStep = 1 / step;
  return Math.round(number * inverseStep) / inverseStep;
}
