import Link from 'next/link';
import { FaInstagram, FaYoutube, FaGlobe, FaLine } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-4 md:py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* CONTAINER UTAMA */}
        {/* Mobile: Flex Row (Kiri-Kanan) | Desktop: Grid 3 Kolom */}
        <div className="flex flex-row justify-between items-center md:grid md:grid-cols-2 md:items-start md:gap-8">

          <div className="flex items-center gap-2 md:gap-4">
            {/* Logo Image */}
            <div className="w-10 h-10 md:w-16 md:h-16 shrink-0">

              <img 
                src="/images/logo-bem.png" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            {/* Teks Logo */}
            <div className="flex flex-col">
              <span className="text-sm md:text-2xl font-bold text-black leading-tight">
                BEM Fasilkom
              </span>
              <span className="text-sm md:text-2xl font-semibold md:font-bold text-black leading-tight">
                Universitas Indonesia
              </span>
            </div>
          </div>

          <div className="flex flex-row justify-between items-start mt-6 md:mt-0">
                {/* --- 2. TENGAH: BEM APPS --- */}
            {/* HIDDEN di Mobile (sesuai request screenshot), BLOCK di Desktop */}
            <div className="hidden md:flex flex-1 flex-col items-start text-left">
                <div className="w-fit"> {/* Wrapper agar rata tengah visual tapi text rata kiri */}
                    <h3 className="text-xl font-bold text-black mb-4">BEM Apps</h3>
                    <ul className="space-y-3">
                    {['Web Utama', 'Web Utama', 'Web Utama'].map((item, idx) => (
                        <li key={idx}>
                        <Link href="/" className="text-pacil-blue-800 font-medium hover:underline text-lg">
                            {item}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>

            {/* --- 3. KANAN: SOCIAL MEDIA --- */}
            {/* Mobile: Row (Horizontal) | Desktop: Column (Vertikal ke kanan) */}
            <div className="flex flex-row gap-3 md:flex-col md:items-start md:gap-3">
                
                {/* Kita mapping datanya supaya rapi */}
                {[
                { icon: <FaLine />, label: "@BEMFasilkomUI", href: "#" },
                { icon: <FaInstagram />, label: "bemfasilkomui", href: "https://instagram.com" },
                { icon: <FaYoutube />, label: "BEM Fasilkom UI", href: "https://youtube.com" },
                { icon: <FaXTwitter />, label: "BEMFasilkomUI", href: "https://twitter.com" },
                { icon: <FaGlobe />, label: "bem.cs.ui.ac.id", href: "https://bem.cs.ui.ac.id" },
                ].map((social, idx) => (
                <a 
                    key={idx} 
                    href={social.href} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="group flex items-center gap-3 hover:text-pacil-blue-700 transition-colors"
                >
                    {/* ICON: Ukuran beda dikit antara mobile/desktop */}
                    <span className="text-black group-hover:text-pacil-blue-700 text-xl md:text-2xl">
                    {social.icon}
                    </span>
                    
                    {/* LABEL TEKS: Hidden di Mobile, Block di Desktop */}
                    <span className="hidden md:block text-black font-medium text-base group-hover:text-pacil-blue-700">
                    {social.label}
                    </span>
                </a>
                ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;