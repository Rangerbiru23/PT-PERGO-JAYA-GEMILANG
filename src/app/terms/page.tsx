import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, FileText, AlertTriangle, CheckCircle, Clock, DollarSign, Shield } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center space-x-4">
            <img
              src="/pergo-logo.png"
              alt="PT PERGO JAYA GEMILANG"
              className="h-10 w-auto"
            />
            <div>
              <h1 className="text-xl font-bold text-primary">PT PERGO JAYA GEMILANG</h1>
              <p className="text-xs text-muted-foreground">Terms & Conditions</p>
            </div>
          </div>
          <Link href="/">
            <Button variant="outline" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Kembali ke Beranda
            </Button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="container px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Terms & Conditions</h1>
            <p className="text-xl text-muted-foreground">
              Syarat dan Ketentuan Layanan PT PERGO JAYA GEMILANG
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Terakhir diperbarui: {new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="space-y-8">
            {/* Introduction */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-6 w-6 mr-2 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Selamat datang di PT PERGO JAYA GEMILANG. Syarat dan Ketentuan ini mengatur penggunaan layanan sewa angkutan bermotor 
                  yang kami sediakan. Dengan menggunakan layanan kami, Anda setuju untuk terikat oleh syarat dan ketentuan ini.
                </p>
                <p>
                  Harap membaca dengan cermat syarat dan ketentuan ini sebelum menggunakan layanan kami.
                </p>
              </CardContent>
            </Card>

            {/* Service Terms */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
                  Ketentuan Layanan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Layanan Sewa Angkutan Bermotor</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Ketersediaan Layanan:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Layanan sewa tersedia untuk perorangan dan perusahaan</li>
                      <li>Armada tersedia sesuai dengan jadwal dan ketersediaan</li>
                      <li>Pemesanan minimal 24 jam sebelum penggunaan layanan</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Jenis Armada:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Truk Engkel</li>
                      <li>Truk Box</li>
                      <li>Truk Container</li>
                      <li>Truk Bak Terbuka</li>
                      <li>Truk Trailer</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Layanan Tambahan:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Sopir berpengalaman (opsional)</li>
                      <li>Asisten sopir (untuk jarak jauh)</li>
                      <li>Asuransi pengiriman</li>
                      <li>Layanan darurat 24/7</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking and Payment */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="h-6 w-6 mr-2 text-blue-600" />
                  Pemesanan dan Pembayaran
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Prosedur Pemesanan</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Persyaratan Pemesanan:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Identitas diri yang valid (KTP/SIM/Paspor)</li>
                      <li>Surat izin mengemudi yang masih berlaku (jika menggunakan sopir)</li>
                      <li>Informasi lengkap tentang barang yang akan diangkut</li>
                      <li>Rute perjalanan yang jelas</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Metode Pembayaran:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Transfer bank</li>
                      <li>Tunai di muka</li>
                      <li>Pembayaran termin (untuk kontrak jangka panjang)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Kebijakan Pembayaran:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>DP minimal 50% dari total biaya sewa</li>
                      <li>Pelunasan sebelum atau pada saat penggunaan layanan</li>
                      <li>Denda keterlambatan pembayaran 2% per hari</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Tanggung Jawab
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Tanggung Jawab PT PERGO JAYA GEMILANG:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Menyediakan armada dalam kondisi baik dan layak jalan</li>
                  <li>Memastikan sopir memiliki lisensi yang valid dan berpengalaman</li>
                  <li>Memberikan asuransi dasar untuk armada</li>
                  <li>Menanggung biaya perbaikan untuk kerusakan normal</li>
                  <li>Menyediakan layanan darurat jika terjadi masalah teknis</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6">Tanggung Jawab Penyewa:</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Memberikan informasi yang akurat tentang barang yang diangkut</li>
                  <li>Memastikan barang yang diangkut legal dan tidak berbahaya</li>
                  <li>Menjaga kebersihan dan kondisi armada selama penggunaan</li>
                  <li>Melaporkan kerusakan atau masalah segera setelah terjadi</li>
                  <li>Mematuhi rute dan jadwal yang telah disepakati</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cancellation */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Kebijakan Pembatalan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Ketentuan Pembatalan:</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Pembatalan oleh Penyewa:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>&gt; 48 jam sebelum: Pengembalian 100% DP</li>
                      <li>24-48 jam sebelum: Pengembalian 50% DP</li>
                      <li>&lt; 24 jam sebelum: Tidak ada pengembalian</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Pembatalan oleh Perusahaan:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Pengembalian 100% pembayaran</li>
                      <li>Penawaran armada pengganti jika tersedia</li>
                      <li>Kompensasi untuk ketidaknyamanan (sesuai kebijakan)</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Important Notices */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
                  Pemberitahuan Penting
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Barang yang Dilarang:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Narkotika dan obat-obatan terlarang</li>
                      <li>Senjata api dan bahan peledak</li>
                      <li>Hewan liar yang dilindungi</li>
                      <li>Bahan kimia berbahaya tanpa izin</li>
                      <li>Barang ilegal lainnya</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Force Majeure:</h4>
                    <p className="text-sm text-muted-foreground">
                      Perusahaan tidak bertanggung jawab atas keterlambatan atau pembatalan yang disebabkan oleh:
                      bencana alam, kerusuhan, pemogokan, perang, atau keadaan di luar kendali kami.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Perubahan Syarat dan Ketentuan:</h4>
                    <p className="text-sm text-muted-foreground">
                      Perusahaan berhak mengubah syarat dan ketentuan sewaktu-waktu. Perubahan akan diberitahukan 
                      melalui website atau kontak langsung kepada pelanggan.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Jika Anda memiliki pertanyaan tentang syarat dan ketentuan ini, silakan hubungi kami:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> info@ptpergojayagemilang.com</p>
                  <p><strong>Telepon:</strong> 085285703526</p>
                  <p><strong>Alamat:</strong> JL. KESEHATAN NO. 123, Parittokaya, Pontianak Selatan, Kota Pontianak, Provinsi Kalimantan Barat</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="container px-4">
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 PT PERGO JAYA GEMILANG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}