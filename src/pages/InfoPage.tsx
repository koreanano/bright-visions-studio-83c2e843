import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Link } from "react-router-dom";
import aboutHero from "@/assets/about-hero.jpg";
import aboutGlobal from "@/assets/global-network.jpg";


type Kind = "about" | "service" | "faq";

const SERVICE = {
  eyebrow: "Service · 서비스",
  title: "Tech Support + Reference Access",
  intro:
    "단순 공급을 넘어 소재 선정·사양 검토·맞춤 가공·레퍼런스 자료까지 — 실무에 필요한 전 과정을 지원합니다.",
  sections: [
    { h: "맞춤 입도 주문 제작", b: "고객이 요구하는 순도(99~99.9%)와 입도 사양에 맞춰 천연 규석 및 첨단 소재를 주문 제작 공급합니다." },
    { h: "엔지니어 기술지원", b: "용도·공정에 적합한 소재 선정 컨설팅과 샘플 평가, 적용 후 트러블슈팅까지 전담 엔지니어가 지원합니다." },
    { h: "레퍼런스 자료 제공", b: "산업별 실제 적용 사례, 사양서(TDS), MSDS 등 의사결정에 필요한 자료를 제공합니다." },
    { h: "안정적인 공급망", b: "광산 직영 운영과 글로벌 협력 네트워크를 통해 장기 공급의 안정성을 보장합니다." },
  ],
};

const FAQ = {
  eyebrow: "FAQ · 자주 묻는 질문",
  title: "자주 묻는 질문",
  intro: "고객이 자주 문의하시는 내용을 정리했습니다. 더 궁금한 점은 언제든 편하게 문의해 주세요.",
  sections: [
    {
      h: "Q. 샘플 제공이 가능한가요?",
      b: "동일한 제품이라도 입도(입자 크기), 순도 등에 따라 종류가 매우 세분화되어 있어 국내 재고 보유량은 한정적입니다. 중국 현지 공장을 통해 제공받으실 수 있으나, 소재 특성상 통관 절차 등에 시간이 소요될 수 있습니다. 긴급히 샘플이 필요하신 경우에는 사전 협의가 필요하며, 발송 시 발생되는 물류비(FedEx 등)는 기본적으로 수신자 부담입니다. 고객사의 FedEx 계정 번호(Customer Account)가 있으시면 현지 공장에서 직송으로 받아보실 수 있습니다. (샘플 자체의 유·무료 여부는 현지 공장 상황에 따라 달라집니다.)",
    },
    {
      h: "Q. 샘플이나 견적을 요청할 때 어떤 정보를 제공해야 하나요?",
      b: "단순히 \"지르코니아 샘플 가능한가요?\" 또는 \"나노 실리카 300nm 요청합니다\"와 같이 요청해 주시면, 적합한 스펙을 찾기 위해 여러 차례 추가 확인이 필요하여 대응이 늦어질 수 있습니다. 가장 좋은 방법은 필요하신 정확한 스펙(사양서)을 전달해 주시는 것입니다. 만약 정확한 지표를 모르실 경우, '어떤 용도/환경에서 사용하며, 어떤 효과를 기대하시는지' 자세한 내용을 남겨주시면 가장 적합한 제품으로 안내해 드리겠습니다.",
    },
    {
      h: "Q. 이중용도 품목(전략물자)이란 무엇인가요?",
      b: "이중용도 품목은 민수용뿐만 아니라 군수용으로도 전용될 수 있는 전략 자원 성격의 소재를 의미합니다. 이러한 품목은 일반 소재에 비해 통관 절차 및 수출입 승인이 훨씬 까다롭습니다. 공식 전략 자원으로 지정되지 않았더라도, 이에 준하는 엄격한 통관 절차가 적용되는 소재들이 다수 포함되어 있습니다.",
    },
    {
      h: "Q. 최종용도확인서(End-User Certificate)는 왜 필요한가요?",
      b: "이중용도 품목 및 이에 준하는 통관 절차가 적용되는 소재는 관련 법률 및 통관 규정에 따라 최종용도확인서 제출이 필수입니다. 이는 해당 소재가 어느 기업에서 어떤 목적으로 최종 사용되는지 확인하기 위한 법적 절차입니다.",
    },
    {
      h: "Q. 웹사이트 목록에 없는 제품도 공급 가능한가요?",
      b: "네, 가능합니다. 언제든지 편하게 문의해 주세요. 당장 공급 가능 여부와 상관없이 해당 소재의 시장 동향 및 기술 정보에 대해서도 전문적인 상담과 안내를 도와드리고 있습니다.",
    },
    {
      h: "Q. 최소 주문 수량(MOQ)이 정해져 있나요?",
      b: "제품마다 기본 포장 단위(예: 10kg, 25kg, 1ton 등)가 지정되어 있습니다. 다만, 연구 개발(R&D) 목적 등 특수한 상황인 경우 가능한 한 유연하게 수량을 조율해 드리고 있습니다.",
    },
    {
      h: "Q. 제품의 품질은 어떻게 보증되나요?",
      b: "당사와 협력하는 제조사는 대부분 품질경영시스템 인증을 보유했거나 해당 산업 분야에서 검증된 우수한 기업들입니다. 투명하게 생산 공장 정보를 공유해 드리며, 기본적으로 TDS(기술자료형태서) 및 CoA/QC(품질검사성적서)를 함께 제공하여 품질을 보증합니다.",
    },
    {
      h: "Q. 주문 후 납기는 얼마나 걸리나요?",
      b: "수량과 운송 방식에 따라 차이가 있습니다. 국내/현지 재고 보유 품목은 물류 방식에 따라 약 5일 ~ 15일 소요되며, 별도 주문 생산 품목은 수량 및 공장 사정에 따라 약 4주 ~ 6주 소요됩니다.",
    },
    {
      h: "Q. 특정 자료에서 본 제품이 저희 공정에 필요한 소재가 맞는지 확인받을 수 있나요?",
      b: "네, 가능합니다. 당사가 보유한 다양한 적용 사례(Application) 및 실제 산업 구현 데이터를 바탕으로 고객사의 공정에 적합한 소재인지 기술 자문을 제공해 드립니다.",
    },
  ],
};

const InquiryCTA = () => (
  <div className="mt-16 flex flex-col items-start justify-between gap-4 border border-border bg-muted/40 p-7 md:flex-row md:items-center">
    <div>
      <div className="text-xs font-semibold uppercase tracking-widest text-ink">Inquiry</div>
      <h3 className="mt-1 text-lg font-medium text-ink">제품·견적·기술 문의를 환영합니다</h3>
    </div>
    <Link to="/#contact" className="bg-ink px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-accent">
      문의하기
    </Link>
  </div>
);

const AboutPage = () => (
  <>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[440px] w-full overflow-hidden">
      <img
        src={aboutHero}
        alt="나노코리아 첨단소재 연구 환경"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1200px] flex-col justify-end px-6 pb-16 lg:px-12">
        <div className="text-xs font-semibold uppercase tracking-[0.3em] text-ink">
          About · 회사소개
        </div>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
          신뢰를 기반으로 <br className="hidden md:block" />
          한국 산업의 공급망을 잇습니다.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg">
          NANOKOREA — 글로벌 첨단소재 공급 파트너
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            Our Story
          </div>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-ink md:text-4xl">
            구조적 한계를<br />안정적인 공급망으로 극복합니다.
          </h2>
        </div>
        <div className="space-y-6 text-base leading-relaxed text-ink/75 lg:col-span-8 lg:text-lg">
          <p>
            나노코리아는 반도체·디스플레이·이차전지 산업에 필요한 고순도 첨단 무기소재를 공급하는 전문 기업입니다.
          </p>
          <p>
            국내 산업 환경의 구조적 한계와 제한적인 자원 공급 문제를 해결하기 위해, 글로벌 소재 기업들과의 협력 기반 공급망을 구축해 왔으며, 안정적인 원료 수급과 품질 중심의 공급 체계를 바탕으로 고객의 다양한 산업 요구에 대응하고 있습니다.
          </p>
          <p>
            또한 축적된 시장 경험과 지속적인 정보 수집을 기반으로 변화하는 글로벌 시장에 유연하게 대응하며, 단순한 거래를 넘어 신뢰를 기반으로 한 장기적인 파트너십을 지향합니다.
          </p>
          <p>
            나노코리아는 앞으로도 지속적인 시장 조사와 글로벌 네트워크 확장을 통해 경쟁력 있는 소재 공급 체계를 구축하고, 고객과 함께 성장하는 신뢰받는 공급 파트너가 되겠습니다.
          </p>
        </div>
      </div>
    </section>

    {/* Pillars */}
    <section className="border-y border-border bg-muted/40 py-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <div className="mb-12 max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            Our Values
          </div>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-ink md:text-4xl">
            세 가지 약속
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-3">
          {[
            {
              n: "01",
              h: "신뢰 기반 파트너십",
              b: "단순한 거래를 넘어 장기적 신뢰 관계를 통해 안정적인 협력 구조를 구축합니다.",
            },
            {
              n: "02",
              h: "품질과 안정성 우선",
              b: "글로벌 소재 기업과의 긴밀한 협력으로 검증된 원료만을 공급합니다.",
            },
            {
              n: "03",
              h: "유연한 고객 대응",
              b: "끊임없는 시장 조사와 축적된 경험으로 고객의 다양한 요구에 유연하게 대응합니다.",
            },
          ].map((p) => (
            <div key={p.n} className="flex flex-col gap-4 bg-background p-8 md:p-10">
              <div className="text-xs font-semibold tracking-[0.2em] text-ink">{p.n}</div>
              <h3 className="text-xl font-semibold text-ink">{p.h}</h3>
              <p className="text-sm leading-relaxed text-ink/70">{p.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Global */}
    <section className="py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-12">
        <div className="overflow-hidden">
          <img
            src={aboutGlobal}
            alt="나노코리아 글로벌 공급 네트워크"
            className="h-full w-full object-cover"
            loading="lazy"
            width={1920}
            height={1080}
          />
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            Global Network
          </div>
          <h2 className="mt-3 text-3xl font-medium leading-tight text-ink md:text-4xl">
            한국과 중국 거점을 통한<br />글로벌 공급망
          </h2>
          <div className="mt-8 space-y-5">
            <div className="border-l-2 border-accent pl-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Headquarters</div>
              <div className="mt-1 text-base text-ink">경기도 화성시 남양읍 화성로 1196</div>
              <div className="text-sm text-muted-foreground">주식회사 디솔루션</div>
            </div>
            <div className="border-l-2 border-accent pl-4">
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">China Office</div>
              <div className="mt-1 text-base text-ink">江苏徐州新沂经济开发区北京西路89号</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-24">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
        <InquiryCTA />
      </div>
    </section>
  </>
);

const SEO_MAP: Record<Kind, { title: string; description: string; path: string }> = {
  about: {
    title: "회사소개 | 나노코리아",
    description: "나노코리아는 첨단 나노소재 및 무기화합물을 전문으로 공급하는 B2B 기업입니다.",
    path: "/about",
  },
  service: {
    title: "서비스 안내 | 나노코리아",
    description: "맞춤 입도 주문 제작, 엔지니어 기술지원, 레퍼런스 자료 제공 등 나노코리아의 전문 서비스 안내.",
    path: "/service",
  },
  faq: {
    title: "자주 묻는 질문 (FAQ) | 나노코리아",
    description: "나노코리아 제품 및 서비스에 관한 자주 묻는 질문과 답변입니다.",
    path: "/faq",
  },
};

const InfoPage = ({ kind }: { kind: Kind }) => {
  const seo = SEO_MAP[kind];
  if (kind === "about") {
    return (
      <main className="min-h-screen bg-background">
        <SEO title={seo.title} description={seo.description} path={seo.path} />
        <Navigation />
        <AboutPage />
        <Footer />
      </main>
    );
  }
  const c = kind === "service" ? SERVICE : FAQ;
  return (
    <main className="min-h-screen bg-background">
      <SEO title={seo.title} description={seo.description} path={seo.path} />
      <Navigation />
      <section className="pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-12">
          <div className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ink">
            {c.eyebrow}
          </div>
          <h1 className="text-balance text-4xl font-medium leading-tight tracking-tight text-ink md:text-5xl">
            {c.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink/70">{c.intro}</p>

          <div className="mt-12 space-y-8">
            {c.sections.map((s, i) => (
              <div key={i} className="border-t border-border pt-6">
                <h2 className="mb-3 text-xl font-semibold text-ink">{s.h}</h2>
                <div className="text-base leading-relaxed text-ink/75">{s.b}</div>
              </div>
            ))}
          </div>

          <InquiryCTA />
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default InfoPage;
