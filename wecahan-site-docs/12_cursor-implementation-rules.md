# Cursor Implementation Rules

Bu dosya, Cursor ile uygulama yaparken uyulacak çalışma kurallarıdır.

## Genel Çalışma Biçimi
- tek seferde her şeyi yaptırma
- sayfa sayfa ve block block ilerle
- her adımda sadece ilgili dosyaları değiştir
- component tekrarını engelle
- gereksiz refactor yaptırma

## Öncelik Sırası
1. klasör yapısı
2. global layout
3. reusable ui
4. home blocks
5. about blocks
6. projects blocks
7. contact blocks
8. content cleanup
9. responsive cleanup
10. final polish

## Kodlama İlkeleri
- sade ve okunabilir component yapısı
- server/client gereksiz ayrıştırma yok
- yalnızca gerçekten gereken yerde state
- static sections mümkün olduğunca declarative
- data mapping ile kart üretimi
- tasarım sistemi tutarlı

## UI İlkeleri
- section spacing kontrollü
- hover abartısız
- metin yoğunluğu dengeli
- mobil görünüm baştan düşünülmeli
- gereksiz boşluklar azaltılmalı

## Yasaklar
- lorem ipsum bırakmak
- placeholder link bırakmak
- aynı kartın 2 farklı versiyonunu yazmak
- global stilleri dağıtmak
- tasarım tonunu sayfadan sayfaya değiştirmek

## Status Kullanımı
Sadece:
- active
- in-development

## Proje Kapsamı
Şimdilik sadece:
- AAA Automation
- Prificient
- Prificient Tools

Başka proje eklenmeyecek.

## Copy Kullanımı
Copy önce dokümandan alınmalı.
Kod yazarken rastgele kurumsal cümle uydurulmamalı.
