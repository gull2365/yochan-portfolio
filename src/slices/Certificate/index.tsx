import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `Certificate`.
 */
export type CertificateProps = SliceComponentProps<Content.CertificateSlice>;

/**
 * Component for "Certificate" Slices.
 */
const Certificate = ({ slice }: CertificateProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="mx-auto w-full max-w-7xl"
    >
      <Heading as="h3" size="sm">
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div key={index} className=" md:ml-12 md:mt-16">
          <Heading as="h3" size="sm">
            {item.title}
          </Heading>

          <div className="mt-1 flex w-fit items-center gap-1 text-2xl font-semibold tracking-tight text-slate-400">
            <span>{item.time_period}</span>{" "}
            {/* <span>{item.institution}</span> */}
          </div>
          {/* <div className="prose-lg prose-invert mt-4">
            <PrismicRichText field={item.description} />
          </div> */}
        </div>
      ))}
    </section>
  );
};

export default Certificate;
