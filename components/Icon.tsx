import Image from 'next/image';

export default function Icon() {
  return (
    <div className="flex flex-col items-center justify-center mt-10 ">
      <Image src="/Images/Sun.png" alt="weather" width={170} height={170} />
      <div className="mt-5 text-4xl">맑음</div>
    </div>
  );
}
