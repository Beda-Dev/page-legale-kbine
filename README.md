# Kbine Legal Page — Page Légale de l'Application Kbine

Page web officielle contenant les informations légales de l'application mobile **Kbine** (service de recharge téléphonique en Côte d'Ivoire). Cette page est requise pour la publication sur le **Google Play Store** et l'**Apple App Store**.

---

## Table des Matières

1. [Aperçu du Projet](#1-aperçu-du-projet)
2. [Stack Technique](#2-stack-technique)
3. [Structure du Projet](#3-structure-du-projet)
4. [Installation et Développement](#4-installation-et-développement)
5. [Contenu des Pages Légales](#5-contenu-des-pages-légales)
6. [Déploiement](#6-déploiement)
7. [Personnalisation](#7-personnalisation)

---

## 1. Aperçu du Projet

| Caractéristique | Détail |
|---|---|
| Type | Application web statique |
| Framework | Next.js 16 (App Router) |
| Langage | TypeScript 5 |
| Styles | Tailwind CSS 4 |
| UI Components | shadcn/ui (Radix UI) |
| URL Production | `https://page-legale-kbine.vercel.app/` |
| Déploiement | Vercel |
| Langue | Français |

### Objectif

Cette page est référencée dans les fiches des stores (Play Store / App Store) comme URL de politique de confidentialité et de conditions d'utilisation. Elle regroupe en une seule page :

- Les **mentions légales** (éditeur, contact, hébergeur)
- La **politique de confidentialité** (données collectées, droits RGPD)
- Les **conditions générales d'utilisation** (CGU)

---

## 2. Stack Technique

| Technologie | Version | Rôle |
|---|---|---|
| Next.js | 16.0.10 | Framework React SSR/SSG |
| React | 19.2.3 | Bibliothèque UI |
| TypeScript | 5 | Typage statique |
| Tailwind CSS | 4 | Styles utility-first |
| shadcn/ui | latest | Composants accessibles (Radix UI) |
| Lucide React | 0.546.0 | Icônes |
| class-variance-authority | 0.7.1 | Gestion des variantes CSS |
| clsx + tailwind-merge | latest | Fusion conditionnelle des classes |

### Composants shadcn/ui Utilisés

- `Button` — Boutons de contact (email, téléphone)
- `Card` — Cartes de navigation rapide
- `Separator` — Séparateurs visuels entre sections

---

## 3. Structure du Projet

```
kbinelegalpage/
│
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout racine (métadonnées, polices)
│   │   ├── page.tsx            # Page principale — tout le contenu légal
│   │   ├── globals.css         # Variables CSS + base Tailwind CSS 4
│   │   └── favicon.ico
│   │
│   ├── components/
│   │   └── ui/
│   │       ├── button.tsx      # Composant Button (shadcn/ui)
│   │       ├── card.tsx        # Composant Card (shadcn/ui)
│   │       └── separator.tsx   # Composant Separator (shadcn/ui)
│   │
│   └── lib/
│       └── utils.ts            # Utilitaire cn() = clsx + tailwind-merge
│
├── public/                     # Assets statiques
├── next.config.ts              # Configuration Next.js (minimale)
├── tsconfig.json               # Configuration TypeScript strict
├── postcss.config.mjs          # PostCSS avec @tailwindcss/postcss
├── components.json             # Configuration shadcn/ui
├── package.json
└── pnpm-lock.yaml
```

---

## 4. Installation et Développement

### Prérequis

- Node.js >= 18.x
- pnpm (recommandé) ou npm

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/Beda-Dev/page-legale-kbine.git
cd page-legale-kbine

# Installer les dépendances
pnpm install
# ou
npm install

# Démarrer le serveur de développement
pnpm dev
```

La page sera accessible sur [http://localhost:3000](http://localhost:3000).

### Scripts

```bash
pnpm dev      # Développement avec hot reload (Turbopack)
pnpm build    # Build de production
pnpm start    # Démarrer le build de production
```

> Aucune variable d'environnement requise — l'application est entièrement statique.

---

## 5. Contenu des Pages Légales

Tout le contenu légal se trouve dans `src/app/page.tsx`.

### Structure de la Page

```
HEADER              Logo Kbine + titre + sous-titre
NAVIGATION RAPIDE   Mentions légales | Confidentialité | CGU
SECTION 1           Mentions légales (éditeur, contact)
SECTION 2           Politique de confidentialité (RGPD)
SECTION 3           Conditions générales d'utilisation
FOOTER              Email + Téléphone de contact
```

### Informations Légales

**Éditeur :**
- Société : DIGIFAZ
- Siège : Abidjan, Cocody, quartier Akouédo Attié
- Directeur de publication : ALEXANDRE KLA
- Email : contact@kbine.com
- Téléphone : +225 07 89 06 20 79

**Données collectées :** numéro de téléphone, historique des transactions, données de paiement

**Droits des utilisateurs (RGPD) :** accès, rectification, effacement, opposition, portabilité
→ Contact : privacy@kbine.com

**Droit applicable :** droit ivoirien — Tribunaux d'Abidjan

---

## 6. Déploiement

### Déploiement Actuel (Vercel — compte personnel)

La page se déploie automatiquement à chaque push sur `main`.

URL actuelle : `https://page-legale-kbine.vercel.app/`

### Migration vers le Compte Entreprise

Voir `MIGRATION.md` pour le plan complet de migration vers `digifaz-hub`.

En résumé :
1. Se connecter sur Vercel avec le compte `digifaz-hub`
2. **Add New Project** → importer `digifaz-hub/page-legale-kbine`
3. Aucune variable d'environnement à configurer
4. Cliquer **Deploy**

---

## 7. Personnalisation

### Modifier le Contenu Légal

Tout le texte est dans `src/app/page.tsx` — modifier directement les sections.

### Ajouter un Composant UI

```bash
pnpm dlx shadcn@latest add [nom-composant]
```

---

## Contacts et Ressources

| Environnement | URL |
|---|---|
| **Page légale (production)** | `https://page-legale-kbine.vercel.app/` |
| **Développement local** | `http://localhost:3000` |
| **Application Kbine** | `https://www.kbine-mobile.com/` |

- **Repository personnel :** `https://github.com/Beda-Dev/page-legale-kbine`
- **Repository entreprise :** `https://github.com/digifaz-hub/page-legale-kbine`
- **Documentation Next.js :** https://nextjs.org/docs
- **Documentation shadcn/ui :** https://ui.shadcn.com
