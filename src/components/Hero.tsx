import { useState, useEffect } from 'react'
import { getStaff, type Staff } from '../lib/microcms'

const LINE_URL = 'https://page.line.me/245ksvcv?openQrModal=true'
const TEL = '090-6692-9256'

const heroImages = [
  '/images/ヒーローセクション1.png',
  '/images/ヒーローセクション2.png',
  '/images/ヒーローセクション3.png',
]

export default function Hero() {
  const [bgCurrent, setBgCurrent] = useState(0)
  const [bgFading, setBgFading] = useState(false)
  const [staff, setStaff] = useState<Staff[]>([])
  const [staffCurrent, setStaffCurrent] = useState(0)
  const [staffFading, setStaffFading] = useState(false)

  // 背景画像ローテーション
  useEffect(() => {
    const timer = setInterval(() => {
      setBgFading(true)
      setTimeout(() => {
        setBgCurrent(prev => (prev + 1) % heroImages.length)
        setBgFading(false)
      }, 500)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  // スタッフデータ取得
  useEffect(() => {
    getStaff()
      .then(res => setStaff(res.contents))
      .catch(() => setStaff([]))
  }, [])

  // スタッフローテーション（スタッフが2人以上のとき）
  useEffect(() => {
    if (staff.length <= 1) return
    const timer = setInterval(() => {
      setStaffFading(true)
      setTimeout(() => {
        setStaffCurrent(prev => (prev + 1) % staff.length)
        setStaffFading(false)
      }, 400)
    }, 4000)
    return () => clearInterval(timer)
  }, [staff])

  const currentStaff = staff[staffCurrent] ?? null

  return (
    <section
      id="top"
      className="relative pt-16 min-h-screen flex items-center overflow-hidden"
    >
      {/* Background: rotating hero images */}
      {heroImages.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === bgCurrent && !bgFading ? 1 : 0 }}
        >
          <img src={src} alt="" className="w-full h-full object-cover" />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 md:hidden" style={{
        background: 'linear-gradient(to bottom, rgba(255,255,255,0.75) 0%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0.10) 100%)',
      }} />
      <div className="absolute inset-0 hidden md:block" style={{
        background: 'linear-gradient(to right, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.70) 35%, rgba(255,255,255,0.25) 58%, rgba(255,255,255,0.0) 100%)',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-8 py-10 md:py-0 md:min-h-[calc(100vh-64px)]">

          {/* Left / Top: Copy + Buttons */}
          <div className="flex-1 flex flex-col gap-4 md:gap-6">
            <span className="inline-flex w-fit items-center gap-2 bg-white/80 backdrop-blur-sm border border-sky-lighter text-navy text-xs font-bold px-3 py-1.5 rounded-full animate-fadein">
              <span className="w-2 h-2 rounded-full bg-line-green inline-block"></span>
              受付中 9:00〜18:00
            </span>

            <div className="animate-fadein-delay">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-navy leading-tight text-center md:text-left">
                札幌市の<br />
                ハウスクリーニング<br />
                便利サービス
              </h1>
            </div>

            <p className="text-sm md:text-base text-navy/70 leading-relaxed animate-fadein-delay2">
              エアコン・水回り・退去清掃・ちょっとしたお困りごとまで。<br />
              個人様・法人様どちらもお気軽にご相談ください。
            </p>

            <div className="flex flex-col sm:flex-row gap-3 animate-fadein-delay2">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 bg-line-green text-white font-bold text-base px-8 py-4 rounded-full shadow-lg hover:opacity-90 active:scale-95 transition-all"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .629.285.629.63v4.141h1.757c.348 0 .63.283.63.63 0 .344-.282.629-.63.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                </svg>
                LINEで相談する
              </a>
              <a
                href={`tel:${TEL}`}
                className="flex items-center justify-center gap-2.5 border-2 border-navy text-navy font-bold text-base px-8 py-4 rounded-full bg-white/60 backdrop-blur-sm hover:bg-navy hover:text-white active:scale-95 transition-all"
              >
                <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z"/>
                </svg>
                電話する
              </a>
            </div>
          </div>

          {/* Right / Bottom: Staff photo (rotating) — microCMSにデータがある場合のみ表示 */}
          {currentStaff && (
            <div className="flex-shrink-0 flex flex-col items-center gap-3 md:gap-4 animate-fadein-delay">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/60" />
                <img
                  src={currentStaff.image.url}
                  alt={currentStaff.name}
                  className={`relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-[3/4] object-cover object-top rounded-xl shadow-2xl transition-opacity duration-400 ${staffFading ? 'opacity-0' : 'opacity-100'}`}
                />
              </div>

              {/* Name card */}
              <div className={`bg-white/80 backdrop-blur-sm border border-sky-lighter rounded-xl px-6 py-3 text-center shadow-sm transition-opacity duration-400 ${staffFading ? 'opacity-0' : 'opacity-100'}`}>
                <p className="text-xs text-navy/50 font-medium mb-0.5">スタッフ</p>
                <p className="text-navy font-black text-lg tracking-wide">{currentStaff.name}</p>
                <p className="text-xs text-navy/70 mt-1">{currentStaff.subtitle}</p>
              </div>

              {/* スタッフが複数のときドットナビ表示 */}
              {staff.length > 1 && (
                <div className="flex gap-1.5">
                  {staff.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setStaffCurrent(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === staffCurrent ? 'w-6 bg-navy' : 'w-1.5 bg-navy/30'}`}
                      aria-label={`スタッフ ${i + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

        </div>
      </div>

      {/* 背景画像ドット */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setBgCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === bgCurrent ? 'w-8 bg-navy' : 'w-2 bg-navy/30'}`}
            aria-label={`画像 ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
