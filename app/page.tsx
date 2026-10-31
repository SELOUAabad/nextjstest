import Link from "next/link";
import Image from "next/image";

const atouts = [
  {
    icone: "🔬",
    titre: "Pharmacie & qualité",
    texte:
      "Contrôle qualité physicochimique, HPLC, BPF et réglementation pharmaceutique.",
    couleur: "",
  },
  {
    icone: "📊",
    titre: "Pharmaco-économie",
    texte:
      "Master en pharmaco-économie et market access : économie de la santé et accès au marché.",
    couleur: "green",
  },
  {
    icone: "💻",
    titre: "Développement web",
    texte:
      "HTML, CSS, JavaScript, Node.js, MongoDB et Next.js : je construis des applications web.",
    couleur: "",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-md-7 fade-up">
              <span className="chip green">👋 Bienvenue</span>
              <h1 className="display-4 mt-3">
                Bonjour, je suis{" "}
                <span style={{ color: "var(--sage-dark)" }}>Seloua</span>
              </h1>
              <p className="lead my-4">
                Diplômée en industrie pharmaceutique, étudiante en
                pharmaco-économie et passionnée de développement web.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <Link href="/projets" className="btn btn-sage">
                  Voir mes projets
                </Link>
                <Link href="/contact" className="btn btn-butter">
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="col-md-5 fade-up delay-1">
              <div className="avatar-frame" style={{ position: "relative" }}>
                <Image
                  src="/Profilepic.png"
                  alt="Photo de Seloua"
                  fill
                  sizes="280px"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-4">
        <h2 className="section-title">Ce que je fais</h2>
        <div className="row g-4">
          {atouts.map((atout) => (
            <div className="col-md-4" key={atout.titre}>
              <div className="card card-soft h-100 p-4">
                <div className={`icon-bubble ${atout.couleur}`}>
                  {atout.icone}
                </div>
                <h3 className="h5">{atout.titre}</h3>
                <p className="mb-0">{atout.texte}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
