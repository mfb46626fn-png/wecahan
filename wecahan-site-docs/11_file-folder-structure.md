# File & Folder Structure

Aşağıdaki yapı, modern component tabanlı site düzeni için önerilen klasör mimarisidir.

## Önerilen Yapı
```txt
src/
  app/
    page.tsx
    about/
      page.tsx
    projects/
      page.tsx
    contact/
      page.tsx
    layout.tsx

  components/
    layout/
      site-header.tsx
      site-footer.tsx
      page-container.tsx
      section-shell.tsx

    ui/
      section-heading.tsx
      primary-button.tsx
      secondary-button.tsx
      status-badge.tsx

    cards/
      project-card.tsx
      focus-card.tsx
      founder-card.tsx
      value-card.tsx

    forms/
      contact-form.tsx

    blocks/
      home/
        home-hero-block.tsx
        what-we-build-block.tsx
        about-snapshot-block.tsx
        focus-areas-block.tsx
        selected-projects-block.tsx
        founders-snapshot-block.tsx
        vision-mission-block.tsx
        final-contact-cta-block.tsx

      about/
        about-intro-block.tsx
        who-we-are-block.tsx
        what-we-build-detail-block.tsx
        how-we-think-block.tsx
        about-focus-areas-block.tsx
        founders-block.tsx
        about-closing-block.tsx

      projects/
        projects-intro-block.tsx
        projects-grid-block.tsx
        ecosystem-note-block.tsx
        projects-cta-block.tsx

      contact/
        contact-intro-block.tsx
        contact-form-block.tsx
        contact-info-block.tsx
        collaboration-note-block.tsx

  data/
    projects.ts
    focus-areas.ts
    founders.ts
    navigation.ts

  content/
    home.ts
    about.ts
    contact.ts

  lib/
    utils.ts
```

## Mantık
### `app/`
Route seviyesindeki page dosyaları.
Sadece compositional iş yapmalı.
Ağır içerik burada dağılmamalı.

### `components/layout/`
Tüm sayfalarda tekrar eden iskelet parçaları.

### `components/ui/`
Atomik ve tekrar kullanılabilir küçük UI parçaları.

### `components/cards/`
Kart odaklı tekrar kullanılabilir görsel bileşenler.

### `components/forms/`
Form logic / UI bileşenleri.

### `components/blocks/`
Sayfa section'ları.
Asıl sayfa inşası burada yapılmalı.

### `data/`
Map'lenebilir sabit veri yapıları.
Projeler, odak alanları, navigasyon gibi.

### `content/`
Sayfa seviyesindeki ana metin blokları.
TR/EN desteği gelirse burada locale bazlı da ayrılabilir.

## Kurallar
- page dosyaları şişmeyecek
- her section ayrı block olacak
- bloklar içinde küçük reusable component'ler kullanılacak
- static data component içine gömülmeyecek
