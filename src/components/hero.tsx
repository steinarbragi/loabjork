import FacebookIcon from '@/icons/facebook';
import InstagramIcon from '@/icons/instagram';
import LinkedInIcon from '@/icons/linkedin';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">Lóa Björk</h1>
      <div
        id="social"
        className="mx-auto my-10 text-center flex flex-row space-x-6 justify-center"
      >
        <Link href="https://www.facebook.com/loabb">
          <FacebookIcon />
        </Link>
        <Link href="https://www.instagram.com/loabragadottir">
          <InstagramIcon />
        </Link>
        <Link href="https://www.linkedin.com/in/%C3%B3l%C3%B6f-bj%C3%B6rk-bragad%C3%B3ttir-8baa0426/">
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
}
