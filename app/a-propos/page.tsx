import Image from "next/image";

const competencesPharma = [
  "Contrôle qualité physicochimique",
  "HPLC",
  "BPF",
  "Réglementation pharmaceutique",
  "Normes ANSM",
  "Pharmaco-économie",
  "Market Access",
];

const competencesWeb = [
  "HTML",
  "CSS",
  "JavaScript",
  "Node.js",
  "MongoDB",
  "Next.js",
  "Bootstrap",
  "C# (notions)",
];

const parcours = [
  {
    periode: "En cours",
    titre: "Formation en développement web",
    texte: "HTML, CSS, JavaScript, Node.js, MongoDB, Next.js.",
  },
  {
    periode: "En cours",
    titre: "Master Pharmaco-économie et Market Access",
    texte:
      "Économie de la santé, accès au marché des produits de santé. Faculté de Pharmacie d'Alger.",
  },
  {
    periode: "[2023 – 2026]",
    titre: "Licence en industrie pharmaceutique",
    texte:
      "Projet de fin d'études sur le contrôle qualité physicochimique. Stage en laboratoire de contrôle qualité et stage en officine. Bonnes pratiques de fabrication (BPF) et réglementation.",
  },
  {
    periode: "[2023]",
    titre: "Baccalauréat scientifique",
    texte: "",
  },
];

export default function APropos() {
  return (
    <div className="container py-5">
      <h1 className="section-title">À propos</h1>

      <div className="row g-5 align-items-center">
        <div className="col-md-4 text-center">
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
        <div className="col-md-8">
          <h2 className="h4">Qui suis-je ?</h2>
          <p>
            Diplômée en industrie pharmaceutique, j'ai une expérience pratique
            en laboratoire de contrôle qualité et en officine, avec une bonne
            connaissance des BPF et de la réglementation.
          </p>
          <p>
            Je poursuis aujourd'hui un master en pharmaco-économie et market
            access, et je me forme en parallèle au développement web, pour
            allier santé, réglementation et technologie.
          </p>
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-md-5">
          <div className="card card-soft p-4 h-100">
            <h2 className="h5 mb-3">Compétences</h2>
            <p className="fw-bold mb-1">Pharmacie</p>
            <div className="mb-3">
              {competencesPharma.map((c) => (
                <span key={c} className="chip green">
                  {c}
                </span>
              ))}
            </div>
            <p className="fw-bold mb-1">Web</p>
            <div>
              {competencesWeb.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-7">
          <div className="card card-soft p-4 h-100">
            <h2 className="h5 mb-3">Parcours</h2>
            {parcours.map((p, i) => (
              <div key={i} className="mb-3">
                <span className="chip">{p.periode}</span>
                <h3 className="h6 mb-1 mt-2">{p.titre}</h3>
                {p.texte && <p className="mb-0">{p.texte}</p>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
