'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Phone, Mail, MapPin, Truck, Clock, Shield, Users, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
              <p className="text-xs text-muted-foreground">Sewa Angkutan Bermotor Terpercaya</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink href="#beranda" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Beranda
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#layanan" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Layanan
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#tentang" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Tentang Kami
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#kontak" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
                  Kontak
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container px-4 py-2 space-y-1">
              <a href="#beranda" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">Beranda</a>
              <a href="#layanan" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">Layanan</a>
              <a href="#tentang" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">Tentang Kami</a>
              <a href="#kontak" className="block px-3 py-2 text-sm font-medium rounded-md hover:bg-accent hover:text-accent-foreground">Kontak</a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="beranda" className="relative py-20 lg:py-32 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  <span className="text-primary">PT PERGO JAYA GEMILANG</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Solusi Terpercaya untuk Sewa Angkutan Bermotor
                </p>
              </div>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Kami menyediakan berbagai jenis truk dan angkutan bermotor untuk memenuhi kebutuhan logistik dan transportasi Anda. Dengan armada yang terawat dan layanan profesional, kami siap mendukung bisnis Anda.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Hubungi Kami
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Lihat Layanan
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative">
                <img
                  src="/pergo-logo.png"
                  alt="PT PERGO JAYA GEMILANG"
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="text-center">
              <CardHeader>
                <Truck className="h-12 w-12 mx-auto text-blue-600" />
                <CardTitle>Armada Lengkap</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Berbagai jenis truk dan angkutan bermotor untuk segala kebutuhan transportasi Anda
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Clock className="h-12 w-12 mx-auto text-blue-600" />
                <CardTitle>Tepat Waktu</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Layanan pengiriman yang tepat waktu dan dapat diandalkan untuk bisnis Anda
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Shield className="h-12 w-12 mx-auto text-blue-600" />
                <CardTitle>Terpercaya</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Armada yang terawat dengan baik dan sopir yang berpengalaman serta terpercaya
                </CardDescription>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardHeader>
                <Users className="h-12 w-12 mx-auto text-blue-600" />
                <CardTitle>Layanan Profesional</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Tim profesional yang siap memberikan solusi transportasi terbaik untuk Anda
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="layanan" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Layanan Kami</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Berbagai solusi transportasi untuk kebutuhan bisnis Anda
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Sewa Truk Engkel</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Truk engkel cocok untuk pengiriman barang dalam kota dengan kapasitas sedang.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Kapasitas 2-3 ton</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Cocok untuk dalam kota</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Fleksibel dan hemat</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Sewa Truk Box</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Truk box untuk pengiriman barang yang membutuhkan perlindungan dari cuaca.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Terlindung dari cuaca</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Aman dan rapi</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Berbagai ukuran</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Sewa Truk Container</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Truk container untuk pengiriman barang dalam jumlah besar dan jarak jauh.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Kapasitas besar</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Cocok untuk antar kota</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Dapat diandalkan</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Sewa Truk Bak Terbuka</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Truk bak terbuka untuk pengiriman barang dengan ukuran besar dan berat.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Muatan maksimal</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Mudah loading</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Multifungsi</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Sewa Truk Trailer</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Truk trailer untuk pengiriman alat berat dan barang super besar.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Kapasitas super besar</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Untuk alat berat</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Sistem pengamanan</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Truck className="h-8 w-8 text-blue-600" />
                <CardTitle>Layanan Kontrak</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Paket sewa jangka panjang dengan harga khusus untuk perusahaan.
                </CardDescription>
                <ul className="mt-4 space-y-2 text-sm">
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Harga khusus</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Prioritas layanan</li>
                  <li className="flex items-center"><CheckCircle className="h-4 w-4 mr-2 text-green-500" />Fleksibel</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 bg-background">
        <div className="container px-4">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Tentang <span className="text-primary">PT PERGO JAYA GEMILANG</span>
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                PT PERGO JAYA GEMILANG adalah perusahaan yang bergerak di bidang sewa angkutan bermotor yang telah berpengalaman dalam menyediakan solusi transportasi terpercaya untuk berbagai kebutuhan bisnis.
              </p>
              <p className="mt-4 text-lg text-muted-foreground">
                Dengan komitmen untuk memberikan layanan terbaik, kami terus mengembangkan armada dan meningkatkan kualitas pelayanan untuk memastikan kepuasan pelanggan.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Armada Terawat dan Modern</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Sopir Berpengalaman</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Harga Kompetitif</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="text-sm">Layanan 24/7</span>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src="/pergo-logo.png"
                alt="PT PERGO JAYA GEMILANG"
                className="rounded-lg shadow-lg max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Hubungi Kami</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Siap membantu kebutuhan transportasi Anda
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-blue-600" />
                <CardTitle>Telepon</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold">085285703526</p>
                <p className="text-sm text-muted-foreground">Senin - Minggu, 24 Jam</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <MapPin className="h-8 w-8 text-blue-600" />
                <CardTitle>Alamat</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">
                  JL. KESEHATAN NO. 123<br />
                  Desa/Kelurahan Parittokaya<br />
                  Kec. Pontianak Selatan<br />
                  Kota Pontianak, Provinsi Kalimantan Barat
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-blue-600" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Hubungi kami untuk informasi lebih lanjut mengenai layanan sewa angkutan bermotor.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4">
          <div className="grid gap-8 md:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/pergo-logo.png"
                  alt="PT PERGO JAYA GEMILANG"
                  className="h-8 w-auto"
                />
                <div>
                  <h3 className="font-bold">PT PERGO JAYA GEMILANG</h3>
                  <p className="text-xs text-gray-400">Sewa Angkutan Bermotor</p>
                </div>
              </div>
              <p className="text-sm text-gray-400">
                Solusi terpercaya untuk kebutuhan transportasi dan logistik Anda.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Sewa Truk Engkel</li>
                <li>Sewa Truk Box</li>
                <li>Sewa Truk Container</li>
                <li>Sewa Truk Bak Terbuka</li>
                <li>Sewa Truk Trailer</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#tentang">Tentang Kami</a></li>
                <li><a href="/privacy">Privacy Policy</a></li>
                <li><a href="/terms">Terms & Conditions</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>085285703526</li>
                <li>JL. KESEHATAN NO. 123</li>
                <li>Pontianak Selatan</li>
                <li>Kalimantan Barat</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2024 PT PERGO JAYA GEMILANG. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}