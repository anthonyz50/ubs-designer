# UBS Standard Components: Chart Colours

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Default Sequence (up to 6 values)

| Name | Token | HEX | RGB | LESS Variable |
|------|-------|-----|-----|---------------|
| Chart Gray3 (Neutral50) | - | #8e8d83 | 142, 141, 131 | ubs-chart-gray3 |
| Chart Gray4 (Neutral60) | - | #7a7870 | 122, 120, 112 | ubs-chart-gray4 |
| Chart Gray5 (Neutral70) | - | #5a5d5c | 90, 93, 92 | ubs-chart-gray5 |
| Chart Gray6 (Neutral80) | - | #404040 | 64, 64, 64 | ubs-chart-gray6 |
| Chart Gray7 (Neutral90) | - | #1c1c1c | 28, 28, 28 | ubs-chart-gray7 |
| Chart Accent Bordeaux | - | #bd000c | 189, 0, 12 | ubs-chart-accent-bordeaux1 |
| Chart Accent Bronze | - | #af8626 | 175, 134, 38 | ubs-chart-accent-bronze |

### Colour Selection Rules
- 1 value: Chart Gray3
- 2 values: Chart Gray3 + Chart Gray5
- 3 values: Chart Gray3 + Chart Gray5 + Chart Gray7
- 4-5 values: sequential use starting with Chart Gray3

## Extended Sequence (up to 20 values)

| # | Name | HEX | RGB | LESS Variable |
|---|------|-----|-----|---------------|
| 01 | Bronze50 | #af8626 | 175, 134, 38 | ubs-chart-extended-01 |
| 02 | Lagoon90 | #00759e | 0, 117, 158 | ubs-chart-extended-02 |
| 03 | Kiwi50 | #879420 | 135, 148, 32 | ubs-chart-extended-03 |
| 04 | Aubergine90 | #4b2d58 | 75, 45, 88 | ubs-chart-extended-04 |
| 05 | Sand50 | #9f8865 | 159, 136, 101 | ubs-chart-extended-05 |
| 06 | Plum90 | #2e476b | 46, 71, 107 | ubs-chart-extended-06 |
| 07 | Sage50 | #469a6c | 70, 154, 108 | ubs-chart-extended-07 |
| 08 | Blush90 | #ad3e4a | 173, 62, 74 | ubs-chart-extended-08 |
| 09 | Lavender50 | #8489bd | 132, 137, 189 | ubs-chart-extended-09 |
| 10 | Lake50 | #0c7ec6 | 12, 126, 198 | ubs-chart-extended-10 |
| 11 | Bronze90 | #654d16 | 101, 77, 22 | ubs-chart-extended-11 |
| 12 | Aubergine50 | #804c95 | 128, 76, 149 | ubs-chart-extended-12 |
| 13 | Mint50 | #45999c | 69, 153, 156 | ubs-chart-extended-13 |
| 14 | Plum50 | #4972ac | 73, 114, 172 | ubs-chart-extended-14 |
| 15 | Blush50 | #cc707a | 204, 112, 122 | ubs-chart-extended-15 |
| 16 | Sage90 | #295b40 | 41, 91, 64 | ubs-chart-extended-16 |
| 17 | Lavender90 | #545a9c | 84, 90, 156 | ubs-chart-extended-17 |
| 18 | Chocolate50 | #785e4a | 120, 94, 74 | ubs-chart-extended-18 |
| 19 | Lake90 | #07476f | 7, 71, 111 | ubs-chart-extended-19 |
| 20 | Bordeaux90 | #620004 | 98, 0, 4 | ubs-chart-extended-20 |

## Asset Class Colours

| Asset Class | Colour Name | HEX | RGB | LESS Variable |
|------------|-------------|-----|-----|---------------|
| Liquidity | Kiwi70 | #606917 | 96, 105, 23 | ubs-assets-liquidity |
| Bonds | Lagoon90 | #00759e | 0, 117, 158 | ubs-assets-bonds |
| Equities | Bordeaux70 | #8a000a | 138, 0, 10 | ubs-assets-equities |
| Funds | Plum70 | #3a5a88 | 58, 90, 136 | ubs-assets-funds |
| Real estate | Pine70 | #00686b | 0, 104, 107 | ubs-assets-realestate |
| Commodities | Bronze50 | #af8626 | 175, 134, 38 | ubs-assets-commodities |
| Pro memoria | Sand70 | #816d50 | 129, 109, 80 | ubs-assets-promemoria |
| Liabilities | Aubergine70 | #633b73 | 99, 59, 115 | ubs-assets-liabilities |
| Others | Chocolate70 | #5e4a3a | 94, 74, 58 | ubs-assets-others |

## Trading Colours (Regional Schemes)

Set per default based on user residency. Give user option to switch in profile settings.

### European Scheme
| Direction | Colour | HEX | RGB | LESS Variable |
|-----------|--------|-----|-----|---------------|
| Positive | Lake70 | #095f95 | 9, 95, 149 | ubs-metric-europe-positive |
| Negative | Bordeaux50 | #bd000c | 189, 0, 12 | ubs-metric-europe-negative |

### American Scheme
| Direction | Colour | HEX | RGB | LESS Variable |
|-----------|--------|-----|-----|---------------|
| Positive | Kiwi70 | #606917 | 96, 105, 23 | ubs-metric-america-positive |
| Negative | Bordeaux50 | #bd000c | 189, 0, 12 | ubs-metric-america-negative |

### Asian Scheme
| Direction | Colour | HEX | RGB | LESS Variable |
|-----------|--------|-----|-----|---------------|
| Positive | Bordeaux50 | #bd000c | 189, 0, 12 | ubs-metric-asia-positive |
| Negative | Kiwi70 | #606917 | 96, 105, 23 | ubs-metric-asia-negative |

**Note:** Asian scheme is INVERTED from European/American — red means positive in Asian markets.
