# Yayın Günü Kontrol Listesi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinin yayınlandığı gün **hangi son kontrollerin yapılacağını**, **yayın anında hangi teknik ve içeriksel doğrulamaların tamamlanacağını**, **yayın sonrası ilk saatlerde neyin izleneceğini** ve **hangi hataların kritik kabul edileceğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- yayına geçiş günü kaotik ilerlemez
- “deploy oldu, tamamdır” yanılgısı yaşanmaz
- en kritik kırık link, yanlış route, yanlış metadata ve form sorunları hızlı yakalanır
- yayın sonrası ilk saatler daha kontrollü yönetilir
- WeCaHan yayına çıktığı anda yarım hissi vermez

Bu belge, yayın gününde uygulanacak pratik operasyon kontrol listesidir.

---

## Temel Karar
Site yayınlandıktan sonra iş bitmiş sayılmayacaktır.  
Yayın günü, son görünür kalite kontrolünün yapıldığı kritik aşamadır.

### Bu ne anlama gelir?
- deploy almak tek başına başarı değildir
- canlı ortam doğrulaması zorunludur
- staging’de çalışan şey production’da tekrar kontrol edilir
- özellikle route, locale, form ve metadata tarafı yeniden gözden geçirilir

### Kural
Yayın günü en kritik kullanıcı yüzeyleri bizzat kontrol edilmeden süreç tamamlanmış kabul edilmeyecektir.

---

# 1. YAYIN ÖNCESİ SON HAZIRLIK

## 1.1 Doğru branch / sürüm deploy ediliyor mu?
- [ ] Doğru branch seçildi
- [ ] Yanlış test commit’i dahil değil
- [ ] Son build kodu onaylı sürüm
- [ ] Deneme amaçlı geçici component / route kalmadı

### Kural
Canlıya test branch’i veya geçici deneme kodu çıkılmayacaktır.

---

## 1.2 Environment ve domain ayarları doğru mu?
- [ ] Production domain doğru bağlı
- [ ] `wecahan.com` doğru hedefe gidiyor
- [ ] HTTPS aktif
- [ ] yanlış staging domain yönlendirmesi yok
- [ ] gerekiyorsa `www` / non-`www` davranışı net

### Kural
Canlı domain üzerinde staging izleri kalmayacaktır.

---

## 1.3 Analytics / opsiyonel teknik entegrasyonlar doğru mu?
Eğer ilk sürümde kullanılacaksa:
- [ ] doğru ölçüm ID’si bağlı
- [ ] duplicate script yükü yok
- [ ] yanlış ortam verisi gitmiyor

### Kural
Kullanılmıyorsa sırf olsun diye boş analytics entegrasyonu eklenmeyecektir.

---

# 2. CANLI ROUTE DOĞRULAMASI

## 2.1 Türkçe ana route’lar canlıda çalışıyor mu?
- [ ] `/tr`
- [ ] `/tr/about`
- [ ] `/tr/projects`
- [ ] `/tr/projects/wecahan-auto`
- [ ] `/tr/projects/prificient`
- [ ] `/tr/projects/prificient-tools`
- [ ] `/tr/contact`
- [ ] `/tr/privacy-policy`
- [ ] `/tr/terms-of-service`

---

## 2.2 İngilizce ana route’lar canlıda çalışıyor mu?
- [ ] `/en`
- [ ] `/en/about`
- [ ] `/en/projects`
- [ ] `/en/projects/wecahan-auto`
- [ ] `/en/projects/prificient`
- [ ] `/en/projects/prificient-tools`
- [ ] `/en/contact`
- [ ] `/en/privacy-policy`
- [ ] `/en/terms-of-service`

---

## 2.3 Locale root davranışı doğru mu?
- [ ] `/` beklenen locale’e yönleniyor
- [ ] redirect zinciri yok
- [ ] yanlış locale’e düşme yok
- [ ] URL yapısı temiz

### Kural
Yayın günü locale routing en kritik kontrol alanlarından biridir.

---

# 3. HEADER, FOOTER VE NAVİGASYON DOĞRULAMASI

## 3.1 Header canlıda doğru mu?
- [ ] Logo çalışıyor
- [ ] Logo doğru home route’a gidiyor
- [ ] About linki doğru
- [ ] Projects linki doğru
- [ ] Contact linki doğru
- [ ] Dil değiştirici görünüyor
- [ ] Mobil header bozulmamış

---

## 3.2 Footer canlıda doğru mu?
- [ ] WeCaHan metni doğru
- [ ] marka açıklaması doğru
- [ ] navigasyon linkleri doğru
- [ ] proje linkleri doğru
- [ ] legal linkler doğru
- [ ] footer layout kırık değil

### Kural
Footer’daki tek bir broken link bile launch günü önemli hata kabul edilir.

---

# 4. DİL DEĞİŞTİRİCİ DOĞRULAMASI

## 4.1 Ana sayfalarda çalışıyor mu?
- [ ] `/tr` → `/en`
- [ ] `/tr/about` → `/en/about`
- [ ] `/tr/projects` → `/en/projects`
- [ ] `/tr/contact` → `/en/contact`

---

## 4.2 Project detail sayfalarında çalışıyor mu?
- [ ] `/tr/projects/wecahan-auto` → `/en/projects/wecahan-auto`
- [ ] `/tr/projects/prificient` → `/en/projects/prificient`
- [ ] `/tr/projects/prificient-tools` → `/en/projects/prificient-tools`

---

## 4.3 Legal sayfalarda çalışıyor mu?
- [ ] `/tr/privacy-policy` → `/en/privacy-policy`
- [ ] `/tr/terms-of-service` → `/en/terms-of-service`

### Kural
Dil değiştirici kullanıcıyı ana sayfaya veya yanlış route’a atmamalıdır.

---

# 5. PROJECTS VE DETAIL PAGE CANLI KONTROLÜ

## 5.1 Projects page doğru render oluyor mu?
- [ ] 3 proje görünüyor
- [ ] status badge’ler doğru
- [ ] kart başlıkları doğru
- [ ] açıklamalar doğru
- [ ] CTA’lar detail page açıyor

---

## 5.2 We CaHan Auto detail canlı kontrol
- [ ] sayfa açılıyor
- [ ] Active status doğru
- [ ] dış site linki doğru
- [ ] Projects’e dönüş var
- [ ] Contact’a yön var
- [ ] mobilde bozulmuyor

---

## 5.3 Prificient detail canlı kontrol
- [ ] sayfa açılıyor
- [ ] In Development status doğru
- [ ] ürün yönü doğru anlatılıyor
- [ ] Tools bağlantısı doğru
- [ ] aktif ürünmüş gibi yanlış CTA yok

---

## 5.4 Prificient Tools detail canlı kontrol
- [ ] sayfa açılıyor
- [ ] Active status doğru
- [ ] dış site linki doğru
- [ ] Prificient bağı doğru
- [ ] mobil görünüm düzgün

---

# 6. CONTACT FORM CANLI KONTROLÜ

## 6.1 Form submit gerçek ortamda çalışıyor mu?
- [ ] gerçek submit denemesi yapıldı
- [ ] başarı state görüldü
- [ ] veri gerçekten hedefe ulaştı
- [ ] yanlış success gösterip boşa düşme yok

---

## 6.2 Validation canlıda çalışıyor mu?
- [ ] boş ad hatası
- [ ] bozuk e-posta hatası
- [ ] boş konu hatası
- [ ] boş mesaj hatası
doğru görünüyor mu?

---

## 6.3 Hata state doğru mu?
- [ ] teknik hata simülasyonunda düzgün mesaj veriyor
- [ ] sayfa patlamıyor
- [ ] kullanıcı teknik dump görmüyor

---

## 6.4 Privacy bağı doğru mu?
- [ ] form altı privacy notu var
- [ ] privacy linki çalışıyor
- [ ] locale’e uygun sayfaya gidiyor

### Kural
Launch günü Contact form gerçek üretim testi zorunludur.

---

# 7. METADATA VE PAYLAŞIM KONTROLÜ

## 7.1 Title ve description canlıda doğru mu?
Aşağıdaki sayfalarda hızlı kontrol yapılmalıdır:
- [ ] Home
- [ ] About
- [ ] Projects
- [ ] We CaHan Auto
- [ ] Prificient
- [ ] Prificient Tools
- [ ] Contact
- [ ] Privacy
- [ ] Terms

---

## 7.2 OG paylaşım ön izlemesi mantıklı mı?
- [ ] Home link preview düzgün
- [ ] en az 1 project detail preview düzgün
- [ ] başlık taşmıyor
- [ ] açıklama anlamsız değil
- [ ] yanlış eski görsel cache’i yoksa not alındı

---

## 7.3 Canonical / alternates temel kontrolü
- [ ] locale sayfaları doğru canonical veriyor
- [ ] alternates mantığı çalışıyor
- [ ] yanlış locale canonical yok

### Kural
Metadata launch günü tamamen kusursuz olmak zorunda değil; ama bariz yanlışlık kabul edilmez.

---

# 8. MOBİL CANLI KONTROL

## 8.1 Home mobilde düzgün mü?
- [ ] hero taşmıyor
- [ ] CTA’lar rahat
- [ ] project kartları okunuyor
- [ ] footer düzgün

---

## 8.2 Projects ve detail mobilde düzgün mü?
- [ ] kartlar ezilmiyor
- [ ] status badge’ler görünür
- [ ] detail hero bozulmuyor
- [ ] CTA butonları taşmıyor

---

## 8.3 Contact mobilde düzgün mü?
- [ ] form alanları rahat
- [ ] klavye açılınca bozulmuyor
- [ ] submit butonu erişilebilir
- [ ] success/error mesajları görünür

### Kural
Yayın günü masaüstü kadar mobil de kontrol edilmelidir.

---

# 9. LEGAL VE GÜVEN KONTROLÜ

## 9.1 Privacy canlıda düzgün mü?
- [ ] sayfa açılıyor
- [ ] başlık doğru
- [ ] footer linki çalışıyor
- [ ] metin okunuyor
- [ ] locale geçişi doğru

---

## 9.2 Terms canlıda düzgün mü?
- [ ] sayfa açılıyor
- [ ] başlık doğru
- [ ] footer linki çalışıyor
- [ ] metin okunuyor
- [ ] locale geçişi doğru

---

## 9.3 Güven görünümü kontrolü
- [ ] sahte logo alanı yok
- [ ] fake metrik yok
- [ ] fake referans yok
- [ ] footer kurumsal hissediliyor
- [ ] Contact gerçek temas alanı gibi çalışıyor

---

# 10. INDEXING VE TEKNİK SEO SON KONTROLÜ

## 10.1 Sitemap erişilebilir mi?
- [ ] sitemap çalışıyor
- [ ] temel route’lar görünüyor
- [ ] olmayan route görünmüyor

---

## 10.2 Robots doğru mu?
- [ ] robots ana siteyi yanlışlıkla engellemiyor
- [ ] staging pattern’leri açıkta değil
- [ ] gerçek sayfalar crawl edilebilir

---

## 10.3 Schema temel doğrulama
- [ ] Home için temel schema var
- [ ] yanlış product / faq schema yok
- [ ] contact ve projects sayfalarında bariz schema hatası yok

---

# 11. CANLI HATA SINIFLANDIRMASI

## Kritik hatalar
Aşağıdakiler launch günü anında çözülmesi gereken kritik hatalardır:

- route açılmıyor
- dil değiştirici yanlış sayfaya atıyor
- project detail 404 veriyor
- Contact form çalışmıyor
- footer legal linkleri bozuk
- canonical veya robots büyük ölçüde yanlış
- mobilde ana sayfa veya form kırılıyor

### Karar
Bu tür hata varsa launch tamamlanmış sayılmaz.

---

## Orta seviye hatalar
Aşağıdakiler mümkün olan en kısa sürede çözülmelidir:

- küçük spacing bozukluğu
- tek bir sayfada metin taşması
- OG preview küçük kalite sorunu
- bazı küçük hover/focus detayları
- bir metadata satırında zayıf metin

### Karar
Site yayında kalabilir ama hızlı düzeltme planı yapılmalıdır.

---

## Düşük seviye hatalar
Aşağıdakiler not alınabilir:
- küçük copy cilası
- bazı ikon / görsel ince ayarlar
- küçük tipografi hizaları

---

# 12. YAYIN SONRASI İLK 1 SAAT KONTROLÜ

## Kontrol edilecekler
- [ ] Site açılıyor mu?
- [ ] beklenmedik 500 / runtime error var mı?
- [ ] Contact form üretim ortamında tekrar çalışıyor mu?
- [ ] temel sayfalar hızlı açılıyor mu?
- [ ] dil değiştirici hâlâ doğru mu?
- [ ] dış linkler doğru alanlara gidiyor mu?

### Kural
Deploy aldıktan sonra ilk saat pasif bırakılmayacaktır.

---

# 13. YAYIN SONRASI İLK 24 SAAT NOTLARI

## İzlenecek alanlar
- [ ] form teslimleri geliyor mu?
- [ ] broken link raporu oluşuyor mu?
- [ ] yanlış locale raporu var mı?
- [ ] kullanıcıdan gelen bariz hata bildirimi var mı?
- [ ] mobile özel problem çıkıyor mu?

### Kural
İlk 24 saat “yayımlandı bitti” gibi düşünülmeyecektir.

---

# 14. YAYIN GÜNÜ KISA OPERASYON AKIŞI

1. Doğru build deploy edilir  
2. Canlı domain doğrulanır  
3. Ana route’lar kontrol edilir  
4. Locale switch test edilir  
5. Projects ve detail page akışı test edilir  
6. Contact form gerçek submit ile test edilir  
7. Footer ve legal linkler test edilir  
8. Metadata ve preview temel kontrolü yapılır  
9. Mobil hızlı kontrol tamamlanır  
10. İlk saat gözlem moduna geçilir  

### Kural
Bu sıra bozulmasa daha sağlıklı olur.

---

# 15. YAYIN GÜNÜ “TAMAMDIR” KRİTERİ
Launch günü “tamam” diyebilmek için aşağıdakiler aynı anda sağlanmalıdır:

- [ ] canlı domain doğru çalışıyor
- [ ] tüm ana route’lar açılıyor
- [ ] locale akışı düzgün
- [ ] project detail sayfaları çalışıyor
- [ ] Contact form gerçekten çalışıyor
- [ ] footer ve legal alan sağlam
- [ ] mobilde kritik kırık yok
- [ ] metadata tarafında bariz yanlışlık yok

### Kural
Bunlardan biri eksikse yayın günü checklist tamamlanmış sayılmaz.

---

## Nihai Karar
Bu belge, `wecahan.com` yayın günü uygulanacak operasyonel son kontrol listesidir.

Bu liste:
- deploy sonrası kalite doğrulaması sağlar
- kritik hataları erken yakalar
- siteyi “yayında ama yarım” görünümünden korur
- WeCaHan’ın ilk gün itibarıyla düzenli ve ciddi görünmesini destekler

Bu checklist uygulanmadan yayın günü tamamlanmış kabul edilmemelidir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- pre-launch-checklist
- post-launch-30-day-checklist
- forms-and-server-actions
- routing-and-locale-architecture
- metadata-and-seo-architecture
- trust-assets-plan

Bu belgede tanımlanan launch günü kontrolleri, açık karar alınmadan “deploy aldıysa tamamdır” mantığıyla geçiştirilmemelidir.