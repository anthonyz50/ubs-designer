# UBS Data Formats — Currencies, Numbers, Dates, Times

> Source: UBS Frontify Portal, Standard Basics > Design Basics & Brand > Currencies, Numbers, Dates, Quotation Marks, etc.

## Core Principle

**Personalise to the region/language of the user.** The aim is always to avoid confusing users.

## Quotation Marks

| Region | Marks | Example |
|--------|-------|---------|
| UK and US | "" | "quotation marks" |
| France and Switzerland | «» | «Guillemets» |
| Germany | „" | „Anführungszeichen" |

If regionalisation is not possible, use the UK/US version.

## Dates

### UBS Default Date Pattern (preferred)

Always writes the month in text to avoid confusion.

| Name | Usage | Example | Syntax |
|------|-------|---------|--------|
| **Long date** | **Default/preferred** | **21-Jan-2023** | **dd-MMM-yyyy** |
| Verbose date | Sentences/prose only | Tuesday, 21 January 2023 | DDDD, dd MMM yyyy |
| Full Long Date | Day of week important | Tue 21-Jan-2023 | DDD dd-MMM-yyyy |
| Short Date | Space limited | 21-Jan-23 | dd-MMM-yy |
| Short month | Grids/charts only | Jan-23 | MMM-yy |

Rules:
- Do NOT drop leading zeros (01-Jan-2023, not 1-Jan-2023)

### Numeral Formats (for components)

- Default: dd.mm.yyyy
- Shortened: dd.mm.yy
- Personalise to user's local region

### Regionalised Patterns

**US:**
| Name | Example | Syntax |
|------|---------|--------|
| Long date (default) | 01/21/2023 | mm/dd/yyyy |
| Verbose | Tuesday, January 21, 2023 | DDDD, MMM dd, YYYY |
| Full long | Tue 01/21/2023 | DDD mm/dd/yyyy |
| Short | 01/21/23 | mm/dd/yy |

**Europe:**
| Name | Example | Syntax |
|------|---------|--------|
| Long date (default) | 06.05.2023 | dd.mm.yyyy |
| Verbose | Tuesday, 21 January 2023 | DDDD, dd MMM, YYYY |
| Full long | Tue 21.01.2023 | DDD dd.mm.yyyy |
| Short | 21.01.23 | dd.mm.yy |
| Short month + year | 01.23 | mm.yy |
| Short day + month | 20 Jun | dd MMM |

Note: Different date separators for US (/) and European (.) versions. Do not drop leading zeros.

## Times

| Format | Example | Syntax | Notes |
|--------|---------|--------|-------|
| 24 hour | 22:42:25 | hh:mm:ss | Seconds optional. Do NOT drop leading zeros (05:34 not 5:34) |
| 12 hour | 5:34:18 am | hh:mm:ss am/pm | Seconds optional. DO drop leading zeros (5:34 am not 05:34 am) |

## Numbers/Amounts

Personalise to user's local standard. Default fallback: UK/US.

| Language | Thousand sep | Decimal sep | Example |
|----------|-------------|-------------|---------|
| UK/US | comma (,) | point (.) | 123,871,234.85 |
| Switzerland (DE/IT/FR) | apostrophe (') | point (.) | 123'871'234.85 |
| German/Italian/French (option) | space | comma (,) | 123 871 234,85 |
| Alternative | point (.) | comma (,) | 123.871.234,85 |

Be consistent with decimal places within a single screen.

### Truncating Numbers

Space for 6 characters: 3 numerals, 2 decimals, 1 letter.

| Truncated | Original |
|-----------|----------|
| 1K | 1,000 |
| 1.01K | 1,010 |
| 1.1K | 1,100 |
| 100.01K | 100,010 |
| 1M | 1,000,000 |
| 1.01M | 1,010,000 |
| 100.01M | 100,010,000 |
| 100.01B | 100,010,000,000 |
| 100.01T | 100,010,000,000,000 |

## Currencies

- Write in **ISO 3-letter codes**, NOT currency symbols
- Correct: `USD 100.00`
- Wrong: `$100.00`
- Currency explanation format: "Country name Currency" (e.g. "Switzerland Franc", "United States Dollar")
- Do NOT use adjectives ("Swiss Franc" ✗, "British Pound" ✗)
- Capitalise the currency name
- For multi-country currencies, use the main country (Switzerland Franc, not Liechtenstein Franc)

**Exception:** Single-currency, single-country applications may use local currency symbols (e.g. UBS Financial Services Inc. apps may use $, but only without multi-currency capability).
