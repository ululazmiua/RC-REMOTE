import { useNavigate } from "react-router";

export default function Documentation() {
  const navigate = useNavigate();

  return (
    <>
      <section>
        <h2 className="mt-24 mb-10 text-center font-bold text-3xl text-amber-50">
          Documentation
        </h2>
        {/* <!-- tombol back --> */}
        <button onClick={() => navigate("/")}>
          <div className="border rounded-full h-10 w-10 flex justify-center items-center bg-white absolute top-4 right-5 shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <path d="m8 5l-5 5l5 5" />
                <path d="M3 10h8c5.523 0 10 4.477 10 10v1" />
              </g>
            </svg>
          </div>
        </button>

        {/* <!-- Documentation --> */}
        <div className="container mx-auto px-6 mb-10 sm:flex sm:flex-wrap sm:gap-6 sm:justify-center ">
          {/* card 1 */}
          <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:w-64 sm:mb-0 md:w-80 lg:w-72 bg-amber-50 ">
            <img
              src="/images/image6.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px] "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Petualangan IoT Dimulai!
              </div>
              <p className="text-slate-600 text-sm">
                Kami sedang bersiap untuk berangkat membeli berbagai komponen
                IoT — langkah awal menuju proyek inovatif kami!
              </p>
            </div>
          </div>

          {/* card 2 */}
          <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:w-64 sm:mb-0 md:w-80 lg:w-72 bg-amber-50">
            <img
              src="/images/image1.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Merangkai Ban Belakang ke ESP32
              </div>
              <p className="text-slate-600 text-sm">
                Kami sedang mencoba menyambungkan sistem penggerak ban belakang
                dengan ESP32 untuk menguji kendali motor secara langsung.
              </p>
            </div>
          </div>

          {/* card 3 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 bg-amber-50">
            <video
              src="/images/video2.mp4"
              // controls
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Ban Belakang Berhasil Bergerak!
              </div>
              <p className="text-slate-600 text-sm">
                Akhirnya, ban belakang berhasil dijalankan menggunakan motor
                servo yang dikendalikan oleh ESP32 — langkah maju untuk sistem
                penggerak kami!
              </p>
            </div>
          </div>

          {/* card 4 */}
          <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:w-64 sm:mb-0 md:w-80 lg:w-72 bg-amber-50">
            <img
              src="/images/image3.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Lanjut Eksperimen di Lab Terpadu
              </div>
              <p className="text-slate-600 text-sm">
                Kami melanjutkan perakitan dan pengujian proyek di Lab Terpadu
                bersama Bang Aren untuk menyempurnakan sistem IoT yang sedang
                kami kembangkan.
              </p>
            </div>
          </div>

          {/* card 5 */}
          <div className="rounded-md shadow-lg overflow-hidden mb-10 sm:w-64 sm:mb-0 md:w-80 lg:w-72 bg-amber-50">
            <img
              src="/images/image4.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Lanjut ke Bagian Koding!
              </div>
              <p className="text-slate-600 text-sm">
                Setelah pengujian hardware, kami melanjutkan proses pengembangan
                dengan menulis kode untuk website dan program Arduino agar
                sistem dapat terhubung secara sempurna.
              </p>
            </div>
          </div>

          {/* card 6 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 mb-10 bg-amber-50">
            <img
              src="/images/image5.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Merangkai Hardware Kembali
              </div>
              <p className="text-slate-600 text-sm">
                Kami kembali melanjutkan perakitan hardware untuk menyempurnakan
                koneksi antar komponen dan memastikan semua sistem berjalan
                sesuai rencana.
              </p>
            </div>
          </div>

          {/* card 7 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 bg-amber-50">
            <img
              src="/images/image2.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px] "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Potret Hasil Sementara Rangkaian
              </div>
              <p className="text-slate-600 text-sm">
                Inilah tampilan sementara dari rangkaian yang telah kami susun —
                masih dalam tahap pengembangan, tapi sudah mulai menunjukkan
                hasil yang menjanjikan!
              </p>
            </div>
          </div>

          {/* card 8 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 bg-amber-50">
            <video
              src="/images/video1.mp4"
              // controls
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Lanjut ke Ban Depan!
              </div>
              <p className="text-slate-600 text-sm">
                Kami melanjutkan tahap berikutnya dengan memasang dan
                menghubungkan ban depan menggunakan motor servo agar sistem
                kemudi dapat dikendalikan melalui ESP32.
              </p>
            </div>
          </div>

          {/* card 9 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 bg-amber-50">
            <img
              src="/images/image7.jpg"
              alt="gambar"
              className="w-full object-cover h-[200px] "
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Mulai Desain 3D RC Car!
              </div>
              <p className="text-slate-600 text-sm">
                Setelah rangkaian dasar berhasil, kami mulai mendesain model 3D
                untuk RC car agar tampilan dan struktur bodinya lebih presisi
                serta siap untuk tahap perakitan akhir.
              </p>
            </div>
          </div>

          {/* card 10 */}
          <div className="rounded-md shadow-lg overflow-hidden sm:w-64 md:w-80 sm:mb-0 lg:w-72 bg-amber-50">
            <video
              src="/images/video3.mp4"
              // controls
              autoPlay={true}
              loop={true}
              muted={true}
              className="w-full object-cover h-[200px]"
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl text-slate-700 mb-2">
                Desain 3D Berhasil Dibuat!
              </div>
              <p className="text-slate-600 text-sm">
                Desain 3D RC car akhirnya berhasil diselesaikan! Hasilnya sesuai
                harapan dan siap digunakan untuk tahap perakitan selanjutnya.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
