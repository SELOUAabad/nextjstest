const projets = [
  {
    id: 1,
    titre: "Base d'articles scientifiques",
    description:
      "Application web pour stocker, partager et filtrer des articles scientifiques, gérée par un administrateur. Projet de certification (stack MERN).",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    lien: "",
  },
  {
    id: 2,
    titre: "Portfolio personnel",
    description:
      "Site multi-pages avec routage par fichiers, réalisé avec Next.js et Bootstrap.",
    tags: ["Next.js", "Bootstrap"],
    lien: "https://github.com/seloua-AB",
  },
  {
    id: 3,
    titre: "Prochain projet",
    description:
      "Un outil qui allie pharmacie et développement web. À suivre !",
    tags: ["À venir"],
    lien: "",
  },
];

export default function Projets() {
  return (
    <div className="container py-5">
      <h1 className="section-title">Mes projets</h1>
      <div className="row g-4">
        {projets.map((projet) => (
          <div className="col-md-6 col-lg-4" key={projet.id}>
            <div className="card card-soft h-100">
              <div className="project-thumb">Image du projet</div>
              <div className="card-body d-flex flex-column">
                <h2 className="h5">{projet.titre}</h2>
                <p>{projet.description}</p>
                <div className="mb-3">
                  {projet.tags.map((tag, i) => (
                    <span key={tag} className={`chip ${i % 2 ? "green" : ""}`}>
                      {tag}
                    </span>
                  ))}
                </div>
                {projet.lien && (
                  <a
                    href={projet.lien}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sage mt-auto"
                  >
                    Voir le projet
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
