# Bileşen Envanteri

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde kullanılacak bileşenlerin **tam listesini**, **rollerini**, **hangi sayfalarda kullanılacaklarını**, **shared mi yoksa page-specific mi olduklarını**, **hangi veriyle besleneceklerini** ve **hangi düzeyde soyutlanmaları gerektiğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- gereksiz veya çakışan component üretimi azalır
- aynı işi yapan farklı bileşenler çoğalmaz
- shared ve block yapısı daha net kurulur
- Cursor’a “hangi component nereye ait” konusu daha sağlıklı aktarılır
- uygulama sırasında mimari dağınıklık önlenir

Bu belge, WeCaHan tasarım sisteminin uygulamaya dönük bileşen haritasını tanımlar.

---

## Temel Bileşen Mimarisi Kararı
WeCaHan sitesinde bileşenler iki ana seviyede kurgulanacaktır:

### 1. Shared Bileşenler
Site genelinde birden fazla sayfada tekrar kullanılan, tasarım sistemi taşıyan bileşenler.

### 2. Block / Page-Specific Bileşenler
Belirli bir sayfanın veya belirli bir section’ın ihtiyacını çözen daha bağlamsal bileşenler.

### Kural
Önce shared kullanılabilecek yapı düşünülmeli, yalnızca gerçekten gerektiğinde page-specific block üretilmelidir.

---

## Önerilen Klasör Mantığı

```txt
components/
  shared/
    layout/
    navigation/
    ui/
    sections/
  blocks/
    home/
    about/
    projects/
    project-detail/
    contact/
    legal/
````

### Kural

Component envanteri bu klasör mantığı ile uyumlu ilerlemelidir.

---

# SHARED BİLEŞENLER

## 1. SiteHeader

### Tür

Shared

### Klasör önerisi

`components/shared/navigation/site-header.tsx`

### Rolü

* üst navigasyonu sunar
* logo / marka alanını taşır
* About / Projects / Contact linklerini içerir
* dil değiştiriciyi barındırır

### Kullanıldığı sayfalar

* Home
* About
* Projects
* tüm project detail sayfaları
* Contact
* Privacy Policy
* Terms of Service

### Ana içerikleri

* logo / brand link
* nav items
* locale switcher
* mobil menü tetikleyici

### Props / veri ihtiyacı

* current locale
* nav items
* brand label
* current path / active route bilgisi
* locale switcher state

### Not

SiteHeader mümkün olduğunca sade ve global bileşen olmalıdır.

---

## 2. MobileNav

### Tür

Shared

### Klasör önerisi

`components/shared/navigation/mobile-nav.tsx`

### Rolü

* mobil cihazlarda ana navigasyonu sunar
* masaüstü header ile aynı link mantığını korur

### Kullanıldığı sayfalar

* tüm ana sayfalar
* legal sayfalar

### İçerikleri

* About
* Projects
* Contact
* locale switch

### Props / veri ihtiyacı

* nav items
* locale
* close/open state
* current path

### Not

Aşırı karmaşık drawer yapısı olmayacaktır.

---

## 3. LanguageSwitcher

### Tür

Shared

### Klasör önerisi

`components/shared/navigation/language-switcher.tsx`

### Rolü

* TR / EN geçişini sağlar
* kullanıcıyı mümkünse aynı sayfanın diğer diline taşır

### Kullanıldığı sayfalar

* header
* gerekirse footer veya mobil menü

### Props / veri ihtiyacı

* current locale
* current pathname
* route params

### Not

Bayrak, aşırı ikon veya dekor şart değildir.
Temiz ve net kalmalıdır.

---

## 4. SiteFooter

### Tür

Shared

### Klasör önerisi

`components/shared/layout/site-footer.tsx`

### Rolü

* kurumsal kapanışı yapar
* navigasyon, projeler ve legal linkleri sunar
* kısa marka açıklamasını taşır

### Kullanıldığı sayfalar

* tüm site

### İçerikleri

* brand block
* nav links
* project links
* legal links
* copyright line

### Props / veri ihtiyacı

* locale
* footer navigation data
* project links
* legal links
* short brand copy

### Not

Footer global bileşen olarak düşünülmeli, içerik veri dosyasından beslenmelidir.

---

## 5. PageContainer

### Tür

Shared

### Klasör önerisi

`components/shared/layout/page-container.tsx`

### Rolü

* ana içerik genişliğini kontrol eder
* section’lar için ortak container mantığı sağlar

### Kullanıldığı sayfalar

* tüm sayfalar

### Props / veri ihtiyacı

* width variant (wide / default / narrow)
* className override

### Not

Layout düzeni için utility kaosu yerine sistemli container mantığı sağlamak amacıyla kullanılabilir.

---

## 6. Section

### Tür

Shared

### Klasör önerisi

`components/shared/layout/section.tsx`

### Rolü

* section spacing ve yapısal ritmi standartlaştırır
* üst / alt boşlukları kontrollü hale getirir

### Kullanıldığı sayfalar

* Home
* About
* Projects
* Project detail pages
* Contact
* Legal pages

### Props / veri ihtiyacı

* spacing variant
* background variant
* container variant
* id (anchor gerekiyorsa)

### Not

Bu bileşen, section spacing sistemini korumak için çok yararlı olur.

---

## 7. PageHero

### Tür

Shared

### Klasör önerisi

`components/shared/sections/page-hero.tsx`

### Rolü

* iç sayfa hero alanlarını standartlaştırır
* başlık + alt metin + opsiyonel status / CTA mantığını taşır

### Kullanıldığı sayfalar

* About
* Projects
* Contact
* Privacy Policy
* Terms of Service
* project detail pages (varyantla)

### Props / veri ihtiyacı

* title
* description
* eyebrow (opsiyonel)
* status (opsiyonel)
* actions (opsiyonel)
* align / width variant

### Not

Home hero ayrı block olabilir; ama iç sayfa hero’ları için shared yapı mantıklıdır.

---

## 8. SectionIntro

### Tür

Shared

### Klasör önerisi

`components/shared/sections/section-intro.tsx`

### Rolü

* section başlığı + kısa açıklama bloğunu standartlaştırır

### Kullanıldığı sayfalar

* Home
* About
* Projects
* project detail pages
* Contact

### Props / veri ihtiyacı

* eyebrow (opsiyonel)
* title
* description
* align
* maxWidth variant

### Not

Section intro, WeCaHan’daki section kalitesinin ana taşıyıcılarından biridir.

---

## 9. CTASection

### Tür

Shared

### Klasör önerisi

`components/shared/sections/cta-section.tsx`

### Rolü

* sayfa sonu veya section sonu CTA alanlarını taşır

### Kullanıldığı sayfalar

* Home
* About
* Projects
* project detail sayfaları

### Props / veri ihtiyacı

* title
* description
* primary action
* secondary action (opsiyonel)
* variant

### Not

CTASection satış bloğu gibi değil, yönlendirme alanı gibi görünmelidir.

---

## 10. Button

### Tür

Shared

### Klasör önerisi

`components/shared/ui/button.tsx`
veya mevcut `ui/button` yapısına bağlı kalınabilir

### Rolü

* birincil ve ikincil eylemleri sunar

### Kullanıldığı sayfalar

* tüm site

### Props / veri ihtiyacı

* variant
* size
* href / onClick
* icon (opsiyonel)
* external state (opsiyonel)

### Varyantlar

* primary
* secondary
* ghost / link

### Not

Yeni özel butonlar üretmek yerine bu sistem genişletilmelidir.

---

## 11. Badge

### Tür

Shared

### Klasör önerisi

`components/shared/ui/badge.tsx`

### Rolü

* küçük etiketler, özellikle status gösterimi için temel yapı sağlar

### Kullanıldığı sayfalar

* project cards
* detail hero
* küçük info alanları

### Props / veri ihtiyacı

* text / children
* variant
* size

### Not

Status badge için özel sarmalayıcı bileşen olabilir; ama temel badge shared tutulmalıdır.

---

## 12. ProjectStatusBadge

### Tür

Shared

### Klasör önerisi

`components/shared/ui/project-status-badge.tsx`

### Rolü

* Active / In Development gösterimini standartlaştırır

### Kullanıldığı sayfalar

* Home selected projects
* Projects page
* project detail hero
* gerekiyorsa küçük info blokları

### Props / veri ihtiyacı

* status
* locale
* size / variant

### Not

Status dilinin ve görsel sistemin dağılmaması için ayrı bileşen olması doğru olur.

---

## 13. Breadcrumb / BackLink

### Tür

Shared

### Klasör önerisi

`components/shared/navigation/breadcrumb.tsx`
veya
`components/shared/navigation/back-link.tsx`

### Rolü

* project detail sayfalarında geri dönüş ve bağlam sağlar

### Kullanıldığı sayfalar

* project detail pages
* gerekirse legal sayfalar

### Props / veri ihtiyacı

* label
* href
* items (breadcrumb ise)
* locale

### Not

Minimal tutulmalıdır.

---

## 14. Card Base

### Tür

Shared

### Klasör önerisi

`components/shared/ui/card.tsx`
veya mevcut `ui/card` sistemi

### Rolü

* capability, founder, info ve bazı content bloklarının temel yüzey sistemini sağlar

### Kullanıldığı sayfalar

* Home
* About
* Projects
* detail pages

### Props / veri ihtiyacı

* variant
* padding
* className
* children

### Not

Tüm kartlar tam aynı olmak zorunda değil; ama aynı temel yüzey mantığından türemelidir.

---

## 15. InfoNote

### Tür

Shared

### Klasör önerisi

`components/shared/ui/info-note.tsx`

### Rolü

* küçük bilgi notları
* status açıklamaları
* ekosistem notları
* privacy / small disclaimers

### Kullanıldığı sayfalar

* Projects
* project detail pages
* Contact
* legal pages

### Props / veri ihtiyacı

* title (opsiyonel)
* text
* variant

### Not

Küçük bilgi blokları için tekrar tekrar özel UI yazmamak adına yararlıdır.

---

## 16. FormField

### Tür

Shared

### Klasör önerisi

`components/shared/ui/form-field.tsx`

### Rolü

* label + input + helper text + error text yapısını standartlaştırır

### Kullanıldığı sayfalar

* Contact

### Props / veri ihtiyacı

* label
* name
* required
* placeholder
* helperText
* error
* input type
* textarea state

### Not

Form alanları tek bir kalite çizgisinde görünmelidir.

---

## 17. FormStatusMessage

### Tür

Shared

### Klasör önerisi

`components/shared/ui/form-status-message.tsx`

### Rolü

* success / error / info mesajlarını standartlaştırır

### Kullanıldığı sayfalar

* Contact form

### Props / veri ihtiyacı

* type
* title (opsiyonel)
* message

### Not

Teknik hata dump’ı yerine insan dostu görünmelidir.

---

## 18. LegalContentLayout

### Tür

Shared

### Klasör önerisi

`components/shared/layout/legal-content-layout.tsx`

### Rolü

* legal sayfalarda dar içerik genişliği, başlık hiyerarşisi ve section düzenini standartlaştırır

### Kullanıldığı sayfalar

* Privacy Policy
* Terms of Service

### Props / veri ihtiyacı

* title
* updatedAt (opsiyonel)
* children

### Not

Legal sayfaların kalitesini ciddi biçimde artırır.

---

## 19. LegalSection

### Tür

Shared

### Klasör önerisi

`components/shared/sections/legal-section.tsx`

### Rolü

* legal sayfalardaki başlık + paragraf bloklarını düzenler

### Kullanıldığı sayfalar

* Privacy Policy
* Terms of Service

### Props / veri ihtiyacı

* title
* children
* id (opsiyonel)

### Not

Uzun legal içeriği düzenli taşıyan küçük ama faydalı bileşendir.

---

# BLOCK / PAGE-SPECIFIC BİLEŞENLER

## HOME BLOKLARI

## 20. HomeHeroBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/home/home-hero-block.tsx`

### Rolü

* ana sayfanın en güçlü giriş alanını taşır
* WeCaHan marka tanımını, alt metni ve CTA’ları içerir

### Kullanıldığı sayfa

* Home

### İçerikleri

* hero title
* hero description
* primary + secondary CTA
* opsiyonel sağ görsel alan

### Veri ihtiyacı

* localized hero copy
* CTA links
* optional visual variant

### Not

Home hero, diğer page hero’lardan ayrı ele alınmalıdır.

---

## 21. CapabilityGridBlock

### Tür

Page-specific veya shared-section block

### Klasör önerisi

`components/blocks/home/capability-grid-block.tsx`

### Rolü

* Home’daki “Ne İnşa Ediyoruz” alanını taşır

### Kullanıldığı sayfa

* Home

### İçerikleri

* section intro
* capability cards grid

### Veri ihtiyacı

* capability items array

### Not

About’taki odak alanları ile ortaklaşabilir; ama farklı copy ihtiyacı varsa ayrı block kalabilir.

---

## 22. AboutSnapshotBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/home/about-snapshot-block.tsx`

### Rolü

* Home içindeki kısa marka özeti bölümünü taşır

### Kullanıldığı sayfa

* Home

### İçerikleri

* short about copy
* CTA to About

### Veri ihtiyacı

* localized section copy
* CTA link

---

## 23. SelectedProjectsBlock

### Tür

Page-specific ama data-driven

### Klasör önerisi

`components/blocks/home/selected-projects-block.tsx`

### Rolü

* Home içindeki seçili proje alanını taşır

### Kullanıldığı sayfa

* Home

### İçerikleri

* section intro
* project cards
* section CTA

### Veri ihtiyacı

* projects array
* locale
* CTA config

### Not

Proje verisi `data/projects` benzeri merkezden gelmelidir.

---

## 24. FoundersSnapshotBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/home/founders-snapshot-block.tsx`

### Rolü

* Home’daki kısa founder alanını taşır

### Kullanıldığı sayfa

* Home

### İçerikleri

* section intro
* founder cards
* optional CTA to About

### Veri ihtiyacı

* founders array
* localized copy

---

## ABOUT BLOKLARI

## 25. AboutOverviewBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/about/about-overview-block.tsx`

### Rolü

* About sayfasındaki company overview metin bloğunu taşır

### Kullanıldığı sayfa

* About

### İçerikleri

* section intro
* text columns / text content

### Veri ihtiyacı

* overview copy array / paragraphs

---

## 26. MissionVisionBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/about/mission-vision-block.tsx`

### Rolü

* misyon ve vizyon bloklarını sunar

### Kullanıldığı sayfa

* About

### İçerikleri

* mission card
* vision card

### Veri ihtiyacı

* mission text
* vision text

---

## 27. PrinciplesBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/about/principles-block.tsx`

### Rolü

* çalışma yaklaşımı / prensipler alanını sunar

### Kullanıldığı sayfa

* About

### İçerikleri

* section intro
* principle cards

### Veri ihtiyacı

* principle items array

---

## 28. FocusAreasBlock

### Tür

Page-specific veya shared-section block

### Klasör önerisi

`components/blocks/about/focus-areas-block.tsx`

### Rolü

* About’taki odak alanları bölümünü taşır

### Kullanıldığı sayfa

* About

### İçerikleri

* section intro
* focus area cards

### Veri ihtiyacı

* focus area items array

---

## 29. FoundersBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/about/founders-block.tsx`

### Rolü

* About sayfasındaki daha geniş founder alanını sunar

### Kullanıldığı sayfa

* About

### İçerikleri

* section intro
* founder cards
* optional extra copy

### Veri ihtiyacı

* founders array
* localized copy

---

## PROJECTS BLOKLARI

## 30. ProjectsGridBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/projects/projects-grid-block.tsx`

### Rolü

* Projects sayfasındaki ana grid alanını taşır

### Kullanıldığı sayfa

* Projects

### İçerikleri

* section intro
* project cards grid

### Veri ihtiyacı

* projects array
* locale

### Not

Projects sayfasının ana omurgasıdır.

---

## 31. ProjectCard

### Tür

Shared veya projects-specific shared component

### Klasör önerisi

`components/blocks/projects/project-card.tsx`
veya
`components/shared/cards/project-card.tsx`

### Rolü

* proje adı, durum, kısa açıklama ve CTA’yı gösterir

### Kullanıldığı sayfalar

* Home selected projects
* Projects page
* belki related project alanları

### Props / veri ihtiyacı

* name
* slug
* status
* shortDescription
* detailHref
* externalHref (opsiyonel)

### Not

Veri modeli ile çok sıkı bağlı olmalıdır.

---

## 32. EcosystemNoteBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/projects/ecosystem-note-block.tsx`

### Rolü

* Projects sayfasındaki status ve ekosistem açıklama alanını taşır

### Kullanıldığı sayfa

* Projects

### İçerikleri

* kısa info metni
* statü açıklaması

### Veri ihtiyacı

* localized copy

---

## PROJECT DETAIL BLOKLARI

## 33. ProjectDetailHero

### Tür

Page-specific family / reusable within detail pages

### Klasör önerisi

`components/blocks/project-detail/project-detail-hero.tsx`

### Rolü

* proje adı
* status
* kısa positioning
* açıklama
* CTA’ları taşır

### Kullanıldığı sayfalar

* We CaHan Auto detail
* Prificient detail
* Prificient Tools detail

### Props / veri ihtiyacı

* name
* status
* heroDescription
* primary action
* secondary action
* eyebrow (opsiyonel)

### Not

Detail sayfaları arasında yeniden kullanılabilir olmalıdır.

---

## 34. ProjectOverviewBlock

### Tür

Reusable detail block

### Klasör önerisi

`components/blocks/project-detail/project-overview-block.tsx`

### Rolü

* proje overview metnini sunar

### Kullanıldığı sayfalar

* tüm project detail sayfaları

### Props / veri ihtiyacı

* title
* paragraphs

---

## 35. ProjectCapabilitiesBlock

### Tür

Reusable detail block

### Klasör önerisi

`components/blocks/project-detail/project-capabilities-block.tsx`

### Rolü

* capability / value / direction kartlarını sunar

### Kullanıldığı sayfalar

* tüm project detail sayfaları

### Props / veri ihtiyacı

* title
* items array

---

## 36. ProjectContextBlock

### Tür

Reusable detail block

### Klasör önerisi

`components/blocks/project-detail/project-context-block.tsx`

### Rolü

* kimler için / kullanım bağlamı / problem alanı gibi metinleri taşır

### Kullanıldığı sayfalar

* detail sayfalarına göre değişir

### Props / veri ihtiyacı

* title
* content
* variant (problem / audience / context)

---

## 37. ProjectStatusInfoBlock

### Tür

Reusable detail block

### Klasör önerisi

`components/blocks/project-detail/project-status-info-block.tsx`

### Rolü

* mevcut durum / geliştirme aşaması / active alan notunu taşır

### Kullanıldığı sayfalar

* özellikle Prificient
* We CaHan Auto
* Prificient Tools

### Props / veri ihtiyacı

* title
* status
* text blocks

### Not

Status dilini tutarlı korumak için yararlıdır.

---

## 38. ProjectBrandConnectionBlock

### Tür

Reusable detail block

### Klasör önerisi

`components/blocks/project-detail/project-brand-connection-block.tsx`

### Rolü

* projenin WeCaHan ile bağını açıklar

### Kullanıldığı sayfalar

* tüm project detail sayfaları

### Props / veri ihtiyacı

* title
* description
* optional related links

---

## 39. ProjectCTASection

### Tür

Reusable detail block veya CTASection varyantı

### Klasör önerisi

`components/blocks/project-detail/project-cta-section.tsx`

### Rolü

* detail page sonunda dış site / contact / back link CTA’larını taşır

### Kullanıldığı sayfalar

* tüm project detail sayfaları

### Props / veri ihtiyacı

* title
* description
* primary action
* secondary action

---

## CONTACT BLOKLARI

## 40. ContactIntroBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/contact/contact-intro-block.tsx`

### Rolü

* Contact sayfasındaki kısa açıklama alanını taşır

### Kullanıldığı sayfa

* Contact

### İçerikleri

* heading
* short copy

### Veri ihtiyacı

* localized copy

---

## 41. ContactFormBlock

### Tür

Page-specific

### Klasör önerisi

`components/blocks/contact/contact-form-block.tsx`

### Rolü

* contact form layout’unu, alanlarını ve submit davranışını taşır

### Kullanıldığı sayfa

* Contact

### İçerikleri

* form fields
* button
* success/error state

### Veri ihtiyacı

* labels
* placeholders
* submit handler
* validation messages

### Not

Bu block logic içerebilir; UI ve action katmanı ayrılmalıdır.

---

## 42. ContactInfoNoteBlock

### Tür

Page-specific veya shared info note varyantı

### Klasör önerisi

`components/blocks/contact/contact-info-note-block.tsx`

### Rolü

* privacy / iletişim notunu taşır

### Kullanıldığı sayfa

* Contact

### Veri ihtiyacı

* short note
* optional privacy link

---

## LEGAL BLOKLARI

## 43. LegalHeroBlock

### Tür

Page-specific family

### Klasör önerisi

`components/blocks/legal/legal-hero-block.tsx`

### Rolü

* legal sayfalar için başlık + kısa açıklama + son güncelleme alanını taşır

### Kullanıldığı sayfalar

* Privacy Policy
* Terms of Service

### Props / veri ihtiyacı

* title
* description
* updatedAt (opsiyonel)

---

## 44. LegalSectionsRenderer

### Tür

Page-specific / data-driven

### Klasör önerisi

`components/blocks/legal/legal-sections-renderer.tsx`

### Rolü

* legal section listesini veri odaklı biçimde render eder

### Kullanıldığı sayfalar

* Privacy Policy
* Terms of Service

### Props / veri ihtiyacı

* sections array
* locale

### Not

Legal sayfaların bakımını kolaylaştırır.

---

## 45. LegalUpdateNote

### Tür

Shared veya legal-specific

### Klasör önerisi

`components/blocks/legal/legal-update-note.tsx`

### Rolü

* son güncelleme veya policy note satırını taşır

### Kullanıldığı sayfalar

* Privacy Policy
* Terms of Service

### Props / veri ihtiyacı

* label
* date

---

# VERİ İLE BESLENECEK ANA BİLEŞENLER

Aşağıdaki bileşenlerin içerikleri mümkün olduğunca data/config yapısından beslenmelidir:

* SiteHeader
* SiteFooter
* HomeHeroBlock
* CapabilityGridBlock
* SelectedProjectsBlock
* ProjectsGridBlock
* ProjectCard
* ProjectDetailHero
* ProjectOverviewBlock
* ProjectCapabilitiesBlock
* ProjectStatusInfoBlock
* ProjectBrandConnectionBlock
* ContactIntroBlock
* LegalSectionsRenderer

### Kural

Copy’ler doğrudan page dosyalarına gömülmemelidir.

---

# COMPONENT OLUŞTURMA KURALLARI

## Yeni bileşen açmadan önce sorulacak sorular

1. Bu gerçekten yeni bir bileşen mi?
2. Mevcut shared yapıyla çözülebilir mi?
3. Bu bir block mu, yoksa UI primitive mi?
4. İçerik odaklı mı, yapı odaklı mı?
5. Sadece bu sayfaya mı ait?

### Kural

“Her section için yeni özel komponent” refleksi kontrol edilmelidir.

---

## Component İsimlendirme İlkeleri

İsimlendirme:

* açık
* görev odaklı
* sade
  olmalıdır

### Doğru örnekler

* SiteHeader
* SiteFooter
* ProjectCard
* ProjectDetailHero
* ContactFormBlock
* MissionVisionBlock

### Yanlış örnekler

* SuperHero
* FancyCard
* PremiumPanel
* FutureGrid
* SmartWidget

WeCaHan bileşen isimleri havalı değil, anlaşılır olmalıdır.

---

## Component Envanterinde Kaçınılacak Hatalar

### 1. Aynı işi yapan birden fazla bileşen

Örnek:

* ProjectCard
* ProjectPreviewCard
* FeaturedProjectCard
* MiniProjectCard

Bunlar kontrolsüz çoğalmamalıdır.

### 2. Fazla soyutlama

Henüz ihtiyaç yokken sistem gereğinden fazla bölünmemelidir.

### 3. Fazla page-coupled yapı

Her bileşeni sayfa içine gömmek de bakım sorununa yol açar.

### 4. İçerik ve görünümü gereksiz karıştırmak

Bazı bileşenler data-driven olmalı; her şeyi JSX içine sert gömmek yanlış olur.

---

## Minimum Başlangıç Seti

İlk uygulama için aşağıdaki bileşen seti yeterlidir:

### Shared

* SiteHeader
* LanguageSwitcher
* SiteFooter
* PageContainer
* Section
* PageHero
* SectionIntro
* CTASection
* Button
* ProjectStatusBadge
* Breadcrumb / BackLink
* FormField
* FormStatusMessage
* LegalContentLayout
* LegalSection

### Block

* HomeHeroBlock
* CapabilityGridBlock
* AboutSnapshotBlock
* SelectedProjectsBlock
* FoundersSnapshotBlock
* AboutOverviewBlock
* MissionVisionBlock
* PrinciplesBlock
* FocusAreasBlock
* FoundersBlock
* ProjectsGridBlock
* EcosystemNoteBlock
* ProjectDetailHero
* ProjectOverviewBlock
* ProjectCapabilitiesBlock
* ProjectContextBlock
* ProjectStatusInfoBlock
* ProjectBrandConnectionBlock
* ProjectCTASection
* ContactIntroBlock
* ContactFormBlock
* ContactInfoNoteBlock
* LegalHeroBlock
* LegalSectionsRenderer

Bu set ilk versiyon için fazlasıyla yeterlidir.

---

## Nihai Karar

`wecahan.com` için bileşen envanteri şu anlayışla kurulacaktır:

* sınırlı ama güçlü shared sistem
* sayfa bazlı block mantığı
* veri odaklı içerik akışı
* açık isimlendirme
* gereksiz varyasyonlardan kaçınma
* bileşen bazında değil, sistem bazında düşünme

Bu envanter, WeCaHan sitesinin tasarım ve geliştirme sürecinde temel component haritası olarak kabul edilir.

---

## Uygulama Notları

Bu belge aşağıdaki dokümanları doğrudan etkiler:

* project structure
* content data model
* routing and locale architecture
* forms and server actions
* all page structure documents
* pre-build decisions

Bu belgede tanımlanan component envanteri, açık karar alınmadan rastgele genişletilmemeli veya çakışan yeni componentlerle bozulmamalıdır.