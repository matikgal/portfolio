import { Project } from "@/types";
import popstackImg from "@/assets/popstack.webp";
import vortexImg from "@/assets/vortex.webp";
import fluxboardImg from "@/assets/fluxboard.webp";
import workGridImg from "@/assets/workgrid.webp";
import ubb from "@/assets/ubb.webp";
import ubbOcena from "@/assets/ubbocena.webp";
import rekord from "@/assets/rekord.webp"

export const projectsData: Project[] = [
  
  {
    id: 1,
    title: "Work Grid System",
    description: {
      en: "A comprehensive work schedule management system replacing outdated spreadsheets. Enables schedule creation, leave management, and automatic hour calculation.",
      pl: "Kompleksowy system do zarządzania grafikami pracy zastępujący przestarzałe arkusze kalkulacyjne. Umożliwia tworzenie grafików, zarządzanie urlopami i automatyczne zliczanie godzin.",
    },
    challenge: {
      en: "Creating a modern 'command center' for teams that is efficient, responsive, and easy to use across various devices, improving upon manual spreadsheet processes.",
      pl: "Stworzenie nowoczesnego 'centrum dowodzenia' dla zespołów, które jest wydajne, responsywne i łatwe w obsłudze na różnych urządzeniach, usprawniające ręczne procesy na arkuszach.",
    },
    solution: {
      en: "Command Center style application with Dark Mode, built with React and TypeScript using Supabase as backend. Features interactive calendar, reporting, employee management, and realtime updates.",
      pl: "Aplikacja typu Command Center z trybem ciemnym, zbudowana w React i TypeScript z wykorzystaniem Supabase. Oferuje interaktywny kalendarz, raportowanie, zarządzanie pracownikami i aktualizacje w czasie rzeczywistym.",
    },
    features: [
      {
        en: "Interactive Calendar with Drag & Drop",
        pl: "Interaktywny kalendarz z Drag & Drop",
      },
      {
        en: "Shift & Absence Management",
        pl: "Zarządzanie zmianami i absencjami",
      },
      {
        en: "Automatic Monthly Reporting",
        pl: "Automatyczne raportowanie miesięczne",
      },
      { en: "Dark Mode Interface", pl: "Interfejs w trybie ciemnym" },
      { en: "Team Management", pl: "Zarządzanie zespołem" },
      { en: "Real-time updates", pl: "Aktualizacje w czasie rzeczywistym" },
    ],
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "Vite"],
    imageUrl: workGridImg,
    repoUrl: "https://github.com/matikgal/work-grid-system",
    demoUrl: "https://matikgal.github.io/work-grid-system/",
    isWorkInProgress: true,
    demoCredentials: {
      en: "Demo Account: Login: demo | Pass: demo",
      pl: "Konto Demo: Login: demo | Hasło: demo",
    },
  },
  {
    id: 2,
    title: "UBB Schedule",
    description: {
      en: "Mobile application for University of Bielsko-Biala students, providing quick access to class schedules and university news on the go.",
      pl: "Aplikacja mobilna dla studentów Uniwersytetu Bielsko-Bialskiego, zapewniająca szybki dostęp do planu zajęć i aktualności uniwersyteckich w biegu.",
    },
    challenge: {
      en: "Providing students with a seamless, mobile-optimized way to check their schedules, replacing the need to navigate cumbersome websites on small screens.",
      pl: "Zapewnienie studentom płynnego, zoptymalizowanego mobilnie sposobu na sprawdzanie planu zajęć, zastępując konieczność nawigowania po niewygodnych stronach na małych ekranach.",
    },
    solution: {
      en: "A native-feel mobile application designed for efficiency. Features a clean interface for viewing daily and weekly schedules, checking room numbers, and staying updated.",
      pl: "Aplikacja o natywnym odczuciu zaprojektowana dla wydajności. Posiada czysty interfejs do przeglądania planów dziennych i tygodniowych, sprawdzania numerów sal i bycia na bieżąco.",
    },
    features: [
      {
        en: "Mobile-optimized Schedule View",
        pl: "Zoptymalizowany mobilnie widok planu",
      },
      {
        en: "Quick Class Information",
        pl: "Szybka informacja o zajęciach",
      },
      {
        en: "University News Feed",
        pl: "Kanał aktualności uniwersyteckich",
      },
      { en: "Offline Access Support", pl: "Wsparcie dla dostępu offline" },
    ],
    tags: ["React", "TypeScript", "Mobile", "PWA"],
    imageUrl: ubb,
    repoUrl: "https://github.com/matikgal/ubb-schedule",
  },
  {
    id: 3,
    title: "Rekord Career Portal",
    description: {
      en: "A modern recruitment platform for Rekord Systemy Informatyczne, showcasing job offers, career paths, and organizational culture. Serves as a central hub for candidates with an intuitive application process.",
      pl: "Nowoczesna platforma rekrutacyjna dla firmy Rekord Systemy Informatyczne, prezentująca oferty pracy, ścieżki kariery oraz kulturę organizacyjną. Stanowi centralny punkt kontaktu dla kandydatów.",
    },
    challenge: {
      en: "Replacing static job listings with a dynamic, engaging Employer Branding experience that clearly communicates company values, recruitment steps, and streamlines the application process.",
      pl: "Zastąpienie statycznych ogłoszeń dynamicznym, angażującym doświadczeniem Employer Branding, które jasno komunikuje wartości firmy, kroki rekrutacji i usprawnia proces aplikacji.",
    },
    solution: {
      en: "Built with React, TypeScript, and Supabase. Features a dynamic job board filtered by technology, an interactive recruitment timeline, a dedicated Student Zone, video gallery, and a secure admin panel for real-time content management.",
      pl: "Zbudowana w React, TypeScript i Supabase. Zawiera dynamiczną tablicę ofert filtrowaną po technologiach, interaktywną oś czasu rekrutacji, dedykowaną Strefę Studenta, galerię wideo oraz bezpieczny panel administracyjny do zarządzania treścią w czasie rzeczywistym.",
    },
    features: [
      {
        en: "Dynamic Job Offers Database",
        pl: "Dynamiczna baza ofert pracy",
      },
      {
        en: "Interactive Recruitment Timeline",
        pl: "Interaktywna oś procesu rekrutacji",
      },
      {
        en: "Student & Internship Zone",
        pl: "Strefa studenta i praktyk",
      },
      {
        en: "Video Gallery & FAQ",
        pl: "Galeria wideo i FAQ",
      },
      {
        en: "CMS Admin Panel",
        pl: "Panel administracyjny CMS",
      },
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "Supabase", "Framer Motion"],
    imageUrl: rekord,
    repoUrl: "https://github.com/matikgal/carrer-rekord",
    demoUrl: "https://matikgal.github.io/carrer-rekord/",
  },
  {
    id: 4,
    title: "PopStack",
    description: {
      en: "A comprehensive entertainment tracking platform similar to Filmweb. Browse popular movies, games, and TV series, create watchlists and play queues, write reviews and ratings.",
      pl: "Kompleksowa platforma do śledzenia rozrywki podobna do Filmweb. Przeglądaj popularne filmy, gry i seriale, twórz kolejki do obejrzenia/zagrania, pisz recenzje i oceny.",
    },
    challenge: {
      en: "Creating a unified platform for tracking different types of entertainment (movies, games, series) while maintaining a consistent user experience. Managing complex user interactions like friend profiles, statistics, and personalized recommendations.",
      pl: "Stworzenie zunifikowanej platformy do śledzenia różnych typów rozrywki (filmy, gry, seriale) przy zachowaniu spójnego doświadczenia użytkownika. Zarządzanie złożonymi interakcjami jak profile znajomych, statystyki i personalizowane rekomendacje.",
    },
    solution: {
      en: "Built a modular architecture that handles different content types with shared components. Integrated Supabase as the backend database for storing user data, reviews, ratings, watchlists, and social connections. Implemented user authentication, social features for following friends and viewing their profiles, comprehensive statistics tracking, and theme customization with dark/light modes and multi-language support.",
      pl: "Zbudowałem modularną architekturę obsługującą różne typy treści ze współdzielonymi komponentami. Zintegrowałem Supabase jako bazę danych backend do przechowywania danych użytkowników, recenzji, ocen, kolejek i połączeń społecznościowych. Zaimplementowałem uwierzytelnianie użytkowników, funkcje społecznościowe do obserwowania znajomych i przeglądania ich profili, kompleksowe śledzenie statystyk oraz personalizację motywów z trybem ciemnym/jasnym i obsługą wielu języków.",
    },
    features: [
      {
        en: "Browse popular movies, games, and TV series",
        pl: "Przeglądaj popularne filmy, gry i seriale",
      },
      {
        en: "Create watchlists and play queues",
        pl: "Twórz kolejki do obejrzenia i zagrania",
      },
      { en: "Write reviews and ratings", pl: "Pisz recenzje i oceny" },
      {
        en: "Follow friends and view their profiles",
        pl: "Obserwuj znajomych i przeglądaj ich profile",
        },
      { en: "Track personal statistics", pl: "Śledź osobiste statystyki" },
      { en: "Dark/Light theme support", pl: "Obsługa motywu ciemnego/jasnego" },
      { en: "Multi-language support", pl: "Obsługa wielu języków" },
    ],
    tags: ["React", "TypeScript", "Tailwind", "Supabase", "API Integration"],
    imageUrl: popstackImg,
    repoUrl: "https://github.com/matikgal/popstack",
    demoUrl: "https://matikgal.github.io/pop-stack/",
  },
  {
    id: 5,
    title: "UBB Staff Assessment System",
    description: {
      en: "A comprehensive digital platform for periodic academic staff assessment. The tool automates achievement data collection, enables verification, and generates reports, replacing paper documentation with a modern web interface.",
      pl: "Kompleksowa platforma cyfrowa do obsługi procesu okresowej oceny pracowników naukowo-dydaktycznych. Narzędzie automatyzuje zbieranie danych o osiągnięciach, umożliwia ich weryfikację oraz generowanie raportów.",
    },
    challenge: {
      en: "Streamlining university administrative processes and creating a central hub for recording didactic, scientific, and organizational achievements.",
      pl: "Usprawnienie procesów administracyjnych na uczelni i stworzenie centralnego huba dla pracowników do ewidencji sukcesów dydaktycznych, naukowych i organizacyjnych.",
    },
    solution: {
      en: "Application allowing dynamic assessment criteria management, integrated with Keycloak SSO and Firebase for security. Includes dedicated panels for Staff, Deans, and Admins.",
      pl: "Aplikacja umożliwiająca dynamiczne zarządzanie kryteriami oceny, zintegrowana z SSO Keycloak i Firebase. Posiada dedykowane panele dla Pracowników, Dziekanów i Administratorów.",
    },
    features: [
      {
        en: "Multidimensional Survey (Didactics, Science, Organization)",
        pl: "Wielowymiarowa Ankieta (Dydaktyka, Nauka, Organizacja)",
      },
      {
        en: "Keycloak SSO Integration",
        pl: "Integracja SSO Keycloak",
      },
      {
        en: "Dynamic Question Management",
        pl: "Zarządzanie Pytaniami",
      },
      {
        en: "Role-based Access Control",
        pl: "System Uprawnień i ról",
      },
      {
        en: "Library Records Integration",
        pl: "Ewidencja Biblioteczna",
      },
    ],
    tags: ["React", "TypeScript", "TailwindCSS", "Firebase", "Keycloak"],
    imageUrl: ubbOcena,
    repoUrl: "https://github.com/matikgal/UBB-ocena-pracownika",
  },
  {
    id: 6,
    title: "VORTEX",
    description: {
      en: 'A fully interactive "Awwwards-style" portfolio showcasing advanced frontend capabilities. Combines brutalism and acid design aesthetics with cutting-edge web technologies like WebGL.',
      pl: 'W pełni interaktywne portfolio w stylu "Awwwards", prezentujące zaawansowane możliwości frontendu. Łączy estetykę brutalizmu i acid design z najnowszymi technologiami webowymi jak WebGL.',
    },
    challenge: {
      en: "Creating an immersive, unique user experience that demonstrates creative development skills, 3D animations, and complex interaction design while maintaining performance and usability.",
      pl: "Stworzenie immersyjnego, unikalnego doświadczenia użytkownika, które demonstruje umiejętności kreatywnego developmentu, animacji 3D i złożonego projektowania interakcji przy zachowaniu wydajności i użyteczności.",
    },
    solution: {
      en: "Built with React and TypeScript, leveraging Three.js for 3D graphics and WebGL rendering. Implemented smooth animations with Framer Motion, custom scroll interactions using Lenis, and styled with Tailwind CSS for a modern, performant interface.",
      pl: "Zbudowane w React i TypeScript, wykorzystujące Three.js do grafiki 3D i renderowania WebGL. Zaimplementowałem płynne animacje z Framer Motion, niestandardowe interakcje przewijania przy użyciu Lenis oraz stylizację z Tailwind CSS dla nowoczesnego, wydajnego interfejsu.",
    },
    features: [
      {
        en: "3D graphics with Three.js and WebGL",
        pl: "Grafika 3D z Three.js i WebGL",
      },
      {
        en: "Advanced animations with Framer Motion",
        pl: "Zaawansowane animacje z Framer Motion",
      },
      {
        en: "Smooth scroll interactions with Lenis",
        pl: "Płynne interakcje przewijania z Lenis",
      },
      {
        en: "Brutalism and acid design aesthetics",
        pl: "Estetyka brutalizmu i acid design",
      },
      {
        en: "Immersive user experience",
        pl: "Immersyjne doświadczenie użytkownika",
      },
    ],
    tags: [
      "React",
      "TypeScript",
      "Three.js",
      "WebGL",
      "Framer Motion",
      "Tailwind",
    ],
    imageUrl: vortexImg,
    repoUrl: "https://github.com/matikgal/vortex-portfolio",
    demoUrl: "https://matikgal.github.io/vortex-portfolio/",
    isExperimental: true,
  },
  {
    id: 7,
    title: "FluxBoard",
    description: {
      en: "An experimental, minimalist Kanban project management application emphasizing unique design, typography, and interaction inspired by digital brutalism and Swiss Style.",
      pl: "Eksperymentalna, minimalistyczna aplikacja Kanban do zarządzania projektami, kładąca nacisk na unikalny design, typografię i interakcję inspirowaną brutalizmem cyfrowym i Swiss Style.",
    },
    challenge: {
      en: "Moving away from traditional office tool aesthetics to create a performant drag-and-drop interface with a raw, brutalist design while maintaining usability and smooth interactions.",
      pl: "Odejście od tradycyjnej estetyki narzędzi biurowych, aby stworzyć wydajny interfejs drag-and-drop z surowym, brutalistycznym designem przy zachowaniu użyteczności i płynnych interakcji.",
    },
    solution: {
      en: "Built with React 19 and TypeScript, featuring a fully typed architecture. Implemented dual themes (Void dark and Paper light), comprehensive task management with subtasks, tags, priorities, time tracking, and audit logs. All data persists automatically in LocalStorage with support for keyboard shortcuts and real-time filtering.",
      pl: "Zbudowane w React 19 i TypeScript z w pełni typowaną architekturą. Zaimplementowałem podwójne motywy (Void ciemny i Paper jasny), kompleksowe zarządzanie zadaniami z podzadaniami, tagami, priorytetami, śledzeniem czasu i historią zmian. Wszystkie dane zapisują się automatycznie w LocalStorage z obsługą skrótów klawiszowych i filtrowaniem w czasie rzeczywistym.",
    },
    features: [
      {
        en: "Smooth drag-and-drop task management",
        pl: "Płynne przeciąganie i upuszczanie zadań",
      },
      {
        en: "Dual themes: Void (dark) and Paper (light)",
        pl: "Podwójne motywy: Void (ciemny) i Paper (jasny)",
      },
      {
        en: "Subtasks, tags, and prioritization",
        pl: "Podzadania, tagi i priorytetyzacja",
      },
      {
        en: "Time tracking and audit log",
        pl: "Śledzenie czasu i historia zmian",
      },
      {
        en: "Column collapsing (Focus Mode)",
        pl: "Zwijanie kolumn (Tryb Skupienia)",
      },
      { en: "Keyboard shortcuts support", pl: "Obsługa skrótów klawiszowych" },
      { en: "Real-time filtering", pl: "Filtrowanie w czasie rzeczywistym" },
      {
        en: "Automatic LocalStorage persistence",
        pl: "Automatyczny zapis w LocalStorage",
      },
    ],
    tags: ["React", "TypeScript", "Tailwind", "Brutalism", "Swiss Style"],
    imageUrl: fluxboardImg,
    repoUrl: "https://github.com/matikgal/kanban-system",
    demoUrl: "https://matikgal.github.io/kanban-system/",
  },
];
