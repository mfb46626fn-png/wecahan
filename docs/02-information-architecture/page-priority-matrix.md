# Sayfa Öncelik Matrisi

## Belgenin Amacı
Bu belge, `wecahan.com` içindeki sayfaların **öncelik seviyelerini**, **yayın için zorunluluk durumlarını**, **hangi sayfaların ilk sürümde mutlaka hazır olması gerektiğini** ve **hangi alanların daha sonra değerlendirilebileceğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- kapsam gereksiz yere büyümez
- “bu sayfa şimdi gerekli mi?” sorusu net cevap bulur
- ilk yayın için minimum profesyonel kapsam korunur
- tasarım ve geliştirme sürecinde enerji doğru yerlere harcanır
- proje detail page gibi kritik alanlar atlanmaz

Bu belge, site haritası ile geliştirme planı arasındaki öncelik katmanıdır.

---

## Öncelik Sistemi
Bu projede sayfalar 3 seviyede sınıflandırılacaktır:

### P0 — Zorunlu
İlk yayın için kesinlikle bulunması gereken sayfalar.

Bu sayfalar olmadan:
- site eksik görünür
- kullanıcı akışı kırılır
- güven zayıflar
- ana marka anlatısı tamamlanmaz

### P1 — Güçlü Destekleyici
İlk sürümde olması faydalı olabilecek ama ilk yayın için mutlak zorunlu olmayan sayfalar.

Bu sayfalar daha sonra eklenebilir.  
Yoklukları siteyi bozmaz ama ileride güçlendirebilir.

### P2 — Gelecek Aşama / Şimdilik Kapsam Dışı
Şu an için açılması gerekmeyen, kapsamı büyüten veya mevcut aşamaya göre erken olan sayfalar.

Bu sayfalar:
- şu an açılmayacaktır
- docs içinde referans olarak geçebilir
- ancak ilk yayın planına dahil edilmez

---

## P0 — Zorunlu Sayfalar

## 1. Home
### Öncelik
**P0**

### Neden zorunlu?
- marka giriş noktasıdır
- WeCaHan’ı ilk bakışta anlatır
- kullanıcıyı About / Projects / Contact akışına yönlendirir
- sitenin genel ciddiyetini ilk anda taşır

### Eksik olursa ne olur?
- site merkezini kaybeder
- kullanıcı ne yaptığınızı anlayamaz
- proje ve marka ilişkisi dağılır

---

## 2. About
### Öncelik
**P0**

### Neden zorunlu?
- WeCaHan’ın ne olduğunu daha derin anlatır
- marka positioning’ini açar
- mission / vision / odak alanları burada olgunlaşır
- kurucu blokları için kontrollü alan sağlar

### Eksik olursa ne olur?
- site yüzeysel kalır
- marka derinliği oluşmaz
- kullanıcı “arka planda nasıl bir yapı var?” sorusuna cevap bulamaz

---

## 3. Projects
### Öncelik
**P0**

### Neden zorunlu?
- seçili proje ekosistemini toplu biçimde gösterir
- WeCaHan’ın somut üretim alanlarını görünür hale getirir
- project detail sayfalarına giriş sağlar

### Eksik olursa ne olur?
- site yalnızca soyut bir marka anlatısına dönüşür
- proje ekosistemi görünmez kalır
- kullanıcı somut tarafı göremez

---

## 4. Project Detail — We CaHan Auto
### Öncelik
**P0**

### Neden zorunlu?
- Projects sayfasındaki kartların çalışan detail page’e ihtiyacı vardır
- We CaHan Auto aktif proje olduğu için kısa kart metni yetmez
- proje ile WeCaHan markası arasındaki bağ açıklanmalıdır

### Eksik olursa ne olur?
- proje kartı eksik kalır
- yönlendirme zinciri bozulur
- kullanıcı bağlam almadan dış siteye itilir veya 404 görür

---

## 5. Project Detail — Prificient
### Öncelik
**P0**

### Neden zorunlu?
- Prificient’in geliştirme sürecinde olduğu dürüst biçimde anlatılmalıdır
- proje kartında sığ kalan bilgi burada tamamlanır
- aktif değil ama önemli bir yön olduğu için bağlam gerekir

### Eksik olursa ne olur?
- kullanıcı projenin durumunu yanlış yorumlayabilir
- Projects sayfası yüzeysel kalır
- güven kaybı oluşur

---

## 6. Project Detail — Prificient Tools
### Öncelik
**P0**

### Neden zorunlu?
- aktif araç katmanının ne işe yaradığı açıklanmalıdır
- Prificient ile ilişkisi kurulmalıdır
- kullanıcıyı ilgili siteye geçmeden önce bilgilendirmek gerekir

### Eksik olursa ne olur?
- proje anlatısı yarım kalır
- ekosistem mantığı zayıflar
- site listeden ibaret görünür

---

## 7. Contact
### Öncelik
**P0**

### Neden zorunlu?
- iletişim bir kurumsal gerekliliktir
- marka güvenini destekler
- ziyaretçiye gerçek bir temas noktası sunar

### Eksik olursa ne olur?
- site kapalı ve eksik görünür
- kurumsal ciddiyet düşer
- kullanıcıyla bağ kuracak kanal kaybolur

---

## 8. Privacy Policy
### Öncelik
**P0**

### Neden zorunlu?
- form ve veri tarafında temel profesyonel çerçeve sağlar
- footer güvenini artırır
- kurumsal görünürlüğü tamamlar

### Eksik olursa ne olur?
- site amatör görünebilir
- veri ve iletişim tarafı düşünülmemiş hissi doğar

---

## 9. Terms of Service
### Öncelik
**P0**

### Neden zorunlu?
- site kullanımına dair minimum hukuki çerçeveyi sunar
- footer ve legal katmanı tamamlar
- profesyonel yapı hissini güçlendirir

### Eksik olursa ne olur?
- legal görünürlük eksik kalır
- footer zayıflar
- merkez site olgunluğu düşer

---

## P0 Sayfaların Özeti
İlk yayın için zorunlu sayfalar aşağıdaki gibidir:

- Home
- About
- Projects
- Project Detail / We CaHan Auto
- Project Detail / Prificient
- Project Detail / Prificient Tools
- Contact
- Privacy Policy
- Terms of Service

Bu setin altındaki herhangi bir yapı ilk yayın için eksik kabul edilir.

---

## P1 — Güçlü Destekleyici Sayfalar
Şu an doğrudan yayın kapsamında olmasa da ileride faydalı olabilecek bazı sayfalar vardır.

Ancak bu sayfalar ilk yayın için zorunlu değildir.

### 1. Brand Updates / Updates
WeCaHan veya projelerdeki gelişmeleri paylaşmak için ileride düşünülebilir.

### 2. Ecosystem Overview
Projeler arttığında, WeCaHan ekosistemini daha üstten anlatan ek bir sayfa düşünülebilir.

### 3. Resources / Insights
İleride gerçekten içerik üretme düzeni oluşursa değerlendirilebilir.

### 4. FAQ
Eğer site büyür ve tekrar eden sorular oluşursa sonradan eklenebilir.

### 5. Press / Mentions
Gerçekten gerekli veri oluşursa ileride değerlendirilebilir.

### Neden P1?
Bu sayfalar şu an faydalı olabilir ama eksiklikleri ilk yayın kalitesini kritik düzeyde bozmaz.

---

## P2 — Şimdilik Kapsam Dışı Sayfalar
Aşağıdaki sayfalar şu anda açılmayacaktır.

### 1. Pricing
Bu site satış odaklı değildir.

### 2. Services
Ana site hizmet kataloğu gibi davranmayacaktır.

### 3. Solutions
Kurumsal satış mimarisi hissi verir; şu an gereksizdir.

### 4. Blog
Sürekli içerik disiplini yoksa blog boşluk üretir.

### 5. Careers
Mevcut aşamada erken.

### 6. Team
Kurucu blokları yeterlidir; ayrı ekip sayfası gereksizdir.

### 7. Case Studies
Gerçek ve güçlü veri olmadan açılmamalıdır.

### 8. Book a Demo / Book a Call
Satış odaklı yanlış sinyal üretir.

### 9. Community
Mevcut kapsam için erken ve alakasızdır.

### 10. Investor / Press Kit
Şu aşamada gerekli değildir.

### Neden P2?
Bu sayfalar:
- kapsamı gereksiz büyütür
- site rolünü bozar
- profesyonellik yerine dağınıklık üretebilir

---

## Sayfa Önceliklerine Göre Geliştirme Mantığı
Öncelik matrisi yalnızca liste değil, geliştirme sırası için de referanstır.

### Önce yapılacaklar
1. P0 sayfalar
2. P0 sayfaların detail akışları
3. P0 sayfaların TR / EN uyumu
4. P0 sayfaların legal ve footer bağlantıları

### Sonra yapılacaklar
- P1 ihtiyaçları yeniden değerlendirmek

### Şu an yapılmayacaklar
- P2 sayfaları açmak
- P2 sayfalar için layout veya nav alanı ayırmak
- P2 sayfaları menüye eklemek

---

## Sayfa Önceliklerine Göre Tasarım Yoğunluğu
Tüm sayfalar aynı seviyede tasarım eforu gerektirmez.

### En yüksek tasarım önceliği
- Home
- Projects
- Project Detail pages

### Orta tasarım önceliği
- About
- Contact

### Daha sade ama temiz olması gereken sayfalar
- Privacy Policy
- Terms of Service

Bu ayrım önemlidir.  
Legal sayfalar güzel olabilir ama ana sayfalar kadar ağır görsel yatırım istemez.

---

## Sayfa Önceliklerine Göre Copy Önceliği
Tüm sayfalar eşit metin derinliği istemez.

### En kritik copy katmanları
- Home hero
- Home capability alanları
- Projects intro
- Project detail hero + overview
- About positioning blokları

### Orta kritik copy katmanları
- Contact intro
- Founder blokları
- CTA metinleri

### Daha sade copy alanları
- Privacy Policy
- Terms of Service

---

## Sayfa Önceliklerine Göre Teknik Riskler
Özellikle bazı sayfalarda teknik hata kabul edilemez.

### Kritik teknik risk taşıyan sayfalar
- Projects
- Project Detail pages
- Contact
- locale geçişleri

### Neden?
Çünkü burada oluşan hata doğrudan:
- 404
- kırık akış
- güven kaybı
- yanlış yönlendirme
üretir.

---

## Sayfa Önceliklerine Göre Ölçüm Mantığı
İlk yayın sonrası hangi sayfaların daha yakından izleneceği de bu matrise göre belirlenebilir.

### İlk izlenecek sayfalar
- Home
- Projects
- Project Detail pages
- Contact

### Neden?
Çünkü ana kullanıcı akışları esas olarak bu sayfalardan geçer.

---

## Scope Creep Koruması
Bu matrisin ana amaçlarından biri scope creep’i engellemektir.

Açık karar alınmadan:
- yeni ana sayfa açılmayacaktır
- P2 sayfa menüye eklenmeyecektir
- “şunu da koyalım” mantığıyla kapsam büyütülmeyecektir

Öncelik dışı fikirler not alınabilir ama ilk yayın kapsamına dahil edilmeyecektir.

---

## İlk Yayın İçin Minimum Profesyonel Seviye
İlk yayın “profesyonel merkez site” seviyesine ulaşmış sayılabilmesi için aşağıdakiler tamam olmalıdır:

- tüm P0 sayfalar hazır
- tüm P0 sayfalar iki dilde var
- Projects → Detail akışı çalışıyor
- Contact form ve legal linkler çalışıyor
- footer tam
- kırık link yok
- 404 yok
- site tasarımı tutarlı
- copy gerçekçi ve dürüst

Bu maddelerden biri ciddi ölçüde eksikse, yayın kalitesi düşer.

---

## Nihai Karar
`wecahan.com` için öncelik matrisi şu şekilde kilitlenir:

### P0
- Home
- About
- Projects
- We CaHan Auto detail
- Prificient detail
- Prificient Tools detail
- Contact
- Privacy Policy
- Terms of Service

### P1
- gelecekte değerlendirilebilecek destekleyici sayfalar

### P2
- şu an açılmayacak ve kapsam dışında bırakılacak sayfalar

Bu öncelik sırası, ilk yayın kalitesini korumak ve gereksiz büyümeyi engellemek için temel karar olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- project detail routing model
- all page structure documents
- visual direction
- component inventory
- routing and locale architecture
- metadata seo architecture
- pre-build decisions
- pre-launch checklist

Bu belgede tanımlanan öncelik seviyesi, geliştirme ve içerik üretim sırasını belirler; açık karar olmadan değiştirilmemelidir.