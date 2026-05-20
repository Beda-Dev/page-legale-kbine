# Plan : Migration de la Page Légale Kbine vers l'entreprise (digifaz-hub)

## Contexte

La page légale est actuellement déployée sur Vercel via le compte GitHub personnel (`Beda-Dev/page-legale-kbine`). L'objectif est de la migrer vers le repo d'entreprise (`digifaz-hub/page-legale-kbine`) et un compte Vercel entreprise.

- **URL actuelle (production) :** `https://page-legale-kbine.vercel.app/`
- **Déploiement :** Vercel (compte personnel Beda-Dev)
- **Domaine :** `.vercel.app` uniquement (pas de domaine custom)
- **Risque :** Zéro — les deux déploiements peuvent coexister pendant la transition

---

## Partie 1 — Migration Vercel (compte personnel → entreprise)

### Étape 1 — Créer le compte Vercel entreprise

1. Aller sur https://vercel.com/signup
2. **"Continue with GitHub"** → connecter le compte `digifaz-hub`
3. Créer une team nommée `digifaz` ou `digifaz-hub`

### Étape 2 — Importer le projet

1. Dashboard Vercel entreprise → **"Add New Project"**
2. Sélectionner `digifaz-hub/page-legale-kbine`
3. Framework : **Next.js** (détecté automatiquement)
4. Aucune variable d'environnement à configurer (app statique)
5. Cliquer **Deploy**

### Étape 3 — Valider le déploiement

1. Tester l'URL générée (ex: `page-legale-kbine-digifaz.vercel.app`)
2. Vérifier que les 3 sections légales s'affichent correctement

### Étape 4 — Mettre à jour le lien dans les stores

Une fois le déploiement entreprise validé, mettre à jour l'URL de politique de confidentialité dans :
- **Google Play Store** → Fiche de l'app → Politique de confidentialité
- **Apple App Store** → App Information → Privacy Policy URL

### Étape 5 — Supprimer l'ancien projet (optionnel)

Compte Vercel personnel → projet `page-legale-kbine` → Settings → **Delete Project**

---

## Partie 2 — Migration Git (repo personnel → entreprise)

### Étape 1 — S'assurer que digifaz-hub/page-legale-kbine est à jour

```bash
git push digifaz main
```

### Étape 2 — Ajouter le remote (si pas encore fait)

```bash
git remote add digifaz https://github.com/digifaz-hub/page-legale-kbine.git
git push digifaz main
```

---

## Vérification Finale

- [ ] `git push digifaz main` réussit depuis le poste local
- [ ] Le build Vercel entreprise passe sans erreur
- [ ] L'URL `.vercel.app` entreprise affiche correctement les 3 sections légales
- [ ] L'URL est mise à jour dans le Play Store et l'App Store
- [ ] L'ancien projet Vercel personnel peut être supprimé
