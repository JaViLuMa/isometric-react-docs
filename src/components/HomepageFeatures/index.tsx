import Heading from "@theme/Heading";
import clsx from "clsx";
import styles from "./styles.module.css";
import type { ReactNode } from "react";

type FeatureItem = {
  title: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "CSS Variable Driven",
    description: (
      <>
        Customize colors, edges, shadows, and animation behavior through CSS
        custom properties without changing component logic.
      </>
    ),
  },
  {
    title: "TypeScript First",
    description: (
      <>
        Complete type definitions with polymorphic component support keep
        composition predictable in TypeScript codebases.
      </>
    ),
  },
  {
    title: "One dependency",
    description: (
      <>
        Relies on only one dependency for conditional styling: <code>clsx</code>
        .
      </>
    ),
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="padding-horiz--md text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
