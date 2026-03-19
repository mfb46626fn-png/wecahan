# Project Data Model

## Amaç
Selected Projects bölümünün ve varsa proje detay sayfalarının tek merkezden veri almasını sağlamak.

## Önerilen Veri Alanları
Her proje için şu alanlar tanımlanmalı:
- `slug`
- `name`
- `shortDescription`
- `status`
- `category`
- `href`
- `isFeatured`
- `order`

## Durum Değerleri
### `active`
Kullanımda veya aktif geliştirme / sunum halinde.

### `in-development`
Henüz tam açık olmayan ama aktif geliştirme sürecinde olan ürün.

## Şimdiki Veri Seti
```ts
[
  {
    slug: "aaa-automation",
    name: "AAA Automation",
    shortDescription: "A focused automation initiative built to streamline repetitive workflows and operational processes.",
    status: "active",
    category: "Automation Systems",
    href: "/projects/aaa-automation",
    isFeatured: true,
    order: 1
  },
  {
    slug: "prificient",
    name: "Prificient",
    shortDescription: "A financial visibility platform designed to track profit, costs and business performance with more clarity.",
    status: "in-development",
    category: "Financial Intelligence Platform",
    href: "/projects/prificient",
    isFeatured: true,
    order: 2
  },
  {
    slug: "prificient-tools",
    name: "Prificient Tools",
    shortDescription: "An actively maintained collection of practical tools that support financial clarity and better business decisions.",
    status: "active",
    category: "Utility Tools",
    href: "/projects/prificient-tools",
    isFeatured: true,
    order: 3
  }
]
```

## Badge Label Mapping
- `active` → `Active`
- `in-development` → `In Development`

## Kurallar
- gereksiz status türü açılmamalı
- aynı proje iki farklı isimle geçmemeli
- açıklamalar benzer uzunlukta tutulmalı
- kartların görsel dengesi bozulmamalı
