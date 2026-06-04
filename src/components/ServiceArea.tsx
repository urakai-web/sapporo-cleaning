const areas = [
  '札幌市中央区', '札幌市北区', '札幌市東区',
  '札幌市白石区', '札幌市厚別区', '札幌市豊平区',
  '札幌市清田区', '札幌市南区', '札幌市西区',
  '札幌市手稲区',
]

export default function ServiceArea() {
  return (
    <section id="service-area" className="bg-sky-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4">

        {/* Section heading */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold tracking-widest text-navy/50 uppercase mb-3">Service Area</span>
          <h2 className="text-2xl md:text-3xl font-black text-navy">
            札幌市を中心に対応しています
          </h2>
          <div className="mt-3 mx-auto w-12 h-1 rounded-full bg-navy"></div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10">
          <p className="text-navy/80 leading-relaxed text-base md:text-lg mb-8 text-center">
            白石区を拠点に、札幌市内・近郊エリアのご依頼に対応しています。<br className="hidden md:block" />
            対応可否は作業内容により異なりますので、まずはお気軽にご相談ください。
          </p>

          {/* Area list */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {areas.map(area => (
              <span
                key={area}
                className="text-sm font-medium text-navy bg-sky-light px-4 py-2 rounded-full border border-sky-lighter"
              >
                {area}
              </span>
            ))}
          </div>

          <p className="text-center text-sm text-navy/60">
            ※ 上記以外のエリアも内容によってはご対応できる場合があります。お気軽にご相談ください。
          </p>
        </div>

        {/* Info cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: '🏠', label: '拠点', value: '白石区北郷七条' },
            { icon: '🕐', label: '営業時間', value: '9:00〜20:00' },
            { icon: '📅', label: '定休日', value: 'なし（年中無休）' },
          ].map(({ icon, label, value }) => (
            <div key={label} className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="text-xs text-navy/50 font-medium mb-1">{label}</div>
              <div className="text-navy font-bold">{value}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
