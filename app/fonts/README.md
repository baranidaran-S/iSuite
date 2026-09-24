# Satoshi — the headline face

`Satoshi-Black.woff2` is the 900 weight of **Satoshi**, by the Indian Type
Foundry, distributed through Fontshare.

| | |
|---|---|
| Source | https://www.fontshare.com/fonts/satoshi |
| Licence | ITF Free Font Licence — free for personal **and commercial** use |
| Version | the `900` cut served by Fontshare's CDN, downloaded 2026-09-24 |
| Size | 23 KB |

## Why the file is here and not on a CDN

Fontshare serves this face from `cdn.fontshare.com` with a one-line
stylesheet, which would have worked. It was self-hosted instead because a
render-blocking request to a domain we do not control sits on the critical
path of a page that exists to be landed on from a Meta ad, and because
`next/font/local` then fingerprints the file, preloads it, and generates a
metric-matched `satoshi Fallback` from local Arial (ascent 92.36%, descent
21.95%, size-adjust 109.35%) so the headline does not reflow when the real
face arrives.

## Only one weight

Satoshi ships 300–900. Only the Black is here, because only one display
weight is used anywhere on the page and an unused face is bytes on every
first paint.

**It is declared as `weight: "400"` in `app/layout.tsx`, deliberately.** The
file is Black; declaring it 400 means the default `font-weight: normal`
matches it exactly, so the browser can never synthesise a bolder cut by
smearing the outline. Do not "correct" that to 900 without also setting an
explicit `font-weight` on every `font-display` consumer.

## If you replace this face

Every display measurement on the page is derived from this file's metrics,
not guessed — the heading clamp, the line spacing, the amber highlight box
and the numeral column widths. `components/sales/SalesHeading.tsx` carries
the arithmetic and the glyph bounds it came from. Re-measure, do not
re-estimate:

```
cap height   0.7400em      tallest ink  +0.7540em (the j dot)
x-height     0.5000em      deepest ink  -0.2560em (g, y)
ascender     1.0100em      descender    -0.2400em
tabular digit 0.660em      content area  1.2500em
```

The binding constraint is not the headline — it is the light-section accent,
which is an `inline-block` with `whitespace-nowrap`. The longest is
"already waiting." at 7.716em, and it has to fit the 335px column a 375px
phone gives, or the whole page scrolls sideways.
