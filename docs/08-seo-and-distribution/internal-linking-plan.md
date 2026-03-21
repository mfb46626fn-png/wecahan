# İç Linkleme Planı

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki **sayfalar arası iç link akışını**, **hangi sayfanın hangi sayfaya nasıl bağlanacağını**, **navigation, footer, CTA ve detail page geçişlerinin nasıl çalışacağını**, **SEO ve kullanıcı akışı açısından linklerin nasıl kurgulanacağını** ve **hangi linkleme hatalarından kaçınılacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site içinde yön duygusu güçlenir
- kullanıcı çıkışsız sayfalarda kalmaz
- Projects ve detail page akışı daha anlamlı çalışır
- footer ve CTA’lar rastgele değil, planlı biçimde kullanılır
- arama motorları için de daha temiz bir site içi yapı oluşur

Bu belge, WeCaHan ana sitesindeki iç bağlantı mimarisini tanımlar.

---

## Temel Karar
WeCaHan iç linkleme yapısı şu prensiple kurulacaktır:

**net yönlendirme + kısa akışlar + bağlamı koruyan geçişler**

Bu şu anlama gelir:
- her önemli sayfadan mantıklı bir sonraki adıma geçilebilmeli
- kullanıcı gereksiz derinlikte kaybolmamalı
- linkler yalnızca SEO için değil, kullanıcı akışı için de anlamlı olmalı
- project detail sayfaları bağlam verip doğru yere yönlendirmeli
- footer ve header temel omurga olarak çalışmalı

### Kural
İç linkleme, sonradan serpiştirilmiş rastgele bağlantılar yerine planlı bir yapı olarak ele alınacaktır.

---

## İç Linklemenin Sitedeki Rolü
WeCaHan sitesinde iç linkleme şu işlevleri görür:

1. Kullanıcıya yön verir  
2. Sayfalar arası ilişkiyi görünür kılar  
3. Marka ile proje ekosistemi bağını güçlendirir  
4. SEO açısından sayfa önemini dağıtır  
5. Sayfaların “yetim” kalmasını önler  

### Kural
Her ana sayfa site içinde en az birden fazla mantıklı iç bağlantı ile desteklenmelidir.

---

## Ana İç Link Omurgası
Sitedeki temel akış şu omurga etrafında kurulacaktır:

- Home → About
- Home → Projects
- Home → Contact
- Home → seçili Project Detail sayfaları
- About → Projects
- About → Contact
- Projects → tüm Project Detail sayfaları
- Project Detail → Projects
- Project Detail → Contact
- Project Detail → ilgili dış proje sitesi
- Contact → Privacy Policy
- Footer → tüm ana sayfalar + legal sayfalar + proje detail sayfaları

Bu omurga korunmalıdır.

---

## Birincil İç Link Katmanları
İç linkler dört ana katmanda düşünülmelidir:

### 1. Global Navigation Linkleri
Header ve mobil menü

### 2. Section CTA Linkleri
Hero, section sonu ve yönlendirici bloklar

### 3. Contextual Content Linkleri
Project detail içindeki related / brand connection / ecosystem geçişleri

### 4. Footer Linkleri
Sayfa sonundaki kurumsal yönlendirme katmanı

### Kural
Bu dört katman birbiriyle çelişmeyecek şekilde çalışmalıdır.

---

## Header Linkleme Planı

## Zorunlu linkler
Header’da şu linkler bulunacaktır:
- Hakkımızda
- Projeler
- İletişim

### Logo davranışı
Logo veya marka adı:
- her zaman locale’e uygun ana sayfaya döner

### Locale örnekleri
TR:
- `/tr`
- `/tr/about`
- `/tr/projects`
- `/tr/contact`

EN:
- `/en`
- `/en/about`
- `/en/projects`
- `/en/contact`

### Kural
Header, sitenin en temel yön katmanıdır.  
Burada gereksiz link çoğaltılmayacaktır.

---

## Footer Linkleme Planı

## Zorunlu link grupları
Footer şu grupları içermelidir:
- Hakkımızda
- Projeler
- İletişim
- Gizlilik Politikası
- Kullanım Koşulları
- proje detail linkleri

### Footer proje linkleri
Footer’daki proje linkleri tercihen şu sayfalara gitmelidir:
- `/[locale]/projects/wecahan-auto`
- `/[locale]/projects/prificient`
- `/[locale]/projects/prificient-tools`

### Neden detail page?
Çünkü WeCaHan ana sitesi bağlam sunar.  
Kullanıcı önce WeCaHan içindeki project detail’e gelsin, oradan dış siteye geçsin.

### Kural
Footer proje linkleri doğrudan dış siteye atlamak zorunda değildir; bağlamı koruyan detail-first yaklaşım tercih edilir.

---

## Home Sayfası İç Linkleme Planı

## Hero
Home hero’dan şu linkler çıkmalıdır:
- Projeleri İncele → Projects page
- Hakkımızda → About page

### URL mantığı
TR:
- `/tr/projects`
- `/tr/about`

EN:
- `/en/projects`
- `/en/about`

---

## Home Capability / About Snapshot Alanı
Bu alan doğrudan büyük link yükü taşımaz.  
Ama section sonunda veya içinde şu CTA olabilir:
- Hakkımızda

### Hedef
- About page

---

## Home Selected Projects
Home’daki seçili proje kartları şu sayfalara gitmelidir:
- ilgili project detail page

### Proje kartı hedefleri
- We CaHan Auto → `/[locale]/projects/wecahan-auto`
- Prificient → `/[locale]/projects/prificient`
- Prificient Tools → `/[locale]/projects/prificient-tools`

### Section CTA
- Tüm Projeleri Gör → `/[locale]/projects`

### Kural
Home’daki proje kartları doğrudan dış siteye gitmeyecek; bağlamı koruyan detail page’e gidecektir.

---

## Home Founder Snapshot
Founder alanı varsa CTA:
- Hakkımızda

### Hedef
- `/[locale]/about`

---

## Home Contact CTA
Ana CTA:
- İletişime Geç

### Hedef
- `/[locale]/contact`

---

## About Sayfası İç Linkleme Planı

## Hero / üst katman
About sayfasında header ve footer dışında ana içerik şu yönleri desteklemelidir:
- Projects
- Contact

---

## About Overview ve Mission / Vision
Bu alanlarda doğrudan yoğun link gerekmeyebilir.  
Ama sayfa sonu CTA alanı mutlaka yön vermelidir.

---

## About CTA Alanı
Birincil CTA:
- Projeleri Gör → `/[locale]/projects`

İkincil CTA:
- İletişime Geç → `/[locale]/contact`

### Kural
About sayfası çıkışsız bir bilgi duvarı gibi kalmayacaktır.

---

## Projects Sayfası İç Linkleme Planı

## Hero
Projects hero’dan ayrı CTA şart değildir; asıl link katmanı grid içindedir.

---

## Projects Grid
Her project card şu hedefe gider:
- ilgili project detail page

### Kart hedefleri
- `/[locale]/projects/wecahan-auto`
- `/[locale]/projects/prificient`
- `/[locale]/projects/prificient-tools`

### İkincil dış site linki gerekiyorsa
Bu, kart içinde ana CTA’yı bastırmadan opsiyonel olabilir.  
Ama ilk tercih detail page’dir.

---

## Projects Ecosystem Note
Bu alan text ağırlıklı olabilir; ağır link gerektirmez.  
Gerekirse Contact’a küçük CTA bağlanabilir.

---

## Projects Contact CTA
- İletişime Geç → `/[locale]/contact`

---

## Project Detail Sayfaları İç Linkleme Planı

## Genel kural
Her project detail sayfası en az şu iç linkleri taşımalıdır:
- Projects page’e dönüş
- Contact page’e geçiş
- WeCaHan marka bağlamı üzerinden gerekirse Projects veya About bağlantısı

---

## Project Detail Hero
Hero içinde:
- ana CTA → ilgili dış proje sitesi veya bilgi hedefi
- ikincil CTA → Projects page veya Contact page

### Örnekler

#### We CaHan Auto
- Proje Sitesini Ziyaret Et → `auto.wecahan.com`
- Projelere Dön → `/[locale]/projects`

#### Prificient
- Daha Fazla Bilgi / Projelere Dön → `/[locale]/projects`
- Prificient Tools’u İncele → `/[locale]/projects/prificient-tools`

#### Prificient Tools
- Siteyi Ziyaret Et → `tools.prificient.com`
- Prificient’i İncele → `/[locale]/projects/prificient`

---

## Breadcrumb / Back Link
Project detail sayfasında küçük geri dönüş linki veya breadcrumb bulunmalıdır:

- Projeler / We CaHan Auto
- Projeler / Prificient
- Projeler / Prificient Tools

### Tıklanabilir kısım
- “Projeler” → `/[locale]/projects`

### Kural
Bu küçük link hem UX hem SEO bağlamı açısından değerlidir.

---

## Project Brand Connection Block
Bu blok içinde şu tip iç linkler kullanılabilir:
- Projeler → `/[locale]/projects`
- Hakkımızda → `/[locale]/about` (gerekiyorsa)

### Amaç
Projenin WeCaHan içindeki yerini güçlendirmek.

---

## Project CTA Section
Detail page sonunda şu akışlar desteklenebilir:

### We CaHan Auto
- Proje Sitesini Ziyaret Et → dış site
- İletişime Geç → `/[locale]/contact`

### Prificient
- Prificient Tools’u İncele → `/[locale]/projects/prificient-tools`
- İletişime Geç → `/[locale]/contact`

### Prificient Tools
- Siteyi Ziyaret Et → dış site
- Projelere Dön → `/[locale]/projects`

### Kural
Detail sayfa sonu mutlaka kullanıcıya bir sonraki mantıklı adımı vermelidir.

---

## Project-to-Project İç Linkleme Mantığı
Project detail sayfaları gerektiğinde birbirine bağlanabilir; ama bu planlı yapılmalıdır.

### Uygun ilişki
- Prificient → Prificient Tools
- Prificient Tools → Prificient

### Daha zayıf ama mümkün ilişki
- We CaHan Auto → Projects page üzerinden ekosisteme dönüş

### Kural
Project-to-project linkleme yalnızca gerçekten anlamlı bağ varsa yapılmalıdır.

---

## Contact Sayfası İç Linkleme Planı

## Contact Hero ve intro
Bu alanlar ağır link yükü taşımaz.

---

## Privacy Note
Contact sayfasında küçük ama kritik bir iç link bulunmalıdır:
- Gizlilik Politikası → `/[locale]/privacy-policy`

### Neden?
Form ile privacy arasında açık bağ kurar.

---

## Contact Footer
Footer üzerinden şu linkler zaten desteklenir:
- About
- Projects
- Privacy Policy
- Terms of Service

### Kural
Contact sayfası izole kalmayacaktır.

---

## Legal Sayfalar İç Linkleme Planı

## Privacy Policy
İçerikte gerektiğinde Contact sayfasına link verilebilir:
- İletişim → `/[locale]/contact`

Footer üzerinden:
- Terms of Service
- About
- Projects
- Contact

---

## Terms of Service
İçerikte gerektiğinde Contact sayfasına link verilebilir:
- İletişim → `/[locale]/contact`

Footer üzerinden:
- Privacy Policy
- About
- Projects
- Contact

### Kural
Legal sayfalar tamamen kopuk “yetim” sayfalar olmayacaktır.

---

## İç Link Gücü Önceliği
Tüm linkler aynı önemde değildir.  
Aşağıdaki öncelik sırası izlenmelidir:

### Yüksek öncelikli linkler
- Header nav
- Home hero CTA’ları
- Home selected project kartları
- Projects grid kartları
- Project detail CTA’ları
- Footer ana linkleri

### Orta öncelikli linkler
- About CTA’ları
- Brand connection blokları
- Contact privacy note’u
- breadcrumb geri dönüşleri

### Düşük öncelikli linkler
- küçük metin içi linkler
- opsiyonel contextual geçişler

### Kural
En kritik sayfa akışı birincil link katmanlarıyla zaten kurulmuş olmalıdır.

---

## Anchor Text İlkeleri
İç linklerde kullanılan metinler açık olmalıdır.

### Uygun anchor metinleri
- Hakkımızda
- Projeler
- İletişim
- Detayları Gör
- Projeyi İncele
- Prificient Tools’u İncele
- Gizlilik Politikası
- Kullanım Koşulları

### Uygun olmayan anchor metinleri
- Buraya tıklayın
- Daha fazlası
- Keşfet
- Şimdi gör
- Gücünü artır

### Kural
Link metni nereye gideceğini açıkça hissettirmelidir.

---

## Locale Uyumlu Linkleme
Tüm iç linkler aktif locale’e göre çözülmelidir.

### TR örnekleri
- `/tr/about`
- `/tr/projects`
- `/tr/contact`

### EN örnekleri
- `/en/about`
- `/en/projects`
- `/en/contact`

### Project detail örnekleri
- `/tr/projects/prificient`
- `/en/projects/prificient`

### Kural
Yanlış locale linki kullanıcıyı diğer dile düşürmeyecektir.

---

## Footer ve Header Dışındaki İç Link Sınırı
Her paragrafı linklerle doldurmak doğru değildir.

### Kural
İç linkler:
- anlamlı
- az
- yönlendirici
olmalıdır

### Yapılmayacaklar
- her metin bloğuna 3 farklı link sıkıştırmak
- SEO için anlamsız metin içi linkleme yapmak
- kullanıcıyı aynı anda çok farklı yönlere çekmek

WeCaHan’da iç linkleme yoğun değil, akıllı olacaktır.

---

## İç Linkleme ve SEO İlişkisi
İç linkleme SEO’ya yardım eder; ama yalnızca SEO için yapılmayacaktır.

### Yardım ettiği alanlar
- sayfa keşfi
- hiyerarşi sinyali
- detail page’lerin güçlenmesi
- legal ve contact sayfalarının yalnız kalmaması
- project detail sayfalarının bağlamsal konumunun artması

### Kural
İç linkler kullanıcı akışına hizmet ediyorsa SEO’ya da zaten yardım eder.

---

## No-Orphan Page Kuralı
Hiçbir önemli sayfa yetim bırakılmamalıdır.

### Yetim sayfa olmaması gerekenler
- About
- Projects
- tüm project detail sayfaları
- Contact
- Privacy Policy
- Terms of Service

### Kontrol mantığı
Her sayfa en az:
- header/footer
veya
- CTA/contextual link
üzerinden erişilebilir olmalıdır

---

## İç Linkleme Haritası — Kısa Akış Özeti

### Home
→ About  
→ Projects  
→ Contact  
→ 3 Project Detail sayfası  

### About
→ Projects  
→ Contact  

### Projects
→ 3 Project Detail sayfası  
→ Contact  

### We CaHan Auto Detail
→ Projects  
→ Contact  
→ auto.wecahan.com  

### Prificient Detail
→ Projects  
→ Contact  
→ Prificient Tools detail  
→ prificient.com (gerekiyorsa)  

### Prificient Tools Detail
→ Projects  
→ Prificient detail  
→ tools.prificient.com  

### Contact
→ Privacy Policy  
→ Footer üzerinden diğer ana sayfalar  

### Privacy / Terms
→ Contact  
→ Footer üzerinden diğer ana sayfalar  

---

## Kaçınılacak İç Linkleme Hataları

### 1. Home’dan project detail yerine direkt dış siteye atmak
Bağlam kaybolur.

### 2. Detail page’den geri dönüş vermemek
Kullanıcı çıkışsız kalır.

### 3. Footer proje linklerini boş bırakmak veya kırık route’a bağlamak
Güven kaybı yaratır.

### 4. Yanlış locale linki vermek
TR sayfadan EN sayfaya yanlışlıkla düşmek bozuk deneyim üretir.

### 5. Metin içine anlamsız link spam yerleştirmek
Hem kullanıcı deneyimini hem tonu bozar.

### 6. Contact ve legal sayfaları kopuk bırakmak
Kurumsal kalite düşer.

---

## Teknik Uygulama Notu
İç linkler helper tabanlı veya route builder mantığıyla üretilebilir.

### Önerilen yardımcılar
- `buildLocalizedPath(locale, path)`
- `getProjectPath(locale, slug)`
- `getLegalPath(locale, key)`

### Kural
Locale string birleştirme ve route üretimi her component içinde manuel tekrarlanmayacaktır.

---

## İç Linkleme Test Soruları
Her yeni link eklenirken şu sorular sorulmalıdır:

1. Bu link kullanıcı için gerçekten anlamlı mı?
2. Bu link doğru locale’e gidiyor mu?
3. Bu link bağlamı koruyor mu?
4. Bu link gereksiz dış yönlendirme yapıyor mu?
5. Bu sayfa linklenmezse yetim kalır mı?
6. Anchor text açık mı?

Bu testten geçmeyen linkler kullanılmamalıdır.

---

## Minimum İlk Sürüm İç Link Seti
İlk sürüm için minimum iç link yapısı şudur:

- Header → About / Projects / Contact
- Home hero → Projects / About
- Home selected projects → 3 project detail sayfası
- Home contact CTA → Contact
- About CTA → Projects / Contact
- Projects grid → 3 project detail sayfası
- Detail page hero/backlink → Projects
- Detail page CTA → Contact veya related project
- Contact privacy note → Privacy Policy
- Footer → main pages + project detail pages + legal

Bu set, ilk sürüm için yeterli ve güçlü kabul edilir.

---

## Nihai Karar
`wecahan.com` için iç linkleme planı şu çizgide kurulacaktır:

- header ve footer ile güçlü ana omurga
- Home’dan Projects ve detail page’lere net akış
- About’tan Projects ve Contact’a yön
- Projects’ten tüm detail page’lere merkezi geçiş
- detail page’lerde bağlamı koruyan geri dönüş ve ilgili yönler
- Contact ile Privacy arasında açık bağ
- locale uyumlu ve açık anchor text’li bağlantılar

Bu plan, WeCaHan ana sitesinin hem kullanıcı deneyimi hem SEO açısından düzenli, anlaşılır ve profesyonel iç bağlantı mimarisi olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- routing-and-locale-architecture
- metadata-and-seo-architecture
- keyword-and-intent-map
- metadata-page-briefs
- pre-launch-checklist

Bu belgede tanımlanan iç linkleme yapısı, açık karar alınmadan rastgele CTA serpiştirme, gereksiz dış yönlendirme veya kırık locale linkleriyle bozulmamalıdır.