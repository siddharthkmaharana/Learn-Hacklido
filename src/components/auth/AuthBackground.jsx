export default function AuthBackground() {
    return (
        <div
            className="fixed inset-0 z-0 overflow-hidden"
            style={{ background: "linear-gradient(135deg, #070B16 0%, #0D1325 50%, #0A0F1F 100%)" }}
        >
            <div className="absolute inset-0 cyber-grid-bg opacity-30" />

            <div
                className="aurora-orb"
                style={{ width: 520, height: 520, top: "-15%", left: "-10%", background: "#28B6F6" }}
            />
            <div
                className="aurora-orb"
                style={{ width: 460, height: 460, bottom: "-12%", right: "-6%", background: "#7C4DFF", animationDelay: "-6s" }}
            />
            <div
                className="aurora-orb"
                style={{ width: 360, height: 360, top: "28%", right: "18%", background: "#00E5FF", animationDelay: "-3s" }}
            />

            <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse 60% 50% at 50% 0%, rgba(40,182,246,0.12), transparent)" }}
            />

            <div className="noise-overlay" />
        </div>
    );
}