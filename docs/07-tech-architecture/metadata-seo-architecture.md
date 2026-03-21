# Metadata ve SEO Mimarisi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki **page title**, **meta description**, **Open Graph alanları**, **locale alternates**, **canonical mantığı**, **metadata veri kaynakları**, **sayfa bazlı SEO öncelikleri** ve **ana site ile proje detail sayfalarının arama motoru açısından nasıl konumlanacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- metadata rastgele yazılmaz
- sayfalar başlık ve açıklama açısından tutarlı görünür
- TR / EN locale yapısı SEO tarafında da temiz korunur
- proje detail sayfaları anlamlı ve paylaşılabilir hale gelir
- ana site için sade ama profesyonel bir SEO omurgası kurulmuş olur

Bu belge, WeCaHan ana sitesinin metadata ve temel SEO yapısını tanımlar.

---

## Temel Karar
`wecahan.com` için SEO yaklaşımı şu prensiple kurulacaktır:

**temiz metadata + açık sayfa amacı + kontrollü indexlenebilirlik + locale uyumu**

Bu şu anlama gelir:
- her sayfanın net bir title ve description’ı olacak
- metadata sayfanın gerçek içeriğini yansıtacak
- ana site ile proje siteleri arasındaki ayrım korunacak
- gereksiz keyword doldurma yapılmayacak
- TR / EN sürümler birbirini destekleyecek
- teknik SEO, gösterişli ama boş başlıklardan daha değerli kabul edilecek

---

## SEO’nun Site İçindeki Rolü
WeCaHan ana sitesi bir satış landing page’i değildir.  
Bu yüzden SEO yaklaşımı da buna göre kurulmalıdır.

### Amaç
- marka aramalarında temiz görünmek
- ana sayfaların ne anlattığını arama motoruna net söylemek
- proje detail sayfalarını anlamlı kılmak
- Contact ve legal sayfaları profesyonel metadata ile desteklemek
- paylaşılabilir, düzenli ve güven veren bir site yapısı oluşturmak

### Amaç olmayan şey
- her sayfayı agresif trafik sayfasına çevirmek
- keyword spam yapmak
- aynı kelimeleri her sayfaya doldurmak
- büyük SaaS sitesi gibi sahte SEO mimarisi kurmak

---

## Metadata İlkeleri
WeCaHan’daki metadata şu özellikleri taşımalıdır:

- kısa
- net
- sayfaya özgü
- tekrar etmeyen
- arama niyetine uygun
- marka ile uyumlu
- abartısız

### Özellikle kaçınılacak şeyler
- yapay derecede pazarlama kokan title’lar
- çok uzun meta description’lar
- tüm sayfalarda aynı açıklamayı kullanmak
- sayfa içeriğinde olmayan iddiaları metadata’da yazmak
- gereksiz büyük kelime kümeleri

---

## Temel Metadata Katmanları
Her sayfa için mümkün olduğunca aşağıdaki metadata alanları düşünülmelidir:

- title
- description
- open graph title
- open graph description
- canonical
- alternates / locale links
- robots (gerekiyorsa)
- twitter metadata (opsiyonel ama desteklenebilir)

### Kural
Title ve description minimum zorunlu katman kabul edilir.

---

## Title Yazım İlkeleri
Title yapısı şu çizgide olmalıdır:

- sayfanın ne olduğunu açıkça söyler
- çok uzun olmaz
- marka adıyla mantıklı ilişki kurar
- sayfa bazında özgün olur

### Uygun title yapıları
- WeCaHan
- Hakkımızda | WeCaHan
- Projeler | WeCaHan
- We CaHan Auto | WeCaHan
- Prificient | WeCaHan
- Prificient Tools | WeCaHan
- İletişim | WeCaHan
- Gizlilik Politikası | WeCaHan
- Kullanım Koşulları | WeCaHan

### Uygun olmayan title yapıları
- Dijital Dönüşümün Geleceği | WeCaHan
- Dünyayı Değiştiren Teknoloji | WeCaHan
- Oyun Değiştiren Otomasyon Platformu | WeCaHan
- En Gelişmiş Finansal Analiz Sistemi | WeCaHan

### Kural
Title, sayfanın gerçek rolünü söylemelidir.

---

## Meta Description Yazım İlkeleri
Meta description:
- sayfanın ne anlattığını 1–2 cümlede açık etmeli
- gereksiz slogan gibi durmamalı
- title’ın aynısını tekrar etmemeli
- arama sonucunda temiz bir açıklık sunmalıdır

### Uygun yaklaşım
- kısa
- bilgi verici
- marka tonuna uyumlu
- abartısız

### Uygun olmayan yaklaşım
- CTA gibi yazmak
- satış cümlesi kurmak
- “şimdi keşfet” gibi zorlamak
- aşırı genel ve boş teknoloji dili kullanmak

---

## Open Graph İlkeleri
Open Graph metadata, sayfaların paylaşım anındaki görünümünü destekler.

### Amaç
- link paylaşımında daha temiz görünüm
- sayfa amacının sosyal preview’de de anlaşılması
- proje detail sayfalarının bağlamını korumak

### OG title
Genelde page title ile aynı veya çok yakın olabilir.

### OG description
Meta description ile aynı veya hafif optimize bir versiyon olabilir.

### OG image
Mümkünse ileride siteye özel bir temel sosyal paylaşım görsel sistemi kurulabilir.  
İlk aşamada sade, marka uyumlu tek bir güvenli fallback görsel de yeterlidir.

### Kural
OG görsel yok diye rastgele düşük kaliteli image kullanılmayacaktır.

---

## Canonical Yapısı
Canonical mantığı locale ve route düzeni ile uyumlu olmalıdır.

### Amaç
- arama motoruna doğru ana URL’yi bildirmek
- locale’ler arası karışıklığı azaltmak
- route yapısında netlik sağlamak

### Kural
Her sayfanın canonical URL’si kendi locale ve path yapısına göre tutarlı olmalıdır.

### Örnek mantık
- TR home canonical → `/tr`
- EN home canonical → `/en`
veya
uygulamadaki default locale tercihine göre tekil mantık korunmalıdır

### En önemli şey
Canonical yapısı routing mimarisiyle çelişmemelidir.

---

## Alternates / Locale SEO Yapısı
TR ve EN sayfalar birbirinin locale karşılığı olarak tanımlanmalıdır.

### Amaç
- çok dilli yapıyı arama motoruna temiz anlatmak
- sayfa eşleşmelerini netleştirmek
- yanlış dilde sayfa indekslenme sorunlarını azaltmak

### Kural
Her temel sayfa için uygun locale alternates düşünülmelidir:
- TR karşılığı
- EN karşılığı

### Örnek mantık
- `/tr/projects/prificient`
- `/en/projects/prificient`

### Kural
Dil değiştirici mantığı ile alternates mantığı uyumlu olmalıdır.

---

## Sayfa Bazlı Metadata Kaynağı
Metadata page içinde elle uzun uzun yazılmamalıdır.

### Önerilen kaynaklar
- `data/seo/metadata.ts`
- project metadata için `projects.ts` içindeki türetilebilir alanlar
- locale bazlı metadata map’leri

### Kural
Aşağıdakiler merkezi yönetilmelidir:
- page title
- page description
- project detail title/description
- legal page metadata
- contact page metadata

---

## Ana Sayfa Metadata Mantığı
Home sayfası metadata’sı marka ve ana yönü açık etmelidir.

### Home title yönü
- WeCaHan

### Home description yönü
- WeCaHan, otomasyon, finansal görünürlük ve pratik dijital araçlar ekseninde seçili projeler geliştiren teknoloji odaklı bir marka yapısıdır.

### Alternatif daha kısa description
- WeCaHan, seçili dijital sistemler ve proje alanları geliştiren bir merkez markadır.

### Kural
Home metadata çok fazla proje adıyla şişirilmeyecektir.

---

## About Metadata Mantığı
About sayfası metadata’sı marka yapısını ve yaklaşımını açıklamalıdır.

### Title
- Hakkımızda | WeCaHan

### Description yönü
- WeCaHan’ın yaklaşımı, odak alanları ve proje ekosistemi hakkında daha fazla bilgi alın.

### Alternatif daha güçlü açıklama
- WeCaHan’ın otomasyon, finansal görünürlük ve pratik araçlar etrafında şekillenen marka yaklaşımını keşfedin.

### Kural
About metadata, Home ile aynı description’ı kopyalamayacaktır.

---

## Projects Metadata Mantığı
Projects sayfası metadata’sı seçili proje ekosistemini belirtmelidir.

### Title
- Projeler | WeCaHan

### Description yönü
- WeCaHan altında geliştirilen seçili proje alanlarını, mevcut durumlarını ve ilgili detay sayfalarını inceleyin.

### Kural
Projects metadata çok genel “portfolyo” dili kullanmayacaktır.

---

## We CaHan Auto Metadata Mantığı
Bu page aktif proje alanı olarak net görünmelidir.

### Title
- We CaHan Auto | WeCaHan

### Description yönü
- We CaHan Auto, manuel iş akışlarını daha sistemli otomasyon yapılarına dönüştürmeye odaklanan aktif bir WeCaHan proje alanıdır.

### Kural
Metadata bu projeyi satış sayfası gibi göstermemelidir.

---

## Prificient Metadata Mantığı
Bu page güçlü ama dürüst görünmelidir.

### Title
- Prificient | WeCaHan

### Description yönü
- Prificient, e-ticaret satıcıları için finansal görünürlük ve analiz odaklı, şu anda geliştirme sürecinde olan bir WeCaHan ürün yönüdür.

### Kural
Description içinde aktif / yayında gibi algı üreten dil kullanılmayacaktır.

---

## Prificient Tools Metadata Mantığı
Bu page aktif yardımcı araç yapısı gibi görünmelidir.

### Title
- Prificient Tools | WeCaHan

### Description yönü
- Prificient Tools, e-ticaret kullanıcıları için ücretsiz ve pratik araçlar sunan aktif bir WeCaHan proje alanıdır.

### Kural
Description bu projeyi dev platform gibi anlatmayacaktır.

---

## Contact Metadata Mantığı
Contact sayfası sade ve açık görünmelidir.

### Title
- İletişim | WeCaHan

### Description yönü
- WeCaHan, projeleri ve genel yapısı hakkında iletişime geçmek için iletişim sayfasını kullanabilirsiniz.

### Kural
Contact metadata’da satış dili kullanılmayacaktır.

---

## Legal Metadata Mantığı
Legal sayfalar sade ama profesyonel görünmelidir.

### Privacy Policy
#### Title
- Gizlilik Politikası | WeCaHan

#### Description
- WeCaHan ile paylaşılan bilgilerin hangi amaçlarla değerlendirilebileceğini açıklayan gizlilik politikası.

### Terms of Service
#### Title
- Kullanım Koşulları | WeCaHan

#### Description
- WeCaHan ana sitesinin kullanımına dair temel koşulları ve çerçeveyi açıklayan sayfa.

### Kural
Legal metadata, “kurumsal legal” gibi anlamsız genel ifadelerle yazılmayacaktır.

---

## Indexlenebilirlik Kararı
İlk aşamada temel sayfalar indexlenebilir olmalıdır.

### Indexlenmesi beklenen sayfalar
- Home
- About
- Projects
- tüm onaylı project detail sayfaları
- Contact
- Privacy Policy
- Terms of Service

### Neden?
Bu sayfalar gerçek, çalışır ve anlamlı site yüzeyleridir.

### Kural
Bu sayfalar yanlışlıkla noindex bırakılmayacaktır.

---

## Noindex Düşünülebilecek Alanlar
Şu an ana site için planlı noindex alanı yoktur.  
Ama ileride olursa şu tür alanlar düşünülebilir:

- dahili test sayfaları
- preview route’ları
- staging benzeri alanlar
- kullanılmayan taslak route’lar

### Kural
Gerçek site sayfaları staging mantığıyla noindex unutulmuş halde bırakılmayacaktır.

---

## Robots Mantığı
Robots ayarları basit ve temiz tutulmalıdır.

### Genel ilke
- gerçek ana sayfalar indexlenebilir
- staging / test alanları indexlenmez
- önemli sayfalar crawl edilebilir

### Kural
Robots politikası basit olmalı; gereksiz karmaşık kurallara dönüştürülmemelidir.

---

## Sitemap Mantığı
Sitemap yapısı mevcut sayfa mimarisi ile uyumlu olmalıdır.

### Sitemap’te bulunması gerekenler
- home
- about
- projects
- project detail sayfaları
- contact
- privacy policy
- terms of service

### Locale durumu
TR ve EN route’lar yapıya göre ayrı ayrı görünmelidir.

### Kural
404 veren veya kullanılmayan rotalar sitemap’e düşmemelidir.

---

## Structured Metadata ile İçeriğin Uyumu
Metadata ile gerçek sayfa içeriği birbirine yakın olmalıdır.

### Kural
Aşağıdaki tür çelişkiler olmayacaktır:
- metadata’da “aktif ürün” yazıp içerikte geliştirme sürecinde demek
- metadata’da “otomasyon hizmetleri” yazıp sayfada yalnızca marka anlatısı sunmak
- title’da olmayan bir konuya odaklanmak

### Amaç
Arama sonucu ile sayfa deneyimi arasında güvenli bir geçiş kurmak.

---

## Project Site ile Ana Site Ayrımı
Ana site metadata’sı, proje sitelerinin yerini almaya çalışmamalıdır.

### Bu ne demek?
- `wecahan.com` üzerindeki Prificient sayfası, `prificient.com`’un birebir SEO ikizi gibi davranmayacak
- `wecahan.com` üzerindeki Auto sayfası, `auto.wecahan.com` satış / hizmet sayfasının yerine geçmeye çalışmayacak

### Kural
Ana site metadata’sı bağlam sunar; proje sitesinin tam yerini almaz.

---

## Marka Adı Kullanım İlkesi
Metadata’da marka adı mantıklı ama kontrollü kullanılmalıdır.

### Uygun kullanım
- Sayfa Adı | WeCaHan
- WeCaHan (home)

### Uygun olmayan kullanım
- WeCaHan | WeCaHan Hakkında | WeCaHan Projects
- title içinde gereksiz tekrar
- description’da aynı cümlenin içinde marka adını 3 kez kullanmak

### Kural
Marka görünür olacak ama spam gibi görünmeyecektir.

---

## SEO’da Kaçınılacak Diller
Aşağıdaki tür SEO dili kullanılmayacaktır:

- en iyi
- en gelişmiş
- oyun değiştirici
- devrimsel
- pazar lideri
- next-gen
- category-defining
- future of automation
- future of finance

### Neden?
Çünkü bunlar:
- gerçek değilse güven zedeler
- WeCaHan tonuna aykırıdır
- metadata’yı ucuz pazarlama cümlesine çevirir

---

## Teknik Metadata Uygulama Kararı
Next.js metadata sistemi mümkün olduğunca framework-native biçimde kullanılmalıdır.

### Uygun yaklaşım
- route-level metadata
- generateMetadata kullanımı (gerekiyorsa)
- project detail sayfalarında slug tabanlı metadata üretimi
- locale bilgisi ile metadata üretimi

### Kural
Metadata mantığı page içinde manuel `<head>` karmaşasına dönüştürülmeyecektir.

---

## Project Detail Metadata Üretimi
Project detail metadata ideal olarak project data’dan türetilmelidir.

### Neden?
- slug, title ve status aynı kaynaktan gelir
- description tutarlı olur
- yeni proje eklenirse genişleme kolaylaşır

### Minimum türetilebilir alanlar
- title
- description

### Opsiyonel alanlar
- OG title
- OG description
- canonical
- alternates

---

## Locale Metadata Üretimi
TR ve EN metadata aynı mantıkla ama dil bazlı üretilmelidir.

### Kural
- anlam aynı kalmalı
- ton aynı kalmalı
- İngilizce sürüm çok pazarlama kokmamalı
- Türkçe sürüm çok düz kalırken İngilizce sürüm parlatılmamalı

---

## Metadata Kalite Testi
Her metadata seti şu testten geçmelidir:

1. Sayfanın gerçek rolünü anlatıyor mu?
2. Başlık kısa ve net mi?
3. Description açıklayıcı mı?
4. Metadata ile sayfa içeriği çelişiyor mu?
5. SEO uğruna pazarlama diline kayıyor mu?
6. Aynı metadata başka sayfada tekrar ediyor mu?

Bu testten geçmeyen metadata yeniden yazılmalıdır.

---

## Minimum Metadata Seti
İlk sürüm için minimum kabul edilebilir metadata seti şudur:

### Her sayfa için
- title
- description
- canonical
- locale alternates

### Proje sayfaları için ek olarak
- OG title
- OG description

### Site genelinde
- sitemap
- temel robots mantığı

Bu set, WeCaHan ana sitesi için yeterli profesyonel başlangıç seviyesidir.

---

## Önerilen Veri Kaynağı Yapısı

### Ana dosya
- `data/seo/metadata.ts`

### Yardımcı kaynaklar
- `data/projects/projects.ts`
- `data/site/site-config.ts`

### Getter mantığı
- `getPageMetadata(locale, pageKey)`
- `getProjectMetadata(locale, slug)`

### Kural
Metadata dağınık sabitler halinde sayfalara gömülmemelidir.

---

## Nihai Karar
`wecahan.com` metadata ve SEO mimarisi şu çizgide kilitlenir:

- sayfa bazlı net title ve description
- locale uyumlu alternates yapısı
- canonical disiplini
- project detail metadata’nın data-driven üretilmesi
- indexlenebilir temel site yüzeyleri
- sade ama profesyonel SEO yaklaşımı
- proje siteleri ile ana site arasında bağlam farkını koruyan metadata

Bu mimari, WeCaHan’ın arama motorlarında temiz, tutarlı ve güven veren görünmesini sağlayan temel yapı olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- content-data-model
- routing-and-locale-architecture
- keyword-and-intent-map
- metadata-page-briefs
- schema-and-indexing-plan
- pre-launch-checklist

Bu belgede tanımlanan metadata ve SEO kuralları, açık karar alınmadan spammy title, tekrarlı description veya sahte pazarlama dili yönüne kaydırılmamalıdır.