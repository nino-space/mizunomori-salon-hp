import Image from 'next/image'
import { Phone, MapPin, Clock, Mail, Instagram } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen kominka-bg">
      {/* Header */}
      <header className="relative h-screen">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1560069002-5c1028f6c8b2?w=1920&h=1080&fit=crop"
            alt="古民家美容室"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">美容室（仮）</h1>
          <p className="text-xl md:text-2xl mb-8">古民家でくつろぎの時間を</p>
          <p className="text-lg md:text-xl max-w-2xl">
            靴を脱いで上がってください。<br />
            100年以上の歴史を持つ古民家で、<br />
            心も体も癒されるひとときをお過ごしください。
          </p>
        </div>
      </header>

      {/* Concept Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold kominka-text mb-8">コンセプト</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <h3 className="text-2xl font-semibold kominka-accent mb-4">古民家の温もり</h3>
              <p className="kominka-text leading-relaxed mb-6">
                100年以上前の古民家を改装した美容室。<br />
                畳の上でくつろぎながら、ゆったりとした時間の中で<br />
                最高のリラックス体験をお届けします。
              </p>
              <h3 className="text-2xl font-semibold kominka-accent mb-4">靴を脱ぐ美容室</h3>
              <p className="kominka-text leading-relaxed">
                外の世界を忘れ、心からリラックスできる空間。<br />
                靴を脱いで上がることで、日常から離れた特別な時間が始まります。
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1589939705484-561c92118939?w=600&h=400&fit=crop"
                alt="古民家インテリア"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-20 px-4 bg-kominka-light/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold kominka-text text-center mb-12">メニュー</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold kominka-accent mb-6">カット</h3>
              <ul className="space-y-4 kominka-text">
                <li className="flex justify-between">
                  <span>大人カット</span>
                  <span className="font-semibold">¥6,500</span>
                </li>
                <li className="flex justify-between">
                  <span>中学生以下</span>
                  <span className="font-semibold">¥4,500</span>
                </li>
                <li className="flex justify-between">
                  <span>前髪のみ</span>
                  <span className="font-semibold">¥1,000</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold kominka-accent mb-6">パーマ・カラー</h3>
              <ul className="space-y-4 kominka-text">
                <li className="flex justify-between">
                  <span>パーマ</span>
                  <span className="font-semibold">¥8,000〜</span>
                </li>
                <li className="flex justify-between">
                  <span>カラー</span>
                  <span className="font-semibold">¥7,000〜</span>
                </li>
                <li className="flex justify-between">
                  <span>ヘッドスパ</span>
                  <span className="font-semibold">¥4,000</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold kominka-text text-center mb-12">アクセス</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="bg-white/80 p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                  <MapPin className="mr-2" />
                  住所
                </h3>
                <p className="kominka-text mb-4">〒XXX-XXXX</p>
                <p className="kominka-text mb-6">〇〇県〇〇市△△町1-2-3</p>
                
                <h3 className="text-2xl font-semibold kominka-accent mb-6 flex items-center">
                  <Clock className="mr-2" />
                  営業時間
                </h3>
                <ul className="kominka-text space-y-2">
                  <li>火曜日〜土曜日: 10:00〜19:00</li>
                  <li>日曜日・月曜日: 定休日</li>
                </ul>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop"
                alt="地図"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-kominka-light/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold kominka-text mb-12">ご予約・お問い合わせ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <Phone className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">お電話</h3>
              <p className="kominka-accent text-2xl font-bold">XX-XXXX-XXXX</p>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <Mail className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">メール</h3>
              <p className="kominka-accent">info@kominka-salon.jp</p>
            </div>
            <div className="bg-white/80 p-8 rounded-lg shadow-lg">
              <Instagram className="w-12 h-12 kominka-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold kominka-text mb-2">Instagram</h3>
              <p className="kominka-accent">@kominka_salon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-kominka-dark text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-4">美容室（仮）</p>
          <p className="text-sm opacity-80">
            © 2024 Kominka Salon. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
