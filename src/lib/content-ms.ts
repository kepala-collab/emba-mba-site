import { FACTS, FACULTY, INTAKES, PROGRAMME_POSITIONING_MS } from "@/lib/content";

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

// Mirror of HRD_CORP_CLAIM.label in content.ts.
export const HRD_CORP_CLAIM_LABEL_MS =
  "Pembiayaan HRD Corp yang diterajui majikan · tertakluk kepada kelulusan";

// Mirror of INCLUSIONS[5].s in content.ts.
export const INCLUSIONS_CMI_CERTIFICATE_MS =
  "Penyempurnaan program yang berjaya membawa kepada CMI Certificate of Recognition. Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI, dengan kelayakan, penilaian dan yuran tersendiri.";

// Mirror of CERTIFICATE_POSITIONING.professionalRelevance in content.ts.
export const CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS =
  "Sijil ini merekodkan penyempurnaan pembangunan pengurusan dan kepimpinan yang diiktiraf berdasarkan Professional Standard CMI, dan boleh disenaraikan dalam profil profesional. Ia tidak menjamin kenaikan pangkat, pekerjaan, kenaikan gaji atau sebarang hasil kerjaya lain.";

// Mirror of ENQUIRY_COMMITMENT in content.ts.
export const ENQUIRY_COMMITMENT_MS =
  "Pertanyaan tidak mengikat anda untuk mendaftar atau membayar.";

export const PROGRAMME_AUDIENCE_MS =
  "Sesuai untuk pemilik perniagaan, pengarah, pengurus besar dan pengurus kanan — mereka yang memikul tanggungjawab sebenar: hasil syarikat, pasukan, keputusan merentas jabatan atau hala tuju pertumbuhan.";

export const REFUND_TERMS_MS =
  "Terma pendaftaran ABC yang ditandatangani menyatakan kelayakan bayaran balik, tempoh notis, jumlah yang boleh dikembalikan, syarat pemulangan bahan pembelajaran dan tarikh pemprosesan. Peserta menerima dan menyemak terma tersebut sebelum membuat bayaran; tiada janji bayaran balik dibuat di luar terma yang ditandatangani.";

export const COMPARISON_MS = [
  { k: "Tempoh pengajian", them: "18–24 bulan", us: `${FACTS.durationMonths} bulan: ${FACTS.trainingDays} hari latihan, diselesaikan dalam ${FACTS.liveSessions} sesi berpandu` },
  { k: "Fokus pembelajaran", them: "Teori akademik, penyelidikan dan analisis kes", us: "Situasi perniagaan sebenar, keputusan strategik, dan rangka kerja yang boleh anda guna berulang kali" },
  { k: "Kaedah penilaian", them: "Tugasan atau peperiksaan, berserta tesis", us: "Projek amali berasaskan perniagaan peserta sendiri; tiada peperiksaan atau tesis tradisional" },
  { k: "Peranan fasilitator", them: "Pengajaran akademik dan penyeliaan penyelidikan", us: "Pengamal industri, perunding dan jurulatih eksekutif" },
  { k: "Alat utama", them: "Buku teks akademik, literatur penyelidikan dan kajian kes", us: `Metodologi F.A.S.T. dan ${FACTS.moduleCount} rangka kerja perniagaan praktikal` },
  { k: "Bentuk pengajian", them: "Mengikut jadual akademik yang ditetapkan institusi penganugerah", us: `${FACTS.liveSessions} hujung minggu berjadual sepanjang program selama ${FACTS.durationMonths} bulan; peserta terus bekerja sepenuh masa` },
  { k: "Yuran program", them: "Yuran pengajian dan caj tambahan yang ditetapkan institusi", us: `Yuran standard ${FACTS.priceStd}; biasiswa ${FACTS.scholarshipProvider} terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis, dengan sebarang anugerah dan yuran peserta disahkan secara individu dalam bentuk bertulis` },
  { k: "Sifat kelayakan", them: "Ijazah MBA akademik daripada institusi penganugerah", us: "Sijil pengiktirafan program profesional CMI; bukan ijazah akademik terakreditasi MQA" },
] as const;

export const CORE_PAGES_MS = {
  method: {
    eyebrow: "Kaedah keputusan pengurusan F.A.S.T.",
    title: "Ubah kerumitan ke keputusan",
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
    eyebrow: `Executive MBA ${FACTS.durationMonths} bulan · Diiktiraf CMI (UK)`,
    title: "Bawa satu keputusan sebenar. Pulang dengan kaedahnya.",
    intro: `Sepanjang ${FACTS.durationMonths} bulan, anda mengambil satu isu semasa dalam tanggungjawab anda sendiri dan membawanya daripada takrifan masalah kepada pelan tindakan bertulis yang disemak fasilitator. Ini berlaku dalam ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, dengan bimbingan individu dan satu projek amali perniagaan, sambil anda kekal dalam jawatan anda. ${PROGRAMME_POSITIONING_MS} Ia program pembangunan profesional bukan akademik selama enam bulan; bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`,
    sections: [
      [`Susunan program ${FACTS.durationMonths} bulan`, `Selesaikan ${FACTS.trainingDays} hari latihan, ${FACTS.liveSessions} sesi berpandu, projek amali perniagaan dan bimbingan. Peserta yang memenuhi keperluan program menerima CMI Certificate of Recognition. ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS}`],
      ["Laluan Chartered Manager yang berasingan", "Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI, dengan kelayakan, penilaian dan yuran tersendiri. Ia tidak termasuk dalam program ini atau yuran yang diterbitkan, dan tidak diberikan secara automatik kerana menamatkan program."],
      ["Status profesional CMI", "Terma program CMI Recognised yang diterbitkan CMI menyatakan bahawa peserta yang menamatkan program menerima status Foundation Chartered Manager (fCMgr). CMI menguruskan pengaktifan status, pembaharuan keahlian dan penggunaan gelaran profesional."],
      ["Sifat program", "Ini ialah program pembangunan profesional untuk pengurus kanan. Ia bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia. Yuran penilaian Chartered Manager dan yuran keahlian CMI dikutip secara berasingan oleh CMI kecuali dinyatakan sebagai termasuk dalam jadual yuran rasmi."],
      ["Untuk siapa program ini", PROGRAMME_AUDIENCE_MS],
      ["Hasil pembelajaran", "Pada akhir program, peserta membentangkan pelan tindakan bertulis terhadap isu perniagaan mereka sendiri — dengan keputusan, tindakan, pemilik dan ukuran — dinilai oleh fasilitator program dan pengamal industri, untuk pasukan yang perlu bertindak atasnya."],
      ["Penjelasan kelayakan", "Ini ialah program pembangunan profesional yang diiktiraf oleh Chartered Management Institute (CMI), United Kingdom. Ia bukan ijazah akademik terakreditasi Agensi Kelayakan Malaysia (MQA)."],
    ],
  },
  curriculum: {
    eyebrow: `Kurikulum · ${FACTS.moduleCount} modul`,
    title: `${FACTS.moduleCount} modul. Satu pelan pasukan anda boleh laksanakan.`,
    intro: `Sepanjang ${FACTS.durationMonths} bulan, anda membawa satu isu perniagaan sebenar melalui ${FACTS.moduleCount} modul aplikasi berasaskan kaedah F.A.S.T. Anda mentakrifkan masalah, mengujinya bersama jurulatih, dan menulisnya menjadi pelan tindakan dengan keputusan, tindakan, pemilik dan ukuran untuk semakan fasilitator.`,
    sections: [
      ["Peringkat 1: Mencipta nilai", "Melalui F.A.S.T., Jobs-To-Be-Done, tinjauan masa hadapan, DNA strategi dan perancangan tindakan, takrifkan semula nilai pelanggan dan hala tuju perniagaan."],
      ["Peringkat 2: Menyampaikan nilai", "Melalui kepimpinan situasi, intervensi pasukan, pemikiran sistem dan pengurusan transformasi, terjemahkan strategi kepada tingkah laku pasukan dan mekanisme pelaksanaan."],
      ["Peringkat 3: Membentuk pelan tindakan", "Gunakan reka bentuk pengaruh, hubungan pihak berkepentingan dan analisis sistem perniagaan untuk menyiapkan pelan tindakan perniagaan yang dinilai fasilitator. Pemilik dan ukuran yang jelas adalah kepimpinan berkhidmat (servant leadership) dalam tindakan — pelan itu menjadi sesuatu yang pasukan anda boleh laksanakan, bukan sekadar sesuatu yang anda selesaikan."],
      [`${FACTS.moduleCount} modul`, MODULES_MS.map((module) => `${module.c} ${module.title} — ${module.outcome}`).join("; ")],
      ["Kaedah penilaian", "Penilaian berasaskan penyertaan dalam sesi, proses bimbingan dan satu projek amali yang berkait terus dengan perniagaan peserta, tanpa peperiksaan atau tesis tradisional."],
    ],
  },
  fees: {
    eyebrow: "Yuran · Biasiswa · HRD Corp",
    title: `${FACTS.priceStd} yuran standard. Setiap syarat lain disahkan secara bertulis.`,
    intro: `Yuran menampung kerja ${FACTS.durationMonths} bulan ke atas satu isu perniagaan sebenar: ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual, bimbingan satu-ke-satu dan semakan projek, serta projek amali perniagaan dengan rangka kerja dan templat kerja yang disimpan peserta. Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian individu dan kelulusan bertulis. Sebarang anugerah dan yuran peserta berkenaan disahkan secara individu, secara bertulis. Biasiswa tidak automatik.`,
    sections: [
      ["Apa yang termasuk dalam yuran program", `Sama ada peserta membayar yuran standard atau menerima biasiswa, program merangkumi ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual dalam tempoh ${FACTS.durationMonths} bulan, bimbingan satu-ke-satu dan semakan projek, serta projek amali perniagaan dengan rangka kerja dan templat kerja yang disimpan peserta. ${INCLUSIONS_CMI_CERTIFICATE_MS} ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Ia bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia. Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI, dan tidak termasuk dalam yuran program yang diterbitkan.`],
      ["HRD Corp", `Majikan memohon. HRD Corp memutuskan. ${HRD_CORP_CLAIM_MS}`],
      ["Yuran untuk pemohon Malaysia", `Yuran standard ialah ${FACTS.priceStd}, ditetapkan oleh program. Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian individu dan kelulusan bertulis. Sebarang anugerah dan yuran peserta berkenaan disahkan secara individu, secara bertulis; biasiswa tidak automatik.`],
      ["Bayaran individu", "Sebelum bayaran dibuat, pasukan program memberikan jadual ansuran bertulis kepada peserta individu, menyatakan jumlah setiap ansuran dan tarikh matang. Pilihan termasuk ansuran kad kredit RHB selama 6–12 bulan dan pelan bayaran empat bulan oleh ABC. Kos perjalanan dan penginapan tidak termasuk dalam yuran."],
      ["Urusan bayaran balik", REFUND_TERMS_MS],
      ["Sebelum anda bertanya", `Tiada yuran dikenakan untuk meminta maklumat atau semakan kelayakan biasiswa. ${ENQUIRY_COMMITMENT_MS}`],
    ],
  },
  intakes: {
    eyebrow: "Tarikh kohort 2026 — Bahasa Inggeris dan Mandarin",
    title: "Pilih kohort yang paling sesuai dengan jadual kerja anda",
    intro: `Setiap kohort dijalankan pada ${FACTS.liveSessions} hujung minggu sepanjang program, merentasi ${FACTS.liveSessions} sesi. Pasukan program akan sahkan kekosongan kohort apabila membalas pertanyaan anda.`,
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
  ["Apakah yang berubah untuk saya sepanjang program?", `Anda membawa satu isu perniagaan sebenar dalam tanggungjawab anda sendiri, dan mengubahnya sepanjang ${FACTS.durationMonths} bulan menjadi satu pelan tindakan bertulis dengan keputusan, tindakan, pemilik dan ukuran, yang disemak oleh fasilitator. Rangka kerja dan templat kerja kekal bersama anda.`],
  ["Bolehkah saya meneruskan program ini sambil bekerja sepenuh masa?", `Boleh. Anda menyelesaikan ${FACTS.trainingDays} hari latihan merentasi ${FACTS.liveSessions} sesi berjadual mengikut tarikh yang diterbitkan, dan projek amali perniagaan berjalan dalam organisasi anda sendiri di antara sesi, sementara anda kekal dalam peranan anda.`],
  ["Apakah yang akan saya perolehi pada akhir program, dan apakah yang tidak?", `Peserta yang berjaya menerima CMI Certificate of Recognition bagi program Executive MBA. ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Chartered Manager ialah laluan CMI yang berasingan dan tidak wajib, ditentukan oleh CMI, dan tidak termasuk dalam program ini atau yuran yang diterbitkan.`],
  ["Adakah ini program pendidikan eksekutif atau ijazah MBA akademik?", `Ini ialah Executive MBA on Future Ready Business Leadership, dianugerahkan dan disokong oleh CMI. ${CERTIFICATE_POSITIONING_PROFESSIONAL_RELEVANCE_MS} Program ${FACTS.durationMonths} bulan ini ialah program pembangunan profesional dan pendidikan eksekutif — bukan ijazah akademik terakreditasi MQA atau kelayakan yang dikawal selia.`],
  ["Adakah ini ijazah terakreditasi MQA?", "Bukan. Ini ialah program pembangunan profesional yang diiktiraf oleh CMI, United Kingdom — bukan ijazah akademik terakreditasi MQA."],
  ["Berapakah kos program ini, secara bertulis?", `Yuran standard ialah ${FACTS.priceStd}. Biasiswa ${FACTS.scholarshipProvider} adalah terhad dan dianugerahkan secara terpilih kepada pemohon Malaysia yang layak, selepas penilaian dan kelulusan bertulis. Sebarang anugerah dan yuran peserta disahkan secara individu secara bertulis; biasiswa tidak automatik.`],
  ["Siapa yang menentukan pembiayaan majikan?", HRD_CORP_CLAIM_MS],
  ["Bolehkah syarikat mendaftarkan pengasas atau pasukan kanannya?", "Program ini terbuka kepada peserta peringkat eksekutif ke atas, termasuk pengurus kanan, pengarah, pemilik perniagaan dan pengasas. Untuk pembiayaan HRD Corp yang diterajui majikan, syarikat mesti berdaftar dengan HRD Corp, mempunyai baki levi dan mengemukakan permohonan sebelum program bermula. Pengasas atau pemilik boleh disertakan apabila syarikat mengesahkan peserta berada dalam senarai gaji. HRD Corp menentukan kelayakan dan jumlah yang diluluskan."],
  ["Bagaimana CMI menentukan laluan Chartered Manager?", "CMI kini menerbitkan laluan Full Assessment, CMI Fast Track dan Apprenticeship. Full Assessment terbuka kepada pengurus yang memiliki ijazah dalam pengurusan, perniagaan atau kepimpinan berserta tiga tahun pengalaman pengurusan, atau sekurang-kurangnya lima tahun pengalaman pengurusan tanpa kelayakan khusus pengurusan. Fast Track memerlukan kelayakan CMI yang tersenarai dan disiapkan dalam tempoh lima tahun berserta sekurang-kurangnya tiga tahun pengalaman pengurusan. Program ini diiktiraf CMI (CMI Recognised), bukan kelayakan CMI, jadi CMI perlu mengesahkan laluan yang berkenaan bagi setiap peserta."],
  ["Bagaimana jika saya tidak dapat menghadiri satu sesi?", "Hubungi pasukan program sebelum sesi bermula. ABC akan mengesahkan secara bertulis urusan gantian melalui video yang ditetapkan atau kohort susulan yang ditetapkan."],
  ["Apakah terma bayaran balik?", REFUND_TERMS_MS],
  ["Untuk siapa program ini?", PROGRAMME_AUDIENCE_MS],
] as const;
