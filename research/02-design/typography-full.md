# UBS Typography — Full Specification

> Source: UBS Frontify Portal, Standard Basics > Typography > Typography Essentials

## Core Principle

Readability is one of the most important aspects of web and mobile design usability. Readable text affects how users process information. Poor readability scares readers away. Done correctly, readability allows users to efficiently read and absorb information.

## Typography Rules

Typography in applications is typically simple and straightforward. The most important rules:

### Hierarchy
- Use hierarchy in typographic layout to show users where to start reading and where to read through
- Differentiate headers from body text, but keep variations to a minimum
- You don't need all six HTML heading levels: a single title style and a small structural style is usually enough

### Contrast and Colour
- Primary text: Cod gray (#1C1C1C) on white
- On coloured backgrounds: use white, black, or tone-on-tone colour for legibility
- Contrast ratio must be above 4.5:1 (WCAG AA compliance)
- UBS Red in typography: very sparingly, accent only. Used mostly in quotations, subtitles, infoline, captions, or page information

### Characters Per Line (longer texts)

| Font size | Optimal column width | Acceptable column width |
|-----------|---------------------|------------------------|
| Body (16px) | 608px (~75 chars) | 784px (~100 chars) |
| Body label (14px) | 468px (~70 chars) | 720px (~105 chars) |
| Body small (12px) | 340px (~60 chars) | 720px (~125 chars) |

Rule of thumb: 45-80 characters per line for single-column. 66 characters is ideal. Multiple columns: 45-60 characters.

## Font Family

**UBS Frutiger** — used across all styles.

## Font Sizes and Weights

### Headers

| CSS Class | Font | Weight | Size | Line Height |
|-----------|------|--------|------|-------------|
| ubs-header-1 | UBS Frutiger | Light (300) | 48px | 52px |
| ubs-header-2 | UBS Frutiger | Light (300) | 38px | 44px |
| ubs-header-3 | UBS Frutiger | Light (300) | 32px | 40px |
| ubs-header-4 | UBS Frutiger | Light (300) | 24px | 28px |
| ubs-header-5 | UBS Frutiger | Regular (400) | 18px | 24px |
| ubs-header-6 | UBS Frutiger | Regular (400) / Bold (700) | 16px | 20px |

Note: header-6 uses weight 700 per the detailed spec, while the table shows 400.

### Body Text

| CSS Class | Font | Weight | Size | Line Height | Notes |
|-----------|------|--------|------|-------------|-------|
| ubs-body-1 | UBS Frutiger | Regular (400) | 16px | 24px | Base size for ubs.com |
| ubs-body-1-bold | UBS Frutiger | Medium (700) | 16px | 24px | |
| ubs-body-2 | UBS Frutiger | Regular (400) | 14px | 20px | Base size for standard apps |
| ubs-body-2-bold | UBS Frutiger | Medium (700) | 14px | 20px | |
| ubs-body-3 | UBS Frutiger | Regular (400) | 12px | 16px | Base size for HD apps |
| ubs-body-3-bold | UBS Frutiger | Medium (700) | 12px | 16px | |
| ubs-body-4 | UBS Frutiger | Regular (400) | 10px | 12px | |
| ubs-body-4-bold | UBS Frutiger | Medium (700) | 10px | 12px | |

### Numbers

| CSS Class | Font | Weight | Size | Line Height |
|-----------|------|--------|------|-------------|
| ubs-number-1 | UBS Frutiger | Regular (400) | 48px | 52px |
| ubs-number-2 | UBS Frutiger | Medium (700) | 24px | 28px |
| ubs-number-3 | UBS Frutiger | Medium (700) | 18px | 24px |
| ubs-number-4 | UBS Frutiger | Medium (700) | 12px | 16px |

### Masthead Typography (Standard Apps)

| CSS Class | Maps to | Size | Line Height |
|-----------|---------|------|-------------|
| ubs-masthead-title | ubs-header-5 | 18px | 24px |
| ubs-masthead-group | ubs-header-6 | 16px | 20px |
| ubs-masthead-nav | ubs-body-2 | 14px | 20px |

### Bold Highlighting

Body-X-bold styles use **Frutiger Medium** as the font style. Body font styles can also be used with the `<strong>` tag to emphasise text.

## Text Colours

All styles default to:
- Text colour: #1C1C1C (Cod)
- Background: #FFFFFF (White)

## Base Sizes by Context

| Context | Base class | Size |
|---------|-----------|------|
| ubs.com (website) | ubs-body-1 | 16px |
| Standard applications | ubs-body-2 | 14px |
| HD (High Density) apps | ubs-body-3 | 12px |
