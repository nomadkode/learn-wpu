//* Ambil semua element video
const videos = Array.from(document.querySelectorAll('[data-duration]'));

//* Pilih hanya JS Lanjutan
let jsLanjut = videos
  .filter((video) => video.textContent.includes('JS Lanjutan'))

  //* Ambil Durasi Masing-masing Video
  .map((item) => item.dataset.duration)

  //* Ubah durasi dr string ke float dan ubah menit menjadi detik.
  .map((waktu) => {
    const parts = waktu.split(':').map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })

  //* Jumlahkan semua detik
  .reduce((total, detik) => total + detik, 0);

//* Ubah formatnya jadi jam-menit-detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

//* Simpan di DOM
const pDurasi = document.querySelector('.total-durasi');
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`;

const jmlVideo = videos.filter((video) =>
  video.textContent.includes('JS Lanjutan')
).length;
const pJmlVideo = document.querySelector('.jumlah-video');
pJmlVideo.textContent = `${jmlVideo} Video.`;
