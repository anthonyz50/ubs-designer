# UBS Fonts — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Design Basics & Brand > Fonts

## Core Rule

UBS uses a single Latin font in print and digital products: **Frutiger** (specifically the UBS-customised version).

**Critical:** It is mandatory to use UBS's version of the Frutiger font. Other free or commercially available Frutiger fonts must NOT be used. The UBS Frutiger is slightly different from the generally available Frutiger.

## UBS Frutiger WEB — Available Weights

| Weight | Style | CSS Value |
|--------|-------|-----------|
| Regular | Normal | 400 |
| Regular | Italic | 400 italic |
| Medium | Normal | 500 |
| Medium | Italic | 500 italic |
| Bold | Normal | 700 |
| Extra Bold | Normal | 800 |

## CSS Usage

```css
font-family: "UBS Frutiger", sans-serif;
```

## Weight Guidelines

- **Regular (400):** Recommended for better readability of text in applications, up to about 18pt
- **Light (300):** For large text sizes 18pt and above (e.g. headlines and titles in publishing typography) or high-density displays (e.g. mobile apps)
- Outside UBS applications, Frutiger Light is the default for print and most marketing website content

## Non-Latin Fonts

Chinese and Japanese fonts don't work as webfonts due to enormous character counts. UBS uses system fonts with cascading fallbacks:

| Language | Font Cascade |
|----------|-------------|
| Traditional Chinese | DFHeiHK, "Microsoft JhengHei", "Heiti TC", sans-serif |
| Simplified Chinese | DFPHeiStd, "Microsoft YaHei", "STHeiti", sans-serif |
| Japanese | Meiryo, 'MS PGothic', 'Hiragino Kaku Gothic Pro', Helvetica, sans-serif |

These are pre-installed on 99%+ of devices.

### Japanese Implementation Example

Combine Latin characters with Japanese characters using font-family cascading.

## UBS Headline

**Deprecated** (August 2018). UBS Headline is no longer used in UBS designs.

## Webfont Format

- Primary format: `.woff`
- Optimised format: `.woff2` (approx 30% smaller, test browser support)
- `.eot` files no longer provided (only needed for IE10 or earlier, less than 0.1% of users)
- DO NOT use other versions of Frutiger. The UBS version renders differently from e.g. Monotype FrutigerLT
- The UBS specific font is only available as W04 set (loading time same as W03)
- W04 contains: Latin Extended 1 with OpenType features for Western and Eastern European languages
