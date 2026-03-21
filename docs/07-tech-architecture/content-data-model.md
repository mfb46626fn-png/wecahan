# İçerik Veri Modeli

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki içeriklerin **hangi veri katmanlarında tutulacağını**, **hangi alan yapısıyla organize edileceğini**, **hangi içeriklerin merkezî veri kaynağından besleneceğini**, **hangi şeylerin JSX içine gömülmemesi gerektiğini** ve **TR / EN çok dilli yapının veri tarafında nasıl yönetileceğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- içerikler sayfa dosyalarına dağılmaz
- proje verileri tek yerden yönetilir
- TR / EN metinler düzenli tutulur
- status, CTA, footer ve legal içeriklerinde tutarsızlık azalır
- yeni proje veya yeni içerik eklemek daha kontrollü hale gelir

Bu belge, WeCaHan sitesindeki içerik yönetiminin teknik-ürün omurgasını tanımlar.

---

## Temel Karar
`wecahan.com` sitesindeki metin ve içeriklerin büyük bölümü **merkezî veri / içerik dosyaları** üzerinden yönetilecektir.

### Bu ne anlama gelir?
- hero metinleri doğrudan page dosyasına gömülmeyecek
- footer linkleri hardcode edilmeyecek
- projeler JSX içinde elle tekrar tekrar yazılmayacak
- status badge metinleri tek yerden beslenecek
- TR ve EN içerikler ayrı ama eş yapıda tutulacak

### Kural
**Page dosyaları mümkün olduğunca kompozisyon yapmalı, içerik kaynağı olmamalıdır.**

---

## Veri Modeli Tasarım İlkeleri
WeCaHan içerik veri modeli şu özellikleri taşımalıdır:

- açık
- tahmin edilebilir
- locale uyumlu
- proje odaklı genişleyebilir
- tekrar eden içerikleri merkezîleştiren
- bakım kolaylığı sağlayan

### Özellikle kaçınılacak şeyler
- aynı metni 3 farklı dosyada yazmak
- status bilgisini kartta başka, detail page’de başka yerde tutmak
- footer linklerini component içine gömmek
- TR ve EN’i dağınık klasörlerde tutmak
- locale logic’i ile content logic’i iç içe geçirmek

---

## Ana Veri Katmanları
WeCaHan için önerilen ana içerik veri katmanları şunlardır:

1. Site config / global site ayarları  
2. Navigation ve footer verileri  
3. Page copy verileri  
4. Projects veri katmanı  
5. Founders veri katmanı  
6. Legal content verileri  
7. UI metinleri / microcopy  
8. SEO / metadata verileri  

Bu katmanlar ayrı tutulmalı ama birbirleriyle uyumlu çalışmalıdır.

---

## Önerilen Klasör Yapısı

```txt
src/
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
````

### Alternatif locale-dostu yapı

```txt
src/
  data/
    tr/
      home.ts
      about.ts
      projects-page.ts
      contact.ts
      legal.ts
      microcopy.ts
    en/
      home.ts
      about.ts
      projects-page.ts
      contact.ts
      legal.ts
      microcopy.ts
    shared/
      navigation.ts
      footer.ts
      projects.ts
      founders.ts
      metadata.ts
```

### Kural

Hangi yapı seçilirse seçilsin:

* tutarlı olmalı
* projeler tek yerden yönetilmeli
* footer ve navigation çift yazılmamalı
* locale yapısı net olmalıdır

---

## İçerik Mimarisinde Ana Tercih

WeCaHan için en temiz yaklaşım genelde şu hibrit yapıdır:

### Shared data

* navigation
* footer
* projects veri modeli
* founders veri modeli
* status sözlüğü
* site config

### Locale data

* page copy
* hero başlıkları
* section açıklamaları
* CTA metinleri
* legal metinler
* form mikro metinleri

### Neden?

Çünkü:

* yapı aynı kalır
* metinler locale’e göre değişir
* proje slug ve status gibi sabit yapılar tek yerde yaşar

---

## Site Config Veri Modeli

## Dosya önerisi

`data/site/site-config.ts`

## Rolü

Site genelindeki temel marka ve yapı bilgilerini taşır.

### İçermesi gereken alanlar

* siteName
* defaultLocale
* locales
* siteUrl
* brandShortDescription
* copyrightName
* currentYear veya dynamic year mantığı
* projectDomains
* contact page slug
* legal page slug bilgileri

### Örnek mantık

* `siteName: "WeCaHan"`
* `defaultLocale: "tr"`
* `locales: ["tr", "en"]`
* `siteUrl: "https://www.wecahan.com"`

### Kural

Site config, marka kimliği ve temel URL mantığı için tek kaynak olmalıdır.

---

## Navigation Veri Modeli

## Dosya önerisi

`data/site/navigation.ts`

## Rolü

Header ve mobil navigasyondaki ana linkleri yönetir.

### İçermesi gereken alanlar

* label
* href
* key
* order
* showInHeader
* showInMobile

### Önerilen item yapısı

* about
* projects
* contact

### Locale mantığı

Navigation label’ları locale’e göre çözülebilir:

* key tabanlı yapı
  veya
* locale içinde label map’i

### Kural

Navigation link metinleri component içine gömülmeyecektir.

---

## Footer Veri Modeli

## Dosya önerisi

`data/site/footer.ts`

## Rolü

Footer kolonlarını, link gruplarını ve kısa marka metnini yönetir.

### İçermesi gereken ana alanlar

* brand block
* navigation links
* project links
* legal links
* optional footer note
* copyright line

### Brand block alanları

* title
* shortDescription

### Link grup yapısı

* groupKey
* groupTitle
* links[]

### Link item alanları

* label
* href
* external (opsiyonel)
* order

### Kural

Footer verisi tek kaynaktan gelmeli; her sayfada tekrar yazılmamalıdır.

---

## Home İçerik Veri Modeli

## Dosya önerisi

`data/content/home.ts`

## Rolü

Home sayfasındaki tüm ana section metinlerini ve CTA yapılarını taşır.

### İçermesi gereken section alanları

* hero
* capabilities
* aboutSnapshot
* selectedProjects
* foundersSnapshot
* contactCta

### Hero alanı

* title
* description
* primaryAction
* secondaryAction
* eyebrow (opsiyonel)

### Capabilities alanı

* title
* description
* items[]

### SelectedProjects alanı

* title
* description
* selectedProjectSlugs[]
* sectionAction

### Founders alanı

* title
* description
* founderIds[]
* sectionAction

### Kural

Home’daki selected project listesi sadece slug / id referansı tutmalıdır.
Proje detayları `projects.ts` içinden gelmelidir.

---

## About İçerik Veri Modeli

## Dosya önerisi

`data/content/about.ts`

## Rolü

About sayfasındaki section copy’leri taşır.

### İçermesi gereken alanlar

* hero
* overview
* missionVision
* principles
* focusAreas
* founders
* cta

### Örnek alanlar

#### overview

* title
* paragraphs[]

#### missionVision

* missionTitle
* missionText
* visionTitle
* visionText

#### principles

* title
* description
* items[]

#### founders

* title
* description
* founderIds[]

### Kural

Kurucu detayları burada hardcode edilmemeli; founders veri kaynağından çekilmelidir.

---

## Projects Sayfası Veri Modeli

## Dosya önerisi

`data/content/projects-page.ts`

## Rolü

Projects sayfasındaki liste seviyesindeki metinleri yönetir.

### İçermesi gereken alanlar

* hero
* introNote
* projectOrder[]
* ecosystemNote
* contactCta

### projectOrder

Bu alan çok önemlidir.
Çünkü listede proje sırasını belirler:

* wecahan-auto
* prificient
* prificient-tools

### Kural

Project listesi JSX içinde elle sıralanmayacak; data layer üzerinden gelecektir.

---

## Contact Sayfası Veri Modeli

## Dosya önerisi

`data/content/contact.ts`

## Rolü

Contact sayfası metinlerini ve form copy’lerini taşır.

### İçermesi gereken alanlar

* hero
* intro
* form
* privacyNote

### Form alt alanları

* title
* description
* fields
* submitLabel
* successMessage
* errorMessage

### Field yapısı

* key
* label
* placeholder
* required
* helperText
* type
* textarea (opsiyonel)

### Kural

Form UI metinleri tek merkezden yönetilmelidir.

---

## Legal İçerik Veri Modeli

## Dosya önerisi

`data/content/legal.ts`

## Rolü

Privacy Policy ve Terms of Service sayfalarının metin bloklarını yönetir.

### Yapı önerisi

* privacyPolicy
* termsOfService

### Her biri için

* title
* description
* updatedAt
* sections[]

### Section yapısı

* id
* title
* paragraphs[]
* subsections[] (opsiyonel)

### Subsection yapısı

* title
* paragraphs[]

### Kural

Legal içerik metinleri page içine gömülmeyecek; veri dosyasından render edilecektir.

---

## Projects Veri Modeli

## Dosya önerisi

`data/projects/projects.ts`

## Rolü

Site içindeki tüm proje verilerinin tek kaynağıdır.

### Bu dosya en kritik veri katmanlarından biridir.

### İçermesi gereken zorunlu alanlar

* id
* slug
* name
* status
* shortDescription
* heroDescription
* overviewParagraphs
* capabilities
* context
* statusInfo
* brandConnection
* primaryAction
* secondaryAction
* externalUrl
* order
* isFeatured

### Genişletilebilir alanlar

* category
* audience
* relatedProjects
* metadata
* badges
* siteLabel
* internalNotes (opsiyonel, public render edilmez)

---

## Proje Alanlarının Açıklaması

### id

Teknik sabit kimlik.
Örn:

* `wecahan-auto`
* `prificient`
* `prificient-tools`

### slug

Routing için kullanılacak URL kimliği.
Genelde id ile aynı olabilir.

### name

Görünen proje adı.

### status

* active
* in-development

### shortDescription

Kartlarda ve bazı küçük özet alanlarda kullanılır.

### heroDescription

Detail hero altında görünen açıklama.

### overviewParagraphs

Project overview bölümündeki ana paragraflar.

### capabilities

Her biri:

* title
* description

### context

Kimler için / problem alanı / kullanım bağlamı gibi bloklar.

### statusInfo

Status’a dair açıklayıcı bölüm içeriği.

### brandConnection

WeCaHan ile proje bağını açıklayan metinler.

### primaryAction / secondaryAction

Detail page CTA’ları.

### externalUrl

İlgili proje sitesi.

### order

Genel sıralama.

### isFeatured

Home’daki seçili proje alanı için kullanılabilir.

---

## Proje Status Veri Modeli

## Dosya önerisi

`data/ui/status.ts`

## Rolü

Status badge label ve açıklama map’ini yönetir.

### İçermesi gereken yapı

* active
* in-development

### Her biri için

* label
* shortLabel (opsiyonel)
* description (opsiyonel)
* tone / variant (opsiyonel)

### Locale mantığı

Bu yapı locale’e göre dönen küçük sözlükler içerebilir.

### Neden ayrı dosya?

Status metinleri birçok yerde tekrar eder.
Tek kaynaktan yönetmek daha temizdir.

---

## Founders Veri Modeli

## Dosya önerisi

`data/people/founders.ts`

## Rolü

Kurucu verilerini merkezî olarak tutar.

### İçermesi gereken alanlar

* id
* name
* role
* shortBio
* extendedBio
* order
* image (opsiyonel)
* isVisible

### Mevcut founder id’leri

* can
* hakan

### Neden ayrı dosya?

Kurucu bilgisi Home ve About’ta tekrar eder.
Tek yerden yönetilmelidir.

---

## Microcopy Veri Modeli

## Dosya önerisi

`data/ui/microcopy.ts`

## Rolü

Form, buton, küçük notlar, başarı / hata mesajları gibi UI metinlerini taşır.

### İçermesi gereken alanlar

* buttons
* forms
* status
* breadcrumbs
* footerLabels
* legalLabels
* commonNotes

### Örnek alt yapı

#### buttons

* viewDetails
* visitSite
* contact
* goBack
* sendMessage

#### forms

* success
* error
* placeholders
* validationMessages

### Kural

Mikro metinler sayfa içine dağılmamalıdır.

---

## SEO / Metadata Veri Modeli

## Dosya önerisi

`data/seo/metadata.ts`

## Rolü

Sayfa bazlı title, description ve gerektiğinde OG alanlarını yönetir.

### İçermesi gereken ana alanlar

* home
* about
* projects
* contact
* privacyPolicy
* termsOfService
* projectDetail map

### Project detail metadata

Proje verisinden türetilebilir veya ayrı alan olarak tutulabilir:

* title
* description

### Kural

Metadata mantığı ile page copy birebir aynı olmak zorunda değildir;
ama çelişmemelidir.

---

## Locale Veri Yönetimi Kararı

TR / EN yapı için iki ana yaklaşım vardır:

### Yaklaşım 1 — Locale bazlı ayrı içerik dosyaları

Örn:

* `data/tr/home.ts`
* `data/en/home.ts`

### Yaklaşım 2 — Aynı dosyada locale map’leri

Örn:

```ts
title: {
  tr: "...",
  en: "..."
}
```

### WeCaHan için önerilen yaklaşım

**Page copy ve UI text için locale bazlı ayrı dosyalar**,
**projects gibi yapısal veriler için shared data + localized field map** veya temiz helper katmanı.

### Neden?

* daha okunur
* daha sürdürülebilir
* Cursor için daha net
* TR / EN ayrı kontrol edilebilir

---

## Hardcode Edilmeyecek Alanlar

Aşağıdaki içerikler component veya page içine gömülmeyecektir:

* navigation labels
* footer linkleri
* footer kısa marka açıklaması
* project status label’ları
* project short description
* project CTA metinleri
* founder bio’ları
* contact form field metinleri
* success / error mesajları
* legal başlık ve paragraflar

### Neden?

Çünkü bunlar sık değişebilir ve çoklu yerde kullanılır.

---

## Hardcode Edilebilecek / Edilebilecek Sınırdaki Alanlar

Bazı şeyler lokal component seviyesinde kalabilir:

* çok küçük purely presentational UI kararları
* icon seçimleri
* spacing variant seçimi
* bazı dekoratif label’lar (gerçekten sabitse)
* internal helper constant’lar

### Kural

Copy ve içerik asla dekoratif sabit sanılmamalıdır.

---

## Data Access İlkesi

Page ve block bileşenleri içerikleri doğrudan dağınık dosyalardan çekmemelidir.

### Önerilen yaklaşım

* `getHomeContent(locale)`
* `getAboutContent(locale)`
* `getProjectsPageContent(locale)`
* `getProjectBySlug(slug, locale)`
* `getFooterData(locale)`

### Neden?

* page dosyaları temiz kalır
* locale ve data logic tek yerde toplanır
* componentler daha okunur olur

---

## Project Detail Veri Besleme İlkesi

Project detail sayfaları aşağıdaki mantıkla beslenmelidir:

1. route param ile slug alınır
2. projects data içinde slug ile eşleşen proje bulunur
3. locale’e göre metin alanları çözülür
4. eşleşme yoksa `notFound()` çalışır

### Kural

Project detail içerikleri elle ayrı üç page dosyasına gömülmeyecektir.

---

## Content Data Model’de Kaçınılacak Hatalar

### 1. Aynı metni farklı dosyalarda tekrar etmek

Özellikle proje açıklamaları ve footer metinleri.

### 2. Locale ile contenti rastgele karıştırmak

TR/EN çözümü tahmin edilemez hale gelmemelidir.

### 3. Tüm içeriği tek dev dosyada toplamak

Yönetimi zorlaştırır.

### 4. Her şeyi fazla atomize etmek

Aşırı parçalanmış yapı da bakım yükü üretir.

### 5. Status ve CTA’yı koparmak

Proje statüsü ile proje CTA mantığı aynı veri ailesinde düşünülmelidir.

---

## Minimum Başlangıç Veri Seti

İlk uygulama için aşağıdaki data dosyaları yeterlidir:

* `site-config.ts`
* `navigation.ts`
* `footer.ts`
* `home.ts`
* `about.ts`
* `projects-page.ts`
* `contact.ts`
* `legal.ts`
* `projects.ts`
* `founders.ts`
* `microcopy.ts`
* `status.ts`
* `metadata.ts`

Bu set ilk sürüm için yeterli ve profesyonel kabul edilir.

---

## Veri Modeli Test Soruları

Yeni bir içerik eklenirken şu sorular sorulmalıdır:

1. Bu içerik tekrar kullanılacak mı?
2. Bu içerik locale’e göre değişecek mi?
3. Bu içerik proje verisinin parçası mı?
4. Bu içerik page dosyasına gömülürse ileride sorun olur mu?
5. Aynı şeyi başka yerde tekrar yazıyor muyuz?

Bu testten sonra içerik:

* shared data
* locale content
* project data
* microcopy
  gibi doğru katmana yerleştirilmelidir.

---

## Nihai Karar

`wecahan.com` içerik veri modeli şu çizgide kurulacaktır:

* global site config
* merkezî navigation ve footer verisi
* locale bazlı page copy
* tek kaynaktan beslenen project data
* ayrı founder data
* ayrı status / microcopy katmanı
* metadata için düzenli veri yapısı

Bu yapı sayesinde WeCaHan sitesi:

* daha kolay yönetilir
* daha tutarlı görünür
* daha az hardcode edilir
* TR / EN açısından daha temiz ölçeklenir

---

## Uygulama Notları

Bu belge aşağıdaki dokümanları doğrudan etkiler:

* project-detail-routing-model
* component inventory
* routing and locale architecture
* metadata seo architecture
* forms and server actions
* all page structure documents

Bu belgede tanımlanan veri modeli, açık karar alınmadan page içine gömülü içerik dağınıklığına dönüştürülmemelidir.