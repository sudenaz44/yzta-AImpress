import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b shadow-sm">
        <div className="text-2xl font-bold text-blue-600">AkıllıKoç</div>
        <div className="space-x-4">
          <Button variant="ghost">Giriş Yap</Button>
          <Button>Kayıt Ol</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Yapay Zekâ Destekli Koçluk Platformu
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Sınavlara daha verimli hazırlan, eksiklerini keşfet, görevlerini tamamla!
        </p>
        <Button className="text-white bg-blue-500 hover:bg-blue-600">
          Hemen Deneme Sonucu Gir
        </Button>
      </section>

      {/* 3 Özellik Kartı */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Deneme Analizi</h2>
            <p className="text-gray-600 text-sm">
              Doğru/yanlış/boş istatistiklerini analiz et, netlerini takip et.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Kişisel Görevler</h2>
            <p className="text-gray-600 text-sm">
              Performansına özel çalışma görevleri ile gelişimini hızlandır.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold mb-2">Hedef Ağacı</h2>
            <p className="text-gray-600 text-sm">
              Görevleri tamamla, ağaçları büyüt, motivasyonunu görselleştir!
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-600 text-sm py-4 px-6 mt-10">
        <div className="max-w-6xl mx-auto flex justify-between flex-wrap">
          <p>&copy; 2025 AkıllıKoç. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4">
            <a href="#">Gizlilik</a>
            <a href="#">İletişim</a>
            <a href="#">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
