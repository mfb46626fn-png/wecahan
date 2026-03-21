# Renk ve Tipografi Sistemi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde kullanılacak **ana renk mantığını**, **zemin ve yüzey ilişkilerini**, **vurgu renginin nasıl kullanılacağını**, **tipografi hiyerarşisini**, **font kullanım kurallarını**, **kontrast ve okunabilirlik ilkelerini** ve **TR / EN içerikte yazı sisteminin nasıl korunacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site renkleri rastgele dağılmaz
- “teknoloji sitesi” diye neon ve aşırı parlak estetiğe kayılmaz
- yazı hiyerarşisi güçlenir
- ana sayfa, detail page ve legal sayfalar aynı tasarım dilinde kalır
- görsel kalite, daha doğru oranlar ve tutarlı tipografi üzerinden kurulur

Bu belge, WeCaHan tasarım sisteminin renk ve yazı omurgasını tanımlar.

---

## Temel Karar
WeCaHan için renk ve tipografi sistemi şu prensiple kurulacaktır:

**yüksek kontrast + kontrollü vurgu + güçlü tipografi + sade yüzey**

Bu şu anlama gelir:
- koyu zemin kullanılacak
- metinler rahat okunacak
- vurgu rengi az ama bilinçli kullanılacak
- tipografi, sitenin en güçlü tasarım araçlarından biri olacak
- efekt yerine düzen ve oran üzerinden kalite hissi kurulacak

---

## Ana Zemin Kararı
Sitenin ana görsel temeli koyu zeminli olacaktır.

### Ana zemin karakteri
- siyaha yakın ama tamamen siyah olmayan
- koyu lacivert / slate / charcoal karakterli
- sert değil, dengeli
- tipografiyi öne çıkaran
- uzun kullanımda gözü yormayan

### Neden?
Bu yaklaşım:
- premium hissi destekler
- teknoloji odaklı görünümü güçlendirir
- tipografi kontrastını iyileştirir
- sade yüzeylerle daha iyi çalışır
- vurgu renklerini daha kontrollü taşır

### Ana kural
Zemin dramatik olmak için değil, içerik ve düzeni taşıyan sessiz bir yüzey olmak için kullanılacaktır.

---

## Yüzey Katmanları
Tek bir koyu arka plan yerine, hafif ton farkları olan yüzey katmanları kullanılmalıdır.

### Yüzey sisteminin amacı
- section ayrımı oluşturmak
- kartları zeminden ayırmak
- tekdüze siyah blok etkisini kırmak
- içerik hiyerarşisini desteklemek

### Önerilen yüzey mantığı
- ana zemin
- bir ton daha açık section yüzeyi
- kart yüzeyi
- border / ayırıcı tonu

### Kural
Ton farkları kontrollü olmalıdır.  
Büyük kontrast sıçramaları veya her section’da farklı dünyaya geçiş hissi üretilmeyecektir.

---

## Metin Renk Sistemi
Metin renk sistemi katmanlı ama sade olmalıdır.

### 1. Ana Metin
Kırık beyaz / sıcak beyaz / yüksek kontrastlı açık ton

Amaç:
- ana başlıklar
- ana paragraflar
- önemli vurgular

### 2. İkincil Metin
Açık gri / nötr gri tonları

Amaç:
- destekleyici açıklamalar
- alt metinler
- footer açıklamaları
- ikincil section girişleri

### 3. Zayıf / Yardımcı Metin
Daha yumuşak gri ton

Amaç:
- küçük notlar
- yardımcı açıklamalar
- metadata / son güncelleme
- küçük UI notları

### Kural
Metin kontrastı hiçbir noktada okunabilirliği düşürecek kadar zayıflatılmayacaktır.

---

## Vurgu Rengi Kararı
WeCaHan için **tek ana vurgu rengi** kullanılacaktır.

### Temel tercih
Turkuaz / soğuk mavi-yeşil eksenli kontrollü bir vurgu rengi en doğru tercihtir.

### Neden?
- teknoloji hissini yapaylaştırmadan destekler
- koyu zeminde temiz görünür
- modern ve güçlü his verir
- altın tonuna göre daha güncel ve kontrollü görünür

### Altın ne olacak?
Altın tonları tamamen yasak değildir;  
ama ana vurgu sistemi olarak kullanılmayacaktır.

En fazla:
- çok sınırlı premium detay
- özel küçük ayırt edici unsur
- opsiyonel küçük yüzey notu
olarak düşünülebilir.

### Kesin kural
Aynı anda yoğun turkuaz ve yoğun altın kullanılmayacaktır.

---

## Vurgu Renginin Kullanım Alanları
Vurgu rengi aşağıdaki alanlarda kontrollü kullanılabilir:

- birincil CTA butonları
- aktif link hover state’leri
- küçük vurgu çizgileri
- status badge varyasyonları
- seçili başlık vurguları
- ince ikon detayları
- odak / focus state’leri

### Kullanılmaması gereken alanlar
- her başlık
- her kart arka planı
- uzun metin blokları
- ağır gradient’ler
- büyük arka plan gösterileri
- sürekli parlayan border’lar

### Kural
Vurgu rengi, az kullanıldığı için değerli görünmelidir.

---

## Renk Yoğunluğu İlkesi
WeCaHan tasarımında renkler işlevsel olarak kullanılacaktır.

### Amaç
- yön göstermek
- vurgu oluşturmak
- hiyerarşi kurmak
- okunabilirliği güçlendirmek

### Amaç olmayan şey
- süslemek
- boş alanı “doldurmak”
- gösterişli görünmek
- teknoloji hissi üretmek için rengi zorlamak

---

## Buton Renk Sistemi

## Birincil Buton
- koyu zemin üzerinde güçlü ama kontrollü vurgu rengi
- metin net ve yüksek kontrastlı olmalı
- hover’da aşırı glow kullanılmamalı
- hareket değil yüzey kalitesi öne çıkmalı

## İkincil Buton
- daha sade
- border veya nötr yüzey mantığı
- birincil kadar dikkat çekmeyen ama net görünen

## Ghost / Text Link
- küçük yönlendirmeler için kullanılabilir
- fazla zayıf görünmemeli
- link olduğunu belli etmelidir

### Kural
Buton türleri görsel hiyerarşi taşımalıdır.  
Her buton birincil gibi görünmeyecektir.

---

## Status Badge Renk Sistemi
Status badge’ler sade ama işlevsel görünmelidir.

### Active için
- vurguya yakın ama aşırı parlamayan ton
- güven ve açıklık veren görünüm
- “alarm” hissi yaratmayan renk

### In Development için
- daha nötr veya daha yumuşak farklılaştırılmış ton
- hazırlık / süreç hissi
- pasif veya silik görünmeden ayrışma

### Kural
Status renkleri traffic-light mantığında bağıran kırmızı/yeşil sistemine dönüşmeyecektir.

---

## Border ve Ayırıcı Renkleri
Border’lar görünür ama baskın olmayacaktır.

### Kullanım amacı
- yüzeyleri ayırmak
- kart sınırını belirlemek
- section içindeki düzeni desteklemek
- form alanlarını okunur kılmak

### Kural
Border rengi:
- çok parlak olmayacak
- görünmeyecek kadar silik olmayacak
- kartları “neon kutu”ya dönüştürmeyecek

İnce, kontrollü ve kaliteli görünmelidir.

---

## Gradient Kullanım İlkesi
Gradient kullanılabilir, ancak çok sınırlı ve düşük yoğunlukta kullanılmalıdır.

### Kullanılabilecek yerler
- hero içindeki çok hafif arka plan derinliği
- section geçişlerinde çok yumuşak ton farkı
- bazı vurgu yüzeylerinde çok hafif destek

### Kullanılmayacak yerler
- tam sayfa arka plan
- her kart
- butonlar üzerinde aşırı renk geçişi
- yoğun mor / mavi / turkuaz patlamaları
- CTA bloklarında “sahte premium” hissi

### Kural
Gradient, fark edilmeden kalite hissi üretmeli;  
kendini bağırarak göstermemelidir.

---

## Font Kararı
Önerilen font sistemi doğru yönde:

- Başlıklar: Montserrat
- Gövde metni: Inter

Bu ikili kullanılabilir ve mantıklıdır.

### Neden?
Montserrat:
- güçlü başlık karakteri verir
- modern ve kontrollü görünür
- marka / hero / section heading için uygundur

Inter:
- uzun okumada rahattır
- dijital arayüzlerde güçlüdür
- sade ve profesyonel gövde metni üretir

### Kural
Font sistemi gereksiz yere genişletilmeyecektir.  
İki fontlu sistem yeterlidir.

---

## Başlık Tipografisi İlkeleri
Başlıklar WeCaHan tasarımında çok güçlü rol oynayacaktır.

### Başlık karakteri
- net
- güçlü
- sıkı ama boğucu olmayan
- kısa satırlarda etkili
- section’ı taşıyan

### Başlık kullanım alanları
- hero
- page title
- section heading
- project hero
- CTA başlıkları

### Kural
Başlıklar çok süslü değil, sistemli görünmelidir.

---

## Gövde Metni Tipografisi İlkeleri
Gövde metni:
- rahat okunmalı
- fazla küçük olmamalı
- legal sayfalarda da iyi çalışmalı
- yoğun içerikte göz yormamalı

### Gövde metni karakteri
- nötr
- sakin
- modern
- temiz
- dijital okuma dostu

### Kural
Gövde metni hiçbir noktada “ince ve şık görünsün” diye okunmaz hale getirilmeyecektir.

---

## Hiyerarşi Sistemi
Typographic hierarchy, görsel sistemin ana taşıyıcısı olacaktır.

### Önerilen hiyerarşi mantığı
- H1: hero / page title
- H2: ana section başlıkları
- H3: alt section / card başlıkları
- body-lg: hero alt metin / section intro
- body: ana paragraflar
- body-sm: destekleyici metin
- caption: küçük notlar / legal yardımcı metin

### Kural
Bu hiyerarşi sayfalar arasında bozulmayacaktır.

---

## Yazı Ağırlığı İlkesi
Ağırlık kullanımı sade olmalıdır.

### Öneri
- H1 / H2: güçlü ama aşırı kalın olmayan
- H3: orta-güçlü
- Body: regular / medium dengesi
- küçük notlar: regular

### Kural
Her şeyi kalın yapma hatasına düşülmeyecektir.  
Ağırlık hiyerarşi için kullanılacaktır.

---

## Satır Yüksekliği ve Genişlik İlkesi
Tipografi yalnızca font seçiminden ibaret değildir.

### Satır yüksekliği
- başlıklarda daha sıkı
- gövde metninde daha rahat
- legal içerikte biraz daha ferah

### Satır genişliği
- uzun metin blokları çok geniş alana yayılmayacak
- rahat okunabilir content width korunacak
- legal ve about içerikleri özellikle iyi metin genişliği ile sunulacak

### Kural
Geniş ekranlarda yazılar duvardan duvara uzatılmayacaktır.

---

## Büyük / Küçük Harf Kullanımı
### Başlıklarda
- doğal başlık formu
- tamamı büyük harf kullanılmamalı
- vurgu için her kelimeyi gereksiz büyük yazma alışkanlığı olmamalı

### Küçük etiketlerde
- all caps çok sınırlı ve dikkatli kullanılabilir
- küçük eyebrow / label metinlerinde kullanılabilir
- ama agresif marka hissi vermemelidir

### Kural
Her yerde all caps kullanımı WeCaHan tonuna uymaz.

---

## Link ve Metin Vurgusu
Metin içi linkler ve vurgu alanları aşırı dikkat çekmeyecektir.

### Kullanım prensibi
- link olduğunu belli eder
- ama paragraf akışını bozmaz
- hover’da net tepki verir
- renk dışında hafif underline veya weight değişimi desteklenebilir

### Kural
Uzun metin bloklarında her 3 satırda bir renkli vurgu kullanılmayacaktır.

---

## Legal ve Uzun Metin Sayfaları İçin Tipografi
Privacy ve Terms sayfaları özel dikkat ister.

### Kural
- başlıklar net ayrışmalı
- body font yeterli büyüklükte olmalı
- section spacing okunurluğu desteklemeli
- gri metinler fazla silik olmamalı
- uzun metinlerde line length iyi ayarlanmalı

Legal içerik zayıf tipografi nedeniyle “okunmaz duvar metin”e dönüşmemelidir.

---

## Mobil Tipografi İlkeleri
Mobilde tipografi daha da önemli hale gelir.

### Kural
- hero başlıkları 2–4 satırı aşmamalı
- alt metin çok sıkışmamalı
- kart başlıkları rahat okunmalı
- status badge’ler küçülüp kaybolmamalı
- footer metinleri okunabilir kalmalı
- legal içerik mobilde de taşınabilir olmalı

### Yapılmayacaklar
- mobilde çok küçük body text
- çok dar satırda uzun paragraf
- spacing azaltma uğruna tipografiyi boğmak

---

## Kontrast İlkesi
WeCaHan’da kontrast görsel kalite kadar erişilebilirlik için de önemlidir.

### Kural
- ana metin her zaman rahat okunmalı
- ikincil metin zayıf ama görünmez olmayacak
- buton metni kontrastlı olmalı
- form input’ları ve placeholder’lar karışmamalı
- footer okunabilirliğini kaybetmemeli

Düşük kontrast “premium görünüm” değildir.  
Zayıf kullanılabilirliktir.

---

## Kullanılmayacak Renk / Yazı Alışkanlıkları
Aşağıdaki yaklaşımlar kullanılmayacaktır:

- neon cyan her yerde
- altın gradient çılgınlığı
- çok ince ve okunaksız body text
- başlıklarda aşırı tracking
- yoğun blur üstüne düşük kontrastlı yazı
- her şeyi mor / mavi / turkuaz yapmak
- “şık” görünmek için okunabilirliği bozmak

---

## Görsel-Tipografik Dengenin Özeti
WeCaHan’da kalite hissi şu denge ile kurulacaktır:

- koyu, güçlü ama yormayan zemin
- net ve yüksek kontrastlı tipografi
- kontrollü tek vurgu rengi
- sade yüzey sistemi
- düzenli hiyerarşi
- iyi boşluk kullanımı

Bu denge bozulduğunda site ya:
- fazla agresif
- fazla yapay
- ya da fazla cansız
görünür.

---

## Nihai Karar
`wecahan.com` için renk ve tipografi sistemi şu çizgide kilitlenir:

- koyu ve dengeli zemin
- kırık beyaz ana metin
- gri ikincil metin sistemi
- kontrollü turkuaz eksenli ana vurgu
- Montserrat başlıklar
- Inter gövde metni
- güçlü tipografik hiyerarşi
- okunabilirlikten taviz vermeyen kontrast

Bu sistem, WeCaHan’ın premium ama gerçekçi merkez marka görünümünü taşıyan temel görsel omurga olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- layout spacing system
- component principles
- motion and interaction rules
- component inventory
- all page structure documents
- performance and accessibility guardrails

Bu belgede tanımlanan renk ve tipografi kuralları, açık karar alınmadan neon, düşük kontrastlı veya aşırı dekoratif sistemlere kaydırılmamalıdır.