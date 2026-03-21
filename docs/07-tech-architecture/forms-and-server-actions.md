# Formlar ve Server Action Mimarisi

## Belgenin Amacı
Bu belge, `wecahan.com` sitesindeki form yapılarının **nasıl kurgulanacağını**, **özellikle Contact formunun teknik olarak nasıl ele alınacağını**, **server action kullanım mantığını**, **validation, success, error ve pending state akışlarını**, **locale uyumunu**, **güvenlik ve spam koruma yaklaşımını** ve **UI ile backend işleyişi arasındaki sınırları** netleştirmek için hazırlanmıştır.

Bu belge sayesinde:
- form mantığı sayfa içinde dağılmaz
- Contact form deneyimi temiz ve güvenilir kalır
- istemci tarafı ile sunucu tarafı sorumlulukları ayrışır
- validation ve mesajlaşma tutarlı hale gelir
- form işleme mimarisi ileride kolay genişletilebilir olur

Bu belge, WeCaHan sitesindeki form davranışının teknik omurgasını tanımlar.

---

## Temel Karar
`wecahan.com` üzerinde form işleme mantığı mümkün olduğunca **server action tabanlı**, sade ve güvenli kurulacaktır.

### Bu ne anlama gelir?
- form submit işlemi sunucu tarafında ele alınır
- client tarafı yalnızca kullanıcı etkileşimi ve state gösterimi için kullanılır
- validation yalnızca frontend’e bırakılmaz
- success / error ayrımı kontrollü şekilde yapılır
- form mantığı API karmaşasına dönüştürülmeden yönetilebilir

### Kural
Contact formu, mümkün olan en sade ama profesyonel server action akışıyla çalışmalıdır.

---

## Form Stratejisi
Şu an WeCaHan ana sitesinde ana form alanı yalnızca **Contact formu** olacaktır.

### Bu nedenle:
- form mimarisi Contact etrafında kurulacaktır
- sistem gereksiz generic form framework’üne dönüştürülmeyecektir
- ama ileride yeni formlar eklenirse genişleyebilecek kadar temiz tutulacaktır

### İlk aşamada desteklenecek form
- Contact Form

### Şu aşamada desteklenmeyecekler
- newsletter formu
- booking formu
- demo talep formu
- quote / teklif formu
- çok adımlı form
- dosya yüklemeli form

---

## Ana Mimari Karar
Form mimarisi üç katmanda ele alınmalıdır:

1. **UI Katmanı**  
2. **Validation Katmanı**  
3. **Submission / Server Action Katmanı**

### 1. UI Katmanı
- input alanları
- label’lar
- helper text
- button state
- pending / success / error görünümü

### 2. Validation Katmanı
- required alan kontrolü
- e-posta format kontrolü
- minimum mantık doğrulaması
- güvenli normalize etme

### 3. Submission / Server Action Katmanı
- veriyi alır
- validate eder
- işler
- gerekli hedefe iletir
- kullanıcıya dönecek sonucu üretir

### Kural
Bu üç katman tek dosyada rastgele karıştırılmamalıdır.

---

## Önerilen Dosya Yapısı

```txt
src/
  app/
    [locale]/
      contact/
        page.tsx
        actions.ts
  components/
    blocks/
      contact/
        contact-form-block.tsx
  lib/
    validation/
      contact-form-schema.ts
  types/
    forms.ts
````

### Alternatif yapı

Server action `app` yerine `src/actions` benzeri merkezi bir klasörde de tutulabilir.
Ama ilk aşamada route’a yakın konumlandırmak daha anlaşılır olabilir.

### Kural

Validation şeması component içine gömülmeyecektir.

---

## Contact Formunun Teknik Rolü

Contact formunun teknik rolü şudur:

* kullanıcı verisini almak
* minimum güvenli validation yapmak
* mesajı kontrollü biçimde işlemek
* sonucu kullanıcıya net şekilde geri döndürmek

### Contact formunun teknik olarak yapmaması gereken şeyler

* sayfa içinde büyük state karmaşası yaratmak
* client-side only submit mantığına dayanmak
* validation’ı sadece frontend’de bırakmak
* başarısız submit’i belirsiz bırakmak
* teknik hata dump’ı göstermek

---

## Contact Formu İçin Veri Alanları

Formun taşıyacağı veri modeli aşağıdaki gibi olmalıdır:

* `fullName`
* `email`
* `companyOrProject`
* `subject`
* `message`

### Opsiyonel alanlar

* `locale`
* `sourcePage`
* `submittedAt` (server tarafında üretilebilir)
* spam koruma amaçlı gizli alanlar

### Kural

Form payload gereksiz alanlar içermemelidir.

---

## Form Type Tanımı

Form için açık bir type/interface tanımı olmalıdır.

### Örnek alan mantığı

* `fullName: string`
* `email: string`
* `companyOrProject?: string`
* `subject: string`
* `message: string`

### Action response type önerisi

* `success: boolean`
* `message: string`
* `fieldErrors?: Record<string, string>`
* `formError?: string`

### Neden önemli?

Bu yapı:

* UI tarafında state yönetimini temizler
* error ve success durumlarını standardize eder
* ileride bakım kolaylığı sağlar

---

## Validation Yaklaşımı

Validation hem kullanıcı deneyimi hem güvenlik için önemlidir.

### Temel karar

Validation iki aşamalı düşünülmelidir:

#### 1. Hafif istemci tarafı yönlendirme

* boş alanları erkenden gösterebilir
* UX’i iyileştirir

#### 2. Asıl doğrulama sunucu tarafı

* zorunlu alanlar
* e-posta formatı
* trim / normalize işlemleri
* minimum içerik kontrolü
* güvenlik açısından son kontrol

### Kural

Sunucu tarafı validation zorunludur.
Client-side validation tek başına yeterli kabul edilmeyecektir.

---

## Validation Kuralları — Contact Form

## fullName

### Kurallar

* zorunlu
* trim edilmeli
* boş string kabul edilmemeli

### Hata mesajı

* Lütfen adınızı girin.

---

## email

### Kurallar

* zorunlu
* trim edilmeli
* temel geçerli e-posta formatı kontrol edilmeli

### Hata mesajı

* Geçerli bir e-posta adresi girin.

---

## companyOrProject

### Kurallar

* opsiyonel
* trim edilmeli
* boş bırakılırsa hata üretmemeli

### Hata mesajı

Genelde gerekmez.

---

## subject

### Kurallar

* zorunlu
* trim edilmeli
* tamamen boş olmamalı

### Hata mesajı

* Lütfen bir konu girin.

---

## message

### Kurallar

* zorunlu
* trim edilmeli
* boş string kabul edilmemeli
* çok kısa ve anlamsız içerik için minimum mantık düşünülebilir ama aşırı zorlanmamalı

### Hata mesajı

* Lütfen mesaj alanını boş bırakmayın.

---

## Normalize Etme Kuralları

Server action içinde gelen veri güvenli ve temiz hale getirilmelidir.

### Yapılması gerekenler

* tüm string alanlarda trim
* e-posta lower-case normalize
* opsiyonel alanları boş string yerine `undefined` yapma
* çoklu boşlukları gerektiğinde sadeleştirme

### Yapılmaması gerekenler

* kullanıcı mesaj içeriğini agresif biçimde değiştirmek
* otomatik “düzeltme” adı altında anlam bozmak
* validation ile normalization’ı karıştırmak

---

## Server Action Kullanım Mantığı

Contact form submit işlemi server action ile yapılacaktır.

### Neden server action?

* Next.js yapısına doğal uyum sağlar
* ayrı API route zorunluluğu yaratmaz
* form submit akışını sadeleştirir
* güvenli sunucu tarafı doğrulama sağlar
* küçük ve odaklı proje için yeterince güçlüdür

### Kural

Server action yalnızca “formu al ve sonucu döndür” mantığında kalmalı; aşırı soyutlanmamalıdır.

---

## Server Action Sorumlulukları

Contact server action aşağıdaki işleri yapmalıdır:

1. FormData veya typed payload almak
2. Değerleri normalize etmek
3. Validation yapmak
4. Hata varsa field/form error dönmek
5. Geçerliyse mesajı işlemek
6. Success response dönmek

### İşlemek ne demek?

İlk sürümde bu şu şekillerden biri olabilir:

* e-posta yönlendirme sistemi
* inbox / webhook / basit internal hedef
* güvenli iletişim kanalına iletim

### Kural

Submit sonrası işlem net tanımlı olmalı; “şimdilik hiçbir yere gitmiyor” gibi belirsiz sistem bırakılmamalıdır.

---

## Server Action Response Sözleşmesi

UI tarafı server action’dan dönen sonucu tahmin etmek zorunda kalmamalıdır.

### Önerilen response mantığı

#### Başarı

* `success: true`
* `message: "Mesajınız alındı."`

#### Alan bazlı hata

* `success: false`
* `fieldErrors: { email: "Geçerli bir e-posta adresi girin." }`

#### Genel hata

* `success: false`
* `formError: "Mesaj şu anda gönderilemedi. Lütfen tekrar deneyin."`

### Kural

Response yapısı tutarlı olmalıdır.
Bazen `error`, bazen `errors`, bazen `messageOnly` gibi dağınık yapılar kullanılmayacaktır.

---

## UI State Yönetimi

Contact form UI tarafında şu state’ler düşünülmelidir:

* idle
* pending
* success
* error

### Idle

Form ilk açıldığında veya henüz submit edilmediğinde.

### Pending

Submit gönderilmiş ama sonuç dönmemişken.

### Success

İşlem başarıyla tamamlandığında.

### Error

Validation veya submit hatası olduğunda.

### Kural

Bu state’ler görsel ve metinsel olarak ayırt edilebilir olmalıdır.

---

## Pending State Davranışı

Submit sırasında kullanıcı belirsizlik yaşamamalıdır.

### Uygun davranışlar

* submit butonunu disabled yapmak
* label’ı `Gönderiliyor...` yapmak
* küçük loading işareti göstermek

### Uygun olmayan davranışlar

* tüm formu kilitleyip ne olduğunu belli etmemek
* ağır loading ekranı göstermek
* uzun bekleme hissi üretmek
* submit sonrası sayfayı sıfırlamak

### Kural

Pending state kısa ve güven verici olmalıdır.

---

## Success State Davranışı

Başarı durumunda kullanıcıya net teyit verilmelidir.

### Uygun davranışlar

* başarı mesajı göstermek
* istenirse formu temizlemek
* sayfada kalmak
* kullanıcıyı zorla başka sayfaya göndermemek

### Önerilen başarı mesajı

* Mesajınız alındı.
* En kısa sürede göz atacağız.

### Uygun olmayan davranışlar

* success sonrası popup yağdırmak
* otomatik redirect
* satış CTA’sı göstermek
* kullanıcıyı “demo planla” benzeri yeni akışa itmek

---

## Error State Davranışı

Hatalar iki katmanda ele alınmalıdır:

### 1. Field-level error

Belirli bir alanla ilgili problem

### 2. Form-level error

Submit sırasında genel problem

### Kural

Alan hataları mümkünse alanın yakınında gösterilmeli,
genel hata ise form üstü veya altı net bir alanda sunulmalıdır.

### Uygun genel hata mesajısı

* Mesaj şu anda gönderilemedi. Lütfen tekrar deneyin.

### Uygun olmayan hata yaklaşımı

* kullanıcıyı suçlamak
* teknik stack trace göstermek
* belirsiz “bir şeyler ters gitti” bırakmak

---

## Reusable Validation Yapısı

Validation mantığı component içine gömülmemelidir.

### Önerilen yapı

`lib/validation/contact-form-schema.ts`

### Bu dosya ne yapar?

* alan kurallarını tanımlar
* parse / validate eder
* normalize edilmiş güvenli veri döndürür
* hata yapısını standardize eder

### Neden?

* test etmek kolaylaşır
* server action sade kalır
* UI ile business logic ayrılır

---

## Forms Type Katmanı

Form tipleri ayrı bir yerde tutulabilir.

### Önerilen dosya

`types/forms.ts`

### İçerebileceği şeyler

* `ContactFormInput`
* `ContactFormResult`
* `FieldErrors`
* `FormState`

### Kural

Aynı type’ları farklı dosyalarda tekrar tanımlamak yerine ortak tip katmanı kullanılmalıdır.

---

## Locale Uyumlu Form Mimarisi

Form metinleri locale’e göre gelmelidir.

### Locale’e göre değişecek şeyler

* alan label’ları
* placeholder’lar
* helper text’ler
* submit label’ı
* validation mesajları
* success / error metinleri

### Locale’e göre değişmeyecek şeyler

* payload yapısı
* alan anahtarları
* action mantığı
* validation iş kuralları

### Kural

Metin locale’e göre değişir; form yapısı değişmez.

---

## Data Kaynağı ile İlişki

Form UI metinleri `data/content/contact.ts` ve/veya `data/ui/microcopy.ts` üzerinden beslenmelidir.

### Kural

Aşağıdakiler component içine gömülmeyecektir:

* label metinleri
* başarı mesajları
* hata mesajları
* helper text’ler
* submit butonu yazısı

### Neden?

Bu yapı:

* TR / EN yönetimini kolaylaştırır
* ton bütünlüğünü korur
* içerik güncellemesini rahatlatır

---

## Spam Koruma Yaklaşımı

Form kamuya açık olduğu için minimum spam koruma düşünülmelidir.

### Uygun yöntemler

* server-side validation
* rate limiting (gerekirse)
* zaman tabanlı veya görünmez küçük korumalar
* honeypot alanı (gerekirse ve temiz uygulanırsa)

### Uygun olmayan yöntemler

* ağır ve kullanıcıyı rahatsız eden captcha
* çok fazla gizli mantıkla valid kullanıcıyı cezalandırmak
* form deneyimini bozan anti-spam aşırılığı

### Kural

Koruma görünmez ve düşük sürtünmeli olmalıdır.

---

## Güvenlik İlkeleri

Form işleme güvenlik açısından hafife alınmamalıdır.

### Minimum güvenlik beklentileri

* input sanitize / normalize
* server-side validation
* gereksiz alanları ignore etme
* error’larda iç sistem bilgisini sızdırmama
* submit hedefini güvenli şekilde çağırma
* spam / abuse ihtimaline karşı temel önlem

### Kural

Contact form küçük bir alan olabilir; ama güvenlik açısından “basit olduğu için önemsiz” sayılmayacaktır.

---

## Sunucu Tarafı İşleme Hedefi

Form submit sonrası veri nereye gidecekse bu net belirlenmelidir.

### Olası ilk sürüm hedefleri

* e-posta ile iletim
* güvenli webhook
* dahili inbox / notification mantığı

### Kural

İlk sürümde yalnızca tek net hedef seçilmeli ve form gerçekten oraya iletmelidir.

### Yapılmayacak şey

* submit başarılı dönüyor gibi yapıp hiçbir yere göndermemek
* “sonradan bağlarız” diyerek yarım bırakmak

---

## Form Reset Kararı

Başarılı submit sonrası form resetlenebilir.
Bu mantıklı olabilir.

### Uygun davranış

* success sonrası alanları temizle
* success mesajını göster
* kullanıcı isterse yeni mesaj yazabilsin

### Alternatif

Bazı alanlar kalabilir, ama success state net olmalıdır.

### Kural

Reset davranışı kararlı olmalıdır; yarı reset yarı eski state bırakılmayacaktır.

---

## Accessibility Gereksinimleri

Form erişilebilirlik açısından da doğru kurulmalıdır.

### Minimum gereksinimler

* her input’un visible label’ı olmalı
* error mesajları alanla ilişkilendirilmeli
* focus state görünür olmalı
* submit butonu klavye ile erişilebilir olmalı
* textarea rahat kullanılmalı
* success / error mesajları screen reader dostu düşünülmeli

### Kural

Placeholder, label yerine kullanılmayacaktır.

---

## Test Edilmesi Gereken Senaryolar

Form geliştirmesi tamamlandığında aşağıdaki senaryolar test edilmelidir:

### Başarı senaryoları

* tüm alanlar doğru → submit başarılı
* opsiyonel alan boş → submit başarılı

### Validation senaryoları

* ad boş
* e-posta boş
* e-posta formatı bozuk
* konu boş
* mesaj boş

### Teknik senaryolar

* submit hedefi geçici hata veriyor
* locale değişince metinler doğru geliyor
* mobilde form düzgün çalışıyor
* keyboard navigation doğru
* success / error state tekrar submit’i bozmuyor

### Kural

Form yalnızca “bir kere çalıştı” seviyesinde değil, durum bazlı test edilmelidir.

---

## Önerilen Teknik Akış

### Kullanıcı akışı

1. Kullanıcı formu doldurur
2. Submit’e basar
3. Client pending state gösterir
4. Server action veriyi alır
5. Validation yapılır
6. Hata varsa alan veya form bazlı response döner
7. Başarı varsa mesaj işlenir ve success state döner
8. UI buna göre güncellenir

### Kural

Akış doğrusal ve anlaşılır olmalıdır.

---

## Anti-Patternler

Aşağıdaki yaklaşımlar kullanılmayacaktır:

* form validation’ı sadece client’ta yapmak
* tüm metinleri component içine gömmek
* field error ve general error yapısını karıştırmak
* submit sonrası sayfayı zorla yenilemek
* bir sürü custom hook ile formu gereksiz karmaşıklaştırmak
* form mantığını gereksiz genel “enterprise form engine”e dönüştürmek

---

## Minimum İlk Sürüm Kararı

İlk sürüm için yeterli form mimarisi şudur:

* tek Contact form
* server action submit
* ayrı validation dosyası
* typed response
* locale destekli microcopy
* success / error / pending state
* temel spam ve güvenlik önlemi
* privacy ile uyumlu veri işleme

Bu, WeCaHan ana sitesi için profesyonel minimum standardı karşılar.

---

## Nihai Karar

`wecahan.com` form ve server action mimarisi şu çizgide kurulacaktır:

* sade ama güvenli server action yaklaşımı
* ayrı validation katmanı
* temiz UI state yönetimi
* locale uyumlu metin sistemi
* contact odaklı form deneyimi
* satış değil iletişim mantığı
* test edilebilir ve sürdürülebilir yapı

Bu mimari, WeCaHan sitesindeki temas deneyimini teknik olarak düzenli, güvenilir ve genişlemeye açık hale getiren temel standart olarak kabul edilir.

---

## Uygulama Notları

Bu belge aşağıdaki dokümanları doğrudan etkiler:

* contact-and-form-handling
* content-data-model
* microcopy-and-ui-text
* performance-and-accessibility-guardrails
* pre-launch-checklist

Bu belgede tanımlanan form ve server action kuralları, açık karar alınmadan client-only, hardcoded veya validation’sız dağınık yapıya dönüştürülmemelidir.