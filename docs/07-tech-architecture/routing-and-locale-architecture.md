# Routing ve Locale Mimarisi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki **route yapısını**, **locale davranışını**, **default locale kararını**, **TR / EN sayfa eşleşmelerini**, **dil değiştirici mantığını**, **project detail slug davranışını**, **canonical ve alternates uyumunu** ve **route seviyesinde kaçınılacak mimari hataları** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- route yapısı baştan temiz kurulur
- TR / EN sayfalar birbirinden kopmaz
- dil değiştirici kullanıcıyı yanlış sayfaya atmaz
- project detail route’ları bozulmaz
- SEO ve locale mimarisi birbirini destekler
- Cursor ile ilerlerken routing tarafı sonradan yamalı hale gelmez

Bu belge, WeCaHan ana sitesinin URL ve locale omurgasını tanımlar.

---

## Temel Karar
`wecahan.com` için routing ve locale mimarisi şu prensiple kurulacaktır:

**tek düzenli route sistemi + locale-first yapı + veriyle uyumlu slug mantığı**

Bu şu anlama gelir:
- tüm ana sayfalar locale segmenti altında çalışır
- TR ve EN karşılıklar nettir
- project detail sayfaları tek dynamic slug yapısıyla çözülür
- dil değiştirici aynı içeriğin karşı diline götürür
- canonical ve alternates mantığı route yapısıyla uyumlu çalışır

### Kural
Locale ve route mimarisi sonradan eklenmiş hissi vermeyecek şekilde baştan planlı kurulmalıdır.

---

## Ana Route Kararı
Site ana omurgası locale tabanlı App Router yapısı ile çalışacaktır.

### Önerilen ana yapı
```txt id="9t6mec"
app/
  [locale]/
    page.tsx
    about/page.tsx
    projects/page.tsx
    projects/[slug]/page.tsx
    contact/page.tsx
    privacy-policy/page.tsx
    terms-of-service/page.tsx
````

### Neden bu yapı?

* locale mantığı açık olur
* route eşleşmeleri sade kalır
* metadata ve alternates üretimi kolaylaşır
* dil değiştirici aynı pattern üzerinden çalışır
* project detail yapısı doğal biçimde çözülür

### Kural

Locale yapısı route dışında yamalı yardımcı hack’lerle çözülmeyecektir.

---

## Desteklenecek Locale’ler

WeCaHan ana sitesi iki dil destekleyecektir:

* `tr`
* `en`

### Kural

İlk sürümde yalnızca bu iki locale desteklenecektir.
Ek locale’ler için şimdiden karmaşık altyapı kurulmayacaktır.

---

## Default Locale Kararı

Default locale **Türkçe (`tr`)** olarak kabul edilecektir.

### Bu ne anlama gelir?

* marka ve içerik üretiminin ana omurgası Türkçe düşünülür
* İngilizce tam destekli ikinci locale olur
* locale çözümünde TR baz alınabilir

### Uygulama notu

URL yapısı konusunda iki teknik yol vardır:

#### Yol 1 — Her locale URL’de görünür

* `/tr/...`
* `/en/...`

#### Yol 2 — Default locale prefix’siz, ikinci locale prefix’li

* `/...`
* `/en/...`

### WeCaHan için önerilen karar

**Tutarlılık ve teknik açıklık açısından her iki locale’in de prefix ile görünmesi** daha temizdir:

* `/tr`
* `/en`

### Neden?

* route mantığı daha simetrik olur
* alternates üretimi daha temiz olur
* middleware ve dil değiştirici daha öngörülebilir olur
* canonical karmaşası azalır

### Nihai öneri

İlk sürüm için:

* `/tr`
* `/en`

kullanılması daha sağlıklıdır.

---

## Ana Sayfa Route’ları

### Türkçe

* `/tr`

### İngilizce

* `/en`

### Kural

Ana sayfa için locale route’ları bilinçli ve tutarlı biçimde kullanılmalıdır.
Bir dil prefix’li, diğeri prefix’siz hibrit yapı tercih edilmeyecektir.

---

## Temel Sayfa Route’ları

## About

* `/tr/about`
* `/en/about`

## Projects

* `/tr/projects`
* `/en/projects`

## Contact

* `/tr/contact`
* `/en/contact`

## Privacy Policy

* `/tr/privacy-policy`
* `/en/privacy-policy`

## Terms of Service

* `/tr/terms-of-service`
* `/en/terms-of-service`

### Kural

Tüm temel sayfalar her iki locale’de de karşılık bulmalıdır.

---

## Project Detail Route Yapısı

Project detail sayfaları tek dynamic slug yapısıyla çalışacaktır.

### Ana route yapısı

* `/tr/projects/[slug]`
* `/en/projects/[slug]`

### Onaylı slug’lar

* `wecahan-auto`
* `prificient`
* `prificient-tools`

### Türkçe route örnekleri

* `/tr/projects/wecahan-auto`
* `/tr/projects/prificient`
* `/tr/projects/prificient-tools`

### İngilizce route örnekleri

* `/en/projects/wecahan-auto`
* `/en/projects/prificient`
* `/en/projects/prificient-tools`

### Kural

Slug’lar iki dilde de aynı kalacaktır.
Slug çevirisi yapılmayacaktır.

---

## Neden Aynı Slug?

Slug’ların iki dilde de aynı olması şu avantajları sağlar:

* teknik sadeleşme
* project data ile birebir eşleşme
* locale geçişinde kolaylık
* route yardımcılarının basitleşmesi
* metadata ve canonical mantığında düzen

### Kural

Slug’lar içerik dili değişse de yapısal kimlik olarak sabit kalır.

---

## Route Param ve Veri Eşleşmesi

Project detail route’ları project data ile doğrudan eşleşmelidir.

### Mantık

1. URL’den `slug` alınır
2. `projects.ts` içindeki proje bulunur
3. locale’e göre metinler çözülür
4. proje varsa render edilir
5. yoksa `notFound()` çalışır

### Kural

Routing katmanı ile data katmanı birbirinden kopuk olmayacaktır.

---

## `notFound()` Davranışı

Geçersiz slug veya geçersiz locale durumlarında güvenli fallback gereklidir.

### Geçersiz slug

* `notFound()` çağrılır

### Geçersiz locale

* middleware veya route-level guard ile engellenir
  veya
* `notFound()` ile sonlandırılır

### Kural

Kullanıcı yanlış URL’de ana sayfaya rastgele atılmayacaktır.
Hatalar sessizce gizlenmeyecektir.

---

## Locale Çözümleme Mantığı

Locale değeri route segmentinden alınacaktır.

### Örnek

* `/tr/projects` → locale = `tr`
* `/en/projects` → locale = `en`

### Kural

Locale state sadece client-side bir context gibi düşünülmeyecek; route seviyesinde açık olacaktır.

---

## Middleware Rolü

Middleware kullanılacaksa rolü sade tutulmalıdır.

### Middleware ne yapabilir?

* geçersiz locale path’lerini düzeltmek
* locale olmayan route’ları varsayılan locale’e yönlendirmek
* locale koruması sağlamak

### Middleware ne yapmamalı?

* karmaşık business logic
* sayfa içeriğiyle ilgili kararlar
* aşırı redirect zinciri
* SEO’yu bozan belirsiz yönlendirmeler

### Kural

Middleware hafif ve route disiplini odaklı kalmalıdır.

---

## Locale’siz Route Davranışı

Kullanıcı `wecahan.com` gibi locale’siz kök alana gelirse ne olacağı net tanımlanmalıdır.

### Önerilen davranış

Locale’siz girişler default locale’e yönlendirilir:

* `/` → `/tr`

### Neden?

* tek bir tutarlı route sistemi korunur
* canonical mantığı sadeleşir
* locale uyumu bozulmaz

### Kural

Locale’siz route’lar paralel ikinci route sistemi gibi yaşamayacaktır.

---

## Dil Değiştirici Mantığı

Dil değiştirici, kullanıcıyı mümkün olduğunca **aynı içeriğin karşı locale’ine** götürmelidir.

### Örnekler

* `/tr/about` → `/en/about`
* `/tr/projects` → `/en/projects`
* `/tr/projects/prificient` → `/en/projects/prificient`

### Kural

Dil değiştirici kullanıcıyı detail page’den ana sayfaya atmamalıdır.

---

## Dil Değiştirici İçin Gereken Girdi

Language switcher şu bilgileri bilmeli:

* current locale
* current pathname
* route params
* slug varsa slug

### Neden?

Aynı sayfanın doğru karşılığını üretebilmek için.

### Kural

Dil değiştirici sabit `/tr` ve `/en` linklerinden ibaret bırakılmayacaktır.

---

## Locale ve Navigation İlişkisi

Header ve footer linkleri locale-aware olmalıdır.

### Örnek

Türkçe header:

* `/tr/about`
* `/tr/projects`
* `/tr/contact`

İngilizce header:

* `/en/about`
* `/en/projects`
* `/en/contact`

### Kural

Navigation verisi locale’e göre doğru path üretmelidir.

---

## Footer ve Locale İlişkisi

Footer linkleri de active locale’e göre çözülmelidir.

### İçerdiği linkler

* Hakkımızda / About
* Projeler / Projects
* İletişim / Contact
* Gizlilik Politikası / Privacy Policy
* Kullanım Koşulları / Terms of Service
* proje detail linkleri

### Kural

Footer’da bir locale’den diğer locale’e yanlış link düşmeyecektir.

---

## Route İsimlendirme İlkeleri

Route segment’leri kısa, açık ve istikrarlı olmalıdır.

### Onaylı segment’ler

* `about`
* `projects`
* `contact`
* `privacy-policy`
* `terms-of-service`

### Kural

Segment’ler sonradan rastgele değiştirilmemelidir.
SEO, metadata ve internal linking buna bağlıdır.

---

## TR / EN Path Çevirisi Kararı

Page route segment’leri iki dilde de aynı bırakılacaktır.

### Örnek

* `/tr/about`
* `/en/about`

ve

* `/tr/contact`
* `/en/contact`

### Neden?

* teknik sadelik
* locale switch kolaylığı
* metadata ve alternates üretiminin kolaylaşması
* route helpers basitleşmesi

### Alternatif neden seçilmiyor?

Örneğin:

* `/tr/hakkimizda`
* `/en/about`

yapısı daha fazla çeviri ve route karmaşası üretir.

### Nihai karar

Path segment’leri sabit, içerik locale’e göre farklı olacaktır.

---

## Canonical ile Route Uyumu

Canonical URL’ler route yapısıyla tam uyumlu olmalıdır.

### Örnek

* `/tr/projects/prificient` için canonical aynı URL’ye işaret etmelidir
* `/en/projects/prificient` için canonical kendi İngilizce route’una işaret etmelidir

### Kural

Canonical’lar locale’leri birbirine ezmeyecek şekilde üretilmelidir.

---

## Alternates ile Route Uyumu

Alternates / hreflang benzeri yapı route karşılıklarıyla net eşleşmelidir.

### Örnek

Bir sayfa için:

* TR alternate → `/tr/...`
* EN alternate → `/en/...`

### Kural

Alternates üretirken aynı sayfanın farklı locale karşılığı kullanılmalıdır; alakasız fallback sayfaları gösterilmeyecektir.

---

## Sitemap ile Route Uyumu

Sitemap yalnızca gerçek, çalışan route’ları içermelidir.

### Dahil edilecek route aileleri

* `/tr`
* `/en`
* `/tr/about`
* `/en/about`
* `/tr/projects`
* `/en/projects`
* onaylı tüm project detail route’ları
* `/tr/contact`
* `/en/contact`
* legal sayfalar

### Kural

404 veren, draft veya kullanılmayan route’lar sitemap’e dahil edilmeyecektir.

---

## Internal Linking ile Route Uyumu

Site içi tüm linkler route mimarisine sadık kalmalıdır.

### Dikkat edilecek alanlar

* header
* footer
* hero CTA’ları
* project card CTA’ları
* related project yönlendirmeleri
* contact CTA’ları
* breadcrumb / back link

### Kural

Hardcoded yanlış locale linkleri ve relative path hataları önlenmelidir.

---

## Route Helpers Gereksinimi

Routing mantığını sadeleştirmek için küçük helper’lar kullanılabilir.

### Önerilen yardımcılar

* `isSupportedLocale(locale)`
* `buildLocalizedPath(locale, path)`
* `getProjectPath(locale, slug)`
* `switchLocalePath(currentPath, nextLocale)`

### Kural

Locale ve route string birleştirmeleri her componentte elle tekrar tekrar yapılmayacaktır.

---

## Navigation Active State Mantığı

Header ve footer’da aktif sayfa bilgisi route üzerinden türetilmelidir.

### Amaç

* kullanıcı hangi sayfada olduğunu anlasın
* dil değiştirince active state doğru kalsın

### Kural

Active route mantığı string hack’lerle değil, sade ve öngörülebilir karşılaştırmalarla kurulmalıdır.

---

## Dynamic Route Genişleme Mantığı

İleride yeni proje eklenirse mevcut routing sistemi bozulmadan genişleyebilmelidir.

### Yeni proje ekleme akışı

1. `projects.ts` içine proje eklenir
2. slug onaylanır
3. Projects page order güncellenir
4. metadata üretimi çalışır
5. detail page aynı dynamic route ile render edilir

### Kural

Yeni proje geldiğinde yeni route ailesi açılmayacak; mevcut `[slug]` yapısı kullanılacaktır.

---

## Hatalı Routing Alışkanlıkları

Aşağıdaki alışkanlıklar kullanılmayacaktır:

### 1. Locale’siz paralel page açmak

Örn:

* `app/about/page.tsx`
* `app/[locale]/about/page.tsx`

Bu karışıklık üretir.

### 2. Project detail için ayrı ayrı statik klasörler

Örn:

* `projects/wecahan-auto/page.tsx`
* `projects/prificient/page.tsx`

Bu veri modelini zayıflatır.

### 3. Dil değiştiricide ana sayfaya fırlatma

Kullanıcı bağlam kaybeder.

### 4. Path segment’lerini her dilde çevirmek

Bakım ve helper karmaşası büyür.

### 5. Middleware ile fazla iş yapmak

Locale ve redirect mantığı gereksiz karmaşıklaşır.

---

## Route Kalite Testi

Her route kararı için şu sorular sorulmalıdır:

1. Bu URL yapısı sade mi?
2. Locale karşılığı net mi?
3. Dil değiştirici bunu doğru çevirebilir mi?
4. Canonical ve alternates ile uyumlu mu?
5. Project data ile doğrudan eşleşiyor mu?
6. Yeni proje eklenince yapı bozulur mu?

Bu testten geçmeyen routing kararı yeniden ele alınmalıdır.

---

## Minimum İlk Sürüm Route Seti

İlk sürüm için minimum route seti şudur:

### Türkçe

* `/tr`
* `/tr/about`
* `/tr/projects`
* `/tr/projects/wecahan-auto`
* `/tr/projects/prificient`
* `/tr/projects/prificient-tools`
* `/tr/contact`
* `/tr/privacy-policy`
* `/tr/terms-of-service`

### İngilizce

* `/en`
* `/en/about`
* `/en/projects`
* `/en/projects/wecahan-auto`
* `/en/projects/prificient`
* `/en/projects/prificient-tools`
* `/en/contact`
* `/en/privacy-policy`
* `/en/terms-of-service`

Bu set ilk yayında yeterli ve temiz kabul edilir.

---

## Nihai Karar

`wecahan.com` routing ve locale mimarisi şu çizgide kilitlenir:

* locale segmentli App Router yapısı
* Türkçe ve İngilizce için simetrik route sistemi
* sabit page segment’leri
* sabit project slug’ları
* dynamic project detail route
* locale-aware navigation ve footer
* aynı sayfaya götüren dil değiştirici
* canonical ve alternates ile uyumlu URL yapısı

Bu mimari, WeCaHan sitesinin hem kullanıcı deneyimi hem teknik sürdürülebilirlik hem de SEO tarafı için en doğru route omurgası olarak kabul edilir.

---

## Uygulama Notları

Bu belge aşağıdaki dokümanları doğrudan etkiler:

* content-data-model
* metadata-and-seo-architecture
* project-detail-routing-model
* internal-linking-plan
* schema-and-indexing-plan
* pre-build-decisions
* pre-launch-checklist

Bu belgede tanımlanan route ve locale kuralları, açık karar alınmadan prefix’siz karma sistemlere, translated path segment’lere veya detail-page bağlamını bozan dil değiştirici mantığına kaydırılmamalıdır.