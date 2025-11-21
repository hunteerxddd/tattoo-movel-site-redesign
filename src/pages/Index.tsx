import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";
import MediaGallery from "@/components/MediaGallery";
import SocialButtons from "@/components/SocialButtons";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Início */}
        <section id="inicio">
          <HeroSection />
          
          {/* Van Image - 50% larger */}
          <div className="container mx-auto px-4 py-8">
            <img
              src="https://i.imgur.com/z0skEFv.jpg"
              alt="Van Tattoo Móvel"
              className="w-full max-w-6xl mx-auto rounded-lg shadow-2xl"
              style={{ transform: 'scale(1.2)' }}
            />
          </div>

          {/* New Image */}
          <div className="container mx-auto px-4 py-8">
            <img
              src="https://i.imgur.com/QYmxPwE.jpg"
              alt="Tattoo Móvel"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
          </div>

          {/* Intro Text */}
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            <p className="text-lg md:text-xl text-foreground text-center leading-relaxed mb-8">
              A Tattoo Móvel leva tatuagem profissional diretamente para festas e eventos, proporcionando uma experiência única, segura e inesquecível. Não é tatuagem andando na van — é um estúdio móvel montado especialmente para o seu evento!
            </p>
            <SocialButtons buttons={["instagram", "whatsapp", "youtube"]} className="mt-8" />
          </div>
        </section>

        {/* Nossa História */}
        <section id="nossa-historia" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nossa história</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            A tattoomovel, nasceu na parceria de três tatuadores que se empenharam em um novo conceito de tatuagem, levando tatuagem pra eventos com praticidade, qualidade e segurança. Todo nosso material é 100% descartável
          </p>
          <SocialButtons buttons={["instagram", "whatsapp"]} className="mt-12" />
        </section>

        {/* Nossa estrutura */}
        <section id="nossa-estrutura" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nossa estrutura</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12 leading-relaxed">
            Contamos com uma van estilizada e um ônibus equipado para bem atende lo.
          </p>
          <SocialButtons buttons={["instagram", "whatsapp"]} className="mt-12" />
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Depoimentos</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Experiências reais de quem já viveu o momento Tattoo Móvel.
          </p>
          <div className="flex justify-center">
            <MediaGallery media={["https://imgur.com/O4KMo98"]} />
          </div>
          <div className="text-center mt-12">
            <a
              href="https://www.instagram.com/stories/highlights/18272954332100682/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Ver mais depoimentos no Instagram
            </a>
          </div>
          <SocialButtons buttons={["instagram"]} className="mt-12" />
        </section>

        {/* Tatto Flash */}
        <section id="tatto-flash" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Tatto Flash</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Tattoo Flash é uma tatuagem mais rápida e menor, perfeita para festas: ágil, bonita e ideal para quem quer algo estilizado sem longas esperas.
          </p>
          <MediaGallery
            media={[
              "https://imgur.com/XeXlczl",
              "https://imgur.com/nC3xmH3",
              "https://imgur.com/P8JmB3t",
              "https://imgur.com/qucuGr3",
              "https://imgur.com/y2K6ys0",
              "https://imgur.com/Kif2x9j",
              "https://imgur.com/4wLhIwa",
              "https://imgur.com/pRBQ3C0",
              "https://imgur.com/D4okJjY",
              "https://imgur.com/Y1ZPppJ",
              "https://imgur.com/DXFCR3L",
              "https://imgur.com/5bvYzQq"
            ]}
          />
          <div className="text-center mt-12">
            <p className="text-lg text-foreground mb-4">Quer ver mais? Clique no botão abaixo 👇</p>
            <a
              href="https://www.instagram.com/stories/highlights/17954626042750995/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300"
            >
              Ver mais no Instagram
            </a>
          </div>
          <SocialButtons buttons={["instagram", "whatsapp"]} className="mt-12" />
        </section>

        {/* Nosso busão */}
        <section id="nosso-busao" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nosso busão</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Estamos atendendo com busão na Av Brasil 28780 altura de Realengo, ao lado do motel Lamour.
          </p>
          <SocialButtons buttons={["whatsapp", "instagram"]} className="mt-12" />
        </section>

        {/* Nos eventos */}
        <section id="nos-eventos" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nos eventos</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Veja como trabalhamos dentro de festas e eventos. Estrutura organizada, segura e com materiais totalmente descartáveis.
          </p>
          <MediaGallery
            media={[
              "https://imgur.com/YgvVbwx",
              "https://imgur.com/TXSMnm7",
              "https://imgur.com/Qz0w2G8",
              "https://imgur.com/oyfe4BH",
              "https://imgur.com/eKEPfN0",
              "https://imgur.com/RTIJf5j",
              "https://imgur.com/LzhrgxD",
              "https://imgur.com/ZNxrH9j",
              "https://imgur.com/EWys3cs",
              "https://imgur.com/7maXHdg",
              "https://imgur.com/fLRze82",
              "https://imgur.com/BGTy6Jt",
              "https://imgur.com/8sUas9D",
              "https://imgur.com/mJrCYEc",
              "https://imgur.com/F062J4F",
              "https://imgur.com/Y0JQAEI",
              "https://imgur.com/VFWUBLE",
              "https://imgur.com/0Qk74Zb",
              "https://imgur.com/WCJIeP2"
            ]}
          />
          <SocialButtons buttons={["whatsapp", "instagram"]} className="mt-12" />
        </section>

        {/* Instagram */}
        <section id="instagram" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Instagram</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Confira nossos vídeos e fotos diretamente do Instagram.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "DNEFhJCsbnO",
              "DRNdnYtCY6r",
              "DRMzd_UkSf-",
              "DQt87GyER68",
              "DQo_dOUkWDE",
              "DQfN-gBER3d",
              "DP82NMljnRR",
              "DM8cEsMOtJ-",
              "DMLhWB3xleu",
              "DLlVmrxxDrM",
              "DKcioUFxMpx",
              "DDCWqusxrvs"
            ].map((postId) => (
              <a
                key={postId}
                href={`https://www.instagram.com/p/${postId}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="aspect-square bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 rounded-lg overflow-hidden group relative hover:shadow-2xl hover:shadow-pink-500/50 transition-all duration-300"
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-16 h-16 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-all" />
              </a>
            ))}
          </div>
          <SocialButtons buttons={["instagram"]} className="mt-12" />
        </section>

        {/* Fale conosco */}
        <section id="fale-conosco" className="container mx-auto px-4 py-24 max-w-4xl">
          <SectionTitle>Fale conosco</SectionTitle>
          <p className="text-lg text-foreground text-center mb-12">
            Entre em contato com a Tattoo Móvel para levar tatuagem profissional ao seu evento!
          </p>
          <SocialButtons buttons={["instagram", "whatsapp"]} className="mt-12" />
          <div className="mt-12 p-8 bg-card rounded-lg border border-tattoo-red/20">
            <h3 className="text-2xl font-serif font-bold text-center mb-6">Informações de Contato</h3>
            <div className="space-y-4 text-center">
              <p className="text-lg">
                <span className="font-semibold text-tattoo-red">Instagram:</span>{" "}
                <a href="https://www.instagram.com/tattoomovel/" target="_blank" rel="noopener noreferrer" className="hover:text-tattoo-red transition-colors">
                  @tattoomovel
                </a>
              </p>
              <p className="text-lg">
                <span className="font-semibold text-tattoo-red">WhatsApp:</span>{" "}
                <a href="https://wa.me/5521964478726" target="_blank" rel="noopener noreferrer" className="hover:text-tattoo-red transition-colors">
                  (21) 96447-8726
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* Nossa van */}
        <section id="nossa-van" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nossa van</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Conheça nossa van totalmente equipada, onde realizamos parte da preparação dos materiais e higienização.
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
            <img src="https://i.imgur.com/iTGbYGe.jpg" alt="Nossa van 1" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
            <img src="https://i.imgur.com/ILUJDrg.jpg" alt="Nossa van 2" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
            <img src="https://i.imgur.com/R4Gw98l.jpg" alt="Nossa van 3" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
          </div>
          <SocialButtons buttons={["whatsapp", "instagram"]} className="mt-12" />
        </section>
      </main>
      
      {/* Footer */}
      <footer className="border-t border-tattoo-red/20 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Tattoo Móvel - Tatuagem sobre rodas
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
