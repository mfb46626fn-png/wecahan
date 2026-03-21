# Yayın Öncesi Kontrol Listesi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesi yayına alınmadan hemen önce **hangi ürün, içerik, tasarım, teknik, SEO, legal ve kalite kontrollerinin tamamlanmış olması gerektiğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site aceleyle yayına alınmaz
- kritik eksikler gözden kaçmaz
- “çalışıyor gibi” ama yarım kalan alanlar tespit edilir
- WeCaHan küçük ama ciddi bir marka sitesi olarak yayına çıkar
- launch günü sürpriz sorunlar azalır

Bu belge, WeCaHan için yayından hemen önce uygulanacak ana kalite kontrol listesidir.

---

## Temel Karar
Site, bu listedeki kritik maddeler kontrol edilmeden yayına alınmış sayılmayacaktır.

### Bu ne anlama gelir?
- görsel olarak güzel görünmesi tek başına yeterli değildir
- broken link, eksik legal, bozuk locale veya yanlış metadata ile yayın yapılmaz
- ilk sürüm kapsamı dışında kalan şeyler sorun değildir
- ama ilk sürümde olması gereken şeylerin eksik olması sorundur

### Kural
Bu liste “güzel olursa bakarız” listesi değil, yayın barajıdır.

---

# 1. KAPSAM KONTROLÜ

## 1.1 Zorunlu sayfalar mevcut mu?
Aşağıdaki sayfalar yayında ve çalışır durumda olmalıdır:

- [ ] Home
- [ ] About
- [ ] Projects
- [ ] We CaHan Auto detail
- [ ] Prificient detail
- [ ] Prificient Tools detail
- [ ] Contact
- [ ] Privacy Policy
- [ ] Terms of Service

### Kural
Bu sayfalardan biri eksikse ilk sürüm eksik kabul edilir.

---

## 1.2 Kapsam dışı sayfalar yanlışlıkla eklenmiş mi?
Aşağıdaki sayfalar ilk sürümde yer almamalıdır:

- [ ] Blog yok
- [ ] Pricing yok
- [ ] Services yok
- [ ] FAQ yok
- [ ] Careers yok
- [ ] Resources yok
- [ ] Newsletter signup yok
- [ ] Booking / Call scheduling yok

### Kural
İlk sürüm odağı bozulmayacaktır.

---

# 2. ROUTING VE LOCALE KONTROLÜ

## 2.1 Locale route yapısı doğru mu?
Aşağıdaki route sistemi çalışmalıdır:

### Türkçe
- [ ] `/tr`
- [ ] `/tr/about`
- [ ] `/tr/projects`
- [ ] `/tr/projects/wecahan-auto`
- [ ] `/tr/projects/prificient`
- [ ] `/tr/projects/prificient-tools`
- [ ] `/tr/contact`
- [ ] `/tr/privacy-policy`
- [ ] `/tr/terms-of-service`

### İngilizce
- [ ] `/en`
- [ ] `/en/about`
- [ ] `/en/projects`
- [ ] `/en/projects/wecahan-auto`
- [ ] `/en/projects/prificient`
- [ ] `/en/projects/prificient-tools`
- [ ] `/en/contact`
- [ ] `/en/privacy-policy`
- [ ] `/en/terms-of-service`

### Kural
Locale route’lardan biri kırık olmamalıdır.

---

## 2.2 Locale’siz giriş doğru davranıyor mu?
- [ ] `/` doğru şekilde varsayılan locale’e yönleniyor mu?
- [ ] beklenmeyen redirect zinciri yok mu?
- [ ] kullanıcı yanlış route’a düşmüyor mu?

---

## 2.3 Dil değiştirici doğru çalışıyor mu?
- [ ] `/tr/about` → `/en/about`
- [ ] `/tr/projects` → `/en/projects`
- [ ] `/tr/projects/prificient` → `/en/projects/prificient`
- [ ] Contact ve legal sayfalarda da locale değişimi doğru mu?
- [ ] dil değiştirince ana sayfaya fırlatma sorunu yok mu?

### Kural
Dil değiştirici aynı içeriğin karşılığına götürmelidir.

---

## 2.4 Geçersiz slug davranışı doğru mu?
- [ ] geçersiz project slug `notFound()` veriyor mu?
- [ ] kullanıcı yanlış detail page’e düşmüyor mu?
- [ ] geçersiz route ana sayfaya sessizce yönlenmiyor mu?

---

# 3. HEADER, FOOTER VE ANA NAVİGASYON KONTROLÜ

## 3.1 Header doğru mu?
- [ ] logo çalışıyor
- [ ] logo locale’e uygun ana sayfaya dönüyor
- [ ] Hakkımızda linki doğru
- [ ] Projeler linki doğru
- [ ] İletişim linki doğru
- [ ] aktif sayfa mantığı düzgün
- [ ] mobil menü çalışıyor

---

## 3.2 Footer doğru mu?
- [ ] marka adı doğru görünüyor
- [ ] kısa marka açıklaması mevcut
- [ ] About / Projects / Contact linkleri doğru
- [ ] 3 proje linki doğru
- [ ] Privacy Policy linki doğru
- [ ] Terms of Service linki doğru
- [ ] broken footer link yok

### Kural
Footer link çöplüğü gibi görünmemeli ve tüm önemli sayfalara erişim sunmalıdır.

---

# 4. PROJECTS VE DETAIL PAGE KONTROLÜ

## 4.1 Projects sayfası doğru çalışıyor mu?
- [ ] 3 proje görünüyor
- [ ] proje sırası doğru
- [ ] statüler doğru
- [ ] kart metinleri doğru
- [ ] kart CTA’ları detail page’e gidiyor

---

## 4.2 Proje statüleri tutarlı mı?
### We CaHan Auto
- [ ] Active

### Prificient
- [ ] In Development

### Prificient Tools
- [ ] Active

### Ek kontrol
- [ ] kartta ve detail page’de aynı statü görünüyor
- [ ] status copy çelişmiyor
- [ ] status ile CTA’lar uyumlu

---

## 4.3 We CaHan Auto detail page doğru mu?
- [ ] title doğru
- [ ] hero doğru
- [ ] Active status doğru
- [ ] overview mevcut
- [ ] odak alanları mevcut
- [ ] WeCaHan bağlantısı mevcut
- [ ] dış site linki doğru
- [ ] Projects’e dönüş var
- [ ] Contact yönü var

---

## 4.4 Prificient detail page doğru mu?
- [ ] title doğru
- [ ] In Development status doğru
- [ ] ürün yönü açıklaması doğru
- [ ] geliştirme süreci dürüstçe anlatılıyor
- [ ] Prificient Tools bağlantısı var
- [ ] Contact yönü var
- [ ] aktif ürün gibi davranan CTA yok

---

## 4.5 Prificient Tools detail page doğru mu?
- [ ] title doğru
- [ ] Active status doğru
- [ ] tools mantığı doğru anlatılıyor
- [ ] Prificient ile bağlantı var
- [ ] dış site linki doğru
- [ ] Projects’e dönüş var

---

# 5. CONTACT FORM KONTROLÜ

## 5.1 Form görsel olarak doğru mu?
- [ ] alanlar net
- [ ] label’lar görünür
- [ ] placeholder’lar doğru
- [ ] mobilde form rahat kullanılıyor
- [ ] form sıkışık görünmüyor

---

## 5.2 Form alanları doğru mu?
- [ ] Ad Soyad
- [ ] E-posta
- [ ] Şirket / Proje
- [ ] Konu
- [ ] Mesaj

### Kural
Ekstra qualification alanları olmamalıdır.

---

## 5.3 Validation çalışıyor mu?
- [ ] ad boşsa hata veriyor
- [ ] e-posta boşsa hata veriyor
- [ ] e-posta formatı bozuksa hata veriyor
- [ ] konu boşsa hata veriyor
- [ ] mesaj boşsa hata veriyor

### Kural
Hata mesajları teknik değil, insan gibi olmalıdır.

---

## 5.4 Submit akışı çalışıyor mu?
- [ ] form gerçekten submit oluyor
- [ ] pending state görünüyor
- [ ] başarı durumunda doğru mesaj görünüyor
- [ ] hata durumunda doğru mesaj görünüyor
- [ ] submit sonrası kullanıcı boşlukta kalmıyor

---

## 5.5 Form backend / server action düzgün mü?
- [ ] server action çağrılıyor
- [ ] validation sunucu tarafında da yapılıyor
- [ ] form verisi gerçekten hedefe ulaşıyor
- [ ] submit başarılı dönüp hiçbir yere gitmeme durumu yok
- [ ] gereksiz client-only submit mantığı yok

---

## 5.6 Privacy ilişkisi doğru mu?
- [ ] form altında privacy notu var
- [ ] privacy linki çalışıyor
- [ ] form dili ile privacy politikası çelişmiyor

---

# 6. İÇERİK VE METİN KALİTESİ KONTROLÜ

## 6.1 Ana ton korunmuş mu?
- [ ] metinler açık
- [ ] metinler gerçekçi
- [ ] metinler profesyonel
- [ ] metinler abartısız

### Kural
Hype dili veya agency satış dili görünmemelidir.

---

## 6.2 Yanlış dil kullanımları var mı?
- [ ] “game changing”
- [ ] “revolutionary”
- [ ] “market leader”
- [ ] “future of...”
- [ ] “next-gen...”
gibi diller yanlışlıkla girmemiş mi?

---

## 6.3 Founder alanı doğru mu?
- [ ] isimler doğru
- [ ] roller doğru
- [ ] bio’lar kısa ve markaya bağlı
- [ ] kişisel portfolyo hissi yok
- [ ] aşırı övgü dili yok

---

## 6.4 Proje açıklamaları doğru mu?
- [ ] We CaHan Auto aktif ve sistem odaklı görünüyor
- [ ] Prificient geliştirme sürecinde görünüyor
- [ ] Prificient Tools aktif araç katmanı gibi görünüyor
- [ ] proje açıklamaları birbirinden ayırt edilebilir

---

# 7. TASARIM VE GÖRSEL KALİTE KONTROLÜ

## 7.1 Genel tasarım çizgisi korunmuş mu?
- [ ] modern
- [ ] premium
- [ ] sakin
- [ ] kurumsal
- [ ] teknoloji odaklı
- [ ] gerçekçi

### Kural
Site fütüristik, neon veya sci-fi çizgiye kaymamış olmalıdır.

---

## 7.2 Renk sistemi doğru mu?
- [ ] koyu zemin doğru uygulanmış
- [ ] metin kontrastı yeterli
- [ ] vurgu rengi kontrollü
- [ ] çok renkli dağınık yapı yok
- [ ] turkuaz vurgular aşırı kullanılmamış

---

## 7.3 Tipografi doğru mu?
- [ ] başlık fontu doğru
- [ ] gövde fontu doğru
- [ ] H1 / H2 / H3 hiyerarşisi net
- [ ] uzun metinlerde satır genişliği rahat
- [ ] legal sayfalarda okunabilirlik iyi

---

## 7.4 Spacing ve layout doğru mu?
- [ ] section’lar rahat nefes alıyor
- [ ] hero’lar aşırı büyük değil
- [ ] kartlar sıkışık değil
- [ ] footer sıkışık değil
- [ ] mobilde her şey ezilmiyor

---

## 7.5 Aşırı efekt var mı?
- [ ] gereksiz glow yok
- [ ] ağır gradient yok
- [ ] fake dashboard yok
- [ ] yoğun background motion yok
- [ ] hover şovu yok

---

# 8. PERFORMANS VE ERİŞİLEBİLİRLİK KONTROLÜ

## 8.1 Genel performans hissi iyi mi?
- [ ] Home hızlı açılıyor
- [ ] route geçişleri normal
- [ ] mobilde ağır his yok
- [ ] büyük asset yükü yok
- [ ] animasyonlar kasma yaratmıyor

---

## 8.2 Client/server dengesi doğru mu?
- [ ] gereksiz client component yok
- [ ] static içerik server tarafında kalmış
- [ ] Contact ve mobile nav gibi yerlerde client mantık gerekli kadar kullanılmış

---

## 8.3 Erişilebilirlik temel kontrolleri
- [ ] focus state görünür
- [ ] keyboard ile nav mümkün
- [ ] link ve button rolleri doğru
- [ ] label’lar görünür
- [ ] kontrast yeterli
- [ ] reduced motion düşünülmüş

---

## 8.4 Heading ve semantik yapı doğru mu?
- [ ] her sayfada mantıklı H1 var
- [ ] heading sıralaması bozuk değil
- [ ] nav / main / footer semantik olarak temiz
- [ ] decorative alanlar semantik karışıklık üretmiyor

---

# 9. SEO VE METADATA KONTROLÜ

## 9.1 Her sayfada title var mı?
- [ ] Home
- [ ] About
- [ ] Projects
- [ ] Auto detail
- [ ] Prificient detail
- [ ] Prificient Tools detail
- [ ] Contact
- [ ] Privacy
- [ ] Terms

---

## 9.2 Her sayfada meta description var mı?
- [ ] tüm ana sayfalarda description var
- [ ] detail page’lerde özgün description var
- [ ] legal sayfalarda da açıklayıcı description var

---

## 9.3 Metadata ton kontrolü
- [ ] title’lar spammy değil
- [ ] description’lar abartılı değil
- [ ] Prificient aktifmiş gibi yazılmıyor
- [ ] Auto service landing page gibi yazılmıyor
- [ ] Tools dev platform gibi yazılmıyor

---

## 9.4 Canonical ve alternates doğru mu?
- [ ] canonical route ile uyumlu
- [ ] TR/EN alternates doğru eşleşiyor
- [ ] yanlış locale canonical yok
- [ ] detail page canonical’ları yanlış sayfaya işaret etmiyor

---

## 9.5 Sitemap ve robots kontrolleri
- [ ] sitemap yalnızca gerçek sayfaları içeriyor
- [ ] broken route sitemap’te yok
- [ ] robots yanlışlıkla ana siteyi engellemiyor
- [ ] gerçek sayfalar noindex değil

---

## 9.6 Schema kontrolleri
- [ ] Home için uygun schema var
- [ ] About için uygun schema var
- [ ] Projects için collection mantığı doğru
- [ ] Contact için contact page mantığı doğru
- [ ] legal sayfalarda sade yaklaşım var
- [ ] Product / FAQ / Review gibi yanlış schema yok

---

# 10. İÇ LİNKLEME KONTROLÜ

## 10.1 Header linkleri doğru mu?
- [ ] About
- [ ] Projects
- [ ] Contact

---

## 10.2 Home CTA akışı doğru mu?
- [ ] Hero → Projects
- [ ] Hero → About
- [ ] Selected projects → detail pages
- [ ] Contact CTA → Contact

---

## 10.3 About CTA akışı doğru mu?
- [ ] About → Projects
- [ ] About → Contact

---

## 10.4 Projects akışı doğru mu?
- [ ] her kart doğru detail page’e gidiyor
- [ ] detail page’ler doğru açılıyor

---

## 10.5 Detail page iç linkleri doğru mu?
- [ ] Projects’e dönüş var
- [ ] Contact yönü var
- [ ] Prificient ↔ Prificient Tools bağı doğru
- [ ] dış site linkleri doğru

---

## 10.6 Contact ve legal bağlantılar doğru mu?
- [ ] Contact → Privacy linki doğru
- [ ] footer legal linkleri doğru
- [ ] legal sayfalardan Contact’a dönüş mantığı bozuk değil

---

# 11. LEGAL VE GÜVEN KONTROLÜ

## 11.1 Privacy Policy mevcut ve yeterli mi?
- [ ] sayfa mevcut
- [ ] footer linki çalışıyor
- [ ] Contact form bağlamı anlatılıyor
- [ ] veri kullanımı açık
- [ ] güncelleme mantığı var

---

## 11.2 Terms of Service mevcut ve yeterli mi?
- [ ] sayfa mevcut
- [ ] footer linki çalışıyor
- [ ] site kullanım çerçevesi anlatılıyor
- [ ] dış link / proje sitesi ayrımı var
- [ ] iletişim yönü var

---

## 11.3 Güven varlıkları doğru mu?
- [ ] sahte logo şeridi yok
- [ ] fake case study yok
- [ ] uydurma başarı metriği yok
- [ ] statüler dürüst
- [ ] footer kurumsal görünüyor
- [ ] Contact gerçek temas alanı gibi çalışıyor

---

# 12. MOBİL VE RESPONSIVE KONTROL

## 12.1 Home mobilde doğru mu?
- [ ] hero taşmıyor
- [ ] CTA’lar rahat
- [ ] proje kartları düzgün
- [ ] footer kırılmıyor

---

## 12.2 About mobilde doğru mu?
- [ ] text blokları rahat okunuyor
- [ ] founder alanı bozulmuyor
- [ ] spacing yeterli

---

## 12.3 Projects mobilde doğru mu?
- [ ] kart grid’i tek kolon / doğru responsive
- [ ] status badge kaybolmuyor
- [ ] CTA’lar düzgün

---

## 12.4 Detail page’ler mobilde doğru mu?
- [ ] hero okunuyor
- [ ] CTA’lar taşmıyor
- [ ] breadcrumb/backlink düzgün
- [ ] metin blokları rahat

---

## 12.5 Contact mobilde doğru mu?
- [ ] form alanları rahat
- [ ] keyboard ile kullanım normal
- [ ] submit butonu erişilebilir
- [ ] error/success mesajları görünür

---

# 13. VERİ VE İÇERİK MİMARİSİ KONTROLÜ

## 13.1 İçerikler page içine gömülmüş mü?
- [ ] major copy data katmanından geliyor
- [ ] project verileri tek kaynaktan geliyor
- [ ] footer ve navigation hardcode değil
- [ ] status metinleri dağınık değil

---

## 13.2 Proje verisi merkezi mi?
- [ ] slug
- [ ] status
- [ ] short description
- [ ] external url
- [ ] CTA
tek bir project data kaynağından geliyor mu?

---

## 13.3 TR / EN içerik yapısı temiz mi?
- [ ] locale verileri düzenli
- [ ] TR ve EN tutarlı
- [ ] yanlış dilde metin sızıntısı yok

---

# 14. SON GÖZ KONTROLÜ

## 14.1 İlk izlenim kontrolü
Site ilk bakışta:
- [ ] gerçek
- [ ] düzenli
- [ ] profesyonel
- [ ] sakin
- [ ] güven veren
görünüyor mu?

---

## 14.2 Kapsam dışına taşma var mı?
- [ ] site istemeden sales landing page’e dönmemiş
- [ ] agency sitesi gibi görünmüyor
- [ ] service listesi sitesine kaymamış
- [ ] fütüristik demo site gibi görünmüyor

---

## 14.3 WeCaHan rolü korunmuş mu?
- [ ] merkez marka sitesi rolü net
- [ ] projeler bağlam içinde sunuluyor
- [ ] proje siteleri ile ana site ayrımı korunuyor
- [ ] iletişim ve legal yüzeyler tamam

---

# 15. YAYIN KARARI ÖZETİ

## Yayına Hazır Kabul Kriteri
Aşağıdaki dört alan birlikte sağlanıyorsa site yayına hazır kabul edilir:

### 1. Yapısal bütünlük
- tüm zorunlu sayfalar var
- routing ve locale çalışıyor

### 2. İçerik ve tasarım kalitesi
- ton doğru
- görünüm profesyonel
- proje anlatıları düzgün

### 3. Teknik ve SEO sağlık
- form çalışıyor
- metadata doğru
- indexleme ve route mantığı temiz

### 4. Güven ve kurumsallık
- footer güçlü
- legal sayfalar var
- sahte sosyal kanıt yok
- contact gerçek temas noktası gibi çalışıyor

---

## Nihai Karar
Bu belge, `wecahan.com` yayına alınmadan önce tamamlanması gereken temel kalite ve kontrol listesidir.

Bu listedeki maddeler:
- ilk sürümün ciddiyet seviyesini belirler
- son dakika hatalarını azaltır
- marka güvenini korur
- WeCaHan’ın küçük ama oturmuş bir site olarak çıkmasını sağlar

Bu checklist tamamlanmadan site “yayına hazır” kabul edilmemelidir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- pre-build-decisions
- launch-day-checklist
- launch-day-30-day-checklist
- trust-assets-plan
- metadata-and-seo-architecture
- forms-and-server-actions
- routing-and-locale-architecture

Bu belgede tanımlanan yayın öncesi kontroller, açık karar alınmadan “sonra bakarız” mantığıyla ertelenmemelidir.