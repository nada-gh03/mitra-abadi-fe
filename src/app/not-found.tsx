import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center bg-background-light relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#002D44 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mb-8 group">
        <div className="absolute -inset-8 bg-primary/20 rounded-full blur-2xl animate-pulse group-hover:bg-primary/30 transition-all"></div>

        <div className="relative z-10 flex items-center justify-center size-32 bg-white rounded-3xl shadow-xl border-4 border-primary transform rotate-6 group-hover:rotate-12 transition-transform duration-300">
          <span className="material-symbols-outlined text-7xl text-navy">
            science_off
          </span>
        </div>

        <div className="absolute -top-4 -right-4 bg-navy text-white font-black text-xl px-4 py-2 rounded-lg -rotate-12 border-4 border-background-light shadow-lg z-20">
          Error 404
        </div>
      </div>

      <h1 className="text-4xl md:text-5xl font-black text-navy mb-4 font-display tracking-tight">
        Halaman Tidak Ditemukan
      </h1>

      <p className="text-gray-600 text-lg max-w-lg mb-10 leading-relaxed font-body">
        Oops! Sepertinya halaman yang Anda cari tidak ditemukan, atau mungkin
        sudah dipindahkan.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <Link
          href="/"
          className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary hover:bg-yellow-400 text-navy font-bold transition-all shadow-lg hover:shadow-primary/30 hover:-translate-y-1"
        >
          <span className="material-symbols-outlined transition-transform group-hover:-translate-x-1">
            arrow_back
          </span>
          Kembali ke Beranda
        </Link>
        <Link
          href="/products"
          className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white border-2 border-navy text-navy font-bold hover:bg-navy hover:text-white transition-all shadow-sm hover:shadow-lg hover:-translate-y-1"
        >
          <span className="material-symbols-outlined">inventory_2</span>
          Cek Katalog Produk
        </Link>
      </div>

      <p className="mt-16 text-sm text-gray-400 font-mono">
        System ID: MAG-404-NOT-FOUND
      </p>
    </div>
  );
}
