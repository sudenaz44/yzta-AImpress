import React, { useState } from "react";
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
  const [formData, setFormData] = useState({ correct: '', incorrect: '', blank: '' });
  const [recommendation, setRecommendation] = useState('');
  const [treeProgress, setTreeProgress] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const net = parseInt(formData.correct) - parseInt(formData.incorrect) * 0.25;

    // Yapay zeka simülasyonu: Öneri oluştur
    if (net >= 65) {
      setRecommendation("Harika gidiyorsun! Şimdi TYT Sosyal denemesi çöz.");
    } else if (net >= 50) {
      setRecommendation("İyi gidiyorsun. Paragraf pratiğini artır.");
    } else {
      setRecommendation("Temel konulara dön. Matematik tekrarına ağırlık ver.");
    }

    // Ağaç ilerlemesini güncelle (örnek amaçlı % artış)
    setTreeProgress(Math.min(treeProgress + 20, 100));

    // Form verisi burada backend'e gönderilebilir
    console.log("Gönderilen veri:", formData);
  };

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

      {/* Deneme Sonucu Giriş Formu */}
      <section className="max-w-xl mx-auto px-6 py-10 animate-fade-in-up">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-4">Deneme Sonucu Gir</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input type="number" placeholder="Doğru Sayısı" onChange={(e) => setFormData({ ...formData, correct: e.target.value })} />
              <Input type="number" placeholder="Yanlış Sayısı" onChange={(e) => setFormData({ ...formData, incorrect: e.target.value })} />
              <Input type="number" placeholder="Boş Sayısı" onChange={(e) => setFormData({ ...formData, blank: e.target.value })} />
              <Button type="submit" className="w-full bg-blue-600 text-white">Gönder</Button>
            </form>
            {recommendation && (
              <p className="mt-4 text-green-600 font-medium">🧠 Koç Önerisi: {recommendation}</p>
            )}
          </CardContent>
        </Card>
      </section>

      {/* Hedef Ağacı */}
      <section className="max-w-xl mx-auto px-6 py-6 animate-fade-in-up">
        <Card>
          <CardContent className="p-6 text-center">
            <h2 className="text-xl font-bold mb-2">🎯 Hedef Ağacı</h2>
            <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
              <div className="absolute top-0 left-0 h-4 bg-green-500 transition-all duration-500" style={{ width: `${treeProgress}%` }}></div>
            </div>
            <p className="mt-2 text-sm text-gray-600">Tamamlanma: %{treeProgress}</p>
          </CardContent>
        </Card>
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
