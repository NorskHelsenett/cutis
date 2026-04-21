# Cutis
Cutis er et komponentbibliotek for Norsk Helsenett! Målet er å gjøre det enkelt å bruke komponenter som følger [NHN sitt brandpad](https://brandpad.io/norsk-helsenett/).
Sjekk ut slack kanalen [#nhn-teknolauget-komponentbibliotek-cutis](https://norskhelsenett.slack.com/archives/C0AU27ZSD6X).

## Hvordan kjøre prosjektet

### mise-en-place

Med mise-en-place installert, kjører du bare:
```
mise run storybook
```

### npm
Med pnpm (eller en annen package manager) kjører du følgende i hver directory (`composition/`, `react/`, `vue/`):

```
pnpm install
pnpm run storybook
```