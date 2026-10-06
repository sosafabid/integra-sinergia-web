import type { Dictionary } from "@/content/types";
import { Reveal } from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { WhatsAppIcon } from "@/components/ui/icons";
import { whatsappLink } from "@/config/site";
import { SystemDiagram } from "./SystemDiagram";

export function FinalCta({ dict }: { dict: Dictionary }) {
  const { finalCta, solutions, hero, whatsapp } = dict;
  const nodes = solutions.areas.map((a) => ({ id: a.id, label: a.label }));

  return (
    <section aria-labelledby="cta-final-title" className="on-dark relative overflow-hidden bg-green-900 text-sand-50">
      <div className="container-site relative grid items-center gap-12 py-24 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-7">
          <h2 id="cta-final-title" className="display-2">
            {finalCta.title} <span className="accent text-sand-400">{finalCta.titleAccent}</span>
          </h2>
          <p className="lead mt-6 max-w-xl text-sand-100/75">{finalCta.lead}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#contacto" variant="light">
              {finalCta.primary}
            </ButtonLink>
            <ButtonLink
              href={whatsappLink(whatsapp.defaultMessage)}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline-light"
              arrow={false}
              icon={<WhatsAppIcon className="size-5" aria-hidden="true" />}
            >
              {finalCta.whatsapp}
            </ButtonLink>
          </div>
        </Reveal>
        <div className="hidden lg:col-span-5 lg:block" aria-hidden="true">
          <SystemDiagram
            id="sysdiag-cta"
            nodes={nodes}
            center={hero.diagramCenter}
            title={hero.diagramTitle}
            tone="dark"
            animated={false}
            className="w-full opacity-70"
          />
        </div>
      </div>
    </section>
  );
}
