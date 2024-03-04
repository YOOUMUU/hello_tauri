import Greet from '@/components/Greet';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <div className="flex justify-center items-center h-screen w-full">
        <Greet />
      </div>
    </main>
  );
}
