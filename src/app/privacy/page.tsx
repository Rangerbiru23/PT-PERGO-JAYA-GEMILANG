import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
              <p className="text-xs text-muted-foreground">Privacy Policy</p>
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
            <h1 className="text-4xl font-bold tracking-tighter mb-4">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground">
              Kebijakan Privasi PT PERGO JAYA GEMILANG
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
                  <Shield className="h-6 w-6 mr-2 text-blue-600" />
                  Pendahuluan
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  PT PERGO JAYA GEMILANG ("kami", "perusahaan") sangat memegang teguh privasi dan keamanan data pribadi Anda. 
                  Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi 
                  Anda ketika menggunakan layanan sewa angkutan bermotor kami.
                </p>
                <p>
                  Dengan menggunakan layanan kami, Anda menyetujui praktik-praktik yang dijelaskan dalam kebijakan ini.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Database className="h-6 w-6 mr-2 text-blue-600" />
                  Pengumpulan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h3 className="text-lg font-semibold">Informasi yang Kami Kumpulkan:</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium">Data Pribadi:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Nama lengkap</li>
                      <li>Alamat email</li>
                      <li>Nomor telepon</li>
                      <li>Alamat lengkap</li>
                      <li>Nomor identitas (KTP/SIM/Paspor)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Data Bisnis:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Nama perusahaan</li>
                      <li>NPWP</li>
                      <li>Alamat bisnis</li>
                      <li>Informasi rekening bank</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium">Data Penggunaan Layanan:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground ml-4">
                      <li>Jenis armada yang disewa</li>
                      <li>Periode sewa</li>
                      <li>Rute perjalanan</li>
                      <li>Riwayat transaksi</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Usage */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Eye className="h-6 w-6 mr-2 text-blue-600" />
                  Penggunaan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Kami menggunakan data pribadi Anda untuk:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Memproses dan mengelola permintaan sewa Anda</li>
                  <li>Menyediakan layanan pelanggan dan dukungan teknis</li>
                  <li>Mengirimkan informasi terkait layanan dan promosi</li>
                  <li>Memproses pembayaran dan penagihan</li>
                  <li>Memastikan keamanan dan kepatuhan terhadap peraturan</li>
                  <li>Meningkatkan kualitas layanan kami</li>
                  <li>Memenuhi kewajiban hukum dan peraturan yang berlaku</li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Protection */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lock className="h-6 w-6 mr-2 text-blue-600" />
                  Perlindungan Data
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Kami melindungi data pribadi Anda dengan:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas hanya untuk otorisasi personil</li>
                  <li>Sistem keamanan yang terus diperbarui</li>
                  <li>Backup data yang aman</li>
                  <li>Audit keamanan secara berkala</li>
                </ul>
                <p>
                  Kami tidak akan menjual, menyewakan, atau membagikan data pribadi Anda kepada pihak ketiga 
                  tanpa persetujuan Anda, kecuali diwajibkan oleh hukum.
                </p>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <UserCheck className="h-6 w-6 mr-2 text-blue-600" />
                  Hak Anda
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Sebagai pengguna layanan kami, Anda memiliki hak untuk:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Mengakses data pribadi yang kami simpan</li>
                  <li>Memperbaiki data yang tidak akurat</li>
                  <li>Menghapus data pribadi Anda (dengan batasan tertentu)</li>
                  <li>Menolak penggunaan data untuk tujuan pemasaran</li>
                  <li>Meminta salinan data pribadi Anda</li>
                  <li>Menarik persetujuan penggunaan data</li>
                </ul>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card>
              <CardHeader>
                <CardTitle>Hubungi Kami</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Jika Anda memiliki pertanyaan tentang kebijakan privasi kami atau ingin menggunakan hak Anda, 
                  silakan hubungi kami:
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Email:</strong> privacy@ptpergojayagemilang.com</p>
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