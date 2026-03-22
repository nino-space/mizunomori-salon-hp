import Image from "next/image";
import { Scissors, Clock, MapPin, Phone, Mail, Instagram, Baby } from "lucide-react";

// ─────────────────────────────────────────────────────────────
// 画像はすべて「道具・手元・施術クローズアップ」のみ使用
// 店舗内装・外観は一切使わない → 「この店の写真」と誤解されない
// 本番では実店舗で撮影したカットシーンや道具写真に差し替え推奨
// ─────────────────────────────────────────────────────────────
const IMG = {
  // ヒーロー：施術中の手元・髪のクローズアップ
  hero: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1920&h=1080&fit=crop&q=80",
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
            className="object-cover object-center"
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
          <p className="text-white/80 text-base md:text-lg leading-relaxed mb-8">
            靴を脱いで、どうぞお上がりください。<br />
            キッズスペースもあるので、お子さま連れでも気兼ねなく。
          </p>
          <a
            href="https://line.me/R/ti/p/@415uyvcc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#06C755] text-white px-8 py-4 rounded-full text-sm tracking-widest hover:bg-[#05b04c] transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
            </svg>
            LINEで予約する
          </a>
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
                ひかりのぬくもりに包まれた空間
              </h3>
              <p className="text-[#6B5E52] text-sm leading-relaxed">
                古民家をそのまま活かした居心地のいいサロン。
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
                おくつろぎください
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
            住宅地の中の、<br className="md:hidden" />居場所みたいな美容室。
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
              <div className="rounded overflow-hidden mb-6">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3131.536345387723!2d140.86196807632288!3d38.29023948229981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f89876823008717%3A0x75426b8d2f3c0f59!2z44CSOTgxLTA5NjIg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy65rC044Gu5qOu77yR5LiB55uu77yR77yS4oiS77yS!5e0!3m2!1sja!2sjp!4v1774190472082!5m2!1sja!2sjp"
                  width="100%"
                  height="360"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="bg-white/70 rounded p-6 border border-[#D4C5B0]">
                <p className="text-[#2D2926] text-base leading-relaxed mb-2">
                  お近くにお住まいでしたら、お気軽にどうぞ。
                </p>
                <p className="text-[#6B5E52] text-sm leading-relaxed">
                  お散歩ついでに立ち寄るような感覚で来てもらえたら嬉しいです。<br />
                  お気軽にご相談ください。
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
                  〒981-0962<br />
                  宮城県仙台市青葉区水の森1-12-2
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={14} className="text-[#A0866A]" />
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Hours</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-2">
                  <li>月〜金　10:00 – 15:00 (14:00 ラストオーダー)</li>
                  <li className="text-[#A0866A]">不定休　※土日祝はご相談ください</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#A0866A] text-xs tracking-widest uppercase">Contact</span>
                </div>
                <ul className="text-sm text-[#6B5E52] space-y-3">
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
          LINE予約
      ══════════════════════════════ */}
      <section className="py-24 px-8 md:px-16 text-center bg-[#FAF8F5]">
        <p className="text-[#A0866A] text-xs tracking-[0.3em] uppercase mb-6">Reserve</p>
        <h2
          className="text-2xl md:text-3xl mb-4 text-[#2D2926]"
          style={{ fontWeight: 400 }}
        >
          ご予約はLINEから
        </h2>
        <p className="text-[#6B5E52] text-sm leading-relaxed mb-10">
          希望日時・メニューをメッセージで送ってください。<br />
          お気軽にどうぞ。
        </p>
        <a
          href="https://line.me/R/ti/p/@415uyvcc"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[#06C755] text-white px-10 py-5 rounded-full text-sm tracking-widest hover:bg-[#05b04c] transition-colors"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.630 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.630 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
          </svg>
          LINEで予約する
        </a>
      </section>

      {/* ══════════════════════════════
          FOOTER
      ══════════════════════════════ */}
      <footer className="bg-[#2D2926] text-white/50 py-10 px-8 text-center">
        <p className="text-white/80 mb-2 tracking-widest text-sm">Mizunomori Salon</p>
        <p className="text-xs">© 2026 Mizunomori Salon. All rights reserved.</p>
      </footer>

    </main>
  );
}
