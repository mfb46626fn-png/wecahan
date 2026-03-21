# Hareket ve Etkileşim Kuralları

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki **hover davranışlarını**, **geçiş sürelerini**, **scroll ile ilişkili hareketleri**, **entrance animasyonlarını**, **focus ve active state mantığını**, **form etkileşimlerini**, **reduced motion yaklaşımını** ve genel olarak arayüzün nasıl hissettirmesi gerektiğini netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site gereksiz animasyonla boğulmaz
- hareket tasarımı tasarımın önüne geçmez
- WeCaHan’ın profesyonel ve sakin karakteri etkileşim tarafında da korunur
- bileşenler farklı farklı tepki vermez
- premium his gösteriş yerine kontrollü akıcılıkla kurulur

Bu belge, WeCaHan tasarım sisteminin hareket ve etkileşim omurgasını tanımlar.

---

## Temel Hareket Kararı
WeCaHan için hareket sistemi şu prensiple kurulacaktır:

**az hareket + doğru yerde hareket + sakin geçiş**

Bu şu anlama gelir:
- her şey hareket etmeyecek
- hareket dekor değil, kalite hissi yaratacak
- animasyon dikkat çekmek için değil, sürtünmeyi azaltmak için kullanılacak
- kullanıcıyı yormayan bir akış kurulacak
- site “gösterişli” değil, “oturmuş” hissedilecek

WeCaHan’da motion, görünür olmaktan çok doğru hissettirmelidir.

---

## Aranan Etkileşim Hissi
Kullanıcı etkileşimlerde şu hissi yaşamalıdır:

- arayüz tepkisiz değil
- ama zıplayan, parlayan, şov yapan bir yapı da yok
- her şey kontrollü şekilde cevap veriyor
- hover, focus ve state değişimleri net
- site ciddi ama donuk değil

### Kısa özet
**sessiz akıcılık**

Bu, WeCaHan motion karakterini iyi tanımlar.

---

## Aranmayan Etkileşim Hissi
Aşağıdaki hisler WeCaHan için yanlıştır:

- animasyon demosu
- hover şovu
- ağır parallax sitesi
- agency landing page enerjisi
- startup hype hissi
- aşırı mikro etkileşim yorgunluğu
- neon / glow ile güçlenmiş hover davranışı
- her section’da scroll animasyonu

Bu çizgiler siteyi olduğundan daha yapay gösterir.

---

## Motion’ın Rolü
WeCaHan’da motion şu amaçlarla kullanılacaktır:

1. **Arayüzün tepki verdiğini göstermek**
2. **Durum değişimlerini anlaşılır kılmak**
3. **Hover ve focus anlarını netleştirmek**
4. **Sayfa girişlerini yumuşatmak**
5. **Görsel kalite hissini artırmak**

### Motion şu amaçlarla kullanılmayacaktır:
- “etkileyici görünmek”
- dikkat çekmek için bağırmak
- boş alanı animasyonla doldurmak
- teknoloji hissi vermek için hareket uydurmak

---

## Genel Hareket İlkeleri

### 1. Hareket hızlı ama sert olmayacak
Geçişler:
- yumuşak
- kısa
- kontrollü
olmalıdır

### 2. Aynı tür bileşen aynı tür tepki vermeli
Buton, kart, input, nav link gibi bileşenlerde tepki mantığı tutarlı olmalıdır.

### 3. Hareket çok görünür değil, hissedilir olmalı
Kullanıcı animasyonu fark edebilir; ama “aa burada animasyon var” diye düşünmek zorunda kalmamalıdır.

### 4. Hareket sayfanın odağını çalmamalı
Metin, bilgi ve yapı her zaman birinci önceliktir.

---

## Transition Süresi İlkesi
Geçiş süreleri çok yavaş veya çok hızlı olmamalıdır.

### Hedef his
- doğal
- modern
- sürtünmesiz
- kontrollü

### Genel öneri mantığı
- kısa UI geçişleri: hızlı
- orta yoğunluklu section / state geçişleri: hafif daha yumuşak
- büyük ekran kaymaları / modal benzeri şeyler varsa: ama yine kısa

### Kural
WeCaHan’da “yavaş premium geçiş” diye ağır animasyon yapılmayacaktır.

---

## Easing İlkesi
Geçiş eğrileri sert lineer his taşımamalıdır.

### Aranan his
- hafif ease-out
- doğal yavaşlama
- mekanik değil, akıcı bitiş

### Kaçınılacak his
- sert lineer kayış
- elastik / bounce hareket
- oyun arayüzü hissi
- fazla yumuşak ve ağır bitiş

### Kural
Aşırı karakterli easing kullanılmayacaktır.  
Düşük profilli, profesyonel easing tercih edilecektir.

---

## Hover Kuralları

## Genel Hover İlkesi
Hover davranışı şunları yapmalıdır:
- tıklanabilirliği belli etmek
- yüzey kalitesini güçlendirmek
- kullanıcıya küçük bir tepki vermek

Ama şunları yapmamalıdır:
- şov
- zıplama
- glow patlaması
- dikkat dağıtma

---

## Buton Hover
### Uygun davranışlar
- hafif ton değişimi
- küçük yüzey derinliği hissi
- çok hafif border / background geçişi
- belki çok küçük translate veya shadow dokunuşu

### Uygun olmayan davranışlar
- ani büyüme
- yoğun glow
- büyük shadow sıçraması
- renk patlaması
- pulse benzeri tekrar eden hareket

### Kural
Buton hover’ı “güçlü ama sakin” hissettirmelidir.

---

## Kart Hover
### Uygun davranışlar
- hafif yükselme hissi
- yüzey tonunda küçük fark
- border kontrastında hafif artış
- çok kontrollü translateY

### Uygun olmayan davranışlar
- kartın çok yukarı fırlaması
- 3D dönüş
- büyük perspective efektleri
- parlama / neon border
- hover’da içerik yerinin değişmesi

### Kural
Kart hover’ı bilgi kartını oyuncak karta çevirmemelidir.

---

## Link Hover
### Uygun davranışlar
- renk tonu farkı
- underline görünmesi veya güçlenmesi
- küçük opacity değişimi

### Uygun olmayan davranışlar
- kayarak alt çizgi şovu
- çok agresif renk değişimi
- text bounce
- anlamsız icon hareketleri

### Kural
Metin linkleri sade kalmalıdır.

---

## Navbar Hover
### Uygun davranışlar
- hafif renk farkı
- aktif linkte net görsel durum
- hover’da çok düşük yüzey tepkisi

### Uygun olmayan davranışlar
- alt menü yoksa sahte dropdown hissi
- hover’da büyük padding sıçraması
- ağır underline animasyonu
- arka planda parlayan kutu

### Kural
Navbar hareketi görünür ama geri planda olmalıdır.

---

## Focus State Kuralları
Focus state erişilebilirlik için kritik kabul edilir.

### Amaç
- keyboard navigation yapan kullanıcıyı desteklemek
- input ve buton focus’unu görünür kılmak
- hover ile focus’u karıştırmamak

### Focus state’te olması gerekenler
- net outline veya halka
- yeterli kontrast
- bileşeni kaybettirmeyen ama belirgin tepki

### Olmaması gerekenler
- görünmez focus
- sadece çok hafif renk farkı
- outline’ı tamamen kaldırmak
- hover ile aynı state’i kullanmak

### Kural
Focus state estetik uğruna yok edilmeyecektir.

---

## Active / Pressed State Kuralları
Tıklanabilir bileşenler aktif durumda da net tepki vermelidir.

### Uygun davranışlar
- küçük derinlik değişimi
- arka plan tonunun sıkılaşması
- çok hafif basılmış hissi

### Uygun olmayan davranışlar
- sert sıçrama
- büyük pozisyon değişimi
- kararsız veya titreyen his

### Kural
Active state küçük ama güvenilir tepki vermelidir.

---

## Entrance Animasyonları
Sayfa veya section ilk açılış animasyonları çok dikkatli kullanılmalıdır.

### Uygun kullanım
- hafif fade-in
- hafif upward reveal
- section’ların küçük gecikmeyle ama sade görünmesi
- sadece ilk görünümde çalışan yumuşak giriş

### Uygun olmayan kullanım
- uzun loading hissi
- büyük kaymalar
- aşırı stagger zinciri
- section section şov
- her scroll’da tekrar eden giriş animasyonu

### Kural
Entrance animasyonları varsa bile, kullanıcı onları beklemek zorunda kalmamalıdır.

---

## Scroll Davranışları
Scroll ile ilişkili hareketler çok sınırlı kullanılmalıdır.

### Uygun kullanım
- section’ların nazik reveal davranışı
- sticky header’ın çok hafif dönüşümü
- anchor scroll geçişi

### Uygun olmayan kullanım
- ağır parallax
- scroll’a bağlı büyük görsel kaymalar
- background layer hareketleri
- her şeyin farklı hızlarda akması
- story-telling scroll kurgusu

### Kural
WeCaHan bir scroll-experience sitesi değildir.  
Bilgi ve yapı odaklı merkez sitedir.

---

## Sticky Header Davranışı
Header sticky olabilir ama çok dikkat çekmemelidir.

### Uygun davranışlar
- scroll ile hafif yüzey yoğunluğu artışı
- küçük blur / opacity farkı (çok kontrollü)
- düzenli yükseklik korunması

### Uygun olmayan davranışlar
- header boyunun sert küçülmesi
- dramatik renk değişimi
- her scroll hareketinde zıplama
- agresif saklan-gel davranışı

### Kural
Sticky header kullanıcıyı rahatsız etmeyecek kadar sakin olmalıdır.

---

## Form Etkileşim Kuralları

## Input Focus
- net görünmeli
- rahat hissedilmeli
- hover ile karışmamalı

## Validation Feedback
- hata mesajı net çıkmalı
- alanın hatalı olduğu anlaşılmalı
- ama kullanıcı cezalandırılıyormuş gibi hissetmemeli

## Success Feedback
- form gönderiminden sonra sakin, net bir teyit verilmelidir

## Uygun olmayan davranışlar
- input shake animasyonu
- kırmızı alarm parlaması
- success’te konfeti hissi
- submit sonrası uzun loading tiyatrosu

### Kural
Form etkileşimleri ciddi ve profesyonel kalmalıdır.

---

## Loading / Pending State Kuralları
Eğer form veya bazı yönlendirmelerde pending state varsa:

### Uygun davranışlar
- küçük spinner veya loading göstergesi
- buton label’ında hafif değişim
- geçici disabled state

### Uygun olmayan davranışlar
- tüm sayfayı bloke eden ağır loading
- büyük skeleton şovu
- gereksiz dramatik bekleme efekti

### Kural
WeCaHan’da loading state kısa, sade ve güven verici olmalıdır.

---

## Reduced Motion İlkesi
Motion tercihleri erişilebilirlik açısından saygıyla ele alınmalıdır.

### Kural
`prefers-reduced-motion` desteklenmelidir.

Bu durumda:
- entrance animasyonları azaltılmalı veya kapatılmalı
- smooth scroll gerekiyorsa dikkatli ele alınmalı
- hover hareketleri daha az belirgin hale getirilebilir
- motion dekorasyon değilse korunabilir, dekoratif olanlar azaltılmalıdır

### Amaç
Animasyon istemeyen kullanıcıya zorla hareket dayatmamak.

---

## Timing Tutarlılığı
Farklı bileşenlerin tepki süreleri birbirinden kopuk olmamalıdır.

### Örnek
- buton hover çok hızlı
- kart hover çok yavaş
- input focus çok ağır
- navbar link bir anda

Bu tür kopukluklar kalite hissini bozar.

### Kural
UI timing dili site genelinde aynı ailede hissettirmelidir.

---

## Motion Yoğunluğu Sayfa Bazında

## Home
- en dikkatli kullanılan motion
- hero ve kartlarda çok hafif quality motion
- ama yine de kontrollü

## About
- daha az motion
- daha editorial his

## Projects
- grid hover’larında hafif tepki
- status ve CTA’da net ama küçük hareket

## Project Detail
- sakin geçişler
- CTA ve küçük reveal’lar
- içerik okuma deneyimini bozmayan motion

## Contact
- en sade etkileşim
- form deneyimi öncelikli

## Legal
- neredeyse statik
- sadece temel link / focus / scroll davranışı

---

## Motion’da Kaçınılacak Tasarım Eğilimleri
Aşağıdakiler kullanılmayacaktır:

- hover’da glow patlaması
- scroll tetiklemeli ağır kart animasyonları
- başlıklarda harf harf giriş
- CTA butonlarında pulse
- arka planda sürekli hareket
- loop eden dekoratif animasyonlar
- mouse takip eden efektler
- magnetic button davranışları

Bu yaklaşımlar WeCaHan için fazla gösterişlidir.

---

## Etkileşimde “Premium” Hissi Nasıl Kurulacak?
Premium his şu yollarla kurulacaktır:

- hızlı ama yumuşak geçiş
- kararlı focus state
- temiz hover davranışı
- input’larda düzenli tepki
- page hero ve section geçişlerinde sakin ritim
- motion ile değil, motion’ın kalitesiyle hissedilen arayüz

### Kural
Premium his, daha fazla animasyon ile değil;  
daha kontrollü animasyon ile kurulacaktır.

---

## Motion Test Soruları
Bir motion kararı alınırken şu sorular sorulmalıdır:

1. Bu hareket gerekli mi?
2. Bu hareket bilgiye yardımcı oluyor mu?
3. Bu hareket dikkat dağıtıyor mu?
4. Bu hareket WeCaHan’ın tonuna uyuyor mu?
5. Bu hareket kapatıldığında arayüz daha mı iyi olurdu?
6. Reduced motion tercihinde bu deneyim bozuluyor mu?

Bu testten geçmeyen motion kararları kullanılmayacaktır.

---

## Nihai Karar
`wecahan.com` için hareket ve etkileşim sistemi şu çizgide kilitlenir:

- kısa ve sakin geçişler
- hover’da küçük ama kaliteli tepki
- net focus ve active state’ler
- sınırlı entrance motion
- scroll tabanlı efektlerde ciddi disiplin
- reduced motion desteği
- gösterişsiz ama akıcı arayüz

WeCaHan’ın motion dili, teknoloji gösterisi değil;  
kurulu ve kaliteli bir dijital yüzey hissi vermelidir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- component principles
- component inventory
- forms and server actions
- performance and accessibility guardrails
- all page structure documents

Bu belgede tanımlanan motion ve interaction kuralları, açık karar alınmadan flashy, heavy-animated veya agency-demo tarzı etkileşimlere kaydırılmamalıdır.