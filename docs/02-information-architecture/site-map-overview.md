# Site Haritası Genel Görünüm

## Belgenin Amacı
Bu belge, `wecahan.com` sitesinde **hangi sayfaların bulunacağını**, **her sayfanın ana rolünü**, **hangi sayfaların zorunlu olduğunu**, **hangi sayfaların şu an kapsam dışı bırakıldığını** ve **site genelindeki bilgi mimarisinin nasıl kurulacağını** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- site gereksiz yere büyümez
- navigation kararları daha doğru verilir
- sayfa üretimi kontrollü ilerler
- proje detail page’ler unutulmaz
- ana site ile proje siteleri arasındaki sınırlar korunur

Bu belge, tasarım, içerik ve teknik mimari için temel referanslardan biridir.

---

## Temel Bilgi Mimarisi Kararı
`wecahan.com`, az sayfalı ama net işlevli bir merkez site olarak kurgulanacaktır.

Bu sitede amaç:
- çok sayıda sayfa açmak değil
- az ama görevleri net sayfalarla güçlü bir marka omurgası kurmaktır

Bu nedenle site haritası:
- sade
- kolay anlaşılır
- iki dilli
- proje detail page’leri destekleyen
- legal görünürlüğü olan
bir yapıda kurulacaktır.

---

## Nihai Site Haritası
İlk aşamada sitede aşağıdaki sayfalar bulunacaktır:

### Ana Sayfalar
- Home
- About
- Projects
- Contact

### Proje Detail Sayfaları
- We CaHan Auto
- Prificient
- Prificient Tools

### Legal Sayfalar
- Privacy Policy
- Terms of Service

Bu yapı ilk yayın için yeterli ve profesyonel kabul edilir.

---

## Site Haritasının Mantığı
Sitenin genel akışı şu mantık üzerine kurulacaktır:

1. Ziyaretçi markayı görür
2. WeCaHan’ın ne olduğunu anlar
3. Çalışma alanlarını ve seçili projeleri görür
4. Gerekirse proje detaylarına iner
5. Gerekirse ilgili proje sitesine geçer
6. Gerekirse iletişim kurar
7. Footer üzerinden legal ve kurumsal bağlantılara ulaşır

Bu yapı:
- ana marka
- proje ekosistemi
- iletişim
- güven
katmanlarını tek bir sade sistem içinde birleştirir.

---

## Sayfa Listesi — Zorunlu Sayfalar

## 1. Home
### Rota
- `/`
- locale yapısı varsa `/tr` ve `/en`

### Rolü
- WeCaHan’ı ilk bakışta anlatmak
- ana marka yönünü göstermek
- hizmet / yetkinlik alanlarını sunmak
- seçili projelere giriş vermek
- güven hissi oluşturmak
- About / Projects / Contact akışını başlatmak

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa hem marka girişi hem yönlendirme merkezi olduğu için en kritik sayfadır.

---

## 2. About
### Rota
- `/about`
- locale yapısı varsa `/tr/about` ve `/en/about`

### Rolü
- WeCaHan’ın ne olduğunu daha derin anlatmak
- düşünce yapısını ve odak alanlarını açmak
- mission / vision / focus alanlarını netleştirmek
- kurucu bloklarına kontrollü alan açmak

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa Home’un uzatılmış versiyonu değildir.  
Home’da kısa verilen marka çerçevesini daha olgun ve açıklayıcı hale getirir.

---

## 3. Projects
### Rota
- `/projects`
- locale yapısı varsa `/tr/projects` ve `/en/projects`

### Rolü
- seçili projeleri listelemek
- proje statülerini görünür kılmak
- project detail sayfalarına geçiş sağlamak
- WeCaHan ekosisteminin somut tarafını göstermek

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa proje mezarlığı gibi görünmemeli;  
yalnızca onaylı 3 proje yer almalıdır.

---

## 4. Contact
### Rota
- `/contact`
- locale yapısı varsa `/tr/contact` ve `/en/contact`

### Rolü
- iletişim kurmak isteyen kullanıcıya sade ve güvenli bir kanal sunmak
- markanın ulaşılabilirliğini göstermek
- kurumsal ciddiyeti desteklemek

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa satış funnel mantığıyla değil, temiz iletişim mantığıyla kurgulanmalıdır.

---

## 5. Project Detail — We CaHan Auto
### Rota
- `/projects/wecahan-auto`
- locale yapısı varsa `/tr/projects/wecahan-auto` ve `/en/projects/wecahan-auto`

### Rolü
- We CaHan Auto’nun ne olduğunu tek başına anlaşılır hale getirmek
- projenin Active olduğunu dürüst biçimde göstermek
- otomasyon odak alanını detaylandırmak
- gerekiyorsa ilgili proje sitesine yönlendirmek

### Zorunluluk Durumu
**P0 — Zorunlu**

### Dış Site Bağlantısı
- `auto.wecahan.com`

### Not
Bu sayfa yalnızca kısa açıklama sayfası değil; proje bağlamını taşıyan gerçek bir detail page olmalıdır.

---

## 6. Project Detail — Prificient
### Rota
- `/projects/prificient`
- locale yapısı varsa `/tr/projects/prificient` ve `/en/projects/prificient`

### Rolü
- Prificient’in ne olduğunu anlatmak
- finansal analiz / görünürlük yönünü açıklamak
- projenin geliştirme sürecinde olduğunu dürüstçe göstermek
- ürünün vaat ettiği yönü ama mevcut durumunu gerçekçi biçimde sunmak

### Zorunluluk Durumu
**P0 — Zorunlu**

### Dış Site Bağlantısı
- `prificient.com`

### Not
Bu sayfa Prificient’i aktif ürün gibi göstermemelidir.

---

## 7. Project Detail — Prificient Tools
### Rota
- `/projects/prificient-tools`
- locale yapısı varsa `/tr/projects/prificient-tools` ve `/en/projects/prificient-tools`

### Rolü
- ücretsiz araç ekosistemini anlatmak
- Prificient ile ilişkisini göstermek
- aktif ve geliştirilen yardımcı araç katmanını sunmak
- kullanıcıyı gerektiğinde dış siteye yönlendirmek

### Zorunluluk Durumu
**P0 — Zorunlu**

### Dış Site Bağlantısı
- `tools.prificient.com`

### Not
Bu sayfa toolset’i olduğundan büyük göstermeye çalışmamalı;  
ama aktif ve fayda üreten bir katman olduğu net anlaşılmalıdır.

---

## 8. Privacy Policy
### Rota
- `/privacy-policy`
- locale yapısı varsa `/tr/privacy-policy` ve `/en/privacy-policy`

### Rolü
- veri, iletişim ve kullanım tarafında minimum profesyonel çerçeveyi sunmak
- form ve kullanıcı verisi tarafını görünür kılmak
- footer güvenini desteklemek

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa çoğu kullanıcı tarafından detaylı okunmasa da eksik olması güven kaybı yaratır.

---

## 9. Terms of Service
### Rota
- `/terms-of-service`
- locale yapısı varsa `/tr/terms-of-service` ve `/en/terms-of-service`

### Rolü
- site kullanımı ve temel hukuki çerçeveyi göstermek
- markanın kurumsal bütünlüğünü desteklemek
- legal görünürlüğü tamamlamak

### Zorunluluk Durumu
**P0 — Zorunlu**

### Not
Bu sayfa da footer ve kurumsal yapı için zorunlu katmandır.

---

## Onaylı Sayfa Seti
İlk yayın ve mevcut kapsam için onaylı sayfa seti aşağıdaki gibidir:

### Ana Sayfalar
- Home
- About
- Projects
- Contact

### Proje Sayfaları
- We CaHan Auto
- Prificient
- Prificient Tools

### Legal Sayfalar
- Privacy Policy
- Terms of Service

Bu set dışındaki sayfalar şu aşamada kapsam dışıdır.

---

## Şu An Açılmayacak Sayfalar
Aşağıdaki sayfalar şu aşamada açılmayacaktır:

- Pricing
- Services
- Solutions
- Blog
- Resources
- Careers
- Team
- Case Studies
- Press
- Investors
- FAQ
- Demo Booking
- Community

### Neden?
Çünkü bunlar:
- ya henüz gerçek ihtiyaca dayanmıyor
- ya kapsamı gereksiz büyütüyor
- ya da siteyi satış / agency / startup vitrinine kaydırıyor

Şu anki hedef sade ve güçlü bir merkez site kurmaktır.

---

## Sitenin Seviye Bazlı Haritası

## Seviye 1 — Marka Giriş Katmanı
Bu katmanda kullanıcı markayı ve ana yönü anlar.

Sayfalar:
- Home
- About

Bu sayfalar şu soruyu çözer:
**WeCaHan nedir?**

---

## Seviye 2 — Proje Ekosistemi Katmanı
Bu katmanda kullanıcı seçili projeleri görür.

Sayfalar:
- Projects
- Project Detail pages

Bu katman şu soruyu çözer:
**WeCaHan hangi somut projeler üzerinde çalışıyor?**

---

## Seviye 3 — Temas ve Güven Katmanı
Bu katmanda kullanıcı marka ile temas kurar ve footer / legal görünürlüğü tamamlar.

Sayfalar:
- Contact
- Privacy Policy
- Terms of Service

Bu katman şu soruyu çözer:
**Bu yapı ne kadar gerçek, ulaşılabilir ve düzenli?**

---

## Locale Yapısına Göre Sayfa Haritası
Site iki dilli olacaktır:
- Türkçe
- İngilizce

Bu nedenle tüm temel sayfalar locale’e göre karşılık bulmalıdır.

### Mantıksal örnek yapı
- `/tr`
- `/tr/about`
- `/tr/projects`
- `/tr/projects/wecahan-auto`
- `/tr/projects/prificient`
- `/tr/projects/prificient-tools`
- `/tr/contact`
- `/tr/privacy-policy`
- `/tr/terms-of-service`

- `/en`
- `/en/about`
- `/en/projects`
- `/en/projects/wecahan-auto`
- `/en/projects/prificient`
- `/en/projects/prificient-tools`
- `/en/contact`
- `/en/privacy-policy`
- `/en/terms-of-service`

### Kural
TR ve EN sayfa yapıları eşit olmalıdır.  
Bir dilde var olan temel sayfa diğer dilde de bulunmalıdır.

---

## Sayfalar Arası Ana İlişkiler
Site haritası yalnızca sayfa listesi değildir; sayfalar arası ilişkiyi de tanımlar.

### Home → About
Markayı daha derin anlamak için

### Home → Projects
Seçili projeleri görmek için

### Home → Contact
İletişim kurmak için

### Projects → Project Detail
Her proje özelinde detay görmek için

### Project Detail → Dış Proje Sitesi
Gerekirse proje ekosisteminin kendi alanına geçmek için

### Footer → Legal
Kurumsal ve hukuki görünürlüğü tamamlamak için

Bu ilişkiler, tasarım ve navigasyon kararlarını doğrudan etkiler.

---

## Proje Siteleri Ana Site Haritasına Dahil mi?
Bu önemli ayrım açıkça tanımlanmalıdır.

### Dahil olan şey
Ana site içinde proje detail page’ler vardır.

### Dahil olmayan şey
Aşağıdaki siteler ana site sayfası değildir:
- `auto.wecahan.com`
- `prificient.com`
- `tools.prificient.com`

Bunlar ayrı proje alanlarıdır.

Ana site:
- bağlam verir
- tanıtır
- yönlendirir

Ama onların yerine geçmez.

---

## Site Haritası Açısından Kritik Kurallar

### 1. Project detail page’ler zorunludur
Projects sayfasında kart varsa detail page de olacaktır.

### 2. Sayfa sayısı gereksiz büyümeyecek
Açık karar alınmadan yeni ana sayfa türü eklenmeyecektir.

### 3. Legal sayfalar unutulmayacak
Privacy ve Terms, site haritasının parçasıdır.

### 4. Dil yapısı tutarlı olacak
Sayfa eşleşmeleri locale bazında korunacaktır.

### 5. Marka odağı korunacak
Site haritası proje dağınıklığı üretmeyecek.

---

## İlk Yayın İçin Minimum Kabul Edilebilir Harita
İlk yayında sitenin minimum kabul edilebilir site haritası aşağıdaki gibidir:

- Home
- About
- Projects
- We CaHan Auto detail
- Prificient detail
- Prificient Tools detail
- Contact
- Privacy Policy
- Terms of Service

Bu haritanın altında kalan bir yapı eksik kabul edilir.

---

## Gelecekte Eklenebilecek Ama Şimdilik Bekleyecek Alanlar
Aşağıdaki alanlar gelecekte yeniden değerlendirilebilir:

- brand updates / updates sayfası
- daha detaylı ekosistem haritası
- belirli proje alt içerikleri
- resources veya insights tarzı bilgi sayfaları
- ekip veya süreç anlatısı

Ancak bunlar şu an:
- zorunlu değildir
- ilk yayın kapsamına dahil değildir
- site yapısını büyütmeden önce yeniden değerlendirilmelidir

---

## Nihai Karar
`wecahan.com` için bilgi mimarisi şu şekilde kilitlenir:

- az sayfa
- net roller
- çalışan project detail yapısı
- iki dilli tutarlı yapı
- legal görünürlük
- proje sitelerine kontrollü yönlendirme
- satıştan çok marka ve ekosistem odaklı merkez site mantığı

Bu yapı, WeCaHan’ın mevcut aşamasına en uygun ve en profesyonel temel sayfa mimarisi olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- navigation and user flows
- page priority matrix
- project detail routing model
- home structure
- about structure
- projects structure
- contact structure
- routing and locale architecture
- internal linking plan
- pre-build decisions

Bu belgede tanımlanan site haritası, açık karar alınmadan değiştirilmemelidir.