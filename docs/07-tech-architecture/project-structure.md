# Proje Yapısı

## Belgenin Amacı
Bu belge, `wecahan.com` projesinin **repo içi klasör yapısını**, **Next.js App Router omurgasını**, **data, components, actions, validation ve docs ile uyumlu teknik klasörleşmeyi**, **hangi dosyanın ne işe yaradığını** ve **proje büyürken yapının nasıl dağılmadan korunacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- proje dizin yapısı rastgele büyümez
- page, component, data ve logic katmanları birbirine karışmaz
- Cursor ile parça parça ilerlerken mimari bozulmaz
- locale, project detail, legal ve contact tarafları aynı sistem içinde kalır
- ileride bakım ve geliştirme daha kontrollü hale gelir

Bu belge, WeCaHan sitesinin gerçek kod tabanı omurgasını tanımlar.

---

## Temel Karar
`wecahan.com` proje yapısı şu prensiple kurulacaktır:

**sade klasör yapısı + açık sorumluluk ayrımı + data-driven içerik + App Router uyumu**

Bu şu anlama gelir:
- route dosyaları yalnızca sayfa kompozisyonu yapar
- içerik data katmanından gelir
- componentler shared ve block mantığıyla ayrılır
- form logic’i UI’dan ayrılır
- locale ve project detail mantığı route seviyesinde net olur
- docs yapısı ile repo yapısı birbirini destekler

### Kural
Repo yapısı “şimdilik böyle dursun” mantığıyla değil, ilk günden kontrollü şekilde kurulmalıdır.

---

## Ana Mimari Yaklaşım
Proje şu ana katmanlar üzerinden organize edilecektir:

1. **app/** → route ve page kompozisyonu  
2. **components/** → arayüz bileşenleri  
3. **data/** → içerik ve config kaynakları  
4. **lib/** → yardımcı logic, validation, utilities  
5. **types/** → ortak tip tanımları  
6. **messages veya locale yardımcıları** → locale çözümü gerekiyorsa  
7. **public/** → statik asset’ler  
8. **docs/** → ürün ve mimari karar dokümanları  

### Kural
Bu katmanların görevleri birbirine karıştırılmayacaktır.

---

## Önerilen Kök Dizin Yapısı

```txt
wecahan/
├─ app/
├─ components/
├─ data/
├─ lib/
├─ types/
├─ public/
├─ docs/
├─ package.json
├─ tsconfig.json
├─ next.config.ts
├─ middleware.ts
└─ ...
````

### Kural

Kök dizinde gereksiz klasör çoğaltılmayacaktır.
İlk sürüm için sade ama güçlü yapı yeterlidir.

---

## App Router Ana Yapısı

WeCaHan, Next.js App Router mantığıyla organize edilmelidir.

### Önerilen route yapısı

```txt
app/
  [locale]/
    layout.tsx
    page.tsx
    about/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    contact/
      page.tsx
    privacy-policy/
      page.tsx
    terms-of-service/
      page.tsx
  layout.tsx
  globals.css
```

### Bu yapının avantajı

* locale route yapısı temiz kalır
* tüm ana sayfalar tek yerden anlaşılır
* project detail yapısı dynamic slug ile çözülür
* legal ve contact sayfaları açık kalır

### Kural

Projects detail için ayrı ayrı statik page dosyaları açılmayacaktır; dynamic slug yapısı kullanılacaktır.

---

## Route Dosyalarının Rolü

Route içindeki `page.tsx` dosyaları şu işleri yapmalıdır:

* ilgili locale content’i çağırmak
* gerekli data’yı toplamak
* block bileşenlerini compose etmek
* metadata üretimini bağlamak
* sayfa seviyesinde minimal karar almak

### Route dosyalarının yapmaması gerekenler

* uzun metinleri içinde tutmak
* project data’yı burada hardcode etmek
* UI detaylarını burada üretmek
* validation logic yazmak
* footer / navigation verisini manuel oluşturmak

### Kural

Page dosyaları orkestrasyon katmanıdır; içerik ve component deposu değildir.

---

## Önerilen `app/[locale]` Yapısı

```txt
app/
  [locale]/
    layout.tsx
    page.tsx
    about/
      page.tsx
    projects/
      page.tsx
      [slug]/
        page.tsx
    contact/
      page.tsx
      actions.ts
    privacy-policy/
      page.tsx
    terms-of-service/
      page.tsx
```

### Not

Contact form action dosyası `contact/actions.ts` altında tutulabilir.
Alternatif olarak merkezi `src/actions` yaklaşımı da mümkündür; ama ilk sürüm için route’a yakın yapı daha okunur olabilir.

---

## Global Layout Yapısı

## `app/layout.tsx`

### Rolü

* html ve body temel sarmalayıcısı
* global font setup
* theme temel yapısı
* metadata default fallback alanı

### Yapmaması gerekenler

* locale-specific UI çözmek
* header/footer directly buraya gömmek
* her route’un içeriğini burada zorlamak

---

## Locale Layout Yapısı

## `app/[locale]/layout.tsx`

### Rolü

* locale bazlı layout sarmalayıcısı
* header + footer + main shell
* locale çözümü
* navigation ve footer data bağlama
* shared page chrome

### İçermesi gerekenler

* SiteHeader
* main container / page shell
* SiteFooter

### Kural

Header ve footer tüm locale sayfalarında ortak layout üzerinden verilmelidir.

---

## Ana Sayfa Route Yapısı

## `app/[locale]/page.tsx`

### Rolü

* Home page data’sını alır
* Home block’larını sırayla birleştirir
* metadata’yı bağlar

### Kullanacağı block’lar

* HomeHeroBlock
* CapabilityGridBlock
* AboutSnapshotBlock
* SelectedProjectsBlock
* FoundersSnapshotBlock
* CTASection / Contact CTA

### Kural

Home page copy page içine gömülmeyecektir.

---

## About Route Yapısı

## `app/[locale]/about/page.tsx`

### Rolü

* About content’i çağırır
* About block’larını compose eder

### Kullanacağı block’lar

* PageHero
* AboutOverviewBlock
* MissionVisionBlock
* PrinciplesBlock
* FocusAreasBlock
* FoundersBlock
* CTASection

---

## Projects Route Yapısı

## `app/[locale]/projects/page.tsx`

### Rolü

* Projects page content’ini çağırır
* projectOrder ve project data’yı eşleştirir
* Projects grid’i render eder

### Kullanacağı block’lar

* PageHero
* ProjectsGridBlock
* EcosystemNoteBlock
* CTASection

### Kural

Projects sırası `data/content/projects-page.ts` içinden gelmelidir.

---

## Project Detail Route Yapısı

## `app/[locale]/projects/[slug]/page.tsx`

### Rolü

* slug alır
* ilgili project data’yı bulur
* locale’e göre metinleri çözer
* bulunamazsa `notFound()` çalıştırır
* detail block’larını compose eder

### Kullanacağı block’lar

* Breadcrumb / BackLink
* ProjectDetailHero
* ProjectOverviewBlock
* ProjectCapabilitiesBlock
* ProjectContextBlock
* ProjectStatusInfoBlock
* ProjectBrandConnectionBlock
* ProjectCTASection

### Kural

Project detail route, üç proje için de aynı dinamik yapı ile çalışmalıdır.

---

## Contact Route Yapısı

## `app/[locale]/contact/page.tsx`

### Rolü

* contact content’i çağırır
* form block’unu render eder
* privacy note’u bağlar

### Kullanacağı block’lar

* PageHero
* ContactIntroBlock
* ContactFormBlock
* ContactInfoNoteBlock

### Ek dosya

* `app/[locale]/contact/actions.ts`

### Kural

Form action logic page dosyasına gömülmeyecektir.

---

## Legal Route Yapısı

## Privacy

`app/[locale]/privacy-policy/page.tsx`

## Terms

`app/[locale]/terms-of-service/page.tsx`

### Rolü

* legal content data’yı çağırır
* LegalHeroBlock render eder
* LegalSectionsRenderer ile section’ları üretir

### Kural

Legal içerik doğrudan JSX içine parça parça yazılmayacaktır.

---

# COMPONENTS KLASÖR YAPISI

## Önerilen ana yapı

```txt
components/
  shared/
    layout/
    navigation/
    sections/
    ui/
  blocks/
    home/
    about/
    projects/
    project-detail/
    contact/
    legal/
```

Bu yapı docs ile birebir uyumludur ve yeterince temizdir.

---

## `components/shared` Rolü

Bu klasör, site genelinde tekrar kullanılan bileşenleri içerir.

### Örnekler

* SiteHeader
* MobileNav
* LanguageSwitcher
* SiteFooter
* PageContainer
* Section
* PageHero
* SectionIntro
* CTASection
* Button
* Badge
* ProjectStatusBadge
* Breadcrumb / BackLink
* FormField
* FormStatusMessage
* LegalContentLayout
* LegalSection

### Kural

Shared bileşenler belirli sayfaya özgü metin bilgisi taşımaz.
Görsel sistem ve genel yapı taşırlar.

---

## `components/blocks` Rolü

Bu klasör, belirli sayfa veya section bağlamı için kullanılan bileşenleri içerir.

### Alt klasörler

* home
* about
* projects
* project-detail
* contact
* legal

### Kural

Block bileşenler page-specific olabilir ama shared sistemden kopuk görünmeyecektir.

---

## `components/blocks/home`

### İçerebilecek dosyalar

* home-hero-block.tsx
* capability-grid-block.tsx
* about-snapshot-block.tsx
* selected-projects-block.tsx
* founders-snapshot-block.tsx

---

## `components/blocks/about`

### İçerebilecek dosyalar

* about-overview-block.tsx
* mission-vision-block.tsx
* principles-block.tsx
* focus-areas-block.tsx
* founders-block.tsx

---

## `components/blocks/projects`

### İçerebilecek dosyalar

* projects-grid-block.tsx
* project-card.tsx
* ecosystem-note-block.tsx

---

## `components/blocks/project-detail`

### İçerebilecek dosyalar

* project-detail-hero.tsx
* project-overview-block.tsx
* project-capabilities-block.tsx
* project-context-block.tsx
* project-status-info-block.tsx
* project-brand-connection-block.tsx
* project-cta-section.tsx

---

## `components/blocks/contact`

### İçerebilecek dosyalar

* contact-intro-block.tsx
* contact-form-block.tsx
* contact-info-note-block.tsx

---

## `components/blocks/legal`

### İçerebilecek dosyalar

* legal-hero-block.tsx
* legal-sections-renderer.tsx
* legal-update-note.tsx

---

# DATA KLASÖR YAPISI

## Önerilen ana yapı

```txt
data/
  site/
    site-config.ts
    navigation.ts
    footer.ts
  content/
    home.ts
    about.ts
    projects-page.ts
    contact.ts
    legal.ts
  projects/
    projects.ts
  people/
    founders.ts
  ui/
    microcopy.ts
    status.ts
  seo/
    metadata.ts
```

Bu yapı docs’un content data model kararlarıyla uyumludur.

---

## `data/site`

### Rolü

Site genelindeki sabit config ve navigasyon verilerini içerir.

### Dosyalar

* `site-config.ts`
* `navigation.ts`
* `footer.ts`

---

## `data/content`

### Rolü

Locale-aware sayfa içeriklerini taşır.

### Dosyalar

* `home.ts`
* `about.ts`
* `projects-page.ts`
* `contact.ts`
* `legal.ts`

### Kural

Hero, section intro ve CTA copy’leri burada tutulmalıdır.

---

## `data/projects`

### Rolü

Project detail ve project card seviyesindeki veri kaynağıdır.

### Dosya

* `projects.ts`

### Kural

Slug, status, shortDescription, externalUrl gibi proje verileri tek kaynaktan gelmelidir.

---

## `data/people`

### Rolü

Kurucu verilerini taşır.

### Dosya

* `founders.ts`

---

## `data/ui`

### Rolü

Mikro metinler ve status sözlüğünü içerir.

### Dosyalar

* `microcopy.ts`
* `status.ts`

---

## `data/seo`

### Rolü

Page ve project metadata verisini taşır.

### Dosya

* `metadata.ts`

---

# LIB KLASÖR YAPISI

## Önerilen yapı

```txt
lib/
  validation/
    contact-form-schema.ts
  content/
    get-home-content.ts
    get-about-content.ts
    get-project-by-slug.ts
    get-footer-data.ts
  routing/
    locale-utils.ts
    project-route-utils.ts
  utils/
    cn.ts
    text.ts
```

### Kural

`lib/` genel logic katmanıdır.
UI veya doğrudan raw content burada tutulmayacaktır.

---

## `lib/validation`

### Rolü

Form validation ve benzeri güvenli iş kurallarını taşır.

### İlk dosya

* `contact-form-schema.ts`

### Kural

Validation logic component içine gömülmeyecektir.

---

## `lib/content`

### Rolü

Data dosyalarını düzenli şekilde okuyup locale’e göre dönen yardımcı fonksiyonlar içerir.

### Örnek fonksiyonlar

* `getHomeContent(locale)`
* `getAboutContent(locale)`
* `getProjectsPageContent(locale)`
* `getContactContent(locale)`
* `getLegalContent(locale)`
* `getProjectBySlug(slug, locale)`

### Kural

Page dosyaları içerik çözümleme detaylarıyla dolmayacaktır.

---

## `lib/routing`

### Rolü

Locale ve route davranışlarını destekleyen yardımcı fonksiyonları taşır.

### Örnek dosyalar

* `locale-utils.ts`
* `project-route-utils.ts`

### Kullanım örnekleri

* locale doğrulama
* aynı slug’ın locale karşılığı
* project detail route helper’ları

---

## `lib/utils`

### Rolü

Genel yardımcı fonksiyonlar

### Örnekler

* `cn.ts`
* küçük text helper’ları
* küçük type guard’lar

### Kural

Utils klasörü çöp kutusuna çevrilmeyecektir.

---

# TYPES KLASÖR YAPISI

## Önerilen yapı

```txt
types/
  content.ts
  projects.ts
  forms.ts
  navigation.ts
  legal.ts
```

### Rolü

Ortak veri tiplerini ve sözleşmeleri tanımlar.

### Kural

Aynı type’lar farklı dosyalarda kopyalanmayacaktır.

---

## `types/content.ts`

### İçerebilir

* PageHeroContent
* SectionIntroContent
* CTAContent
* LocalizedText benzeri yapılar

---

## `types/projects.ts`

### İçerebilir

* ProjectStatus
* ProjectData
* ProjectCapability
* ProjectAction

---

## `types/forms.ts`

### İçerebilir

* ContactFormInput
* ContactFormResult
* FieldErrors

---

## `types/navigation.ts`

### İçerebilir

* NavItem
* FooterGroup
* FooterLink

---

## `types/legal.ts`

### İçerebilir

* LegalSection
* LegalSubsection
* LegalDocument

---

# PUBLIC KLASÖR YAPISI

## Rolü

Statik asset’leri taşır.

### Önerilen yapı

```txt
public/
  brand/
  og/
  founders/
  icons/
```

### Açıklama

* `brand/` → logo, mark
* `og/` → open graph görselleri
* `founders/` → kullanılacaksa optimize profil görselleri
* `icons/` → küçük statik ikonlar gerekiyorsa

### Kural

Public klasörü dekoratif asset çöplüğüne dönüştürülmeyecektir.

---

# DOCS KLASÖRÜ İLE REPO YAPISI ARASINDAKİ İLİŞKİ

## Temel ilke

Docs klasörü teknik yapıyı tarif eder; repo ise onu uygular.

### Bu nedenle

* docs’taki sayfa yapıları `app/[locale]` route’larına karşılık gelir
* docs’taki block kararları `components/blocks` yapısına karşılık gelir
* docs’taki data model kararları `data/` klasörüne karşılık gelir
* docs’taki form kararları `actions + validation + block` katmanına karşılık gelir

### Kural

Docs ve repo yapısı birbirinden kopuk iki dünya olmayacaktır.

---

# DOSYA ADLANDIRMA İLKELERİ

## Genel ilke

Dosya adları:

* açık
* görev odaklı
* küçük harf-kebab-case
  veya
* team standardına göre tutarlı
  olmalıdır

### Uygun örnekler

* `site-header.tsx`
* `project-detail-hero.tsx`
* `contact-form-block.tsx`
* `projects.ts`
* `navigation.ts`

### Uygun olmayan örnekler

* `SuperHero.tsx`
* `FancyCard.tsx`
* `MagicGrid.tsx`
* `futureData.ts`

### Kural

İsimler havalı değil, açık olmalıdır.

---

# SERVER / CLIENT SINIRI

## Temel karar

Varsayılan olarak server component düşünülmelidir.

### Client olması muhtemel alanlar

* mobile nav
* language switcher interaction
* contact form interaction
* küçük interactive UI state’leri

### Server olarak kalması gereken çoğu alan

* Home page block’ları
* About content block’ları
* Projects grid shell
* project detail content block’ları
* legal içerik

### Kural

`"use client"` sadece gerçekten gerektiğinde kullanılacaktır.

---

# BARREL DOSYASI KULLANIMI

Barrel export kullanımı mümkün ama dikkatli olmalıdır.

### Uygun kullanım

* belirli shared klasörlerde küçük toparlama
* import ergonomisi için sınırlı kullanım

### Uygun olmayan kullanım

* tüm repo’yu index.ts zincirine boğmak
* circular dependency riskini artırmak
* okunurluğu düşürmek

### Kural

İlk sürümde gerekmedikçe aşırı barrel yapısı kurulmayacaktır.

---

# TEST / GELECEK GENİŞLEME NOTU

İlk sürümde geniş test mimarisi şart olmayabilir.
Ama yapı test edilebilir olmalıdır.

### Bunun için

* validation logic ayrı tutulmalı
* data layer bağımsız olmalı
* componentler saf ve tahmin edilebilir olmalı
* route logic dağınık olmamalı

Bu sayede ileride test eklemek kolaylaşır.

---

# İLK SÜRÜM İÇİN MİNİMUM PROJE İSKELETİ

```txt
app/
  [locale]/
    layout.tsx
    page.tsx
    about/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    contact/page.tsx
    contact/actions.ts
    privacy-policy/page.tsx
    terms-of-service/page.tsx

components/
  shared/
  blocks/

data/
  site/
  content/
  projects/
  people/
  ui/
  seo/

lib/
  validation/
  content/
  routing/
  utils/

types/
public/
docs/
```

Bu iskelet ilk sürüm için yeterli, temiz ve profesyonel kabul edilir.

---

# KAÇINILACAK YAPISAL HATALAR

### 1. Page içine content gömmek

Bakımı bozar.

### 2. Component ile data’yı karıştırmak

Yapıyı ağırlaştırır.

### 3. Her şeyi utils’e atmak

Sorumluluk kaybı yaratır.

### 4. Projects’i statik page’lere bölmek

Detail yönetimini zorlaştırır.

### 5. Locale yapısını sonradan yamamak

Başta düzgün kurulmalıdır.

### 6. Shared ve block mantığını ihlal etmek

Bileşen sistemi dağılır.

---

# YAPI TEST SORULARI

Bir klasör veya dosya kararı alınırken şu sorular sorulmalıdır:

1. Bu dosyanın görevi net mi?
2. Bu bilgi data klasöründe mi durmalı?
3. Bu logic lib altında mı olmalı?
4. Bu bileşen shared mi, page-specific mi?
5. Bu route yapısı docs ile uyumlu mu?
6. Aynı bilgi başka bir yerde tekrar ediyor mu?

Bu testten geçmeyen yapı kararları yeniden düşünülmelidir.

---

## Nihai Karar

`wecahan.com` proje yapısı şu çizgide kurulacaktır:

* App Router tabanlı sade route sistemi
* locale uyumlu sayfa klasörleri
* dynamic project detail route
* shared ve block ayrımlı component yapısı
* data-driven içerik katmanı
* validation ve action logic’i ayrılmış form mimarisi
* temiz lib ve types katmanı
* docs ile birebir uyumlu repo omurgası

Bu yapı, WeCaHan’ın hem bugünkü ihtiyacını hem de kontrollü büyümesini taşıyacak temel proje iskeleti olarak kabul edilir.

---

## Uygulama Notları

Bu belge aşağıdaki dokümanları doğrudan etkiler:

* content-data-model
* forms-and-server-actions
* routing-and-locale-architecture
* metadata-and-seo-architecture
* component-inventory
* pre-build-decisions

Bu belgede tanımlanan proje yapısı, açık karar alınmadan page içine gömülü içerik, dağınık component klasörleri veya rastgele route genişlemesiyle bozulmamalıdır.