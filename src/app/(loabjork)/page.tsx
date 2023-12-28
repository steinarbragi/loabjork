import Hero from '@/components/hero';
import Video from '@/components/video';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <Video />
      <div className="max-w-5xl w-full items-center justify-between text-sm">
        <Hero />
      </div>
    </main>
  );
}
