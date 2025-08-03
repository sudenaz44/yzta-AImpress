import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const netData = [
  { name: "Deneme 1", net: 58 },
  { name: "Deneme 2", net: 62 },
  { name: "Deneme 3", net: 65 },
  { name: "Deneme 4", net: 67 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-800 transition-all duration-300">
      {/* Navbar */}
      <nav className="flex justify-between items-center p-4 border-b shadow-sm sticky top-0 bg-white z-50">
        <div className="text-2xl font-bold text-blue-600 animate-fade-in">AkıllıKoç</div>
        <div className="space-x-4">
          <Button variant="ghost">Giriş Yap</Button>
          <Button>Kayıt Ol</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-4 animate-fade-in-up">
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
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-10 max-w-6xl mx-auto animate-fade-in-up">
        {[
          {
            title: "Deneme Analizi",
            desc: "Doğru/yanlış/boş istatistiklerini analiz et, netlerini takip et."
          },
          {
            title: "Kişisel Görevler",
            desc: "Performansına özel çalışma görevleri ile gelişimini hızlandır."
          },
          {
            title: "Hedef Ağacı",
            desc: "Görevleri tamamla, ağaçları büyüt, motivasyonunu görselleştir!"
          },
        ].map(({ title, desc }) => (
          <Card key={title} className="hover:scale-105 transition-transform">
            <CardContent className="p-6">
              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              <p className="text-gray-600 text-sm">{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Öğrenci Paneli */}
      <section className="flex flex-col md:flex-row max-w-7xl mx-auto py-16 px-6">
        {/* Sol Menü */}
        <aside className="w-full md:w-1/4 space-y-4 mb-6 md:mb-0 animate-fade-in">
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
          {/* Grafikli Analiz */}
          <Card className="animate-fade-in-up">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Net Değişimi Grafiği</h2>
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={netData}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="net" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Görev Kartları */}
          <Card className="animate-fade-in-up">
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
      <footer className="bg-gray-100 text-gray-600 text-sm py-4 px-6 mt-10 animate-fade-in">
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
