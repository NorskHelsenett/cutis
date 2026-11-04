# Design tokens (CSS)

Same primitive → semantic structure as the original TypeScript version, now
as CSS custom properties, so you can import them straight into component
CSS files.

## Setup

Import once, near the root of your app (e.g. in your global stylesheet or
app entry point):

```css
@import "path/to/foundations/index.css";
```

If your bundler doesn't resolve `@import` across files (some minimal Vite/
webpack setups don't without a plugin), import `index.css` from JS instead:

```js
import "path/to/foundations/index.css";
```

## Usage in a component

Always reach for the **semantic** tokens (`--nhn-*`), not the primitive ones
(`--nhn-primitive-*`) — same rule as before, just enforced by naming instead
of by which module you import.

```css
/* Button.module.css */
.button {
  background-color: var(--nhn-color-brand-primary);
  color: var(--nhn-color-text-heading-inverse);
  padding: var(--nhn-spacing-03) var(--nhn-spacing-05);
  border-radius: var(--nhn-radius);

  font-size: var(--nhn-font-size-label);
  line-height: var(--nhn-line-height-label);
  font-family: var(--nhn-font-family-label);
  font-weight: var(--nhn-font-weight-label);
}

.button:hover {
  background-color: var(--nhn-color-interactive-raised-hover);
}
```

Typography tokens are responsive automatically — mobile values apply by
default, desktop values kick in at `768px` and up (see
`semantic/typography/desktop.css` to change the breakpoint). No need to
pick a "desktop" or "mobile" variant yourself like the TS version required.

## Designsystemet (designsystemet.no)

Cutis bruker komponentene fra [Designsystemet](https://designsystemet.no)
(`@digdir/designsystemet-react` + `@digdir/designsystemet-css`), stylet med
NHN-tokens. Alt lastes via `index.css`, som nå importerer:

1. `@digdir/designsystemet-css` – komponent-CSS (i `@layer ds.*`)
2. `designsystemet/css/cutis.css` – **generert** Cutis-tema (`--ds-*`-variabler)
3. NHN-primitiver og -semantiske tokens (`--nhn-*`), som før
4. `designsystemet.css` – bro der NHN-verdier overstyrer Designsystemet
   (font med fallback, pilleformede knapper via `--nhn-radius`)

### Hvordan temaet lages

`designsystemet.config.jsonc` i rot av repoet beskriver temaet `cutis`, med
basisfarger hentet fra `primitive/palette.css`:

| Designsystemet | NHN-token                                   |
|----------------|---------------------------------------------|
| `accent`       | `--nhn-primitive-color-primary-dark-green`  |
| `brand1`       | `--nhn-primitive-color-primary-light-green` |
| `brand2`       | `--nhn-primitive-color-cutis-regular`       |
| `neutral`      | `--nhn-primitive-color-green1-1`            |
| `info`/`success`/`warning`/`danger` | `--nhn-primitive-color-extended-*` |

Designsystemet regner ut hele fargeskalaen (inkl. mørk modus og kontrast)
fra disse. Etter endringer i config-filen, kjør:

```sh
npm run tokens
```

Det oppdaterer `designsystemet/design-tokens/` (JSON, kan synkes med Figma
via Tokens Studio) og `designsystemet/css/`. **Ikke rediger disse filene for
hånd** – de overskrives.

### Bruk i komponenter

```tsx
import { Button, Textfield } from '@digdir/designsystemet-react';

<Button data-color="accent" variant="primary">Lagre</Button>
<Textfield label="Navn" data-size="md" />
```

`data-color` kan være `accent`, `brand1`, `brand2`, `neutral` (og
`info`/`success`/`warning`/`danger` der det gir mening). `data-color-scheme="dark"`
på et element gir mørk modus. Se `src/Designsystemet.stories.tsx` og
Cutis-`Button` for eksempler.

Egne Cutis-komponenter kan fortsatt bruke `--nhn-*`-tokens direkte, og/eller
`--ds-*`-tokens (f.eks. `--ds-color-accent-base-default`, `--ds-size-4`).

## What changed vs. the TypeScript version

- **Namespacing instead of imports.** TS used `import * as primitive` to
  scope things; CSS custom properties are all global, so primitives are
  prefixed `--nhn-primitive-*` and semantic tokens `--nhn-*`. Only ever use
  the `--nhn-*` (non-primitive) ones in components.
- **Typography groups dropped.** The `heading = { xl, l, m, s }` /
  `body = { l, m, s, caption }` grouping objects don't have a CSS
  equivalent — reference the individual tokens directly
  (`--nhn-font-size-heading-xl`, etc.).
- **`border.radius`** had no unit in the original (`50`) — assumed `px`.
  Double check this is right for your use case (e.g. change to `50%` in
  `primitive/border.css` if it's meant to be a pill/circle radius).
- **Spacing/`px` values dropped**, since components use `rem` directly
  (the `px` numbers in the original were informational, converted 1:1 by
  the `16px = 1rem` relationship already baked into the source values).

## File-by-file mapping

| Original (.ts)                          | New (.css)                              |
|------------------------------------------|------------------------------------------|
| `primitive/palette.ts`                   | `primitive/palette.css`                  |
| `primitive/spacing.ts`                   | `primitive/spacing.css`                  |
| `primitive/border.ts`                    | `primitive/border.css`                   |
| `primitive/typography/defaults.ts`       | `primitive/typography/defaults.css`      |
| `primitive/typography/desktop.ts`        | `primitive/typography/desktop.css`       |
| `primitive/typography/mobile.ts`         | `primitive/typography/mobile.css`        |
| `semantic/palette.ts`                    | `semantic/palette.css`                   |
| `semantic/spacing.ts`                    | `semantic/spacing.css`                   |
| `semantic/border.ts`                     | `semantic/border.css`                    |
| `semantic/typography/desktop.ts`         | `semantic/typography/desktop.css`        |
| `semantic/typography/mobile.ts`          | `semantic/typography/mobile.css`         |
| `index.ts`                               | `index.css`                              |
