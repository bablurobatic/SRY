/**
 * "Sorry, Madam Ji ❤️" — Complete Interactive Apology Web Application
 * React 18 Production Bundle / Modular Runtime
 */

(function () {
  'use strict';

  const { useState, useEffect, useCallback, useMemo, createElement: h } = React;

  // --- 1. DATA DEFINITIONS ---
  const SCREENS_DATA = [
    {
      id: 1,
      badge: "Chapter 1",
      title: "Hey Madam Ji ❤️",
      image: "./assets/images/screen1_hero.jpg",
      imageAlt: "Anime boy in black hoodie looking sincerely and apologetically at anime girl in pink sweater sitting on bed",
      paragraphs: [
        "Lagta hai aap mujhse gussa hain... 🥺",
        "Aur honestly, aapka gussa hona bhi samajh sakta hoon.",
        "Lekin main chahta hoon ki aap ek baar meri baat suno... please? ❤️"
      ],
      continueText: "Chalo, sunte hain →"
    },
    {
      id: 2,
      badge: "Chapter 2",
      title: "Meri Galti... 💔",
      image: "./assets/images/screen2_apology.jpg",
      imageAlt: "Anime boy holding a glowing pink heart saying SORRY with puppy eyes while girl looks pensive in the background",
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
      badge: "Chapter 3",
      title: "Us Waqt Kya Hua Tha? 📱",
      image: "./assets/images/screen3_interruption.jpg",
      imageAlt: "Anime boy holding his smartphone helplessly as an older family member takes it away",
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
      badge: "Chapter 4",
      title: "Raat 12 Baje... 🌙",
      image: "./assets/images/screen4_midnight.jpg",
      imageAlt: "Moonlit bedroom with clock showing 12:00 AM, boy waking up shocked looking at missed messages on his phone",
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
      badge: "Chapter 5",
      title: "Abhi Aap Kitna Gussa Hain? 😤",
      subtitle: "Sach sach batana... main sunne ke liye yahin hoon. ❤️",
      image: "./assets/images/screen5_mood.jpg",
      imageAlt: "Anime girl with crossed arms sitting on bed pouting cutely with puffed cheeks",
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
      badge: "Chapter 6",
      title: "Aap Kya Bolne Wali Thi? 👀",
      subtitle: "Main sach mein sunna chahta hoon. Aap jo comfortable feel karein, woh bata sakti hain. ❤️",
      image: "./assets/images/screen6_dare_question.jpg",
      imageAlt: "Anime girl with finger on chin thinking curiously while holding her secret diary with hearts",
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
      badge: "Chapter 7",
      title: "Hamari Dares! 💌",
      image: "./assets/images/screen7_dares.jpg",
      imageAlt: "Cozy room desk with dare challenge list, cute envelopes, phone, warm lights",
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
      badge: "Chapter 8",
      title: "Kya Aap Mujhe Maaf Karengi? 🥺❤️",
      subtitle: "Main dil se sorry kehna chahta hoon. Aap jo feel kar rahi hain, woh mere liye important hai.",
      image: "./assets/images/screen8_forgiveness.jpg",
      imageAlt: "Anime girl in soft pink sweater hugging a teddy bear with Sorry tag, cherry blossom petals drifting",
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
      badge: "Final Chapter 💌",
      title: "Mera Dil Se Sorry Letter 💌",
      image: "./assets/images/screen9_letter.jpg",
      imageAlt: "Anime boy and girl smiling gently together in bedroom with handwritten apology letter",
      continueText: "Shuru se padhein ↻"
    }
  ];

  const LETTER_CONTENT = {
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

  const HUG_MODAL_CONTENT = {
    title: "Virtual Warm Hug! 🧸❤️",
    message1: "Sending you the softest virtual hug, Madam Ji. ❤️",
    message2: "Jab aapka mann ho, main yahin hoon — aapki baat sunne ke liye. 🫶"
  };

  // --- 2. ROMANTIC SYNTH AUDIO ENGINE ---
  class RomanticBgmPlayer {
    constructor() {
      this.ctx = null;
      this.isPlaying = false;
      this.timerId = null;
      this.currentStep = 0;
      this.melodyNotes = [
        [349.23, 440.00, 523.25, 659.25], // F4, A4, C5, E5
        [329.63, 440.00, 523.25, 659.25], // E4, A4, C5, E5
        [293.66, 349.23, 440.00, 523.25], // D4, F4, A4, C5
        [233.08, 293.66, 349.23, 440.00], // Bb3, D4, F4, A4
      ];
      this.leadMelody = [
        659.25, 587.33, 523.25, 440.00,
        523.25, 659.25, 587.33, 523.25,
        440.00, 392.00, 349.23, 440.00,
        523.25, 440.00, 392.00, 349.23
      ];
    }

    init() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
    }

    playTone(freq, time, duration, gainValue = 0.08, isBell = false) {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = isBell ? 'sine' : 'triangle';
      osc.frequency.setValueAtTime(freq, time);

      gain.gain.setValueAtTime(0.001, time);
      gain.gain.linearRampToValueAtTime(gainValue, time + 0.04);
      gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(time);
      osc.stop(time + duration);
    }

    step() {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const chordIndex = Math.floor(this.currentStep / 4) % this.melodyNotes.length;
      const chord = this.melodyNotes[chordIndex];

      const note = chord[this.currentStep % chord.length];
      this.playTone(note, now, 1.8, 0.05, false);

      if (this.currentStep % 2 === 0) {
        const leadNote = this.leadMelody[(this.currentStep / 2) % this.leadMelody.length];
        this.playTone(leadNote, now + 0.05, 1.4, 0.04, true);
      }

      this.currentStep++;
      this.timerId = setTimeout(() => this.step(), 460);
    }

    toggle() {
      this.init();
      if (this.isPlaying) {
        this.isPlaying = false;
        if (this.timerId) clearTimeout(this.timerId);
        return false;
      } else {
        this.isPlaying = true;
        this.step();
        return true;
      }
    }
  }

  const bgm = new RomanticBgmPlayer();

  // --- 3. UI COMPONENTS ---

  // Floating Hearts background
  function FloatingHearts() {
    const hearts = useMemo(() => {
      return Array.from({ length: 14 }).map((_, i) => ({
        id: i,
        left: `${(i * 7.5 + Math.random() * 5) % 100}%`,
        delay: `${(i * 0.9).toFixed(1)}s`,
        duration: `${(9 + (i % 6)).toFixed(1)}s`,
        size: `${14 + (i % 5) * 4}px`,
        symbol: i % 4 === 0 ? '🌸' : i % 3 === 0 ? '✨' : '❤️',
        opacity: (0.35 + (i % 3) * 0.15).toFixed(2)
      }));
    }, []);

    return h('div', { className: 'floating-hearts-bg', 'aria-hidden': 'true' },
      hearts.map((heart) =>
        h('span', {
          key: heart.id,
          className: 'floating-heart',
          style: {
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
            opacity: heart.opacity
          }
        }, heart.symbol)
      )
    );
  }

  // Progress Header
  function ProgressHeader({ currentScreen, totalScreens, onSelectScreen, isPlayingAudio, onToggleAudio }) {
    const screenData = SCREENS_DATA.find((s) => s.id === currentScreen);
    const progressPercent = Math.round((currentScreen / totalScreens) * 100);

    return h('header', { className: 'site-header', role: 'banner' },
      h('div', { className: 'header-container' },
        h('div', {
          className: 'logo-area',
          onClick: () => onSelectScreen(1),
          role: 'button',
          tabIndex: 0,
          title: 'Back to beginning',
          onKeyDown: (e) => { if (e.key === 'Enter') onSelectScreen(1); }
        },
          h('span', { className: 'logo-icon', 'aria-hidden': 'true' }, '💌'),
          h('span', null, 'Sorry, Madam Ji ❤️')
        ),

        h('nav', { className: 'desktop-nav', 'aria-label': 'Chapters Navigation' },
          SCREENS_DATA.map((s) => {
            const isCurrent = s.id === currentScreen;
            const isCompleted = s.id < currentScreen;
            return h('button', {
              key: s.id,
              type: 'button',
              className: `nav-pill ${isCurrent ? 'active' : ''} ${isCompleted ? 'completed' : ''}`,
              onClick: () => onSelectScreen(s.id),
              'aria-current': isCurrent ? 'step' : undefined,
              title: `${s.badge}: ${s.title}`
            },
              h('span', null, `${s.id}.`),
              h('span', null, s.title.split(' ')[0])
            );
          })
        ),

        h('div', { className: 'header-actions' },
          h('button', {
            type: 'button',
            className: `audio-btn ${isPlayingAudio ? 'playing' : ''}`,
            onClick: onToggleAudio,
            'aria-label': isPlayingAudio ? 'Pause background music' : 'Play romantic background music',
            title: isPlayingAudio ? 'Pause sweet melody' : 'Play romantic melody 🎵'
          },
            h('span', { className: 'sound-wave', 'aria-hidden': 'true' },
              h('span', { className: 'wave-bar' }),
              h('span', { className: 'wave-bar' }),
              h('span', { className: 'wave-bar' })
            ),
            h('span', null, isPlayingAudio ? 'Music On' : 'Music Off')
          )
        )
      ),

      h('div', { className: 'progress-bar-wrapper' },
        h('div', { className: 'progress-info' },
          h('span', null, screenData ? screenData.badge : `Chapter ${currentScreen}`),
          h('span', { className: 'progress-counter' }, `${currentScreen} / ${totalScreens} (${progressPercent}%)`)
        ),
        h('div', {
          className: 'progress-track',
          role: 'progressbar',
          'aria-valuenow': currentScreen,
          'aria-valuemin': 1,
          'aria-valuemax': totalScreens
        },
          h('div', { className: 'progress-fill', style: { width: `${progressPercent}%` } })
        )
      )
    );
  }

  // Navigation Bar (Back & Continue)
  function NavigationControls({ currentScreen, totalScreens, continueText, onPrev, onNext, canContinue = true }) {
    return h('nav', { className: 'navigation-bar', 'aria-label': 'Pagination Controls' },
      currentScreen > 1
        ? h('button', {
            type: 'button',
            className: 'btn-secondary',
            onClick: onPrev,
            'aria-label': 'Previous screen'
          },
            h('span', { 'aria-hidden': 'true' }, '←'),
            h('span', null, 'Peeche')
          )
        : h('div', { style: { width: 1 } }),

      currentScreen < totalScreens && h('button', {
        type: 'button',
        className: 'btn-primary',
        onClick: onNext,
        disabled: !canContinue,
        'aria-label': `Next screen: ${continueText}`
      },
        h('span', null, continueText || 'Aage badhein →')
      )
    );
  }

  // Option Card
  function ResponseCard({ option, isSelected, onSelect }) {
    return h('button', {
      type: 'button',
      className: `option-card ${isSelected ? 'selected' : ''}`,
      onClick: () => onSelect(option),
      role: 'radio',
      'aria-checked': isSelected,
      tabIndex: 0,
      onKeyDown: (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          onSelect(option);
        }
      }
    },
      h('span', { className: 'option-icon', 'aria-hidden': 'true' }, option.icon),
      h('span', { className: 'option-label' }, option.label),
      h('span', { className: 'option-check', 'aria-hidden': 'true' }, isSelected ? '✓' : '')
    );
  }

  // Recurring Teddy Companion on Swing
  function TeddyCompanion({ currentScreen, onOpenHug }) {
    const [clicked, setClicked] = useState(false);

    const getCheerText = () => {
      switch (currentScreen) {
        case 1: return "Bablu's Sorry Teddy 🧸";
        case 2: return "I'm really sorry 🥺";
        case 3: return "Phone le liya tha 📵";
        case 4: return "12 baje utha tha 🌙";
        case 5: return "Madam Ji gussa hain? 🥺";
        case 6: return "Aapki dare sunni hai 💌";
        case 7: return "Pending dares continue? 😄";
        case 8: return "Plz maaf kar do na ❤️";
        case 9: return "Virtual hug for Madam Ji 🧸";
        default: return "Sorry Madam Ji ❤️";
      }
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 1200);
      if (onOpenHug && currentScreen === 9) {
        onOpenHug();
      }
    };

    return h('aside', {
      className: 'teddy-companion-wrapper',
      'aria-label': 'Apology Teddy Companion holding Sorry board'
    },
      h('div', {
        className: 'teddy-swing-container',
        onClick: handleClick,
        title: "Bablu's Apology Teddy — Click for a gentle wiggle!",
        role: 'button',
        tabIndex: 0,
        onKeyDown: (e) => {
          if (e.key === 'Enter' || e.key === ' ') handleClick();
        }
      },
        h('div', { className: 'teddy-rope-top', 'aria-hidden': 'true' }),
        h('div', { className: `teddy-frame ${clicked ? 'teddy-wiggle' : ''}` },
          h('img', {
            src: './assets/images/teddy_swing.jpg',
            alt: 'Cute fluffy teddy bear on a wooden swing holding a board saying Sorry',
            loading: 'eager'
          })
        ),
        h('span', { className: 'teddy-tooltip' }, getCheerText())
      )
    );
  }

  // Virtual Hug Modal
  function VirtualHugModal({ isOpen, onClose }) {
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (e.key === 'Escape' && isOpen) onClose();
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return h('div', {
      className: 'modal-overlay',
      onClick: onClose,
      role: 'dialog',
      'aria-modal': 'true',
      'aria-labelledby': 'hug-modal-title'
    },
      h('div', {
        className: 'modal-content',
        onClick: (e) => e.stopPropagation()
      },
        h('div', { className: 'modal-image-box' },
          h('img', {
            src: './assets/images/virtual_hug.jpg',
            alt: 'Two cute fluffy teddy bears hugging each other warmly with glowing hearts'
          })
        ),
        h('h3', { id: 'hug-modal-title', className: 'modal-title' }, HUG_MODAL_CONTENT.title),
        h('p', { className: 'modal-message-1' }, HUG_MODAL_CONTENT.message1),
        h('p', { className: 'modal-message-2' }, HUG_MODAL_CONTENT.message2),
        h('button', {
          type: 'button',
          className: 'modal-close-btn',
          onClick: onClose,
          autoFocus: true
        },
          h('span', null, 'Pyaar Se Close Karein 😊❤️')
        )
      )
    );
  }

  // Standard Screen Card (Screens 1 to 4)
  function NarrativeScreen({ screen, onPrev, onNext, isReversed = false }) {
    return h('article', { className: 'screen-card' },
      h('div', { className: `screen-grid ${isReversed ? 'reversed' : ''}` },
        h('div', { className: 'illustration-card' },
          h('img', {
            src: screen.image,
            alt: screen.imageAlt,
            loading: screen.id === 1 ? 'eager' : 'lazy'
          }),
          h('div', { className: 'illustration-badge' },
            h('span', null, screen.badge)
          )
        ),

        h('div', { className: 'screen-details' },
          h('span', { className: 'chapter-badge' }, `${screen.badge} / 9`),
          h('h2', { className: 'screen-title' }, screen.title),

          h('div', { className: 'dialogue-box' },
            screen.paragraphs && screen.paragraphs.map((p, idx) =>
              h('p', { key: idx, className: 'dialogue-text' }, p)
            )
          ),

          screen.speechBubble && h('div', { className: 'speech-bubble' },
            h('span', { 'aria-hidden': 'true' }, '💭'),
            h('span', null, screen.speechBubble)
          ),

          screen.decorativeNote && h('div', { className: 'decorative-note' },
            h('span', { 'aria-hidden': 'true' }, '📝'),
            h('span', null, screen.decorativeNote)
          ),

          h(NavigationControls, {
            currentScreen: screen.id,
            totalScreens: 9,
            continueText: screen.continueText,
            onPrev: onPrev,
            onNext: onNext
          })
        )
      )
    );
  }

  // Interactive Screen (Screens 5, 6, 7, 8)
  function InteractiveScreen({ screen, selectedOptionId, onSelectOption, onPrev, onNext, isReversed = false }) {
    const selectedOption = screen.options ? screen.options.find((o) => o.id === selectedOptionId) : null;

    return h('article', { className: 'screen-card' },
      h('div', { className: `screen-grid ${isReversed ? 'reversed' : ''}` },
        h('div', { className: 'illustration-card' },
          h('img', {
            src: screen.image,
            alt: screen.imageAlt,
            loading: 'lazy'
          }),
          h('div', { className: 'illustration-badge' },
            h('span', null, screen.badge)
          )
        ),

        h('div', { className: 'screen-details' },
          h('span', { className: 'chapter-badge' }, `${screen.badge} / 9`),
          h('h2', { className: 'screen-title' }, screen.title),
          screen.subtitle && h('p', { className: 'screen-subtitle' }, screen.subtitle),

          screen.paragraphs && h('div', { className: 'dialogue-box' },
            screen.paragraphs.map((p, idx) =>
              h('p', { key: idx, className: 'dialogue-text' }, p)
            )
          ),

          h('div', { className: 'options-container', role: 'radiogroup', 'aria-label': screen.title },
            h('div', { className: 'options-grid' },
              screen.options && screen.options.map((opt) =>
                h(ResponseCard, {
                  key: opt.id,
                  option: opt,
                  isSelected: selectedOptionId === opt.id,
                  onSelect: onSelectOption
                })
              )
            ),

            selectedOption && h('div', { className: 'acknowledgement-box', role: 'status', 'aria-live': 'polite' },
              h('span', { className: 'ack-icon', 'aria-hidden': 'true' }, '💌'),
              h('p', { className: 'ack-text' }, selectedOption.responseNote)
            )
          ),

          h(NavigationControls, {
            currentScreen: screen.id,
            totalScreens: 9,
            continueText: screen.continueText,
            onPrev: onPrev,
            onNext: onNext,
            canContinue: Boolean(selectedOptionId)
          })
        )
      )
    );
  }

  // Final Letter Screen (Screen 9)
  function FinalLetterScreen({ onPrev, onReadAgain, onOpenHug }) {
    return h('div', { className: 'letter-screen-container' },
      h('article', { className: 'letter-paper' },
        h('div', { className: 'letter-decor-stamp', 'aria-hidden': 'true' },
          h('span', null, 'BABLU'),
          h('span', null, 'MADAM JI'),
          h('span', null, '💌 12 AM')
        ),

        h('div', { style: { textAlign: 'center', marginBottom: 20 } },
          h('span', { className: 'chapter-badge' }, 'Final Chapter 💌'),
          h('h2', { className: 'screen-title', style: { marginTop: 8 } }, 'Mera Dil Se Sorry Letter 💌')
        ),

        h('div', {
          className: 'illustration-card',
          style: { maxHeight: 340, marginBottom: 28, borderRadius: 18 }
        },
          h('img', {
            src: './assets/images/screen9_letter.jpg',
            alt: 'Anime boy and girl smiling gently together in bedroom with handwritten apology letter',
            loading: 'lazy'
          })
        ),

        h('h3', { className: 'letter-salutation' }, LETTER_CONTENT.salutation),

        h('div', { className: 'letter-body' },
          LETTER_CONTENT.paragraphs.map((p, idx) =>
            h('p', { key: idx }, p)
          )
        ),

        h('p', { className: 'letter-signoff' }, LETTER_CONTENT.signOff),

        h('div', { className: 'letter-actions-center' },
          h('button', {
            type: 'button',
            className: 'btn-hug',
            onClick: onOpenHug,
            'aria-label': 'Ask for a small virtual hug'
          },
            h('span', null, 'Ek Chhota Hug? 🧸❤️')
          ),

          h('div', { style: { display: 'flex', gap: 12, alignItems: 'center' } },
            h('button', {
              type: 'button',
              className: 'btn-secondary',
              onClick: onPrev
            },
              h('span', null, '← Peeche')
            ),

            h('button', {
              type: 'button',
              className: 'btn-read-again',
              onClick: onReadAgain
            },
              h('span', null, 'Shuru Se Padhein ↻')
            )
          )
        )
      )
    );
  }

  // Root Application
  function App() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [answers, setAnswers] = useState({
      mood: null,
      dareQuestion: null,
      darePromise: null,
      forgiveness: null
    });
    const [isHugOpen, setIsHugOpen] = useState(false);
    const [isPlayingAudio, setIsPlayingAudio] = useState(false);

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [currentScreen]);

    const handleNext = useCallback(() => {
      if (currentScreen < 9) {
        setCurrentScreen((prev) => prev + 1);
      }
    }, [currentScreen]);

    const handlePrev = useCallback(() => {
      if (currentScreen > 1) {
        setCurrentScreen((prev) => prev - 1);
      }
    }, [currentScreen]);

    const handleReadAgain = useCallback(() => {
      setCurrentScreen(1);
      setIsHugOpen(false);
    }, []);

    const handleToggleAudio = useCallback(() => {
      const state = bgm.toggle();
      setIsPlayingAudio(state);
    }, []);

    // Keyboard navigation
    useEffect(() => {
      const handleKeyDown = (e) => {
        if (['INPUT', 'TEXTAREA'].includes(e.target?.tagName)) return;

        if (e.key === 'ArrowRight') {
          if (currentScreen === 5 && !answers.mood) return;
          if (currentScreen === 6 && !answers.dareQuestion) return;
          if (currentScreen === 7 && !answers.darePromise) return;
          if (currentScreen === 8 && !answers.forgiveness) return;
          handleNext();
        } else if (e.key === 'ArrowLeft') {
          handlePrev();
        }
      };

      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }, [currentScreen, answers, handleNext, handlePrev]);

    const currentScreenData = SCREENS_DATA.find((s) => s.id === currentScreen);

    return h('div', { className: 'app-wrapper' },
      h(FloatingHearts),

      h(ProgressHeader, {
        currentScreen: currentScreen,
        totalScreens: 9,
        onSelectScreen: (id) => setCurrentScreen(id),
        isPlayingAudio: isPlayingAudio,
        onToggleAudio: handleToggleAudio
      }),

      h('main', { className: 'main-content', id: 'main-content' },
        h('div', { className: 'content-container' },
          currentScreen <= 4 && h(NarrativeScreen, {
            screen: currentScreenData,
            onPrev: handlePrev,
            onNext: handleNext,
            isReversed: currentScreen % 2 === 0
          }),

          currentScreen === 5 && h(InteractiveScreen, {
            screen: currentScreenData,
            selectedOptionId: answers.mood,
            onSelectOption: (opt) => setAnswers((prev) => ({ ...prev, mood: opt.id })),
            onPrev: handlePrev,
            onNext: handleNext,
            isReversed: false
          }),

          currentScreen === 6 && h(InteractiveScreen, {
            screen: currentScreenData,
            selectedOptionId: answers.dareQuestion,
            onSelectOption: (opt) => setAnswers((prev) => ({ ...prev, dareQuestion: opt.id })),
            onPrev: handlePrev,
            onNext: handleNext,
            isReversed: true
          }),

          currentScreen === 7 && h(InteractiveScreen, {
            screen: currentScreenData,
            selectedOptionId: answers.darePromise,
            onSelectOption: (opt) => setAnswers((prev) => ({ ...prev, darePromise: opt.id })),
            onPrev: handlePrev,
            onNext: handleNext,
            isReversed: false
          }),

          currentScreen === 8 && h(InteractiveScreen, {
            screen: currentScreenData,
            selectedOptionId: answers.forgiveness,
            onSelectOption: (opt) => setAnswers((prev) => ({ ...prev, forgiveness: opt.id })),
            onPrev: handlePrev,
            onNext: handleNext,
            isReversed: true
          }),

          currentScreen === 9 && h(FinalLetterScreen, {
            onPrev: handlePrev,
            onReadAgain: handleReadAgain,
            onOpenHug: () => setIsHugOpen(true)
          })
        )
      ),

      h(TeddyCompanion, {
        currentScreen: currentScreen,
        onOpenHug: () => setIsHugOpen(true)
      }),

      h(VirtualHugModal, {
        isOpen: isHugOpen,
        onClose: () => setIsHugOpen(false)
      })
    );
  }

  // Mount React app
  const rootElement = document.getElementById('root');
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(h(App));
  }
})();
