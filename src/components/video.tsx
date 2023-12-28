export default function Video() {
  return (
    <>
      <div className="fixed -z-40 w-full h-full top-0 left-0 bg-gradient-to-t from-black/0 dark:to-slate-900/100 to-white/70" />
      <div className="fixed -z-50 w-full h-full top-0 left-0">
        <iframe
          width="100%"
          height="100%"
          className="-z-50"
          src="https://www.youtube.com/embed/lceWbYCaMhg?si=hAUnblZ_IYaIFuXR&amp;controls=0&autoplay=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    </>
  );
}
