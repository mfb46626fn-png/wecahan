# Bileşen İlkeleri

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde kullanılacak temel bileşenlerin **hangi tasarım mantığıyla üretileceğini**, **nasıl davranacağını**, **hangi görsel dili taşıyacağını**, **hangi sınırlar içinde kalacağını** ve **shared / page-specific bileşen ayrımının hangi ilkelere dayanacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- bileşenler sayfa sayfa farklı karaktere kaymaz
- kartlar, butonlar, section blokları ve form alanları aynı evrende görünür
- tasarım sistemi tutarlı kalır
- Cursor veya manuel geliştirme sürecinde gereksiz varyasyonlar engellenir
- site genelinde premium ama sakin bir görsel bütünlük korunur

Bu belge, bileşen tasarımının davranış ve görünüm tarafındaki ana omurgayı tanımlar.

---

## Temel Bileşen Kararı
WeCaHan’daki bileşenler şu prensiple üretilecektir:

**işlev önce, görsel kalite ikinci, gösteriş en son**

Bu şu anlama gelir:
- her bileşenin net bir görevi olacak
- görsel karakter görevden kopmayacak
- tasarım, işlevi gölgede bırakmayacak
- aynı işi yapan bileşenler rastgele farklılaşmayacak
- sayfayı parlatmak için gereksiz component şovuna gidilmeyecek

WeCaHan’da bileşenler “güzel nesne” değil, “iyi kurulmuş arayüz parçaları” gibi görünmelidir.

---

## Temel Bileşen Karakteri
Tüm bileşenler şu ortak karakteri taşımalıdır:

- sade
- net
- güven veren
- modern
- kaliteli
- kontrollü
- okunur
- aşırı dekoratif olmayan

### Özellikle korunacak his
- bileşen pahalı görünmeli ama yapay görünmemeli
- güçlü görünmeli ama bağırmamalı
- teknoloji hissi vermeli ama sci-fi olmamalı

---

## Bileşenlerde Kaçınılacak Genel Hatalar

### 1. Gereksiz varyasyon üretmek
Aynı tip kart veya buton için sayısız varyant üretmek tasarım sistemini bozar.

### 2. Dekorasyonun işlevi bastırması
Bir bileşen çok süslüyse görevini zayıflatır.

### 3. Her bileşene ayrı karakter vermek
Navbar başka dünyadan, kartlar başka dünyadan, form başka dünyadan görünmeyecektir.

### 4. Premium görünmek için aşırı efekt kullanmak
Glow, ağır shadow, neon border, yoğun gradient gibi yöntemler kalite yerine yapaylık üretir.

### 5. Component seviyesinde scope creep
Her küçük ihtiyaç için yeni özel bileşen yazmak yerine önce mevcut sistem düşünülmelidir.

---

## Shared ve Page-Specific Bileşen İlkesi
WeCaHan’da bileşenler iki ana gruba ayrılmalıdır:

### 1. Shared Bileşenler
Site genelinde tekrar kullanılan, temel UI ve layout parçaları.

Örnek:
- SiteHeader
- SiteFooter
- SectionIntro
- CTASection
- ProjectStatusBadge
- Button
- FormField
- Breadcrumb / BackLink

### 2. Page-Specific / Block Bileşenler
Belirli sayfa veya section için üretilen, ama yine de tasarım sistemine bağlı kalan parçalar.

Örnek:
- HomeHeroBlock
- AboutOverviewBlock
- ProjectsGridBlock
- ProjectDetailHero
- ContactFormBlock
- LegalContentLayout

### Kural
Önce shared mı, page-specific mi olduğu netleştirilmelidir.  
Her şeyi shared yapmaya çalışmak da, her şeyi özel yapmak da yanlıştır.

---

## Navbar İlkeleri

## Rolü
Navbar:
- yön verir
- marka sabitliğini sağlar
- kullanıcıyı boğmadan ana geçişleri sunar

## Karakteri
- ince
- temiz
- sakin
- profesyonel
- görünür ama baskın olmayan

## İçermesi gerekenler
- logo / marka
- About
- Projects
- Contact
- dil değiştirici

## Olmaması gerekenler
- fazla menü öğesi
- büyük CTA butonu gösterisi
- çok yoğun gölge
- announcement bar
- dikkat dağıtan animasyon

## Görsel ilke
Navbar “yüksek kaliteli bir çerçeve” gibi görünmelidir.  
“Gösterişli üst panel” gibi görünmemelidir.

---

## Footer İlkeleri

## Rolü
Footer:
- sayfanın kurumsal kapanış katmanıdır
- ikinci seviye navigasyon sağlar
- legal ve proje bağlantılarını destekler
- güven hissini tamamlar

## Karakteri
- biraz daha yoğun ama düzenli
- temiz kolon yapısı
- yeterli boşluk
- okunur link grupları
- güçlü ama sakin kapanış

## Olmaması gerekenler
- link kalabalığı
- gereksiz sosyal ikon spam’i
- slogan yığını
- farklı renk dünyası

## Görsel ilke
Footer, “alt bilgi çöplüğü” değil;  
sayfanın olgun kapanış alanı gibi görünmelidir.

---

## Button İlkeleri

## Rolü
Button:
- yön verir
- aksiyonu netleştirir
- hiyerarşi kurar

## Türleri
- primary
- secondary
- ghost / text link
- icon destekli varyasyonlar gerekiyorsa çok sınırlı

## Karakteri
- sade
- güçlü
- rahat tıklanabilir
- kontrastı net
- hover’da sakin

## Primary button ilkesi
- tek ana vurgu taşımalı
- sayfada sınırlı sayıda baskın aksiyon olmalı
- “satış” hissi değil “yön” hissi vermeli

## Secondary button ilkesi
- geri planda ama görünür olmalı
- primary ile yarışmamalı
- büyük CTA bloğu değil, destekleyici aksiyon gibi görünmeli

## Ghost / text link ilkesi
- hafif yönlendirme için kullanılmalı
- görünmez olmamalı
- link olduğu net hissedilmelidir

## Olmaması gerekenler
- aşırı yuvarlak “oyuncak” buton
- glow patlaması
- hover’da büyük sıçrama
- çok küçük tıklama alanı
- her butonu primary gibi göstermek

---

## Kart İlkeleri

## Rolü
Kartlar:
- bilgiyi gruplayan
- taranabilirlik sağlayan
- içeriği sakin ama düzenli sunan
bileşenlerdir.

## Karakteri
- temiz yüzey
- hafif border veya çok kontrollü yüzey ayrımı
- iyi iç boşluk
- güçlü başlık hiyerarşisi
- gereksiz dekorasyon yok

## Kart türleri
- capability kartı
- project kartı
- founder kartı
- principle / value kartı
- legal / info kartı gerekiyorsa çok sınırlı

## Kural
Aynı site içinde her kart türü bambaşka karakter taşımamalıdır.  
Aynı aileden geliyormuş gibi görünmelidir.

## Olmaması gerekenler
- ağır shadow
- glassmorphism yoğunluğu
- parlak border
- her kartta farklı köşe yarıçapı
- hover’da “uçan” kart efekti
- içerikten çok kart stilinin dikkat çekmesi

---

## Project Card İlkeleri

## Rolü
Project card:
- proje adını
- durumunu
- kısa açıklamasını
- detail page’e yönü
temiz biçimde gösterir

## Karakteri
- güçlü
- net
- status badge ile dengeli
- detail page odaklı
- dış link baskısı kurmayan

## İçerik düzeni
- üstte isim ve statü
- ortada kısa açıklama
- altta CTA

## Olmaması gerekenler
- çok uzun açıklama
- çok fazla mini detay
- birden fazla güçlü CTA
- karmaşık icon / logo yoğunluğu

---

## Capability Card İlkeleri

## Rolü
Capability kartı, bir yetkinlik veya odak alanını kısa biçimde anlatır.

## Karakteri
- açıklayıcı
- kısa
- dengeli
- gereksiz süs içermeyen

## İçermesi gerekenler
- kısa başlık
- 1 kısa açıklama
- gerekiyorsa sade ikon

## Olmaması gerekenler
- ürün kartı gibi görünmek
- CTA baskısı taşımak
- çok fazla alt bilgi

---

## Founder Card İlkeleri

## Rolü
Founder card:
- kurucuyu gösterir
- güveni destekler
- ama marka odağını bozmaz

## Karakteri
- profesyonel
- sakin
- kişisel marka kartı gibi görünmeyen
- aşırı sosyal medya profili hissi taşımayan

## İçermesi gerekenler
- isim
- rol
- kısa bio

## Olmaması gerekenler
- rozet / unvan kalabalığı
- başarı listesi
- fazla kişisel bilgi
- gösterişli portre çerçevesi

---

## Section Intro İlkeleri

## Rolü
Section intro:
- bölümün ne hakkında olduğunu söyler
- altındaki bloklara giriş verir
- sayfa ritmini kurar

## Karakteri
- kısa
- net
- güçlü başlık + kısa açıklama
- section’ı özetleyen

## Kural
Section intro’lar çok uzun paragraflara dönüşmeyecektir.

## Olmaması gerekenler
- aynı şeyi iki kez söylemek
- başlıktan sonra gereksiz manifesto
- çok büyük boşlukta yalnız kalan kısa metin

---

## Hero Bileşeni İlkeleri

## Rolü
Hero:
- sayfanın girişini tanımlar
- ana bağlamı verir
- ilk izlenimi belirler

## Karakteri
- güçlü
- temiz
- sakin
- iyi hiyerarşili
- görsel olarak kontrollü

## Home hero
- en güçlü hero
- marka tonu burada kurulur

## İç sayfa hero’ları
- daha kompakt
- daha açıklayıcı
- daha az görsel ağırlıklı

## Olmaması gerekenler
- fake dashboard
- 3D teknoloji küresi
- neon background
- çok uzun açıklama
- çok fazla CTA

---

## Form Alanı İlkeleri

## Rolü
Form alanları:
- veri girişi sağlar
- kullanıcıya güven verir
- doldurması kolay olmalıdır

## Karakteri
- sade
- okunur
- rahat
- erişilebilir
- temiz border / yüzey sistemi taşıyan

## Input ilkeleri
- label net olmalı
- placeholder yardımcı rol oynamalı
- hata mesajı için alan bırakılmalı
- odak durumu (focus state) görünür olmalı

## Olmaması gerekenler
- çok ince border
- düşük kontrastlı input
- sadece placeholder ile alan etiketi vermek
- dar ve sıkışık input yapısı

---

## Status Badge İlkeleri

## Rolü
Status badge:
- proje aşamasını hızlı gösterir
- taranabilirlik sağlar
- güven ve beklenti yönetimi üretir

## Karakteri
- küçük ama görünür
- sakin
- okunur
- net kontrastlı
- gereksiz bağırmayan

## Kural
Status badge bir dekor değil, bilgi taşıyıcısıdır.

## Olmaması gerekenler
- dev rozet hissi
- parlak glow
- çok büyük kapsül görünüm
- gereksiz hareket

---

## CTA Section İlkeleri

## Rolü
CTA section:
- sayfanın sonunda veya kritik geçiş noktasında yön sunar
- kullanıcının sonraki adımını netleştirir

## Karakteri
- kısa
- odaklı
- güçlü ama satışçı olmayan
- düzenli boşluk taşıyan

## İçermesi gerekenler
- kısa başlık
- 1 kısa açıklama
- 1 veya en fazla 2 CTA

## Olmaması gerekenler
- büyük satış bloğu
- yoğun pazarlama dili
- 3–4 buton
- fazla görsel kalabalık

---

## Legal Content Bileşeni İlkeleri

## Rolü
Legal içerik bileşenleri:
- uzun metni okunur hale getirir
- section ve subsection hiyerarşisi kurar
- yasal içeriği düzenli sunar

## Karakteri
- düz
- sakin
- okunur
- düzenli

## Olmaması gerekenler
- gereksiz kartlaşma
- showy UI
- yoğun motion
- küçük font ve düşük kontrast

---

## Breadcrumb / BackLink İlkeleri

## Rolü
- kullanıcıya bağlam verir
- detail page’den geri dönüşü kolaylaştırır

## Karakteri
- küçük
- sade
- dikkat çekmeyen ama görünür

## Kullanım alanı
- project detail sayfaları
- bazı legal veya iç sayfalar

## Olmaması gerekenler
- aşırı dekoratif breadcrumb
- gereksiz ikon dizisi
- çok büyük görsel ağırlık

---

## İkonografi İlkeleri

## Rolü
İkonlar:
- yardımcı bilgi verir
- kısa kartları destekler
- UI’ya açıklık katar

## Karakteri
- line icon ağırlıklı
- sade
- işlevsel
- aynı stroke karakteri taşıyan

## Olmaması gerekenler
- çok detaylı icon set
- 3D ikonlar
- renk patlamalı ikonlar
- dekor için ikon kullanmak

### Kural
İkonlar metnin yerini almayacaktır.  
Sadece destekleyecektir.

---

## Köşe Yarıçapı İlkesi
Border radius kullanımı tutarlı olmalıdır.

## Amaç
- modernlik
- yumuşaklık
- kontrollü premium his

## Kural
- kartlar, butonlar ve input’lar arasında uyumlu radius dili olmalı
- her bileşende farklı radius değeri kullanılmayacak
- aşırı yuvarlak “oyuncak” görünümden kaçınılacak

---

## Shadow İlkesi
Gölge kullanımı çok sınırlı ve kontrollü olmalıdır.

## Amaç
- yüzey ayrımı
- hafif derinlik
- kalite hissi

## Kural
Gölge “görünsün diye” kullanılmayacak.  
Yalnızca gerekiyorsa, çok yumuşak ve düşük yoğunlukta kullanılacaktır.

## Olmaması gerekenler
- ağır koyu shadow
- renkli shadow
- hover’da büyüyen büyük shadow
- kartın altından bağıran gölge

---

## Component Hiyerarşisi İlkesi
Bir sayfada tüm bileşenler aynı görsel ağırlıkta görünmeyecektir.

### Hiyerarşi sırası genelde şöyle olmalıdır
1. Page / section title
2. Primary CTA veya hero alanı
3. ana kart / ana içerik bloğu
4. secondary metin / destek blokları
5. yardımcı notlar / küçük UI metinleri

### Kural
Her bileşen dikkat istemeyecektir.  
Bazı bileşenler geri planda kalmayı bilmelidir.

---

## Component Tutarlılığı Testi
Yeni veya güncellenen bir bileşen için şu sorular sorulmalıdır:

1. Bu bileşen aynı sitenin parçası gibi görünüyor mu?
2. Bu bileşen işlevinden büyük mü görünüyor?
3. Bu bileşen gereksiz varyasyon üretiyor mu?
4. Bu bileşen diğer bileşenlerin görsel dilini bozuyor mu?
5. Bu bileşen daha sade olsa daha iyi olur muydu?

Bu testten geçmeyen bileşenler yeniden ele alınmalıdır.

---

## Nihai Karar
`wecahan.com` için bileşen ilkeleri şu çizgide kilitlenir:

- sade ve görev odaklı bileşenler
- aynı evrende görünen shared sistem
- premium ama gösterişsiz yüzeyler
- temiz kartlar
- sakin butonlar
- güçlü ama abartısız hero’lar
- okunur formlar
- güven veren status badge yapısı

WeCaHan’ın bileşen sistemi, tasarım gösterisi değil;  
kurulu bir dijital marka arayüzü gibi görünmelidir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- component inventory
- motion and interaction rules
- all page structure documents
- forms and server actions
- performance and accessibility guardrails

Bu belgede tanımlanan bileşen ilkeleri, açık karar alınmadan flashy, over-designed veya tutarsız UI üretimine kaydırılmamalıdır.