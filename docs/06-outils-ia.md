# Étape 6 — Outils IA installés sur le dépôt

Deux ajouts externes, tous les deux optionnels : le site reste modifiable à la main sans eux.

## 1. Compétences UI/UX Pro Max (`.claude/skills/`)

Source : <https://github.com/nextlevelbuilder/ui-ux-pro-max-skill> (MIT, version 2.13.0).

Sept compétences installées côte à côte avec celles du projet :

| Compétence | À quoi elle sert |
|---|---|
| `ui-ux-pro-max` | Le moteur. Base locale interrogeable : 79 styles, 192 palettes et profils produit, 74 accords typographiques, 119 règles UX, 105 icônes, 25 types de graphiques, 22 stacks techniques |
| `design-system` | Architecture de jetons en trois couches (primitif → sémantique → composant) |
| `ui-styling` | Tailwind, shadcn/ui, Radix — hors sujet ici, le site n'a pas de dépendance |
| `brand` | Voix de marque, identité visuelle, cohérence des supports |
| `design` | Logos, identité visuelle complète, icônes (appelle des API externes) |
| `banner-design` | Bannières réseaux sociaux et publicités |
| `slides` | Présentations HTML |

### Interroger la base

Depuis la racine du dépôt, sans rien installer (Python 3 seulement, bibliothèque standard, aucun
appel réseau) :

```bash
# une règle UX précise
python3 ".claude/skills/ui-ux-pro-max/scripts/search.py" "focus visible contraste" --domain ux

# une recommandation par stack
python3 ".claude/skills/ui-ux-pro-max/scripts/search.py" "lazy loading images" --stack html-tailwind

# un système de design complet pour un projet
python3 ".claude/skills/ui-ux-pro-max/scripts/search.py" "beauty spa wellness" --design-system -p "Nom"
```

Domaines disponibles : `ux`, `style`, `color`, `typography`, `product`, `landing`, `chart`, `icon`,
`gsap`, `motion`, `app`.

### Ce que ces compétences ne décident pas

**Les règles de `CLAUDE.md` et de `docs/02-inspirations-design.md` l'emportent sur toute
recommandation de `ui-ux-pro-max`.** La compétence est une bibliothèque de références, pas une
autorité sur ce site. En pratique :

- Les couleurs viennent des jetons CSS (`--sable`, `--ecorce`, `--foret`, `--terre`, `--miel`), pas
  des palettes proposées par le générateur.
- La typographie est Newsreader + la pile système, pas un accord suggéré par la base.
- Pas de Tailwind, pas de shadcn, pas de Chart.js, pas de CDN : la règle « aucune dépendance
  externe » n'a pas d'exception.
- Les listes d'anti-patterns et les règles d'accessibilité (contraste 4,5:1, focus visible,
  `prefers-reduced-motion`, cibles tactiles) sont, elles, directement utiles : c'est le principal
  intérêt de l'outil sur ce projet.

Trois compétences dépendent de services ou d'autres compétences absentes du dépôt et ne
fonctionneront pas telles quelles : `design` (génération de logos via une API), `banner-design`
(appelle `ai-artist`, `ai-multimodal`, `chrome-devtools`) et une partie de `ui-styling` (les polices
`canvas-fonts`, 5,5 Mo, ne sont pas embarquées). Elles sont installées pour rester fidèle au paquet
amont ; rien ne les appelle.

`design` porte le même nom qu'une compétence intégrée à Claude Code, qui reste prioritaire : la
version du dépôt n'est pas déclenchée automatiquement.

### Mettre à jour

L'installation a été faite fichier par fichier depuis le dépôt amont, pas par le CLI `uipro`
(le seul écart : les chemins de `ui-ux-pro-max/SKILL.md` ont été réécrits en relatif depuis la
racine du projet, l'amont utilisant une variable réservée aux extensions). Pour mettre à jour,
recopier les dossiers depuis une nouvelle version du dépôt amont et refaire cette réécriture, ou
lancer `npx ui-ux-pro-max-cli@latest init --ai claude --force` puis vérifier le diff.

## 2. Serveur MCP 21st (`.mcp.json`)

Source : <https://21st.dev/mcp> — recherche et génération de composants d'interface.

La configuration est dans `.mcp.json`, à la racine. **Aucune clé n'est écrite dans le dépôt** : le
fichier lit la variable d'environnement `TWENTY_FIRST_API_KEY`.

Pour l'activer, sur sa propre machine :

```bash
export TWENTY_FIRST_API_KEY="…"   # clé obtenue sur https://21st.dev/mcp
```

puis relancer Claude Code depuis le dossier du projet et approuver le serveur. Sans la variable, le
serveur ne se connecte pas et le reste fonctionne normalement.

Là encore : les composants proposés par 21st sont écrits pour React et Tailwind. Ils servent
d'inspiration de mise en page, jamais de code à coller — ce site est en HTML statique et en CSS
maison.
