# Proje Detay Sayfası Rota Modeli

## Belgenin Amacı
Bu belge, `wecahan.com` içindeki proje detail sayfalarının **hangi rota yapısıyla çalışacağını**, **hangi slug’ların kullanılacağını**, **liste sayfası ile detail sayfaları arasındaki ilişkinin nasıl kurulacağını**, **tek veri kaynağı mantığının nasıl korunacağını** ve **404 riskinin nasıl engelleneceğini** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- proje kartları ile detail page’ler kopmaz
- slug yapısı rastgele dağılmaz
- locale destekli route mantığı temiz kalır
- tek kaynaktan beslenen project data sistemi kurulabilir
- gelecekte yeni proje eklense bile yapı bozulmaz

Bu belge, information architecture ile teknik routing mantığı arasındaki bağlayıcı katmandır.

---

## Temel Karar
Projects sayfasında görünen her proje kartı, çalışan bir project detail sayfasına bağlanmalıdır.

Bu konuda taviz yoktur.

Aşağıdaki durumlar kabul edilemez:
- kart tıklanıyor ama 404 açılıyor
- kart detail page’e gidiyor ama slug yanlış
- liste sayfasındaki içerik ile detail page içeriği farklı veri kaynaklarından geliyor
- bir dilde çalışan rota diğer dilde bozuluyor
- detail page yerine doğrudan dış siteye fırlatma yapılıyor ve bağlam kayboluyor

Bu nedenle routing modeli en baştan net kurulmalıdır.

---

## Route Yapısının Rolü
Project detail route yapısı şu 4 görevi yerine getirmelidir:

1. Project list → project detail geçişini yönetmek  
2. Her proje için tekil ve kalıcı bir slug sağlamak  
3. Locale bazlı aynı projenin doğru dildeki karşılığını göstermek  
4. Geçersiz slug’larda güvenli biçimde `notFound` davranışı vermek  

Bu yapı yalnızca URL düzeni değil, kullanıcı güveni ve bilgi mimarisi açısından da kritik kabul edilir.

---

## Onaylı Proje Seti
Şu an yalnızca aşağıdaki 3 proje için detail page üretilecektir:

1. We CaHan Auto
2. Prificient
3. Prificient Tools

Bunların dışında hiçbir proje için rota açılmayacaktır.

### Neden?
Çünkü:
- ana site kapsamı bilinçli olarak sınırlıdır
- yalnızca mevcut ve onaylı proje seti taşınacaktır
- erken aşama veya alakasız projeler routing modeline dahil edilmeyecektir

---

## Onaylı Slug Listesi
Aşağıdaki slug’lar nihai olarak onaylanmıştır:

- `wecahan-auto`
- `prificient`
- `prificient-tools`

Bu slug’lar:
- kısa
- anlaşılır
- marka ve proje ilişkisini koruyan
- URL dostu
- teknik olarak sade
olmalıdır.

### Kural
Bu slug’lar açık karar alınmadan değiştirilmeyecektir.

---

## Sayfa Karşılıkları

## We CaHan Auto
### Ana rota
- `/projects/wecahan-auto`

### Locale karşılıkları
- `/tr/projects/wecahan-auto`
- `/en/projects/wecahan-auto`

### Proje sitesi
- `auto.wecahan.com`

---

## Prificient
### Ana rota
- `/projects/prificient`

### Locale karşılıkları
- `/tr/projects/prificient`
- `/en/projects/prificient`

### Proje sitesi
- `prificient.com`

---

## Prificient Tools
### Ana rota
- `/projects/prificient-tools`

### Locale karşılıkları
- `/tr/projects/prificient-tools`
- `/en/projects/prificient-tools`

### Proje sitesi
- `tools.prificient.com`

---

## Route Yapısının Teknik Mantığı
Detail page mantığı mümkün olduğunca tek ve merkezi bir route yapısı üzerinden kurulmalıdır.

Önerilen route yapısı:

- `app/[locale]/projects/[slug]/page.tsx`

Bu yapı sayesinde:
- tek bir dynamic route üzerinden tüm proje detail sayfaları çözülebilir
- locale desteği doğal biçimde korunur
- tek veri kaynağından içerik beslemek kolaylaşır
- yeni proje eklendiğinde yapı genişletilebilir

### Kural
Aynı proje için ayrı ayrı dağınık page dosyaları açılmayacaktır; mümkün olduğunca tekil dynamic slug mantığı korunacaktır.

---

## Tek Veri Kaynağı İlkesi
Projects listesi ve project detail sayfaları **aynı veri kaynağından** beslenmelidir.

Bu zorunludur.

### Neden?
Çünkü aksi halde:
- kart metni başka yerde kalır
- detail page metni başka yerde kalır
- status başka yerde unutulur
- slug başka yerde yanlış yazılır
- CTA linkleri kopar
- içerik güncellemesi dağılır

Bu yüzden proje verileri tek bir merkezden yönetilmelidir.

---

## Önerilen Veri Kaynağı Yapısı
Projeler için merkezi bir data dosyası kullanılmalıdır.

Önerilen mantık:
- `data/projects.ts`
veya locale yapısına uygun merkezi bir project data katmanı

### Bu veri yapısında her proje için en az şu alanlar bulunmalıdır:
- `name`
- `slug`
- `status`
- `shortDescription`
- `heroDescription`
- `detailIntro`
- `capabilities`
- `externalUrl`
- `ctaLabel`
- `ctaHref`

İhtiyaç halinde ek alanlar da olabilir:
- `order`
- `isActive`
- `siteLabel`
- `wecahanConnectionText`
- `metaTitle`
- `metaDescription`

Ama yukarıdaki temel alanlar minimum kabul edilmelidir.

---

## Liste Sayfası ile Detail Sayfası Arasındaki İlişki
Projects sayfası ile project detail sayfaları birbiriyle şu şekilde ilişkilenecektir:

### Projects listesi
- proje kartlarını merkezi project data’dan çeker
- slug üzerinden detail page link üretir
- status badge’i aynı kaynaktan çeker

### Project detail page
- route param olarak slug alır
- aynı data kaynağında eşleşen projeyi bulur
- projeyi render eder
- eşleşme yoksa `notFound()` çalıştırır

Bu ilişki bozulmamalıdır.

---

## Home Sayfasındaki Selected Projects ile İlişki
Home sayfasında seçili projeler gösteriliyorsa, o alan da aynı merkezi veri kaynağından beslenmelidir.

### Neden?
Çünkü:
- proje isimleri tutarlı olur
- status etiketleri tek yerden gelir
- linkler aynı kalır
- ileride bir proje statüsü değiştiğinde her yerde birlikte güncellenir

### Kural
Home içindeki selected projects alanı için ayrı, elle yazılmış sabit içerik kullanılmamalıdır.

---

## Status Bilgisi Routing Modelinin Parçasıdır
Status alanı yalnızca UI detayı değildir; routing modelinin önemli parçasıdır.

### Çünkü:
- detail page’de proje tonu buna göre değişir
- CTA yapısı buna göre belirlenir
- dış siteye yönlendirme mantığı buna göre şekillenir
- kullanıcı beklentisi buna göre kurulur

Şu an geçerli durumlar:
- We CaHan Auto → `Active`
- Prificient → `In Development`
- Prificient Tools → `Active`

### Kural
Status bilgisi de tek veri kaynağında tutulmalıdır.

---

## Geçersiz Slug Davranışı
Kullanıcı onaylı olmayan bir slug ile project detail route’una gelirse güvenli şekilde hata sayfasına düşmelidir.

### Önerilen davranış
- slug veri kaynağında bulunamazsa `notFound()` çalıştırılır

### Neden?
Çünkü:
- yanlış slug’lar sessizce boşa düşmemeli
- kullanıcı yarım boş sayfa görmemeli
- rota güvenilirliği korunmalı

### Kabul edilmeyen davranışlar
- boş sayfa render etmek
- yanlış projeyi göstermek
- kullanıcıyı belirsiz bir fallback sayfaya atmak
- her yanlış slug’da ana sayfaya yönlendirmek

---

## Locale Uyumu
Project detail routing modeli iki dilli yapıyla tam uyumlu çalışmalıdır.

### Kural
Her onaylı slug, her iki dilde de aynı yapıyla çalışmalıdır.

Örnek:
- `/tr/projects/prificient`
- `/en/projects/prificient`

### Neden aynı slug?
Slug’ların teknik ve marka bütünlüğü açısından iki dilde de aynı kalması daha temizdir.

Bu sayede:
- URL yapısı sade olur
- locale geçişi daha kolay yönetilir
- veri modeli tek merkezde kalır

---

## Dil Değiştirme Davranışı
Kullanıcı bir project detail sayfasındayken dili değiştirdiğinde aynı projenin diğer dildeki karşılığına gitmelidir.

Örnek:
- `/tr/projects/wecahan-auto`
→ dil değiştir
→ `/en/projects/wecahan-auto`

### Kural
Dil değiştirici kullanıcıyı detail page’den ana sayfaya atmamalıdır.

---

## Breadcrumb / Geri Dönüş İlişkisi
Project detail sayfalarında kullanıcıya bağlam kaybettirmemek için geri dönüş mantığı bulunmalıdır.

### Önerilen yapı
- `Projects / [Proje Adı]`
veya sade bir geri link:
- `← Projelere Dön`

### Amaç
- kullanıcıyı listeden koparmamak
- detail page’in tek başına kaybolan bir sayfa olmamasını sağlamak

Bu öğe routing modelinin UX uzantısı olarak kabul edilir.

---

## Dış Siteye Yönlendirme İlişkisi
Her project detail sayfası gerektiğinde ilgili proje sitesine yönlendirme yapabilir.

### Ancak kural şu:
Önce detail page, sonra dış site.

### Yani ideal akış:
Projects → Detail Page → Dış Site

### Neden?
Çünkü:
- kullanıcı bağlam alır
- WeCaHan ile proje arasındaki ilişki görünür
- detail page’ler anlamsız kalmaz

### Dış siteye yönlendirme örnekleri
- We CaHan Auto → `auto.wecahan.com`
- Prificient → `prificient.com`
- Prificient Tools → `tools.prificient.com`

---

## Metadata ile Rota İlişkisi
Project detail route’ları metadata tarafında da desteklenmelidir.

Her detail page için mümkünse merkezi veri kaynağından şu alanlar türetilebilmelidir:
- title
- description
- og title
- og description

### Neden?
Çünkü detail page’ler bağımsız sayfalar olarak paylaşılabilir ve bulunabilir olmalıdır.

---

## Gelecekte Yeni Proje Eklenecekse Kural
İleride yeni proje eklenecek olursa aşağıdaki adımlar izlenmelidir:

1. Önce kapsam kararı alınır  
2. Yeni proje docs içinde onaylanır  
3. Slug belirlenir  
4. Merkezi project data’ya eklenir  
5. Detail page içeriği hazırlanır  
6. Projects listesinde görünür hale getirilir  
7. Locale ve metadata desteği eklenir  

### Kural
“Önce kart ekleyelim, detail page sonra gelir” mantığı kullanılmayacaktır.

---

## Kabul Edilmeyen Routing Hataları
Aşağıdaki durumlar bu proje için kabul edilemez:

- projects kartı 404 veriyor
- slug ile proje adı eşleşmiyor
- aynı projenin farklı yerlerde farklı slug’ı var
- bir sayfada `prificient-tools`, başka yerde `tools-prificient` kullanılıyor
- route çalışıyor ama içerik yanlış projeye ait
- TR’de çalışan rota EN’de bozuk
- dış site linki yanlış projeye gidiyor

Bu tür hatalar doğrudan güven kaybı olarak değerlendirilir.

---

## Nihai Routing Kararı
WeCaHan project detail sayfaları için nihai model şu şekilde kilitlenir:

- tek dynamic project route yapısı
- locale destekli rota sistemi
- onaylı sabit slug listesi
- merkezi project data kaynağı
- listeden detail’e sorunsuz geçiş
- detail’den dış siteye kontrollü yönlendirme
- geçersiz slug için `notFound()`

Bu model, hem mevcut proje sayısı hem de ileride kontrollü genişleme ihtimali için en doğru yapı olarak kabul edilir.

---

## Uygulama Notları
Bu belge aşağıdaki dokümanları doğrudan etkiler:
- projects structure
- all project detail structure documents
- content data model
- routing and locale architecture
- metadata seo architecture
- internal linking plan
- pre-build decisions
- pre-launch checklist

Bu belgede tanımlanan slug, route ve veri kaynağı kuralları açık karar alınmadan değiştirilmemelidir.