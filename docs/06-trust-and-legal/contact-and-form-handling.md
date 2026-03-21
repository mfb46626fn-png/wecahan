# İletişim ve Form İşleme Çerçevesi

## Belgenin Amacı
Bu belge, `wecahan.com` üzerindeki iletişim formunun **hangi amaçla var olduğunu**, **hangi alanları içereceğini**, **verinin nasıl ele alınacağını**, **başarı ve hata durumlarının nasıl gösterileceğini**, **kullanıcı deneyiminin hangi tonla kurulacağını** ve **formun neden satış funnel mantığına kaymaması gerektiğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- Contact sayfası temiz ve gerçek bir iletişim alanı olarak kalır
- form alanları gereksiz yere büyümez
- kullanıcı baskı hissetmeden mesaj bırakabilir
- veri işleme tarafı Privacy Policy ile uyumlu olur
- teknik uygulama ile içerik tonu arasında tutarlılık korunur

Bu belge, WeCaHan ana sitesindeki iletişim deneyiminin yapısal ve davranışsal omurgasını tanımlar.

---

## Temel Karar
WeCaHan form sistemi bir **satış lead formu** gibi değil, **kurumsal iletişim formu** gibi çalışacaktır.

Bu şu anlama gelir:
- amaç, kullanıcıyı sınıflandırıp satış pipeline’ına itmek değildir
- amaç, sade ve açık bir iletişim kanalı sunmaktır
- kullanıcıdan yalnızca gerçekten gerekli bilgiler istenir
- form deneyimi kısa, net ve güven veren kalır
- iletişim tonu profesyonel ama baskısız olur

### Kural
Form, “demo talep toplama” veya “teklif toplama” psikolojisiyle tasarlanmayacaktır.

---

## Formun Rolü
Formun ana rolü şudur:

- WeCaHan hakkında iletişim kurmak isteyen kullanıcıya bir kanal sunmak
- proje ekosistemi hakkında soru, bağlantı veya genel mesaj iletilmesini sağlamak
- markanın ulaşılabilir olduğunu göstermek
- kullanıcıyı gereksiz sürtünme olmadan mesaj bırakmaya yönlendirmek

### Form ne değildir?
- iş geliştirme filtreleme ekranı değildir
- müşteri ön eleme formu değildir
- toplantı rezervasyon sistemi değildir
- detaylı başvuru formu değildir
- CRM toplama aracı gibi davranmamalıdır

---

## Kullanıcıdan Beklenen Etkileşim
Kullanıcı formu doldururken şu hissi yaşamalıdır:

- burada bana gerçekten yazı yazma alanı açılmış
- ne için yazabileceğim belli
- benden gereksiz bilgi istenmiyor
- form çok uzun değil
- hata yaparsam açıkça uyarılıyorum
- gönderdiğim şey boşlukta kaybolmuyor hissi var

### Özet hedef
**düşük sürtünmeli, güvenli, açık iletişim**

---

## Formun Desteklediği Senaryolar
Form aşağıdaki tür iletişimler için kullanılabilir:

- WeCaHan hakkında genel soru
- projeler hakkında bilgi isteme
- iş birliği veya bağlantı kurma isteği
- belirli proje alanı hakkında mesaj bırakma
- yönlendirme veya genel temas

### Kural
Form bu senaryoları kapsayacak kadar esnek olmalı, ama bunun ötesinde karmaşıklaşmamalıdır.

---

## Formun Desteklemediği Mantıklar
Form şu amaçlarla kurgulanmayacaktır:

- “bütçeniz nedir?” toplamak
- “şirket büyüklüğünüz kaç kişi?” diye elemek
- “hangi paketi istiyorsunuz?” sordurmak
- satış ekibi pipeline’ı gibi davranmak
- kullanıcıyı lead score mantığına sokmak
- formu gereksiz qualification alanlarıyla doldurmak

### Neden?
Çünkü bu site:
- satış odaklı değil
- marka merkezi
- açıklama ve temas odaklıdır

---

## Form Alanları — Nihai Set
Formda şu alanlar bulunacaktır:

1. Ad Soyad
2. E-posta
3. Şirket / Proje
4. Konu
5. Mesaj

Bu set şu an için yeterli ve doğrudur.

---

## Alan 1 — Ad Soyad

### Rolü
Kullanıcının kendini tanıtmasına imkân verir.

### Gerekli mi?
Evet, genel olarak zorunlu olabilir.

### Neden gerekli?
- iletişimi daha insanî hale getirir
- anonim ve belirsiz mesaj hissini azaltır
- profesyonel bağlam oluşturur

### Kullanıcıya nasıl görünmeli?
- sade label
- kısa placeholder
- zorlayıcı olmayan ton

### Uygun etiket
- Ad Soyad

### Uygun placeholder
- Adınızı ve soyadınızı yazın

---

## Alan 2 — E-posta

### Rolü
Geri dönüş için temel temas bilgisidir.

### Gerekli mi?
Evet, zorunlu olmalıdır.

### Neden gerekli?
- formun anlamlı bir iletişim kanalına dönüşmesi için temel gerekliliktir
- yanıtsız ve bağlantısız mesajları önler

### Uygun etiket
- E-posta

### Uygun placeholder
- ornek@eposta.com

### Kural
E-posta doğrulaması temel seviyede yapılmalıdır.

---

## Alan 3 — Şirket / Proje

### Rolü
Mesajın bağlamını biraz daha anlaşılır kılar.

### Gerekli mi?
Hayır, opsiyonel tutulabilir.

### Neden opsiyonel?
- bazı kullanıcıların şirketi olmayabilir
- bazı kullanıcılar yalnızca genel mesaj yazmak isteyebilir
- gereksiz zorunluluk sürtünme yaratır

### Uygun etiket
- Şirket / Proje

### Uygun yardımcı metin
- İsteğe bağlı

### Uygun placeholder
- Şirketiniz veya projeniz

---

## Alan 4 — Konu

### Rolü
Mesajın ne hakkında olduğunu kısa biçimde belirtir.

### Gerekli mi?
Tercihen evet, ama sade tutulmalıdır.

### Neden faydalı?
- içeriği hızlı anlamayı kolaylaştırır
- formu aşırı uzatmadan sınıflandırma sağlar

### Uygulama seçenekleri
- kısa serbest metin alanı
veya
- çok sade select + opsiyonel açıklama

### Tercih edilen yaklaşım
İlk versiyonda serbest kısa metin alanı daha doğal olabilir.

### Uygun etiket
- Konu

### Uygun placeholder
- Kısa bir konu yazın

---

## Alan 5 — Mesaj

### Rolü
Formun asıl alanıdır.

### Gerekli mi?
Evet, zorunlu olmalıdır.

### Neden?
- iletişim formunun ana amacı budur
- diğer tüm alanlar bu alanı destekler

### Uygun etiket
- Mesaj

### Uygun placeholder
- Mesajınızı buraya yazın

### Yardımcı metin — opsiyonel
- Kısa ve açık bir mesaj yazmanız yeterlidir.

---

## Şu Alanlar Bilinçli Olarak Eklenmeyecek
Aşağıdaki alanlar şu aşamada forma konulmayacaktır:

- Telefon
- Bütçe
- Şirket büyüklüğü
- Ülke / lokasyon zorunluluğu
- İlgili hizmet paketi
- Görüşme tarihi
- Website URL zorunluluğu
- Satış hunisi alanları
- File upload

### Neden?
Bunlar:
- sürtünmeyi artırır
- formu satış yapısına yaklaştırır
- WeCaHan’ın mevcut site rolüne uymaz

---

## Form Yerleşim Kararı
Form tek bakışta anlaşılır olmalıdır.

### Uygun yerleşim mantığı
- bir veya iki sütunlu sade düzen
- mobilde tek sütun
- alanlar arası net boşluk
- label + input ayrımı açık
- buton altta net görünür

### Tercih edilen yaklaşım
Desktop’ta bazı kısa alanlar iki kolonlu olabilir:
- Ad Soyad / E-posta
- Şirket / Proje / Konu

Ama mobilde tamamı tek kolona düşmelidir.

### Kural
Mesaj alanı her zaman geniş ve net görünmelidir.

---

## Form Başlığı ve Giriş Metni
Form alanı bir mini satış modülü gibi başlamamalıdır.

### Uygun form intro yönü
- WeCaHan veya projeleri hakkında bizimle iletişime geçebilirsiniz.
- Genel sorular, bağlantılar veya proje ekosistemiyle ilgili mesajlar için formu kullanabilirsiniz.

### Uygun olmayan giriş yönü
- Projenizi büyütmeye şimdi başlayın
- Hemen bir demo talebi bırakın
- Satış ekibimizle bağlantı kurun

---

## Submit Butonu
Submit butonu net ve sade olmalıdır.

### Uygun metinler
- Gönder
- Mesajı Gönder

### Uygun olmayan metinler
- Talep Oluştur
- Demo Gönder
- Satış Talebi İlet
- Hemen Başlat

### Kural
Buton dili eylemi açık etmeli, fazladan anlam yüklenmemelidir.

---

## Form Doğrulama İlkeleri
Doğrulama kullanıcıyı cezalandırmayan, yönlendiren bir dille çalışmalıdır.

### Genel ilkeler
- hata hemen anlaşılmalı
- hata mesajı insan gibi yazılmalı
- hangi alanın sorunlu olduğu görünmeli
- kullanıcı teknik mesaj görmemeli

### Uygun alan bazlı hata örnekleri
- Lütfen adınızı girin.
- Geçerli bir e-posta adresi girin.
- Lütfen bir konu yazın.
- Lütfen mesaj alanını boş bırakmayın.

### Uygun olmayan hata örnekleri
- Invalid field
- Payload missing
- Request error
- Validation failed

---

## Başarı Durumu
Form başarıyla gönderildiğinde kullanıcıya sakin ve net teyit verilmelidir.

### Amaç
- “mesajım ulaştı” hissi vermek
- belirsizliği azaltmak
- gereksiz heyecan üretmemek

### Uygun başarı mesajları
- Mesajınız alındı.
- Mesajınız başarıyla gönderildi.
- Teşekkür ederiz, mesajınız bize ulaştı.

### Destekleyici satırlar
- En kısa sürede göz atacağız.
- Gerekli olduğunda dönüş sağlanacaktır.
- Mesajınız ilgili bağlamda değerlendirilecektir.

### Uygun olmayan başarı dili
- Satış ekibimiz sizinle en kısa sürede iletişime geçecek
- Büyüme yolculuğunuz başladı
- Demo planlamaya hazırız

---

## Hata Durumu
Teknik hata veya gönderim başarısızlığında kullanıcı suçlanmadan yönlendirilmelidir.

### Uygun hata mesajları
- Mesaj şu anda gönderilemedi. Lütfen tekrar deneyin.
- Bir sorun oluştu. Birkaç dakika sonra yeniden deneyebilirsiniz.
- Form şu anda işlenemedi. Lütfen daha sonra tekrar deneyin.

### Kural
Hata mesajı:
- net
- kısa
- sakin
- teknik olmayan
olmalıdır

---

## Pending / Loading Durumu
Form gönderilirken kullanıcının belirsizlik yaşamaması gerekir.

### Uygun davranış
- buton geçici olarak disable olabilir
- buton label’ı kısa süreli değişebilir
- küçük loading göstergesi olabilir

### Uygun buton label örnekleri
- Gönderiliyor...
- İşleniyor...

### Uygun olmayan davranış
- tüm sayfayı loading’e almak
- ağır spinner gösterisi
- dramatik “please wait” deneyimi
- submit sonrası uzun blokaj

---

## Form Sonrası Davranış
Başarılı gönderim sonrası kullanıcı boşlukta bırakılmamalıdır.

### Uygun davranışlar
- başarı mesajı göster
- formu temizle veya mevcut halde bırak
- kullanıcıyı bulunduğu sayfada tut
- isterse diğer sayfalara devam etsin

### Uygun olmayan davranışlar
- zorla ana sayfaya yönlendirme
- otomatik popup
- satış CTA’sına fırlatma
- farklı sayfaya aniden geçirme

---

## Veri İşleme Mantığı
Form üzerinden toplanan veriler yalnızca iletişim bağlamında ele alınmalıdır.

### Temel kural
Bu bilgiler:
- iletişim amacıyla işlenebilir
- mesajın değerlendirilmesi için kullanılabilir
- Privacy Policy’de açıklanan çerçeve ile uyumlu olmalıdır

### Açıkça kaçınılacak algı
- gizli pazarlama listesi
- agresif outbound kullanımı
- kullanıcıyı istemeden satış sürecine sokma

---

## Privacy Uyumu
Formun altında veya yakınında kısa bir privacy notu bulunabilir.

### Uygun kısa notlar
- Paylaştığınız bilgiler yalnızca iletişim amacıyla değerlendirilir.
- Ayrıntılar için Gizlilik Politikası sayfasını inceleyebilirsiniz.

### Kural
Bu not:
- kısa
- sakin
- korkutmayan
olmalıdır

---

## Contact Sayfası ile Form İlişkisi
Form, Contact sayfasının kalbidir; ama sayfanın tamamı değildir.

### Sayfa yapısı
- kısa hero
- kısa açıklama
- form
- küçük bilgi / privacy notu
- footer

### Kural
Form öncesi ve sonrası bağlam kısa tutulmalıdır.  
Formu gereksiz açıklamalarla gömmemek gerekir.

---

## Teknik Uygulama Mantığı
Formun teknik olarak nasıl işlendiği kullanıcıya görünmeyebilir; ama deneyim bunu hissettirmelidir.

### Minimum teknik beklentiler
- server-side veya güvenli submit akışı
- temel validation
- spam riskine karşı makul koruma
- başarı / hata state ayrımı
- locale uyumlu metinler

### Kural
Form UI’si ayrı, submit logic’i ayrı düşünülmelidir.  
Ama kullanıcı bunu tek parça deneyimlemelidir.

---

## Spam ve Kötüye Kullanım Düşüncesi
Form açık olduğu için kötüye kullanım ihtimali de düşünülmelidir.

### Uygun korunma yöntemleri
- temel server validation
- rate limiting düşünülebilir
- görünmez spam önlemleri
- bot yükünü azaltan sade kontrol yapıları

### Uygun olmayan yaklaşım
- kullanıcıyı rahatsız eden ağır captcha deneyimi
- iletişim sürtünmesini aşırı artırmak

### Kural
Koruma kullanıcıyı cezalandırmadan çalışmalıdır.

---

## Locale Uyum İlkesi
Form metinleri locale’e göre tam ve düzgün çevrilmiş olmalıdır.

### Dikkat edilecekler
- label’lar
- placeholder’lar
- helper text’ler
- hata mesajları
- başarı mesajları
- submit label’ı

### Kural
Türkçe ve İngilizce form deneyimi farklı kalite seviyeleri taşımamalıdır.

---

## Mobil Form İlkeleri
Mobilde form deneyimi özellikle önemlidir.

### Kural
- alanlar yeterli yüksekliğe sahip olmalı
- label’lar net görünmeli
- mesaj alanı rahat kullanılmalı
- hata mesajları görünür olmalı
- submit butonu kolay erişilebilir olmalı

### Yapılmayacaklar
- dar iki kolonlu mobil layout
- küçük dokunma alanları
- uzun ve sıkışık placeholder metinleri

---

## Form UX Test Soruları
Form tasarımı veya işleyişi değerlendirilirken şu sorular sorulmalıdır:

1. Kullanıcı neden yazabileceğini anlıyor mu?
2. Gereksiz alan var mı?
3. Form baskı yaratıyor mu?
4. Başarı ve hata durumları net mi?
5. Bu deneyim satış formu gibi mi hissediliyor?
6. Privacy ve iletişim amacı yeterince açık mı?

Bu testten geçmeyen form kararları yeniden ele alınmalıdır.

---

## Hazır Uygulama Kısa Seti

### Form başlığı
Bize Ulaşın

### Form kısa açıklaması
WeCaHan, projeleri veya genel yapı hakkında iletişime geçmek isterseniz aşağıdaki formu kullanabilirsiniz.

### Alanlar
- Ad Soyad
- E-posta
- Şirket / Proje
- Konu
- Mesaj

### Buton
- Mesajı Gönder

### Başarı mesajı
- Mesajınız alındı.
- En kısa sürede göz atacağız.

### Hata mesajı
- Mesaj şu anda gönderilemedi. Lütfen tekrar deneyin.

### Privacy notu
- Paylaştığınız bilgiler yalnızca iletişim amacıyla değerlendirilir.

---

## Nihai Karar
`wecahan.com` iletişim formu şu çizgide kurulacaktır:

- kısa ve düşük sürtünmeli alan seti
- satış değil iletişim odaklı deneyim
- net ve insan dostu doğrulama mesajları
- sade success / error state’leri
- privacy ile uyumlu veri kullanımı
- mobilde rahat çalışan form yapısı

Bu form, WeCaHan’ın ulaşılabilir ve ciddi bir yapı olduğunu gösteren temel temas katmanı olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- contact structure
- privacy policy structure
- forms and server actions
- microcopy and ui text
- performance and accessibility guardrails
- pre-launch checklist

Bu belgede tanımlanan form mantığı, açık karar alınmadan lead qualification veya satış funnel formuna dönüştürülmemelidir.