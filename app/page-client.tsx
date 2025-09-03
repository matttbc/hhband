'use client';

import { useState, useEffect } from 'react';
import Concerts from '@/components/Concerts';
import { Concert } from '@/lib/data';

interface PageClientProps {
  concerts: Concert[];
}

export default function PageClient({ concerts }: PageClientProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col items-center">
            <img 
              src={scrolled ? "/logo-blue-small.png" : "/logo-blue.png"}
              alt="Hemel Hempstead Band" 
              className={`transition-all duration-300 mb-4 ${scrolled ? 'h-16 md:h-20 mb-2' : 'h-32 md:h-40'}`}
            />
            <nav>
              <ul className="flex flex-wrap justify-center gap-4 md:gap-8">
                <li>
                  <a href="#hear" 
                     onClick={(e) => handleNavClick(e, 'hear')}
                     className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300"
                     style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                    Hear us play
                  </a>
                </li>
                <li>
                  <a href="#about" 
                     onClick={(e) => handleNavClick(e, 'about')}
                     className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300"
                     style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                    About us
                  </a>
                </li>
                <li>
                  <a href="#join" 
                     onClick={(e) => handleNavClick(e, 'join')}
                     className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300"
                     style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                    Join us
                  </a>
                </li>
                <li>
                  <a href="/gallery" 
                     className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300"
                     style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="#contact" 
                     onClick={(e) => handleNavClick(e, 'contact')}
                     className="text-blue-800 hover:text-blue-600 font-semibold transition-colors duration-300"
                     style={{fontFamily: "'Optima', 'Trebuchet MS', sans-serif"}}>
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <img src="http://www.hemelhempsteadband.co.uk/wp-content/uploads/2023/04/Band-Photo-2023-edited.jpg" 
             alt="Hemel Hempstead Band 2023" 
             className="w-full h-64 md:h-96 lg:h-[500px] object-cover object-center" />
      </section>

      <main className="container mx-auto px-4 py-8">
        <section id="hear" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Hear Us Play</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Upcoming Performances</h3>
              <Concerts concerts={concerts} />
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Listen Online</h3>
                <p className="text-gray-700">Find recordings of our recent performances and rehearsals on our social media channels.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">About Us</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <p className="text-gray-700 leading-relaxed mb-6">
                Hemel Hempstead Band has been at the heart of the local community for over 100 years. We are a traditional brass band that performs at local events, competitions, and concerts throughout Hertfordshire.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Our repertoire spans from classical arrangements to contemporary pieces, film scores, and traditional brass band music. We pride ourselves on being an inclusive, friendly group that welcomes musicians of all abilities.
              </p>
              <div className="text-center mb-6">
                <a href="/history" className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">Learn About Our History</a>
              </div>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">25+</div>
                  <p className="text-gray-600">Active Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">100+</div>
                  <p className="text-gray-600">Years of History</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">20+</div>
                  <p className="text-gray-600">Annual Performances</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Join Us</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Become a Member</h3>
              <p className="text-gray-700 mb-6">
                We're always looking for new members! Whether you're a seasoned brass player or just starting out, we'd love to hear from you.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">What We Offer</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Weekly rehearsals every Thursday
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Instrument loan scheme available
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Friendly, supportive environment
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">✓</span>
                      Regular performances and social events
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-3">Rehearsal Details</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>When:</strong> Thursday evenings, 7:30-9:30 PM</li>
                    <li><strong>Where:</strong> Hemel Hempstead Community Centre</li>
                    <li><strong>What to bring:</strong> Your instrument and music stand</li>
                    <li><strong>First visit:</strong> Free taster session available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8 text-center">Contact</h2>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="font-semibold text-gray-800">Email</p>
                      <p className="text-gray-600">info@hemelhempsteadband.org.uk</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Phone</p>
                      <p className="text-gray-600">01442 123456</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">Address</p>
                      <p className="text-gray-600">
                        Hemel Hempstead Community Centre<br />
                        Paradise Lane<br />
                        Hemel Hempstead, HP2 4TF
                      </p>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800 mb-4">Follow Us</h3>
                  <p className="text-gray-700 mb-4">Stay updated with our latest news and performances on social media.</p>
                  <div className="flex gap-4">
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Facebook</a>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Twitter</a>
                    <a href="#" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors duration-300">Instagram</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-blue-900 text-white py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; {new Date().getFullYear()} Hemel Hempstead Band. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}