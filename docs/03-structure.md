# Étape 3 — Structure, arborescence et intentions de recherche

## À qui s'adresse le site

**Persona principal — Sandrine, 42 ans, Tarbes.** Fatiguée depuis des mois, ballonnée après chaque
repas, bilans sanguins « normaux ». Son médecin n'a rien trouvé, elle ne veut pas d'un énième
complément acheté au hasard. Elle cherche quelqu'un près de chez elle, veut savoir combien ça coûte,
combien de temps ça dure, et surtout **si c'est sérieux**. Elle tape « naturopathe tarbes »,
« ballonnements que faire », « fatigue chronique bilan normal ».

**Persona secondaire — Julien, 37 ans, Bagnères.** Sportif, veut optimiser son énergie et sa
récupération. Plus curieux que souffrant, il lit avant de réserver.

Les deux ont la même objection de fond : *est-ce que c'est du sérieux ou de la poudre de perlimpinpin ?*
Toute la structure du site répond à cette question avant de vendre quoi que ce soit.

## Arborescence

```
/                                       Accueil
/naturopathie/                          Ce qu'est (et n'est pas) la naturopathie   [pilier]
/consultations/                         Hub : les 3 motifs + le déroulé            [pilier]
  /consultations/digestion/             Digestion, ballonnements, transit          [motif]
  /consultations/fatigue-sommeil/       Fatigue, sommeil, stress                   [motif]
  /consultations/cycle-feminin/         Cycle, SPM, périménopause                  [motif]
/tarifs/                                Tarifs et modalités                        [pratique]
/cabinet-tarbes/                        Le cabinet, l'accès, la zone couverte      [pratique]
/a-propos/                              Parcours, formation, façon de travailler   [institutionnel]
/ressources/                            Hub des articles
  /ressources/ballonnements-apres-repas/                                           [article]
  /ressources/fatigue-bilan-normal/                                                [article]
  /ressources/rituel-du-soir-sommeil/                                              [article]
/contact/                               Formulaire + coordonnées                   [pratique]
/mentions-legales/
/politique-de-confidentialite/
404.html
```

15 pages. Deux niveaux de profondeur maximum, tout est à trois clics de l'accueil.

## Pourquoi cette structure et pas une autre

**`/consultations/` plutôt que `/services/`.** Personne ne cherche « service de naturopathie ». On
prend le mot que le visiteur emploie.

**Une page par motif, pas une page fourre-tout.** « Naturopathe ballonnements » et « naturopathe
fatigue » sont deux intentions distinctes, avec deux textes différents et deux témoignages
différents. Une page unique qui essaie de couvrir les trois ne se positionne sur aucune.

**`/cabinet-tarbes/` existe pour une raison précise.** L'accueil vise « naturopathe Tarbes », mais
la page cabinet capte tout ce qui est logistique et local : accès, parking, communes couvertes
(Juillan, Ibos, Odos, Séméac, Aureilhan, Lourdes, Vic-en-Bigorre), consultations en visio pour le
reste. C'est aussi la page qui porte les données structurées `LocalBusiness` les plus complètes.

**`/naturopathie/` est la page qui désamorce l'objection.** Elle dit noir sur blanc ce que la
naturopathie ne fait pas : pas de diagnostic, pas d'arrêt de traitement, pas de promesse de
guérison. Contre-intuitif commercialement, décisif pour la confiance — et c'est exactement le type
de contenu que les moteurs de réponse citent.

**`/ressources/` reste petit et volontairement lié aux motifs.** Chaque article renvoie vers la page
de motif correspondante, et chaque page de motif renvoie vers son article. Le maillage interne est
défini dès le départ, pas rajouté après coup.

## Correspondance intention de recherche → page

| Ce que tape le visiteur | Page qui répond |
|---|---|
| naturopathe tarbes / naturopathe 65 | `/` puis `/cabinet-tarbes/` |
| c'est quoi la naturopathie / ça sert à quoi | `/naturopathie/` |
| naturopathe ballonnements, intestin irritable | `/consultations/digestion/` |
| fatigue chronique prise de sang normale | `/ressources/fatigue-bilan-normal/` → `/consultations/fatigue-sommeil/` |
| naturopathe périménopause | `/consultations/cycle-feminin/` |
| prix consultation naturopathe | `/tarifs/` |
| bilan de vitalité c'est quoi | `/consultations/` |

## Règles d'URL, figées maintenant

- Minuscules, tirets, sans accent, sans mot vide superflu.
- Toujours un slash final (`/tarifs/`), parce que chaque page est un `index.html` dans un dossier.
- **Aucune URL ne bouge après la mise en ligne.** Si une page doit être renommée, on met en place une
  redirection ; sur GitHub Pages, ça veut dire garder l'ancien dossier avec un `<meta http-equiv="refresh">`
  et un `canonical` vers la nouvelle. À éviter : c'est justement pour ça qu'on fige l'arborescence
  avant d'écrire la première ligne de HTML.
