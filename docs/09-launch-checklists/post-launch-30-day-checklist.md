# Yayın Sonrası 30 Gün Kontrol Listesi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesi yayına alındıktan sonraki ilk 30 gün içinde **hangi alanların izleneceğini**, **hangi kalite sinyallerinin takip edileceğini**, **hangi hataların hızlıca düzeltilmesi gerektiğini**, **hangi iyileştirmelerin ilk ay içinde yapılmasının anlamlı olduğunu** ve **hangi şeylerin yanlışlıkla ikinci sürüm kapsamına taşınmaması gerektiğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- yayın sonrası süreç başıboş kalmaz
- ilk günlerde görünmeyen sorunlar düzenli şekilde tespit edilir
- küçük ama kritik kalite eksikleri giderilir
- kullanıcı deneyimi ve teknik sağlık ölçülü biçimde izlenir
- WeCaHan ilk ay sonunda daha oturmuş bir merkez site haline gelir

Bu belge, WeCaHan sitesinin ilk 30 günlük yayın sonrası stabilizasyon planını tanımlar.

---

## Temel Karar
Yayın almak final değil, ilk görünür sürümdür.

### Bu ne anlama gelir?
- ilk 30 gün aktif gözlem dönemidir
- küçük düzeltmeler doğal kabul edilir
- kritik sorunlar hızlıca kapanmalıdır
- ama kapsam dışı yeni fikirler hemen build’e alınmamalıdır
- ilk ayın amacı “genişletmekten” çok “oturtmak”tır

### Kural
İlk 30 gün boyunca öncelik büyütmek değil, sağlamlaştırmaktır.

---

# 1. İLK 3 GÜN — STABİLİZASYON KONTROLLERİ

## 1.1 Route ve locale sağlığı
İlk 3 gün içinde aşağıdakiler tekrar kontrol edilmelidir:

- [ ] temel route’lar sorunsuz açılıyor
- [ ] TR ve EN sürümler arasında beklenmeyen hata yok
- [ ] dil değiştirici doğru çalışmaya devam ediyor
- [ ] detail page’ler stabil
- [ ] legal sayfalar sorunsuz açılıyor

### Kural
Yayın günü düzgün olan şeyler, production cache / deploy / kullanıcı davranışı nedeniyle ilk günlerde tekrar bozulabilir. Bu yüzden yeniden bakılmalıdır.

---

## 1.2 Contact form akışı
- [ ] form submit’leri gelmeye devam ediyor mu?
- [ ] server action üretimde stabil mi?
- [ ] form success / error state’leri doğru mu?
- [ ] spam veya abuse sinyali var mı?
- [ ] form verisi doğru hedefe ulaşıyor mu?

### Kural
Contact form ilk ayın en kritik canlı sistemlerinden biridir.

---

## 1.3 Broken link kontrolü
- [ ] header linkleri sağlam
- [ ] footer linkleri sağlam
- [ ] project kart CTA’ları sağlam
- [ ] detail page dış linkleri sağlam
- [ ] privacy / terms linkleri sağlam

### Kural
Broken link’ler ilk ay içinde asla normal kabul edilmeyecektir.

---

# 2. İLK 7 GÜN — GÖRSEL VE UX DÜZELTME KONTROLLERİ

## 2.1 Mobil kullanım gözlemi
İlk hafta mobil deneyim özel olarak değerlendirilmelidir:

- [ ] hero taşmaları var mı?
- [ ] kartlarda text overflow var mı?
- [ ] form alanları rahat mı?
- [ ] footer mobilde sıkışıyor mu?
- [ ] detail page CTA’ları mobilde taşma yapıyor mu?

### Kural
İlk hafta içinde mobilde çıkan bariz kalite sorunları öncelikli olarak kapatılmalıdır.

---

## 2.2 Tipografi ve spacing ince ayarları
- [ ] bazı section’larda gereğinden fazla boşluk var mı?
- [ ] bazı kartlar sıkışık mı görünüyor?
- [ ] legal metinlerde satır uzunluğu yorucu mu?
- [ ] CTA blokları fazla zayıf mı kalıyor?
- [ ] başlık-alt metin hiyerarşisi bazı yerlerde bozuk mu?

### Kural
İlk ayın meşru işi; küçük spacing ve tipografi düzeltmeleridir. Bu kapsam genişletme sayılmaz.

---

## 2.3 Hover / interaction sorunları
- [ ] hover state’ler masaüstünde stabil mi?
- [ ] focus state’ler görünür mü?
- [ ] mobilde gereksiz hover kalıntısı var mı?
- [ ] button state’leri tutarlı mı?
- [ ] motion bazı cihazlarda rahatsız edici mi?

---

# 3. İLK 14 GÜN — İÇERİK VE MESAJ KALİTESİ KONTROLLERİ

## 3.1 Metin kalitesi tekrar gözden geçirilmeli
İlk iki haftada gerçek kullanım sonrası şu sorular sorulmalıdır:

- [ ] Home ilk bakışta yeterince net mi?
- [ ] About fazla uzun veya fazla zayıf mı?
- [ ] Projects sayfası yeterince açıklayıcı mı?
- [ ] Prificient detail sayfası doğru ton taşıyor mu?
- [ ] Contact sayfası fazla boş veya fazla kısa mı?

### Kural
Copy revizyonu yapılabilir; ama ton ve ana kararlar bozulmayacaktır.

---

## 3.2 Yanlış anlaşılan alanlar var mı?
Aşağıdaki riskler gözlenmelidir:

- [ ] kullanıcı ana siteyi satış sitesi sanıyor mu?
- [ ] Prificient’i aktif ürün zannediyor mu?
- [ ] project detail ile proje sitesi farkı yeterince anlaşılıyor mu?
- [ ] Contact formun amacı net mi?
- [ ] WeCaHan’ın ne olduğu ilk bakışta anlaşılabiliyor mu?

### Kural
Yanlış anlaşılan alanlar varsa copy ve UI düzeyinde netleştirme yapılmalıdır.

---

## 3.3 TR / EN kalite farkı kontrolü
- [ ] Türkçe sayfalar daha iyi, İngilizce daha zayıf mı?
- [ ] İngilizce metinler fazla yapay mı?
- [ ] Türkçe metinler fazla yerel, İngilizce fazla satış kokulu mu?
- [ ] metadata’da dil kalite farkı var mı?

### Kural
İki dil arasında kalite dengesizliği ilk ay içinde kapatılmalıdır.

---

# 4. İLK 30 GÜN — SEO VE INDEXING GÖZLEMİ

## 4.1 Indexlenme başlangıç kontrolü
İlk ay içinde aşağıdaki teknik yüzeyler gözlenmelidir:

- [ ] sitemap düzgün çalışıyor mu?
- [ ] robots beklenmedik engel üretmiyor mu?
- [ ] canonical mantığı bozuk görünmüyor mu?
- [ ] locale alternates temiz mi?
- [ ] detail page’ler indexlenebilir durumda mı?

### Kural
İlk ayda SEO mucizesi beklenmez; ama teknik sağlık beklenir.

---

## 4.2 Metadata kalite kontrolü
- [ ] title’lar doğru görünüyor mu?
- [ ] description’lar mantıklı mı?
- [ ] paylaşım preview’lerinde saçma metin çıkıyor mu?
- [ ] OG görsel fallback’i temiz mi?
- [ ] duplicate metadata sorunu var mı?

---

## 4.3 İç linkleme sağlığı
- [ ] Home → Projects akışı kullanışlı mı?
- [ ] Home → detail sayfa akışı mantıklı mı?
- [ ] detail page → Projects dönüşü kullanılıyor mu?
- [ ] Contact ve legal sayfalar yetim kalmıyor mu?
- [ ] footer linkleri beklenen yönü veriyor mu?

### Kural
İç linkler ilk ayda değiştirilirse, bu daha temiz akış için olmalı; SEO hilesi için değil.

---

# 5. GÜVEN VE KURUMSAL GÖRÜNÜM KONTROLLERİ

## 5.1 Site ilk ay sonunda hâlâ temiz görünüyor mu?
- [ ] sonradan eklenen geçici yamalar tasarımı bozdu mu?
- [ ] küçük düzeltmeler tutarsız UI üretti mi?
- [ ] footer yapısı bozuldu mu?
- [ ] yeni eklenen mikro metinler tonu bozdu mu?

### Kural
İlk ay içinde hızlı düzeltme yaparken tasarım sisteminin dağılmasına izin verilmeyecektir.

---

## 5.2 Güven sinyalleri yeterli mi?
İlk ay sonunda şu sorular tekrar sorulmalıdır:

- [ ] status badge yapısı güven veriyor mu?
- [ ] Contact form gerçek temas hissi üretiyor mu?
- [ ] legal sayfalar yeterli görünüyor mu?
- [ ] WeCaHan ile proje siteleri arasındaki bağ net mi?
- [ ] sahte görünüm üretmeden profesyonel hissediyor mu?

---

# 6. PERFORMANS VE ERİŞİLEBİLİRLİK GÖZLEMİ

## 6.1 İlk ay performans sağlığı
- [ ] Home hâlâ hafif ve hızlı mı?
- [ ] yeni eklenen küçük değişiklikler sayfayı ağırlaştırdı mı?
- [ ] form state’leri gereksiz yavaşladı mı?
- [ ] mobil performans kabul edilebilir mi?
- [ ] route geçişlerinde gecikme var mı?

### Kural
İlk ay içinde yapılan düzenlemeler performansı geriye götürmemelidir.

---

## 6.2 Erişilebilirlik sonrası kontrol
- [ ] focus state’ler korunuyor mu?
- [ ] klavye ile gezinme bozulmadı mı?
- [ ] kontrast sorunları fark edildi mi?
- [ ] form hata mesajları hâlâ anlaşılır mı?
- [ ] reduced motion mantığı bozuldu mu?

---

# 7. İLK AYDA YAPILABİLECEK DOĞRU İYİLEŞTİRMELER

Aşağıdaki iyileştirmeler ilk ay için uygundur:

- [ ] küçük copy revizyonları
- [ ] metadata iyileştirmeleri
- [ ] spacing / tipografi ince ayarları
- [ ] broken link düzeltmeleri
- [ ] form hata/success mesajı cilaları
- [ ] OG görsel iyileştirmesi
- [ ] footer copy küçük iyileştirmeleri
- [ ] mobile layout düzeltmeleri
- [ ] accessibility küçük iyileştirmeleri

### Kural
Bunlar “stabilizasyon” kapsamındadır, yön değişikliği değildir.

---

# 8. İLK AYDA YAPILMAYACAK ŞEYLER

İlk 30 gün içinde aşağıdakiler yeni iş olarak açılmamalıdır:

- [ ] blog açmak
- [ ] pricing eklemek
- [ ] service pages üretmek
- [ ] yeni proje eklemek
- [ ] büyük yeniden tasarım yapmak
- [ ] site rolünü satış sitesine çevirmek
- [ ] CMS mimarisini komple değiştirmek
- [ ] yeni locale eklemek
- [ ] animations / visuals tarafında büyük gösteri eklemek

### Kural
İlk 30 gün optimizasyon dönemidir, kapsam genişletme dönemi değildir.

---

# 9. İLK AY SONU DEĞERLENDİRME SORULARI

İlk 30 gün sonunda aşağıdaki sorular yanıtlanmalıdır:

### Ürün / marka tarafı
- [ ] WeCaHan ana site rolü net anlaşılıyor mu?
- [ ] 3 proje yapısı yeterince açık mı?
- [ ] Prificient’in geliştirme aşaması doğru algılanıyor mu?

### UX tarafı
- [ ] kullanıcı sitede kayboluyor mu?
- [ ] en faydalı CTA akışları doğru kurulmuş mu?
- [ ] Contact yeterince erişilebilir mi?

### Teknik taraf
- [ ] route ve locale sistemi stabil mi?
- [ ] form güvenilir mi?
- [ ] metadata ve indexleme temiz mi?

### Görsel taraf
- [ ] tasarım hâlâ sakin ve profesyonel mi?
- [ ] sonradan eklenen yamalar kaliteyi düşürdü mü?

### Kural
İlk ay sonu değerlendirmesi, ikinci sürüm planını açmadan önce yapılmalıdır.

---

# 10. HATA SINIFLANDIRMASI — İLK 30 GÜN

## Kritik
İlk ay içinde görülen şu sorunlar öncelikli kapatılmalıdır:

- [ ] route kırığı
- [ ] locale switch bozukluğu
- [ ] form submit sorunu
- [ ] yanlış status gösterimi
- [ ] broken legal link
- [ ] mobilde kritik layout bozulması
- [ ] production error

---

## Orta öncelik
- [ ] metadata zayıflıkları
- [ ] OG preview sorunları
- [ ] küçük responsive bozulmalar
- [ ] bazı copy netlik sorunları
- [ ] spacing / hierarchy problemleri

---

## Düşük öncelik
- [ ] ince tasarım cilaları
- [ ] küçük kelime seçimleri
- [ ] bazı icon / visual polish işleri

### Kural
Öncelik sırası bozulmamalıdır; kritik hata varken kozmetik işlere dalınmayacaktır.

---

# 11. İLK AY SONU “STABİL” KABUL KRİTERİ

Site ilk ay sonunda stabil kabul edilir eğer:

- [ ] ana route yapısı sorunsuz çalışıyorsa
- [ ] TR / EN locale akışı temizse
- [ ] Contact form güvenilir şekilde çalışıyorsa
- [ ] broken link kalmadıysa
- [ ] metadata ve indexing tarafında bariz hata yoksa
- [ ] mobilde ciddi kalite problemi kalmadıysa
- [ ] içerik tonu tutarlıysa
- [ ] görsel sistem yamalarla bozulmadıysa

### Kural
Bu kriterler sağlanmadan ikinci sürüm kapsamı açılmamalıdır.

---

# 12. 30 GÜN SONRASI İÇİN HAZIR OLABİLECEK KONULAR
Ancak ilk ay stabil geçerse, sonrasında şu başlıklar değerlendirilebilir:

- [ ] metadata ve OG sistemini biraz daha güçlendirmek
- [ ] gerçek ihtiyaç varsa yeni küçük içerik yüzeyleri
- [ ] yeni proje ekleme hazırlığı
- [ ] ileride gerekirse küçük updates / notes alanı
- [ ] daha gelişmiş SEO cilaları

### Kural
İlk ay bitmeden büyük yeni kapsam açılmayacaktır.

---

# 13. 30 GÜN BOYUNCA KISA HAFTALIK RİTİM ÖNERİSİ

## 1. Hafta
- kritik hata ve route kontrolü
- form ve mobil doğrulama
- footer / legal / locale temizliği

## 2. Hafta
- copy netliği
- metadata ve preview kontrolü
- detail page akış gözlemi

## 3. Hafta
- spacing / hierarchy / mobile polish
- küçük accessibility iyileştirmeleri

## 4. Hafta
- genel stabilite değerlendirmesi
- kalan orta seviye düzeltmeler
- ikinci sürüm için not çıkarma

### Kural
İlk ay boyunca birikmiş düzensiz iş listesi yerine kontrollü hafta bazlı kapanış daha sağlıklıdır.

---

## Nihai Karar
Bu belge, `wecahan.com` yayınlandıktan sonraki ilk 30 gün boyunca uygulanacak stabilizasyon ve kalite koruma planıdır.

Bu plan:
- sitenin yayın sonrası da oturmuş görünmesini sağlar
- kritik sorunların erken yakalanmasına yardım eder
- kapsam genişletme dürtüsünü frenler
- WeCaHan’ı acele kurulmuş değil, düzenli oturan bir merkez site haline getirir

Bu checklist tamamlandığında WeCaHan ana sitesi ilk sürüm açısından stabil kabul edilebilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- launch-day-checklist
- pre-launch-checklist
- pre-build-decisions
- trust-assets-plan
- performance-and-accessibility-guardrails
- metadata-and-seo-architecture

Bu belgede tanımlanan yayın sonrası 30 günlük kontroller, açık karar alınmadan kapsam genişletme bahanesiyle gölgelenmemeli veya ilk sürüm stabilizasyonu atlanmamalıdır.