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

      {/* Giriş/Kayıt Sayfası */}
      <section className="bg-gray-50 py-16 px-4" id="auth">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">Giriş / Kayıt</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">E-posta</label>
              <Input type="email" placeholder="example@mail.com" className="w-full" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Şifre</label>
              <Input type="password" placeholder="********" className="w-full" />
            </div>
            <div className="flex justify-between">
              <Button className="bg-blue-500 text-white hover:bg-blue-600">Giriş Yap</Button>
              <Button variant="ghost">Kayıt Ol</Button>
            </div>
          </form>
        </div>
      </section>

      {/* Öğrenci Paneli */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-6">
        {/* Sol Menü */}
        <aside className="w-full md:w-1/4 space-y-4 mb-6 md:mb-0">
          <div className="bg-blue-50 p-4 rounded-xl shadow">
            <h3 className="font-semibold text-lg text-blue-600 mb-2">Panel Menüsü</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">Denemelerim</a></li>
              <li><a href="#" className="hover:underline">Görevlerim</a></li>
              <li><a href="#" className="hover:underline">İstatistikler</a></li>
              <li><a href="#" className="hover:underline">Profilim</a></li>
            </ul>
          </div>
        </aside>

        {/* Orta İçerik */}
        <main className="w-full md:w-3/4 md:pl-6 space-y-6">
          {/* Analiz Kartı */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Son Deneme Analizi</h2>
              <p className="text-gray-600 text-sm">Net değişimi: +2 | Başarı oranı: %75</p>
            </CardContent>
          </Card>

          {/* Görev Kartları */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-2">Bugünkü Görevler</h2>
              <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                <li>Paragraf testinden 20 soru çöz</li>
                <li>Coğrafya tekrar videosunu izle</li>
                <li>2. denemeyi çöz ve yükle</li>
              </ul>
            </CardContent>
          </Card>
        </main>
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
