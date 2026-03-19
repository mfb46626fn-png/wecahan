# Components and Blocks

Bu dosya, site içinde kullanılacak component ve block yapısını tanımlar.

## Global Layout Components
### `SiteHeader`
İçerik:
- logo / wordmark
- nav links
- mobile menu toggle
- optional language switcher

### `SiteFooter`
İçerik:
- marka alanı
- kısa açıklama
- primary nav
- selected projects links
- legal links
- copyright

### `PageContainer`
Standart genişlik ve yatay padding sağlar.

### `SectionShell`
Her section için ortak spacing ve section header düzeni sağlar.

---

## Reusable UI Components
### `SectionHeading`
Props:
- eyebrow
- title
- description
- align

### `PrimaryButton`
Ana CTA.

### `SecondaryButton`
İkincil CTA.

### `StatusBadge`
Values:
- active
- in-development

### `ProjectCard`
Props:
- name
- description
- status
- category
- href

### `FocusCard`
Props:
- icon
- title
- description

### `FounderCard`
Props:
- name
- role
- description
- image optional

### `ValueCard`
About / mission / principles için kullanılabilir.

### `ContactForm`
Alanları ve state yönetimi kapsar.

### `NavLinkItem`
Desktop nav link.

### `MobileMenuPanel`
Mobil menü paneli.

---

## Home Page Blocks
### `HomeHeroBlock`
### `WhatWeBuildBlock`
### `AboutSnapshotBlock`
### `FocusAreasBlock`
### `SelectedProjectsBlock`
### `FoundersSnapshotBlock`
### `VisionMissionBlock`
### `FinalContactCtaBlock`

---

## About Page Blocks
### `AboutIntroBlock`
### `WhoWeAreBlock`
### `WhatWeBuildDetailBlock`
### `HowWeThinkBlock`
### `AboutFocusAreasBlock`
### `FoundersBlock`
### `AboutClosingBlock`

---

## Projects Page Blocks
### `ProjectsIntroBlock`
### `ProjectsGridBlock`
### `EcosystemNoteBlock`
### `ProjectsCtaBlock`

---

## Contact Page Blocks
### `ContactIntroBlock`
### `ContactFormBlock`
### `ContactInfoBlock`
### `CollaborationNoteBlock`

---

## Component Kuralları
- gereksiz component çoğaltma yok
- aynı iş için iki farklı component yazılmamalı
- section block'lar okunaklı olmalı
- UI ile content logic gereksiz yere iç içe girmemeli
- project data map üzerinden kartlar üretilebilmeli
