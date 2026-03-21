# Navigasyon ve Kullanıcı Akışları

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde **ana navigasyonun nasıl kurulacağını**, **hangi linklerin header ve footer’da yer alacağını**, **kullanıcının hangi sayfadan hangi sayfaya nasıl akacağını**, **CTA mantığının nasıl işleyeceğini** ve **ana site ile proje siteleri arasındaki geçişlerin nasıl yönetileceğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- header ve footer mantığı sade ve tutarlı kalır
- kullanıcı akışları rastgele kurulmaz
- CTA dili site rolüne uygun olur
- proje detail sayfalarına geçiş mantığı netleşir
- iki dilli yapı içinde yönlendirme disiplini korunur

Bu belge, bilgi mimarisi ile sayfa deneyimi arasındaki davranış katmanıdır.

---

## Temel Navigasyon Kararı
`wecahan.com` için navigasyon:
- sade
- kısa
- doğrudan
- iki dilli yapıya uygun
- satış değil yönlendirme odaklı
olacaktır.

Bu sitede navigasyonun amacı:
- kullanıcıyı doğru bilgi katmanına taşımak
- marka anlatısını dağıtmamak
- seçili projelere kontrollü geçiş vermek
- iletişim ve legal görünürlüğü desteklemektir

Bu sitede navigasyonun amacı **çok seçenek sunmak değildir**.

---

## Ana Navigasyon İlkesi
Ana navigasyonda yalnızca gerçekten gerekli sayfalar yer almalıdır.

Bu nedenle üst menüde aşağıdaki mantık korunacaktır:

- marka hakkında bilgi
- proje ekosistemi
- iletişim
- dil değiştirici

Bunun dışındaki öğeler şu aşamada gereksizdir.

---

## Header Navigasyonu
Ana header navigasyonu şu şekilde kurulmalıdır:

- About
- Projects
- Contact
- Dil değiştirici (TR / EN)

### Not
Home linki logo üzerinden çözülebilir.  
Ayrı bir “Home” menü öğesi zorunlu değildir.

Bu yaklaşım daha temiz ve daha profesyonel görünür.

---

## Header Davranış Kuralları

### 1. Header sade kalmalıdır
Header içinde:
- fazla link olmayacak
- sosyal medya ikon çöplüğü olmayacak
- birden fazla CTA butonu olmayacak
- promosyon bar olmayacak

### 2. Header her sayfada tutarlı olmalıdır
Locale değişse bile menü mantığı değişmemelidir.

### 3. Logo ana dönüş noktasıdır
Logo tıklaması her zaman ilgili locale’in ana sayfasına dönmelidir.

### 4. Dil değiştirici görünür ve basit olmalıdır
Dil değiştirici:
- açık
- kararlı
- teknik olmayan
- yanlış locale rotasına düşmeyen
bir yapıda olmalıdır.

### 5. Mobile header sadeleştirilmelidir
Mobilde menü:
- aynı içerikleri içermeli
- ama daha kısa ve temiz sunulmalıdır

---

## Header’da Yer Almayacak Şeyler
Şu an header’da aşağıdaki öğeler bulunmayacaktır:

- Pricing
- Services
- Solutions
- Blog
- Resources
- Careers
- Book a Call
- Start Now
- Get a Demo
- Free Trial

### Neden?
Çünkü bunlar:
- ya site rolünü değiştirir
- ya satış baskısı yaratır
- ya da mevcut kapsamı gereksiz yere büyütür

---

## Footer Navigasyonu
Footer, header’dan biraz daha geniş olabilir.  
Ama yine de kontrollü kalmalıdır.

Önerilen footer yapısı 3 veya 4 sütunlu sade bir düzen olmalıdır.

### Footer sütun mantığı

#### 1. Marka
- WeCaHan
- kısa marka tanımı
- kısa slogan / açıklama

#### 2. Navigasyon
- About
- Projects
- Contact

#### 3. Projeler
- We CaHan Auto
- Prificient
- Prificient Tools

#### 4. Legal
- Privacy Policy
- Terms of Service

---

## Footer Davranış Kuralları

### 1. Footer kurumsal kapanış alanıdır
Footer sadece link yığını değil, güven tamamlama alanıdır.

### 2. Footer’da proje linkleri olabilir
Bu mantıklıdır; çünkü footer ikinci yönlendirme katmanıdır.

### 3. Footer’da legal linkler görünür olmalıdır
Privacy ve Terms, footer’da doğrudan erişilebilir olmalıdır.

### 4. Footer’da dil yapısı bozulmamalıdır
Locale’e göre doğru linkler üretilmelidir.

### 5. Footer aşırı kalabalık olmamalıdır
Footer çok fazla bağlantı ile doldurulmayacaktır.

---

## Ana Kullanıcı Akışı İlkesi
Sitedeki kullanıcı akışları şu mantığa göre kurulacaktır:

1. Kullanıcı markayı anlar  
2. proje veya bilgi alanına yönelir  
3. detail katmanına geçer  
4. gerekirse dış siteye gider  
5. gerekirse iletişim kurar  

Bu akış net, kısa ve profesyonel olmalıdır.

---

## Ana Akış 1 — Marka Keşfi Akışı
### Akış
Home → About → Projects → Contact

### Kim için?
- WeCaHan’ı ilk kez gören ziyaretçi
- markayı anlamaya çalışan kullanıcı
- potansiyel iş ortağı / bağlantı kuracak kişi

### Amaç
Ziyaretçinin önce markayı anlaması, sonra proje ekosistemini görmesi, sonra gerekirse iletişime geçmesidir.

### Kritik Noktalar
- Home çok yüzeysel kalmamalı
- About çok uzun ve dağınık olmamalı
- Projects sayfası doğal sonraki adım olmalı
- Contact baskıcı değil erişilebilir görünmeli

---

## Ana Akış 2 — Proje Keşfi Akışı
### Akış
Home → Projects → Project Detail → Dış Proje Sitesi

### Kim için?
- projeleri merak eden kullanıcı
- doğrudan somut işler görmek isteyen ziyaretçi

### Amaç
Kullanıcının WeCaHan’ın proje yönünü anlaması ve gerekiyorsa ilgili proje sitesine bilinçli biçimde geçmesidir.

### Kritik Noktalar
- Projects sayfası temiz ve kısa olmalı
- her kart detail page’e gitmeli
- detail page bağlam vermeli
- dış siteye geçiş doğrudan ama kontrollü olmalı

---

## Ana Akış 3 — Belirli Projeden Gelen Kullanıcı Akışı
### Akış
Project Detail → Projects → About → Contact

### Kim için?
- belirli bir projeyi duymuş kullanıcı
- proje adıyla gelen ziyaretçi
- dış kaynaktan ilgili slug’a gelen kişi

### Amaç
Kullanıcının sadece projeyi değil, WeCaHan bağlamını da anlamasıdır.

### Kritik Noktalar
- detail page tek başına yeterli bağlam sunmalı
- WeCaHan ile proje arasındaki ilişki görünmeli
- related navigation açık olmalı
- geri dönüş akışı doğal olmalı

---

## Ana Akış 4 — İletişim Niyeti Akışı
### Akış
Home / About / Project Detail → Contact

### Kim için?
- iletişim kurmak isteyen kullanıcı
- marka ile temas kurmak isteyen kişi
- proje hakkında soru sormak isteyen ziyaretçi

### Amaç
Kullanıcının kolay ve güven veren bir şekilde Contact sayfasına ulaşmasıdır.

### Kritik Noktalar
- Contact linki görünür olmalı
- footer’dan da ulaşılabilmeli
- CTA’lar saldırgan olmamalı
- formun amacı net olmalı

---

## Ana Akış 5 — Güven / Doğrulama Akışı
### Akış
Home → Footer → Privacy Policy / Terms of Service / Contact

### Kim için?
- markanın ciddiyetini ölçmek isteyen kullanıcı
- profesyonel görünürlüğe dikkat eden ziyaretçi

### Amaç
Footer ve legal katmanlar üzerinden güvenin tamamlanmasıdır.

### Kritik Noktalar
- legal linkler gizlenmemeli
- footer profesyonel görünmeli
- iletişim alanı güvenli hissettirmeli

---

## Sayfa Bazlı Çıkış Yönleri

## Home’dan çıkış yönleri
Home sayfası aşağıdaki ana yönlendirmeleri taşımalıdır:

- About
- Projects
- Contact

İkincil olarak:
- belirli bir selected project detail page

### Home’da yapılmaması gereken hata
- çok fazla farklı yön açmak
- kullanıcıyı doğrudan dış sitelere yağmur gibi atmak
- karar yükünü artırmak

---

## About’tan çıkış yönleri
About sayfası aşağıdaki yönleri taşımalıdır:

- Projects
- Contact

İkincil olarak:
- Home
- footer proje linkleri

### About’ta yapılmaması gereken hata
- sayfayı çıkışı olmayan uzun manifesto haline getirmek

---

## Projects’ten çıkış yönleri
Projects sayfası aşağıdaki yönleri taşımalıdır:

- We CaHan Auto detail
- Prificient detail
- Prificient Tools detail
- Contact

İkincil olarak:
- About
- Home

### Projects’te yapılmaması gereken hata
- kartları pasif bırakmak
- hem detail link hem dış link karmaşasını kötü kurmak
- 404 üretmek

---

## Project Detail Sayfalarından Çıkış Yönleri
Her project detail sayfası aşağıdaki yönleri taşımalıdır:

- ilgili proje sitesi
- Projects sayfasına geri dönüş
- Contact
- gerekirse About

### Not
Detail page, çıkışsız bir tekil bilgi sayfası gibi kalmamalıdır.

---

## Contact’tan çıkış yönleri
Contact sayfası sonrası kullanıcı şu yönlere dönebilmelidir:

- Home
- Projects
- footer üzerindeki legal linkler

Form gönderiminden sonra kullanıcıyı boşlukta bırakmayan bir deneyim olmalıdır.

---

## CTA Mantığı
Bu sitede CTA’lar satış değil, yönlendirme ve açıklık odaklı olacaktır.

CTA’ların görevi:
- bilgi akışını devam ettirmek
- doğru sayfaya taşımak
- proje bağlamını açmak
- iletişim alanına yumuşak geçiş vermektir

---

## Kullanılabilecek Ana CTA Türleri

### Marka / bilgi CTA’ları
- Hakkımızda
- Daha Fazla Bilgi
- WeCaHan’ı Keşfet

### Proje CTA’ları
- Projeleri İncele
- Detayları Gör
- Proje Sayfasını İncele
- Daha Fazla Bilgi Al

### Dış site CTA’ları
- Siteyi Ziyaret Et
- Projeye Git
- Resmî Siteyi Aç

### İletişim CTA’ları
- İletişime Geç
- Bize Ulaşın
- Bizimle Bağlantı Kurun

---

## Kullanılmayacak CTA Türleri
Aşağıdaki CTA’lar bu site rolüne aykırıdır:

- Hemen Başla
- Şimdi Satın Al
- Ücretsiz Demo Al
- Teklif Al
- Görüşme Planla
- Hızla Büyü
- Dönüşümü Artır
- Şimdi Dene

### Neden?
Çünkü bu CTA’lar ana siteyi:
- satış odaklı
- agency benzeri
- agresif dönüşüm odaklı
bir yapıya çeker.

---

## Ana Site ile Dış Proje Siteleri Arasındaki Geçiş Kuralları

### 1. Dış siteye geçiş olabilir
Bu mantıklıdır ve gereklidir.

### 2. Ama bağlam verildikten sonra olmalıdır
Önce:
- proje ne?
- ne durumda?
- neden var?
anlaşılmalıdır.

Sonra:
- ilgili dış siteye geçiş sunulabilir

### 3. Ana site dış link kataloğu gibi görünmemelidir
Dış linkler destekleyici rol oynamalıdır.

### 4. Dış link CTA’ları seçici kullanılmalıdır
Özellikle:
- project detail sayfalarında ana CTA olabilir
- projects listesinde ikincil CTA olabilir
- home sayfasında sınırlı kullanılmalıdır

---

## Dil Geçişi Akışı
Site iki dilli olduğu için kullanıcı akışlarında dil geçişi önemli bir davranış katmanıdır.

### Kural
Dil değiştirildiğinde kullanıcı mümkünse aynı sayfanın diğer dildeki karşılığına geçmelidir.

Örnek:
- `/tr/projects/prificient` → `/en/projects/prificient`

### Dil geçişinde bozulmaması gereken şeyler
- sayfa eşleşmesi
- breadcrumb mantığı
- CTA tutarlılığı
- header / footer linkleri

### Dil geçişinde yapılmaması gereken hata
- kullanıcıyı her seferinde ana sayfaya atmak
- yanlış locale slug üretmek
- dil değiştirirken 404 üretmek

---

## Mobil Navigasyon Mantığı
Mobil deneyimde navigasyon daha sade olmalıdır.

### Mobil menüde bulunacaklar
- About
- Projects
- Contact
- TR / EN

### Mobil menü davranışı
- kısa
- okunur
- tek sütunlu
- kolay kapanır
- gereksiz alt menü barındırmaz

### Yapılmaması gereken hata
- masaüstüdeki her şeyi mobil drawer’a taşımak
- proje linklerini ana menüye aşırı çoğaltmak
- mobilde kullanıcıyı boğmak

---

## Breadcrumb Gerekir mi?
Breadcrumb zorunlu değildir, ancak project detail sayfalarında faydalı olabilir.

### Önerilen kullanım
Project detail sayfalarında sade bir breadcrumb veya geri link kullanılabilir:

- Projects / We CaHan Auto
- Projects / Prificient
- Projects / Prificient Tools

### Amaç
- kullanıcının bağlamını kaybetmemesi
- geri dönüşün kolaylaşması

---

## Footer Üzerinden İkincil Akışlar
Footer sadece son bölüm değildir; ikincil navigasyon katmanıdır.

Footer üzerinden aşağıdaki akışlar mümkündür:

- Home → Footer → Projects
- Home → Footer → Contact
- Home → Footer → Privacy Policy
- About → Footer → Proje siteleri
- Project Detail → Footer → Legal

Bu yüzden footer link mimarisi stratejik kabul edilmelidir.

---

## Kullanıcı Akışlarında Öncelik Sırası
Kullanıcıya aynı anda çok fazla seçenek vermemek için öncelik sırası şu şekilde korunmalıdır:

1. markayı anlama
2. projeleri görme
3. proje detayına inme
4. dış siteye gitme
5. iletişim
6. legal doğrulama

Bu sırayı bozan tasarım veya içerik kararları yeniden değerlendirilmelidir.

---

## Navigasyonda Yapılmaması Gereken Hatalar

### 1. Fazla menü öğesi
Az sayfalı siteyi büyük şirket portalı gibi göstermeye çalışmak.

### 2. Çifte yön karmaşası
Aynı yerde hem detail page hem dış site hem contact yönlerini kötü biçimde üst üste bindirmek.

### 3. Dış link baskısı
Kullanıcıyı bağlam vermeden sürekli dış sitelere atmak.

### 4. Zayıf footer
Legal ve kurumsal görünürlüğü zayıf bırakmak.

### 5. Mobile karmaşa
Mobil menüyü masaüstüyle aynı yoğunlukta kurmak.

### 6. Dil geçiş hataları
Locale eşleşmelerini bozmak veya 404 üretmek.

---

## Nihai Karar
`wecahan.com` navigasyonu şu prensiple çalışacaktır:

- sade üst menü
- daha zengin ama kontrollü footer
- proje detail sayfalarına çalışan akış
- satış değil bilgi ve yönlendirme odaklı CTA’lar
- dış proje sitelerine kontrollü geçiş
- iki dilli tutarlı yapı

Bu navigasyon sistemi, WeCaHan’ın merkez marka sitesi rolüne en uygun kullanıcı akış çerçevesi olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- page priority matrix
- home structure
- about structure
- projects structure
- project detail pages
- contact structure
- component inventory
- routing and locale architecture
- internal linking plan
- microcopy and ui text

Bu belgede tanımlanan navigasyon ve kullanıcı akışları, header, footer, CTA ve sayfalar arası yönlendirme kararları için temel referans kabul edilmelidir.