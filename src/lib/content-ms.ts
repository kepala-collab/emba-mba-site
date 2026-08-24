import { FACULTY, INTAKES, MODULES } from "@/lib/content";

export const HRD_CORP_CLAIM_MS =
  "Majikan Malaysia yang berdaftar dengan HRD Corp perlu mengemukakan permohonan geran melalui e-TRiS sebelum kursus bermula. HRD Corp menentukan kelayakan dan jumlah yang diluluskan berdasarkan Allowable Cost Matrix; jumlah pembiayaan tidak melebihi baki levi majikan. Pihak yang memohon ialah majikan, bukan peserta.";

export const PROGRAMME_AUDIENCE_MS =
  "Sesuai untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan yang bertanggungjawab terhadap strategi, transformasi, inovasi atau pertumbuhan.";

export const REFUND_TERMS_MS =
  "Terma pendaftaran ABC yang ditandatangani menyatakan kelayakan bayaran balik, tempoh notis, jumlah yang boleh dikembalikan, syarat pemulangan bahan pembelajaran dan tarikh pemprosesan. Peserta menerima dan menyemak terma tersebut sebelum membuat bayaran; tiada janji bayaran balik dibuat di luar terma yang ditandatangani.";

export const COMPARISON_MS = [
  { k: "Tempoh pengajian", them: "18–24 bulan", us: "Tiga bulan: enam hari latihan, diselesaikan dalam tiga sesi bulanan" },
  { k: "Fokus pembelajaran", them: "Teori akademik, penyelidikan dan analisis kes", us: "Situasi perniagaan sebenar, pertimbangan strategik dan rangka kerja keputusan yang boleh diguna semula" },
  { k: "Kaedah penilaian", them: "Tugasan atau peperiksaan, berserta tesis", us: "Projek aplikasi berasaskan perniagaan peserta sendiri; tiada peperiksaan atau tesis tradisional" },
  { k: "Peranan fasilitator", them: "Pengajaran akademik dan penyeliaan penyelidikan", us: "Pengamal industri, perunding dan jurulatih eksekutif" },
  { k: "Alat utama", them: "Buku teks akademik, literatur penyelidikan dan kajian kes", us: "Metodologi F.A.S.T. dan 12 rangka kerja perniagaan praktikal" },
  { k: "Bentuk pengajian", them: "Mengikut jadual akademik yang ditetapkan institusi penganugerah", us: "Satu hujung minggu sebulan selama tiga bulan; peserta terus bekerja sepenuh masa" },
  { k: "Yuran kursus", them: "Yuran pengajian dan caj tambahan yang ditetapkan institusi", us: "Yuran standard RM10,000.00; pemohon Malaysia yang layak boleh menerima biasiswa LIFE Innoversity RM5,000.00 selepas penilaian dan kelulusan bertulis" },
  { k: "Sifat kelayakan", them: "Ijazah MBA akademik daripada institusi penganugerah", us: "Sijil pengiktirafan program profesional CMI; bukan ijazah akademik bertauliah MQA" },
] as const;

export const CORE_PAGES_MS = {
  method: {
    eyebrow: "Kaedah keputusan pengurusan F.A.S.T.",
    title: "Menyusun isu yang rumit menjadi keputusan yang boleh dijelaskan dan dilaksanakan",
    intro: "F.A.S.T. bermula daripada isu perniagaan sebenar: ia membantu pengurus mentakrifkan masalah, menguji andaian, membandingkan pilihan dan menterjemahkan keputusan kepada pelan tindakan.",
    sections: [
      ["Langkah 1: Kenal pasti masalah sebenar", "Asingkan gejala di permukaan, fakta, kekangan dan andaian yang belum diuji, supaya keputusan pengurusan yang sebenarnya perlu dibuat menjadi jelas."],
      ["Langkah 2: Lihat keseluruhan sistem", "Analisis pihak terlibat, proses, sumber, kebergantungan dan kesan susulan — bukan sekadar merawat satu bahagian masalah."],
      ["Langkah 3: Bina pilihan yang boleh dibandingkan", "Gabungkan pemikiran prinsip pertama, pemikiran reka bentuk dan rangka kerja strategik untuk membentuk pilihan praktikal yang dinilai atas kriteria yang sama."],
      ["Langkah 4: Jelaskan asas keputusan", "Nyatakan bukti, pertimbangan untung rugi, risiko dan hasil yang dijangka, supaya pasukan memahami mengapa arah itu dipilih."],
      ["Langkah 5: Terjemahkan kepada tindakan", "Susun cadangan menjadi pelan tindakan perniagaan yang jelas pemiliknya, keutamaannya, langkah utamanya dan titik semakannya."],
      ["Penggunaan dalam kursus", "Peserta menggunakan kaedah ini terhadap isu perniagaan yang sedang mereka tangani. Maklum balas fasilitator tertumpu pada proses pertimbangan, logik pelaksanaan dan pelan tindakan — bukan hafalan teori."],
    ],
  },
  programme: {
    eyebrow: "Executive MBA tiga bulan · Diiktiraf CMI (UK)",
    title: "Direka untuk pengurus berpengalaman yang sedang bekerja",
    intro: "Enam hari latihan, bimbingan dan projek perniagaan diselesaikan dalam tempoh tiga bulan. Peserta terus bekerja sepenuh masa sepanjang kursus. Peserta yang layak boleh bertanya secara berasingan tentang laluan lanjutan Chartered Manager.",
    sections: [
      ["Susunan kursus tiga bulan", "Selesaikan enam hari latihan, tiga sesi intensif, projek perniagaan dan bimbingan. Peserta yang memenuhi keperluan kursus menerima sijil program Executive MBA yang diiktiraf CMI."],
      ["Laluan Chartered Manager yang berasingan", "Chartered Manager ialah laluan pilihan CMI yang berasingan, dengan kelayakan, penilaian dan yuran tersendiri. Ia tidak termasuk dalam kursus ini atau yuran yang diterbitkan, dan tidak diberikan secara automatik kerana menamatkan kursus."],
      ["Status profesional CMI", "Terma program CMI Recognised yang diterbitkan CMI menyatakan bahawa peserta yang menamatkan kursus menerima status Foundation Chartered Manager (fCMgr). CMI menguruskan pengaktifan status, pembaharuan keahlian dan penggunaan gelaran profesional."],
      ["Sifat kursus", "Ini ialah program pembangunan profesional untuk pengurus kanan. Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia. Yuran penilaian Chartered Manager dan yuran keahlian CMI dikutip secara berasingan oleh CMI kecuali dinyatakan sebagai termasuk dalam jadual yuran rasmi."],
      ["Untuk siapa", PROGRAMME_AUDIENCE_MS],
      ["Hasil pembelajaran", "Pada akhir kursus, peserta membentangkan pelan tindakan terhadap isu perniagaan mereka sendiri, dinilai oleh fasilitator kursus dan pengamal industri."],
      ["Penjelasan kelayakan", "Ini ialah program pembangunan profesional yang diiktiraf oleh Chartered Management Institute (CMI), United Kingdom. Ia bukan ijazah akademik bertauliah Agensi Kelayakan Malaysia (MQA)."],
    ],
  },
  curriculum: {
    eyebrow: "Kurikulum · 12 modul",
    title: "Daripada mencipta nilai, kepada menyampaikan dan memperoleh nilai",
    intro: "Dua belas modul aplikasi merentasi tiga peringkat — bengkel, bimbingan peribadi dan projek perniagaan — tanpa peperiksaan dan tanpa tesis. Anda menggunakannya terhadap isu sebenar perniagaan anda, dan menamatkan kursus dengan pelan transformasi yang dinilai fasilitator.",
    sections: [
      ["Peringkat 1: Mencipta nilai", "Melalui F.A.S.T., Jobs-To-Be-Done, tinjauan masa hadapan, DNA strategi dan perancangan tindakan, takrifkan semula nilai pelanggan dan hala tuju perniagaan."],
      ["Peringkat 2: Menyampaikan nilai", "Melalui kepimpinan situasi, intervensi pasukan, pemikiran sistem dan pengurusan transformasi, terjemahkan strategi kepada tingkah laku pasukan dan mekanisme pelaksanaan."],
      ["Peringkat 3: Membentuk pelan tindakan", "Gunakan reka bentuk pengaruh, hubungan pihak berkepentingan dan analisis sistem perniagaan untuk menyiapkan pelan tindakan perniagaan yang dinilai fasilitator."],
      ["Dua belas modul", MODULES.map((module) => `${module.c} ${module.p}`).join("; ")],
      ["Kaedah penilaian", "Tiada peperiksaan atau tesis tradisional. Penilaian berasaskan penyertaan dalam sesi, proses bimbingan dan satu projek yang berkait terus dengan perniagaan peserta."],
    ],
  },
  fees: {
    eyebrow: "Yuran · Biasiswa · HRD Corp",
    title: "Yuran standard RM10,000.00; pemohon yang layak boleh memohon biasiswa RM5,000.00",
    intro: "Pemohon Malaysia yang layak boleh mengurangkan yuran kepada RM5,000.00 melalui biasiswa LIFE Innoversity — tertakluk pada penilaian kelayakan dan kekosongan serta pengesahan bertulis; ia tidak diberikan secara automatik.",
    sections: [
      ["Apa yang termasuk dalam yuran kursus", "Sama ada membayar yuran standard atau menerima biasiswa, kursus merangkumi tiga sesi bersemuka dalam tempoh tiga bulan, diagnostik kepimpinan peribadi, bimbingan fasilitator, alat pembelajaran dan penilaian projek perniagaan. Chartered Manager ialah laluan pilihan yang berasingan dengan kelayakan, penilaian dan yuran tersendiri, dan tidak termasuk dalam yuran kursus yang diterbitkan."],
      ["HRD Corp", HRD_CORP_CLAIM_MS],
      ["Yuran untuk pemohon Malaysia", "Yuran standard RM10,000.00. Pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis, boleh menerima biasiswa LIFE Innoversity RM5,000.00 dan membayar RM5,000.00. Biasiswa tertakluk pada kekosongan dan kelayakan; ia tidak automatik."],
      ["Bayaran individu", "Sebelum bayaran dibuat, pasukan kursus memberikan jadual ansuran bertulis kepada peserta individu, menyatakan jumlah setiap ansuran dan tarikh matang."],
      ["Urusan bayaran balik", REFUND_TERMS_MS],
    ],
  },
  intakes: {
    eyebrow: "Tarikh kohort 2026 — Bahasa Inggeris dan Mandarin",
    title: "Pilih kohort yang paling sesuai dengan jadual kerja anda",
    intro: "Setiap kohort diselesaikan melalui satu hujung minggu sebulan, merentasi tiga sesi. Pasukan kursus mengesahkan kekosongan kohort semasa membalas pertanyaan.",
    sections: [
      ...INTAKES.map((intake) => [
        `${intake.language === "Mandarin" ? "Mandarin" : "Bahasa Inggeris"} ${intake.co}`,
        `Sesi pertama: ${intake.s1}; sesi kedua: ${intake.s2}; sesi ketiga: ${intake.s3}. ${intake.days === "Sat–Sun" ? "Sabtu hingga Ahad" : "Jumaat hingga Sabtu"}, 9 pagi hingga 6 petang.`,
      ] as const),
      ["Langkah seterusnya", "Anda boleh menempah panggilan, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau menerima maklumat terlebih dahulu. Tarikh di atas ialah tarikh 2026 yang diterbitkan; jika ABC mengubah tarikh, peserta berdaftar akan menerima tarikh gantian secara bertulis."],
    ],
  },
  faculty: {
    eyebrow: "Fasilitator dan jurulatih perniagaan",
    title: "Dikendalikan oleh pengamal industri, perunding dan jurulatih eksekutif",
    intro: "Fasilitator kursus datang daripada bidang strategi, operasi, bakat, kewangan, tadbir urus, perubahan dan bimbingan perniagaan. ABC mengesahkan barisan fasilitator setiap kohort dalam makluman kohort yang dihantar sebelum sesi pertama.",
    sections: [
      ["Pengalaman praktikal", "Barisan fasilitator merangkumi profesional yang pernah menerajui pembuatan berskala besar, kewangan syarikat tersenarai, transformasi organisasi, dasar kewangan, pembangunan bakat dan perundingan perniagaan."],
      ["Bimbingan peribadi", "Kursus menggunakan rangka kerja terhadap isu perniagaan peserta sendiri; projek menerima maklum balas daripada fasilitator dan pengamal industri."],
      ["Barisan fasilitator semasa", FACULTY.map((faculty) => `${faculty.n} (${faculty.focus})`).join("; ")],
      ["Fasilitator kohort", "ABC menyenaraikan fasilitator kohort, latar belakang dan modul yang dikendalikan dalam makluman kohort sebelum sesi pertama."],
    ],
  },
} as const;

export const FAQS_MS = [
  ["Bagaimana kursus ini disusun?", "Kursus berlangsung tiga bulan, merangkumi enam hari latihan, tiga sesi hujung minggu, bimbingan dan projek perniagaan. Peserta yang memenuhi keperluan kursus menerima sijil program Executive MBA yang diiktiraf CMI. Chartered Manager ialah laluan pilihan CMI dengan kelayakan, penilaian dan yuran tersendiri, dan tidak termasuk dalam kursus ini atau yuran yang diterbitkan."],
  ["Bolehkah saya menamatkan kursus sambil bekerja sepenuh masa?", "Boleh. Kursus awam Malaysia berjalan selama tiga bulan dengan enam hari latihan yang ditetapkan. Peserta menamatkan kursus sambil terus bekerja, dan menyiapkan projek aplikasi berasaskan isu perniagaan semasa mereka. Semak semua tarikh sesi yang diterbitkan sebelum mendaftar."],
  ["Adakah ini kursus pendidikan eksekutif atau ijazah MBA akademik?", "Ini ialah Executive MBA dalam kepimpinan perniagaan masa hadapan, dianugerahkan dan disokong oleh CMI. Kursus tiga bulan ini ialah program pembangunan profesional dan pendidikan eksekutif — bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia."],
  ["Apakah yang diterima selepas berjaya menamatkan kursus?", "Peserta yang berjaya menerima sijil pengiktirafan CMI bagi program Future Ready Executive MBA. Format dan perkataan akhir sijil ditentukan oleh CMI. Chartered Manager ialah laluan CMI yang berasingan dan tidak diberikan secara automatik kerana menamatkan kursus ini."],
  ["Adakah saya menjadi Chartered Manager secara automatik selepas tamat?", "Tidak. Selepas menamatkan kursus, peserta menerima CMI Certificate of Recognition; di bawah skim CMI Recognised yang diterbitkan, peserta menerima status Foundation Chartered Manager. Chartered Manager (CMgr) penuh ialah penilaian profesional berasingan; laluan permohonan, kelayakan, penilaian, keahlian dan yuran ditentukan oleh CMI."],
  ["Adakah Chartered Manager termasuk dalam kursus?", "Tidak termasuk. Chartered Manager ialah laluan pilihan CMI yang berasingan; kelayakan, penilaian, keahlian dan yuran ditentukan oleh CMI. Pasukan kursus tidak menilai kelayakan permohonan atau menjanjikan sebarang keputusan."],
  ["Adakah ini ijazah bertauliah MQA?", "Bukan. Ini ialah program pembangunan profesional yang diiktiraf oleh CMI, United Kingdom — bukan ijazah akademik bertauliah MQA."],
  ["Bolehkah syarikat menggunakan levi HRD Corp?", HRD_CORP_CLAIM_MS],
  ["Bagaimana jika saya tidak dapat menghadiri satu sesi?", "Hubungi pasukan kursus sebelum sesi bermula. ABC akan mengesahkan secara bertulis urusan gantian melalui video yang ditetapkan atau kohort susulan yang ditetapkan."],
  ["Untuk siapa kursus ini?", PROGRAMME_AUDIENCE_MS],
  ["Bagaimana untuk mengetahui lebih lanjut?", "Anda boleh memilih panggilan ringkas, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau menerima maklumat terlebih dahulu. Pasukan kursus akan menghubungi mengikut pilihan anda; ini bukan tawaran kemasukan atau komitmen bayaran."],
] as const;
