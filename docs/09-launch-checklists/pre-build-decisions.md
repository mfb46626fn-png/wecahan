# Build Öncesi Kararlar

## Belgenin Amacı
Bu belge, `wecahan.com` için kodlamaya başlamadan önce **hangi temel ürün, tasarım, içerik ve teknik kararların kesinleşmiş kabul edildiğini**, **hangi alanların artık tartışma konusu olmadığını**, **hangi şeylerin ilk sürüm dışında bırakıldığını** ve **uygulama sürecinde Cursor veya geliştiricinin kendi yorumuyla yön değiştirmemesi için hangi sınırların korunacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- kodlama sürecinde yön kayması azalır
- “tasarım değişsin mi, rota değişsin mi, bu sayfa neydi?” gibi temel sorular tekrar tekrar açılmaz
- ilk sürüm kapsamı netleşir
- proje daha kontrollü ilerler
- docs’taki kararlar uygulama sırasında kaybolmaz

Bu belge, WeCaHan sitesi için build başlamadan önce sabitlenen temel kararların özetidir.

---

## Temel Karar
Bu dokümandaki maddeler, `wecahan.com` ilk sürümü için **onaylanmış kararlar** olarak kabul edilir.

### Bu ne anlama gelir?
- burada yazan ana kararlar yeniden tartışmaya açılmadan uygulanmalıdır
- Cursor kendi inisiyatifiyle farklı yönlere sapmamalıdır
- “daha havalı olur” diyerek kapsam dışı şeyler eklenmemelidir
- ilk sürüm odağı korunmalıdır

### Kural
Bu belge, build öncesi netleşen çerçevenin uygulama referansıdır.

---

# 1. ÜRÜN VE SİTE ROLÜ KARARLARI

## 1.1 WeCaHan sitesinin ana rolü
WeCaHan ana sitesi:
- merkez marka sitesi
- proje ekosistemi anlatım alanı
- kurumsal güven yüzeyi
- bilgi ve yönlendirme alanı
olarak konumlanacaktır.

### Kural
Bu site bir satış landing page’i olmayacaktır.

---

## 1.2 Site satış odaklı olmayacak
Sitede:
- fiyatlandırma
- satış funnel yapısı
- teklif formu
- demo call baskısı
- paket karşılaştırma alanı
yer almayacaktır.

### Kural
CTA’lar yönlendirme ve iletişim odaklı kalacaktır.

---

## 1.3 Site hizmet listesi sitesi gibi kurgulanmayacak
WeCaHan ana sitesi,
- “shopify dropshipping”
- “ai medya hizmeti”
- “agency hizmet paketleri”
gibi servis listeleme mantığıyla kurgulanmayacaktır.

### Kural
Odak, WeCaHan markası ve mevcut projeler olacaktır.

---

## 1.4 Ana amaç
Sitenin temel amacı:
- WeCaHan’ı anlatmak
- projeleri anlatmak
- proje statülerini dürüst biçimde göstermek
- marka ve kurucular hakkında kontrollü bilgi vermek
- iletişim alanı sunmak
olacaktır.

---

# 2. PROJE KAPSAMI KARARLARI

## 2.1 İlk sürümde yalnızca 3 proje bulunacak
İlk sürümde ana sitede yalnızca şu projeler yer alacaktır:

- We CaHan Auto
- Prificient
- Prificient Tools

### Kural
Başka projeler ilk sürüme eklenmeyecektir.

---

## 2.2 Proje durumları sabitlenmiştir
### We CaHan Auto
- Active

### Prificient
- In Development

### Prificient Tools
- Active

### Kural
Bu statüler sayfa bazında değiştirilmeyecek ve pazarlama diliyle bozulmayacaktır.

---

## 2.3 Proje siteleri
### We CaHan Auto
- `auto.wecahan.com`

### Prificient
- `prificient.com`

### Prificient Tools
- `tools.prificient.com`

### Kural
Ana sitedeki detail page’ler bu sitelerin yerine geçmeye çalışmayacaktır.

---

## 2.4 Projeler önce detail page’e bağlanacak
Home ve Projects sayfalarındaki proje kartları:
- önce ana site içindeki project detail page’e gidecek
- oradan dış proje sitesine yön verecektir

### Kural
İlk tıklamada doğrudan dış siteye atma yaklaşımı varsayılan olmayacaktır.

---

# 3. SAYFA KAPSAMI KARARLARI

## 3.1 İlk sürümde bulunacak sayfalar
Aşağıdaki sayfalar ilk sürüm kapsamına dahildir:

- Home
- About
- Projects
- Project Detail — We CaHan Auto
- Project Detail — Prificient
- Project Detail — Prificient Tools
- Contact
- Privacy Policy
- Terms of Service

### Kural
Bunların dışındaki sayfalar ilk sürümde zorunlu değildir.

---

## 3.2 İlk sürümde bulunmayacak sayfalar
Aşağıdakiler ilk sürüm dışında kalır:

- Blog
- Careers
- Pricing
- Services
- Resources
- Docs / Help Center
- FAQ
- Case Studies
- Press / Media
- Newsletter
- Booking / Call scheduling

### Kural
Cursor bu sayfaları kendiliğinden eklemeyecektir.

---

# 4. TASARIM KARARLARI

## 4.1 Görsel yön sabittir
Görsel yön şu çizgide kalacaktır:

- modern
- premium
- sakin
- kurumsal
- teknoloji odaklı
- gerçekçi

### Kural
Tasarım sci-fi, neon veya fazla fütüristik bir çizgiye kaymayacaktır.

---

## 4.2 Koyu tema kullanılacak
Ana tema:
- koyu zemin
- yüksek okunabilirlik
- kontrollü vurgu rengi
mantığıyla kurulacaktır.

### Kural
Açık tema varyantı ilk sürümde düşünülmeyecektir.

---

## 4.3 Vurgu rengi kontrollü olacak
Ana vurgu rengi:
- turkuaz / soğuk mavi-yeşil eksenli
olacaktır.

### Kural
Altın vurgu ana sistem olmayacaktır.  
Aynı anda çoklu vurgu renkleri kullanılmayacaktır.

---

## 4.4 Tipografi kararı sabittir
- Başlıklar → Montserrat
- Gövde metni → Inter

### Kural
İlk sürümde font sistemi genişletilmeyecektir.

---

## 4.5 Aşırı hareket ve glow kullanılmayacak
Aşağıdaki şeyler ilk sürümde kullanılmayacaktır:
- yoğun glow
- neon border
- ağır parallax
- sürekli background hareketi
- siberpunk estetik
- fake dashboard görselleri

---

# 5. İÇERİK VE TON KARARLARI

## 5.1 Metin tonu sabittir
Metin dili şu çizgide kalacaktır:

- açık
- gerçekçi
- profesyonel
- abartısız

### Kural
Startup hype, agency satış dili ve aşırı vizyoner ton kullanılmayacaktır.

---

## 5.2 Büyük iddialar kullanılmayacak
Aşağıdaki tür cümleler yazılmayacaktır:
- pazar lideri
- en gelişmiş sistem
- devrimsel platform
- oyun değiştirici
- geleceği inşa ediyoruz

### Kural
Güven, açıklık ve dürüstlükle kurulacaktır.

---

## 5.3 Founder alanı sınırlı olacak
Kurucu alanları:
- kısa
- sade
- marka odaklı
olacaktır.

### Kural
Kurucu bölümü kişisel portfolyo veya başarı vitrini gibi davranmayacaktır.

---

## 5.4 İçerik Türkçe ve İngilizce olacak
Site iki dilde çalışacaktır:
- Türkçe
- İngilizce

### Kural
İki dil arasında kalite farkı oluşmayacaktır.

---

# 6. ROUTING VE LOCALE KARARLARI

## 6.1 Locale yapısı sabittir
Site route yapısı şu şekilde kurulacaktır:
- `/tr/...`
- `/en/...`

### Kural
Default locale prefix’siz hibrit yapı kullanılmayacaktır.

---

## 6.2 Route segmentleri çevrilmeyecek
Aşağıdaki route segmentleri iki dilde de aynı kalacaktır:
- `about`
- `projects`
- `contact`
- `privacy-policy`
- `terms-of-service`

### Kural
Türkçe için farklı path çevirileri kullanılmayacaktır.

---

## 6.3 Project slug’ları sabit kalacak
Onaylı slug’lar:
- `wecahan-auto`
- `prificient`
- `prificient-tools`

### Kural
Slug’lar locale’e göre çevrilmeyecektir.

---

## 6.4 Detail page yapısı dynamic olacak
Project detail route yapısı:
- `/[locale]/projects/[slug]`

### Kural
Her proje için ayrı statik page route’ları açılmayacaktır.

---

# 7. TEKNİK MİMARİ KARARLARI

## 7.1 Next.js App Router kullanılacak
Site App Router mantığıyla kurulacaktır.

### Kural
Pages Router yaklaşımına dönülmeyecektir.

---

## 7.2 İçerikler data-driven olacak
Metinler ve proje verileri:
- page dosyalarına gömülmeyecek
- data katmanından beslenecektir

### Kural
Hardcode içerik dağınıklığına izin verilmeyecektir.

---

## 7.3 Component yapısı iki seviyeli olacak
- shared bileşenler
- block / page-specific bileşenler

### Kural
Her şey shared veya her şey özel yapılmayacaktır.

---

## 7.4 Contact form server action ile çalışacak
Contact form:
- server action tabanlı
- validation ayrılmış
- sade ve güvenli
olacaktır.

### Kural
Client-only submit mantığı kullanılmayacaktır.

---

## 7.5 Validation ayrı katmanda olacak
Form validation:
- component içine gömülmeyecek
- ayrı validation dosyasında tutulacaktır

---

## 7.6 Metadata ve SEO data-driven olacak
Title, description ve project metadata:
- merkezi veri katmanından veya helper üzerinden yönetilecektir

### Kural
Her page içine ayrı metadata sabitleri yığılmayacaktır.

---

# 8. SEO VE INDEXLEME KARARLARI

## 8.1 Ana site temiz SEO mantığıyla ilerleyecek
SEO yaklaşımı:
- marka
- proje bağlamı
- açıklayıcı niyet
üzerine kurulacaktır.

### Kural
Agresif service keyword kovalamak ilk sürüm hedefi değildir.

---

## 8.2 Tüm gerçek sayfalar indexlenebilir olacak
İlk sürümde şu sayfalar indexlenebilir olacaktır:
- Home
- About
- Projects
- Detail page’ler
- Contact
- Privacy
- Terms

### Kural
Yanlışlıkla noindex bırakılmayacaktır.

---

## 8.3 Schema sade tutulacak
İlk sürümde uygun schema’lar:
- WebSite
- Organization
- AboutPage
- CollectionPage
- ContactPage
- WebPage
- BreadcrumbList (gerekiyorsa)

### Kural
Product, FAQ, Review gibi uygunsuz schema’lar kullanılmayacaktır.

---

# 9. GÜVEN VE LEGAL KARARLARI

## 9.1 Sahte sosyal kanıt kullanılmayacak
Aşağıdakiler eklenmeyecektir:
- fake müşteri logoları
- fake başarı metrikleri
- fake case study
- fake media mention

### Kural
Güven, dürüst yapı ve kaliteyle kurulacaktır.

---

## 9.2 Legal sayfalar zorunludur
İlk sürümde şu sayfalar kesin bulunacaktır:
- Privacy Policy
- Terms of Service

### Kural
Footer’dan görünür şekilde erişilebilir olacaklardır.

---

## 9.3 Contact form privacy ile uyumlu olacak
Contact form metinleri ile Privacy içeriği çelişmeyecektir.

---

# 10. İLK SÜRÜM DIŞI KARARLAR

## 10.1 Şu şeyler şimdi yapılmayacak
- blog sistemi
- CMS entegrasyonu
- karmaşık CMS paneli
- headless content editor
- kullanıcı hesabı
- dashboard alanı
- newsletter sistemi
- gelişmiş analytics dashboard’ı
- gelişmiş animation engine
- çok adımlı form sistemi

### Kural
İlk sürüm “merkez marka sitesi” sınırında kalacaktır.

---

## 10.2 Şu şeyler geleceğe bırakıldı
- yeni projeler eklemek
- partner / mention alanları
- gerçek case-study yapıları
- daha gelişmiş OG görsel sistemi
- ileride gerekirse blog / updates alanı

### Kural
Gelecek fikirleri ilk sürüme zorla taşınmayacaktır.

---

# 11. BUILD BAŞLAMADAN ÖNCE KABUL EDİLEN SON ÇERÇEVE

## Site kimliği
- merkez marka sitesi

## Ana ton
- gerçekçi ve profesyonel

## Ana tasarım
- koyu, premium, sakin

## Ana içerik
- marka + 3 proje + iletişim + legal

## Ana teknik yapı
- App Router + locale + data-driven içerik

## Ana SEO yaklaşımı
- temiz metadata + bağlam odaklı sayfalar

## Ana güven yaklaşımı
- dürüst status + çalışan yapı + legal görünürlük

### Kural
Bu çerçeve build sırasında korunacaktır.

---

# 12. UYGULAMA SIRASINDA YASAK DAVRANIŞLAR

Aşağıdaki şeyler build sırasında yapılmayacaktır:

- ekstra sayfa uydurmak
- tasarımı aniden futuristikleştirmek
- sahte ürün ekranları eklemek
- hype cümleleri yazmak
- detail page yerine dış linke direkt atmak
- route yapısını keyfe göre değiştirmek
- data model yerine page içine copy gömmek
- Contact formu lead formuna çevirmek
- legal sayfaları atlamak
- footer’ı link çöplüğüne çevirmek

---

# 13. BUILD ÖNCESİ KARAR TESTİ
Her yeni karar için şu sorular sorulmalıdır:

1. Bu zaten daha önce sabitlenmiş bir konu mu?
2. Bu ilk sürüm kapsamına giriyor mu?
3. Bu karar site rolünü değiştiriyor mu?
4. Bu karar tonu bozuyor mu?
5. Bu karar teknik yapıyı gereksiz büyütüyor mu?
6. Bu karar docs ile çelişiyor mu?

Bu testten geçmeyen değişiklikler build öncesi karar setine aykırı kabul edilmelidir.

---

## Nihai Karar
Bu belge, `wecahan.com` için build başlamadan önce sabitlenmiş ana ürün, tasarım, içerik, routing, teknik ve SEO kararlarının toplu referansıdır.

Bu karar seti:
- ilk sürüm kapsamını korur
- geliştirme sırasında yön kaymasını azaltır
- Cursor yorum sapmalarını sınırlar
- WeCaHan sitesinin merkez marka rolünü net tutar

Bu belge build sürecinde “temel referans karar listesi” olarak kabul edilmelidir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- project-structure
- routing-and-locale-architecture
- visual-direction
- messaging-principles
- trust-assets-plan
- pre-launch-checklist
- launch-day-checklist

Bu belgede tanımlanan build öncesi kararlar, açık ve bilinçli revizyon yapılmadan uygulama sırasında bozulmamalıdır.