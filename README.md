# Voyage au cœur du Sauvage — build prêt à héberger

Cette branche ne contient **que le site construit**, avec des chemins relatifs à
la racine du domaine. Elle est faite pour être déployée telle quelle.

- Source et documentation : branche `main`, dossier `voyage-sauvage/`
- Régénérer ce contenu : `npm run build:hostinger` dans `voyage-sauvage/`
  (sortie dans `dist-hostinger/`)

## Déploiement Hostinger par Git

hPanel → votre site → **Avancé → GIT** :

| Champ | Valeur |
|---|---|
| Dépôt | `https://github.com/julienduplouy90-wq/lea-cazaux-naturopathe.git` |
| Branche | `hostinger-deploy` |
| Répertoire | `public_html` |

Puis **Créer**, et **Déployer**. Le site est en ligne.

Ne pas committer à la main sur cette branche : elle est régénérée à chaque build.
