type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };
  hero: {
    name: string;
    p: string[];
  };
  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };
      email: {
        span: string;
        placeholder: string;
      };
      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: "Muhammedpyz — 3D Portfolyo",
    fullName: "Muhammed Mustafa Poyraz",
    email: "muhammed@example.com",
  },
  hero: {
    name: "Muhammedpyz",
    p: ["Merhaba, Ben Muhammed! 👋", "Yazılım Geliştirici | Java & Python Geliştirici | Sürekli Öğrenen"],
  },
  contact: {
    p: "İletişime Geçin",
    h2: "İletişim.",
    form: {
      name: {
        span: "Adınız",
        placeholder: "Adınız nedir?",
      },
      email: { span: "E-posta Adresiniz", placeholder: "E-posta adresiniz nedir?" },
      message: {
        span: "Mesajınız",
        placeholder: "Ne söylemek istersiniz?",
      },
    },
  },
  sections: {
    about: {
      p: "Giriş",
      h2: "Genel Bakış.",
      content: `Ben, React, Node.js ve Three.js gibi modern teknolojilerde deneyimli,
      TypeScript ve JavaScript konularında yetkin bir yazılım geliştiricisiyim.
      Hızlı öğrenen, müşterilerle yakın işbirliği içinde çalışan ve gerçek dünya
      sorunlarını çözen verimli, ölçeklenebilir ve kullanıcı dostu çözümler
      üreten biriyim. Fikirlerinizi hayata geçirmek için birlikte çalışalım!`,
    },
    experience: {
      p: "Şimdiye kadar yaptıklarım",
      h2: "Deneyimlerim.",
    },
    feedbacks: {
      p: "Başkaları ne diyor",
      h2: "Referanslar.",
    },
    works: {
      p: "Çalışmalarım",
      h2: "Projeler.",
      content: `Aşağıdaki projeler, yeteneklerimi ve deneyimimi gerçek dünya örnekleriyle
      göstermektedir. Her proje, kod depolarına ve canlı demolara bağlantılarla
      birlikte kısaca açıklanmıştır. Karmaşık problemleri çözme, farklı teknolojilerle
      çalışma ve projeleri etkili bir şekilde yönetme yeteneğimi yansıtır.`,
    },
  },
};
