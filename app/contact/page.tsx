const contacts = [
  {
    icone: "✉️",
    couleur: "",
    titre: "Email",
    valeur: "seloua.kp@gmail.com",
    lien: "mailto:seloua.kp@gmail.com",
    bouton: "Écrire un email",
  },
  {
    icone: "🐙",
    couleur: "green",
    titre: "GitHub",
    valeur: "seloua-AB",
    lien: "https://github.com/seloua-AB",
    bouton: "Voir mon GitHub",
  },

  {
    icone: "📍",
    couleur: "green",
    titre: "Localisation",
    valeur: "Alger, Algérie",
    lien: "",
    bouton: "",
  },
];

export default function Contact() {
  return (
    <div className="container py-5">
      <h1 className="section-title">Contact</h1>
      <p className="lead mb-5">
        Une question, une opportunité ? N&apos;hésitez pas à me contacter.
      </p>

      <div className="row g-4">
        {contacts.map((c) => (
          <div className="col-md-6 col-lg-3" key={c.titre}>
            <div className="card card-soft h-100 p-4 d-flex flex-column align-items-center">
              <div className={`icon-bubble ${c.couleur}`}>{c.icone}</div>
              <h2 className="h5">{c.titre}</h2>
              <p className="mb-3">{c.valeur}</p>
              {c.lien && (
                <a
                  href={c.lien}
                  target={c.lien.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="btn btn-sage mt-auto"
                >
                  {c.bouton}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
