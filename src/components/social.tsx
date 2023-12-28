import FacebookIcon from '@/icons/facebook';
import InstagramIcon from '@/icons/instagram';
import LinkedInIcon from '@/icons/linkedin';
import Link from 'next/link';

export default function Social({ color }: { color?: string }) {
  return (
    <div
      id="social"
      className={`${
        color && color
      } mx-auto text-center flex flex-row space-x-6 justify-center`}
    >
      <Link
        className="bg-white/60 dark:bg-black/60 p-4 rounded-full"
        href="https://www.facebook.com/loabb"
      >
        <FacebookIcon />
      </Link>
      <Link
        className="bg-white/60 dark:bg-black/60 p-4 rounded-full"
        href="https://www.instagram.com/loabragadottir"
      >
        <InstagramIcon />
      </Link>
      <Link
        className="bg-white/60 dark:bg-black/60 p-4 rounded-full"
        href="https://www.linkedin.com/in/%C3%B3l%C3%B6f-bj%C3%B6rk-bragad%C3%B3ttir-8baa0426/"
      >
        <LinkedInIcon />
      </Link>
    </div>
  );
}
