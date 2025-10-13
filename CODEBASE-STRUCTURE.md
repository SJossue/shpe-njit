src/
├── pages/  
│ ├── Home.tsx # Main Page - Hero, Mission, Events preview, Instagram feed
│ ├── About.tsx # About - Mission/Vision, History, Achievements, National SHPE info
│ ├── BoardMembers.tsx # Executive board - Photos, roles, and bios
│ ├── Events.tsx # Upcoming and past events with optional filters
│ ├── Calendar.tsx # Calendar view of all activities
│ ├── Resources.tsx # Member resources like career links or main SHPE site
│ ├── Contact.tsx # Contact page w/ Automated contact form & social links
│ ├── BecomeMember.tsx # Membership page - Application form, benefits, and FAQ
│ └── NotFound.tsx # 404 error page
│
├── components/  
│ ├── home/  
│ │ ├── Hero.tsx # Banner with name and CTA button
│ │ ├── MissionSection.tsx # "What is SHPE?" - explains mission and goals
│ │ ├── UpcomingEvents.tsx # Preview of next 3-5 upcoming events with quick links
│ │ └── InstagramFeed.tsx # Embedded Instagram feed showing recent posts
│ │
│ ├── about/  
│ │ ├── MissionVision.tsx # Mission statement, vision, and core values
│ │ ├── ChapterHistory.tsx # Timeline of chapter founding and growth
│ │ ├── Achievements.tsx # Notable accomplishments/awards
│ │ └── NationalSHPE.tsx # Info about national SHPE
│ │
│ ├── board/ # Board members
│ │ ├── BoardGrid.tsx # Grid layout to display
│ │ ├── BoardMemberCard.tsx # Individual cards w/photo, name, position, and short bio
│ │ ├── BoardDescription.tsx # Explains roles
│ │ └── BoardMemberModal.tsx # Popup with detailed info - contact/LinkedIn
│ │
│ ├── events/  
│ │ ├── EventList.tsx # Fetches and displays events
│ │ ├── EventCard.tsx # Image, title, date, location, and description
│ │ ├── EventFilter.tsx # Filter by type/date, ex. workshop or social
│ │ └── PastEvents.tsx # Previous events w/ photos
│ │
│ ├── contact/ # Contact page components
│ │ ├── ContactInfo.tsx # Email, phone, office hours
│ │ ├── ContactForm.tsx # Automated? Form with name, email, subject, and message
│ │ ├── SocialLinks.tsx # Icon links to Instagram, LinkedIn, Facebook, NJIT Website
│ │ └── LocationMap.tsx # Embedded Google Maps showing NJIT
│ │
│ ├── membership/  
│ │ ├── MembershipForm.tsx # SHPE Application form
│ │ └── MembershipFAQ.tsx  
│ │
│ ├── common/ # Shared components across pages
│ │ ├── PageHeader.tsx # Page title and subtitle
│ │ ├── Button.tsx # Reusable button
│ │ ├── Card.tsx # Card w/ shadow and hover effects
│ │ └── Loader.tsx # Loading spinner
│ │
│ └── layout/  
│ ├── Navbar.tsx # Top navigation bar
│ ├── Footer.tsx # Bottom footer - social media, contact info
│ └── PageLayout.tsx  
│
├── services/  
│ ├── api.ts  
│ ├── boardService.ts  
│ ├── eventService.ts  
│ ├── contactService.ts  
│ └── authService.ts # login for admin
│
├── types/  
│ ├── index.ts  
│ ├── board.types.ts  
│ ├── event.types.ts  
│ ├── user.types.ts  
│ ├── api.types.ts  
│ └── form.types.ts  
│
├── hooks/  
│ ├── useAuth.ts  
│ ├── useFetch.ts  
│ ├── useForm.ts  
│ ├── useDebounce.ts  
│ └── useMediaQuery.ts # Detects screen size for design
│
├── utils/  
│ ├── dateHelpers.ts  
│ ├── validators.ts  
│ ├── formatters.ts  
│ └── constants.ts  
│
└── assets/  
 ├── images/  
 │ ├── logo.png # SHPE logo
│ ├── hero-bg.jpg # Background image
│ └── default-avatar.png # Default profile picture for w/o photos
└── styles/
└── global.css
