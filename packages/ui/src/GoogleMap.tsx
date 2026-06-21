export function GoogleMap({
  embedUrl,
  title,
}: {
  embedUrl: string;
  title: string;
}) {
  return (
    <div className="overflow-hidden rounded-xl shadow-lg">
      <iframe
        src={embedUrl}
        title={title}
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
