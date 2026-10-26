/**
 * Romantic Ambient Music Generator using Web Audio API
 * Plays a gentle, peaceful, lofi music-box / kalimba romantic progression.
 * Completely client-side, zero network dependencies, 100% reliable.
 */

class RomanticBgmPlayer {
  private ctx: AudioContext | null = null;
  private isPlaying: boolean = false;
  private timerId: number | null = null;
  private currentStep: number = 0;

  // Romantic chord progression frequencies (Fmaj7 -> Am7 -> Dm7 -> Bbmaj7)
  private readonly melodyNotes = [
    // Fmaj7
    [349.23, 440.00, 523.25, 659.25], // F4, A4, C5, E5
    // Am7
    [329.63, 440.00, 523.25, 659.25], // E4, A4, C5, E5
    // Dm7
    [293.66, 349.23, 440.00, 523.25], // D4, F4, A4, C5
    // Bbmaj7
    [233.08, 293.66, 349.23, 440.00], // Bb3, D4, F4, A4
  ];

  private readonly leadMelody = [
    659.25, 587.33, 523.25, 440.00,
    523.25, 659.25, 587.33, 523.25,
    440.00, 392.00, 349.23, 440.00,
    523.25, 440.00, 392.00, 349.23
  ];

  public init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  private playTone(freq: number, time: number, duration: number, gainValue: number = 0.08, isBell: boolean = false) {
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

  private step = () => {
    if (!this.isPlaying || !this.ctx) return;

    const now = this.ctx.currentTime;
    const chordIndex = Math.floor(this.currentStep / 4) % this.melodyNotes.length;
    const chord = this.melodyNotes[chordIndex];

    // Play gentle arpeggio base note
    const note = chord[this.currentStep % chord.length];
    this.playTone(note, now, 1.8, 0.05, false);

    // Occasional gentle bell chime
    if (this.currentStep % 2 === 0) {
      const leadNote = this.leadMelody[(this.currentStep / 2) % this.leadMelody.length];
      this.playTone(leadNote, now + 0.05, 1.4, 0.04, true);
    }

    this.currentStep++;
    this.timerId = window.setTimeout(this.step, 450);
  };

  public toggle(): boolean {
    this.init();
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  public play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.step();
  }

  public pause() {
    this.isPlaying = false;
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  public getStatus(): boolean {
    return this.isPlaying;
  }
}

export const romanticBgm = new RomanticBgmPlayer();
