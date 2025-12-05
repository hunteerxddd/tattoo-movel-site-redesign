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
          
          {/* New Image */}
          <div className="container mx-auto px-4 py-8">
            <img
              src="https://i.imgur.com/QYmxPwE.jpg"
              alt="Tattoo Móvel"
              className="w-full max-w-4xl mx-auto rounded-lg shadow-2xl"
            />
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
          <MediaGallery
            media={[
              "https://imgur.com/ZdcX8fX",
              "https://imgur.com/hmqAEvy",
              "https://imgur.com/K9b5fMq",
              "https://imgur.com/P35BARe"
            ]}
          />
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
          <div className="flex justify-center">
            <img 
              src="https://i.imgur.com/372kYnr.jpg" 
              alt="Nosso busão" 
              className="w-full max-w-3xl rounded-lg shadow-xl object-cover"
            />
          </div>
          <SocialButtons buttons={["whatsapp", "instagram"]} className="mt-12" />
        </section>

        {/* Nos eventos */}
        <section id="nos-eventos" className="container mx-auto px-4 py-24 max-w-7xl">
          <SectionTitle>Nos eventos</SectionTitle>
          <p className="text-lg text-foreground text-center max-w-4xl mx-auto mb-12">
            Conheça nossa van totalmente equipada, onde realizamos parte da preparação dos materiais e higienização.
          </p>
          <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto mb-12">
            <img src="https://i.imgur.com/iTGbYGe.jpg" alt="Nos eventos 1" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
            <img src="https://i.imgur.com/ILUJDrg.jpg" alt="Nos eventos 2" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
            <img src="https://i.imgur.com/ZdcX8fX.jpg" alt="Nos eventos 3" className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] rounded-lg shadow-xl object-cover" />
          </div>
          
          {/* New event photos with descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="flex flex-col items-center">
              <img 
                src="https://i.imgur.com/372kYnr.jpg" 
                alt="Na Prefeitura do Rio de Janeiro" 
                className="w-full rounded-lg shadow-xl object-cover mb-4"
              />
              <p className="text-foreground text-center font-medium">Na Prefeitura do Rio de Janeiro</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://i.imgur.com/Ygwd7iF.jpg" 
                alt="WSL Saquarema 2025" 
                className="w-full rounded-lg shadow-xl object-cover mb-4"
              />
              <p className="text-foreground text-center font-medium">WSL Saquarema 2025</p>
            </div>
            <div className="flex flex-col items-center">
              <img 
                src="https://i.imgur.com/VpCKroN.jpg" 
                alt="Empresa BLUE Man" 
                className="w-full rounded-lg shadow-xl object-cover mb-4"
              />
              <p className="text-foreground text-center font-medium">Empresa BLUE Man</p>
            </div>
          </div>
          <SocialButtons buttons={["whatsapp", "instagram"]} className="mt-12" />
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
