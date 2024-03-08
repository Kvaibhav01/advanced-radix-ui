import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-center gap-5 bg-gray-900 p-24 text-gray-50">
      <Link href="/components/switch" className="underline">
        Switch Component →
      </Link>
      <Link href="/components/apple-selector-group" className="underline">
        Apple Selector Group Component →
      </Link>
      <Link href="/components/ios-slider" className="underline">
        iOS Slider Component →
      </Link>
      <Link href="/components/animated-toast" className="underline">
        Animated Toast Component →
      </Link>
    </main>
  );
}
