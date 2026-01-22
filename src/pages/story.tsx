const photos = [
  { src: "/photos/01-early.JPEG", text: "Before we knew how much this would mean." },
  { src: "/photos/02-start.JPEG", text: "This is where us really began." },
  { src: "/photos/03-middle.JPEG", text: "Getting comfortable together." },
  { src: "/photos/04-middle.JPEG", text: "Laughs, talks, little moments." },
  { src: "/photos/05-middle.JPEG", text: "Somewhere in the middle of us." },
  { src: "/photos/06-recent.JPEG", text: "Still choosing you." },
  { src: "/photos/07-recent.JPEG", text: "Familiar, but never boring." },
  { src: "/photos/08-recent.JPEG", text: "Comfort feels like this." },
  { src: "/photos/09-recent.JPEG", text: "Us, growing together." },
  { src: "/photos/10-recent.JPEG", text: "Little memories I’ll always keep." },
  { src: "/photos/11-recent.JPEG", text: "Still my favorite person." },
  { src: "/photos/12-recent.JPEG", text: "Almost now." },
  { src: "/photos/13-recent.JPEG", text: "Here we are." }
];

export default function Story() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ textAlign: "center" }}>From Then to Now</h1>

      <div
        style={{
          display: "grid",
          gap: 24,
          maxWidth: 600,
          margin: "40px auto"
        }}
      >
        {photos.map((p, i) => (
          <div
            key={i}
            style={{
              background: "white",
              borderRadius: 20,
              overflow: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,.12)"
            }}
          >
            <img src={p.src} alt="" style={{ width: "100%", display: "block" }} />
            <p style={{ padding: 16 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
