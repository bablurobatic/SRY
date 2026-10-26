export interface OptionItem {
  id: string;
  icon: string;
  label: string;
  responseNote: string;
}

export interface ScreenData {
  id: number;
  screenKey: string;
  badge: string;
  title: string;
  subtitle?: string;
  paragraphs?: string[];
  speechBubble?: string;
  decorativeNote?: string;
  options?: OptionItem[];
  continueText: string;
  hasIllustration?: boolean;
}

export const SCREENS_DATA: ScreenData[] = [
  {
    id: 1,
    screenKey: "intro",
    badge: "Chapter 1",
    title: "Hey Madam Ji ❤️",
    paragraphs: [
      "Lagta hai aap mujhse gussa hain... 🥺",
      "Aur honestly, aapka gussa hona bhi samajh sakta hoon.",
      "Lekin main chahta hoon ki aap ek baar meri baat suno... please? ❤️"
    ],
    continueText: "Chalo, sunte hain →"
  },
  {
    id: 2,
    screenKey: "apology",
    badge: "Chapter 2",
    title: "Meri Galti... 💔",
    paragraphs: [
      "Aap kuch bolne wali thi...",
      "Aur main aapki baat poori sun nahi paaya. 🥺",
      "Mujhe pata hai aap apni dare complete karne wali thi aur mujhe batane wali thi.",
      "Main nahi chahta tha ki aapko lage ki main aapko ignore kar raha hoon.",
      "Aapka upset hona main samajh sakta hoon. ❤️"
    ],
    decorativeNote: "I know... I should explain properly.",
    continueText: "Thik hai, aage batao →"
  },
  {
    id: 3,
    screenKey: "explanation",
    badge: "Chapter 3",
    title: "Us Waqt Kya Hua Tha? 📱",
    paragraphs: [
      "Tum apni dare complete karne wali thi aur mujhe batane wali thi...",
      "Lekin achanak ghar walon ne mera phone le liya. 📵",
      "Main tumhari baat sun hi nahi paaya aur phir so gaya.",
      "Maine jaan-bujhkar conversation nahi chhodi thi.",
      "Jab main wapas utha, tab kaafi der ho chuki thi. 🥺"
    ],
    continueText: "Phir aage kya hua? →"
  },
  {
    id: 4,
    screenKey: "midnight",
    badge: "Chapter 4",
    title: "Raat 12 Baje... 🌙",
    paragraphs: [
      "Jab main raat ko utha...",
      "Tab mujhe pata chala ki meri Madam Ji bahut gussa hain. 🥺",
      "Aap apni baat batane wali thi, aur main us waqt aapke saath nahi tha.",
      "Mujhe sach mein afsos hai ki aapko wait karna pada. ❤️"
    ],
    speechBubble: "Arey... meri Madam Ji naraz hain? 🥺",
    continueText: "Abhi aap kaisa feel kar rahi ho? →"
  },
  {
    id: 5,
    screenKey: "mood",
    badge: "Chapter 5",
    title: "Abhi Aap Kitna Gussa Hain? 😤",
    subtitle: "Sach sach batana... main sunne ke liye yahin hoon. ❤️",
    options: [
      {
        id: "mood-1",
        icon: "😡",
        label: "Bahut zyada",
        responseNote: "Samajh sakta hoon, Madam Ji. Aapki baat adhuri reh gayi thi. Main sun raha hoon. ❤️"
      },
      {
        id: "mood-2",
        icon: "🥺",
        label: "Thoda sa",
        responseNote: "Thoda sa gussa bhi samajh sakta hoon, Madam Ji. 🥺"
      },
      {
        id: "mood-3",
        icon: "😐",
        label: "Normal",
        responseNote: "Normal rehne ke liye thank you, par mujhe apni galti ka ehsaas hai. ❤️"
      },
      {
        id: "mood-4",
        icon: "😊",
        label: "Ab thik hai",
        responseNote: "Achha ji, phir bhi ek sorry toh banta hai. ❤️"
      },
      {
        id: "mood-5",
        icon: "🥰",
        label: "Gussa nahi ab",
        responseNote: "Aap kitni achhi hain Madam Ji! Par main aage se poora dhyan rakhunga. 🫶"
      },
      {
        id: "mood-6",
        icon: "🤔",
        label: "Pata nahi khud bhi",
        responseNote: "Koi baat nahi, feelings mix hona normal hai. Main yahin hoon. ❤️"
      }
    ],
    continueText: "Aage chalo →"
  },
  {
    id: 6,
    screenKey: "dare-question",
    badge: "Chapter 6",
    title: "Aap Kya Bolne Wali Thi? 👀",
    subtitle: "Main sach mein sunna chahta hoon. Aap jo comfortable feel karein, woh bata sakti hain. ❤️",
    options: [
      {
        id: "dare-msg-1",
        icon: "💬",
        label: "Apni dare complete karne wali thi",
        responseNote: "Main sach mein woh dare dekhna/sunna chahta hoon jab aap batana chahein! 🥺❤️"
      },
      {
        id: "dare-msg-2",
        icon: "🎁",
        label: "Apni dare ka result batane wali thi",
        responseNote: "Result batane ka wait rahega mujhe, puri tarah se! 🎁❤️"
      },
      {
        id: "dare-msg-3",
        icon: "❤️",
        label: "Mujhe koi special baat bolni thi",
        responseNote: "Aapki special baatein mere liye sabse khaas hain. Main sab sununga. ❤️"
      },
      {
        id: "dare-msg-4",
        icon: "💌",
        label: "Kuch secret share karna tha",
        responseNote: "Aapka secret mere paas hamesha safe rahega. Jab mann ho tab kehna. 💌"
      },
      {
        id: "dare-msg-5",
        icon: "🤔",
        label: "Abhi nahi batana",
        responseNote: "Koi baat nahi, Madam Ji. Jab aapka mann ho tab bata dena. ❤️"
      },
      {
        id: "dare-msg-6",
        icon: "💗",
        label: "Kuch aur",
        responseNote: "Achha ji, jab aap chahein, apni baat mujhe bata dena. Main sununga. 🫶"
      }
    ],
    continueText: "Aage dekhte hain →"
  },
  {
    id: 7,
    screenKey: "dares-section",
    badge: "Chapter 7",
    title: "Hamari Dares! 💌",
    paragraphs: [
      "Yaad hai na, hum dono ek dusre ko dares de rahe the? 😄",
      "Aap apni dare complete karne wali thi aur mujhe batane wali thi...",
      "Aur main us waqt aapki baat sun hi nahi paaya. ❤️",
      "Jab aapka mann ho, hum apni pending dares continue kar sakte hain."
    ],
    options: [
      {
        id: "dares-choice-1",
        icon: "💗",
        label: "Apni dare complete karke mujhe bataungi",
        responseNote: "Yay! Main eagerly wait karunga, Madam Ji! 🥰❤️"
      },
      {
        id: "dares-choice-2",
        icon: "💬",
        label: "Thodi der baad",
        responseNote: "Bilkul, jab aap ready hon tab. ❤️"
      },
      {
        id: "dares-choice-3",
        icon: "🥺",
        label: "Pehle mujhe manao",
        responseNote: "Ji Madam Ji, koshish jaari hai. 🥺❤️"
      },
      {
        id: "dares-choice-4",
        icon: "😶",
        label: "Abhi nahi, baad mein",
        responseNote: "Thik hai, Madam Ji. Jab aapka mann ho tab. 🫶"
      }
    ],
    continueText: "Aage badhein →"
  },
  {
    id: 8,
    screenKey: "forgiveness",
    badge: "Chapter 8",
    title: "Kya Aap Mujhe Maaf Karengi? 🥺❤️",
    subtitle: "Main dil se sorry kehna chahta hoon. Aap jo feel kar rahi hain, woh mere liye important hai.",
    options: [
      {
        id: "forgive-1",
        icon: "💗",
        label: "Haan, maaf karti hoon",
        responseNote: "Thank you, Madam Ji. ❤️ Main aapki feelings ko seriously leta hoon."
      },
      {
        id: "forgive-2",
        icon: "🥺",
        label: "Thoda time chahiye",
        responseNote: "Bilkul. Jab aap ready hongi, tab baat karenge. ❤️"
      },
      {
        id: "forgive-3",
        icon: "💬",
        label: "Abhi nahi, pehle baat karni hai",
        responseNote: "Ji Madam Ji, pehle hum baat karenge aur main sirf sununga. ❤️"
      },
      {
        id: "forgive-4",
        icon: "💔",
        label: "Main abhi bhi gussa hoon",
        responseNote: "Samajh gaya, Madam Ji. Main aapki baat bhi sunna chahta hoon. ❤️"
      },
      {
        id: "forgive-5",
        icon: "🫶",
        label: "Thoda aur manao",
        responseNote: "Ji Madam Ji, ek last cute sorry aur ek virtual hug? 🧸❤️"
      },
      {
        id: "forgive-6",
        icon: "💭",
        label: "Kuch aur...",
        responseNote: "Aap jo bhi kehna chahein, main poore dil se sunne ko taiyaar hoon. ❤️"
      }
    ],
    continueText: "Mera letter padhein →"
  },
  {
    id: 9,
    screenKey: "final-letter",
    badge: "Final Chapter",
    title: "Mera Dil Se Sorry Letter 💌",
    continueText: "Shuru se padhein ↻"
  }
];

export const LETTER_CONTENT = {
  salutation: "My dearest Madam Ji, ❤️",
  paragraphs: [
    "Main jaanta hoon ki aap mujhse gussa hain, aur main samajh sakta hoon kyun.",
    "Hum dono ek dusre ko dares de rahe the. Aap apni dare complete karne wali thi aur mujhe batane wali thi. Lekin achanak ghar walon ne mera phone le liya, aur main aapki baat sun hi nahi paaya. Phir main so gaya.",
    "Jab raat ko lagbhag 12 baje utha, tab pata chala ki meri Madam Ji mujhse bahut naraz hain. 🥺",
    "Maine jaan-bujhkar aapko ignore nahi kiya tha, lekin main samajhta hoon ki aap wait kar rahi thi aur aapki baat adhuri reh gayi.",
    "Uske liye main dil se sorry hoon. ❤️",
    "Aap jo bhi bolna chahti thi, main woh sunna chahta hoon. Aapki dare ho, koi special baat ho, ya bas aapka mann ho kuch share karne ka — main chahta hoon ki aapko lage ki aapki baat mere liye important hai.",
    "Main ye promise nahi karunga ki kabhi koi interruption nahi hoga, lekin main koshish karunga ki jab bhi hum baat karein, main aapko dhyan se sunun aur agar kabhi achanak jaana pade toh, jab possible ho, aapko bata sakun.",
    "Aapko turant maaf karna zaroori nahi hai. Main bas chahta hoon ki aap meri baat samjhein, aur jab aap ready hon, main aapki baat bhi sun sakun.",
    "Thank you for being you, Madam Ji. ❤️"
  ],
  signOff: "Aapka,\nBablu 💗"
};

export const HUG_MODAL_CONTENT = {
  title: "Virtual Warm Hug! 🧸❤️",
  buttonText: "Ek Chhota Hug? 🧸❤️",
  message1: "Sending you the softest virtual hug, Madam Ji. ❤️",
  message2: "Jab aapka mann ho, main yahin hoon — aapki baat sunne ke liye. 🫶"
};
