src/
├── pages/ # THIN WRAPPERS - Just compose components
│ ├── Home.tsx # Imports and arranges home components
│ ├── About.tsx # Imports and arranges about components
│ ├── BoardMembers.tsx # Imports and arranges board components
│ ├── Events.tsx # Imports and arranges event components
│ ├── Calendar.tsx # Imports calendar component
│ ├── Resources.tsx # Imports resource components
│ ├── Contact.tsx # Imports contact components
│ └── NotFound.tsx # Simple 404 page
│
├── components/ # ACTUAL LOGIC & UI HERE
│ ├── home/ # All home page sections
│ │ ├── Hero.tsx
│ │ ├── MissionSection.tsx
│ │ ├── StatsSection.tsx
│ │ ├── UpcomingEvents.tsx
│ │ └── InstagramFeed.tsx
│ │
│ ├── about/ # All about page sections
│ │ ├── MissionSection.tsx
│ │ ├── ChapterHistory.tsx
│ │ ├── Achievements.tsx
│ │ └── NationalSHPE.tsx
│ │
│ ├── board/ # Board member components
│ │ ├── BoardGrid.tsx
│ │ ├── BoardMemberCard.tsx
│ │ ├── BoardDescription.tsx
│ │ └── BoardMemberModal.tsx
│ │
│ ├── events/ # Event components
│ │ ├── EventList.tsx
│ │ ├── EventCard.tsx
│ │ ├── EventFilter.tsx
│ │ └── PastEvents.tsx
│ │
│ ├── contact/ # Contact page components
│ │ ├── ContactInfo.tsx
│ │ ├── ContactForm.tsx
│ │ ├── SocialLinks.tsx
│ │ └── LocationMap.tsx
│ │
│ ├── common/ # Reusable across pages
│ │ ├── PageHeader.tsx # Consistent page titles
│ │ ├── Button.tsx
│ │ ├── Card.tsx
│ │ └── Loader.tsx
│ │
│ └── layout/ # Layout components
│ ├── Navbar.tsx
│ ├── Footer.tsx
│ └── PageLayout.tsx
