# Basic-Banking-System
Challenge 2.2 - Binar Academy (Banking System)
========================================================
Nama : Dhimas Rizaldy
Kelas : BE-JS1
Algoritma Bank System
========================================================
Ketentuan Pengerjaan :

1. Membuat repositori baru di GitHub dengan nama "Basic-Banking-System"
2. Salin file bank_account.js Challenge 1 ke direktori proyek di repositori baru
3. Membuat file JavaScript baru dengan nama banking_system.js
4. Implementasikan kelas BankAccount dengan metode deposit() dan withdraw()
5. Gunakan setTimeout() untuk mensimulasikan operasi transaksi yang asynchronous
6. Commit dan push perubahan ke repositori GitHub
========================================================
Kriteria Pengumpulan Challenge :

1. Menggunakan modular class OOP (40 points)
2. Mengurai proses berpikir dengan menggunakan flowchart (30 points)
3. Menggunakan GitHub untuk mengelola repository (30 points)
========================================================
Langkah-Langkah Pengerjaan :

Lanjutan langkah-langkah pengerjaan:
● Implementasikan kelas BankAccount dengan
minimal dua metode:
○ deposit(amount): Metode ini akan menerima
jumlah uang yang akan disimpan ke dalam
akun.
○ withdraw(amount): Metode ini akan
menerima jumlah uang yang akan ditarik
dari akun, asalkan saldo mencukupi.
● Gunakan fungsi setTimeout() untuk
mensimulasikan operasi transaksi yang
asynchronous. Misalnya, setelah melakukan deposit
atau withdrawal, Anda dapat menunda eksekusi
selama beberapa detik sebelum mengembalikan
hasil operasi.

=======================================================
Algoritma Bank System :

1. Mulai
2. Inisialisasi saldo awal akun bank.
3. Tampilkan pesan "Selamat Datang di ATM Binar."
4. Tampilkan menu transaksi:
 - Pilih Menu Transaksi
 1. Deposit.
 2. Withdraw.
 3. Keluar.
5. Gunakan pengulangan (loop) untuk memproses transaksi yang dipilih pengguna.
6. Jika pengguna memilih "Deposit," lakukan langkah berikut:
 - Tampilkan pesan "Deposit."
 - Mintalah pengguna memasukkan jumlah deposit.
 - Validasi bahwa jumlah deposit lebih dari 0.
 - Jika valid, tambahkan jumlah deposit ke saldo akun.
 - Tampilkan pesan bahwa deposit berhasil dan saldo saat ini.
7. Jika pengguna memilih "Withdraw," lakukan langkah berikut:
 - Tampilkan pesan "Withdraw."
 - Mintalah pengguna memasukkan jumlah penarikan.
 - Validasi bahwa saldo mencukupi untuk penarikan.
 - Jika valid, kurangi jumlah penarikan dari saldo akun.
 - Tampilkan pesan bahwa penarikan berhasil dan saldo saat ini.
8. Jika pengguna memilih "Keluar," keluar dari pengulangan.
9. Tampilkan pesan "Apakah Anda ingin mengulang program?" dan minta konfirmasi.
10. Jika pengguna ingin mengulang, kembali ke langkah 4.
11. Selesai.
========================================================
