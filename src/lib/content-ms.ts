import { FACULTY, INTAKES } from "@/lib/content";

const MODULES_MS = [
  { c: "M01", title: "Tinjauan Masa Hadapan", outcome: "Membaca landskap perniagaan" },
  { c: "M02", title: "JTBD", outcome: "Inovasi dan pertumbuhan berpusatkan pelanggan" },
  { c: "M03", title: "Metodologi F.A.S.T.", outcome: "Pemikiran adaptif berasaskan sistem" },
  { c: "M04", title: "Isu Kritikal", outcome: "Masalah dan peluang" },
  { c: "M05", title: "DNA Strategik", outcome: "Pembentukan Strategi 4D" },
  { c: "M06", title: "SBAP", outcome: "Perancangan Tindakan Perniagaan Strategik" },
  { c: "M07", title: "Kepimpinan Transformasional", outcome: "Berprinsip dan mengikut situasi" },
  { c: "M08", title: "Intervensi Pasukan", outcome: "Bimbingan untuk pecutan" },
  { c: "M09", title: "Sistem Bersepadu", outcome: "Perspektif sistem dan semakan" },
  { c: "M10", title: "Transformasi Organisasi", outcome: "Kepimpinan BOLT" },
  { c: "M11", title: "Pengaruh melalui Reka Bentuk", outcome: "Kehadiran dan ketepatan strategik" },
  { c: "M12", title: "Ekosistem Pihak Berkepentingan", outcome: "Rangkaian kepercayaan dan pengaruh" },
] as const;

export const HRD_CORP_CLAIM_MS =
  "Majikan Malaysia yang berdaftar dengan HRD Corp perlu mengemukakan permohonan geran melalui e-TRiS sebelum program bermula. HRD Corp menentukan kelayakan dan jumlah yang diluluskan berdasarkan Allowable Cost Matrix; jumlah pembiayaan tidak melebihi baki levi majikan. Pihak yang memohon ialah majikan, bukan peserta.";

export const PROGRAMME_AUDIENCE_MS =
  "Sesuai untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan — mereka yang memikul tanggungjawab sebenar: hasil syarikat, pasukan, keputusan merentas jabatan atau hala tuju pertumbuhan.";

export const REFUND_TERMS_MS =
  "Terma pendaftaran ABC yang ditandatangani menyatakan kelayakan bayaran balik, tempoh notis, jumlah yang boleh dikembalikan, syarat pemulangan bahan pembelajaran dan tarikh pemprosesan. Peserta menerima dan menyemak terma tersebut sebelum membuat bayaran; tiada janji bayaran balik dibuat di luar terma yang ditandatangani.";

export const COMPARISON_MS = [
  { k: "Tempoh pengajian", them: "18–24 bulan", us: "Enam bulan: enam hari latihan, diselesaikan dalam tiga sesi berjadual" },
  { k: "Fokus pembelajaran", them: "Teori akademik, penyelidikan dan analisis kes", us: "Situasi perniagaan sebenar, keputusan strategik, dan rangka kerja yang boleh anda guna berulang kali" },
  { k: "Kaedah penilaian", them: "Tugasan atau peperiksaan, berserta tesis", us: "Projek aplikasi berasaskan perniagaan peserta sendiri; tiada peperiksaan atau tesis tradisional" },
  { k: "Peranan fasilitator", them: "Pengajaran akademik dan penyeliaan penyelidikan", us: "Pengamal industri, perunding dan jurulatih eksekutif" },
  { k: "Alat utama", them: "Buku teks akademik, literatur penyelidikan dan kajian kes", us: "Metodologi F.A.S.T. dan 12 rangka kerja perniagaan praktikal" },
  { k: "Bentuk pengajian", them: "Mengikut jadual akademik yang ditetapkan institusi penganugerah", us: "Tiga hujung minggu berjadual sepanjang program selama enam bulan; peserta terus bekerja sepenuh masa" },
  { k: "Yuran program", them: "Yuran pengajian dan caj tambahan yang ditetapkan institusi", us: "Yuran standard RM10,000.00; biasiswa LIFE Innoversity terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis, dengan sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis" },
  { k: "Sifat kelayakan", them: "Ijazah MBA akademik daripada institusi penganugerah", us: "Sijil pengiktirafan program profesional CMI; bukan ijazah akademik bertauliah MQA" },
] as const;

export const CORE_PAGES_MS = {
  method: {
    eyebrow: "Kaedah keputusan pengurusan F.A.S.T.",
    title: "Ubah isu yang rumit menjadi keputusan yang jelas dan boleh dilaksanakan",
    intro: "F.A.S.T. bermula daripada isu perniagaan sebenar. Ia membantu anda menentukan masalah yang betul, menguji andaian, menimbang pilihan, dan mengubah keputusan menjadi pelan tindakan yang boleh dilaksanakan.",
    sections: [
      ["Langkah 1: Kenal pasti masalah sebenar", "Asingkan gejala di permukaan, fakta, kekangan dan andaian yang belum diuji, supaya keputusan pengurusan yang sebenarnya perlu dibuat menjadi jelas."],
      ["Langkah 2: Lihat keseluruhan sistem", "Analisis pihak terlibat, proses, sumber, kebergantungan dan kesan susulan — bukan sekadar merawat satu bahagian masalah."],
      ["Langkah 3: Bina pilihan yang boleh dibandingkan", "Gabungkan pemikiran prinsip pertama, pemikiran reka bentuk dan rangka kerja strategik untuk membentuk pilihan praktikal yang dinilai atas kriteria yang sama."],
      ["Langkah 4: Jelaskan asas keputusan", "Nyatakan bukti, pertimbangan untung rugi, risiko dan hasil yang dijangka, supaya pasukan memahami mengapa arah itu dipilih."],
      ["Langkah 5: Terjemahkan kepada tindakan", "Susun cadangan menjadi pelan tindakan perniagaan yang jelas pemiliknya, keutamaannya, langkah utamanya dan titik semakannya."],
      ["Penggunaan dalam program", "Peserta menggunakan kaedah ini terhadap isu perniagaan yang sedang mereka tangani. Maklum balas fasilitator tertumpu pada proses pertimbangan, logik pelaksanaan dan pelan tindakan — bukan hafalan teori."],
    ],
  },
  programme: {
    eyebrow: "Executive MBA enam bulan · Diiktiraf CMI (UK)",
    title: "Direka khas untuk pengurus berpengalaman yang sedang bekerja",
    intro: "Enam hari latihan, bimbingan dan satu projek perniagaan — semuanya diselesaikan dalam tempoh enam bulan, dan anda terus bekerja sepenuh masa sepanjang program. Jika anda layak, anda boleh bertanya secara berasingan tentang laluan lanjutan Chartered Manager.",
    sections: [
      ["Susunan program enam bulan", "Selesaikan enam hari latihan, tiga sesi intensif, projek perniagaan dan bimbingan. Peserta yang memenuhi keperluan program menerima sijil program Executive MBA yang diiktiraf CMI."],
      ["Laluan Chartered Manager yang berasingan", "Chartered Manager ialah laluan pilihan CMI yang berasingan, dengan kelayakan, penilaian dan yuran tersendiri. Ia tidak termasuk dalam program ini atau yuran yang diterbitkan, dan tidak diberikan secara automatik kerana menamatkan program."],
      ["Status profesional CMI", "Terma program CMI Recognised yang diterbitkan CMI menyatakan bahawa peserta yang menamatkan program menerima status Foundation Chartered Manager (fCMgr). CMI menguruskan pengaktifan status, pembaharuan keahlian dan penggunaan gelaran profesional."],
      ["Sifat program", "Ini ialah program pembangunan profesional untuk pengurus kanan. Ia bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia. Yuran penilaian Chartered Manager dan yuran keahlian CMI dikutip secara berasingan oleh CMI kecuali dinyatakan sebagai termasuk dalam jadual yuran rasmi."],
      ["Untuk siapa", PROGRAMME_AUDIENCE_MS],
      ["Hasil pembelajaran", "Pada akhir program, peserta membentangkan pelan tindakan terhadap isu perniagaan mereka sendiri, dinilai oleh fasilitator program dan pengamal industri."],
      ["Penjelasan kelayakan", "Ini ialah program pembangunan profesional yang diiktiraf oleh Chartered Management Institute (CMI), United Kingdom. Ia bukan ijazah akademik bertauliah Agensi Kelayakan Malaysia (MQA)."],
    ],
  },
  curriculum: {
    eyebrow: "Kurikulum · 12 modul",
    title: "Dua belas modul. Satu perjalanan kepimpinan bersepadu",
    intro: "Program eksekutif enam bulan yang menggabungkan metodologi F.A.S.T. dengan pembelajaran praktikal, bimbingan dan satu projek akhir berdasarkan perniagaan anda sendiri — tanpa peperiksaan, tanpa tesis.",
    sections: [
      ["Peringkat 1: Mencipta nilai", "Melalui F.A.S.T., Jobs-To-Be-Done, tinjauan masa hadapan, DNA strategi dan perancangan tindakan, takrifkan semula nilai pelanggan dan hala tuju perniagaan."],
      ["Peringkat 2: Menyampaikan nilai", "Melalui kepimpinan situasi, intervensi pasukan, pemikiran sistem dan pengurusan transformasi, terjemahkan strategi kepada tingkah laku pasukan dan mekanisme pelaksanaan."],
      ["Peringkat 3: Membentuk pelan tindakan", "Gunakan reka bentuk pengaruh, hubungan pihak berkepentingan dan analisis sistem perniagaan untuk menyiapkan pelan tindakan perniagaan yang dinilai fasilitator."],
      ["Dua belas modul", MODULES_MS.map((module) => `${module.c} ${module.title} — ${module.outcome}`).join("; ")],
      ["Kaedah penilaian", "Tiada peperiksaan atau tesis tradisional. Penilaian berasaskan penyertaan dalam sesi, proses bimbingan dan satu projek yang berkait terus dengan perniagaan peserta."],
    ],
  },
  fees: {
    eyebrow: "Yuran · Biasiswa · HRD Corp",
    title: "Yuran standard RM10,000.00; biasiswa terhad, dinilai berdasarkan kelayakan",
    intro: "Biasiswa LIFE Innoversity adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Sebarang anugerah dan yuran peserta berkenaan disahkan secara individu dalam bentuk bertulis; biasiswa tidak automatik dan bukan kod diskaun.",
    sections: [
      ["Apa yang termasuk dalam yuran program", "Sama ada membayar yuran standard atau menerima biasiswa, program merangkumi tiga sesi bersemuka dalam tempoh enam bulan, diagnostik kepimpinan peribadi, bimbingan fasilitator, alat pembelajaran dan penilaian projek perniagaan. Chartered Manager ialah laluan pilihan yang berasingan dengan kelayakan, penilaian dan yuran tersendiri, dan tidak termasuk dalam yuran program yang diterbitkan."],
      ["HRD Corp", HRD_CORP_CLAIM_MS],
      ["Yuran untuk pemohon Malaysia", "Yuran standard ialah RM10,000.00. Biasiswa LIFE Innoversity adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis; biasiswa tidak automatik dan bukan kod diskaun."],
      ["Bayaran individu", "Sebelum bayaran dibuat, pasukan program memberikan jadual ansuran bertulis kepada peserta individu, menyatakan jumlah setiap ansuran dan tarikh matang. Pilihan termasuk ansuran kad kredit RHB selama 6–12 bulan dan pelan bayaran empat bulan oleh ABC. Kos perjalanan dan penginapan tidak termasuk dalam yuran."],
      ["Urusan bayaran balik", REFUND_TERMS_MS],
    ],
  },
  intakes: {
    eyebrow: "Tarikh kohort 2026 — Bahasa Inggeris dan Mandarin",
    title: "Pilih kohort yang paling sesuai dengan jadual kerja anda",
    intro: "Setiap kohort dijalankan pada tiga hujung minggu sepanjang program, merentasi tiga sesi. Pasukan program akan sahkan kekosongan kohort apabila membalas pertanyaan anda.",
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
    title: "Dipimpin oleh pengamal industri, perunding dan jurulatih eksekutif",
    intro: "Fasilitator program datang daripada bidang strategi, operasi, bakat, kewangan, tadbir urus, perubahan dan bimbingan perniagaan. ABC mengesahkan barisan fasilitator setiap kohort dalam makluman kohort yang dihantar sebelum sesi pertama.",
    sections: [
      ["Pengalaman praktikal", "Barisan fasilitator merangkumi profesional yang pernah menerajui pembuatan berskala besar, kewangan syarikat tersenarai, transformasi organisasi, dasar kewangan, pembangunan bakat dan perundingan perniagaan."],
      ["Bimbingan peribadi", "Program menggunakan rangka kerja terhadap isu perniagaan peserta sendiri; projek menerima maklum balas daripada fasilitator dan pengamal industri."],
      ["Barisan fasilitator semasa", FACULTY.map((faculty) => `${faculty.n} (${faculty.focus})`).join("; ")],
      ["Fasilitator kohort", "ABC menyenaraikan fasilitator kohort, latar belakang dan modul yang dikendalikan dalam makluman kohort sebelum sesi pertama."],
    ],
  },
} as const;

export const FAQS_MS = [
  ["Bagaimana program ini disusun?", "Program berlangsung enam bulan, merangkumi enam hari latihan, tiga sesi hujung minggu, bimbingan dan projek perniagaan. Peserta yang memenuhi keperluan program menerima sijil program Executive MBA yang diiktiraf CMI. Chartered Manager ialah laluan pilihan CMI dengan kelayakan, penilaian dan yuran tersendiri, dan tidak termasuk dalam program ini atau yuran yang diterbitkan."],
  ["Bolehkah saya menamatkan program sambil bekerja sepenuh masa?", "Boleh. Program awam Malaysia berjalan selama enam bulan dengan enam hari latihan yang ditetapkan. Peserta menamatkan program sambil terus bekerja, dan menyiapkan projek aplikasi berasaskan isu perniagaan semasa mereka. Semak semua tarikh sesi yang diterbitkan sebelum mendaftar."],
  ["Adakah ini program pendidikan eksekutif atau ijazah MBA akademik?", "Ini ialah Executive MBA dalam kepimpinan perniagaan masa hadapan, dianugerahkan dan disokong oleh CMI. Program enam bulan ini ialah program pembangunan profesional dan pendidikan eksekutif — bukan ijazah akademik bertauliah MQA atau kelayakan yang dikawal selia."],
  ["Apakah yang diterima selepas berjaya menamatkan program?", "Peserta yang berjaya menerima sijil pengiktirafan CMI bagi program Future Ready Executive MBA. Format dan perkataan akhir sijil ditentukan oleh CMI. Chartered Manager ialah laluan CMI yang berasingan dan tidak diberikan secara automatik kerana menamatkan program ini."],
  ["Adakah saya menjadi Chartered Manager secara automatik selepas tamat?", "Tidak. Selepas menamatkan program, peserta menerima CMI Certificate of Recognition; di bawah skim CMI Recognised yang diterbitkan, peserta menerima status Foundation Chartered Manager. Chartered Manager (CMgr) penuh ialah penilaian profesional berasingan; laluan permohonan, kelayakan, penilaian, keahlian dan yuran ditentukan oleh CMI."],
  ["Adakah Chartered Manager termasuk dalam program?", "Tidak termasuk. Chartered Manager ialah laluan pilihan CMI yang berasingan; kelayakan, penilaian, keahlian dan yuran ditentukan oleh CMI. Pasukan program tidak menilai kelayakan permohonan atau menjanjikan sebarang keputusan."],
  ["Adakah ini ijazah bertauliah MQA?", "Bukan. Ini ialah program pembangunan profesional yang diiktiraf oleh CMI, United Kingdom — bukan ijazah akademik bertauliah MQA."],
  ["Bolehkah syarikat menggunakan levi HRD Corp?", HRD_CORP_CLAIM_MS],
  ["Bagaimana CMI menentukan laluan Chartered Manager?", "CMI kini menerbitkan laluan Full Assessment, CMI Fast Track dan Apprenticeship. Full Assessment terbuka kepada pengurus yang memiliki ijazah dalam pengurusan, perniagaan atau kepimpinan berserta tiga tahun pengalaman pengurusan, atau sekurang-kurangnya lima tahun pengalaman pengurusan tanpa kelayakan khusus pengurusan. Fast Track memerlukan kelayakan CMI yang tersenarai dan disiapkan dalam tempoh lima tahun berserta sekurang-kurangnya tiga tahun pengalaman pengurusan. Program ini diiktiraf CMI (CMI Recognised), bukan kelayakan CMI, jadi CMI perlu mengesahkan laluan yang berkenaan bagi setiap peserta."],
  ["Apakah terma bayaran balik?", REFUND_TERMS_MS],
  ["Bolehkah syarikat mendaftarkan pengasas atau pasukan kanannya?", "Program ini terbuka kepada eksekutif dan ke atas, termasuk pengurus kanan, pengarah, pemilik perniagaan dan pengasas. Untuk pembiayaan HRD Corp yang diterajui majikan, syarikat mesti berdaftar dengan HRD Corp, mempunyai baki levi dan mengemukakan permohonan sebelum program bermula. Pengasas atau pemilik boleh disertakan apabila syarikat mengesahkan peserta berada dalam senarai gaji. HRD Corp menentukan kelayakan dan jumlah yang diluluskan."],
  ["Bagaimana jika saya tidak dapat menghadiri satu sesi?", "Hubungi pasukan program sebelum sesi bermula. ABC akan mengesahkan secara bertulis urusan gantian melalui video yang ditetapkan atau kohort susulan yang ditetapkan."],
  ["Untuk siapa program ini?", PROGRAMME_AUDIENCE_MS],
  ["Bagaimana untuk mengetahui lebih lanjut?", "Anda boleh memilih panggilan ringkas, sesi penerangan dalam talian, pertemuan di lokasi yang dipersetujui, atau menerima maklumat terlebih dahulu. Pasukan program akan menghubungi mengikut pilihan anda; ini bukan tawaran kemasukan atau komitmen bayaran."],
] as const;
