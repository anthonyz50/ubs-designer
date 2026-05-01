# UBS Standard Component: Tag

> Source: UBS Frontify Portal, Standard Components (Document 17)
> Figma: https://www.figma.com/file/WcC0f87A9v8ZEp6EaU8k4T/DDS-Library?type=design&node-id=1310-7629&mode=design
> React (UWR): Tag

## Usage
Labels elements, grouping them into categories. Related to hashtags.
Synonyms: Badge, Hashtag

## Anatomy
1. **Icon** (optional) - 12px icons
2. **Label** - key part of the tag
3. **Remove button** (optional) - input tags can have remove button
4. **Container** - defines background colour

## Types

### Category Tags
Most common. Associate one object with one/multiple categories.
- **Multiple categories**: use grey default tag (equal importance)
- **Single category**: use coloured background (same colour per category always)

### Input Tags
Allow user to remove tags. Can be used in input fields (technically complex). Combobox input tags are fully keyboard-navigable.
- **Accessibility**: avoid making tags actionable AND removable simultaneously. Use edit state for modifications.

### Choice Tags
On/Off toggle variation. Beneficial for multiple similar toggles.
- **Accessibility**: colour change alone is NOT accessible. Use checkmark to indicate active selection.

### Status Tags (5 colours used company-wide)
| Status | Colour Name | Use Case |
|--------|------------|----------|
| Information | Geyser | No user action needed (Processing, Loading, In Review) |
| Confirmation | Carla | Positive, fulfilled (Complete, Done, Executed) |
| Warning | Scotch | Important not urgent (Suspended, Warning, Interrupted) |
| Error | Pippin | Critical, needs attention (Blocked, Error, Rejected) |
| Neutral | Gallery | Low priority (Archived, Deleted, Draft) |

### Feature Tags
Highlight tag drawing attention to specific info. Do NOT display more than ONE per screen.

### Metric Tags
Indicate financial instrument development/performance. Colour coding varies by culture:
- European user colours
- American user colours
- Asian user colours
See Trading colours on the Colour page for regional mappings.

## Copywriting
Values in descending order: Shortness, Clarity
- Due to limited space, keep wording as short as possible
- Must be clearly understandable
- Use everyday words: "Done" not "Finalized", "Timeout" not "Server Error: Timeout", "Open" not "Not Completed"

## Do's and Don'ts
- Tags are NOT a replacement for buttons (accessibility problem)
- Avoid tags for single attribute cases (use only for limited category lists)
- Keep labels as short as possible (use tooltip for clarification if needed)
