import image_d306c3649707eff3ded7bec558293537cd3036ba from 'figma:asset/d306c3649707eff3ded7bec558293537cd3036ba.png';
import image_af65474c0dd075a3e64121f4937099d429318bda from 'figma:asset/af65474c0dd075a3e64121f4937099d429318bda.png';
import image_07f779cc08205d3fee8280e6277763489d10b147 from 'figma:asset/07f779cc08205d3fee8280e6277763489d10b147.png';
import image_67d522caaf32dba93509795d9a73fb5d7d06e131 from 'figma:asset/67d522caaf32dba93509795d9a73fb5d7d06e131.png';
import image_3b4edcf7f6bf5d3f66a7f9c246627431a8646d7e from 'figma:asset/3b4edcf7f6bf5d3f66a7f9c246627431a8646d7e.png';
import image_0d3ea940d0f6d8369b90fee3ee59db5274ed252b from 'figma:asset/0d3ea940d0f6d8369b90fee3ee59db5274ed252b.png';
import image_465c9e36ddc9542a2506c6eb8763d7054df6cf91 from 'figma:asset/465c9e36ddc9542a2506c6eb8763d7054df6cf91.png';
import image_e2d6a2e1e9ecbbbf0034c90b7d6f8bc574f78cf8 from 'figma:asset/e2d6a2e1e9ecbbbf0034c90b7d6f8bc574f78cf8.png';
import image_544c17a6af9ea79c7cf9dfe95290a9b686c8977b from 'figma:asset/544c17a6af9ea79c7cf9dfe95290a9b686c8977b.png';
import image_146ed5365f8f20af6263c3126a67176429c8b04c from 'figma:asset/146ed5365f8f20af6263c3126a67176429c8b04c.png';
import image_78058db15e8ad94dce419094ad921cc487929adb from 'figma:asset/78058db15e8ad94dce419094ad921cc487929adb.png';
import image_34460463ee7c26680231ae3afca1f01408deae47 from 'figma:asset/34460463ee7c26680231ae3afca1f01408deae47.png';
import React from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import { Sparkles, Star, Award, Phone } from 'lucide-react';

export function BeforeAfterGallery() {
  const beforeAfterExamples = [
    {
      beforeImage: image_34460463ee7c26680231ae3afca1f01408deae47,
      afterImage: image_78058db15e8ad94dce419094ad921cc487929adb
    },
    {
      beforeImage: image_146ed5365f8f20af6263c3126a67176429c8b04c,
      afterImage: image_544c17a6af9ea79c7cf9dfe95290a9b686c8977b
    },
    {
      beforeImage: image_e2d6a2e1e9ecbbbf0034c90b7d6f8bc574f78cf8,
      afterImage: image_465c9e36ddc9542a2506c6eb8763d7054df6cf91
    },
    {
      beforeImage: image_3b4edcf7f6bf5d3f66a7f9c246627431a8646d7e,
      afterImage: image_0d3ea940d0f6d8369b90fee3ee59db5274ed252b
    },
    {
      beforeImage: image_67d522caaf32dba93509795d9a73fb5d7d06e131,
      afterImage: image_07f779cc08205d3fee8280e6277763489d10b147
    },
    {
      beforeImage: image_af65474c0dd075a3e64121f4937099d429318bda,
      afterImage: image_d306c3649707eff3ded7bec558293537cd3036ba
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50/50 to-[#f8faff] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-[#00B5FC]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#00245E]/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-[#00B5FC]/3 to-[#00245E]/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#00B5FC]/20 rounded-full px-8 py-4 mb-8 shadow-lg">
            <Star className="w-5 h-5 text-[#00245E]" />
            <span className="text-[#00245E] font-semibold text-lg">Rezultate Reale din Brașov</span>
          </div>
          
          <h2 className="text-4xl lg:text-6xl font-bold mb-6 text-gray-800 leading-tight">
            Înainte vs 
            <span className="text-brand-gradient"> După TapiClean</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descoperă transformările incredibile ale mobilierului nostru din Brașov, Rășnov, Codlea și împrejurimi. 
            <strong className="text-[#00245E]"> Glisează pentru a vedea diferența!</strong>
          </p>
        </div>

        {/* Interactive Gallery */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {beforeAfterExamples.map((example, index) => (
            <div key={index} className="group">
              <BeforeAfterSlider
                beforeImage={example.beforeImage}
                afterImage={example.afterImage}
                className="transform hover:scale-[1.02] transition-all duration-300"
              />
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto bg-white/95 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-[#00B5FC]/20 to-[#00245E]/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-tr from-[#00245E]/20 to-[#00B5FC]/20 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#e6f3ff] to-[#cce7ff] rounded-full px-8 py-4 mb-8 shadow-md">
                <Sparkles className="w-6 h-6 text-[#00245E]" />
                <span className="text-[#00245E] font-semibold text-lg">Transformarea Ta Următoarea</span>
              </div>
              
              <h3 className="text-3xl font-bold text-gray-800 mb-6">
                Vrei și tu rezultate ca acestea?
              </h3>
              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Obține aceleași rezultate spectaculoase pentru mobilierul tău din Brașov și împrejurimi.
                <br />
                <strong className="text-[#00245E]">Evaluare gratuită în maxim 2 ore!</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Button 
                  size="lg"
                  className="bg-brand-gradient hover:opacity-90 shadow-xl hover:shadow-2xl transition-all font-bold text-lg px-12 py-5"
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Sparkles className="w-6 h-6 mr-3" />
                  Vreau Transformarea Mea
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-[#00245E] text-[#00245E] hover:bg-[#e6f3ff] font-bold text-lg px-12 py-5"
                  onClick={() => window.open('tel:+40744112555')}
                >
                  <Phone className="w-6 h-6 mr-3" />
                  Sună: 0744 112 555
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
