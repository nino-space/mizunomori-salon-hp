import Image from "next/image";
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Baby } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// 画像はすべて「道具・手元・施術クローズアップ」のみ使用
// 店舗内装・外観は一切使わない → 「この店の写真」と誤解されない
// 本番では実店舗で撮影したカットシーンや道具写真に差し替え推奨
// ─────────────────────────────────────────────────────────────
const IMG = {
  // ヒーロー：施術中の手元・髪のクローズアップ
  hero:       "https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1920&h=1080&fit=crop&q=80",
  // コンセプト01：ハサミ・コームのクローズアップ
  concept1:   "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&h=600&fit=crop&q=80",
  // コンセプト02：スリッパ・足元（靴を脱ぐ雰囲気）
  concept2:   "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&q=80",
  // コンセプト03：子ども・カラフルな小物
  concept3:   "https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=800&h=600&fit=crop&q=80",
  // フルブレイク：女性の髪を切る手元
  break1:     "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&h=700&fit=crop&q=80",
  // メニュー左：ハサミ単体クローズアップ
  menu_cut:   "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=400&fit=crop&q=80",
  // メニュー右：カラー剤・ブラシ
  menu_color: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&h=400&fit=crop&q=80",
  // ギャラリー：仕上がった髪（後ろ姿・顔出しなし）
  gallery1:   "https://images.unsplash.com/photo-1492106087820-71f1a00d2b11?w=500&h=700&fit=crop&q=80",
  // ギャラリー：カット中の手元
  gallery2:   "https://images.unsplash.com/photo-1519500099198-fd81846b8f03?w=500&h=700&fit=crop&q=80",
  // ギャラリー：ヘアケア用品の並び
  gallery3:   "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=500&h=700&fit=crop&q=80",
  // アクセス：街並み・路地（外観ではなく雰囲気）
  access:     "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=500&fit=crop&q=80",
};

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#FAF8F5] text-[#2D2926]"
      style={{ fontFamily: "'Noto Serif JP', serif" }}
    >

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <section className="relative h-screen flex items-end pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMG.hero}
            alt="施術中の手元"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1410]/80 via-[#1a1410]/30 to-[#1a1410]/10" />
        </div>
        <div className="relative z-10 px-8 md:px-16 max-w-3xl">
          <p className="text-[#D4B896] text-sm tracking-[0.25em] mb-4 uppercase">
            Mizunomori Salon
          </p>
          <h1
            className="text-white text-4xl md:text-6xl leading-tight mb-6"
            style={{ fontWeight: 400 }}
          >
            ただいま、と<br />言いたくなる<br />美容室。
          </h1>
          <p className="text-white/80 text-base md:text-lg leading-relaxed">
            靴を脱いで、ゆっくりどうぞ。<br />
            キッズスペースもあるので、お子さま連れでも気兼ねなく。
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          CONCEPT
      ══════════════════════════════ */}
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-16">Concept</p>

        <div className="grid md:grid-cols-3 gap-8">

          {/* 01 木のぬくもり */}
          <div className="group">
            <div className="aspect-[4/3] relative overflow-hidden rounded mb-6">
              <Image
                src={IMG.concept1}
                alt="道具のクローズアップ"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2D2926]/10" />
            </div>
            <div className="border-t border-[#D4C5B0] pt-6">
              <span className="text-[#A0866A] text-xs tracking-widest mb-3 block">01</span>
              <h3 className="text-lg mb-3" style={{ fontWeight: 400 }}>
                木のぬくもりに<br />包まれた空間
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed">
                古い梁や床板を活かした、居心地のいいサロン。
                気取らず、ありのままでいられる場所です。
              </p>
            </div>
          </div>

          {/* 02 おあがりください */}
          <div className="group">
            <div className="aspect-[4/3] relative overflow-hidden rounded mb-6">
              <Image
                src={IMG.concept2}
                alt="玄関・足元のイメージ"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2D2926]/10" />
            </div>
            <div className="border-t border-[#D4C5B0] pt-6">
              <span className="text-[#A0866A] text-xs tracking-widest mb-3 block">02</span>
              <h3 className="text-lg mb-3" style={{ fontWeight: 400 }}>
                おあがりください。
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed">
                玄関で靴を脱いで、ほっとひと息。
                近所のお友だちの家に来るような、そんな気軽さで。
              </p>
            </div>
          </div>

          {/* 03 キッズスペース */}
          <div className="group">
            <div className="aspect-[4/3] relative overflow-hidden rounded mb-6">
              <Image
                src={IMG.concept3}
                alt="キッズスペースのイメージ"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#2D2926]/10" />
            </div>
            <div className="border-t border-[#D4C5B0] pt-6">
              <div className="flex items-center gap-2 mb-3">
                <Baby size={14} className="text-[#A0866A]" />
                <span className="text-[#A0866A] text-xs tracking-widest">kids</span>
              </div>
              <h3 className="text-lg mb-3" style={{ fontWeight: 400 }}>
                お子さまとご一緒に
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed">
                キッズスペースをご用意しています。
                施術中もお子さまに安心して遊んでいただけます。
                地域のママ友とのんびり過ごす場所としても、ぜひ。
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          FULL-WIDTH IMAGE BREAK
      ══════════════════════════════ */}
      <section className="h-64 md:h-[480px] relative overflow-hidden">
        <Image
          src={IMG.break1}
          alt="カット中の手元"
          fill
          className="object-cover object-top"
        />
        <div className="absolute inset-0 bg-[#1a1410]/45" />
        <div className="absolute inset-0 flex items-center justify-center">
          <p
            className="text-white text-xl md:text-4xl tracking-[0.2em] text-center leading-relaxed"
            style={{ fontWeight: 300 }}
          >
            街の中の、<br className="md:hidden" />居場所みたいな美容室。
          </p>
        </div>
      </section>

      {/* ══════════════════════════════
          MENU
      ══════════════════════════════ */}
      <section className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-16">Menu</p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* カット */}
          <div>
            <div className="aspect-[16/7] relative overflow-hidden rounded mb-8">
              <Image
                src={IMG.menu_cut}
                alt="ハサミのクローズアップ"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1a1410]/15" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors size={14} className="text-[#A0866A]" />
              <span className="text-[#A0866A] text-xs tracking-widest uppercase">Cut</span>
            </div>
            <ul className="space-y-5">
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">大人カット</span>
                <span className="text-[#6B5E52] text-sm">¥6,500</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">中学生以下</span>
                <span className="text-[#6B5E52] text-sm">¥4,500</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="text-sm">前髪のみ</span>
                <span className="text-[#6B5E52] text-sm">¥1,000</span>
              </li>
            </ul>
          </div>

          {/* パーマ・カラー */}
          <div>
            <div className="aspect-[16/7] relative overflow-hidden rounded mb-8">
              <Image
                src={IMG.menu_color}
                alt="カラー・ケア用品"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#1a1410]/15" />
            </div>
            <div className="flex items-center gap-2 mb-6">
              <Scissors size={14} className="text-[#A0866A]" />
              <span className="text-[#A0866A] text-xs tracking-widest uppercase">Perm / Color / Spa</span>
            </div>
            <ul className="space-y-5">
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">パーマ</span>
                <span className="text-[#6B5E52] text-sm">¥8,000〜</span>
              </li>
              <li className="flex justify-between items-baseline border-b border-[#EDE6DC] pb-4">
                <span className="text-sm">カラー</span>
                <span className="text-[#6B5E52] text-sm">¥7,000〜</span>
              </li>
              <li className="flex justify-between items-baseline">
                <span className="text-sm">ヘッドスパ</span>
                <span className="text-[#6B5E52] text-sm">¥4,000</span>
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* ══════════════════════════════
          GALLERY（3枚・高さをずらして配置）
      ══════════════════════════════ */}
      <section className="pb-24 px-8 md:px-16 max-w-6xl mx-auto">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-10">Gallery</p>
        <div className="grid grid-cols-3 gap-3 items-start">
          <div className="aspect-[3/4] relative overflow-hidden rounded group">
            <Image
              src={IMG.gallery1}
              alt="仕上がりイメージ"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="aspect-[3/4] relative overflow-hidden rounded group mt-10">
            <Image
              src={IMG.gallery2}
              alt="カット中の手元"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="aspect-[3/4] relative overflow-hidden rounded group">
            <Image
              src={IMG.gallery3}
              alt="ヘアケア用品"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          ACCESS
      ══════════════════════════════ */}
      <section className="bg-[#F0EAE0] py-24 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-16">Access</p>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <div className="aspect-video relative overflow-hidden rounded mb-6">
                <Image
                  src={IMG.access}
                  alt="街のイメージ"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white/70 rounded p-6 border border-[#D4C5B0]">
                <p className="text-[#2D2926] text-base leading-relaxed mb-2">
                  近くに住んでいるなら、ふらっとどうぞ。
                </p>
                <p className="text-[#6B5E52] text-sm leading-relaxed">
                  お散歩ついでに、ちょっと立ち寄るような感覚で来てもらえたら嬉しいです。
                  ご予約なしでもお気軽にご相談ください。
                </p>
              </div>
            </div>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MapPin size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Address</span>
                </div>
                <p className="text-sm text-[#6B5E52] leading-loose">
                  〒XXX-XXXX<br />
                  〇〇県〇〇市△△町1-2-3
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Hours</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-2">
                  <li>火〜土　10:00 – 19:00</li>
                  <li className="text-[#A0866A]">日・月　定休日</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Phone size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Contact</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-3">
                  <li>XX-XXXX-XXXX</li>
                  <li className="flex items-center gap-2">
                    <Mail size={12} className="text-[#A0866A]" />
                    info@kominka-salon.jp
                  </li>
                  <li className="flex items-center gap-2">
                    <Instagram size={12} className="text-[#A0866A]" />
                    @kominka_salon
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="bg-[#2D2926] text-white/50 py-10 px-8 text-center">
        <p className="text-white/80 mb-2 tracking-widest text-sm">Mizunomori Salon</p>
        <p className="text-xs">© 2024 Mizunomori Salon. All rights reserved.</p>
      </footer>

    </main>
  );
}
