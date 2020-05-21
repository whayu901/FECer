# Front-end Developer Entry Test

Web ini dibuat dengan menggunakan framework `ReactJS` dan menggunakan
`yarn` sebagai package manager.

Untuk menjalankan aplikasi ini di local bisa dengan meng-clone repository

```
cd your-folder

git clone https://github.com/whayu901/FECer.git

yarn install

yarn start
```


### TODO
Aplikasi ini dibuat sesuai dengan arahan dari tim cermati.

- [x] Notification panel akan menghilang saat button `Got it` di klik dengan menggunakan
animation sliding up.
- [x] Card pada highlight panel pada saat di resolusi > 960px = 3 column,
pada saat di resolusi < 960px dan > 480px = 2 column, dan saat
resolusi < 480px = 1 column.
- [x] Newsletter panel akan muncul ketika page di scroll hampir habis.
Setelah muncul, maka newsletter panel akan terus muncul baik page di scroll up/down.
- [x] Newsletter muncul menggunakan animasi sliding up, dan ketika di close
menggunakan animation sliding down.
- [x] Newsletter panel setelah di close, maka tidak akan muncul selama 10 menit setelah
di close. Baik page di scroll, reload, ataupun di close. Setelah 10 menit, ketika page
di scroll maka Newsletter panel akan muncul kembali.
