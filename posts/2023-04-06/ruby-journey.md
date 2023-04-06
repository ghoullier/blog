---
title: Ruby Journey
publish_date: 2023-04-06
---

> Cette article liste mes impressions sur l'écosystème `Ruby` dans le contexte
> d'une montée en compétence chez `Swile`.

# Cool

# Pas cool

## L'environnement de dev

### Gestion de la version de `Ruby`

Comme pour `Node`, `Ruby` existe en plusieurs version qui vivent leur vie en
parrallèle. On se retrouve donc rapidement à devoir switcher de version de
`Ruby` d'un project à l'autre. Pour cela il existe `rbenv` qui permet de passer
d'une version à l'autre simplement. Pour cela il suffit d'avoir un fichier
`.ruby-version` dans le dossier de votre projet. Le concept est équivalent aux
outils coté `Node`: [nvm](https://github.com/nvm-sh/nvm),
[n](https://github.com/tj/n) ou [volta](https://github.com/volta-cli/volta)

Le principal soucis que j'ai rencontré avec rbenv c'est le temps d'installation
d'une nouvelle version qui est juste insupportable... _13 MINUTES_ en moyenne.
Quand on compare à `Volta`, c'est le jour et la nuit.

### Gestion des dépendances

`gem` et `bundler` sont 2 outils permettants de gérer les dépendances en `Ruby`.
De ma compréhension les 2 outils cohabitents avec des responsabilités un peut
différentes:

- `gem` est utilisée pour installer des dépendances globale
- `bundler` a un scope plus large car il permet de gérer les dépendances mais
  aussi de run des taches. On se rapproche beaucoup plus du trio `npm`, `pnpm`
  et `yarn`

La première chose qui m'a surprise c'est qu'il n'existe pas d'équivalent à la
commande `npm install dependency`. Il faut ajouter la dépendance à la main dans
le fichier `Gemfile` ou `gemspec` en fonction que vous developpiez sur une
`application` ou une `gem`
