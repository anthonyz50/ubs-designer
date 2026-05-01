# UBS Standard Components: Communication

> Source: UBS Frontify Portal, Standard Components (Document 17)

## Chat UI

### Anatomy - Welcome Screen
1. Header with close button
2. Introduction
3. Space for profile photo
4. Primary CTA (start conversation)
5. Learn more section
6. Terms of use

### Anatomy - Conversation Layout
1. Header (extended with window expand action)
2. Conversation space
3. Action bar
4. Service messages

Chat window can be hidden under a floating button.

### Header
Always visible in open chat window. Avatar + title on left, actions grouped on right.

### Speech Bubbles
- Default stacked message
- Stacked message from User
- Single message with Link (external)

### Message Statuses (shown on last sent message only)
- Message seen by recipient
- Message sent
- While sending (optional)
- Sending timeout error

After next conversation event, statuses disappear to clean chat window.

### Action Bar
- Input area
- Send button (optional for desktop)
- Secondary actions (optional)
- Sticky at bottom of chat window, below content zone
- Expands dynamically for longer input

### Service Messages (centre-aligned)
Types:
1. Standard (plain text)
2. Availability changes (process)
3. Status messages
4. Action message

### Quick Replies
- Stacked quick replies
- Inline quick replies
- Anticipate user responses with button-based ready-to-use replies
- Speeds up communication, avoids errors

### Offline (Callouts)
- Use Callouts for error/warning handling (e.g. no internet)
- Always visible, sticky to top of content zone

## Chat with Human

### Guidelines
- Max TWO participants: client + UBS employee
- Use when user benefits from real person contact
- Otherwise consider chatbot

### Limitations
- Available only during UBS staff working hours
- Possible overload during busy hours
- Longer response time
- Possible human errors

### Tone of Voice
- Clear, convincing, with charm
- Adjust to user's needs and words
- Write like you speak
- Be personal (we, us, you)
- Use active verbs
- Present facts instead of adjectives

### Sensitive Data
- Adhere to data protection policies
- May limit information passed through chat
- Display prohibition notice on welcome screen or in conversation

## Chatbots

### Mandatory Requirements
If using Machine Learning or NLP/intent recognition:
- Register all models in model inventory
- Complete Inherent Risk Rating (IRR)
- Follow Model Development standards
- Independent model validation required

### Guidelines
- Good for simple, linear processes
- Good for gathering basic info before human handoff
- Good for navigation shortcuts
- BAD for complex multi-variant analysis
- BAD for simple form-filling (use dynamic form instead)

### Personality
Must align with UBS brand personality:
- **Name:** e.g. "UBS Assistant", "UBS Helper" (use goto/naming/ for approval)
- **Avatar:** Simple visual representation; use chatbot icon or 3keys
- **Tone of voice:** Follow UBS Brand Guidelines

### Expectation Management
Introduction must include:
1. Opening message
2. Information that user is chatting with a machine
3. Purpose of chatbot
4. Capabilities explained
5. Short interaction guide
6. Trigger to start conversation

### Transparency Requirements (UBS AI Principle)
- People must KNOW they are interacting with a machine
- Provide channels to enquire about AI-driven decisions

### Error Handling
- Provide closed set of answers (quick replies)
- Confirm user choices
- Remind of conversation purpose on subject shifts
- Be transparent about misunderstandings
- Don't guess or provide false answers
- Don't repeat same message twice
- Offer human handoff on fatal errors

### Human Handoff
Two scenarios:
1. Standard switch on user request
2. Critical error where bot cannot help

If human unavailable (outside hours): inform user when available, including timezone.

### Do's and Don'ts
- DON'T mimic human behaviour (avoid "typing..." indicators)
- DON'T guess user intent
- DO suggest short messages (limit input to one line default)
- DO be transparent about being a machine
