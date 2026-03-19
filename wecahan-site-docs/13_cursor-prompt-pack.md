# Cursor Prompt Pack

Bu dosya, Cursor içinde adım adım kullanılacak prompt şablonlarını içerir.

---

## Prompt 1 — Klasör ve İskelet Yapı
Bu projede `www.wecahan.com` kurumsal ana marka sitesi için ilerliyoruz. Aşağıdaki kurallara göre sadece gerekli klasör ve dosya iskeletini oluştur:

- `app/` altında `page.tsx`, `about/page.tsx`, `projects/page.tsx`, `contact/page.tsx`, `layout.tsx`
- `components/layout`, `components/ui`, `components/cards`, `components/forms`, `components/blocks/...`
- `data/` ve `content/` klasörleri
- boş ya da minimal export içeren component dosyaları oluştur
- henüz detaylı UI yazma
- mevcut alakasız dosyalara dokunma
- klasör yapısını `11_file-folder-structure.md` dosyasına sadık kalarak kur

---

## Prompt 2 — Global Layout
Şimdi sadece global layout tarafını inşa et:

- `SiteHeader`
- `SiteFooter`
- `PageContainer`
- `SectionShell`

Kurallar:
- koyu tema hissi
- profesyonel teknoloji şirketi tonu
- header sade olacak
- footer içinde brand, nav, selected project links ve legal links olacak
- mobil menü düşün
- başka sayfa block'larına geçme

---

## Prompt 3 — Reusable UI Components
Sadece reusable UI component'lerini yaz:

- `SectionHeading`
- `PrimaryButton`
- `SecondaryButton`
- `StatusBadge`

Kurallar:
- tüm component'ler sade ve tekrar kullanılabilir olsun
- `StatusBadge` sadece `active` ve `in-development` desteklesin
- gereksiz varyant şişmesi yapma

---

## Prompt 4 — Data Katmanı
Sadece veri dosyalarını oluştur / düzenle:

- `data/projects.ts`
- `data/focus-areas.ts`
- `data/founders.ts`
- `data/navigation.ts`

Kurallar:
- proje seti sadece 3 proje olsun
- status alanları doğru tanımlansın
- kartlar map ile üretilebilecek yapıda olsun
- rastgele proje ekleme

---

## Prompt 5 — Home Page Blocks
Sadece Home sayfasının block component'lerini yaz:

- `home-hero-block.tsx`
- `what-we-build-block.tsx`
- `about-snapshot-block.tsx`
- `focus-areas-block.tsx`
- `selected-projects-block.tsx`
- `founders-snapshot-block.tsx`
- `vision-mission-block.tsx`
- `final-contact-cta-block.tsx`

Kurallar:
- section sırası `05_page_home.md` dosyasına sadık olsun
- selected projects bölümü sadece 3 proje kullansın
- uzun copy yazma, temiz ve profesyonel tut
- boşlukları gereksiz büyütme

---

## Prompt 6 — Home Page Assembly
Şimdi sadece `app/page.tsx` dosyasını düzenle ve mevcut home block'larını doğru sırada assemble et.
Başka route'lara geçme.
Mantık sade olsun.

---

## Prompt 7 — About Page Blocks
Sadece About sayfası block'larını yaz:

- `about-intro-block.tsx`
- `who-we-are-block.tsx`
- `what-we-build-detail-block.tsx`
- `how-we-think-block.tsx`
- `about-focus-areas-block.tsx`
- `founders-block.tsx`
- `about-closing-block.tsx`

Kurallar:
- kurucu alanı kontrollü olsun
- marka anlatısı kuruculardan baskın olsun
- tone modern ve kurumsal olsun

---

## Prompt 8 — About Page Assembly
Sadece `app/about/page.tsx` dosyasını düzenle.
About block'larını doğru sırada bağla.
Ekstra route'a geçme.

---

## Prompt 9 — Projects Page Blocks
Sadece Projects sayfası block'larını yaz:

- `projects-intro-block.tsx`
- `projects-grid-block.tsx`
- `ecosystem-note-block.tsx`
- `projects-cta-block.tsx`

Kurallar:
- yalnızca 3 proje olsun
- status badge'ler doğru görünsün
- grid dengeli olsun
- proje kartları eşit yükseklik hissi versin

---

## Prompt 10 — Projects Page Assembly
Sadece `app/projects/page.tsx` dosyasını düzenle.
Projects block'larını doğru sırada bağla.

---

## Prompt 11 — Contact Page Blocks
Sadece Contact sayfası block'larını ve form bileşenini yaz:

- `contact-intro-block.tsx`
- `contact-form-block.tsx`
- `contact-info-block.tsx`
- `collaboration-note-block.tsx`
- `components/forms/contact-form.tsx`

Kurallar:
- alanlar sade olsun
- profesyonel placeholder kullan
- UI temiz ve kurumsal olsun

---

## Prompt 12 — Contact Page Assembly
Sadece `app/contact/page.tsx` dosyasını düzenle.
Contact block'larını sırayla bağla.

---

## Prompt 13 — Final Cleanup
Şimdi tüm `www.wecahan.com` kurumsal site tarafında şu kontrolleri yap:

- gereksiz boşlukları azalt
- typography hiyerarşisini dengele
- mobil görünümü kontrol et
- tekrar eden stilleri sadeleştir
- alakasız placeholder'ları temizle
- tema tonunu tüm sayfalarda eşitle

Hiçbir yeni özellik ekleme.
Sadece mevcut yapıyı temizle ve profesyonelleştir.
