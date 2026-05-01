# UBS Standard Components: Amount

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Usage
Amounts display currency values (account balances, payments, transactions). Should match user's region/language. See Standard Basics for personalization standards.

**Figma:** DDS-Library  
**React (UWR):** Amount

## Anatomy
1. Currency (ISO 3-letter code)
2. Formatted amount

## Types
- **Standard** - majority of currency displays
- **Strong** - used for totals, stands out among other amounts
- **Strikethrough** - only for rejection cases (e.g. declined transaction)

## Colours
Amount colour should match body text colour. Edge cases (negative/trading amounts) use corresponding trading colours.

| Context | Colour | HEX | RGB |
|---------|--------|-----|-----|
| Default | Cod Gray | #1c1c1c | 28, 28, 28 |
| Secondary | Carbon | #646464 | 100, 100, 100 |
| Negative/Loss | UBS Red Dark | #ba0000 | 186, 0, 0 |
| Positive (Europe) | Lagoon Web | #0e7ca4 | 14, 124, 164 |
| Positive (Americas) | Olive Web | #677d00 | 103, 125, 0 |

## Behaviour
- Usually RIGHT-ALIGNED to content block (financial report style)
- Use larger size or reserved colour for emphasis

### Rules
- Right-align amounts for easy readability
- Use only AA-Level accessible colours
- NEVER truncate amounts
- Allow enough space to display the full amount

### Do's and Don'ts
- DO: Allow enough space to display full amount
- DON'T: Truncate the amount
