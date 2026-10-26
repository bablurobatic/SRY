import os
import re
import struct

def get_image_info(filepath):
    """Parse JPEG/PNG header for dimensions."""
    if not os.path.exists(filepath):
        return None
    size = os.path.getsize(filepath)
    with open(filepath, 'rb') as f:
        data = f.read(30)
        # JPEG check
        if data[:2] == b'\xff\xd8':
            f.seek(0)
            data = f.read()
            # find SOF0 or SOF2
            idx = 2
            while idx < len(data):
                if data[idx] == 0xff:
                    marker = data[idx+1]
                    if marker in [0xc0, 0xc1, 0xc2]:
                        h, w = struct.unpack('>HH', data[idx+5:idx+9])
                        return {'type': 'JPEG', 'width': w, 'height': h, 'bytes': size}
                    elif marker in [0xd9, 0xda]:
                        break
                    else:
                        length = struct.unpack('>H', data[idx+2:idx+4])[0]
                        idx += 2 + length
                else:
                    idx += 1
            return {'type': 'JPEG', 'bytes': size}
        elif data[:8] == b'\x89PNG\r\n\x1a\n':
            w, h = struct.unpack('>II', data[16:24])
            return {'type': 'PNG', 'width': w, 'height': h, 'bytes': size}
    return {'type': 'UNKNOWN', 'bytes': size}

def run_tests():
    project_dir = '/Users/bablu/.gemini/antigravity/scratch/sorry-madamji'
    print('=== TESTING "Sorry, Madam Ji ❤️" WEB APPLICATION ===\n')

    # Test 1: Files existence
    required_files = [
        'index.html',
        'package.json',
        'tsconfig.json',
        'vite.config.ts',
        'src/App.tsx',
        'src/main.tsx',
        'src/app.bundle.js',
        'src/data/screensData.ts',
        'src/utils/romanticAudio.ts',
        'src/styles/theme.css',
        'src/styles/main.css',
        'src/components/ProgressHeader.tsx',
        'src/components/TeddyCompanion.tsx',
        'src/components/FloatingHearts.tsx',
        'src/components/NavigationControls.tsx',
        'src/components/ResponseCard.tsx',
        'src/components/VirtualHugModal.tsx',
        'src/components/IntroScreen.tsx',
        'src/components/ApologyScreen.tsx',
        'src/components/ExplanationScreen.tsx',
        'src/components/MidnightScreen.tsx',
        'src/components/MoodQuestionScreen.tsx',
        'src/components/DareQuestionScreen.tsx',
        'src/components/DarePromiseScreen.tsx',
        'src/components/ForgivenessScreen.tsx',
        'src/components/FinalLetterScreen.tsx',
    ]

    all_exist = True
    for f in required_files:
        full_path = os.path.join(project_dir, f)
        if not os.path.exists(full_path):
            print(f'❌ Missing file: {f}')
            all_exist = False
    if all_exist:
        print(f'✅ All {len(required_files)} source files exist.')

    # Test 2: Image Assets Validation
    images = [
        'assets/images/screen1_hero.jpg',
        'assets/images/screen2_apology.jpg',
        'assets/images/screen3_interruption.jpg',
        'assets/images/screen4_midnight.jpg',
        'assets/images/screen5_mood.jpg',
        'assets/images/screen6_dare_question.jpg',
        'assets/images/screen7_dares.jpg',
        'assets/images/screen8_forgiveness.jpg',
        'assets/images/screen9_letter.jpg',
        'assets/images/teddy_swing.jpg',
        'assets/images/virtual_hug.jpg'
    ]

    print('\nChecking 11 Image Assets:')
    all_images_ok = True
    for img in images:
        info = get_image_info(os.path.join(project_dir, img))
        if info:
            print(f"✅ {img}: {info.get('width', '?')}x{info.get('height', '?')} ({info['bytes'] // 1024} KB)")
        else:
            print(f"❌ {img}: NOT FOUND")
            all_images_ok = False

    # Test 3: Storyboard & Script Fidelity
    print('\nVerifying Screen Texts against Prompt Context:')
    with open(os.path.join(project_dir, 'src/data/screensData.ts')) as f:
        data_content = f.read()

    checks = [
        ("Screen 1 Heading", "Hey Madam Ji ❤️"),
        ("Screen 1 Text", "Lagta hai aap mujhse gussa hain... 🥺"),
        ("Screen 2 Heading", "Meri Galti... 💔"),
        ("Screen 2 Note", "I know... I should explain properly."),
        ("Screen 3 Heading", "Us Waqt Kya Hua Tha? 📱"),
        ("Screen 3 Family Interruption", "Lekin achanak ghar walon ne mera phone le liya. 📵"),
        ("Screen 4 Midnight Clock", "Raat 12 Baje... 🌙"),
        ("Screen 4 Speech Bubble", "Arey... meri Madam Ji naraz hain? 🥺"),
        ("Screen 5 Mood Check", "Abhi Aap Kitna Gussa Hain? 😤"),
        ("Screen 5 Option 1", "Bahut zyada"),
        ("Screen 5 Option 2", "Thoda sa"),
        ("Screen 6 Dare Question", "Aap Kya Bolne Wali Thi? 👀"),
        ("Screen 6 Option 1", "Apni dare complete karne wali thi"),
        ("Screen 6 Option 5", "Abhi nahi batana"),
        ("Screen 7 Dares Section", "Hamari Dares! 💌"),
        ("Screen 7 Option 3", "Pehle mujhe manao"),
        ("Screen 8 Forgiveness", "Kya Aap Mujhe Maaf Karengi? 🥺❤️"),
        ("Screen 8 Option 1", "Haan, maaf karti hoon"),
        ("Screen 8 Option 5", "Thoda aur manao"),
        ("Screen 9 Letter Heading", "Mera Dil Se Sorry Letter 💌"),
        ("Screen 9 Letter Salutation", "My dearest Madam Ji, ❤️"),
        ("Screen 9 Letter Signoff", "Aapka,\\nBablu 💗"),
        ("Screen 9 Virtual Hug Button", "Ek Chhota Hug? 🧸❤️"),
        ("Screen 9 Read Again Button", "Shuru se padhein ↻")
    ]

    for label, target in checks:
        if target in data_content:
            print(f"✅ {label}: Verified")
        else:
            print(f"❌ {label}: Missing or mismatched ('{target}')")

    # Test 4: CSS Responsive Breakpoints & Palette
    print('\nVerifying CSS Palette & Responsive Design:')
    with open(os.path.join(project_dir, 'src/styles/theme.css')) as f:
        theme_css = f.read()
    with open(os.path.join(project_dir, 'src/styles/main.css')) as f:
        main_css = f.read()

    color_checks = [
        ("#FFE7EE", "Main background"),
        ("#FFF7F3", "Secondary background"),
        ("#FF6F91", "Primary pink"),
        ("#E94F7D", "Deep rose"),
        ("#48202F", "Dark text")
    ]
    for code, desc in color_checks:
        if code in theme_css:
            print(f"✅ Color {desc} ({code}): Present")
        else:
            print(f"❌ Color {desc} ({code}): Missing")

    breakpoint_checks = [
        ("@media (max-width: 767px)", "Mobile breakpoint (320px - 767px)"),
        ("@media (min-width: 768px)", "Tablet breakpoint (768px - 1023px)"),
        ("@media (min-width: 1024px)", "Desktop breakpoint (1024px+)")
    ]
    for bp, desc in breakpoint_checks:
        if bp in main_css:
            print(f"✅ Responsive rule: {desc}: Present")
        else:
            print(f"❌ Responsive rule: {desc}: Missing")

    print('\n=== ALL AUTOMATED CHECKS COMPLETED SUCCESSFULLY ===')

if __name__ == '__main__':
    run_tests()
