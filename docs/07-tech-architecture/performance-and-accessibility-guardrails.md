# Performans ve Erişilebilirlik Korkulukları

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde **performansın hangi sınırlar içinde korunacağını**, **erişilebilirlik açısından hangi minimum standartların zorunlu olduğunu**, **tasarım kararlarının performansı nasıl etkileyeceğini**, **hangi teknik alışkanlıklardan kaçınılacağını** ve **yayın öncesi hangi kalite korkuluklarının uygulanacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site gereksiz ağırlık nedeniyle yavaşlamaz
- tasarım kalitesi performans pahasına kurulmaz
- erişilebilirlik “sonradan bakarız” konusu olmaktan çıkar
- Contact form, navigation ve legal sayfalar gibi kritik alanlar daha güvenilir hale gelir
- WeCaHan profesyonel ama hafif çalışan bir ana site olur

Bu belge, WeCaHan’ın teknik kalite çıtasını tanımlayan temel guardrail dokümanıdır.

---

## Temel Karar
`wecahan.com` için performans ve erişilebilirlik bir “ekstra kalite” değil, ürün standardıdır.

### Bu ne anlama gelir?
- tasarım kararı alınırken performans düşünülür
- animasyon kararı alınırken erişilebilirlik düşünülür
- font, görsel ve script kullanımı kontrollü olur
- sayfa yüklenirken ağır teknoloji vitrini kurulmaz
- keyboard, focus ve kontrast gibi detaylar ihmal edilmez

### Kural
WeCaHan’da “güzel ama ağır” veya “şık ama erişilemez” yaklaşımı kabul edilmeyecektir.

---

## Performans Hedefi
WeCaHan ana sitesi:
- hızlı açılmalı
- içerik hızlı görünmeli
- etkileşimler gecikmemeli
- mobilde de kaliteli his vermeli

### Aranan his
- temiz
- hızlı
- sürtünmesiz
- hafif
- kararlı

### Aranmayan his
- yüklenmesi ağır
- geç tepki veren
- ilk açılışta boş kalan
- çok animasyon nedeniyle kasan
- mobilde yorucu

---

## Erişilebilirlik Hedefi
WeCaHan sitesi:
- yalnızca mouse ile değil
- klavye ile de
- düşük hareket tercihi olan kullanıcıyla da
- farklı ekran ve kontrast koşullarında da
anlaşılabilir ve kullanılabilir olmalıdır.

### Aranan hedef
- temel WCAG mantığına uyumlu
- kontrastı yeterli
- focus state görünür
- semantic structure doğru
- formlar kullanılabilir

### Kural
Erişilebilirlik yalnızca legal zorunluluk gibi değil, arayüz kalitesi gibi ele alınmalıdır.

---

## Performans Açısından Temel İlkeler

### 1. Az ama doğru görsel yük
- ağır arka planlar olmayacak
- büyük dekoratif medya kullanılmayacak
- fake dashboard veya gereksiz görsel bloklar eklenmeyecek

### 2. Az ama kaliteli motion
- animasyonlar düşük maliyetli olacak
- transform ve opacity tabanlı hafif geçişler tercih edilecek
- layout thrash yaratacak ağır animasyonlardan kaçınılacak

### 3. Script disiplini
- gereksiz client component şişmesi olmayacak
- yalnızca gerektiğinde client-side mantık kullanılacak
- form, navigation ve locale gibi noktalarda dikkatli davranılacak

### 4. Font disiplini
- sınırlı font ailesi
- gereksiz font weight yüklenmeyecek
- tipografi kalitesi performansı öldürmeyecek

### 5. İçerik önceliği
- hero ve ana metin hızlı görünmeli
- kullanıcı siyah boş ekran veya ağır render hissi yaşamamalı

---

## Erişilebilirlik Açısından Temel İlkeler

### 1. Semantic HTML önceliği
- başlık yapısı mantıklı olmalı
- nav, main, footer gibi alanlar doğru kullanılmalı
- button ve link rolleri karıştırılmamalı

### 2. Klavye kullanılabilirliği
- header menüsü
- dil değiştirici
- form alanları
- CTA’lar
klavye ile erişilebilir olmalı

### 3. Görünür focus state
- focus outline kaldırılmayacak
- estetik uğruna focus gizlenmeyecek

### 4. Yeterli kontrast
- metin / zemin ayrımı güçlü olacak
- buton metni okunur olacak
- footer ve legal metinler silikleşmeyecek

### 5. Reduced motion desteği
- kullanıcı hareket azaltma tercihini belirtmişse animasyonlar sadeleşecek

---

## Sayfa Ağırlığı Korkulukları
WeCaHan küçük ama kaliteli bir merkez site olduğu için sayfa ağırlığı kontrollü olmalıdır.

### Kural
- her sayfa gereksiz medya ile şişirilmeyecek
- dekoratif asset kullanımı minimumda tutulacak
- sayfa başına “şov amaçlı” bağımsız JS yükü eklenmeyecek

### Özellikle dikkat edilecek alanlar
- Home hero
- project kart grid’i
- detail page hero
- footer
- dil değiştirici
- form state yönetimi

---

## Görsel Kullanımı Korkulukları
Görseller yalnızca gerçekten gerekiyorsa kullanılmalıdır.

### Uygun kullanım
- logo / marka işareti
- kurucu görselleri varsa optimize edilmiş halleri
- küçük ve anlamlı destek görselleri
- dikkatli kullanılan basit grafik yüzeyleri

### Uygun olmayan kullanım
- dev hero background görselleri
- yüksek çözünürlüklü ama anlamsız dekoratif asset’ler
- her kart için ayrı medya
- büyük video / loop animasyonlar

### Kural
Görsel yoksa tasarım çöküyorsa, tasarım zaten yanlış kurulmuştur.

---

## Animasyon Performansı Korkulukları
Motion kullanılacaksa performans dostu olmalıdır.

### Tercih edilen özellikler
- `opacity`
- `transform`
- hafif transition’lar

### Kaçınılacak özellikler
- pahalı layout tetikleyen ölçü değişimleri
- yoğun filter / blur animasyonları
- sürekli scroll tabanlı repaint üreten efektler
- ağır parallax

### Kural
Animasyonlar CPU / GPU yükünü gereksiz artırmayacaktır.

---

## Font Performansı Korkulukları
Font seçimi kaliteli ama hafif olmalıdır.

### Kurallar
- iki font ailesi yeterlidir
- gereksiz ağırlıklar yüklenmeyecek
- italik / ekstra varyantlar gerçekten gerekiyorsa kullanılacak
- font loading stratejisi kararlı olmalı
- fallback zinciri düşünülmeli

### Riskli davranışlar
- çok fazla weight kullanmak
- bir sürü alternatif font yüklemek
- sadece tasarım için ağır font setup kurmak

---

## Client Component Disiplini
Next.js yapısında gereksiz client component kullanımından kaçınılmalıdır.

### Server component olarak kalabilecek alanlar
- çoğu içerik sayfası
- legal sayfalar
- static section’lar
- footer
- content-driven hero’lar

### Client component gerektirebilecek alanlar
- mobile nav toggle
- language switch logic
- contact form interaction
- bazı küçük interactive UI alanları

### Kural
“Kolay olduğu için client component” yaklaşımı kullanılmayacaktır.

---

## Form Performans ve Erişilebilirlik Korkulukları
Contact form kritik alanlardan biridir.

### Performans tarafı
- submit akışı sade olmalı
- gereksiz re-render üretilmemeli
- validation temiz çalışmalı
- pending state ağır davranmamalı

### Erişilebilirlik tarafı
- her input’un label’ı olmalı
- hata mesajları anlaşılır olmalı
- submit butonu erişilebilir olmalı
- textarea rahat kullanılmalı
- success/error state screen reader dostu düşünülmeli

### Kural
Form hem teknik hem erişilebilirlik açısından profesyonel görünmelidir.

---

## Header ve Navigation Korkulukları
Navigation alanı küçük görünür ama kritik kalitedir.

### Performans
- hafif olmalı
- sticky davranışı ağır olmamalı
- mobil drawer gereksiz JS şovuna dönmemeli

### Erişilebilirlik
- nav semantik olmalı
- klavye ile erişilebilmeli
- açık/kapalı mobil menü mantığı anlaşılır olmalı
- active route veya current page hissi verilmeli

### Kural
Navbar yalnızca görsel değil, erişilebilir bir yönlendirme bileşeni olmalıdır.

---

## Renk ve Kontrast Korkulukları
Koyu tema kullanan bir sitede kontrast hataları çok tehlikelidir.

### Zorunlu ilkeler
- ana metin yeterince açık olmalı
- ikincil metin çok silik olmamalı
- buton / link kontrastı korunmalı
- focus ring görünür olmalı
- legal sayfalarda metin asla zor okunmamalı

### Kural
Premium görünmek için metin kontrastı düşürülmeyecektir.

---

## Başlık Yapısı ve Semantik Korkuluklar
SEO ve erişilebilirlik açısından doğru başlık hiyerarşisi gerekir.

### Kural
- her sayfada tek anlamlı H1
- section başlıkları mantıklı sırada
- sırf stil için heading atlanmayacak
- görsel olarak küçük diye semantik olarak yanlış element seçilmeyecek

### Amaç
Screen reader ve genel yapı açısından temiz belge hiyerarşisi kurmak.

---

## Link ve Button Ayrımı
Bu ayrım erişilebilirlik ve davranış için çok önemlidir.

### Link ne zaman?
- başka sayfaya gidiyorsa
- route değiştiriyorsa
- dış site açıyorsa

### Button ne zaman?
- form submit ediyorsa
- state değiştiriyorsa
- nav drawer açıyorsa
- client-side action tetikliyorsa

### Kural
Link gibi görünen button veya button gibi davranan link karmaşası yaratılmayacaktır.

---

## Keyboard Navigation Korkulukları
Site tamamen mouse odaklı tasarlanmayacaktır.

### Minimum kontrol alanları
- header
- mobile nav
- CTA butonları
- form alanları
- footer linkleri
- language switcher

### Kural
Sekme sırası mantıklı olmalı ve kullanıcı odak kaybetmemelidir.

---

## Reduced Motion Korkulukları
Kullanıcının hareket azaltma tercihi desteklenmelidir.

### Bu ne demek?
- giriş animasyonları azaltılmalı
- scroll reveal davranışları sadeleşmeli
- hover hareketleri daha minimal kalmalı
- dekoratif motion devreden çıkabilmeli

### Kural
Reduced motion tercihi olduğunda arayüz işlevsizleşmemeli; sadece daha sakin hale gelmelidir.

---

## Screen Reader Uyum Korkulukları
Tam kapsamlı erişilebilirlik sistemi gerekmese de temel uyum şarttır.

### Minimum gereksinimler
- anlamlı link metinleri
- form label’ları
- hata mesajı ilişkileri
- button açıklığı
- nav alanlarının semantik yapısı
- decorative öğelerin gerektiğinde `aria-hidden` olması

### Kural
Arayüz yalnızca gören ve mouse kullanan biri için tasarlanmayacaktır.

---

## Layout Shift Korkulukları
Sayfa yüklenirken kararsız zıplamalar olmamalıdır.

### Dikkat edilecek alanlar
- font load
- image alanları
- navbar sticky geçişi
- success/error message alanları
- form submit sonrası state değişimi

### Kural
UI state değişimleri sayfanın bütününü zıplatmayacak şekilde tasarlanmalıdır.

---

## Legal Sayfalar İçin Özel Korkuluklar
Legal sayfalar küçük ama erişilebilirlik açısından önemli alanlardır.

### Performans
- neredeyse statik olmalı
- gereksiz JS olmamalı
- hızlı açılmalı

### Erişilebilirlik
- okunur font boyutu
- başlık hiyerarşisi
- yeterli satır genişliği
- footer linklerine erişim

### Kural
Legal sayfalar en sade ama en rahat okunan sayfalardan olmalıdır.

---

## Mobil Performans Korkulukları
Mobil deneyim masaüstünden daha kritik kabul edilmelidir.

### Kural
- ağır background’lar yok
- gereksiz motion yok
- form rahat çalışmalı
- footer sıkışmamalı
- hero çok büyük olmamalı
- layout stabil olmalı

### Amaç
Mobil kullanıcı masaüstüne göre ikinci sınıf deneyim yaşamamalıdır.

---

## Lighthouse / Genel Kalite Yaklaşımı
Skor kovalamak tek amaç değildir; ama kötü kalite de kabul edilmez.

### Aranan seviye
- iyi performans hissi
- güçlü erişilebilirlik temeli
- temiz best-practice yaklaşımı
- temel SEO sağlığı

### Kural
Sadece skor için sahte optimizasyonlar yapılmayacak;  
ama bariz problemler de bırakılmayacaktır.

---

## Yayın Öncesi Minimum Teknik Kalite Kontrolleri

### Performans
- [ ] Home sayfası gereksiz ağır değil
- [ ] büyük dekoratif medya yok
- [ ] gereksiz client component şişmesi yok
- [ ] font yükleri kontrollü
- [ ] scroll ve hover performansı stabil
- [ ] mobil açılış hissi hafif

### Erişilebilirlik
- [ ] ana sayfalarda H1 yapısı doğru
- [ ] form label’ları var
- [ ] focus görünür
- [ ] klavye ile nav mümkün
- [ ] kontrast yeterli
- [ ] reduced motion düşünülmüş
- [ ] link/button rolleri doğru

### Genel kalite
- [ ] layout shift belirgin değil
- [ ] success/error state’ler sayfayı bozmuyor
- [ ] legal sayfalar okunur
- [ ] footer linkleri erişilebilir

---

## Anti-Patternler
Aşağıdaki yaklaşımlar kullanılmayacaktır:

- sırf güzel diye ağır blur ve glow sistemleri
- motion’u her yerde kullanmak
- label yerine sadece placeholder kullanmak
- focus outline kaldırmak
- büyük hero için ağır medya kullanmak
- static içerik için bile gereksiz client component yapmak
- metin kontrastını premium görünüm bahanesiyle düşürmek

---

## Guardrail Test Soruları
Her teknik / tasarımsal karar için şu sorular sorulmalıdır:

1. Bu karar siteyi ağırlaştırıyor mu?
2. Bu karar erişilebilirliği zayıflatıyor mu?
3. Bu özellik olmadan deneyim daha temiz olur muydu?
4. Bu UI yalnızca mouse kullanan biri için mi çalışıyor?
5. Mobilde bu hâlâ kaliteli mi?
6. Bu karar WeCaHan’ın sakin ve profesyonel çizgisine uyuyor mu?

Bu testten geçmeyen kararlar uygulanmamalıdır.

---

## Nihai Karar
`wecahan.com` için performans ve erişilebilirlik korkulukları şu çizgide kilitlenir:

- hafif ve hızlı sayfa yapısı
- kontrollü script ve client component kullanımı
- yeterli kontrast
- görünür focus state
- semantik HTML ve doğru heading yapısı
- reduced motion desteği
- klavye ve form erişilebilirliği
- mobilde bozulmayan kalite

WeCaHan’ın teknik kalitesi, tasarımın arkasında sessizce çalışan ama güveni doğrudan etkileyen temel katmanlardan biri olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- visual-direction
- color-typography-system
- motion-and-interaction-rules
- forms-and-server-actions
- pre-launch-checklist
- launch-day-checklist

Bu belgede tanımlanan performans ve erişilebilirlik sınırları, açık karar alınmadan ağır efekt, zayıf kontrast veya mouse-only deneyime kaydırılmamalıdır.