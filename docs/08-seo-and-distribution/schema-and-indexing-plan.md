# Schema ve Indexing Planı

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde **hangi yapılandırılmış veri türlerinin kullanılacağını**, **hangi sayfaların indexlenmesi gerektiğini**, **hangi sayfaların hangi arama motoru sinyalleriyle destekleneceğini**, **schema kullanımında hangi sınırların korunacağını**, **robots / sitemap / canonical / alternates ilişkisini** ve **ana site ile proje siteleri arasındaki indexleme farkını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site gereksiz veya yanlış schema ile dolmaz
- indexlenmesi gereken sayfalar netleşir
- ana site ile alt proje sitelerinin SEO rolleri karışmaz
- Google ve benzeri arama motorlarına daha temiz sinyal verilir
- teknik SEO tarafı rastgele değil, kontrollü bir planla ilerler

Bu belge, WeCaHan ana sitesindeki schema ve indexleme stratejisinin omurgasını tanımlar.

---

## Temel Karar
`wecahan.com` için schema ve indexleme yaklaşımı şu prensiple kurulacaktır:

**az ama doğru schema + yalnızca anlamlı sayfaları indexleme + temiz teknik sinyaller**

Bu şu anlama gelir:
- her sayfaya schema doldurulmayacak
- yalnızca gerçekten anlamlı ve doğru yapılandırılmış veri kullanılacak
- ana site ile proje siteleri arasında görev ayrımı korunacak
- noindex kararı yalnızca gerçekten gerekli alanlarda kullanılacak
- sitemap, canonical ve alternates birlikte düşünülerek kurulacak

### Kural
Schema, SEO gösterişi için değil; arama motoruna sayfanın ne olduğunu doğru anlatmak için kullanılacaktır.

---

## Schema Kullanım İlkesi
Schema kullanımı WeCaHan için destekleyici katmandır, ana değer önerisi değildir.

### Amaç
- marka ve site kimliğini daha net anlatmak
- sayfa türlerini arama motoruna düzenli bildirmek
- legal ve contact gibi sayfaları teknik olarak temiz bırakmak
- proje detail sayfalarını anlamlı biçimde sınıflandırmak

### Amaç olmayan şey
- zengin sonuç hayaliyle her şeye schema eklemek
- gerçekte olmayan bilgileri structured data içine koymak
- sahte organization / product sinyalleri üretmek
- review, rating, faq gibi olmayan yapıları eklemek

### Kural
Schema yalnızca doğru ve savunulabilir veriyle kullanılacaktır.

---

## Indexing Temel İlkesi
İlk sürümde, site üzerindeki tüm gerçek ve anlamlı yüzeyler indexlenebilir olmalıdır.

### Indexlenmesi beklenen sayfalar
- Home
- About
- Projects
- tüm onaylı project detail sayfaları
- Contact
- Privacy Policy
- Terms of Service

### Neden?
Çünkü bunlar:
- gerçek sayfalardır
- kullanıcı için anlamlıdır
- site bütünlüğünü oluşturur
- marka güvenini destekler

### Kural
Yayındaki gerçek sayfalar yanlışlıkla noindex bırakılmayacaktır.

---

## Noindex Yaklaşımı
İlk sürümde planlı noindex sayfası yoktur.

### Gelecekte noindex olabilecek alanlar
- staging / preview route’ları
- dahili test sayfaları
- geçici prototip sayfalar
- arşivlenmiş ama halka açık olmaması gereken yüzeyler

### Kural
Noindex, varsayılan koruma gibi değil; bilinçli bir karar olarak kullanılacaktır.

---

## Sitemap İlkesi
Sitemap yalnızca gerçek, çalışan ve indekslenmesi istenen route’ları içermelidir.

### Dahil edilmesi gerekenler
- `/tr`
- `/en`
- `/tr/about`
- `/en/about`
- `/tr/projects`
- `/en/projects`
- tüm onaylı project detail route’ları
- `/tr/contact`
- `/en/contact`
- `/tr/privacy-policy`
- `/en/privacy-policy`
- `/tr/terms-of-service`
- `/en/terms-of-service`

### Dahil edilmemesi gerekenler
- 404 veren route’lar
- test sayfaları
- kullanılmayan draft route’lar
- geçici teknik sayfalar

### Kural
Sitemap, gerçek site mimarisinin temiz bir yansıması olmalıdır.

---

## Robots İlkesi
Robots stratejisi sade tutulmalıdır.

### Genel yaklaşım
- gerçek sayfalar crawl edilebilir
- staging / test route’ları crawl edilmez
- ana site için agresif robots kuralları gerekmez

### Kullanım mantığı
- indexlenmesi gerekenler açık kalır
- gereksiz engeller üretilmez
- canonical ve sitemap ile uyum sağlanır

### Kural
Robots dosyası karmaşık kural çöplüğüne dönüştürülmeyecektir.

---

## Canonical ve Indexing İlişkisi
Canonical, indexleme kararlarını destekleyen temiz URL sinyali üretmelidir.

### Kural
Her sayfa kendi locale ve kendi gerçek route’una canonical vermelidir.

### Örnek
- `/tr/projects/prificient` canonical → `/tr/projects/prificient`
- `/en/projects/prificient` canonical → `/en/projects/prificient`

### Kaçınılacak hata
- iki locale’i tek canonical altında ezmek
- yanlışlıkla tüm sayfaları home canonical’ına bağlamak
- detail page canonical’ını projects sayfasına vermek

### Kural
Canonical, indexlemeyi sadeleştirir; sayfaları birbiriyle karıştırmaz.

---

## Alternates ve Indexing İlişkisi
Alternates yapısı locale’ler arası doğru eşleşmeyi göstermelidir.

### Amaç
- TR ve EN karşılıklarını netleştirmek
- arama motoruna çok dilli yapıyı açık göstermek
- yanlış dilde sayfa gösterimini azaltmak

### Kural
Her sayfa kendi locale karşılığı ile eşleşmelidir.

### Örnek
- `/tr/about` ↔ `/en/about`
- `/tr/projects/prificient` ↔ `/en/projects/prificient`

### Kural
Alternates, alakasız fallback sayfalara işaret etmeyecektir.

---

## Ana Site ile Proje Siteleri Arasındaki Indexleme Farkı
WeCaHan ana sitesi ile proje siteleri aynı şeyi yapmamalıdır.

### WeCaHan ana sitesi
- marka
- proje bağlamı
- ekosistem
- açıklama
- kurumsal yapı

### Proje siteleri
- proje odaklı detaylı kullanım / tanıtım / ürün veya hizmet yüzeyi

### Kural
Ana site project detail sayfaları, ilgili proje sitesinin tam SEO yerine geçmeye çalışmayacaktır.

### Bu ne anlama gelir?
- Auto detail page, `auto.wecahan.com`’un hizmet / satış yapısını kopyalamaz
- Prificient detail page, `prificient.com`’un tam ürün landing page’i gibi davranmaz
- Prificient Tools detail page, araç sitesinin birebir kopyası olmaz

Bu ayrım korunmalıdır.

---

# Schema Türleri — Kullanım Planı

## 1. WebSite Schema

## Kullanım durumu
Kullanılabilir ve mantıklıdır.

### Rolü
- site genel varlığını tanımlar
- marka ve site URL ilişkisini destekler

### İçerebileceği alanlar
- site name
- url
- inLanguage / locale bilgisi
- publisher / organization ilişkisi (uygunsa)

### Kullanım yeri
- ana layout seviyesinde
veya
- Home sayfası seviyesinde

### Kural
WebSite schema sade tutulmalıdır.

---

## 2. Organization Schema

## Kullanım durumu
Kullanılabilir, ama yalnızca gerçek bilgilerle.

### Rolü
- WeCaHan markasını organization / brand katmanında tanımlar
- logo, URL ve temel kimlik sinyali verebilir

### İçerebileceği alanlar
- name
- url
- logo (varsa ve uygunsa)
- sameAs (yalnızca gerçek sosyal / marka linkleri varsa)
- description (kısa ve doğruysa)

### Kullanım yeri
- Home veya global seviyede

### Kural
Organization schema içine olmayan sosyal profiller, adresler veya ekip büyüklüğü konulmayacaktır.

---

## 3. WebPage Schema

## Kullanım durumu
Genel page-level yapı için mantıklıdır.

### Rolü
- sayfanın temel web page olduğunu belirtir
- generic page seviyesinde açıklık sağlar

### Kullanım alanları
- About
- Projects
- Contact
- Privacy Policy
- Terms of Service
- project detail sayfaları

### Kural
WebPage schema sayfa türünü destekleyen sade çerçeve olarak kullanılabilir.

---

## 4. AboutPage Schema

## Kullanım durumu
About sayfası için uygundur.

### Rolü
- About sayfasının niteliğini daha açık belirtir

### Kullanım alanı
- `/[locale]/about`

### Kural
AboutPage kullanılıyorsa metin ve title ile uyumlu olmalıdır.

---

## 5. ContactPage Schema

## Kullanım durumu
Contact sayfası için uygundur.

### Rolü
- sayfanın iletişim sayfası olduğunu belirtir
- Contact page’in yapısını teknik olarak daha açık kılar

### Kullanım alanı
- `/[locale]/contact`

### Kural
Contact sayfasında gerçek iletişim yapısı varsa kullanılabilir; sahte contact info ile şişirilmeyecektir.

---

## 6. CollectionPage Schema

## Kullanım durumu
Projects sayfası için düşünülebilir ve mantıklıdır.

### Rolü
- Projects sayfasını seçili proje listesi / collection olarak tanımlar

### Kullanım alanı
- `/[locale]/projects`

### Neden mantıklı?
Projects sayfası bir listing / collection davranışı taşır.

### Kural
CollectionPage kullanılırsa project card içeriğiyle uyumlu olmalıdır.

---

## 7. ProfilePage / Person Schema

## Kullanım durumu
Şu an için kurucu alanı küçük olduğu için zorunlu değildir.

### Değerlendirme
Founder alanı site ana ekseni olmadığı için bu ilk sürümde şart değildir.

### Kural
Sırf schema olsun diye Person yapısı eklenmeyecektir.

---

## 8. FAQPage Schema

## Kullanım durumu
Şu an için kullanılmayacaktır.

### Neden?
- site yapısında gerçek bir FAQ bölümü yok
- schema uğruna sahte SSS üretmek yanlış olur

### Kural
Gerçek FAQ bölümü oluşmadan FAQ schema eklenmeyecektir.

---

## 9. Product Schema

## Kullanım durumu
Şu an için kullanılmayacaktır.

### Neden?
- WeCaHan ana sitesi ürün katalog sayfası değil
- Prificient aktif, herkese açık ürün sayfası değil
- Prificient Tools detail page, ürün katalog mantığında değil
- Auto detail page hizmet / bağlam sayfasıdır

### Kural
Product schema, gerçek ürün e-ticaret / SaaS şartları oluşmadan kullanılmayacaktır.

---

## 10. Service Schema

## Kullanım durumu
Şu an için dikkatli olunmalı; ilk sürümde kullanılmaması daha doğru olabilir.

### Neden?
- ana site doğrudan service landing page değil
- Auto detail page bağlam sayfasıdır
- metadata ve içerik düzeyi service schema için yeterince net olmayabilir

### Kural
Service schema ilk sürümde zorunlu değildir ve gereksiz risk üretmemesi için eklenmeyebilir.

---

## 11. BreadcrumbList Schema

## Kullanım durumu
Project detail sayfalarında anlamlı olabilir.

### Rolü
- Projects → detail page hiyerarşisini destekler
- hem kullanıcı hem arama motoru bağlamı için faydalı olabilir

### Kullanım alanı
- `/[locale]/projects/[slug]`

### Kural
Breadcrumb UI gerçekten varsa schema da eklenebilir.  
UI’da olmayan şeyi sırf schema için uydurmak doğru değildir.

---

# Sayfa Bazlı Schema Planı

## Home
### Uygun schema’lar
- WebSite
- Organization
- WebPage (opsiyonel)

### Amaç
Marka ve site seviyesinde temel kimlik sinyali vermek.

---

## About
### Uygun schema’lar
- AboutPage
- WebPage

### Amaç
Sayfanın “hakkımızda” niteliğini açık etmek.

---

## Projects
### Uygun schema’lar
- CollectionPage
- WebPage

### Amaç
Projects sayfasını seçili proje listesi olarak göstermek.

---

## We CaHan Auto Detail
### Uygun schema
- WebPage
- BreadcrumbList (opsiyonel, breadcrumb varsa)

### Amaç
Proje bağlam sayfası sinyali vermek.

### Kural
Service veya Product schema ilk sürümde kullanılmayacaktır.

---

## Prificient Detail
### Uygun schema
- WebPage
- BreadcrumbList (opsiyonel)

### Amaç
Geliştirme sürecindeki ürün yönü için sade bağlam sayfası sinyali vermek.

### Kural
Product schema kullanılmayacaktır.

---

## Prificient Tools Detail
### Uygun schema
- WebPage
- BreadcrumbList (opsiyonel)

### Amaç
Aktif araç katmanı için bağlam sayfası sinyali vermek.

### Kural
Product veya SoftwareApplication schema ilk sürümde eklenmeyecektir.

---

## Contact
### Uygun schema
- ContactPage
- WebPage

### Amaç
İletişim sayfası olduğunu netleştirmek.

---

## Privacy Policy
### Uygun schema
- WebPage

### Amaç
Legal içerik sayfası olarak sade sinyal vermek.

---

## Terms of Service
### Uygun schema
- WebPage

### Amaç
Legal içerik sayfası olarak sade sinyal vermek.

---

# Schema İçeriğinde Gerçeklik Zorunluluğu
Schema verileri her zaman sayfa içeriğiyle tutarlı olmalıdır.

### Kural
Aşağıdaki şeyler schema içinde yer almayacaktır:
- olmayan telefon numarası
- olmayan adres
- olmayan ekip büyüklüğü
- olmayan sosyal profil
- olmayan review / rating
- olmayan product pricing
- olmayan FAQ

### Neden?
Schema içinde yanlış bilgi vermek küçük teknik hata değil, güven sorunudur.

---

# Indexlenebilir Sayfa Seti
İlk sürümde indexlenebilir sayfa seti şudur:

### TR
- `/tr`
- `/tr/about`
- `/tr/projects`
- `/tr/projects/wecahan-auto`
- `/tr/projects/prificient`
- `/tr/projects/prificient-tools`
- `/tr/contact`
- `/tr/privacy-policy`
- `/tr/terms-of-service`

### EN
- `/en`
- `/en/about`
- `/en/projects`
- `/en/projects/wecahan-auto`
- `/en/projects/prificient`
- `/en/projects/prificient-tools`
- `/en/contact`
- `/en/privacy-policy`
- `/en/terms-of-service`

### Kural
Bu route’lar:
- sitemap’te görünmeli
- indexlenebilir olmalı
- canonical ile desteklenmeli
- locale alternates ile eşleşmelidir

---

# Indexlenmemesi Gereken Olası Alanlar
Şu an planlı değil ama gelecekte aşağıdakiler noindex olabilir:

- preview build sayfaları
- dahili test path’leri
- taslak deneme route’ları
- gerçek kullanıcıya açık olmayan utility yüzeyler

### Kural
Noindex kararı route seviyesinde açık ve bilinçli verilecektir.

---

# Schema ve Metadata İlişkisi
Schema metadata’nın yerine geçmez; onu destekler.

### Bu nedenle:
- title ile schema uyumlu olmalı
- description ile schema description mantığı çelişmemeli
- sayfanın tipi metadata ve schema arasında tutarlı olmalı

### Örnek
Projects page:
- metadata → Projeler | WeCaHan
- schema → CollectionPage / WebPage

Bu uyumludur.

---

# Schema ve İç Linkleme İlişkisi
Schema, sayfa hiyerarşisini tek başına kurmaz.  
İç linkleme ile birlikte düşünülmelidir.

### Özellikle
- BreadcrumbList kullanılacaksa UI breadcrumb olmalı
- Projects page collection mantığı, project card linkleriyle desteklenmeli
- detail page hiyerarşisi iç linklerle de görünür olmalı

### Kural
Schema, UI ve routing gerçekliğini desteklemelidir; telafi etmeye çalışmamalıdır.

---

# Schema Teknik Uygulama İlkesi
Schema uygulaması mümkün olduğunca sade tutulmalıdır.

### Uygun yaklaşım
- JSON-LD kullanımı
- page / layout seviyesinde kontrollü ekleme
- data-driven schema üretimi
- locale-aware URL üretimi

### Kaçınılacak yaklaşım
- her component içinde ayrı küçük schema parçaları
- elle tekrarlanan JSON blokları
- sayfa içinde hardcoded ve dağınık structured data

### Kural
Schema üretimi metadata mimarisi ile uyumlu, temiz ve bakımı kolay olmalıdır.

---

# Minimum İlk Sürüm Schema Seti
İlk sürüm için yeterli schema seti şudur:

- Home → WebSite + Organization
- About → AboutPage
- Projects → CollectionPage
- Project detail sayfaları → WebPage
- Contact → ContactPage
- Legal sayfalar → WebPage
- Breadcrumb varsa detail page’lerde BreadcrumbList

Bu set ilk sürüm için profesyonel ve yeterli kabul edilir.

---

# Bilinçli Olarak Kullanılmayacak Schema Türleri
İlk sürümde özellikle kullanılmayacak schema’lar:

- FAQPage
- Product
- Service
- Review
- Rating
- SoftwareApplication
- JobPosting
- Article / BlogPosting
- Event

### Neden?
Çünkü mevcut site yapısında bunlar:
- gerçek değil
- gereksiz
- yanlış sinyal üretme riski taşır

---

# Indexing Kalite Testi
Bir sayfa için indexleme kararı verilirken şu sorular sorulmalıdır:

1. Bu sayfa gerçek ve anlamlı mı?
2. Kullanıcı için bağımsız değer taşıyor mu?
3. Metadata’sı özgün mü?
4. İç linkleme ile destekleniyor mu?
5. Locale karşılığı var mı?
6. Sitemap’e girmesi mantıklı mı?

Bu testten geçmeyen sayfalar indexlenme açısından yeniden değerlendirilmelidir.

---

# Schema Kalite Testi
Bir schema türü eklenirken şu sorular sorulmalıdır:

1. Bu schema sayfanın gerçek rolünü yansıtıyor mu?
2. Bu bilgi sayfa içeriğinde de var mı?
3. Bu alanlardaki veriler gerçek mi?
4. Bu schema olmadan sayfa daha dürüst mü kalırdı?
5. Sırf rich result umudu için mi ekleniyor?

Bu testten geçmeyen schema eklenmeyecektir.

---

## Nihai Karar
`wecahan.com` için schema ve indexing planı şu çizgide kurulacaktır:

- yalnızca gerçek sayfaları indexlemek
- sade ve doğru schema kullanmak
- Home’da site ve marka sinyali vermek
- About / Projects / Contact / detail page türlerini açıkça desteklemek
- Product / FAQ / Review gibi gerçeğe uymayan schema’lardan kaçınmak
- sitemap, canonical ve alternates yapısını birlikte düşünmek
- ana site ile proje siteleri arasında görev ayrımını korumak

Bu plan, WeCaHan ana sitesi için teknik olarak temiz, güvenilir ve sürdürülebilir indexleme / structured data standardı olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- metadata-and-seo-architecture
- routing-and-locale-architecture
- internal-linking-plan
- keyword-and-intent-map
- metadata-page-briefs
- pre-launch-checklist

Bu belgede tanımlanan schema ve indexing kuralları, açık karar alınmadan sahte product schema, gereksiz faq yapısı veya yanlış noindex / canonical kararlarıyla bozulmamalıdır.